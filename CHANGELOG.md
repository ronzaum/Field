# Changelog

## Unreleased

### Added
- **RSS ingestion pipeline** — `ingestion/` directory with scripts for ArchDaily, Dezeen, and Designboom
  - `ingestion/sources/archdaily.js` — parses `"Title / Architect"` format, extracts location + year from project-specs HTML
  - `ingestion/sources/dezeen.js` — parses `"Title by Architect"` format, classifies category tags into location vs typology
  - `ingestion/sources/designboom.js` — parses "project info" HTML blocks, falls back to `dc:creator`
  - `ingestion/lib/store.js` — JSON flat-file persistence with deduplication by `source_url`
  - `ingestion/lib/parse-location.js` — splits raw location strings into city + country
  - `ingestion/ingest.js` — unified runner, executes all three sources in sequence
- **GitHub Actions hourly cron** — `.github/workflows/ingest.yml`, auto-commits new records with `[bot] ingest` message
- **Live data on Search surface** — `src/data/load-references.ts` imports ingested JSON at build time, replaces dummy cards
- **Card images** — `ReferenceCard` now renders real project images from RSS feed enclosures (lazy loaded, object-fit cover)

### Changed
- `Reference` interface — added `image_url`, `source_url` fields; `year` is now nullable
- `SearchSurface` — imports `liveReferences` from `load-references.ts` instead of hardcoded `searchReferences`
- `ReferenceCard` — new `imageUrl` prop, renders `<img>` over placeholder when available
- Meta line handles null year gracefully (shows location only)
