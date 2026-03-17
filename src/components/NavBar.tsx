"use client";

import React from "react";

export type Surface = "search" | "feed" | "map";
export type Theme = "night" | "day";

interface NavBarProps {
  surface: Surface;
  onSurfaceChange: (s: Surface) => void;
  theme: Theme;
  onToggleTheme: () => void;
  savedCount: number;
  onShowSaved: () => void;
}

const surfaces: { key: Surface; label: string }[] = [
  { key: "search", label: "SEARCH" },
  { key: "feed", label: "FEED" },
  { key: "map", label: "MAP" },
];

export const NavBar: React.FC<NavBarProps> = ({
  surface,
  onSurfaceChange,
  theme,
  onToggleTheme,
  savedCount,
  onShowSaved,
}) => {
  return (
    <nav
      className="flex items-center justify-between shrink-0 border-b"
      style={{ height: 38, borderBottomWidth: "0.5px" }}
    >
      {/* Left: FIELD wordmark */}
      <div
        className="flex items-center h-full border-r"
        style={{ borderRightWidth: "0.5px", padding: "0 16px" }}
      >
        <span
          className="font-barlow uppercase"
          style={{ fontSize: 15, letterSpacing: "0.22em" }}
        >
          FIELD
        </span>
      </div>

      {/* Centre: surface tabs */}
      <div className="flex items-center h-full">
        {surfaces.map((s, i) => (
          <React.Fragment key={s.key}>
            {i > 0 && (
              <div
                className="h-full border-l"
                style={{ borderLeftWidth: "0.5px" }}
              />
            )}
            <button
              onClick={() => onSurfaceChange(s.key)}
              className="font-mono-light h-full px-4 transition-opacity cursor-crosshair uppercase"
              style={{
                fontSize: 9,
                letterSpacing: "0.14em",
                opacity: surface === s.key ? 1 : "var(--muted-alpha)",
                background: "transparent",
                border: "none",
                color: "hsl(var(--foreground))",
              }}
            >
              {s.label}
            </button>
          </React.Fragment>
        ))}
      </div>

      {/* Right: saved count + day/night toggle */}
      <div className="flex items-center h-full">
        <button
          onClick={onShowSaved}
          className="font-mono-light h-full px-4 transition-opacity cursor-crosshair hover:opacity-70 uppercase"
          style={{
            fontSize: 9,
            letterSpacing: "0.14em",
            background: "transparent",
            border: "none",
            borderLeft: "0.5px solid hsl(var(--border-color) / var(--border-alpha))",
            color: "hsl(var(--foreground))",
          }}
        >
          Saved [{savedCount}]
        </button>
        <button
          onClick={onToggleTheme}
          className="font-mono-light h-full px-4 transition-opacity cursor-crosshair hover:opacity-70 uppercase"
          style={{
            fontSize: 9,
            letterSpacing: "0.14em",
            background: "transparent",
            border: "none",
            borderLeft: "0.5px solid hsl(var(--border-color) / var(--border-alpha))",
            color: "hsl(var(--foreground))",
          }}
        >
          {theme === "night" ? "Day" : "Night"}
        </button>
      </div>
    </nav>
  );
};
