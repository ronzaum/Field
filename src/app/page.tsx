"use client";

import { useState, useCallback } from "react";
import { NavBar, type Surface, type Theme } from "@/components/NavBar";
import { SearchSurface } from "@/components/SearchSurface";
import { FeedSurface } from "@/components/FeedSurface";
import { MapSurface } from "@/components/MapSurface";
import { SavedOverlay } from "@/components/SavedOverlay";

export default function Home() {
  const [surface, setSurface] = useState<Surface>("search");
  const [theme, setTheme] = useState<Theme>("night");
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [showSaved, setShowSaved] = useState(false);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "night" ? "day" : "night"));
  }, []);

  const toggleSave = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <main
      className={`h-screen flex flex-col ${theme === "day" ? "day" : ""}`}
      style={{ background: "hsl(var(--background))" }}
    >
      <NavBar
        surface={surface}
        onSurfaceChange={setSurface}
        theme={theme}
        onToggleTheme={toggleTheme}
        savedCount={savedIds.size}
        onShowSaved={() => setShowSaved(true)}
      />

      {/* Active surface */}
      <div className="flex-1 overflow-hidden">
        {surface === "search" && (
          <SearchSurface savedIds={savedIds} onToggleSave={toggleSave} />
        )}
        {surface === "feed" && (
          <FeedSurface savedIds={savedIds} onToggleSave={toggleSave} />
        )}
        {surface === "map" && <MapSurface />}
      </div>

      {/* Saved overlay */}
      {showSaved && (
        <SavedOverlay
          savedIds={savedIds}
          onToggleSave={toggleSave}
          onClose={() => setShowSaved(false)}
        />
      )}
    </main>
  );
}
