"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, { type StyleSpecification } from "maplibre-gl";
import { CityMarkerLayer } from "@/components/map/CityMarkerLayer";
import { ForecastLayer } from "@/components/map/ForecastLayer";
import { MarketProbabilityLayer } from "@/components/map/MarketProbabilityLayer";
import { SignalLayer } from "@/components/map/SignalLayer";
import { WindParticleLayer } from "@/components/map/WindParticleLayer";
import type { LayerState } from "@/components/ui/RightLayerPanel";
import { sanitizeCenter, toLngLat } from "@/lib/map/coords";
import { isWebglSupported } from "@/lib/map/webgl";
import type { City, CombinedSignal, ForecastPoint, MarketEvent } from "@/types/domain";

const style: StyleSpecification = {
  version: 8,
  // Public font endpoint so cluster-count labels can render. Optional: if it
  // fails to load the circles still render, so this never blocks the map.
  glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
  sources: {
    osm: {
      type: "raster",
      tiles: [
        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ],
      tileSize: 256,
      attribution: "OpenStreetMap contributors"
    }
  },
  layers: [
    {
      id: "osm",
      type: "raster",
      source: "osm",
      paint: {
        "raster-opacity": 0.46,
        "raster-saturation": -0.86,
        "raster-contrast": 0.35,
        "raster-brightness-min": 0.04,
        "raster-brightness-max": 0.42
      }
    }
  ]
};

type MapStatus = "loading" | "ready" | "error" | "unsupported";

export function ForecastMarketMap({
  cities,
  selectedCity,
  forecast,
  markets,
  signals,
  layers,
  onSelectCity,
  onSelectMarket
}: {
  cities: City[];
  selectedCity: City;
  forecast: ForecastPoint[];
  markets: MarketEvent[];
  signals: CombinedSignal[];
  layers: LayerState;
  onSelectCity: (city: City) => void;
  onSelectMarket: (market: MarketEvent) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const initialCenterRef = useRef(sanitizeCenter(selectedCity?.lon, selectedCity?.lat));
  const [map, setMap] = useState<maplibregl.Map | null>(null);
  const [status, setStatus] = useState<MapStatus>("loading");

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    if (!isWebglSupported()) {
      setStatus("unsupported");
      return;
    }

    let instance: maplibregl.Map;
    try {
      instance = new maplibregl.Map({
        container: containerRef.current,
        style,
        center: initialCenterRef.current,
        zoom: 2.4,
        // Stable, flat 2D world map by default. A 3D globe / pitched view is
        // heavier on low-end devices, so it is intentionally off here.
        pitch: 0,
        bearing: 0,
        attributionControl: { compact: true },
        // Keep memory bounded on long-lived sessions / weak GPUs.
        maxTileCacheSize: 64,
        fadeDuration: 0,
        // Avoid runaway pixel work on high-DPI mobile screens.
        maxPitch: 0
      });
    } catch (error) {
      console.error("Map initialization failed", error);
      setStatus("error");
      return;
    }

    mapRef.current = instance;

    const handleLoad = () => setStatus("ready");
    // Tile / source fetch failures are non-fatal — log but keep the map alive.
    const handleError = (event: { error?: Error }) => {
      console.warn("Map runtime error", event?.error ?? event);
    };

    instance.on("load", handleLoad);
    instance.on("error", handleError);

    try {
      instance.addControl(new maplibregl.NavigationControl({ visualizePitch: false }), "bottom-right");
    } catch (error) {
      console.warn("Failed to add navigation control", error);
    }

    setMap(instance);

    return () => {
      instance.off("load", handleLoad);
      instance.off("error", handleError);
      try {
        instance.remove();
      } catch (error) {
        console.warn("Map cleanup failed", error);
      }
      mapRef.current = null;
      setMap(null);
      setStatus("loading");
    };
  }, []);

  useEffect(() => {
    const instance = mapRef.current;
    if (!instance || status !== "ready") return;

    const center = toLngLat(selectedCity?.lon, selectedCity?.lat);
    if (!center) return;

    try {
      instance.easeTo({
        center,
        zoom: Math.max(instance.getZoom(), 3.4),
        pitch: 0,
        bearing: 0,
        duration: 900
      });
    } catch (error) {
      console.warn("Map camera move failed", error);
    }
  }, [selectedCity, status]);

  const ready = status === "ready";

  return (
    <div className="absolute inset-0">
      <div ref={containerRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,.15)_50%,rgba(0,0,0,.7)_100%)]" />

      {status === "unsupported" || status === "error" ? (
        <MapFallback variant={status} />
      ) : (
        <>
          {!ready ? <MapLoading /> : null}
          <WindParticleLayer enabled={layers.wind} />
          <CityMarkerLayer
            map={ready ? map : null}
            cities={cities}
            selectedCityId={selectedCity?.id}
            onSelect={onSelectCity}
          />
          <MarketProbabilityLayer
            map={ready ? map : null}
            cities={cities}
            markets={markets}
            enabled={layers.markets}
            onSelect={onSelectMarket}
          />
          <SignalLayer
            map={ready ? map : null}
            cities={cities}
            markets={markets}
            signals={signals}
            enabled={layers.signals}
            onSelectMarket={onSelectMarket}
          />
          <ForecastLayer map={ready ? map : null} forecast={forecast} enabled={layers.forecast} />
        </>
      )}
    </div>
  );
}

function MapLoading() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
        Loading map…
      </div>
    </div>
  );
}

function MapFallback({ variant }: { variant: "error" | "unsupported" }) {
  const message =
    variant === "unsupported"
      ? "This device or browser does not support WebGL, which the map requires."
      : "The map failed to load. Your data and city intelligence are still available below.";

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center p-6">
      <div className="max-w-sm rounded-lg border border-white/12 bg-[var(--panel)] p-5 text-center">
        <p className="text-sm font-medium text-white/90">Map unavailable</p>
        <p className="mt-2 text-xs leading-relaxed text-white/60">{message}</p>
        {variant === "error" ? (
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/80 transition hover:bg-white/10"
          >
            Reload
          </button>
        ) : null}
      </div>
    </div>
  );
}
