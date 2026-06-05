"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ForecastMarketMap } from "@/components/map/ForecastMarketMap";
import { BottomTimeline } from "@/components/ui/BottomTimeline";
import { DataSourceBadge } from "@/components/ui/DataSourceBadge";
import { ErrorState } from "@/components/ui/ErrorState";
import { LeftCityPanel } from "@/components/ui/LeftCityPanel";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { MarketDrawer } from "@/components/ui/MarketDrawer";
import { type LayerState, RightLayerPanel } from "@/components/ui/RightLayerPanel";
import { TopSearch } from "@/components/ui/TopSearch";
import type { City, CombinedSignal, DashboardData, ForecastPoint, MarketEvent } from "@/types/domain";

type CityPayload = {
  city: City;
  forecast: ForecastPoint[];
  markets: MarketEvent[];
  signals: CombinedSignal[];
};

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(await response.text());
  }
  return response.json() as Promise<T>;
}

export function AppShell({ initialData }: { initialData: DashboardData }) {
  const [selectedSlug, setSelectedSlug] = useState(initialData.selectedCity.slug);
  const [selectedMarket, setSelectedMarket] = useState<MarketEvent | null>(null);
  const [timeline, setTimeline] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [layers, setLayers] = useState<LayerState>({ forecast: true, markets: true, wind: true });
  const handleSelectCity = useCallback((city: City) => setSelectedSlug(city.slug), []);
  const handleSelectMarket = useCallback((market: MarketEvent) => setSelectedMarket(market), []);

  const citiesQuery = useQuery({
    queryKey: ["cities"],
    queryFn: async () => (await getJson<{ data: City[] }>("/api/cities")).data,
    initialData: initialData.cities
  });

  const cityQuery = useQuery({
    queryKey: ["city", selectedSlug],
    queryFn: async () => (await getJson<{ data: CityPayload }>(`/api/cities/${selectedSlug}`)).data,
    initialData:
      selectedSlug === initialData.selectedCity.slug
        ? {
            city: initialData.selectedCity,
            forecast: initialData.forecast,
            markets: initialData.markets,
            signals: initialData.signals
          }
        : undefined
  });

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setTimeline((value) => (value + 1) % 6), 1600);
    return () => window.clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    setSelectedMarket(null);
  }, [selectedSlug]);

  const cities = citiesQuery.data ?? initialData.cities;
  const selectedData = cityQuery.data;
  const selectedCity = selectedData?.city ?? initialData.selectedCity;
  const forecast = selectedData?.forecast ?? [];
  const markets = selectedData?.markets ?? [];
  const signals = selectedData?.signals ?? [];

  const filteredForecast = useMemo(() => {
    if (forecast.length === 0) return forecast;
    return forecast.filter((point, index) => index % 6 <= timeline || point.variable === "temperature_2m");
  }, [forecast, timeline]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06080b]">
      <ForecastMarketMap
        cities={cities}
        selectedCity={selectedCity}
        forecast={filteredForecast}
        markets={markets}
        layers={layers}
        onSelectCity={handleSelectCity}
        onSelectMarket={handleSelectMarket}
      />

      <div className="pointer-events-none absolute inset-0 z-20 p-4">
        <div className="flex items-start justify-between gap-4">
          <TopSearch cities={cities} selectedCity={selectedCity} onSelect={handleSelectCity} />
          <div className="flex flex-col items-end gap-3">
            <DataSourceBadge demoMode={initialData.demoMode} />
            <RightLayerPanel layers={layers} onChange={setLayers} />
          </div>
        </div>

        <div className="mt-4">
          {cityQuery.isError ? (
            <div className="pointer-events-auto w-[min(92vw,420px)]">
              <ErrorState title="Unable to load city intelligence." />
            </div>
          ) : cityQuery.isLoading ? (
            <div className="pointer-events-auto w-[min(92vw,420px)] rounded-md border border-white/12 bg-[var(--panel)] p-4">
              <LoadingSkeleton lines={6} />
            </div>
          ) : (
            <LeftCityPanel city={selectedCity} forecast={forecast} markets={markets} signals={signals} onOpenMarket={handleSelectMarket} />
          )}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <BottomTimeline
            value={timeline}
            playing={playing}
            onValueChange={setTimeline}
            onPlayingChange={setPlaying}
            updatedAt={initialData.generatedAt}
          />
        </div>
      </div>

      <MarketDrawer market={selectedMarket} onClose={() => setSelectedMarket(null)} />
    </main>
  );
}
