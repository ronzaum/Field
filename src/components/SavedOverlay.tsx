"use client";

import React from "react";
import { searchReferences } from "@/data/references";
import { ReferenceCard } from "./ReferenceCard";

interface Props {
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
  onClose: () => void;
}

export const SavedOverlay: React.FC<Props> = ({
  savedIds,
  onToggleSave,
  onClose,
}) => {
  const savedRefs = searchReferences.filter((r) => savedIds.has(r.id));

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Header — SAVED REFERENCES + CLOSE */}
      <div
        className="flex items-center justify-between shrink-0 border-b"
        style={{ height: 38, borderBottomWidth: "0.5px", padding: "0 16px" }}
      >
        <span
          className="font-barlow uppercase"
          style={{ fontSize: 15, letterSpacing: "0.22em" }}
        >
          SAVED REFERENCES
        </span>
        <button
          onClick={onClose}
          className="font-mono-light cursor-crosshair uppercase"
          style={{
            fontSize: 9,
            letterSpacing: "0.14em",
            background: "transparent",
            border: "none",
            color: "hsl(var(--foreground))",
          }}
        >
          CLOSE
        </button>
      </div>

      {/* Content — empty state or 4-column grid */}
      <div className="flex-1 overflow-y-auto">
        {savedRefs.length === 0 ? (
          <div
            className="font-mono-regular flex items-center justify-center h-full uppercase"
            style={{
              fontSize: 8,
              color: "hsl(var(--foreground) / var(--muted-alpha))",
              letterSpacing: "0.10em",
            }}
          >
            NO SAVED REFERENCES YET.
          </div>
        ) : (
          <div className="grid grid-cols-4">
            {savedRefs.map((ref, i) => (
              <div
                key={ref.id}
                style={{
                  borderRight:
                    i % 4 !== 3
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
                  isSaved={true}
                  onToggleSave={onToggleSave}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
