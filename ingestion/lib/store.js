/**
 * store.js — JSON flat-file persistence with deduplication.
 *
 * Reads existing records from `ingestion/data/{source}.json`,
 * deduplicates incoming records by `source_url`, appends new ones,
 * and writes the merged array back to disk.
 *
 * Returns the count of newly added records.
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "data");

/**
 * Persist new records for a given source, skipping duplicates.
 *
 * @param {string} source   — source identifier, e.g. "archdaily"
 * @param {object[]} records — array of normalized records to store
 * @returns {number} count of new (non-duplicate) records written
 */
export function store(source, records) {
  const filePath = join(DATA_DIR, `${source}.json`);

  // Load existing records (or start with an empty array)
  let existing = [];
  if (existsSync(filePath)) {
    existing = JSON.parse(readFileSync(filePath, "utf-8"));
  }

  // Build a set of known source_urls for O(1) dedup lookups
  const knownUrls = new Set(existing.map((r) => r.source_url));

  // Filter to only genuinely new records
  const fresh = records.filter((r) => !knownUrls.has(r.source_url));

  if (fresh.length === 0) {
    console.log(`[store] ${source}: 0 new records (all duplicates)`);
    return 0;
  }

  // Append and write back
  const merged = [...existing, ...fresh];
  writeFileSync(filePath, JSON.stringify(merged, null, 2), "utf-8");

  console.log(`[store] ${source}: ${fresh.length} new records (${merged.length} total)`);
  return fresh.length;
}
