"use client";

import { useEffect } from "react";
import maplibregl, { type GeoJSONSource } from "maplibre-gl";
import type { ForecastPoint } from "@/types/domain";

const sourceId = "forecast-points";
const layerId = "forecast-points-glow";

export function ForecastLayer({
  map,
  forecast,
  enabled
}: {
  map: maplibregl.Map | null;
  forecast: ForecastPoint[];
  enabled: boolean;
}) {
  useEffect(() => {
    if (!map || !enabled) return;

    const data: GeoJSON.FeatureCollection = {
      type: "FeatureCollection",
      features: forecast
        .filter((point) => typeof point.lon === "number" && typeof point.lat === "number")
        .map((point) => ({
          type: "Feature",
          geometry: { type: "Point", coordinates: [point.lon as number, point.lat as number] },
          properties: {
            variable: point.variable,
            value: point.value,
            confidence: point.confidence ?? 0.5
          }
        }))
    };

    const applyLayer = () => {
      if (map.getSource(sourceId)) {
        (map.getSource(sourceId) as GeoJSONSource).setData(data);
      } else {
        map.addSource(sourceId, { type: "geojson", data });
      }

      if (!map.getLayer(layerId)) {
        map.addLayer({
          id: layerId,
          type: "circle",
          source: sourceId,
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["get", "value"], 0, 18, 40, 42, 100, 66],
            "circle-color": "#37c2ff",
            "circle-opacity": 0.16,
            "circle-blur": 0.68
          }
        });
      }
    };

    if (map.isStyleLoaded()) {
      applyLayer();
    } else {
      map.once("load", applyLayer);
    }

    return () => {
      if (map.getLayer(layerId)) map.removeLayer(layerId);
      if (map.getSource(sourceId)) map.removeSource(sourceId);
    };
  }, [enabled, forecast, map]);

  return null;
}
