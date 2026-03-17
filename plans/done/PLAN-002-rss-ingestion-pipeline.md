# RSS Ingestion Pipeline — Phase 0

**Overall Progress:** `100%`

## TLDR
Build ingestion scripts that pull architecture project data from three RSS feeds (ArchDaily, Dezeen, Designboom), parse structured metadata from each, and store normalized records as JSON. Proves the data pipeline works before standing up Postgres. Runs manually first, then hourly via GitHub Actions so nothing falls off the feed.

## Critical Decisions
- **JSON flat files first, Postgres later** — Phase 0 validates data extraction. Database comes in Phase 2.
- **ArchDaily first, then Dezeen, then Designboom** — ArchDaily has the cleanest title format (`"Project / Architect"`) and structured `project-specs` HTML. Dezeen and Designboom follow once the shared pipeline pattern is proven.
- **Hourly polling via GitHub Actions** — RSS feeds drop old entries (last ~20–50 items). Hourly cron on GitHub Actions runs free and doesn't depend on the local machine being awake.
- **Deduplication by `source_url`** — each run checks existing records before writing. No duplicates.
- **Filter for project entries only** — editorial articles, news, and opinion pieces are skipped. Each source has a different signal for this (title format, category tags, presence of project specs).
- **Auto-committing JSON is Phase 0 only** — GitHub Actions commits data files to the repo for simplicity. This is replaced by direct Postgres writes in Phase 2. Data files are checked into git (not gitignored) so the cron can persist them.

## Schema

Every record must conform to this shape (from the product spec, Section 14):

```typescript
{
  id:          string       // uuid
  title:       string       // project name
  creator:     string       // architect or studio
  location:    string       // city name (nullable)
  country:     string       // country name or ISO code (nullable)
  year:        number       // project year (nullable)
  source:      string       // "archdaily" | "dezeen" | "designboom"
  source_url:  string       // original article URL
  image_url:   string       // preview image URL from enclosure
  typology:    string[]     // from RSS categories where available
  material:    string[]     // rarely available, empty array default
  published_at: string      // ISO 8601, from RSS pubDate — needed for Feed surface chronological ordering
  ingested_at: string       // ISO 8601 timestamp
}
```

`location`, `country`, `year` are nullable — not every entry has parseable metadata. The record is still valid without them.

## Tasks

- [x] 🟩 **Step 1: Project scaffolding**
  - [x] 🟩 Create `ingestion/` directory at project root
  - [x] 🟩 Init `ingestion/package.json` with dependencies: `rss-parser`, `cheerio` (HTML parsing), `uuid`
  - [x] 🟩 Create `ingestion/data/` directory for output JSON files
  - [x] 🟩 Create `ingestion/data/.gitkeep` so the empty directory is tracked

- [x] 🟩 **Step 2: Shared utilities**
  - [x] 🟩 Create `ingestion/lib/store.js` — reads existing JSON from `ingestion/data/{source}.json`, deduplicates by `source_url`, appends new records, writes back. Returns count of new records added.
  - [x] 🟩 Create `ingestion/lib/parse-location.js` — takes a raw location string like `"Tuticorin, Tamil Nadu, India"` and returns `{ location: "Tuticorin", country: "India" }`. Splits on comma, first segment = city, last segment = country. Returns nulls if unparseable.

- [x] 🟩 **Step 3: ArchDaily ingestion script**
  - [x] 🟩 Create `ingestion/sources/archdaily.js`
  - [x] 🟩 Fetch RSS from `https://www.archdaily.com/feed`
  - [x] 🟩 Filter entries: only items where `<title>` contains ` / ` (project entries)
  - [x] 🟩 Parse title: split on first occurrence of ` / ` only → everything before = `title`, everything after = `creator` (handles titles with multiple slashes)
  - [x] 🟩 Parse `<content:encoded>` HTML with Cheerio: extract `Location`, `Project Year` from the `project-specs` list items
  - [x] 🟩 Extract `image_url` from `<enclosure>` tag
  - [x] 🟩 Extract `typology` from `<category>` tags (if present)
  - [x] 🟩 Extract `published_at` from `<pubDate>` tag, convert to ISO 8601
  - [x] 🟩 Build record matching schema, generate UUID, add `ingested_at` timestamp
  - [x] 🟩 Pass records to `store.js` for dedup and write to `ingestion/data/archdaily.json`

- [x] 🟩 **Step 4: Run and validate ArchDaily**
  - [x] 🟩 Run `node ingestion/sources/archdaily.js` and inspect output
  - [x] 🟩 Verify: records have title, creator, source_url, image_url populated
  - [x] 🟩 Verify: location and year are populated on entries that have `project-specs` HTML
  - [x] 🟩 Verify: editorial/news articles are filtered out
  - [x] 🟩 Verify: running the script twice does not create duplicates

