"use client";

import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import { toLngLat } from "@/lib/map/coords";
import type { City, CombinedSignal, MarketEvent } from "@/types/domain";

function signalColor(signal: CombinedSignal) {
  if (signal.status === "aligned") return "#94a3b8";
  if (signal.status === "stale" || signal.freshnessStatus === "stale") return "#f59e0b";
  if (signal.status === "insufficient_data" || signal.status === "unavailable" || signal.status === "avoid") return "#64748b";
  if ((signal.rawEdge ?? 0) > 0 || signal.status === "model_above_market") return "#34d399";
  if ((signal.rawEdge ?? 0) < 0 || signal.status === "market_above_model") return "#fb7185";
  return "#38bdf8";
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

      const edge = Math.abs(signal.rawEdge ?? signal.disagreement ?? 0);
      const size = Math.max(20, Math.min(46, 18 + edge * 120));
      const color = signalColor(signal);
      const element = document.createElement("button");
      element.type = "button";
      element.title = signal.explanation ?? "Weather AI signal";
      element.setAttribute("aria-label", market ? `Open signal market details for ${market.title}` : "Weather AI signal");
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
