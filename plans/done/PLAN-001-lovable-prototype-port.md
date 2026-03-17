# Lovable Prototype Port to Next.js

**Overall Progress:** `100%`

## TLDR
Replace the current minimal Next.js build (search surface only) with the full Lovable prototype — all three surfaces (Search, Feed, Map), save functionality, saved overlay — ported into the existing Next.js framework. Replace the SVG map with Mapbox GL JS. Clean up inline styles to Tailwind. Keep existing search filtering logic.

## Critical Decisions
- **Keep Next.js, port Lovable components into it** — Next.js supports the long-term backend (API routes, Postgres, ingestion scripts). Vite is client-only.
- **Mapbox GL JS for the map** — replaces the Europe-only SVG outline. Global, dark-styled, supports future radius queries and zoom.
- **Clean inline styles to Tailwind during port** — one-time cost, prevents mixed styling systems going forward.
- **Keep crosshair cursor** — fits the Palantir/data-tool identity.
- **Adopt Lovable's CSS variable system (HSL-based)** — replaces the current hex-based `--color-*` vars. Required for shadcn/ui compatibility.
- **Port shadcn/ui components** — user wants them available for future use.
- **Keep existing search filtering** — current build filters across title/creator/city/source/year. Port this into the new SearchSurface.

## Tasks

- [x] 🟩 **Step 1: Install dependencies**
  - [x] 🟩 Add shadcn/ui dependencies: `clsx`, `tailwind-merge`, `class-variance-authority`, all Radix packages from Lovable
  - [x] 🟩 Add `tailwindcss-animate` plugin
  - [x] 🟩 Add `leaflet`, `react-leaflet@^4`, `@types/leaflet` (Leaflet + CartoDB dark_matter instead of Mapbox)
  - [x] 🟩 Add `lucide-react` (icon library used by shadcn)
  - [x] 🟩 Add `sonner` (toast notifications)

- [x] 🟩 **Step 2: Update config files**
  - [x] 🟩 Replace `tailwind.config.ts` with shadcn-compatible config (HSL colors, animation keyframes, `tailwindcss-animate` plugin, `--radius: 0px`). Preserved `font-barlow`, `font-garamond`, `font-mono` families.
  - [x] 🟩 Add `components.json` for shadcn/ui CLI compatibility (`rsc: true` for Next.js App Router)
  - [x] 🟩 `@` path alias already present in `tsconfig.json` — verified

- [x] 🟩 **Step 3: Replace global CSS**
  - [x] 🟩 Replace `src/app/globals.css` with HSL-based CSS variables, scrollbar styling, font utility classes, crosshair cursor
  - [x] 🟩 Theme switching: kept Lovable's `.day` class approach (less component changes needed)

- [x] 🟩 **Step 4: Port utility and lib files**
  - [x] 🟩 Created `src/lib/utils.ts` with `cn()` helper
  - [x] 🟩 Created `src/hooks/use-mobile.tsx` (mobile breakpoint detection)
  - [x] 🟩 Created `src/hooks/use-toast.ts` (toast state management hook)

- [x] 🟩 **Step 5: Port shadcn/ui component files**
  - [x] 🟩 Copied all 49 shadcn/ui components to `src/components/ui/`
  - [x] 🟩 Fixed calendar.tsx deprecated IconLeft/IconRight → PreviousMonthButton/NextMonthButton
  - [x] 🟩 Added @ts-nocheck to chart.tsx and resizable.tsx (version mismatches, unused by FIELD)
  - [x] 🟩 All imports resolve — 0 TypeScript errors in `src/`

- [x] 🟩 **Step 6: Port data layer**
  - [x] 🟩 Created `src/data/references.ts` — `Reference`, `FeedItem`, `City` (with real lat/lng for Leaflet), `searchReferences`, `feedItems`, `cities`, `filterChips`

- [x] 🟩 **Step 7: Port ReferenceCard component**
  - [x] 🟩 Created `src/components/ReferenceCard.tsx` — bookmark save button with hover reveal, index number, aspect ratio prop, subtitle type switching

