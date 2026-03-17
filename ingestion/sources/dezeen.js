/**
 * dezeen.js — RSS ingestion for Dezeen.
 *
 * Feed: https://www.dezeen.com/architecture/feed/
 *
 * Dezeen project entries follow the title pattern "Project Name by Architect".
 * Editorial articles, roundups, and opinion pieces do NOT contain " by " and are filtered out.
 *
 * Metadata extraction:
 *   - title / creator  → split on LAST " by " in <title>
 *   - location         → extracted from <category> tags (Dezeen uses city/country names as categories)
 *   - year             → not reliably available in feed metadata, set to null
 *   - image_url        → <enclosure> tag or <media:content> url
 *   - typology         → remaining <category> tags (building types)
 *   - published_at     → <pubDate> converted to ISO 8601
 */

import RSSParser from "rss-parser";
import { v4 as uuidv4 } from "uuid";
import { store } from "../lib/store.js";

const FEED_URL = "https://www.dezeen.com/architecture/feed/";
const SOURCE = "dezeen";

/**
 * Known countries (lowercased) for matching Dezeen's geographic category tags.
 */
const KNOWN_COUNTRIES = new Set([
  "australia", "austria", "belgium", "brazil", "canada", "chile", "china",
  "colombia", "czech republic", "denmark", "egypt", "finland", "france",
  "germany", "greece", "hungary", "india", "indonesia", "iran", "ireland",
  "israel", "italy", "japan", "kenya", "south korea", "lebanon", "malaysia",
  "mexico", "morocco", "netherlands", "new zealand", "nigeria", "norway",
  "pakistan", "peru", "philippines", "poland", "portugal", "romania", "russia",
  "saudi arabia", "singapore", "south africa", "spain", "sweden", "switzerland",
  "taiwan", "thailand", "turkey", "uae", "uk", "usa", "united kingdom",
  "united states", "vietnam", "england", "scotland", "wales",
]);

/**
 * Known US states and other sub-national regions Dezeen uses as category tags.
 */
const KNOWN_REGIONS = new Set([
  "washington state", "california", "new york", "texas", "florida",
  "massachusetts", "connecticut", "oregon", "colorado", "virginia",
  "catalonia", "tuscany", "bavaria", "normandy", "provence",
]);

/**
 * Non-geographic category tags Dezeen uses — these are never locations.
 * Checked via substring match (lowercased).
 */
const NON_LOCATION_KEYWORDS = [
  "architect", "architects", "architecture", "design", "house", "houses", "interior", "residential",
  "commercial", "cultural", "public", "infrastructure", "renovation",
  "apartment", "tower", "brick", "wood", "concrete", "steel", "stone",
  "glass", "pavilion", "church", "museum", "school", "office", "hotel",
  "skyscraper", "extension", "studio", "cabin", "villa", "mosque",
  "temple", "library", "hospital", "bridge", "station", "warehouse",
  "factory", "barn", "chapel", "sauna", "pool", "garden", "roof",
  "staircase", "facade", "courtyard", "corridor", "balcony", "lounge",
  "roundup", "highlight", "exclusive", "opinion", "interview", "video",
  "movie", "dezeen", "all", "red", "white", "black", "blue", "green",
  "timber", "oak", "bamboo", "marble", "copper", "zinc", "aluminium",
  "award", "prize", "pritzker", "riba", "aga khan", "stirling",
  "leisure", "retail", "workspace", "co-working", "worship",
  "british", "japanese", "chinese", "american", "european",
];

/**
 * Classify Dezeen category tags into location (city), country, and typology.
 *
 * Strategy: match countries from a known set, skip non-geographic keywords,
 * then treat the first remaining plausible tag as a city name.
 *
 * @param {string[]} categories — raw category strings from RSS
 * @param {string} creator — creator name, used to avoid classifying architect tags as cities
 * @returns {{ location: string|null, country: string|null, typology: string[] }}
 */
