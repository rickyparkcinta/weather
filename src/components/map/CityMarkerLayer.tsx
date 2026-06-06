"use client";

import { useEffect, useRef } from "react";
import maplibregl, { type GeoJSONSource, type MapGeoJSONFeature } from "maplibre-gl";
import { toLngLat } from "@/lib/map/coords";
import type { City } from "@/types/domain";

const SOURCE_ID = "cities";
const CLUSTER_LAYER = "cities-clusters";
const CLUSTER_COUNT_LAYER = "cities-cluster-count";
const HALO_LAYER = "cities-halo";
const POINT_LAYER = "cities-point";

/**
 * Renders cities as a single clustered GeoJSON source instead of one DOM marker
 * per city. This scales to thousands of points, clusters automatically at low
 * zoom, and — crucially — drops any city with invalid coordinates instead of
 * throwing inside `setLngLat`.
 */
export function CityMarkerLayer({
  map,
  cities,
  selectedCityId,
  onSelect
}: {
  map: maplibregl.Map | null;
  cities: City[];
  selectedCityId: string | undefined;
  onSelect: (city: City) => void;
}) {
  // Keep handlers stable while always reading the latest props.
  const citiesRef = useRef(cities);
  const onSelectRef = useRef(onSelect);

  useEffect(() => {
    citiesRef.current = cities;
  }, [cities]);

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  // Setup: add source + layers + interaction handlers once per map instance.
  useEffect(() => {
    if (!map) return;
    let cancelled = false;

    const findCity = (id: unknown) => citiesRef.current.find((city) => city.id === id);

    const handlePointClick = (event: maplibregl.MapMouseEvent & { features?: MapGeoJSONFeature[] }) => {
      const feature = event.features?.[0];
      const city = feature ? findCity(feature.properties?.id) : undefined;
      if (city) onSelectRef.current(city);
    };

    const handleClusterClick = (event: maplibregl.MapMouseEvent & { features?: MapGeoJSONFeature[] }) => {
      const feature = event.features?.[0];
      const clusterId = feature?.properties?.cluster_id;
      const source = map.getSource(SOURCE_ID) as GeoJSONSource | undefined;
      if (clusterId == null || !source) return;
      const geometry = feature?.geometry;
      if (!geometry || geometry.type !== "Point") return;
      source
        .getClusterExpansionZoom(clusterId as number)
        .then((zoom) => {
          if (cancelled) return;
          map.easeTo({ center: geometry.coordinates as [number, number], zoom });
        })
        .catch(() => undefined);
    };

    const setPointer = () => {
      map.getCanvas().style.cursor = "pointer";
    };
    const clearPointer = () => {
      map.getCanvas().style.cursor = "";
    };

    const setup = () => {
      if (cancelled || !map.getStyle()) return;
      try {
        if (!map.getSource(SOURCE_ID)) {
          map.addSource(SOURCE_ID, {
            type: "geojson",
            data: buildData(citiesRef.current, selectedCityId),
            cluster: true,
            clusterRadius: 44,
            clusterMaxZoom: 5
          });
        }

        if (!map.getLayer(CLUSTER_LAYER)) {
          map.addLayer({
            id: CLUSTER_LAYER,
            type: "circle",
            source: SOURCE_ID,
            filter: ["has", "point_count"],
            paint: {
              "circle-color": "rgba(55, 194, 255, 0.22)",
              "circle-stroke-color": "rgba(184, 230, 255, 0.85)",
              "circle-stroke-width": 1.5,
              "circle-radius": ["step", ["get", "point_count"], 18, 5, 24, 15, 32]
            }
          });
        }

        if (!map.getLayer(CLUSTER_COUNT_LAYER)) {
          map.addLayer({
            id: CLUSTER_COUNT_LAYER,
            type: "symbol",
            source: SOURCE_ID,
            filter: ["has", "point_count"],
            layout: {
              "text-field": ["get", "point_count_abbreviated"],
              "text-size": 12,
              "text-allow-overlap": true
            },
            paint: { "text-color": "#eef4f7" }
          });
        }

        if (!map.getLayer(HALO_LAYER)) {
          map.addLayer({
            id: HALO_LAYER,
            type: "circle",
            source: SOURCE_ID,
            filter: ["!", ["has", "point_count"]],
            paint: {
              "circle-radius": ["case", ["get", "selected"], 18, 14],
              "circle-color": ["case", ["get", "selected"], "#64f0a2", "#37c2ff"],
              "circle-opacity": 0.16,
              "circle-blur": 0.6
            }
          });
        }

        if (!map.getLayer(POINT_LAYER)) {
          map.addLayer({
            id: POINT_LAYER,
            type: "circle",
            source: SOURCE_ID,
            filter: ["!", ["has", "point_count"]],
            paint: {
              "circle-radius": ["case", ["get", "selected"], 8, 6],
              "circle-color": ["case", ["get", "selected"], "#64f0a2", "#37c2ff"],
              "circle-stroke-color": "rgba(238, 244, 247, 0.95)",
              "circle-stroke-width": 2
            }
          });
        }

        map.on("click", POINT_LAYER, handlePointClick);
        map.on("click", CLUSTER_LAYER, handleClusterClick);
        map.on("mouseenter", POINT_LAYER, setPointer);
        map.on("mouseleave", POINT_LAYER, clearPointer);
        map.on("mouseenter", CLUSTER_LAYER, setPointer);
        map.on("mouseleave", CLUSTER_LAYER, clearPointer);
      } catch (error) {
        console.warn("Failed to set up city layer", error);
      }
    };

    if (map.isStyleLoaded()) {
      setup();
    } else {
      map.once("load", setup);
    }

    return () => {
      cancelled = true;
      map.off("load", setup);
      map.off("click", POINT_LAYER, handlePointClick);
      map.off("click", CLUSTER_LAYER, handleClusterClick);
      map.off("mouseenter", POINT_LAYER, setPointer);
      map.off("mouseleave", POINT_LAYER, clearPointer);
      map.off("mouseenter", CLUSTER_LAYER, setPointer);
      map.off("mouseleave", CLUSTER_LAYER, clearPointer);
      // Map may already be removed (parent cleanup); guard every call.
      try {
        if (!map.getStyle()) return;
        [CLUSTER_COUNT_LAYER, CLUSTER_LAYER, POINT_LAYER, HALO_LAYER].forEach((id) => {
          if (map.getLayer(id)) map.removeLayer(id);
        });
        if (map.getSource(SOURCE_ID)) map.removeSource(SOURCE_ID);
      } catch {
        // Map torn down mid-cleanup — nothing to release.
      }
    };
    // Intentionally only depends on `map`: data updates go through the effect below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  // Data updates: refresh the source when cities or the selection changes.
  useEffect(() => {
    if (!map) return;
    const source = map.getSource(SOURCE_ID) as GeoJSONSource | undefined;
    if (!source) return;
    try {
      source.setData(buildData(cities, selectedCityId));
    } catch (error) {
      console.warn("Failed to update city data", error);
    }
  }, [map, cities, selectedCityId]);

  return null;
}

function buildData(cities: City[], selectedCityId: string | undefined): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: cities.reduce<GeoJSON.Feature[]>((features, city) => {
      const coords = toLngLat(city.lon, city.lat);
      if (!coords) return features; // defensive: skip invalid coordinates
      features.push({
        type: "Feature",
        geometry: { type: "Point", coordinates: coords },
        properties: {
          id: city.id,
          name: city.name,
          selected: city.id === selectedCityId
        }
      });
      return features;
    }, [])
  };
}
