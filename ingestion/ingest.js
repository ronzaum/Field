/**
 * ingest.js — Unified ingestion runner.
 *
 * Runs all three source scripts (ArchDaily, Dezeen, Designboom) in sequence
 * and logs the total new records per source. Designed to be called by
 * GitHub Actions cron or manually via `node ingestion/ingest.js`.
 */

import { ingestArchDaily } from "./sources/archdaily.js";
import { ingestDezeen } from "./sources/dezeen.js";
import { ingestDesignboom } from "./sources/designboom.js";

async function main() {
  console.log("=== FIELD Ingestion Pipeline ===\n");

  const results = {};

  // Run each source sequentially to avoid rate-limiting issues
  try {
    results.archdaily = await ingestArchDaily();
  } catch (err) {
    console.error("[archdaily] Error:", err.message);
    results.archdaily = -1;
  }

  console.log(); // blank line between sources

  try {
    results.dezeen = await ingestDezeen();
  } catch (err) {
    console.error("[dezeen] Error:", err.message);
    results.dezeen = -1;
  }

  console.log();

  try {
    results.designboom = await ingestDesignboom();
  } catch (err) {
    console.error("[designboom] Error:", err.message);
    results.designboom = -1;
  }

  // Summary
  console.log("\n=== Summary ===");
  let totalNew = 0;
  for (const [source, count] of Object.entries(results)) {
    if (count === -1) {
      console.log(`  ${source}: FAILED`);
    } else {
      console.log(`  ${source}: ${count} new`);
      totalNew += count;
    }
  }
  console.log(`  total: ${totalNew} new records`);

  // Exit with error code if any source failed
  const anyFailed = Object.values(results).some((c) => c === -1);
  if (anyFailed) process.exit(1);
}

main();
