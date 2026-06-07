"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  Calculator,
  Clock3,
  Database,
  FileText,
  Link as LinkIcon,
  MapPinned,
  Sigma,
  ShieldCheck
} from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { Badge, ConfidenceBadge, FreshnessBadge, SignalStateBadge } from "@/components/ui/SignalBadge";
import { getFormulaById, signalCalculationFormulaIds, type FormulaDefinition } from "@/lib/docs/formulas";
import { STATE_ORDER } from "@/lib/signals/state-order";
import {
  confidenceLabel,
  formatSignedPercent,
  freshnessLabel,
  type SignalState
} from "@/lib/signals/classify";
import { addHoursIso, cn, formatDateTime, formatPercent } from "@/lib/utils";
import type { RankedSignal } from "@/lib/signals/ranking";

const ALL = "all";
const FORMULAS = signalCalculationFormulaIds.map((id) => getFormulaById(id)) satisfies readonly FormulaDefinition[];
const RAW_EDGE_FORMULA = getFormulaById("raw-edge");
const ADJUSTED_EDGE_FORMULA = getFormulaById("confidence-adjusted-edge");

type DashboardMetrics = {
  total: number;
  cityCount: number;
  latestComputedAt: string | null;
  staleAfter: string | null;
  fresh: number;
  aging: number;
  stale: number;
  unknown: number;
  forecastProviders: string[];
  forecastModels: string[];
  marketProviders: string[];
};

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