- [x] 🟩 **Step 5: Dezeen ingestion script**
  - [x] 🟩 Create `ingestion/sources/dezeen.js`
  - [x] 🟩 Fetch RSS from `https://www.dezeen.com/architecture/feed/`
  - [x] 🟩 Filter entries: only items where `<title>` contains ` by ` (project entries vs editorial)
  - [x] 🟩 Parse title: split on last occurrence of ` by ` → first part = `title`, last part = `creator`
  - [x] 🟩 Extract location from `<category>` tags (Dezeen uses location names as categories)
  - [x] 🟩 Extract `image_url` from `<enclosure>` tag
  - [x] 🟩 Extract `typology` from remaining `<category>` tags (building types)
  - [x] 🟩 No reliable year field in feed metadata — set to `null` (body text sometimes contains year but not worth parsing in Phase 0)
  - [x] 🟩 Extract `published_at` from `<pubDate>` tag, convert to ISO 8601
  - [x] 🟩 Build record, pass to `store.js`, write to `ingestion/data/dezeen.json`

- [x] 🟩 **Step 6: Run and validate Dezeen**
  - [x] 🟩 Run `node ingestion/sources/dezeen.js` and inspect output
  - [x] 🟩 Verify: title/creator split is correct (no architect name left in title)
  - [x] 🟩 Verify: location categories are being captured
  - [x] 🟩 Verify: deduplication works

- [x] 🟩 **Step 7: Designboom ingestion script**
  - [x] 🟩 Create `ingestion/sources/designboom.js`
  - [x] 🟩 Fetch RSS from `https://www.designboom.com/architecture/feed/`
  - [x] 🟩 Parse `<content:encoded>` HTML with Cheerio: look for "project info" section to extract architect, location, year
  - [x] 🟩 If no "project info" block, fall back to `<dc:creator>` for creator and title as-is
  - [x] 🟩 Extract `image_url` from `<enclosure>` tag
  - [x] 🟩 Extract `typology` from `<category>` tags
  - [x] 🟩 Extract `published_at` from `<pubDate>` tag, convert to ISO 8601
  - [x] 🟩 Build record, pass to `store.js`, write to `ingestion/data/designboom.json`

- [x] 🟩 **Step 8: Run and validate Designboom**
  - [x] 🟩 Run `node ingestion/sources/designboom.js` and inspect output
  - [x] 🟩 Verify: project info parsing extracts metadata where available
  - [x] 🟩 Verify: fallback works for entries without project info blocks
  - [x] 🟩 Verify: deduplication works

- [x] 🟩 **Step 9: Unified runner**
  - [x] 🟩 Create `ingestion/ingest.js` — runs all three source scripts in sequence, logs total new records per source
  - [x] 🟩 Run `node ingestion/ingest.js` and confirm all three sources produce output

- [x] 🟩 **Step 10: GitHub Actions hourly cron**
  - [x] 🟩 Create `.github/workflows/ingest.yml` — runs `node ingestion/ingest.js` on `schedule: cron '0 * * * *'` (every hour)
  - [x] 🟩 Workflow commits new data to the repo if any new records were added (auto-commit with `[bot] ingest` message)
  - [x] 🟩 Test by triggering the workflow manually via `workflow_dispatch` *(workflow_dispatch enabled — trigger after pushing to GitHub)*

## Execution Groups

### Group A — Foundation + ArchDaily (Steps 1–4)
Scaffolding, shared utilities, first source ingestion, validation. Proves the pipeline works end-to-end.

```
/execute Group A — Foundation + ArchDaily: Create ingestion scaffolding, shared utilities (store, location parser), ArchDaily RSS parser, and validate output. Steps 1–4 in plans/todo/PLAN-002-rss-ingestion-pipeline.md.
```

### Group B — Dezeen + Designboom (Steps 5–8)
Two more sources using the same pipeline pattern. Each has different parsing logic.

```
/execute Group B — Dezeen + Designboom: Build Dezeen and Designboom ingestion scripts using the shared pipeline from Group A. Steps 5–8 in plans/todo/PLAN-002-rss-ingestion-pipeline.md.
```

### Group C — Runner + Cron (Steps 9–10)
Unified script and GitHub Actions automation.

```
/execute Group C — Runner + Cron: Create unified ingestion runner and GitHub Actions hourly cron workflow. Steps 9–10 in plans/todo/PLAN-002-rss-ingestion-pipeline.md.
```
