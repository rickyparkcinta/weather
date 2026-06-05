"use client";

import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import type { City } from "@/types/domain";

export function CityMarkerLayer({
  map,
  cities,
  selectedCityId,
  onSelect
}: {
  map: maplibregl.Map | null;
  cities: City[];
  selectedCityId: string;
  onSelect: (city: City) => void;
}) {
  useEffect(() => {
    if (!map) return;

    const markers = cities.map((city) => {
      const element = document.createElement("button");
      element.type = "button";
      element.className = `city-marker${city.id === selectedCityId ? " is-selected" : ""}`;
      element.title = city.name;
      element.setAttribute("aria-label", `Select ${city.name}`);
      element.addEventListener("click", () => onSelect(city));

      return new maplibregl.Marker({ element, anchor: "center" }).setLngLat([city.lon, city.lat]).addTo(map);
    });

    return () => markers.forEach((marker) => marker.remove());
  }, [cities, map, onSelect, selectedCityId]);

  return null;
}
