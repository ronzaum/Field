/**
 * designboom.js — RSS ingestion for Designboom.
 *
 * Feed: https://www.designboom.com/architecture/feed/
 *
 * Designboom does not use a strict title convention like ArchDaily or Dezeen.
 * Metadata extraction relies on parsing the <content:encoded> HTML for a
 * "project info" section. If absent, we fall back to <dc:creator> for the
 * architect name and use the title as-is.
 *
 * Metadata extraction:
 *   - creator, location, year → parsed from "project info" HTML block
 *   - fallback creator       → <dc:creator> tag
 *   - image_url              → <enclosure> tag or first <img> in content
 *   - typology               → <category> tags
 *   - published_at           → <pubDate> converted to ISO 8601
 */

import RSSParser from "rss-parser";
import * as cheerio from "cheerio";
import { v4 as uuidv4 } from "uuid";
import { store } from "../lib/store.js";
import { parseLocation } from "../lib/parse-location.js";

const FEED_URL = "https://www.designboom.com/architecture/feed/";
const SOURCE = "designboom";

/**
 * Parse Designboom's "project info" section from <content:encoded> HTML.
 *
 * Designboom embeds a block (often a <p> or series of lines) near the end of
 * articles with labels like "architect:", "location:", "year:". The format
 * is inconsistent — sometimes bold labels, sometimes plain text.
 *
 * @param {string|null} html — raw HTML from <content:encoded>
 * @returns {{ creator: string|null, location: string|null, country: string|null, year: number|null, fallbackImage: string|null }}
 */
function parseProjectInfo(html) {
  const result = { creator: null, location: null, country: null, year: null, fallbackImage: null };
  if (!html) return result;

  const $ = cheerio.load(html);

  // Grab the first image as a fallback if no enclosure
  const firstImg = $("img").first().attr("src") || null;
  result.fallbackImage = firstImg;

  // Designboom "project info" can appear in various forms:
  //   - Bold labels in <p> tags: "<strong>architect:</strong> Name"
  //   - Plain text lines: "architect: Name"
  //   - Inside a div/section with class or id containing "project-info"
  // We search all text nodes for key-value patterns.

  const fullText = $.text();

  // Look for "project info" section marker — everything after it is metadata
  const projectInfoIdx = fullText.toLowerCase().indexOf("project info");
  const searchText = projectInfoIdx >= 0 ? fullText.substring(projectInfoIdx) : fullText;

  // Extract architect/designer name
  const architectMatch = searchText.match(/(?:architect|design(?:er)?|studio)\s*:\s*(.+)/i);
  if (architectMatch) {
    const val = architectMatch[1].split("\n")[0].trim();
    if (val.length > 0 && val.length < 200) result.creator = val;
  }

  // Extract location
  const locationMatch = searchText.match(/location\s*:\s*(.+)/i);
  if (locationMatch) {
    const rawLoc = locationMatch[1].split("\n")[0].trim();
    const parsed = parseLocation(rawLoc);
    result.location = parsed.location;
    result.country = parsed.country;
  }

  // Extract year (look for "year:", "completed:", or a standalone 4-digit year near project info)
  const yearMatch = searchText.match(/(?:year|completed|completion)\s*:\s*(\d{4})/i);
  if (yearMatch) {
    const parsed = parseInt(yearMatch[1], 10);
    if (parsed > 1000 && parsed < 2100) result.year = parsed;
  }

  return result;
}

/**
 * Fetch, parse, and store Designboom project entries.
 */
export async function ingestDesignboom() {
  console.log(`[designboom] Fetching feed...`);

  const parser = new RSSParser({
    customFields: {
      item: [
        ["content:encoded", "contentEncoded"],
        ["dc:creator", "dcCreator"],
      ],
    },
  });

  const feed = await parser.parseURL(FEED_URL);
  console.log(`[designboom] ${feed.items.length} items in feed`);

  const records = feed.items.map((item) => {
    // Parse structured metadata from HTML content
    const info = parseProjectInfo(item.contentEncoded);

    // Title: use RSS title as-is (Designboom doesn't have a splittable convention)
    const title = (item.title || "").trim();

    // Creator: prefer project-info parsed value, fall back to dc:creator.
    // Strip social media handles appended with " | @..." or " @..."
    let creator = info.creator || (item.dcCreator ? item.dcCreator.trim() : null) || "Unknown";
    creator = creator
      .replace(/\s*[|]\s*@\S+/g, "")    // "Name | @handle"
      .replace(/\s+I\s+designboom$/i, "") // "name I designboom" (Designboom staff byline)
      .replace(/\s*@\S+$/g, "")           // trailing "@handle"
      .trim();

    // Image: prefer enclosure, fall back to first image in content
    const imageUrl = item.enclosure?.url || info.fallbackImage;

    // Typology from category tags (trimmed)
    const typology = (item.categories || []).map((c) => c.trim()).filter(Boolean);

    // Published date → ISO 8601
    const publishedAt = item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString();

    return {
      id: uuidv4(),
      title,
      creator,
      location: info.location,
      country: info.country,
      year: info.year,
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
  ingestDesignboom().catch((err) => {
    console.error("[designboom] Fatal error:", err);
    process.exit(1);
  });
}
