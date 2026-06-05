"use client";

import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import type { City, MarketEvent } from "@/types/domain";

export function MarketProbabilityLayer({
  map,
  cities,
  markets,
  enabled,
  onSelect
}: {
  map: maplibregl.Map | null;
  cities: City[];
  markets: MarketEvent[];
  enabled: boolean;
  onSelect: (market: MarketEvent) => void;
}) {
  useEffect(() => {
    if (!map || !enabled) return;

    const cityById = new Map(cities.map((city) => [city.id, city]));
    const markers = markets.flatMap((market) => {
      const city = market.cityIds.map((id) => cityById.get(id)).find(Boolean);
      if (!city) return [];

      const probability = market.probability ?? 0.5;
      const size = Math.max(22, Math.min(72, Math.sqrt((market.volume ?? market.liquidity ?? 20000) / 700)));
      const element = document.createElement("button");
      element.type = "button";
      element.title = market.title;
      element.className = "market-bubble";
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.color = probability > 0.6 ? "#64f0a2" : probability < 0.4 ? "#ffb86b" : "#37c2ff";
      element.style.background = `rgba(55, 194, 255, ${0.16 + probability * 0.34})`;
      element.addEventListener("click", () => onSelect(market));

      return new maplibregl.Marker({ element, anchor: "center" }).setLngLat([city.lon, city.lat]).addTo(map);
    });

    return () => markers.forEach((marker) => marker.remove());
  }, [cities, enabled, map, markets, onSelect]);

  return null;
}
