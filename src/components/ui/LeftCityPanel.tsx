import Link from "next/link";
import { ArrowUpRight, Gauge, Zap } from "lucide-react";
import { CombinedSignalCard } from "@/components/ui/CombinedSignalCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { ForecastSummaryCard } from "@/components/ui/ForecastSummaryCard";
import { MarketCard } from "@/components/ui/MarketCard";
import { ConfidenceBadge, FreshnessBadge, SignalStateBadge } from "@/components/ui/SignalBadge";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import { effectiveGap, formatSignedPercent } from "@/lib/signals/classify";
import { cn, formatCompactNumber, formatPercent } from "@/lib/utils";
import type { City, CombinedSignal, ForecastPoint, MarketEvent } from "@/types/domain";

function strongestSignal(signals: CombinedSignal[]): CombinedSignal | null {
  return (
    [...signals]
      .filter((s) => effectiveGap(s) !== null)
      .sort((a, b) => Math.abs(effectiveGap(b) ?? 0) - Math.abs(effectiveGap(a) ?? 0))[0] ?? null
  );
}

function freshestStatus(signals: CombinedSignal[]): CombinedSignal["freshnessStatus"] {
  const order = ["fresh", "aging", "stale", "unknown"] as const;
  for (const status of order) {
    if (signals.some((s) => s.freshnessStatus === status)) return status;
  }
  return null;
}

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
  const top = strongestSignal(signals);
  const topMarket = top?.marketEventId
    ? markets.find((market) => market.id === top.marketEventId) ?? null
    : null;
  const sortedSignals = [...signals].sort(
    (a, b) => Math.abs(effectiveGap(b) ?? 0) - Math.abs(effectiveGap(a) ?? 0)
  );
  const freshness = freshestStatus(signals);

  return (
    <aside
      className={cn(
        "pointer-events-auto w-full overflow-hidden rounded-md border border-white/12 bg-[var(--panel)] shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      <div className="border-b border-white/10 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-xl font-semibold text-white">{city.name}</h1>
            <p className="mt-1 text-sm text-slate-400">
              {city.country} · {city.region ?? "Global"} · pop {formatCompactNumber(city.population)}
            </p>
          </div>
          <Link
            href={`/city/${city.slug}`}
            aria-label={`Open ${city.name} city page`}
            className="shrink-0 rounded-md border border-white/15 px-3 py-2 text-xs text-slate-200 hover:bg-white/8"
          >
            City page
          </Link>
        </div>
        {/* Signal-quality summary */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {top ? <SignalStateBadge signal={top} variant="short" /> : null}
          <FreshnessBadge status={freshness} />
          {top ? <ConfidenceBadge confidence={top.confidence} /> : null}
          <span className="ml-auto flex items-center gap-1 font-mono text-xs text-slate-400">
            <Gauge size={12} />
            {signals.length} signals
          </span>
        </div>
      </div>
      <div className="max-h-[54dvh] space-y-4 overflow-y-auto p-3 sm:p-4 lg:max-h-[calc(100dvh-272px)]">
        <ForecastSummaryCard forecast={forecast} />
        <NonAdvisoryNotice compact />
        {top ? <TopDivergenceCard signal={top} market={topMarket} onOpenMarket={onOpenMarket} /> : null}

        <section>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-100">Combined Signals</h2>
            <span className="font-mono text-xs text-slate-500">{signals.length}</span>
          </div>
          <div className="space-y-2">
            {sortedSignals.length ? (
              sortedSignals.map((signal) => (
                <CombinedSignalCard
                  key={signal.id ?? signal.marketEventId ?? signal.forecastVariable ?? "signal"}
                  signal={signal}
                  market={signal.marketEventId ? markets.find((market) => market.id === signal.marketEventId) : null}
                />
              ))
            ) : (
              <EmptyState title="No combined signals for this city yet. Run an ingestion sync to compute model-market probability gaps." />
            )}
          </div>
        </section>

        <section>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-100">Linked Markets</h2>
            <span className="font-mono text-xs text-slate-500">{markets.length}</span>
          </div>
          <div className="space-y-2">
            {markets.length ? (
              markets.map((market) => <MarketCard key={market.id} market={market} onOpen={onOpenMarket} />)
            ) : (
              <EmptyState title="No linked markets for this city. Markets appear here once a provider sync links them." />
            )}
          </div>
        </section>
      </div>
    </aside>
  );
}

function TopDivergenceCard({
  signal,
  market,
  onOpenMarket
}: {
  signal: CombinedSignal;
  market: MarketEvent | null;
  onOpenMarket: (market: MarketEvent) => void;
}) {
  const gap = effectiveGap(signal);
  const modelHigher = (gap ?? 0) > 0;
  const spread = marketSpread(market);

  return (
    <section
      className={cn(
        "rounded-md border p-3",
        modelHigher ? "border-emerald-300/25 bg-emerald-300/[0.07]" : "border-sky-300/25 bg-sky-300/[0.06]"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-100">
          <Zap size={16} className={cn("shrink-0", modelHigher ? "text-emerald-200" : "text-sky-200")} />
          <span className="truncate">Model-market divergence</span>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-2 py-1 font-mono text-xs",
            modelHigher ? "bg-emerald-300/12 text-emerald-100" : "bg-sky-300/12 text-sky-100"
          )}
        >
          {formatSignedPercent(gap)} gap
        </span>
      </div>
      <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-5 text-white">
        {market?.title ?? signal.forecastVariable ?? "Unmapped signal"}
      </h3>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <SignalStateBadge signal={signal} variant="short" />
        <FreshnessBadge status={signal.freshnessStatus} />
        <ConfidenceBadge confidence={signal.confidence} />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
        <Metric label="Model probability" value={formatPercent(signal.modelProbability)} />
        <Metric label="Market-implied" value={formatPercent(signal.marketProbability)} />
        <Metric label="Confidence" value={formatPercent(signal.confidence ?? null)} />
        <Metric label="Spread" value={spread} />
      </div>
      {market ? (
        <button
          type="button"
          onClick={() => onOpenMarket(market)}
          aria-label={`View market details for ${market.title}`}
          className="mt-3 inline-flex h-9 items-center gap-2 rounded-md border border-white/20 px-3 text-sm text-slate-100 hover:bg-white/8"
        >
          View market details
          <ArrowUpRight size={15} />
        </button>
      ) : null}
    </section>
  );
}

function marketSpread(market: MarketEvent | null) {
  if (typeof market?.bid !== "number" || typeof market.ask !== "number") return "n/a";
  return formatPercent(Math.abs(market.ask - market.bid));
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-2">
      <div className="uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-xs text-white">{value}</div>
    </div>
  );
}
