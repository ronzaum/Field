"use client";

import { CardData } from "@/data/cards";

export default function Card({ card }: { card: CardData }) {
  return (
    <div className="border border-th-border bg-th-surface p-4 flex flex-col gap-2">
      {/* Placeholder image area */}
      <div className="w-full aspect-[4/3] bg-th-border" />

      {/* Source */}
      <span className="font-mono text-[8px] tracking-wider text-th-muted uppercase">
        [{card.source}]
      </span>

      {/* Title */}
      <h3 className="font-barlow text-[15px] font-bold uppercase leading-tight text-th-text">
        {card.title}
      </h3>

      {/* Creator */}
      <span className="font-garamond text-[11.5px] italic text-th-muted">
        {card.creator}
      </span>

      {/* City · Year */}
      <span className="font-mono text-[7.5px] tracking-wider text-th-muted uppercase">
        {card.city} · {card.year}
      </span>
    </div>
  );
}
