"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl, { type StyleSpecification } from "maplibre-gl";
import { CityMarkerLayer } from "@/components/map/CityMarkerLayer";
import { ForecastLayer } from "@/components/map/ForecastLayer";
import { MarketProbabilityLayer } from "@/components/map/MarketProbabilityLayer";
import { WindParticleLayer } from "@/components/map/WindParticleLayer";
import type { LayerState } from "@/components/ui/RightLayerPanel";
import type { City, ForecastPoint, MarketEvent } from "@/types/domain";

const style: StyleSpecification = {
  version: 8,
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

export function ForecastMarketMap({
  cities,
  selectedCity,
  forecast,
  markets,
  layers,
  onSelectCity,
  onSelectMarket
}: {
  cities: City[];
  selectedCity: City;
  forecast: ForecastPoint[];
  markets: MarketEvent[];
  layers: LayerState;
  onSelectCity: (city: City) => void;
  onSelectMarket: (market: MarketEvent) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const initialCenterRef = useRef<[number, number]>([selectedCity.lon, selectedCity.lat]);
  const [map, setMap] = useState<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const instance = new maplibregl.Map({
      container: containerRef.current,
      style,
      center: initialCenterRef.current,
      zoom: 2.4,
      pitch: 30,
      bearing: 0,
      attributionControl: { compact: true }
    });

    instance.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "bottom-right");
    mapRef.current = instance;
    setMap(instance);

    return () => {
      instance.remove();
      mapRef.current = null;
      setMap(null);
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.easeTo({
      center: [selectedCity.lon, selectedCity.lat],
      zoom: Math.max(mapRef.current.getZoom(), 3.4),
      pitch: 36,
      bearing: 0,
      duration: 900
    });
  }, [selectedCity]);

  return (
    <div className="absolute inset-0">
      <div ref={containerRef} className="h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(0,0,0,.15)_50%,rgba(0,0,0,.7)_100%)]" />
      <WindParticleLayer enabled={layers.wind} />
      <CityMarkerLayer map={map} cities={cities} selectedCityId={selectedCity.id} onSelect={onSelectCity} />
      <MarketProbabilityLayer map={map} cities={cities} markets={markets} enabled={layers.markets} onSelect={onSelectMarket} />
      <ForecastLayer map={map} forecast={forecast} enabled={layers.forecast} />
    </div>
  );
}
