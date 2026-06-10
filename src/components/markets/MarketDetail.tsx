"use client";

import { useEffect, useRef } from "react";
import { AlertTriangle, MapPin, X } from "lucide-react";
import { categoryLabel, edgeTextColor } from "@/components/markets/MarketEventCard";
import { MarketSignalBadge, signalDescription } from "@/components/markets/SignalBadge";
import {
  formatEdge,
  formatProbability,
  formatUpdatedAgo
} from "@/lib/markets/calculations";
import type { EnrichedCityMarketEvent } from "@/lib/markets/types";
import { cn, formatCompactNumber } from "@/lib/utils";

const HELPER_COPY = [
  "AI Odds represent our calibrated probability estimate based on forecast models, uncertainty, and recent verification.",
  "Edge is the difference between Weather AI probability and market-implied probability.",
  "Confidence reflects model agreement, forecast stability, and recent skill.",
  "Low-confidence events are marked Avoid even when raw edge looks attractive."
];

const FORMULAS = [
  { label: "Raw edge", expression: "Edge = P_ai − P_market" },
  { label: "Confidence-adjusted edge", expression: "AdjustedEdge = (P_ai − P_market) × Confidence" },
  { label: "Net edge", expression: "NetEdge = AdjustedEdge − Fees − Slippage − RiskBuffer" },
  { label: "Market-implied probability", expression: "P_market ≈ Price" }
];

