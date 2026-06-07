/**
 * Relationship-graph domain model.
 *
 * The graph projects the weather-risk platform's existing Supabase entities
 * (cities, forecast runs, forecast points, market events, city-market links,
 * combined signals, provider run logs) into a single node/edge structure that
 * the WebGL canvas renders. Language stays research-oriented: nodes describe
 * model-market gaps, forecast confidence, freshness, and provenance rather than
 * any trading instruction.
 */

export type GraphNodeType =
  | "city"
  | "provider"
  | "forecast_model"
  | "forecast_variable"
  | "market_event"
  | "combined_signal"
  | "provider_run"
  | "station"
  | "risk_product";

export type GraphEdgeType =
  | "city_has_forecast"
  | "forecast_from_model"
  | "provider_updated_run"
  | "city_linked_to_market"
  | "market_has_signal"
  | "signal_uses_probability"
  | "market_resolves_from_station"
  | "risk_product_tracks_city";

export type GraphFreshness = "fresh" | "aging" | "stale" | "unknown";

export type GraphNode = {
  id: string;
  type: GraphNodeType;
  label: string;
  summary: string;
  properties: Record<string, string | number | boolean | null>;
  freshnessStatus: GraphFreshness;
  confidence: number | null;
  source: string;
};

export type GraphEdge = {
  id: string;
  source: string;
  target: string;
  type: GraphEdgeType;
  weight: number;
  label: string;
};

export type GraphStats = {
  nodeCount: number;
  edgeCount: number;
  latestRunAt: string | null;
  freshSignals: number;
  staleSignals: number;
};

export type RelationshipGraph = {
  nodes: GraphNode[];
  edges: GraphEdge[];
  stats: GraphStats;
};

export type WorkbenchStepStatus = "complete" | "pending" | "stale" | "error";

export type WorkbenchStep = {
  key: string;
  label: string;
  status: WorkbenchStepStatus;
  detail: string;
  count: number | null;
};

export type WorkbenchMetrics = {
  agentCount: number;
  providerRuns: number;
  forecastPointsLoaded: number;
  marketsLinked: number;
  signalsGenerated: number;
  staleRecords: number;
  lastSuccessfulSync: string | null;
};

export type WorkbenchConsoleLine = {
  at: string;
  level: "info" | "warn" | "error";
  message: string;
};

export type WorkbenchReport = {
  steps: WorkbenchStep[];
  metrics: WorkbenchMetrics;
  console: WorkbenchConsoleLine[];
};

/** Full payload returned by GET /api/relationship-graph. */
export type RelationshipGraphResponse = RelationshipGraph & {
  workbench: WorkbenchReport;
  generatedAt: string;
  demoMode: boolean;
};

export type GraphNodeTypeMeta = {
  type: GraphNodeType;
  label: string;
  color: string;
  /** Base render size before degree weighting. */
  size: number;
  description: string;
};

export type GraphEdgeTypeMeta = {
  type: GraphEdgeType;
  label: string;
  color: string;
  description: string;
};

/**
 * Node palette. Colours read cleanly on the light grid canvas while staying
 * within the institutional dark-mode accent family used across the product.
 */
export const NODE_TYPE_META: Record<GraphNodeType, GraphNodeTypeMeta> = {
  city: {
    type: "city",
    label: "City",
    color: "#2563eb",
    size: 9,
    description: "Tracked city with importance weighting, forecast coverage, and linked markets."
  },
  provider: {
    type: "provider",
    label: "Provider",
    color: "#0ea5e9",
    size: 8,
    description: "Forecast or market data provider feeding the platform."
  },
  forecast_model: {
    type: "forecast_model",
    label: "Forecast model",
    color: "#7c3aed",
    size: 8,
    description: "Numerical model behind forecast runs (e.g. blended GFS/ECMWF)."
  },
  forecast_variable: {
    type: "forecast_variable",
    label: "Forecast variable",
    color: "#14b8a6",
    size: 7,
    description: "Forecast quantity such as temperature, precipitation, or wind."
  },
  market_event: {
    type: "market_event",
    label: "Market event",
    color: "#f97316",
    size: 8,
    description: "Weather-linked prediction market with market-implied probability."
  },
  combined_signal: {
    type: "combined_signal",
    label: "Combined signal",
    color: "#e11d48",
    size: 7,
    description: "Research signal comparing model probability against market probability."
  },
  provider_run: {
    type: "provider_run",
    label: "Provider run",
    color: "#64748b",
    size: 6,
    description: "A single forecast run with provenance and freshness."
  },
  station: {
    type: "station",
    label: "Station",
    color: "#22c55e",
    size: 6,
    description: "Resolution / observation reference for a market event."
  },
  risk_product: {
    type: "risk_product",
    label: "Risk product",
    color: "#eab308",
    size: 8,
    description: "Weather-risk research product tracking exposure for a city set."
  }
};

export const NODE_TYPES = Object.keys(NODE_TYPE_META) as GraphNodeType[];

export const EDGE_TYPE_META: Record<GraphEdgeType, GraphEdgeTypeMeta> = {
  city_has_forecast: {
    type: "city_has_forecast",
    label: "has forecast",
    color: "#94a3b8",
    description: "City has forecast coverage for this variable."
  },
  forecast_from_model: {
    type: "forecast_from_model",
    label: "from model",
    color: "#a78bfa",
    description: "Forecast variable or run is produced by this model."
  },
  provider_updated_run: {
    type: "provider_updated_run",
    label: "updated run",
    color: "#38bdf8",
    description: "Provider produced or updated this forecast run."
  },
  city_linked_to_market: {
    type: "city_linked_to_market",
    label: "linked to market",
    color: "#fb923c",
    description: "City is linked to this weather market by relevance."
  },
  market_has_signal: {
    type: "market_has_signal",
    label: "has signal",
    color: "#fb7185",
    description: "Market event carries this combined research signal."
  },
  signal_uses_probability: {
    type: "signal_uses_probability",
    label: "uses probability",
    color: "#2dd4bf",
    description: "Signal uses the forecast variable's probability."
  },
  market_resolves_from_station: {
    type: "market_resolves_from_station",
    label: "resolves from",
    color: "#4ade80",
    description: "Market resolves from this station / reference source."
  },
  risk_product_tracks_city: {
    type: "risk_product_tracks_city",
    label: "tracks city",
    color: "#facc15",
    description: "Risk product tracks exposure for this city."
  }
};

export const EDGE_TYPES = Object.keys(EDGE_TYPE_META) as GraphEdgeType[];

export function nodeColor(type: GraphNodeType): string {
  return NODE_TYPE_META[type]?.color ?? "#94a3b8";
}

export function nodeBaseSize(type: GraphNodeType): number {
  return NODE_TYPE_META[type]?.size ?? 6;
}

export function edgeColor(type: GraphEdgeType): string {
  return EDGE_TYPE_META[type]?.color ?? "#cbd5e1";
}
