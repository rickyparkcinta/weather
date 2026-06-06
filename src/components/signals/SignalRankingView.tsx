"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge, ConfidenceBadge, FreshnessBadge, SignalStateBadge } from "@/components/ui/SignalBadge";
import { STATE_ORDER } from "@/lib/signals/state-order";
import { formatSignedPercent } from "@/lib/signals/classify";
import { addHoursIso, cn, formatCompactNumber, formatDateTime, formatPercent } from "@/lib/utils";
import type { RankedSignal } from "@/lib/signals/ranking";

const ALL = "all";

function Select({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-[11px] uppercase tracking-wide text-slate-500">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-9 min-w-[8rem] rounded-md border border-white/12 bg-black/30 px-2 text-sm normal-case text-slate-100 outline-none focus:border-cyan-300/40"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#0b1118]">
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function SignalRankingView({ signals }: { signals: RankedSignal[] }) {
  const [city, setCity] = useState(ALL);
  const [provider, setProvider] = useState(ALL);
  const [eventType, setEventType] = useState(ALL);
  const [state, setState] = useState(ALL);
  const [freshness, setFreshness] = useState(ALL);

  const options = useMemo(() => {
    const uniq = (values: (string | null | undefined)[]) =>
      Array.from(new Set(values.filter((v): v is string => Boolean(v)))).sort();
    return {
      cities: uniq(signals.map((s) => s.city?.name)),
      providers: uniq(signals.map((s) => s.market?.provider)),
      eventTypes: uniq(signals.map((s) => s.eventType)),
      freshness: uniq(signals.map((s) => s.freshness))
    };
  }, [signals]);

  const filtered = useMemo(
    () =>
      signals.filter((s) => {
        if (city !== ALL && s.city?.name !== city) return false;
        if (provider !== ALL && s.market?.provider !== provider) return false;
        if (eventType !== ALL && s.eventType !== eventType) return false;
        if (state !== ALL && s.state !== state) return false;
        if (freshness !== ALL && (s.freshness ?? "unknown") !== freshness) return false;
        return true;
      }),
    [signals, city, provider, eventType, state, freshness]
  );

  const opt = (values: string[]) => [
    { value: ALL, label: "All" },
    ...values.map((v) => ({ value: v, label: v }))
  ];

  return (
    <div>
      <div className="flex flex-wrap items-end gap-3 rounded-md border border-white/10 bg-white/[0.03] p-3">
        <Select label="City" value={city} options={opt(options.cities)} onChange={setCity} />
        <Select label="Provider" value={provider} options={opt(options.providers)} onChange={setProvider} />
        <Select label="Event type" value={eventType} options={opt(options.eventTypes)} onChange={setEventType} />
        <Select
          label="Signal state"
          value={state}
          options={[{ value: ALL, label: "All" }, ...STATE_ORDER.map((s) => ({ value: s.state, label: s.label }))]}
          onChange={setState}
        />
        <Select label="Freshness" value={freshness} options={opt(options.freshness)} onChange={setFreshness} />
        <div className="ml-auto self-center text-xs text-slate-400">
          {filtered.length} of {signals.length} signals
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {filtered.length === 0 ? (
          <EmptyState title="No signals match these filters yet. Adjust filters or run an ingestion sync." />
        ) : (
          filtered.map((row, index) => <SignalRow key={rowKey(row, index)} row={row} rank={index + 1} />)
        )}
      </div>
    </div>
  );
}

function rowKey(row: RankedSignal, index: number) {
  return row.signal.id ?? `${row.signal.cityId}-${row.signal.marketEventId ?? index}`;
}

function SignalRow({ row, rank }: { row: RankedSignal; rank: number }) {
  const { signal, market, city } = row;
  const snapshotAt = marketTimestamp(market);
  const staleAfter = addHoursIso(signal.computedAt ?? snapshotAt, 24);

  return (
    <article className="rounded-md border border-white/12 bg-white/[0.04] p-3 transition hover:border-white/20 sm:p-4">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 hidden h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/8 font-mono text-xs text-slate-400 sm:flex">
          {rank}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <SignalStateBadge signal={signal} variant="short" />
            <FreshnessBadge status={signal.freshnessStatus} />
            <ConfidenceBadge confidence={signal.confidence} />
            {row.eventType ? <Badge tone="muted">{row.eventType}</Badge> : null}
          </div>
          <h3 className="mt-2 line-clamp-2 text-sm font-medium leading-5 text-slate-100">
            {market?.title ?? signal.forecastVariable ?? "Unmapped signal"}
          </h3>
          <div className="mt-1 text-xs text-slate-500">
            {city?.name ?? "Unknown city"}
            {market?.provider ? ` · ${market.provider}` : ""}
          </div>
        </div>
        <div className="shrink-0 text-right">
          <div className={cn("font-mono text-lg font-semibold", gapColor(row.gap))}>
            {formatSignedPercent(row.gap)}
          </div>
          <div className="text-[10px] uppercase tracking-wide text-slate-500">adj. gap</div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/8 pt-3 text-[11px] text-slate-400">
        <div className="flex flex-wrap gap-3 font-mono">
          <span>model {formatPercent(signal.modelProbability)}</span>
          <span>market {formatPercent(signal.marketProbability)}</span>
          <span>gap {formatSignedPercent(signal.rawEdge)}</span>
          <span>liq {formatCompactNumber(row.liquidity)}</span>
          <span>snapshot {formatDateTime(snapshotAt)}</span>
          <span>stale after {formatDateTime(staleAfter)}</span>
        </div>
        {market ? (
          <Link
            href={`/markets/${market.id}`}
            className="inline-flex items-center gap-1 rounded-md border border-white/15 px-2 py-1 text-slate-200 hover:bg-white/8"
          >
            Details
            <ArrowUpRight size={13} />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function gapColor(gap: number | null) {
  if (gap === null) return "text-slate-400";
  if (gap > 0.005) return "text-emerald-200";
  if (gap < -0.005) return "text-rose-200";
  return "text-slate-300";
}

function marketTimestamp(market: RankedSignal["market"]) {
  if (!market) return null;
  const fetchedAt = typeof market.raw.fetchedAt === "string" ? market.raw.fetchedAt : null;
  return fetchedAt ?? market.updatedAt ?? market.createdAt ?? null;
}
