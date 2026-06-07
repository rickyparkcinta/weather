"use client";

import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import { toLngLat } from "@/lib/map/coords";
import { classifySignal } from "@/lib/signals/classify";
import type { City, CombinedSignal, MarketEvent } from "@/types/domain";

function signalColor(signal: CombinedSignal) {
  switch (classifySignal(signal).state) {
    case "aligned":
      return "#94a3b8";
    case "watch":
      return "#38bdf8";
    case "divergent":
      return "#fb7185";
    case "stale":
    case "high_uncertainty":
      return "#f59e0b";
    case "unavailable":
      return "#64748b";
  }
}

export function SignalLayer({
  map,
  cities,
  markets,
  signals,
  enabled,
  onSelectMarket
}: {
  map: maplibregl.Map | null;
  cities: City[];
  markets: MarketEvent[];
  signals: CombinedSignal[];
  enabled: boolean;
  onSelectMarket: (market: MarketEvent) => void;
}) {
  useEffect(() => {
    if (!map || !enabled) return;

    const cityById = new Map(cities.map((city) => [city.id, city]));
    const marketById = new Map(markets.map((market) => [market.id, market]));
    const markers = signals.flatMap((signal) => {
      const market = signal.marketEventId ? marketById.get(signal.marketEventId) : null;
      const city = market?.cityIds.map((id) => cityById.get(id)).find(Boolean) ?? cityById.get(signal.cityId);
      if (!city) return [];

      const coords = toLngLat(city.lon, city.lat);
      if (!coords) return [];

      const gap = Math.abs(signal.rawEdge ?? signal.disagreement ?? 0);
      const size = Math.max(20, Math.min(46, 18 + gap * 120));
      const color = signalColor(signal);
      const element = document.createElement("button");
      element.type = "button";
      element.title = signal.explanation ?? "RiWeather signal";
      element.setAttribute("aria-label", market ? `View signal market details for ${market.title}` : "RiWeather signal");
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.border = `1px solid ${color}`;
      element.style.background = `${color}33`;
      element.style.boxShadow = `0 0 ${Math.round(size * 0.8)}px ${color}66`;
      element.style.borderRadius = "4px";
      element.style.transform = "rotate(45deg)";
      element.style.cursor = market ? "pointer" : "default";
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        if (market) onSelectMarket(market);
      });

      return new maplibregl.Marker({ element, anchor: "center" }).setLngLat(coords).addTo(map);
    });

    return () => {
      markers.forEach((marker) => {
        try {
          marker.remove();
        } catch {
          // Map already removed.
        }
      });
    };
  }, [cities, enabled, map, markets, onSelectMarket, signals]);

  return null;
}
