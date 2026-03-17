"use client";

import React, { useState, useMemo } from "react";
import { searchReferences, filterChips } from "@/data/references";
import { ReferenceCard } from "./ReferenceCard";

interface Props {
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
}

export const SearchSurface: React.FC<Props> = ({ savedIds, onToggleSave }) => {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const toggleFilter = (chip: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(chip)) next.delete(chip);
      else next.add(chip);
      return next;
    });
  };

  /** Filter references across title, creator, location, source, and year */
  const filteredRefs = useMemo(() => {
    if (!query.trim()) return searchReferences;
    const q = query.toLowerCase();
    return searchReferences.filter(
      (ref) =>
        ref.title.toLowerCase().includes(q) ||
        ref.creator.toLowerCase().includes(q) ||
        ref.location.toLowerCase().includes(q) ||
        ref.source.toLowerCase().includes(q) ||
        String(ref.year).includes(q)
    );
  }, [query]);

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Search bar area */}
      <div className="border-b" style={{ borderBottomWidth: "0.5px" }}>
        {/* Row 1: search input + execute button */}
        <div
          className="flex items-center"
          style={{ padding: "8px 12px", gap: 8 }}
        >
          <span
            className="font-mono-regular"
            style={{
              fontSize: 14,
              color: "hsl(var(--foreground) / var(--muted-alpha))",
            }}
          >
            →
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="raw concrete housing, eastern europe, 1970s"
            className="flex-1 font-mono-light bg-transparent outline-none italic cursor-crosshair"
            style={{
              fontSize: 11,
              color: "hsl(var(--foreground))",
              border: "none",
            }}
          />
          <button
            className="font-mono-light cursor-crosshair uppercase"
            style={{
              fontSize: 9,
              letterSpacing: "0.10em",
              padding: "4px 10px",
              border: "0.5px solid hsl(var(--border-color) / var(--border-alpha))",
              background: "transparent",
              color: "hsl(var(--foreground))",
            }}
          >
            Execute
          </button>
        </div>

        {/* Row 2: filter chips */}
        <div
          className="flex items-center flex-wrap"
          style={{ padding: "4px 12px 8px", gap: 6 }}
        >
          {filterChips.map((chip) => (
            <button
              key={chip}
              onClick={() => toggleFilter(chip)}
              className="font-mono-light cursor-crosshair uppercase"
              style={{
                fontSize: 8,
                letterSpacing: "0.10em",
                background: "transparent",
                border: "none",
                padding: "2px 0",
                color: "hsl(var(--foreground) / var(--muted-alpha))",
                textDecoration: activeFilters.has(chip) ? "underline" : "none",
                textUnderlineOffset: "3px",
              }}
            >
              [{chip}]
            </button>
          ))}
        </div>
      </div>

      {/* Results meta bar */}
      <div
        className="flex items-center justify-between border-b font-mono-regular uppercase"
        style={{
          borderBottomWidth: "0.5px",
          padding: "6px 12px",
          fontSize: 8,
          color: "hsl(var(--foreground) / var(--muted-alpha))",
          letterSpacing: "0.06em",
        }}
      >
        <span>
          {filteredRefs.length} reference{filteredRefs.length !== 1 ? "s" : ""} ·{" "}
          {new Set(filteredRefs.map((r) => r.source)).size} sources · all periods
        </span>
        <span>Architecture</span>
      </div>

      {/* Results 3-column grid */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-3">
          {filteredRefs.map((ref, i) => (
            <div
              key={ref.id}
              style={{
                borderRight:
                  i % 3 !== 2
                    ? "0.5px solid hsl(var(--border-color) / var(--border-alpha))"
                    : undefined,
                borderBottom:
                  "0.5px solid hsl(var(--border-color) / var(--border-alpha))",
              }}
            >
              <ReferenceCard
                id={ref.id}
                source={ref.source}
                title={ref.title}
                subtitle={ref.creator}
                subtitleType="creator"
                meta={`${ref.location} · ${ref.year}`}
                index={ref.index}
                aspectRatio="4/3"
                isSaved={savedIds.has(ref.id)}
                onToggleSave={onToggleSave}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
