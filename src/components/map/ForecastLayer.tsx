"use client";

import { useEffect } from "react";
import maplibregl, { type GeoJSONSource } from "maplibre-gl";
import { toLngLat } from "@/lib/map/coords";
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
      features: forecast.reduce<GeoJSON.Feature[]>((features, point) => {
        const coords = toLngLat(point.lon, point.lat);
        if (!coords) return features; // defensive: drop NaN / out-of-range points
        features.push({
          type: "Feature",
          geometry: { type: "Point", coordinates: coords },
          properties: {
            variable: point.variable,
            value: point.value,
            confidence: point.confidence ?? 0.5
          }
        });
        return features;
      }, [])
    };

    const applyLayer = () => {
      if (!map.getStyle()) return; // map removed before style finished loading
      try {
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
      } catch (error) {
        console.warn("Failed to apply forecast layer", error);
      }
    };

    if (map.isStyleLoaded()) {
      applyLayer();
    } else {
      map.once("load", applyLayer);
    }

    return () => {
      map.off("load", applyLayer);
      try {
        if (!map.getStyle()) return; // map already torn down
        if (map.getLayer(layerId)) map.removeLayer(layerId);
        if (map.getSource(sourceId)) map.removeSource(sourceId);
      } catch {
        // Map removed mid-cleanup — nothing to release.
      }
    };
  }, [enabled, forecast, map]);

  return null;
}
