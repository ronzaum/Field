"use client";

import { useTheme } from "@/context/ThemeContext";

const surfaces = ["SEARCH", "FEED", "MAP"] as const;

export default function Nav({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate: (surface: string) => void;
}) {
  const { theme, toggle } = useTheme();

  return (
    <nav className="h-12 flex items-center justify-between px-6 border-b border-th-border bg-th-bg">
      <span className="font-barlow text-[14px] font-bold uppercase tracking-[0.2em] text-th-text">
        Field
      </span>

      <div className="flex gap-6">
        {surfaces.map((s) => (
          <button
            key={s}
            onClick={() => onNavigate(s)}
            className={`font-mono text-[10px] uppercase tracking-wider transition-colors ${
              active === s
                ? "text-th-text"
                : "text-th-muted hover:text-th-text"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        onClick={toggle}
        className="font-mono text-[9px] uppercase tracking-wider text-th-muted hover:text-th-text"
      >
        {theme === "night" ? "DAY" : "NIGHT"}
      </button>
    </nav>
  );
}