function classifyCategories(categories, creator = "") {
  let location = null;
  let country = null;
  const typology = [];

  for (const cat of categories) {
    const trimmed = cat.trim();
    const lower = trimmed.toLowerCase();

    // Skip empty or meta-categories
    if (!trimmed || lower === "all") continue;

    // Skip tags that match the creator name (Dezeen tags articles with architect names)
    const creatorLower = creator.toLowerCase();
    if (creatorLower && (lower === creatorLower || lower.replace(/[+&]/g, "").trim() === creatorLower.replace(/[+&]/g, "").trim())) {
      typology.push(trimmed);
      continue;
    }

    // Country match
    if (KNOWN_COUNTRIES.has(lower)) {
      if (!country) country = trimmed;
      continue;
    }

    // Sub-national region — treat as country-level context, skip
    if (KNOWN_REGIONS.has(lower)) {
      typology.push(trimmed);
      continue;
    }

    // Check if this tag contains any non-location keyword
    const isNonLocation = NON_LOCATION_KEYWORDS.some((kw) => lower.includes(kw));
    if (isNonLocation) {
      typology.push(trimmed);
      continue;
    }

    // Plausible city: capitalized, short, no spaces beyond a two-word name
    if (
      !location &&
      /^[A-Z]/.test(trimmed) &&
      trimmed.length >= 2 &&
      trimmed.split(" ").length <= 3
    ) {
      location = trimmed;
    } else {
      typology.push(trimmed);
    }
  }

  return { location, country, typology };
}

/**
 * Fetch, parse, and store Dezeen project entries.
 */
export async function ingestDezeen() {
  console.log(`[dezeen] Fetching feed...`);

  const parser = new RSSParser();
  const feed = await parser.parseURL(FEED_URL);
  console.log(`[dezeen] ${feed.items.length} items in feed`);

  // Filter: only entries with " by " in title (project entries).
  // Additional heuristics reject editorials that happen to contain " by ":
  //   - If text after last " by " contains verbs, it's a sentence, not a creator name
  //   - Roundup titles starting with number words ("Eight key projects by...") are skipped
  const SENTENCE_VERBS = /\b(balances?|creates?|reveals?|explores?|transforms?|combines?|celebrates?|blends?|features?|showcases?|offers?|provides?|includes?|presents?|proposes?|winner)\b/i;
  const ROUNDUP_PREFIX = /^(ten|nine|eight|seven|six|five|four|three|two|one|\d+)\b/i;

  const projectItems = feed.items.filter((item) => {
    if (!item.title || !item.title.includes(" by ")) return false;
    const afterBy = item.title.substring(item.title.lastIndexOf(" by ") + 4);
    if (SENTENCE_VERBS.test(afterBy)) return false;
    if (ROUNDUP_PREFIX.test(item.title)) return false;
    return true;
  });
  console.log(`[dezeen] ${projectItems.length} project entries after filtering`);

  const records = projectItems.map((item) => {
    // Split on LAST " by " — handles titles like "House by the Lake by Architect"
    const lastByIndex = item.title.lastIndexOf(" by ");
    const title = item.title.substring(0, lastByIndex).trim();
    const creator = item.title.substring(lastByIndex + 4).trim();

    // Classify categories into location vs typology.
    // Pass creator name so architect-name tags aren't mistaken for cities.
    const categories = (item.categories || []);
    const classified = classifyCategories(categories, creator);

    // Extract image URL from enclosure
    const imageUrl = item.enclosure?.url || null;

    // Published date → ISO 8601
    const publishedAt = item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString();

    return {
      id: uuidv4(),
      title,
      creator,
      location: classified.location,
      country: classified.country,
      year: null, // Not reliably available in Dezeen feed metadata
      source: SOURCE,
      source_url: item.link,
      image_url: imageUrl,
      typology: classified.typology,
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
  ingestDezeen().catch((err) => {
    console.error("[dezeen] Fatal error:", err);
    process.exit(1);
  });
}
