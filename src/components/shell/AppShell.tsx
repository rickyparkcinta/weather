"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ClientMap } from "@/components/map/ClientMap";
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
  const router = useRouter();
  const [selectedSlug, setSelectedSlug] = useState(initialData.selectedCity.slug);
  const [selectedMarket, setSelectedMarket] = useState<MarketEvent | null>(null);
  const [timeline, setTimeline] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [layers, setLayers] = useState<LayerState>({ forecast: true, markets: true, wind: true });
  const handleSelectCity = useCallback(
    (city: City) => {
      setSelectedSlug(city.slug);
      setSelectedMarket(null);
      router.push(`/city/${city.slug}`, { scroll: false });
    },
    [router]
  );
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
    setSelectedSlug(initialData.selectedCity.slug);
  }, [initialData.selectedCity.slug]);

  useEffect(() => {
    setSelectedMarket(null);
  }, [selectedSlug]);

  useEffect(() => {
    if (!selectedMarket) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedMarket(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMarket]);

  const cities = citiesQuery.data ?? initialData.cities;
  const selectedData = cityQuery.data;
  const selectedCity = selectedData?.city ?? cities.find((city) => city.slug === selectedSlug) ?? initialData.selectedCity;
  const forecast = selectedData?.forecast ?? [];
  const markets = selectedData?.markets ?? [];
  const signals = selectedData?.signals ?? [];

  const filteredForecast = useMemo(() => {
    if (forecast.length === 0) return forecast;
    return forecast.filter((point, index) => index % 6 <= timeline || point.variable === "temperature_2m");
  }, [forecast, timeline]);

  return (
    <main className="relative h-[100dvh] overflow-hidden bg-[#06080b]">
      <ClientMap
        cities={cities}
        selectedCity={selectedCity}
        forecast={filteredForecast}
        markets={markets}
        layers={layers}
        onSelectCity={handleSelectCity}
        onSelectMarket={handleSelectMarket}
      />

      <div className="pointer-events-none absolute inset-0 z-20 grid grid-rows-[auto_minmax(0,1fr)_auto] gap-3 p-3 sm:p-4">
        <div className="flex min-w-0 items-start justify-between gap-2 sm:gap-4">
          <TopSearch cities={cities} selectedCity={selectedCity} onSelect={handleSelectCity} />
          <div className="flex shrink-0 items-start gap-2 sm:flex-col sm:items-end">
            <DataSourceBadge demoMode={initialData.demoMode} className="hidden min-[420px]:inline-flex" />
            <RightLayerPanel layers={layers} onChange={setLayers} compact className="md:hidden" />
            <RightLayerPanel layers={layers} onChange={setLayers} className="hidden md:block" />
          </div>
        </div>

        <div className="relative min-h-0">
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[430px] lg:inset-x-auto lg:bottom-auto lg:left-0 lg:top-0 lg:mx-0">
            {cityQuery.isError ? (
              <div className="pointer-events-auto w-full">
                <ErrorState title="Unable to load city intelligence." />
              </div>
            ) : cityQuery.isLoading ? (
              <div className="pointer-events-auto w-full rounded-md border border-white/12 bg-[var(--panel)] p-4">
                <LoadingSkeleton lines={6} />
              </div>
            ) : (
              <LeftCityPanel
                city={selectedCity}
                forecast={forecast}
                markets={markets}
                signals={signals}
                onOpenMarket={handleSelectMarket}
              />
            )}
          </div>
        </div>

        <div className="flex justify-center">
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
