"use client";

import React, { useState, useEffect, useRef } from "react";
import { cities, type City } from "@/data/references";

/**
 * MapSurface — Leaflet + CartoDB dark_matter tiles.
 * Leaflet is loaded dynamically (client-only) to avoid SSR issues.
 */
export const MapSurface: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [scope, setScope] = useState<"country" | "city">("city");
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    let cancelled = false;

    /** Dynamically import Leaflet + CSS to avoid SSR */
    const initMap = async () => {
      const L = (await import("leaflet")).default;
      // @ts-ignore — CSS import handled by Next.js bundler
      await import("leaflet/dist/leaflet.css");

      if (cancelled || !mapRef.current) return;

      /* Prevent double-init */
      if (leafletMapRef.current) return;

      const map = L.map(mapRef.current, {
        center: [48, 10],
        zoom: 4,
        zoomControl: false,
        attributionControl: false,
      });

      /* CartoDB dark_matter — no API key needed */
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        { maxZoom: 19 }
      ).addTo(map);

      leafletMapRef.current = map;

      /* City markers — 5×5px squares via divIcon */
      cities.forEach((city) => {
        const icon = L.divIcon({
          className: "",
          html: `
            <div style="
              width:5px;height:5px;
              background:hsl(var(--foreground));
              cursor:crosshair;
            "></div>
            <span class="font-mono-regular" style="
              position:absolute;left:13px;top:-3px;
              font-size:7.5px;white-space:nowrap;
              color:hsl(var(--foreground) / var(--muted-alpha));
              text-transform:lowercase;
            ">${city.name}</span>
          `,
          iconSize: [5, 5],
          iconAnchor: [2.5, 2.5],
        });

        const marker = L.marker([city.lat, city.lng], { icon }).addTo(map);
        marker.on("click", () => setSelectedCity(city));
        markersRef.current.push(marker);
      });
    };

    initMap();

    return () => {
      cancelled = true;
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
      markersRef.current = [];
    };
  }, []);

  /** Update marker outlines when selection changes */
  useEffect(() => {
    markersRef.current.forEach((marker, i) => {
      const city = cities[i];
      const isActive = selectedCity?.name === city.name;
      const el = marker.getElement();
      if (!el) return;
      const dot = el.querySelector("div") as HTMLElement | null;
      if (dot) {
        dot.style.outline = isActive ? "1.5px solid hsl(var(--foreground))" : "none";
        dot.style.outlineOffset = isActive ? "2px" : "0";
      }
    });
  }, [selectedCity]);

  return (
    <div
      className="flex h-full"
      style={{ background: "hsl(var(--background))" }}
    >
      {/* Map canvas */}
      <div className="flex-1 relative overflow-hidden">
        <div ref={mapRef} className="absolute inset-0" />

        {/* Scope toggle — top-left */}
        <div className="absolute z-[1000] flex" style={{ top: 10, left: 10 }}>
          {(["country", "city"] as const).map((s, i) => (
            <button
              key={s}
              onClick={() => setScope(s)}
              className="font-mono-light cursor-crosshair uppercase"
              style={{
                fontSize: 8,
                letterSpacing: "0.10em",
                padding: "4px 8px",
                border: "0.5px solid hsl(var(--border-color) / var(--border-alpha))",
                borderLeft: i > 0 ? "none" : undefined,
                background: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
                opacity: scope === s ? 1 : 0.42,
              }}
            >
              [{s}]
            </button>
          ))}
        </div>
      </div>

      {/* Right panel — 230px, city detail */}
      <div
        className="h-full overflow-y-auto border-l"
        style={{ width: 230, borderLeftWidth: "0.5px" }}
      >
        {selectedCity ? (
          <div>
            <div style={{ padding: 10 }}>
              <div
                className="font-barlow uppercase"
                style={{
                  fontSize: 18,
                  color: "hsl(var(--foreground))",
                }}
              >
                {selectedCity.name}
              </div>
              <div
                className="font-mono-regular"
                style={{
                  fontSize: 8,
                  color: "hsl(var(--foreground) / var(--muted-alpha))",
                  marginTop: 2,
                }}
              >
                {selectedCity.references.length} reference
                {selectedCity.references.length !== 1 ? "s" : ""}
              </div>
            </div>

            {selectedCity.references.length === 0 ? (
              <div
                className="font-mono-regular uppercase"
                style={{
                  padding: 10,
                  fontSize: 8,
                  color: "hsl(var(--foreground) / var(--muted-alpha))",
                }}
              >
                No references for this location yet.
              </div>
            ) : (
              selectedCity.references.map((ref, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 border-t"
                  style={{ borderTopWidth: "0.5px", padding: 10 }}
                >
                  {/* 34×34 thumbnail placeholder */}
                  <div
                    className="shrink-0"
                    style={{
                      width: 34,
                      height: 34,
                      background: "var(--image-placeholder)",
                    }}
                  />
                  <div>
                    <div
                      className="font-barlow uppercase"
                      style={{
                        fontSize: 11,
                        lineHeight: 1.1,
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      {ref.title}
                    </div>
                    <div
                      className="font-mono-regular"
                      style={{
                        fontSize: 7.5,
                        color: "hsl(var(--foreground) / var(--muted-alpha))",
                        marginTop: 2,
                      }}
                    >
                      [{ref.source}] · {ref.year}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div
            className="font-mono-regular uppercase"
            style={{
              padding: 10,
              fontSize: 8,
              color: "hsl(var(--foreground) / var(--muted-alpha))",
              lineHeight: 1.8,
            }}
          >
            SELECT A CITY
            <br />
            TO BROWSE REFERENCES
            <br />
            FROM THAT LOCATION
          </div>
        )}
      </div>
    </div>
  );
};
