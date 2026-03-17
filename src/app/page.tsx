"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import SearchSurface from "@/components/SearchSurface";

export default function Home() {
  const [surface, setSurface] = useState("SEARCH");

  return (
    <main className="min-h-screen">
      <Nav active={surface} onNavigate={setSurface} />
      {surface === "SEARCH" && <SearchSurface />}
      {surface === "FEED" && (
        <div className="p-6 font-mono text-[11px] text-night-muted">FEED — coming soon</div>
      )}
      {surface === "MAP" && (
        <div className="p-6 font-mono text-[11px] text-night-muted">MAP — coming soon</div>
      )}
    </main>
  );
}
