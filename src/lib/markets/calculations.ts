import type {
  CityMarketEvent,
  EnrichedCityMarketEvent,
  MarketFeedSummary,
  MarketFilterState,
  MarketSortKey,
  SignalLabel
} from "@/lib/markets/types";

/**
 * Estimated execution-cost assumptions used when an event does not carry real
 * values yet. Replace with provider data once live fee/slippage feeds exist.
 */
export const DEFAULT_COSTS = {
  fees: 0.01,
  slippage: 0.01,
  riskBuffer: 0.005
} as const;

const SIGNAL_THRESHOLDS = {
  minConfidence: 0.35,
  strong: 0.12,
  weak: 0.04
} as const;

/** Raw edge in decimal points: Edge = P_ai − P_market. */
export function calculateEdge(aiProbability: number, marketProbability: number) {
  return aiProbability - marketProbability;
}

/** Confidence-adjusted edge: AdjustedEdge = (P_ai − P_market) × Confidence. */
export function calculateAdjustedEdge(edge: number, confidence: number) {
  return edge * confidence;
}

/**
 * Net edge after execution costs. Costs always shrink the edge toward zero
 * regardless of direction, so a short edge of −0.10 with 0.02 of costs nets
 * −0.08 (not −0.12). For long edges this matches the documented formula
 * NetEdge = AdjustedEdge − Fees − Slippage − RiskBuffer.
 */
export function calculateNetEdge(
  adjustedEdge: number,
  costs: { fees?: number; slippage?: number; riskBuffer?: number } = {}
) {
  const totalCosts =
    (costs.fees ?? DEFAULT_COSTS.fees) +
    (costs.slippage ?? DEFAULT_COSTS.slippage) +
    (costs.riskBuffer ?? DEFAULT_COSTS.riskBuffer);
  const magnitude = Math.max(0, Math.abs(adjustedEdge) - totalCosts);
  if (magnitude === 0) return 0;
  return adjustedEdge < 0 ? -magnitude : magnitude;
}

/** Derives the feed signal label from raw edge and confidence. */
export function getSignalLabel(edge: number, confidence: number): SignalLabel {
  if (confidence < SIGNAL_THRESHOLDS.minConfidence) return "Avoid";
  if (edge >= SIGNAL_THRESHOLDS.strong) return "Strong Long";
  if (edge >= SIGNAL_THRESHOLDS.weak) return "Weak Long";
  if (edge <= -SIGNAL_THRESHOLDS.strong) return "Strong Short";
  if (edge <= -SIGNAL_THRESHOLDS.weak) return "Weak Short";
  return "Neutral";
}

export function enrichEvent(event: CityMarketEvent): EnrichedCityMarketEvent {
  const edge = calculateEdge(event.aiProbability, event.marketProbability);
  const adjustedEdge = calculateAdjustedEdge(edge, event.confidence);
  const netEdge = calculateNetEdge(adjustedEdge, {
    fees: event.fees,
    slippage: event.slippage,
    riskBuffer: event.riskBuffer
  });

  return {
    ...event,
    edge,
    adjustedEdge,
    netEdge,
    signal: getSignalLabel(edge, event.confidence)
  };
}

export function enrichEvents(events: CityMarketEvent[]): EnrichedCityMarketEvent[] {
  return events.map(enrichEvent);
}

/** 0.58 → "58%". */
export function formatProbability(value: number) {
  return `${Math.round(value * 100)}%`;
}

/** 0.14 → "+14 pts", −0.065 → "-6.5 pts". */
export function formatEdge(value: number) {
  const points = Math.round(value * 1000) / 10;
  const magnitude = Math.abs(points);
  const text = Number.isInteger(magnitude) ? magnitude.toFixed(0) : magnitude.toFixed(1);
  const sign = points > 0 ? "+" : points < 0 ? "-" : "";
  return `${sign}${text} pts`;
}

