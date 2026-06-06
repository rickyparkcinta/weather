import { ChevronRight, Waves } from "lucide-react";
import { formatCompactNumber, formatPercent } from "@/lib/utils";
import type { MarketEvent } from "@/types/domain";

export function MarketCard({
  market,
  onOpen
}: {
  market: MarketEvent;
  onOpen: (market: MarketEvent) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(market)}
      aria-label={`View market details for ${market.title}`}
      className="w-full rounded-md border border-white/12 bg-white/[0.04] p-3 text-left transition hover:border-cyan-200/35 hover:bg-white/[0.07]"
    >
      <div className="flex gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-cyan-300/12 text-cyan-100">
          <Waves size={17} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="line-clamp-2 text-sm font-medium leading-5 text-slate-100">{market.title}</div>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            <span className="rounded-full bg-white/8 px-2 py-1 uppercase">{market.provider}</span>
            <span>{formatPercent(market.probability)}</span>
            <span>vol {formatCompactNumber(market.volume)}</span>
            <ChevronRight size={13} className="text-slate-500" />
          </div>
        </div>
      </div>
    </button>
  );
}
