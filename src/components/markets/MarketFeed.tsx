"use client";

import { useMemo, useState } from "react";
import { SearchX } from "lucide-react";
import { MarketDetail } from "@/components/markets/MarketDetail";
import { MarketEventCard } from "@/components/markets/MarketEventCard";
import { MarketFilters } from "@/components/markets/MarketFilters";
import {
  DEFAULT_MARKET_FILTERS,
  filterEvents,
  formatEdge,
  formatProbability,
  formatUpdatedAgo,
  sortEvents,
  summarizeEvents
} from "@/lib/markets/calculations";
import type { EnrichedCityMarketEvent, MarketFilterState } from "@/lib/markets/types";

export function MarketFeed({ events }: { events: EnrichedCityMarketEvent[] }) {
  const [filters, setFilters] = useState<MarketFilterState>(DEFAULT_MARKET_FILTERS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  // Captured once per mount so relative timestamps stay stable across renders.
  const [now] = useState(() => Date.now());

  const summary = useMemo(() => summarizeEvents(events), [events]);
  const visibleEvents = useMemo(
    () => sortEvents(filterEvents(events, filters), filters.sort),
    [events, filters]
  );
  const selectedEvent = selectedId ? events.find((event) => event.id === selectedId) ?? null : null;

  return (
    <div>
      {/* Summary metrics */}
      <dl className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        <SummaryMetric label="Events" value={String(summary.totalEvents)} />
        <SummaryMetric label="Strong Long" value={String(summary.strongLongCount)} valueClass="text-emerald-200" />
        <SummaryMetric
          label="Avg edge"
          value={summary.averageEdge !== null ? formatEdge(summary.averageEdge) : "n/a"}
        />
        <SummaryMetric
          label="Avg confidence"
          value={summary.averageConfidence !== null ? formatProbability(summary.averageConfidence) : "n/a"}
        />
        <SummaryMetric
          label="Last updated"
          value={summary.lastUpdatedAt ? formatUpdatedAgo(summary.lastUpdatedAt, now) : "n/a"}
          suppressHydration
          className="col-span-2 sm:col-span-1"
        />
      </dl>

      <MarketFilters filters={filters} onChange={setFilters} resultCount={visibleEvents.length} />

      {/* Event feed */}
      {visibleEvents.length === 0 ? (
        <div className="mt-6 grid place-items-center rounded-md border border-dashed border-white/15 bg-black/20 p-8 text-center">
          <SearchX size={22} className="text-slate-500" aria-hidden />
          <h3 className="mt-3 text-base font-semibold text-white">No events match these filters</h3>
          <p className="mt-1 max-w-sm text-sm leading-6 text-slate-400">
            Loosen the minimum edge or confidence thresholds, or clear the search to see the full feed.
          </p>
          <button
            type="button"
            onClick={() => setFilters({ ...DEFAULT_MARKET_FILTERS, sort: filters.sort })}
            className="mt-4 inline-flex h-10 items-center rounded-md border border-white/15 px-4 text-sm text-slate-100 hover:bg-white/8"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {visibleEvents.map((event) => (
            <li key={event.id} className="min-w-0">
              <MarketEventCard event={event} now={now} onSelect={(selected) => setSelectedId(selected.id)} />
            </li>
          ))}
        </ul>
      )}

      {selectedEvent ? <MarketDetail event={selectedEvent} now={now} onClose={() => setSelectedId(null)} /> : null}
    </div>
  );
}

function SummaryMetric({
  label,
  value,
  valueClass,
  suppressHydration,
  className
}: {
  label: string;
  value: string;
  valueClass?: string;
  suppressHydration?: boolean;
  className?: string;
}) {
  return (
    <div className={`rounded-md border border-white/10 bg-black/22 px-3 py-2 ${className ?? ""}`}>
      <dt className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</dt>
      <dd
        suppressHydrationWarning={suppressHydration}
        className={`mt-1 font-mono text-sm ${valueClass ?? "text-slate-100"}`}
      >
        {value}
      </dd>
    </div>
  );
}
