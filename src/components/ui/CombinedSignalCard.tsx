import { Activity, ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { formatPercent } from "@/lib/utils";
import type { CombinedSignal } from "@/types/domain";

export function CombinedSignalCard({ signal }: { signal: CombinedSignal }) {
  const Icon =
    signal.status === "model_above_market" ? ArrowUpRight : signal.status === "market_above_model" ? ArrowDownRight : signal.status === "aligned" ? Minus : Activity;

  return (
    <article className="rounded-md border border-white/12 bg-white/[0.04] p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <Icon size={17} className="shrink-0 text-emerald-200" />
          <span className="truncate text-sm font-medium text-slate-100">{signal.forecastVariable ?? "Unmapped signal"}</span>
        </div>
        <span className="font-mono text-xs text-slate-300">{formatPercent(signal.disagreement)}</span>
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-400">{signal.explanation}</p>
      <div className="mt-3 flex gap-2 font-mono text-[11px] text-slate-300">
        <span>model {formatPercent(signal.modelProbability)}</span>
        <span>market {formatPercent(signal.marketProbability)}</span>
      </div>
    </article>
  );
}
