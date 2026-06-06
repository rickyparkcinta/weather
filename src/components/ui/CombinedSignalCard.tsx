import { ConfidenceBadge, FreshnessBadge, SignalStateBadge } from "@/components/ui/SignalBadge";
import { formatSignedPercent } from "@/lib/signals/classify";
import { addHoursIso, cn, formatCompactNumber, formatDateTime, formatPercent } from "@/lib/utils";
import type { CombinedSignal, MarketEvent } from "@/types/domain";

export function CombinedSignalCard({ signal, market }: { signal: CombinedSignal; market?: MarketEvent | null }) {
  const rawEdge = typeof signal.rawEdge === "number" ? signal.rawEdge : null;
  const adjustedEdge = typeof signal.adjustedEdge === "number" ? signal.adjustedEdge : null;
  const marketSnapshot = marketTimestamp(market);
  const staleAfter = addHoursIso(signal.computedAt ?? marketSnapshot, 24);
  const spread = marketSpread(market);

  return (
    <article className="rounded-md border border-white/12 bg-white/[0.04] p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-sm font-medium text-slate-100">
          {signal.forecastVariable ?? "Unmapped signal"}
        </span>
        <span className={cn("font-mono text-sm font-semibold", gapColor(adjustedEdge))}>
          {formatSignedPercent(adjustedEdge)}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        <SignalStateBadge signal={signal} variant="short" />
        <FreshnessBadge status={signal.freshnessStatus} />
        <ConfidenceBadge confidence={signal.confidence} />
      </div>

      <p className="mt-2 text-xs leading-5 text-slate-400">{signal.explanation}</p>

      <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[11px] text-slate-300">
        <Stat label="Model probability" value={formatPercent(signal.modelProbability)} />
        <Stat label="Market-implied" value={formatPercent(signal.marketProbability)} />
        <Stat label="Probability gap" value={formatSignedPercent(rawEdge)} />
        <Stat label="Confidence" value={formatPercent(signal.confidence ?? null)} />
      </div>

      <div className="mt-2 grid grid-cols-1 gap-2 font-mono text-[11px] text-slate-300 min-[420px]:grid-cols-2">
        <Stat label="Market snapshot" value={formatDateTime(marketSnapshot)} />
        <Stat label="Stale after" value={formatDateTime(staleAfter)} />
        <Stat label="Spread" value={spread} />
        <Stat label="Liquidity" value={formatCompactNumber(market?.liquidity)} />
      </div>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/8 bg-black/20 p-2">
      <div className="text-[10px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-0.5 text-xs text-white">{value}</div>
    </div>
  );
}

function gapColor(gap: number | null) {
  if (gap === null) return "text-slate-400";
  if (gap > 0.005) return "text-emerald-200";
  if (gap < -0.005) return "text-rose-200";
  return "text-slate-300";
}

function marketTimestamp(market: MarketEvent | null | undefined) {
  if (!market) return null;
  const fetchedAt = typeof market.raw.fetchedAt === "string" ? market.raw.fetchedAt : null;
  return fetchedAt ?? market.updatedAt ?? market.createdAt ?? null;
}

function marketSpread(market: MarketEvent | null | undefined) {
  if (typeof market?.bid !== "number" || typeof market.ask !== "number") return "n/a";
  return formatPercent(Math.abs(market.ask - market.bid));
}