export function MarketDetail({
  event,
  now,
  onClose
}: {
  event: EnrichedCityMarketEvent;
  now: number;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (keyEvent: KeyboardEvent) => {
      if (keyEvent.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const risks = collectRiskNotes(event);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        aria-label="Close event details"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${event.city}: ${event.eventTitle}`}
        className="relative z-10 max-h-[88dvh] w-full overflow-y-auto rounded-t-xl border border-white/12 bg-[#0a1118] p-4 pb-8 shadow-2xl sm:max-w-lg sm:rounded-md sm:p-5"
      >
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20 sm:hidden" aria-hidden />

        {/* Overview */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
              <MapPin size={13} className="shrink-0 text-cyan-200" aria-hidden />
              {event.city}, {event.country}
            </div>
            <h2 className="mt-1.5 text-lg font-semibold leading-snug text-white">{event.eventTitle}</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/12 text-slate-300 hover:bg-white/8"
          >
            <X size={16} aria-hidden />
          </button>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <MarketSignalBadge signal={event.signal} />
          <span className="rounded-full bg-white/8 px-2 py-1 text-[11px] leading-none text-slate-300">
            {categoryLabel(event.eventCategory)}
          </span>
          {event.region ? (
            <span className="rounded-full bg-white/8 px-2 py-1 text-[11px] leading-none text-slate-300">{event.region}</span>
          ) : null}
        </div>
        <p className="mt-2 text-xs leading-5 text-slate-400">{signalDescription(event.signal)}</p>

        <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <DetailCell label="Event window" value={event.eventWindow} />
          <DetailCell label="Coordinates" value={`${event.lat.toFixed(4)}, ${event.lon.toFixed(4)}`} mono />
          <DetailCell label="Liquidity" value={event.liquidity ? formatCompactNumber(event.liquidity) : "n/a"} mono />
          <DetailCell label="Updated" value={formatUpdatedAgo(event.updatedAt, now)} suppressHydration />
        </dl>

        {/* Odds comparison */}
        <Section title="Odds comparison">
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md border border-white/10 bg-black/22 px-3 py-2.5">
              <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Market Odds</div>
              <div className="mt-1 font-mono text-2xl text-cyan-200">{formatProbability(event.marketProbability)}</div>
            </div>
            <div className="rounded-md border border-white/10 bg-black/22 px-3 py-2.5">
              <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Weather AI Odds</div>
              <div className="mt-1 font-mono text-2xl text-violet-200">{formatProbability(event.aiProbability)}</div>
            </div>
          </div>
          <OddsBar label="Market" value={event.marketProbability} barClass="bg-cyan-300/75" />
          <OddsBar label="Weather AI" value={event.aiProbability} barClass="bg-violet-300/75" />
        </Section>

        {/* Edge & confidence */}
        <Section title="Forecast signal">
          <div className="grid grid-cols-2 gap-2">
            <DetailCell label="Raw edge" value={formatEdge(event.edge)} mono valueClass={edgeTextColor(event.edge)} />
            <DetailCell
              label="Adjusted edge"
              value={formatEdge(event.adjustedEdge)}
              mono
              valueClass={edgeTextColor(event.adjustedEdge)}
            />
            <DetailCell label="Net edge (demo costs)" value={formatEdge(event.netEdge)} mono valueClass={edgeTextColor(event.netEdge)} />
            <DetailCell label="Confidence" value={formatProbability(event.confidence)} mono />
          </div>
          <Meter label="Model disagreement" value={event.modelDisagreement} />
          <Meter label="Run-to-run volatility" value={event.volatility} />
          <div className="mt-2 text-xs text-slate-400">
            Recent model trend: <span className="font-medium text-slate-200">{event.modelTrend}</span>
          </div>
        </Section>

        {/* Model inputs */}
        <Section title="Model inputs">
          <div className="flex flex-wrap gap-1.5">
            {event.forecastModels.map((model) => (
              <span key={model} className="rounded-full border border-white/12 bg-black/22 px-2 py-1 text-[11px] leading-none text-slate-200">
                {model}
              </span>
            ))}
          </div>
          {event.source ? <p className="mt-2 text-xs text-slate-500">Market source: {event.source}</p> : null}
        </Section>

        {/* Risk notes */}
        <Section title="Risk notes">
          <ul className="grid gap-1.5 text-sm leading-6 text-slate-300">
            {risks.map((risk) => (
              <li key={risk} className="flex gap-2">
                <AlertTriangle size={13} className="mt-1.5 shrink-0 text-amber-200/80" aria-hidden />
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Resolution rules */}
        <Section title="Resolution rules">
          <p className="text-sm leading-6 text-slate-300">{event.resolutionRule}</p>
        </Section>

        {/* Formulas */}
        <Section title="How these numbers are computed">
          <div className="grid gap-2">
            {FORMULAS.map((formula) => (
              <div key={formula.label} className="rounded-md border border-white/10 bg-black/22 px-3 py-2">
                <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{formula.label}</div>
                <code className="mt-1 block font-mono text-xs text-slate-200">{formula.expression}</code>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Execution costs always shrink net edge toward zero, for both long and short reads. Fees, slippage, and risk
            buffer use demo values until live execution data is wired.
          </p>
          <ul className="mt-2 grid gap-1 text-xs leading-5 text-slate-500">
            {HELPER_COPY.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

function collectRiskNotes(event: EnrichedCityMarketEvent): string[] {
  const notes = [...(event.riskNotes ?? [])];
  if (event.confidence < 0.35) {
    notes.push("Confidence is below the Avoid threshold (35%), so the displayed edge is not actionable.");
  }
  if (event.modelDisagreement >= 0.3) {
    notes.push("Forecast models disagree materially on this event; treat the AI probability as a wide estimate.");
  }
  if (event.volatility >= 0.35) {
    notes.push("Recent forecast runs have been volatile; the probability may shift on the next model cycle.");
  }
  if ((event.liquidity ?? 0) < 20000) {
    notes.push("Thin market liquidity can widen spreads and make the quoted odds less reliable.");
  }
  if (notes.length === 0) {
    notes.push("No elevated risks detected for this event beyond normal forecast uncertainty.");
  }
  return notes;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-4 border-t border-white/10 pt-3">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/80">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function DetailCell({
  label,
  value,
  mono,
  valueClass,
  suppressHydration
}: {
  label: string;
  value: string;
  mono?: boolean;
  valueClass?: string;
  suppressHydration?: boolean;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-black/22 px-3 py-2">
      <dt className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</dt>
      <dd
        suppressHydrationWarning={suppressHydration}
        className={cn("mt-1 break-words text-sm text-slate-100", mono && "font-mono", valueClass)}
      >
        {value}
      </dd>
    </div>
  );
}

function OddsBar({ label, value, barClass }: { label: string; value: number; barClass: string }) {
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>{label}</span>
        <span className="font-mono text-slate-300">{formatProbability(value)}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden>
        <div className={cn("h-full rounded-full", barClass)} style={{ width: `${Math.round(value * 100)}%` }} />
      </div>
    </div>
  );
}

function Meter({ label, value }: { label: string; value: number }) {
  const level = value >= 0.35 ? "High" : value >= 0.2 ? "Moderate" : "Low";
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between text-[11px] text-slate-500">
        <span>{label}</span>
        <span className="font-mono text-slate-300">
          {level} · {formatProbability(value)}
        </span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden>
        <div
          className={cn(
            "h-full rounded-full",
            value >= 0.35 ? "bg-amber-300/80" : value >= 0.2 ? "bg-sky-300/70" : "bg-emerald-300/70"
          )}
          style={{ width: `${Math.round(value * 100)}%` }}
        />
      </div>
    </div>
  );
}
