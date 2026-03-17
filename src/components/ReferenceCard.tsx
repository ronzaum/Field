"use client";

import React from "react";

interface ReferenceCardProps {
  id: string;
  source: string;
  title: string;
  subtitle: string;
  subtitleType: "creator" | "time";
  meta?: string;
  index: string;
  aspectRatio: "4/3" | "1/1";
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  imageUrl?: string | null;
}

/** Inline bookmark SVG — 10×12, filled when saved */
const BookmarkIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 12"
    fill={filled ? "hsl(var(--primary-foreground))" : "none"}
    stroke={filled ? "none" : "hsl(var(--foreground))"}
    strokeWidth="0.8"
  >
    <path d="M1 1h8v10l-4-3-4 3V1z" />
  </svg>
);

export const ReferenceCard: React.FC<ReferenceCardProps> = ({
  id,
  source,
  title,
  subtitle,
  subtitleType,
  meta,
  index,
  aspectRatio,
  isSaved,
  onToggleSave,
  imageUrl,
}) => {
  return (
    <div className="group relative cursor-crosshair">
      {/* Image placeholder */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio, backgroundColor: "var(--image-placeholder)" }}
      >
        {/* Project image */}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: "cover" }}
          />
        )}

        {/* Index number — bottom-right of image */}
        <span
          className="font-mono-regular absolute"
          style={{
            bottom: 4,
            right: 6,
            fontSize: 7,
            color: "hsl(var(--foreground) / var(--muted-alpha))",
          }}
        >
          {index}
        </span>

        {/* Save/bookmark button — top-right, revealed on hover */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(id);
          }}
          className="absolute cursor-crosshair transition-opacity"
          style={{
            top: 6,
            right: 6,
            width: 20,
            height: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isSaved
              ? "hsl(var(--foreground))"
              : "hsl(var(--surface))",
            border: "0.5px solid hsl(var(--border-color) / var(--border-alpha))",
            opacity: isSaved ? 1 : undefined,
          }}
        >
          <span
            className={
              isSaved
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100 transition-opacity"
            }
          >
            <BookmarkIcon filled={isSaved} />
          </span>
        </button>
      </div>

      {/* Card metadata text block */}
      <div style={{ padding: "8px 10px 10px" }}>
        {/* Source tag */}
        <div
          className="font-mono-regular uppercase"
          style={{
            fontSize: 8,
            letterSpacing: "0.10em",
            color: "hsl(var(--foreground) / var(--muted-alpha))",
            marginBottom: 3,
          }}
        >
          [{source}]
        </div>

        {/* Title — Barlow Condensed Bold */}
        <div
          className="font-barlow uppercase"
          style={{
            fontSize: 15,
            letterSpacing: "0.04em",
            lineHeight: 1.05,
            marginBottom: 3,
            color: "hsl(var(--foreground))",
          }}
        >
          {title}
        </div>

        {/* Subtitle — Garamond italic for creator, mono for time */}
        <div
          className={subtitleType === "creator" ? "font-garamond" : "font-mono-light"}
          style={{
            fontSize: 11.5,
            marginBottom: 2,
            color: "hsl(var(--foreground) / var(--muted-alpha))",
          }}
        >
          {subtitle}
        </div>

        {/* Location · Year meta line */}
        {meta && (
          <div
            className="font-mono-regular uppercase"
            style={{
              fontSize: 7.5,
              letterSpacing: "0.06em",
              color: "hsl(var(--foreground) / var(--muted-alpha))",
            }}
          >
            {meta}
          </div>
        )}
      </div>
    </div>
  );
};
