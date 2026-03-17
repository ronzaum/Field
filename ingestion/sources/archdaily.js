/**
 * archdaily.js — RSS ingestion for ArchDaily.
 *
 * Feed: https://www.archdaily.com/feed
 *
 * ArchDaily project entries follow the title pattern "Project Name / Architect".
 * Editorial articles, news, and opinion pieces do NOT contain " / " and are filtered out.
 *
 * Metadata extraction:
 *   - title / creator  → split on first " / " in <title>
 *   - location, year   → parsed from <content:encoded> HTML "project-specs" list
 *   - image_url        → <enclosure> tag url attribute
 *   - typology         → <category> tags
 *   - published_at     → <pubDate> converted to ISO 8601
 */

import RSSParser from "rss-parser";
import * as cheerio from "cheerio";
import { v4 as uuidv4 } from "uuid";
import { store } from "../lib/store.js";
import { parseLocation } from "../lib/parse-location.js";

const FEED_URL = "https://www.archdaily.com/feed";
const SOURCE = "archdaily";

/**
 * Parse the "project-specs" section from ArchDaily's <content:encoded> HTML.
 * Returns { location, country, year } — all nullable.
 */
function parseProjectSpecs(html) {
  if (!html) return { location: null, country: null, year: null };

  const $ = cheerio.load(html);
  let rawLocation = null;
  let year = null;

  // ArchDaily embeds specs as list items with labels like "Location:" and "Project Year:"
  $("li").each((_i, el) => {
    const text = $(el).text().trim();

    if (text.startsWith("Location:") || text.startsWith("Location :")) {
      rawLocation = text.replace(/^Location\s*:\s*/, "").trim();
    }

    if (text.startsWith("Project Year:") || text.startsWith("Project Year :")) {
      const yearStr = text.replace(/^Project Year\s*:\s*/, "").trim();
      const parsed = parseInt(yearStr, 10);
      if (!isNaN(parsed) && parsed > 1000 && parsed < 2100) {
        year = parsed;
      }
    }
  });

  const { location, country } = parseLocation(rawLocation);
  return { location, country, year };
}

/**
 * Fetch, parse, and store ArchDaily project entries.
 */
export async function ingestArchDaily() {
  console.log(`[archdaily] Fetching feed...`);

  const parser = new RSSParser({
    customFields: {
      item: [["content:encoded", "contentEncoded"]],
    },
  });

  const feed = await parser.parseURL(FEED_URL);
  console.log(`[archdaily] ${feed.items.length} items in feed`);

  // Filter: only entries with " / " in title (project entries)
  const projectItems = feed.items.filter((item) => item.title && item.title.includes(" / "));
  console.log(`[archdaily] ${projectItems.length} project entries after filtering`);

  const records = projectItems.map((item) => {
    // Split on FIRST " / " only — handles titles with multiple slashes
    const slashIndex = item.title.indexOf(" / ");
    const title = item.title.substring(0, slashIndex).trim();
    const creator = item.title.substring(slashIndex + 3).trim();

    // Extract structured metadata from HTML content
    const specs = parseProjectSpecs(item.contentEncoded);

    // Extract image URL from enclosure
    const imageUrl = item.enclosure?.url || null;

    // Extract typology from category tags (trimmed)
    const typology = (item.categories || []).map((c) => c.trim()).filter(Boolean);

    // Published date → ISO 8601
    const publishedAt = item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString();

    return {
      id: uuidv4(),
      title,
      creator,
      location: specs.location,
      country: specs.country,
      year: specs.year,
      source: SOURCE,
      source_url: item.link,
      image_url: imageUrl,
      typology,
      material: [],
      published_at: publishedAt,
      ingested_at: new Date().toISOString(),
    };
  });

  const newCount = store(SOURCE, records);
  return newCount;
}

// Run directly when executed as a script (not when imported by ingest.js)
const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/.*\//, ""));
if (isMain) {
  ingestArchDaily().catch((err) => {
    console.error("[archdaily] Fatal error:", err);
    process.exit(1);
  });
}
