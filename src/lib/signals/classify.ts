import type { CombinedSignal } from "@/types/domain";

/**
 * Product-facing signal states. These describe model-market agreement, data
 * quality, and uncertainty without action-oriented market language.
 */
export type SignalState =
  | "aligned"
  | "watch"
  | "divergent"
  | "stale"
  | "unavailable"
  | "high_uncertainty";

export type SignalTone = "positive" | "warning" | "negative" | "neutral" | "muted";

export type SignalStateMeta = {
  state: SignalState;
  label: string;
  short: string;
  tone: SignalTone;
  description: string;
  helpText: string;
};

const DIVERGENT_GAP = 0.08;
const WATCH_GAP = 0.025;
const MIN_CONFIDENCE = 0.35;

const STATE_META: Record<SignalState, Omit<SignalStateMeta, "state">> = {
  aligned: {
    label: "Aligned",
    short: "Aligned",
    tone: "positive",
    description: "Forecast-model probability and market-implied probability are close.",
    helpText: "The probability gap is below the watch threshold after confidence and freshness checks."
  },
  watch: {
    label: "Watch",
    short: "Watch",
    tone: "neutral",
    description: "There is a modest model-market probability gap or limited confidence.",
    helpText: "The signal is useful for monitoring, but the gap is not large enough for divergent status."
  },
  divergent: {
    label: "Divergence",
    short: "Divergence",
    tone: "negative",
    description: "Forecast-model probability and market-implied probability differ materially.",
    helpText: "The probability gap is large enough to flag as divergent after confidence and freshness checks."
  },
  stale: {
    label: "Stale",
    short: "Stale",
    tone: "warning",
    description: "Forecast or market data is too old for a strong interpretation.",
    helpText: "Refresh the forecast run or market snapshot before reading divergence strength."
  },
  unavailable: {
    label: "Unavailable",
    short: "Unavailable",
    tone: "muted",
    description: "Required model, market, or event-mapping data is missing.",
    helpText: "The system needs model probability, market-implied probability, and a valid mapping to compute a gap."
  },
  high_uncertainty: {
    label: "High uncertainty",
    short: "Uncertain",
    tone: "warning",
    description: "Confidence, data quality, or market conditions limit interpretation.",
    helpText: "The signal remains visible, but uncertainty is high enough to suppress strong divergence language."
  }
};

/**
 * The signed probability gap used for ranking. Prefers the confidence-adjusted
 * value, falls back to the raw gap, then to model minus market probability.
 */
export function effectiveGap(signal: CombinedSignal): number | null {
  if (typeof signal.adjustedEdge === "number" && Number.isFinite(signal.adjustedEdge)) {
    return signal.adjustedEdge;
  }
  if (typeof signal.rawEdge === "number" && Number.isFinite(signal.rawEdge)) {
    return signal.rawEdge;
  }
  if (
    typeof signal.modelProbability === "number" &&
    typeof signal.marketProbability === "number"
  ) {
    return signal.modelProbability - signal.marketProbability;
  }
  return null;
}

export const effectiveEdge = effectiveGap;

export function classifySignal(signal: CombinedSignal): SignalStateMeta {
  const confidence = typeof signal.confidence === "number" ? signal.confidence : null;
  const gap = effectiveGap(signal);

  if (signal.status === "stale" || signal.freshnessStatus === "stale") {
    return { state: "stale", ...STATE_META.stale };
  }

  const lowConfidence = confidence !== null && confidence < MIN_CONFIDENCE;
  const insufficient =
    signal.status === "insufficient_data" ||
    signal.status === "unavailable" ||
    signal.modelProbability === null ||
    signal.marketProbability === null ||
    gap === null;

  if (insufficient) {
    return { state: "unavailable", ...STATE_META.unavailable };
  }

  if (signal.status === "high_uncertainty" || signal.status === "avoid" || lowConfidence) {
    return { state: "high_uncertainty", ...STATE_META.high_uncertainty };
  }

  const magnitude = Math.abs(gap as number);
  const state: SignalState = magnitude < WATCH_GAP ? "aligned" : magnitude < DIVERGENT_GAP ? "watch" : "divergent";

  return { state, ...STATE_META[state] };
}

export type FreshnessLabel = {
  status: "fresh" | "aging" | "stale" | "unknown";
  label: string;
  tone: SignalTone;
};

const FRESHNESS_META: Record<FreshnessLabel["status"], Omit<FreshnessLabel, "status">> = {
  fresh: { label: "Fresh", tone: "positive" },
  aging: { label: "Aging", tone: "neutral" },
  stale: { label: "Stale", tone: "warning" },
  unknown: { label: "Unknown", tone: "muted" }
};

export function freshnessLabel(
  status: CombinedSignal["freshnessStatus"] | null | undefined
): FreshnessLabel {
  const key: FreshnessLabel["status"] =
    status === "fresh" || status === "aging" || status === "stale" ? status : "unknown";
  return { status: key, ...FRESHNESS_META[key] };
}

/** Confidence buckets for compact badges. */
export function confidenceLabel(confidence: number | null | undefined): {
  label: string;
  tone: SignalTone;
} {
  if (confidence === null || confidence === undefined || Number.isNaN(confidence)) {
    return { label: "n/a", tone: "muted" };
  }
  if (confidence >= 0.7) return { label: "High", tone: "positive" };
  if (confidence >= 0.5) return { label: "Medium", tone: "neutral" };
  if (confidence >= MIN_CONFIDENCE) return { label: "Low", tone: "warning" };
  return { label: "Very low", tone: "muted" };
}

/** Signed percentage, e.g. +18% / -7% for probability-gap values. */
export function formatSignedPercent(value: number | null | undefined): string {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "n/a";
  }
  const pct = Math.round(value * 100);
  const sign = pct > 0 ? "+" : pct < 0 ? "−" : "";
  return `${sign}${Math.abs(pct)}%`;
}

/** Tailwind class fragments for each tone, kept in one place for consistency. */
export function toneClasses(tone: SignalTone): { text: string; bg: string; border: string } {
  switch (tone) {
    case "positive":
      return {
        text: "text-emerald-100",
        bg: "bg-emerald-400/12",
        border: "border-emerald-300/30"
      };
    case "warning":
      return { text: "text-amber-100", bg: "bg-amber-400/12", border: "border-amber-300/30" };
    case "negative":
      return { text: "text-rose-100", bg: "bg-rose-400/12", border: "border-rose-300/30" };
    case "neutral":
      return { text: "text-sky-100", bg: "bg-sky-400/12", border: "border-sky-300/30" };
    default:
      return { text: "text-slate-300", bg: "bg-white/8", border: "border-white/15" };
  }
}
