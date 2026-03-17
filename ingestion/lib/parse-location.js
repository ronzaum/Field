/**
 * parse-location.js — Extract city and country from a raw location string.
 *
 * ArchDaily and other feeds provide locations like:
 *   "Tuticorin, Tamil Nadu, India"
 *   "London, United Kingdom"
 *   "Tokyo"
 *
 * Strategy: split on comma, first segment = city, last segment = country.
 * Single-segment strings are treated as city only (country = null).
 * Returns nulls if the input is empty or unparseable.
 */

/**
 * @param {string|null|undefined} raw — raw location string from feed metadata
 * @returns {{ location: string|null, country: string|null }}
 */
export function parseLocation(raw) {
  if (!raw || typeof raw !== "string") {
    return { location: null, country: null };
  }

  const trimmed = raw.trim();
  if (trimmed.length === 0) {
    return { location: null, country: null };
  }

  const segments = trimmed.split(",").map((s) => s.trim()).filter(Boolean);

  if (segments.length === 0) {
    return { location: null, country: null };
  }

  if (segments.length === 1) {
    // Single value — treat as city, no country info
    return { location: segments[0], country: null };
  }

  // First segment = city, last segment = country
  return {
    location: segments[0],
    country: segments[segments.length - 1],
  };
}