export function SignalRankingView({
  signals,
  demoMode
}: {
  signals: RankedSignal[];
  demoMode: boolean;
}) {
  const [city, setCity] = useState(ALL);
  const [provider, setProvider] = useState(ALL);
  const [eventType, setEventType] = useState(ALL);
  const [state, setState] = useState(ALL);
  const [freshness, setFreshness] = useState(ALL);

  const metrics = useMemo(() => buildMetrics(signals), [signals]);

  const options = useMemo(() => {
    const uniq = (values: (string | null | undefined)[]) =>
      Array.from(new Set(values.filter((v): v is string => Boolean(v)))).sort();
    return {
      cities: uniq(signals.map((s) => s.city?.name)),
      providers: uniq(signals.flatMap((s) => [s.market?.provider, s.forecast?.provider])),
      eventTypes: uniq(signals.map((s) => s.eventType)),
      freshness: uniq(signals.map((s) => s.freshness))
    };
  }, [signals]);

  const filtered = useMemo(
    () =>
      signals.filter((s) => {
        const matchesProvider = s.market?.provider === provider || s.forecast?.provider === provider;
        if (city !== ALL && s.city?.name !== city) return false;
        if (provider !== ALL && !matchesProvider) return false;
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
    <div className="grid gap-5">
      <TrustHeader demoMode={demoMode} metrics={metrics} />
      {demoMode ? <DemoDisclosure /> : null}
      <DataProvenancePanel demoMode={demoMode} metrics={metrics} signals={signals} />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start">
        <section className="min-w-0">
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

          <div className="mt-4 space-y-3">
            {filtered.length === 0 ? (
              <EmptyState title="No signals match these filters. Adjust filters or run a live ingestion sync." />
            ) : (
              <>
                <SignalTable rows={filtered} demoMode={demoMode} />
                <div className="flex items-center justify-between gap-3 pt-2">
                  <h2 className="text-sm font-semibold text-white">Signal evidence records</h2>
                  <span className="text-xs text-slate-500">Source, formula, and calculation detail</span>
                </div>
                {filtered.map((row, index) => (
                  <SignalRecord
                    key={rowKey(row, index)}
                    row={row}
                    rank={index + 1}
                    demoMode={demoMode || isDemoRecord(row)}
                  />
                ))}
              </>
            )}
          </div>
        </section>

        <FormulaPanel />
      </div>

      <MethodologyPanel />
    </div>
  );
}

function TrustHeader({ demoMode, metrics }: { demoMode: boolean; metrics: DashboardMetrics }) {
  return (
    <section className="rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.92),rgba(3,7,18,0.88))] p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md border border-cyan-200/15 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
            <ShieldCheck size={14} />
            Signal intelligence
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Weather Signal Intelligence</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            Live model-vs-market probability signals built from official forecast data, market snapshots, freshness checks, and documented formulas.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[480px]">
          <TrustMetric
            label="Mode"
            value={demoMode ? "Demo mode" : "Live mode"}
            tone={demoMode ? "warning" : "positive"}
          />
          <TrustMetric label="Last computed" value={formatUnavailableDate(metrics.latestComputedAt)} />
          <TrustMetric
            label="Fresh / Aging / Stale"
            value={`${metrics.fresh} / ${metrics.aging} / ${metrics.stale}`}
          />
          <TrustMetric label="Signals / Cities" value={`${metrics.total} / ${metrics.cityCount}`} />
        </div>
      </div>
    </section>
  );
}

function TrustMetric({
  label,
  value,
  tone = "muted"
}: {
  label: string;
  value: string;
  tone?: "positive" | "warning" | "muted";
}) {
  const color =
    tone === "positive"
      ? "border-emerald-300/25 bg-emerald-300/8 text-emerald-50"
      : tone === "warning"
        ? "border-amber-300/25 bg-amber-300/8 text-amber-50"
        : "border-white/12 bg-black/20 text-slate-100";

  return (
    <div className={cn("rounded-md border px-3 py-2", color)}>
      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-sm">{value}</div>
    </div>
  );
}

function SignalTable({ rows, demoMode }: { rows: RankedSignal[]; demoMode: boolean }) {
  return (
    <section className="overflow-hidden rounded-md border border-white/10 bg-white/[0.035]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold text-white">Combined signal table</h2>
          <p className="mt-1 text-xs text-slate-500">
            Joined city, event, probability, freshness, and computation fields from combined signal records.
          </p>
        </div>
        <Badge tone={demoMode ? "warning" : "positive"}>{demoMode ? "Demo records" : "Live records"}</Badge>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1180px] border-collapse text-left text-sm">
          <thead className="bg-white/[0.055] text-[11px] uppercase tracking-[0.14em] text-slate-500">
            <tr>
              <TableHeader>City</TableHeader>
              <TableHeader>Event</TableHeader>
              <TableHeader>Direction</TableHeader>
              <TableHeader>Model probability</TableHeader>
              <TableHeader>Market probability</TableHeader>
              <TableHeader>Raw gap</TableHeader>
              <TableHeader>Adjusted gap</TableHeader>
              <TableHeader>Confidence</TableHeader>
              <TableHeader>Freshness</TableHeader>
              <TableHeader>Computed at</TableHeader>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={rowKey(row, index)} className="border-b border-white/8 last:border-b-0">
                <TableCell>
                  {row.city ? (
                    <Link href={`/city/${row.city.slug}`} className="font-medium text-cyan-50 hover:text-white">
                      {row.city.name}
                    </Link>
                  ) : (
                    "Unavailable"
                  )}
                </TableCell>
                <TableCell>
                  {row.market ? (
                    <Link href={`/markets/${row.market.id}`} className="line-clamp-2 text-slate-100 hover:text-white">
                      {row.market.title}
                    </Link>
                  ) : (
                    row.signal.forecastVariable ?? "Unavailable"
                  )}
                </TableCell>
                <TableCell>
                  <Badge tone={directionTone(row)}>{directionLabel(row)}</Badge>
                </TableCell>
                <TableCell mono>{formatProbability(row.signal.modelProbability)}</TableCell>
                <TableCell mono>{formatProbability(row.signal.marketProbability)}</TableCell>
                <TableCell mono>{formatSignedPoints(row.signal.rawEdge)}</TableCell>
                <TableCell mono>{formatSignedPoints(row.signal.adjustedEdge)}</TableCell>
                <TableCell>{formatConfidence(row.signal.confidence)}</TableCell>
                <TableCell>{freshnessLabel(row.signal.freshnessStatus).label}</TableCell>
                <TableCell mono>{formatUnavailableDate(row.signal.computedAt)}</TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TableHeader({ children }: { children: React.ReactNode }) {
  return <th className="border-b border-white/10 px-4 py-3 font-semibold">{children}</th>;
}

function TableCell({
  children,
  mono = false
}: {
  children: React.ReactNode;
  mono?: boolean;
}) {
  return (
    <td className={cn("px-4 py-3 align-top leading-5 text-slate-300", mono && "font-mono text-xs text-slate-200")}>
      {children}
    </td>
  );
}

function directionLabel(row: RankedSignal) {
  if (row.state === "unavailable" || row.gap === null) return "Unavailable";
  if (row.state === "high_uncertainty" || (typeof row.confidence === "number" && row.confidence < 0.35)) {
    return "Low confidence";
  }
  if (row.gap > 0.005) return "Model above market";
  if (row.gap < -0.005) return "Market above model";
  return "Neutral";
}

function directionTone(row: RankedSignal) {
  const label = directionLabel(row);
  if (label === "Model above market") return "positive";
  if (label === "Market above model") return "negative";
  if (label === "Low confidence") return "warning";
  if (label === "Unavailable") return "muted";
  return "neutral";
}

function DemoDisclosure() {
  return (
    <aside className="flex items-start gap-3 rounded-md border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-6 text-amber-50">
      <AlertTriangle size={18} className="mt-0.5 shrink-0" />
      <span>Demo data is enabled. These records are not live market or forecast data.</span>
    </aside>
  );
}

function DataProvenancePanel({
  demoMode,
  metrics,
  signals
}: {
  demoMode: boolean;
  metrics: DashboardMetrics;
  signals: RankedSignal[];
}) {
  const mappedCities = signals.filter((row) => row.city).length;

  return (
    <section className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">Data provenance</h2>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            Records are rendered from normalized live tables and joined to available city, forecast, and market context.
          </p>
        </div>
        <Badge tone={demoMode ? "warning" : "positive"}>{demoMode ? "Demo" : "Live"}</Badge>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <ProvenanceItem
          icon={<Database size={15} />}
          label="Forecast source / provider / model"
          value={compactList([...metrics.forecastProviders, ...metrics.forecastModels])}
        />
        <ProvenanceItem icon={<Database size={15} />} label="Market provider" value={compactList(metrics.marketProviders)} />
        <ProvenanceItem icon={<Clock3 size={15} />} label="computedAt" value={formatUnavailableDate(metrics.latestComputedAt)} />
        <ProvenanceItem
          icon={<Clock3 size={15} />}
          label="freshnessStatus"
          value={`Fresh ${metrics.fresh}, Aging ${metrics.aging}, Stale ${metrics.stale}, Unknown ${metrics.unknown}`}
        />
        <ProvenanceItem icon={<Clock3 size={15} />} label="staleAfter" value={formatUnavailableDate(metrics.staleAfter)} />
        <ProvenanceItem
          icon={<MapPinned size={15} />}
          label="City mapping"
          value={mappedCities > 0 ? `${mappedCities} records joined by city_id` : "Unavailable"}
        />
        <ProvenanceItem icon={<FileText size={15} />} label="Signal table" value="combined_signals" />
        <ProvenanceItem icon={<LinkIcon size={15} />} label="API endpoint" value="/api/combined-signals" />
      </div>

      <div className="mt-4 rounded-md border border-white/10 bg-black/20 px-3 py-2 text-xs leading-5 text-slate-300">
        No trading advice. Signals describe model-market disagreement, freshness, and uncertainty for research context only.
      </div>
    </section>
  );
}

function ProvenanceItem({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0 rounded-md border border-white/10 bg-black/18 p-3">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">
        {icon}
        {label}
      </div>
      <div className="mt-2 break-words font-mono text-xs leading-5 text-slate-200">{value || "Unavailable"}</div>
    </div>
  );
}

function FormulaPanel() {
  return (
    <aside className="rounded-md border border-white/10 bg-white/[0.035] p-4 xl:sticky xl:top-20">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-white">How this signal is calculated</h2>
        <Sigma size={17} className="text-cyan-100" />
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        The signal UI reads these formulas from the shared docs registry used by the formula reference.
      </p>
      <div className="mt-4 grid gap-3">
        {FORMULAS.map((formula) => (
          <FormulaCard key={formula.id} formula={formula} />
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Link href="/docs/prediction-market-weather-signals" className="inline-flex items-center gap-1 rounded-md border border-white/12 px-2.5 py-1.5 text-slate-200 hover:bg-white/8">
          <BookOpen size={13} />
          Method docs
        </Link>
        <Link href="/docs/formulas" className="inline-flex items-center gap-1 rounded-md border border-white/12 px-2.5 py-1.5 text-slate-200 hover:bg-white/8">
          <Sigma size={13} />
          Formula reference
        </Link>
      </div>
    </aside>
  );
}

function FormulaCard({ formula }: { formula: FormulaDefinition }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="text-sm font-semibold text-slate-100">{formula.title}</div>
      <code className="mt-2 block overflow-x-auto rounded-md border border-cyan-200/10 bg-cyan-300/8 px-2 py-2 font-mono text-xs text-cyan-50">
        {formula.latex}
      </code>
      <p className="mt-2 text-xs leading-5 text-slate-400">{formula.plainEnglish}</p>
    </div>
  );
}

function SignalRecord({
  row,
  rank,
  demoMode
}: {
  row: RankedSignal;
  rank: number;
  demoMode: boolean;
}) {
  const { signal, market, city, forecast } = row;
  const staleAfter = staleAfterForSignal(signal.computedAt, signal.raw);
  const isStale = signal.freshnessStatus === "stale" || isOlderThanHours(signal.computedAt, 24);
  const stateLabel = stateLabelFor(row.state);
  const linkedMarketId = market?.id ?? signal.marketEventId;

  return (
    <article className="rounded-md border border-white/12 bg-white/[0.04] p-4 transition hover:border-white/20">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="hidden h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-black/20 font-mono text-xs text-slate-400 sm:inline-flex">
              {rank}
            </span>
            <SignalStateBadge signal={signal} variant="short" />
            <FreshnessBadge status={signal.freshnessStatus} />
            <ConfidenceBadge confidence={signal.confidence} />
            {row.eventType ? <Badge tone="muted">{row.eventType}</Badge> : null}
            {demoMode ? <Badge tone="warning">Demo</Badge> : null}
          </div>
          <h3 className="mt-3 text-base font-semibold leading-6 text-white">
            {market?.title ?? signal.forecastVariable ?? "Unavailable market mapping"}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            {city?.name ?? "Unavailable city"}{market?.provider ? ` · ${market.provider}` : ""}
          </p>
        </div>
        <div className="shrink-0 rounded-md border border-white/10 bg-black/20 px-4 py-3 text-left lg:text-right">
          <div className={cn("font-mono text-2xl font-semibold", edgeColor(row.gap))}>
            {formatSignedPoints(row.gap)}
          </div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Adjusted edge</div>
        </div>
      </div>

      {isStale ? (
        <div className="mt-4 flex items-start gap-2 rounded-md border border-amber-300/20 bg-amber-300/8 px-3 py-2 text-xs leading-5 text-amber-50">
          <AlertTriangle size={15} className="mt-0.5 shrink-0" />
          <span>Stale warning: freshness is stale or computedAt is older than 24 hours.</span>
        </div>
      ) : null}

      <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
        <MetricCell label="City">{city?.name ?? "Unavailable"}</MetricCell>
        <MetricCell label="Signal state">{stateLabel}</MetricCell>
        <MetricCell label="Forecast variable">{signal.forecastVariable ?? "Unavailable"}</MetricCell>
        <MetricCell label="Model probability">{formatProbability(signal.modelProbability)}</MetricCell>
        <MetricCell label="Market probability">{formatProbability(signal.marketProbability)}</MetricCell>
        <MetricCell label="Raw edge">{formatSignedPoints(signal.rawEdge)}</MetricCell>
        <MetricCell label="Adjusted edge">{formatSignedPoints(signal.adjustedEdge)}</MetricCell>
        <MetricCell label="Confidence">{formatConfidence(signal.confidence)}</MetricCell>
        <MetricCell label="Freshness">{freshnessLabel(signal.freshnessStatus).label}</MetricCell>
        <MetricCell label="Computed time">{formatUnavailableDate(signal.computedAt)}</MetricCell>
        <MetricCell label="Forecast provider / model">
          {forecast ? `${forecast.provider} / ${forecast.model}` : rawProviderModel(signal.raw)}
        </MetricCell>
        <MetricCell label="Linked market">
          {linkedMarketId ? (
            <Link href={`/markets/${linkedMarketId}`} className="inline-flex items-center gap-1 text-cyan-100 hover:text-white">
              Open market
              <ArrowUpRight size={13} />
            </Link>
          ) : (
            "Unavailable"
          )}
        </MetricCell>
      </div>

      <div className="mt-3 rounded-md border border-white/10 bg-black/18 p-3">
        <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Explanation</div>
        <p className="mt-2 text-sm leading-6 text-slate-300">{signal.explanation ?? "Unavailable"}</p>
      </div>

      <CalculationDetails row={row} />
      <SourceRecordDetails row={row} staleAfter={staleAfter} demoMode={demoMode} />
    </article>
  );
}

function MetricCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0 rounded-md border border-white/10 bg-black/18 p-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className="mt-2 min-h-[1.25rem] break-words text-sm leading-5 text-slate-100">{children}</div>
    </div>
  );
}

function CalculationDetails({ row }: { row: RankedSignal }) {
  const { signal } = row;
  const model = signal.modelProbability;
  const market = signal.marketProbability;
  const confidence = signal.confidence;
  const canCalculateRaw = typeof model === "number" && typeof market === "number";
  const rawEdge = canCalculateRaw ? model - market : null;
  const adjustedEdge = rawEdge !== null && typeof confidence === "number" ? rawEdge * confidence : null;

  return (
    <details className="mt-3 rounded-md border border-cyan-200/12 bg-cyan-300/5 p-3">
      <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-cyan-50">
        <Calculator size={15} />
        Calculation
      </summary>
      <div className="mt-3 grid gap-3">
        <div className="grid gap-2 md:grid-cols-2">
          <FormulaInline formula={RAW_EDGE_FORMULA} />
          <FormulaInline formula={ADJUSTED_EDGE_FORMULA} />
        </div>
        {!canCalculateRaw ? (
          <p className="rounded-md border border-amber-300/20 bg-amber-300/8 p-3 text-sm leading-6 text-amber-50">
            Calculation unavailable because modelProbability or marketProbability is missing.
          </p>
        ) : (
          <div className="grid gap-2 rounded-md border border-white/10 bg-black/20 p-3 font-mono text-sm leading-6 text-slate-200">
            <div>Model probability: {decimal(model)}</div>
            <div>Market probability: {decimal(market)}</div>
            <div>Raw edge = {decimal(model)} - {decimal(market)} = {signedDecimal(rawEdge)}</div>
            <div>Confidence: {typeof confidence === "number" ? decimal(confidence) : "Unavailable"}</div>
            <div>
              AdjustedEdge = {signedDecimal(rawEdge)} x {typeof confidence === "number" ? decimal(confidence) : "Unavailable"} ={" "}
              {adjustedEdge === null ? "Unavailable" : signedDecimal(adjustedEdge)}
            </div>
          </div>
        )}
      </div>
    </details>
  );
}

function FormulaInline({ formula }: { formula: FormulaDefinition }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="text-xs font-semibold text-slate-200">{formula.title}</div>
      <code className="mt-2 block overflow-x-auto rounded bg-white/6 px-2 py-1.5 font-mono text-xs text-cyan-50">
        {formula.latex}
      </code>
    </div>
  );
}

function SourceRecordDetails({
  row,
  staleAfter,
  demoMode
}: {
  row: RankedSignal;
  staleAfter: string | null;
  demoMode: boolean;
}) {
  const { signal, market, forecast } = row;

  return (
    <details className="mt-3 rounded-md border border-white/10 bg-black/18 p-3">
      <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold text-slate-100">
        <FileText size={15} />
        Source record
      </summary>
      <dl className="mt-3 grid gap-2 text-xs leading-5 text-slate-300 md:grid-cols-2">
        <SourceField label="cityId" value={signal.cityId} />
        <SourceField label="marketEventId" value={signal.marketEventId} />
        <SourceField label="forecastVariable" value={signal.forecastVariable} />
        <SourceField label="signalType" value={signal.signalType} />
        <SourceField label="status" value={signal.status} />
        <SourceField label="computedAt" value={signal.computedAt} />
        <SourceField label="staleAfter" value={staleAfter} />
        <SourceField label="freshnessStatus" value={signal.freshnessStatus} />
        <SourceField label="forecastProvider" value={forecast?.provider ?? rawString(signal.raw, ["forecastProvider", "provider", "source"])} />
        <SourceField label="forecastModel" value={forecast?.model ?? rawString(signal.raw, ["forecastModel", "model"])} />
        <SourceField label="marketProvider" value={market?.provider ?? rawString(signal.raw, ["marketProvider"])} />
        <SourceField label="recordMode" value={demoMode ? "Demo" : "Live"} />
      </dl>
    </details>
  );
}

function SourceField({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="rounded-md border border-white/8 bg-white/[0.025] p-2">
      <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">{label}</dt>
      <dd className="mt-1 break-all font-mono text-slate-200">{value || "Unavailable"}</dd>
    </div>
  );
}

function MethodologyPanel() {
  return (
    <section className="rounded-md border border-white/10 bg-white/[0.03] p-4">
      <h2 className="text-lg font-semibold text-white">Methodology</h2>
      <div className="mt-3 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2 xl:grid-cols-5">
        <MethodStep title="Forecast probabilities" body="Forecast models provide event probabilities after city, variable, and time-window mapping." />
        <MethodStep title="Market probabilities" body="Market prices or bid-ask midpoints imply normalized probabilities." />
        <MethodStep title="Comparison" body="The app compares model probability with market-implied probability." />
        <MethodStep title="Confidence" body="Confidence adjusts the raw probability difference." />
        <MethodStep title="Freshness" body="Freshness and uncertainty suppress strong interpretation." />
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Link href="/docs/prediction-market-weather-signals" className="inline-flex items-center gap-1 rounded-md border border-white/12 px-2.5 py-1.5 text-slate-200 hover:bg-white/8">
          <BookOpen size={13} />
          Prediction-market signal docs
        </Link>
        <Link href="/docs/formulas" className="inline-flex items-center gap-1 rounded-md border border-white/12 px-2.5 py-1.5 text-slate-200 hover:bg-white/8">
          <Sigma size={13} />
          Formula docs
        </Link>
      </div>
    </section>
  );
}

function MethodStep({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/18 p-3">
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-2 text-xs leading-5 text-slate-400">{body}</p>
    </div>
  );
}

function rowKey(row: RankedSignal, index: number) {
  return row.signal.id ?? `${row.signal.cityId}-${row.signal.marketEventId ?? index}`;
}

function buildMetrics(signals: RankedSignal[]): DashboardMetrics {
  const computedTimes = signals
    .map((row) => row.signal.computedAt)
    .filter((value): value is string => Boolean(value))
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  const latestComputedAt = computedTimes[0] ?? null;
  const cityCount = new Set(signals.map((row) => row.city?.id).filter(Boolean)).size;
  const freshnessCounts = signals.reduce(
    (counts, row) => {
      const status = row.signal.freshnessStatus ?? "unknown";
      counts[status === "fresh" || status === "aging" || status === "stale" ? status : "unknown"] += 1;
      return counts;
    },
    { fresh: 0, aging: 0, stale: 0, unknown: 0 }
  );

  return {
    total: signals.length,
    cityCount,
    latestComputedAt,
    staleAfter: staleAfterForSignal(latestComputedAt, undefined),
    ...freshnessCounts,
    forecastProviders: unique(signals.map((row) => row.forecast?.provider ?? rawString(row.signal.raw, ["forecastProvider", "provider", "source"]))),
    forecastModels: unique(signals.map((row) => row.forecast?.model ?? rawString(row.signal.raw, ["forecastModel", "model"]))),
    marketProviders: unique(signals.map((row) => row.market?.provider ?? rawString(row.signal.raw, ["marketProvider"])))
  };
}

function unique(values: (string | null | undefined)[]) {
  return Array.from(new Set(values.filter((value): value is string => Boolean(value)))).sort();
}

function compactList(values: string[], max = 4) {
  if (values.length === 0) return "Unavailable";
  const head = values.slice(0, max).join(", ");
  const rest = values.length - max;
  return rest > 0 ? `${head}, +${rest} more` : head;
}

function isDemoRecord(row: RankedSignal) {
  return row.signal.raw?.demo === true || row.market?.raw.demo === true || row.forecast?.raw.demo === true;
}

function rawString(raw: Record<string, unknown> | undefined, keys: string[]) {
  if (!raw) return null;
  for (const key of keys) {
    const value = raw[key];
    if (typeof value === "string" && value.trim()) return value;
  }
  return null;
}

function rawProviderModel(raw: Record<string, unknown> | undefined) {
  const provider = rawString(raw, ["forecastProvider", "provider", "source"]);
  const model = rawString(raw, ["forecastModel", "model"]);
  if (provider && model) return `${provider} / ${model}`;
  return provider ?? model ?? "Unavailable";
}

function staleAfterForSignal(computedAt: string | null | undefined, raw: Record<string, unknown> | undefined) {
  const rawStaleAfter = rawString(raw, ["staleAfter", "stale_after"]);
  return rawStaleAfter ?? addHoursIso(computedAt, 24);
}

function isOlderThanHours(value: string | null | undefined, hours: number) {
  if (!value) return false;
  const timestamp = new Date(value).getTime();
  if (!Number.isFinite(timestamp)) return false;
  return Date.now() - timestamp > hours * 3_600_000;
}

function formatUnavailableDate(value: string | null | undefined) {
  if (!value) return "Unavailable";
  const formatted = formatDateTime(value);
  return formatted === "n/a" ? "Unavailable" : formatted;
}

function formatProbability(value: number | null | undefined) {
  const formatted = formatPercent(value);
  return formatted === "n/a" ? "Unavailable" : formatted;
}

function formatSignedPoints(value: number | null | undefined) {
  const formatted = formatSignedPercent(value);
  return formatted === "n/a" ? "Unavailable" : formatted.replace("%", " pp");
}

function formatConfidence(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return "Unavailable";
  return `${formatPercent(value)} (${confidenceLabel(value).label})`;
}

function decimal(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return "Unavailable";
  return value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}

function signedDecimal(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return "Unavailable";
  const sign = value > 0 ? "+" : value < 0 ? "-" : "";
  return `${sign}${decimal(Math.abs(value))}`;
}

function edgeColor(gap: number | null) {
  if (gap === null) return "text-slate-300";
  if (gap > 0.005) return "text-emerald-100";
  if (gap < -0.005) return "text-rose-100";
  return "text-slate-200";
}

function stateLabelFor(state: SignalState) {
  return STATE_ORDER.find((item) => item.state === state)?.label ?? state;
}
