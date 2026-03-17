"use client";

import React, { useState } from "react";
import { feedItems } from "@/data/references";
import { ReferenceCard } from "./ReferenceCard";

interface Props {
  savedIds: Set<string>;
  onToggleSave: (id: string) => void;
}

export const FeedSurface: React.FC<Props> = ({ savedIds, onToggleSave }) => {
  const [feedTab, setFeedTab] = useState<"today" | "week">("today");

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Header bar — Incoming label + Today / This week tabs */}
      <div
        className="flex items-center border-b shrink-0"
        style={{ height: 36, borderBottomWidth: "0.5px" }}
      >
        <div
          className="font-mono-light h-full flex items-center border-r uppercase"
          style={{
            fontSize: 9,
            letterSpacing: "0.14em",
            padding: "0 14px",
            borderRightWidth: "0.5px",
            color: "hsl(var(--foreground) / var(--muted-alpha))",
          }}
        >
          Incoming
        </div>
        {(["today", "week"] as const).map((tab, i) => (
          <React.Fragment key={tab}>
            {i > 0 && (
              <div
                className="h-full border-l"
                style={{ borderLeftWidth: "0.5px" }}
              />
            )}
            <button
              onClick={() => setFeedTab(tab)}
              className="font-mono-light h-full px-4 cursor-crosshair uppercase"
              style={{
                fontSize: 9,
                letterSpacing: "0.14em",
                background: "transparent",
                border: "none",
                color: "hsl(var(--foreground))",
                opacity: feedTab === tab ? 1 : ("var(--muted-alpha)" as unknown as number),
              }}
            >
              {tab === "today" ? "Today" : "This week"}
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* 4-column grid with 1:1 aspect ratio cards */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-4">
          {feedItems.map((item, i) => (
            <div
              key={item.id}
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
                id={item.id}
                source={item.source}
                title={item.title}
                subtitle={item.timeAgo}
                subtitleType="time"
                index={item.index}
                aspectRatio="1/1"
                isSaved={savedIds.has(item.id)}
                onToggleSave={onToggleSave}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
