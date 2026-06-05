import Link from "next/link";
import { ArrowUpRight, CircleDollarSign } from "lucide-react";
import { CombinedSignalCard } from "@/components/ui/CombinedSignalCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { ForecastSummaryCard } from "@/components/ui/ForecastSummaryCard";
import { MarketCard } from "@/components/ui/MarketCard";
import { findBestBuyCandidate, type BuyCandidate } from "@/lib/signals/findBestBuyCandidate";
import { cn, formatCompactNumber, formatPercent } from "@/lib/utils";
import type { City, CombinedSignal, ForecastPoint, MarketEvent } from "@/types/domain";

export function LeftCityPanel({
  city,
  forecast,
  markets,
  signals,
  onOpenMarket,
  className
}: {
  city: City;
  forecast: ForecastPoint[];
  markets: MarketEvent[];
  signals: CombinedSignal[];
  onOpenMarket: (market: MarketEvent) => void;
  className?: string;
}) {
  const bestBuy = findBestBuyCandidate({ signals, markets });

  return (
    <aside className={cn("pointer-events-auto w-full overflow-hidden rounded-md border border-white/12 bg-[var(--panel)] shadow-2xl backdrop-blur-xl", className)}>
      <div className="border-b border-white/10 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-white">{city.name}</h1>
            <p className="mt-1 text-sm text-slate-400">
              {city.country} · {city.region ?? "Global"} · pop {formatCompactNumber(city.population)}
            </p>
          </div>
          <Link href={`/city/${city.slug}`} className="shrink-0 rounded-md border border-white/15 px-3 py-2 text-xs text-slate-200 hover:bg-white/8">
            City page
          </Link>
        </div>
      </div>
      <div className="max-h-[54dvh] space-y-4 overflow-y-auto p-3 sm:p-4 lg:max-h-[calc(100dvh-230px)]">
        <ForecastSummaryCard forecast={forecast} />
        {bestBuy ? <BestBuyCard candidate={bestBuy} onOpenMarket={onOpenMarket} /> : null}

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

function BestBuyCard({
  candidate,
  onOpenMarket
}: {
  candidate: BuyCandidate;
  onOpenMarket: (market: MarketEvent) => void;
}) {
  return (
    <section className="rounded-md border border-emerald-300/25 bg-emerald-300/[0.08] p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2 text-sm font-semibold text-emerald-100">
          <CircleDollarSign size={17} className="shrink-0" />
          <span className="truncate">Good buy candidate</span>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-300/12 px-2 py-1 font-mono text-xs text-emerald-100">
          +{formatPercent(candidate.edge)}
        </span>
      </div>
      <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-5 text-white">{candidate.market.title}</h3>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
        <Metric label="model" value={formatPercent(candidate.signal.modelProbability)} />
        <Metric label="buy" value={formatPercent(candidate.buyPrice)} />
        <Metric label="market" value={formatPercent(candidate.signal.marketProbability)} />
      </div>
      <button
        type="button"
        onClick={() => onOpenMarket(candidate.market)}
        className="mt-3 inline-flex h-9 items-center gap-2 rounded-md border border-emerald-200/25 px-3 text-sm text-emerald-50 hover:bg-emerald-300/10"
      >
        Open market
        <ArrowUpRight size={15} />
      </button>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-emerald-200/10 bg-black/18 p-2">
      <div className="uppercase text-emerald-100/60">{label}</div>
      <div className="mt-1 font-mono text-xs text-white">{value}</div>
    </div>
  );
}
