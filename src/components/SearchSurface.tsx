"use client";

import { useState } from "react";
import { cards } from "@/data/cards";
import Card from "./Card";

export default function SearchSurface() {
  const [query, setQuery] = useState("");

  const filtered = cards.filter((c) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.creator.toLowerCase().includes(q) ||
      c.city.toLowerCase().includes(q) ||
      c.source.toLowerCase().includes(q) ||
      String(c.year).includes(q)
    );
  });

  return (
    <div className="flex flex-col gap-6 p-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SEARCH REFERENCES..."
        className="w-full bg-transparent border border-th-border px-4 py-3 font-mono text-[11px] tracking-wider text-th-text placeholder:text-th-hint outline-none"
      />

      <div className="grid grid-cols-3 gap-4">
        {filtered.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
