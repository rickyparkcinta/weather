"use client";

import { useId, useState } from "react";
import { ChevronDown, RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { DEFAULT_MARKET_FILTERS } from "@/lib/markets/calculations";
import type { MarketFilterState, MarketSortKey, SignalLabel, WeatherEventCategory } from "@/lib/markets/types";
import { cn } from "@/lib/utils";

const CATEGORY_OPTIONS: { value: WeatherEventCategory | "all"; label: string }[] = [
  { value: "all", label: "All categories" },
  { value: "rain", label: "Rain" },
  { value: "temperature", label: "Temperature" },
  { value: "wind", label: "Wind" },
  { value: "snow", label: "Snow" },
  { value: "storm", label: "Storm" },
  { value: "humidity", label: "Humidity" }
];

const SIGNAL_OPTIONS: { value: SignalLabel | "all"; label: string }[] = [
  { value: "all", label: "All signals" },
  { value: "Strong Long", label: "Strong Long" },
  { value: "Weak Long", label: "Weak Long" },
  { value: "Neutral", label: "Neutral" },
  { value: "Weak Short", label: "Weak Short" },
  { value: "Strong Short", label: "Strong Short" },
  { value: "Avoid", label: "Avoid" }
];

const SORT_OPTIONS: { value: MarketSortKey; label: string }[] = [
  { value: "signal", label: "Top signals" },
  { value: "edge", label: "Highest adjusted edge" },
  { value: "confidence", label: "Highest confidence" },
  { value: "updated", label: "Recently updated" },
  { value: "city", label: "City A–Z" }
];

export function MarketFilters({
  filters,
  onChange,
  resultCount
}: {
  filters: MarketFilterState;
  onChange: (filters: MarketFilterState) => void;
  resultCount: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const baseId = useId();
  const panelId = `${baseId}-panel`;

  const update = (patch: Partial<MarketFilterState>) => onChange({ ...filters, ...patch });

  const activeCount =
    (filters.category !== "all" ? 1 : 0) +
    (filters.signal !== "all" ? 1 : 0) +
    (filters.minEdge > 0 ? 1 : 0) +
    (filters.minConfidence > 0 ? 1 : 0);

  return (
    <section
      aria-label="Filter and sort weather market events"
      className="sticky top-[56px] z-20 -mx-4 mt-3 border-b border-white/10 bg-[#06080b]/92 px-4 py-3 backdrop-blur-xl md:-mx-8 md:px-8"
    >
      <div className="flex flex-wrap items-center gap-2">
        <label className="relative min-w-0 flex-1 basis-48">
          <span className="sr-only">Search city or event</span>
          <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" aria-hidden />
          <input
            type="search"
            value={filters.search}
            onChange={(input) => update({ search: input.target.value })}
            placeholder="Search city or event"
            className="h-11 w-full rounded-md border border-white/12 bg-black/24 pl-9 pr-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-200/40 focus:outline-none"
          />
        </label>

        <label className="shrink-0">
          <span className="sr-only">Sort events</span>
          <select
            value={filters.sort}
            onChange={(input) => update({ sort: input.target.value as MarketSortKey })}
            className="h-11 rounded-md border border-white/12 bg-black/24 px-3 text-sm text-slate-100 focus:border-cyan-200/40 focus:outline-none"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#0a121a]">
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls={panelId}
          className={cn(
            "inline-flex h-11 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm transition",
            expanded || activeCount > 0
              ? "border-cyan-200/35 bg-cyan-300/10 text-cyan-100"
              : "border-white/12 bg-black/24 text-slate-200 hover:bg-white/8"
          )}
        >
          <SlidersHorizontal size={14} aria-hidden />
          Filters
          {activeCount > 0 ? (
            <span className="rounded-full bg-cyan-300/20 px-1.5 py-0.5 font-mono text-[10px] leading-none text-cyan-100">
              {activeCount}
            </span>
          ) : null}
          <ChevronDown size={13} className={cn("transition-transform", expanded && "rotate-180")} aria-hidden />
        </button>
      </div>

      {expanded ? (
        <div id={panelId} className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Category</span>
            <select
              value={filters.category}
              onChange={(input) => update({ category: input.target.value as MarketFilterState["category"] })}
              className="h-11 rounded-md border border-white/12 bg-black/24 px-3 text-sm text-slate-100 focus:border-cyan-200/40 focus:outline-none"
            >
              {CATEGORY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value} className="bg-[#0a121a]">
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1.5">
            <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Signal</span>
            <select
              value={filters.signal}
              onChange={(input) => update({ signal: input.target.value as MarketFilterState["signal"] })}
              className="h-11 rounded-md border border-white/12 bg-black/24 px-3 text-sm text-slate-100 focus:border-cyan-200/40 focus:outline-none"
            >
              {SIGNAL_OPTIONS.map((option) => (
                <option key={option.value} value={option.value} className="bg-[#0a121a]">
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-1.5">
            <span className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Minimum edge
              <span className="font-mono text-xs normal-case tracking-normal text-slate-200">
                {Math.round(filters.minEdge * 100)} pts
              </span>
            </span>
            <input
              type="range"
              min={0}
              max={20}
              step={1}
              value={Math.round(filters.minEdge * 100)}
              onChange={(input) => update({ minEdge: Number(input.target.value) / 100 })}
              className="h-11 w-full accent-cyan-300"
            />
          </label>

          <label className="grid gap-1.5">
            <span className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Minimum confidence
              <span className="font-mono text-xs normal-case tracking-normal text-slate-200">
                {Math.round(filters.minConfidence * 100)}%
              </span>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={Math.round(filters.minConfidence * 100)}
              onChange={(input) => update({ minConfidence: Number(input.target.value) / 100 })}
              className="h-11 w-full accent-cyan-300"
            />
          </label>

          <div className="flex items-center justify-between gap-3 sm:col-span-2">
            <span className="text-xs text-slate-400" aria-live="polite">
              {resultCount} event{resultCount === 1 ? "" : "s"} match
            </span>
            <button
              type="button"
              onClick={() => onChange({ ...DEFAULT_MARKET_FILTERS, sort: filters.sort })}
              className="inline-flex h-10 items-center gap-1.5 rounded-md border border-white/12 px-3 text-xs text-slate-300 hover:bg-white/8"
            >
              <RotateCcw size={13} aria-hidden />
              Reset filters
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
