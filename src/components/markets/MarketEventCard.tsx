"use client";

import { MapPin } from "lucide-react";
import { MarketSignalBadge } from "@/components/markets/SignalBadge";
import { formatEdge, formatProbability, formatUpdatedAgo } from "@/lib/markets/calculations";
import type { EnrichedCityMarketEvent } from "@/lib/markets/types";
import { cn } from "@/lib/utils";

const CATEGORY_LABEL: Record<EnrichedCityMarketEvent["eventCategory"], string> = {
  rain: "Rain",
  temperature: "Temperature",
  wind: "Wind",
  snow: "Snow",
  storm: "Storm",
  humidity: "Humidity"
};

export function categoryLabel(category: EnrichedCityMarketEvent["eventCategory"]) {
  return CATEGORY_LABEL[category];
}

export function edgeTextColor(edge: number) {
  if (edge >= 0.005) return "text-emerald-200";
  if (edge <= -0.005) return "text-rose-200";
  return "text-slate-300";
}

export function MarketEventCard({
  event,
  now,
  onSelect
}: {
  event: EnrichedCityMarketEvent;
  now: number;
  onSelect: (event: EnrichedCityMarketEvent) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(event)}
      aria-label={`Open details for ${event.city}: ${event.eventTitle}`}
      className="w-full rounded-md border border-white/12 bg-white/[0.04] p-4 text-left transition hover:border-cyan-200/30 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300/80"
    >
      {/* Top row: city + signal */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-1.5 text-sm font-semibold text-white">
          <MapPin size={13} className="shrink-0 text-cyan-200" aria-hidden />
          <span className="truncate">
            {event.city}, {event.countryCode}
          </span>
        </div>
        <MarketSignalBadge signal={event.signal} />
      </div>

      {/* Event title */}
      <h3 className="mt-2 text-[15px] font-semibold leading-snug text-slate-100">{event.eventTitle}</h3>
      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
        <span className="rounded-full bg-white/8 px-2 py-0.5 text-slate-300">{CATEGORY_LABEL[event.eventCategory]}</span>
        {event.source ? <span className="truncate">{event.source}</span> : null}
      </div>

      {/* Odds comparison */}
      <dl className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-md border border-white/10 bg-black/22 px-3 py-2">
          <dt className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Market Odds</dt>
          <dd className="mt-1 font-mono text-xl text-cyan-200">{formatProbability(event.marketProbability)}</dd>
        </div>
        <div className="rounded-md border border-white/10 bg-black/22 px-3 py-2">
          <dt className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Weather AI Odds</dt>
          <dd className="mt-1 font-mono text-xl text-violet-200">{formatProbability(event.aiProbability)}</dd>
        </div>
      </dl>

      {/* Edge + confidence */}
      <div className="mt-2 flex items-center justify-between gap-3 rounded-md border border-white/10 bg-black/22 px-3 py-2">
        <div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Edge</div>
          <div className={cn("mt-0.5 font-mono text-base font-semibold", edgeTextColor(event.edge))}>
            {formatEdge(event.edge)}
          </div>
        </div>
        <div className="min-w-[40%]">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-slate-500">
            <span>Confidence</span>
            <span className="font-mono text-xs normal-case tracking-normal text-slate-200">
              {formatProbability(event.confidence)}
            </span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden>
            <div
              className="h-full rounded-full bg-cyan-300/80"
              style={{ width: `${Math.round(event.confidence * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Footer: window + updated */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] text-slate-500">
        <span className="truncate">Window: {event.eventWindow}</span>
        <span suppressHydrationWarning>Updated {formatUpdatedAgo(event.updatedAt, now)}</span>
      </div>
    </button>
  );
}