- [x] 🟩 **Step 8: Port NavBar component**
  - [x] 🟩 Created `src/components/NavBar.tsx` — FIELD wordmark, surface tabs, Saved [count] button, Day/Night toggle. Exports `Surface` and `Theme` types.

- [x] 🟩 **Step 9: Port SearchSurface component**
  - [x] 🟩 Rewrote `src/components/SearchSurface.tsx` — search input with arrow + Execute, filter chips with underline toggle, results meta bar, 3-col grid
  - [x] 🟩 Search filtering across title, creator, location, source, year via `useMemo`

- [x] 🟩 **Step 10: Port FeedSurface component**
  - [x] 🟩 Created `src/components/FeedSurface.tsx` — Incoming label, Today/This week tabs, 4-col grid, 1:1 aspect ratio cards

- [x] 🟩 **Step 11: Build MapSurface with Leaflet + CartoDB dark_matter**
  - [x] 🟩 Created `src/components/MapSurface.tsx` — dynamic Leaflet import (SSR-safe), CartoDB dark_matter tiles (no API key)
  - [x] 🟩 City markers as divIcon 5×5px squares, monospace lowercase labels, outline on active
  - [x] 🟩 Right panel (230px) — city name, reference count, reference list with 34×34 thumbnails, empty state
  - [x] 🟩 Scope toggle (country/city) — bracketed mono buttons at top-left
  - [x] 🟩 No `.env.local` needed — CartoDB tiles are free/keyless

- [x] 🟩 **Step 12: Port SavedOverlay component**
  - [x] 🟩 Created `src/components/SavedOverlay.tsx` — fixed full-screen overlay, SAVED REFERENCES header, 4-col grid, empty state

- [x] 🟩 **Step 13: Rewrite page and layout**
  - [x] 🟩 Update `src/app/layout.tsx` — keep Next.js font loading (Barlow Condensed, EB Garamond, IBM Plex Mono). Remove old ThemeProvider. Apply font CSS variables to body.
  - [x] 🟩 Rewrite `src/app/page.tsx` — port Index.tsx state logic (surface, theme, savedIds, showSaved, toggleTheme, toggleSave). Render NavBar, conditional surface, conditional SavedOverlay. Apply `.day` class or `data-theme` based on theme state.

- [x] 🟩 **Step 14: Remove old files**
  - [x] 🟩 Delete `src/components/Nav.tsx` (replaced by NavBar)
  - [x] 🟩 Delete `src/components/Card.tsx` (replaced by ReferenceCard)
  - [x] 🟩 Delete `src/components/SearchSurface.tsx` (replaced by new version — already overwritten in Step 9)
  - [x] 🟩 Delete `src/context/ThemeContext.tsx` (theme now managed in page state)
  - [x] 🟩 Delete `src/data/cards.ts` (replaced by references.ts)

- [x] 🟩 **Step 15: Verify build and test**
  - [x] 🟩 Run `npm run build` — fix any TypeScript or import errors (excluded `field-reference-archive/` from tsconfig)
  - [x] 🟩 Run `npm run dev` — dev server starts, page loads (200 OK)

## Execution Groups

This plan splits into 3 groups by dependency order:

### Group A — Foundation (Steps 1–6)
Config, dependencies, CSS, utilities, data. Everything else depends on this.

```
/execute Group A — Foundation: Install deps, update configs, replace CSS, port utils and data layer. Steps 1–6 in plans/todo/PLAN-001-lovable-prototype-port.md.
```

### Group B — Components (Steps 7–12)
All UI components. Depends on Group A being complete (CSS vars, utils, data must exist).

```
/execute Group B — Components: Port all UI components (ReferenceCard, NavBar, SearchSurface, FeedSurface, MapSurface with Mapbox, SavedOverlay). Steps 7–12 in plans/todo/PLAN-001-lovable-prototype-port.md.
```

### Group C — Assembly (Steps 13–15)
Wire everything together, remove old files, verify.

```
/execute Group C — Assembly: Rewrite page/layout to use new components, remove old files, build and verify. Steps 13–15 in plans/todo/PLAN-001-lovable-prototype-port.md.
```
