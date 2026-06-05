import Link from "next/link";
import { CombinedSignalCard } from "@/components/ui/CombinedSignalCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { ForecastSummaryCard } from "@/components/ui/ForecastSummaryCard";
import { MarketCard } from "@/components/ui/MarketCard";
import { formatCompactNumber } from "@/lib/utils";
import type { City, CombinedSignal, ForecastPoint, MarketEvent } from "@/types/domain";

export function LeftCityPanel({
  city,
  forecast,
  markets,
  signals,
  onOpenMarket
}: {
  city: City;
  forecast: ForecastPoint[];
  markets: MarketEvent[];
  signals: CombinedSignal[];
  onOpenMarket: (market: MarketEvent) => void;
}) {
  return (
    <aside className="pointer-events-auto w-[min(92vw,420px)] overflow-hidden rounded-md border border-white/12 bg-[var(--panel)] shadow-2xl backdrop-blur-xl">
      <div className="border-b border-white/10 p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-white">{city.name}</h1>
            <p className="mt-1 text-sm text-slate-400">
              {city.country} · {city.region ?? "Global"} · pop {formatCompactNumber(city.population)}
            </p>
          </div>
          <Link href={`/city/${city.slug}`} className="rounded-md border border-white/15 px-3 py-2 text-xs text-slate-200 hover:bg-white/8">
            City URL
          </Link>
        </div>
      </div>
      <div className="max-h-[calc(100vh-210px)] space-y-4 overflow-y-auto p-4">
        <ForecastSummaryCard forecast={forecast} />

        <section>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-100">Combined Signals</h2>
            <span className="font-mono text-xs text-slate-500">{signals.length}</span>
          </div>
          <div className="space-y-2">
            {signals.length ? signals.map((signal) => <CombinedSignalCard key={signal.id ?? signal.marketEventId ?? signal.forecastVariable ?? "signal"} signal={signal} />) : <EmptyState title="No combined signals linked to this city yet." />}
          </div>
        </section>

        <section>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-100">Linked Markets</h2>
            <span className="font-mono text-xs text-slate-500">{markets.length}</span>
          </div>
          <div className="space-y-2">
            {markets.length ? markets.map((market) => <MarketCard key={market.id} market={market} onOpen={onOpenMarket} />) : <EmptyState title="No active linked markets for this city." />}
          </div>
        </section>
      </div>
    </aside>
  );
}
