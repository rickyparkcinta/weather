"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Activity, BookOpen, Database, DollarSign, Gauge, ShieldCheck } from "lucide-react";
import { ClientMap } from "@/components/map/ClientMap";
import { ProductBrand } from "@/components/shell/ProductHeader";
import { BottomTimeline } from "@/components/ui/BottomTimeline";
import { DataSourceBadge } from "@/components/ui/DataSourceBadge";
import { ErrorState } from "@/components/ui/ErrorState";
import { LeftCityPanel } from "@/components/ui/LeftCityPanel";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { MarketDrawer } from "@/components/ui/MarketDrawer";
import { type LayerState, RightLayerPanel } from "@/components/ui/RightLayerPanel";
import { TopSearch } from "@/components/ui/TopSearch";
import { appCopy, localizedPath, type AppLocale } from "@/lib/i18n";
import type { City, CombinedSignal, DashboardData, ForecastPoint, MarketEvent } from "@/types/domain";

type CityPayload = {
  city: City;
  forecast: ForecastPoint[];
  markets: MarketEvent[];
  signals: CombinedSignal[];
};

const EMPTY_FORECAST: ForecastPoint[] = [];
const EMPTY_MARKETS: MarketEvent[] = [];
const EMPTY_SIGNALS: CombinedSignal[] = [];

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(await response.text());
  }
  return response.json() as Promise<T>;
}

function MapOverlayLink({
  href,
  label,
  icon: Icon
}: {
  href: string;
  label: string;
  icon: typeof Activity;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-md border border-white/12 bg-[var(--panel-strong)] px-3 text-sm text-slate-200 shadow-2xl backdrop-blur-xl hover:bg-white/8"
    >
      <Icon size={15} />
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}

function InstitutionalOverview({
  cityCount,
  marketCount,
  signalCount,
  demoMode,
  locale
}: {
  cityCount: number;
  marketCount: number;
  signalCount: number;
  demoMode: boolean;
  locale: AppLocale;
}) {
  const copy = appCopy[locale];

  return (
    <section className="pointer-events-auto hidden max-w-full overflow-hidden rounded-md border border-white/12 bg-[var(--panel-strong)] px-3 py-2 shadow-2xl backdrop-blur-xl lg:block">
      <div className="flex min-w-0 items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold text-white">{copy.shell.overviewTitle}</h1>
          <p className="mt-0.5 truncate text-xs text-slate-400">
            {copy.shell.overviewBody}
          </p>
        </div>
        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <OverviewMetric label={copy.shell.cities} value={cityCount} />
          <OverviewMetric label={copy.shell.markets} value={marketCount} />
          <OverviewMetric label={copy.shell.signals} value={signalCount} />
          <span className="rounded-md border border-cyan-200/18 bg-cyan-300/8 px-2 py-1 text-[11px] font-medium text-cyan-50">
            {demoMode ? copy.shell.demoDataset : copy.shell.liveFreshness}
          </span>
          <span className="rounded-md border border-emerald-200/18 bg-emerald-300/8 px-2 py-1 text-[11px] font-medium text-emerald-50">
            {copy.shell.researchOnly}
          </span>
        </div>
      </div>
    </section>
  );
}

function OverviewMetric({ label, value }: { label: string; value: number }) {
  return (
    <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 font-mono text-[11px] text-slate-200">
      {label} {value}
    </span>
  );
}

export function AppShell({
  initialData,
  locale = "en"
}: {
  initialData: DashboardData;
  locale?: AppLocale;
}) {
  const router = useRouter();
  const copy = appCopy[locale];
  const [selectedSlug, setSelectedSlug] = useState(initialData.selectedCity.slug);
  const [selectedMarket, setSelectedMarket] = useState<MarketEvent | null>(null);
  const [timeline, setTimeline] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [layers, setLayers] = useState<LayerState>({ forecast: true, markets: true, signals: true, wind: true });
  const handleSelectCity = useCallback(
    (city: City) => {
      setSelectedSlug(city.slug);
      setSelectedMarket(null);
      router.push(localizedPath(locale, `/city/${city.slug}`), { scroll: false });
    },
    [locale, router]
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
  const forecast = selectedData?.forecast ?? EMPTY_FORECAST;
  const markets = selectedData?.markets ?? EMPTY_MARKETS;
  const signals = selectedData?.signals ?? EMPTY_SIGNALS;

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
        signals={signals}
        layers={layers}
        onSelectCity={handleSelectCity}
        onSelectMarket={handleSelectMarket}
      />

      <div className="pointer-events-none absolute inset-0 z-20 grid grid-rows-[auto_minmax(0,1fr)_auto] gap-3 p-3 sm:p-4">
        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="pointer-events-auto flex h-10 shrink-0 items-center rounded-md border border-white/12 bg-[var(--panel-strong)] px-3 shadow-2xl backdrop-blur-xl">
              <ProductBrand locale={locale} />
            </div>
            <div className="pointer-events-auto flex min-w-0 items-center gap-2 overflow-x-auto">
              <DataSourceBadge demoMode={initialData.demoMode} locale={locale} className="hidden sm:inline-flex" />
              <MapOverlayLink href={localizedPath(locale, "/data")} label={copy.nav.data} icon={Database} />
              <MapOverlayLink href={localizedPath(locale, "/signals")} label={copy.nav.signals} icon={Activity} />
              <MapOverlayLink href={localizedPath(locale, "/weather-bonds")} label={copy.nav.weatherBonds} icon={ShieldCheck} />
              <MapOverlayLink href={localizedPath(locale, "/pricing")} label={copy.nav.pricing} icon={DollarSign} />
              <MapOverlayLink href={localizedPath(locale, "/docs")} label={copy.nav.docs} icon={BookOpen} />
              <MapOverlayLink href={localizedPath(locale, "/admin/health")} label={copy.nav.health} icon={Gauge} />
            </div>
          </div>
          <InstitutionalOverview
            cityCount={cities.length}
            marketCount={markets.length}
            signalCount={signals.length}
            demoMode={initialData.demoMode}
            locale={locale}
          />
          <div className="flex min-w-0 items-start justify-between gap-2 sm:gap-4">
            <TopSearch cities={cities} selectedCity={selectedCity} onSelect={handleSelectCity} />
            <div className="flex shrink-0 items-start gap-2 sm:flex-col sm:items-end">
              <RightLayerPanel layers={layers} onChange={setLayers} compact className="md:hidden" />
              <RightLayerPanel layers={layers} onChange={setLayers} className="hidden md:block" />
            </div>
          </div>
        </div>

        <div className="relative min-h-0">
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-[430px] lg:inset-x-auto lg:bottom-auto lg:left-0 lg:top-0 lg:mx-0">
            {cityQuery.isError ? (
              <div className="pointer-events-auto w-full">
                <ErrorState title={copy.shell.unableToLoadCity} />
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