/** Compact relative timestamp: "just now", "6 min ago", "3 h ago", "2 d ago". */
export function formatUpdatedAgo(updatedAt: string, now: number) {
  const updated = new Date(updatedAt).getTime();
  if (Number.isNaN(updated)) return "unknown";
  const minutes = Math.max(0, Math.floor((now - updated) / 60_000));
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} h ago`;
  return `${Math.floor(hours / 24)} d ago`;
}

/** Signal ordering for the default feed sort: long edges surface first. */
const SIGNAL_RANK: Record<SignalLabel, number> = {
  "Strong Long": 0,
  "Weak Long": 1,
  "Strong Short": 2,
  "Weak Short": 3,
  Neutral: 4,
  Avoid: 5
};

function updatedTime(event: EnrichedCityMarketEvent) {
  const time = new Date(event.updatedAt).getTime();
  return Number.isNaN(time) ? 0 : time;
}

/**
 * Sorts a copy of the feed. The default "signal" sort ranks Strong Long
 * first, then highest absolute confidence-adjusted edge, then confidence,
 * then recency.
 */
export function sortEvents(
  events: EnrichedCityMarketEvent[],
  sort: MarketSortKey = "signal"
): EnrichedCityMarketEvent[] {
  const sorted = [...events];

  switch (sort) {
    case "edge":
      return sorted.sort(
        (a, b) =>
          Math.abs(b.adjustedEdge) - Math.abs(a.adjustedEdge) ||
          b.confidence - a.confidence
      );
    case "confidence":
      return sorted.sort(
        (a, b) => b.confidence - a.confidence || Math.abs(b.adjustedEdge) - Math.abs(a.adjustedEdge)
      );
    case "updated":
      return sorted.sort((a, b) => updatedTime(b) - updatedTime(a));
    case "city":
      return sorted.sort((a, b) => a.city.localeCompare(b.city) || updatedTime(b) - updatedTime(a));
    case "signal":
    default:
      return sorted.sort(
        (a, b) =>
          SIGNAL_RANK[a.signal] - SIGNAL_RANK[b.signal] ||
          Math.abs(b.adjustedEdge) - Math.abs(a.adjustedEdge) ||
          b.confidence - a.confidence ||
          updatedTime(b) - updatedTime(a)
      );
  }
}

export function filterEvents(
  events: EnrichedCityMarketEvent[],
  filters: Partial<MarketFilterState>
): EnrichedCityMarketEvent[] {
  const search = filters.search?.trim().toLowerCase() ?? "";

  return events.filter((event) => {
    if (search) {
      const haystack = `${event.city} ${event.country} ${event.countryCode} ${event.eventTitle}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    if (filters.category && filters.category !== "all" && event.eventCategory !== filters.category) {
      return false;
    }
    if (filters.signal && filters.signal !== "all" && event.signal !== filters.signal) {
      return false;
    }
    if (typeof filters.minEdge === "number" && Math.abs(event.edge) < filters.minEdge) {
      return false;
    }
    if (typeof filters.minConfidence === "number" && event.confidence < filters.minConfidence) {
      return false;
    }
    return true;
  });
}

export function summarizeEvents(events: EnrichedCityMarketEvent[]): MarketFeedSummary {
  if (events.length === 0) {
    return {
      totalEvents: 0,
      strongLongCount: 0,
      averageEdge: null,
      averageConfidence: null,
      lastUpdatedAt: null
    };
  }

  const lastUpdatedAt = events.reduce<string | null>((latest, event) => {
    if (!latest) return event.updatedAt;
    return updatedTime(event) > new Date(latest).getTime() ? event.updatedAt : latest;
  }, null);

  return {
    totalEvents: events.length,
    strongLongCount: events.filter((event) => event.signal === "Strong Long").length,
    averageEdge: events.reduce((sum, event) => sum + Math.abs(event.edge), 0) / events.length,
    averageConfidence: events.reduce((sum, event) => sum + event.confidence, 0) / events.length,
    lastUpdatedAt
  };
}

export const DEFAULT_MARKET_FILTERS: MarketFilterState = {
  search: "",
  category: "all",
  signal: "all",
  minEdge: 0,
  minConfidence: 0,
  sort: "signal"
};
