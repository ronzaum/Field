# FIELD — Claude Code Context

## Reference documents
- FIELD_product_spec.md — full product spec, read this first
- docs/references/ — visual reference images (Palantir, OMA typography, GMT Weltzeit etc.)
- docs/ui-v2.png — approved UI direction, match this aesthetic

## What this is
A centralised reference retrieval tool for creative professionals.
Serious archival research tool. Data infrastructure with a human interface.
Not a consumer app. Not a mood board. Not Pinterest.

## Stack
- Next.js 14 App Router, TypeScript
- Tailwind CSS
- Postgres (not yet — dummy data for now)
- No backend yet — all data is hardcoded JSON

## Typography — three fonts only, no substitutions
- Barlow Condensed 700 — titles and primary labels, always uppercase
- EB Garamond 400 italic — creator/architect names only
- IBM Plex Mono 300/400 — all metadata, source tags, dates, system labels

## Colours — Night mode (default)
- Background: #070707
- Surface: #0e0e0e
- Border: rgba(255,255,255,0.10)
- Primary text: #edeae4
- Muted: rgba(237,234,228,0.42)
- Hint: rgba(237,234,228,0.20)

## Colours — Day mode
- Background: #f4f3ef
- Surface: #ebebE6
- Border: rgba(0,0,0,0.10)
- Primary text: #0a0908
- Muted: rgba(10,9,8,0.44)
- Hint: rgba(10,9,8,0.22)

## Rules — never break these
- Zero border radius on everything. Hard edges only.
- No colour in the UI except the monochrome system above
- No shadows, gradients, glows, blur
- Images are the only colour on screen
- No Inter, Roboto, or system fonts

## Three surfaces
1. Search — 3-col card grid, filter row, query input
2. Feed — 4-col card grid, chronological, today/this week toggle
3. Map — dark canvas with city markers, right panel populates on click

## Card metadata format
[SOURCE] ← mono 8px muted uppercase
TITLE ← Barlow Condensed Bold 15px uppercase
Creator name ← EB Garamond italic 11.5px muted
CITY · YEAR ← mono 7.5px muted uppercase

## Dummy data (9 cards for Search)
1. [ARCHDAILY] / TRELLICK TOWER / Ernő Goldfinger / LONDON · 1972
2. [DEZEEN] / UNITÉ D'HABITATION / Le Corbusier / MARSEILLE · 1952
3. [RIBA] / ROBIN HOOD GARDENS / Alison & Peter Smithson / LONDON · 1972
4. [DOMUS] / HABITAT 67 / Moshe Safdie / MONTRÉAL · 1967
5. [CCA] / BYKER WALL / Ralph Erskine / NEWCASTLE · 1974
6. [GETTY] / PARK HILL ESTATE / Lynn & Smith / SHEFFIELD · 1961
7. [WALLPAPER*] / NAKAGIN CAPSULE TOWER / Kisho Kurokawa / TOKYO · 1972
8. [ARCHDAILY] / MONTE AMIATA HOUSING / Carlo Aymonino / MILAN · 1970
9. [PIN-UP] / PRUITT-IGOE / Minoru Yamasaki / ST. LOUIS · 1954

## Current build status
- [x] Nav shell
- [x] Card component
- [x] Search surface
- [x] Night/day toggle
- [ ] Feed surface
- [ ] Map surface
- [ ] Save function
