/**
 * load-references.ts — Merges live ingested JSON data into the Reference format.
 *
 * Reads all JSON files from ingestion/data/ via static import. Next.js/webpack
 * resolves these at build time, so the data refreshes on each deploy
 * triggered by the hourly cron commit.
 *
 * Falls back to the hardcoded dummy data if no ingested records exist.
 */

import { type Reference } from "./references";
import { searchReferences as dummyReferences } from "./references";
import archdailyData from "../../ingestion/data/archdaily.json";
import dezeenData from "../../ingestion/data/dezeen.json";
import designboomData from "../../ingestion/data/designboom.json";

interface IngestedRecord {
  id: string;
  title: string;
  creator: string;
  location: string | null;
  country: string | null;
  year: number | null;
  source: string;
  source_url: string;
  image_url: string | null;
  typology: string[];
  material: string[];
  published_at: string;
  ingested_at: string;
}

/**
 * Convert an ingested record to the UI Reference shape.
 */
function toReference(record: IngestedRecord, index: number): Reference {
  const paddedIndex = String(index + 1).padStart(3, "0") + "/";

  return {
    id: record.id,
    source: record.source.toUpperCase(),
    title: record.title.toUpperCase(),
    creator: record.creator,
    location: (record.location || record.country || "").toUpperCase(),
    year: record.year,
    index: paddedIndex,
    image_url: record.image_url,
    source_url: record.source_url,
  };
}

// Merge all sources, sorted by published_at (newest first)
const allIngested = [
  ...(archdailyData as IngestedRecord[]),
  ...(dezeenData as IngestedRecord[]),
  ...(designboomData as IngestedRecord[]),
].sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

/**
 * Live references from RSS ingestion, or dummy data if none exist.
 */
export const liveReferences: Reference[] =
  allIngested.length > 0
    ? allIngested.map(toReference)
    : dummyReferences;
