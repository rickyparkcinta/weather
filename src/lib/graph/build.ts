import { listCities } from "@/lib/data/queries";
import {
  type GraphForecastRun,
  listCityMarketLinks,
  listForecastCoverage,
  listMarketsLinkedToCities,
  listProviderRunLogs,
  listRecentCombinedSignals,
  listRecentForecastRuns
} from "@/lib/graph/sources";
import {
  type GraphEdge,
  type GraphEdgeType,
  type GraphFreshness,
  type GraphNode,
  type RelationshipGraph,
  type RelationshipGraphResponse,
  type WorkbenchConsoleLine,
  type WorkbenchReport,
  type WorkbenchStep
} from "@/lib/graph/types";
import type { City, CombinedSignal, MarketEvent } from "@/types/domain";

export type BuildGraphOptions = {
  /** Top cities by importance_score. Default scope keeps the graph focused. */
  cityLimit?: number;
  marketLimit?: number;
  signalLimit?: number;
  forecastRunLimit?: number;
};

const DEFAULTS: Required<BuildGraphOptions> = {
  cityLimit: 30,
  marketLimit: 80,
  signalLimit: 120,
  forecastRunLimit: 40
};

const VARIABLE_LABELS: Record<string, string> = {
  temperature_2m: "Temperature (2m)",
  precipitation_probability: "Precipitation probability",
  precipitation: "Precipitation",
  wind_speed_10m: "Wind speed (10m)",
  air_quality: "Air quality",
  snowfall: "Snowfall"
};

function variableLabel(variable: string): string {
  return VARIABLE_LABELS[variable] ?? variable.replace(/_/g, " ");
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function freshnessFor(iso: string | null | undefined): GraphFreshness {
  if (!iso) return "unknown";
  const ms = Date.parse(iso);
  if (!Number.isFinite(ms)) return "unknown";
  const ageHours = (Date.now() - ms) / 3_600_000;
  if (ageHours <= 6) return "fresh";
  if (ageHours <= 24) return "aging";
  return "stale";
}

function normalizeFreshness(value: CombinedSignal["freshnessStatus"]): GraphFreshness {
  if (value === "fresh" || value === "aging" || value === "stale") return value;
  return "unknown";
}

function maxIso(a: string | null, b: string | null): string | null {
  if (!a) return b;
  if (!b) return a;
  return a > b ? a : b;
}

/**
 * Assemble the relationship graph plus the Workbench report from the platform's
 * Supabase entities. Everything is capped and aggregated up front so the result
 * stays bounded regardless of table size.
 */
export async function buildRelationshipGraph(
  options: BuildGraphOptions = {}
): Promise<RelationshipGraphResponse> {
  const opts = { ...DEFAULTS, ...options };
  const generatedAt = new Date().toISOString();

  const allCities = await listCities();
  const cities = allCities.slice(0, opts.cityLimit);
  const cityIds = cities.map((city) => city.id);
  const cityById = new Map(cities.map((city) => [city.id, city] as const));

  const [coverage, forecastRuns, markets, cityMarketLinks, signalRows, runLogs] = await Promise.all([
    listForecastCoverage(cityIds),
    listRecentForecastRuns(opts.forecastRunLimit),
    listMarketsLinkedToCities(cityIds, opts.marketLimit),
    listCityMarketLinks(cityIds),
    listRecentCombinedSignals(opts.signalLimit),
    listProviderRunLogs()
  ]);

  const nodes = new Map<string, GraphNode>();
  const edges = new Map<string, GraphEdge>();

  const upsertNode = (node: GraphNode) => {
    if (!nodes.has(node.id)) nodes.set(node.id, node);
    return node.id;
  };

  const addEdge = (
    id: string,
    source: string,
    target: string,
    type: GraphEdgeType,
    weight: number,
    label: string
  ) => {
    if (!nodes.has(source) || !nodes.has(target)) return;
    if (edges.has(id)) return;
    edges.set(id, { id, source, target, type, weight: Number(weight.toFixed(3)), label });
  };

  // --- City nodes ---------------------------------------------------------
  for (const city of cities) {
    upsertNode({
      id: `city:${city.id}`,
      type: "city",
      label: city.name,
      summary: `${city.name}, ${city.country}. Importance score ${Math.round(city.importanceScore)}.`,
      properties: {
        slug: city.slug,
        country: city.country,
        countryCode: city.countryCode,
        region: city.region,
        lat: Number(city.lat.toFixed(3)),
        lon: Number(city.lon.toFixed(3)),
        population: city.population,
        importanceScore: Math.round(city.importanceScore),
        timezone: city.timezone
      },
      freshnessStatus: "unknown",
      confidence: clamp01(city.importanceScore / 100),
      source: "cities"
    });
  }

  // --- Forecast variables + models from coverage --------------------------
  const variableAgg = new Map<string, { confidenceSum: number; count: number; latest: string | null }>();
  const modelAgg = new Map<
    string,
    { provider: string; confidenceSum: number; count: number; latest: string | null }
  >();

  let latestRunAt: string | null = null;
  let forecastPointsLoaded = 0;

  for (const row of coverage) {
    forecastPointsLoaded += row.points;
    latestRunAt = maxIso(latestRunAt, row.latestRunTime);

    const variableId = `variable:${row.variable}`;
    const modelId = `model:${row.model}`;
    const cityNodeId = `city:${row.cityId}`;

    const vAgg = variableAgg.get(row.variable) ?? { confidenceSum: 0, count: 0, latest: null };
    if (typeof row.avgConfidence === "number") {
      vAgg.confidenceSum += row.avgConfidence;
      vAgg.count += 1;
    }
    vAgg.latest = maxIso(vAgg.latest, row.latestRunTime);
    variableAgg.set(row.variable, vAgg);

    const mAgg = modelAgg.get(row.model) ?? {
      provider: row.provider,
      confidenceSum: 0,
      count: 0,
      latest: null
    };
    if (typeof row.avgConfidence === "number") {
      mAgg.confidenceSum += row.avgConfidence;
      mAgg.count += 1;
    }
    mAgg.latest = maxIso(mAgg.latest, row.latestRunTime);
    modelAgg.set(row.model, mAgg);

    // Ensure nodes exist before edges.
    if (!nodes.has(variableId)) {
      upsertNode({
        id: variableId,
        type: "forecast_variable",
        label: variableLabel(row.variable),
        summary: `Forecast variable ${variableLabel(row.variable)} across tracked cities.`,
        properties: { variable: row.variable },
        freshnessStatus: "unknown",
        confidence: null,
        source: "forecast_points"
      });
    }
    if (!nodes.has(modelId)) {
      upsertNode({
        id: modelId,
        type: "forecast_model",
        label: row.model,
        summary: `Forecast model ${row.model} (provider ${row.provider}).`,
        properties: { model: row.model, provider: row.provider },
        freshnessStatus: "unknown",
        confidence: null,
        source: `forecast_points · ${row.provider}`
      });
    }

    if (cityById.has(row.cityId)) {
      addEdge(
        `city_has_forecast:${row.cityId}:${row.variable}`,
        cityNodeId,
        variableId,
        "city_has_forecast",
        clamp01(row.avgConfidence ?? 0.5),
        "has forecast"
      );
    }
    addEdge(
      `forecast_from_model:${row.variable}:${row.model}`,
      variableId,
      modelId,
      "forecast_from_model",
      clamp01(Math.log10(row.points + 1) / 2),
      "from model"
    );
  }

  // Backfill variable/model confidence + freshness from aggregates.
  for (const [variable, agg] of variableAgg) {
    const node = nodes.get(`variable:${variable}`);
    if (node) {
      node.confidence = agg.count > 0 ? Number((agg.confidenceSum / agg.count).toFixed(3)) : null;
      node.freshnessStatus = freshnessFor(agg.latest);
    }
  }
  for (const [model, agg] of modelAgg) {
    const node = nodes.get(`model:${model}`);
    if (node) {
      node.confidence = agg.count > 0 ? Number((agg.confidenceSum / agg.count).toFixed(3)) : null;
      node.freshnessStatus = freshnessFor(agg.latest);
    }
  }

  // --- Providers + provider runs (forecast_runs) --------------------------
  const ensureProvider = (providerId: string, kind: string) => {
    const id = `provider:${providerId}`;
    if (!nodes.has(id)) {
      upsertNode({
        id,
        type: "provider",
        label: providerId,
        summary: `${kind} data provider ${providerId}.`,
        properties: { provider: providerId, kind },
        freshnessStatus: "unknown",
        confidence: null,
        source: "provider"
      });
    }
    return id;
  };

  const linkRunToModel = (run: GraphForecastRun, runNodeId: string) => {
    const modelId = `model:${run.model}`;
    if (!nodes.has(modelId)) {
      upsertNode({
        id: modelId,
        type: "forecast_model",
        label: run.model,
        summary: `Forecast model ${run.model} (provider ${run.provider}).`,
        properties: { model: run.model, provider: run.provider },
        freshnessStatus: freshnessFor(run.runTime),
        confidence: null,
        source: `forecast_runs · ${run.provider}`
      });
    }
    addEdge(
      `forecast_from_model:run:${run.id}`,
      runNodeId,
      modelId,
      "forecast_from_model",
      0.6,
      "from model"
    );
  };

  for (const run of forecastRuns) {
    latestRunAt = maxIso(latestRunAt, run.runTime);
    const providerId = ensureProvider(run.provider, "Forecast");
    const runNodeId = `run:${run.id}`;
    upsertNode({
      id: runNodeId,
      type: "provider_run",
      label: `${run.provider} · ${run.model}`,
      summary: `Forecast run for model ${run.model} from ${run.provider}.`,
      properties: {
        provider: run.provider,
        model: run.model,
        runTime: run.runTime,
        status: run.status,
        sourceUrl: run.sourceUrl
      },
      freshnessStatus: freshnessFor(run.runTime),
      confidence: null,
      source: `forecast_runs · ${run.provider}`
    });
    addEdge(
      `provider_updated_run:${run.id}`,
      providerId,
      runNodeId,
      "provider_updated_run",
      0.8,
      "updated run"
    );
    linkRunToModel(run, runNodeId);
  }

  // Operational run logs add provider_run nodes for market + weather adapters,
  // ensuring market providers (kalshi, polymarket) join the graph.
  let staleRunLogs = 0;
  let lastSuccessfulSync: string | null = null;
  for (const log of runLogs) {
    if (log.status === "stale" || log.status === "failed") staleRunLogs += 1;
    if (log.status === "complete") lastSuccessfulSync = maxIso(lastSuccessfulSync, log.finishedAt ?? log.startedAt);

    const providerId = ensureProvider(log.providerId, log.providerType === "market" ? "Market" : "Forecast");
    const runNodeId = `runlog:${log.id}`;
    upsertNode({
      id: runNodeId,
      type: "provider_run",
      label: `${log.providerId} sync`,
      summary: `${log.providerType} provider run (${log.status}) for ${log.providerId}.`,
      properties: {
        provider: log.providerId,
        providerType: log.providerType,
        adapterVersion: log.adapterVersion,
        status: log.status,
        recordsSeen: log.recordsSeen,
        recordsInserted: log.recordsInserted,
        recordsUpdated: log.recordsUpdated,
        startedAt: log.startedAt,
        finishedAt: log.finishedAt
      },
      freshnessStatus: log.status === "stale" ? "stale" : freshnessFor(log.finishedAt ?? log.startedAt),
      confidence: null,
      source: `provider_run_logs · ${log.providerId}`
    });
    addEdge(
      `provider_updated_run:log:${log.id}`,
      providerId,
      runNodeId,
      "provider_updated_run",
      0.6,
      "updated run"
    );
  }

  // --- Market events + stations -------------------------------------------
  const marketById = new Map(markets.map((market) => [market.id, market] as const));
  const linksByMarket = new Map<string, typeof cityMarketLinks>();
  for (const link of cityMarketLinks) {
    const list = linksByMarket.get(link.marketEventId) ?? [];
    list.push(link);
    linksByMarket.set(link.marketEventId, list);
  }

  const stationNode = (market: MarketEvent, primaryCity: City | null) => {
    const generic = !market.resolutionSource || /demo/i.test(market.resolutionSource);
    const id = generic && primaryCity ? `station:city:${primaryCity.id}` : `station:src:${market.resolutionSource}`;
    if (!nodes.has(id)) {
      const label = generic && primaryCity ? `${primaryCity.name} reference station` : market.resolutionSource ?? "Reference station";
      upsertNode({
        id,
        type: "station",
        label,
        summary: `Resolution / observation reference${primaryCity ? ` for ${primaryCity.name}` : ""}.`,
        properties: {
          resolutionSource: market.resolutionSource,
          city: primaryCity?.name ?? null
        },
        freshnessStatus: "unknown",
        confidence: null,
        source: "market_events.resolution_source"
      });
    }
    return id;
  };

  for (const market of markets) {
    const marketNodeId = `market:${market.id}`;
    const linkedCities = (linksByMarket.get(market.id) ?? [])
      .map((link) => ({ link, city: cityById.get(link.cityId) }))
      .filter((entry): entry is { link: (typeof cityMarketLinks)[number]; city: City } => Boolean(entry.city));

    const fallbackCities = market.cityIds
      .map((id) => cityById.get(id))
      .filter((city): city is City => Boolean(city));

    const primaryCity = linkedCities[0]?.city ?? fallbackCities[0] ?? null;

    upsertNode({
      id: marketNodeId,
      type: "market_event",
      label: market.title,
      summary: market.description ?? market.title,
      properties: {
        provider: market.provider,
        category: market.category,
        marketProbability: market.probability,
        bid: market.bid,
        ask: market.ask,
        volume: market.volume,
        liquidity: market.liquidity,
        openInterest: market.openInterest,
        status: market.status,
        closeTime: market.closeTime,
        url: market.url
      },
      freshnessStatus: freshnessFor(market.updatedAt ?? market.createdAt),
      confidence: null,
      source: `market_events · ${market.provider}`
    });

    if (linkedCities.length > 0) {
      for (const { link, city } of linkedCities) {
        addEdge(
          `city_linked_to_market:${city.id}:${market.id}`,
          `city:${city.id}`,
          marketNodeId,
          "city_linked_to_market",
          clamp01(link.relevanceScore || 0.6),
          link.linkReason ?? "linked to market"
        );
      }
    } else {
      for (const city of fallbackCities) {
        addEdge(
          `city_linked_to_market:${city.id}:${market.id}`,
          `city:${city.id}`,
          marketNodeId,
          "city_linked_to_market",
          0.6,
          "linked to market"
        );
      }
    }

    const stationId = stationNode(market, primaryCity);
    addEdge(
      `market_resolves_from_station:${market.id}`,
      marketNodeId,
      stationId,
      "market_resolves_from_station",
      0.5,
      "resolves from"
    );
  }

  // --- Combined signals ---------------------------------------------------
  const signals: CombinedSignal[] = signalRows;
  let freshSignals = 0;
  let staleSignals = 0;
  let signalsInScope = 0;

  for (const signal of signals) {
    const cityInScope = cityById.has(signal.cityId);
    const marketInScope = signal.marketEventId ? marketById.has(signal.marketEventId) : false;
    if (!cityInScope && !marketInScope) continue;

    signalsInScope += 1;
    const freshness = normalizeFreshness(signal.freshnessStatus);
    if (freshness === "fresh") freshSignals += 1;
    if (freshness === "stale") staleSignals += 1;

    const signalNodeId = `signal:${signal.id ?? `${signal.cityId}:${signal.marketEventId ?? "na"}`}`;
    const city = cityById.get(signal.cityId) ?? null;
    upsertNode({
      id: signalNodeId,
      type: "combined_signal",
      label: city ? `${city.name} · ${signal.forecastVariable ?? signal.signalType ?? "signal"}` : signal.signalType ?? "Combined signal",
      summary: signal.explanation ?? "Research signal comparing model probability with market probability.",
      properties: {
        status: signal.status,
        forecastVariable: signal.forecastVariable,
        modelProbability: signal.modelProbability,
        marketProbability: signal.marketProbability,
        rawEdge: signal.rawEdge ?? signal.disagreement ?? null,
        adjustedEdge: signal.adjustedEdge ?? null,
        confidence: signal.confidence ?? null,
        computedAt: signal.computedAt ?? null
      },
      freshnessStatus: freshness,
      confidence: typeof signal.confidence === "number" ? clamp01(signal.confidence) : null,
      source: "combined_signals"
    });

    if (signal.marketEventId && marketById.has(signal.marketEventId)) {
      addEdge(
        `market_has_signal:${signal.marketEventId}:${signalNodeId}`,
        `market:${signal.marketEventId}`,
        signalNodeId,
        "market_has_signal",
        1,
        "has signal"
      );
    }

    if (signal.forecastVariable) {
      const variableId = `variable:${signal.forecastVariable}`;
      if (!nodes.has(variableId)) {
        upsertNode({
          id: variableId,
          type: "forecast_variable",
          label: variableLabel(signal.forecastVariable),
          summary: `Forecast variable ${variableLabel(signal.forecastVariable)}.`,
          properties: { variable: signal.forecastVariable },
          freshnessStatus: "unknown",
          confidence: null,
          source: "combined_signals"
        });
      }
      addEdge(
        `signal_uses_probability:${signalNodeId}`,
        signalNodeId,
        variableId,
        "signal_uses_probability",
        clamp01(signal.confidence ?? 0.5),
        "uses probability"
      );
    }
  }

  // --- Risk products ------------------------------------------------------
  buildRiskProducts(cities, upsertNode, addEdge);

  // --- Stats + workbench --------------------------------------------------
  const nodeList = Array.from(nodes.values());
  const edgeList = Array.from(edges.values());

  const graph: RelationshipGraph = {
    nodes: nodeList,
    edges: edgeList,
    stats: {
      nodeCount: nodeList.length,
      edgeCount: edgeList.length,
      latestRunAt,
      freshSignals,
      staleSignals
    }
  };

  const workbench = buildWorkbenchReport({
    generatedAt,
    cityCount: cities.length,
    forecastRunCount: forecastRuns.length,
    runLogCount: runLogs.length,
    forecastPointsLoaded,
    marketsLinked: markets.length,
    cityMarketLinkCount: cityMarketLinks.length,
    signalsGenerated: signalsInScope,
    staleRecords: staleRunLogs + staleSignals,
    lastSuccessfulSync: lastSuccessfulSync ?? latestRunAt,
    nodeCount: nodeList.length,
    edgeCount: edgeList.length,
    providerCount: nodeList.filter((node) => node.type === "provider").length
  });

  return { ...graph, workbench, generatedAt };
}

const RISK_PRODUCTS: Array<{ id: string; label: string; summary: string; stride: number; take: number }> = [
  {
    id: "rainfall-cover",
    label: "Parametric Rainfall Cover",
    summary: "Parametric weather-risk product referencing precipitation thresholds.",
    stride: 1,
    take: 8
  },
  {
    id: "temperature-threshold",
    label: "Temperature Threshold Note",
    summary: "Weather-risk note referencing temperature-threshold exposure.",
    stride: 2,
    take: 8
  },
  {
    id: "cyclone-cat-bond",
    label: "Tropical Cyclone Cat Bond",
    summary: "Catastrophe / weather bond referencing tropical-cyclone exposure.",
    stride: 3,
    take: 6
  },
  {
    id: "cooling-degree-index",
    label: "Cooling Degree Day Index",
    summary: "Index product referencing cooling-degree-day exposure.",
    stride: 2,
    take: 7
  }
];

function buildRiskProducts(
  cities: City[],
  upsertNode: (node: GraphNode) => string,
  addEdge: (id: string, source: string, target: string, type: GraphEdgeType, weight: number, label: string) => void
) {
  for (const product of RISK_PRODUCTS) {
    const productNodeId = `risk_product:${product.id}`;
    const tracked = cities.filter((_, index) => index % product.stride === 0).slice(0, product.take);
    if (tracked.length === 0) continue;

    upsertNode({
      id: productNodeId,
      type: "risk_product",
      label: product.label,
      summary: `${product.summary} Tracks ${tracked.length} cities.`,
      properties: { product: product.id, trackedCities: tracked.length },
      freshnessStatus: "unknown",
      confidence: null,
      source: "risk_products"
    });

    for (const city of tracked) {
      addEdge(
        `risk_product_tracks_city:${product.id}:${city.id}`,
        productNodeId,
        `city:${city.id}`,
        "risk_product_tracks_city",
        clamp01(city.importanceScore / 100),
        "tracks city"
      );
    }
  }
}

type WorkbenchInput = {
  generatedAt: string;
  cityCount: number;
  forecastRunCount: number;
  runLogCount: number;
  forecastPointsLoaded: number;
  marketsLinked: number;
  cityMarketLinkCount: number;
  signalsGenerated: number;
  staleRecords: number;
  lastSuccessfulSync: string | null;
  nodeCount: number;
  edgeCount: number;
  providerCount: number;
};

function buildWorkbenchReport(input: WorkbenchInput): WorkbenchReport {
  const steps: WorkbenchStep[] = [
    {
      key: "load-cities",
      label: "Load cities",
      status: input.cityCount > 0 ? "complete" : "pending",
      detail: `Top ${input.cityCount} cities by importance_score`,
      count: input.cityCount
    },
    {
      key: "load-forecast-runs",
      label: "Load forecast runs",
      status: input.forecastRunCount > 0 ? "complete" : "pending",
      detail: `${input.forecastRunCount} runs, ${input.forecastPointsLoaded} forecast points aggregated`,
      count: input.forecastRunCount
    },
    {
      key: "load-markets",
      label: "Load markets",
      status: input.marketsLinked > 0 ? "complete" : "pending",
      detail: `${input.marketsLinked} weather markets in scope`,
      count: input.marketsLinked
    },
    {
      key: "link-markets",
      label: "Link markets to cities",
      status: input.cityMarketLinkCount > 0 ? "complete" : "pending",
      detail: `${input.cityMarketLinkCount} city-market links`,
      count: input.cityMarketLinkCount
    },
    {
      key: "compute-signals",
      label: "Compute signals",
      status: input.signalsGenerated > 0 ? "complete" : "pending",
      detail: `${input.signalsGenerated} combined research signals`,
      count: input.signalsGenerated
    },
    {
      key: "build-graph",
      label: "Build graph",
      status: "complete",
      detail: `${input.nodeCount} nodes · ${input.edgeCount} edges`,
      count: input.nodeCount
    }
  ];

  const baseMs = Date.parse(input.generatedAt);
  const line = (offsetSeconds: number, level: WorkbenchConsoleLine["level"], message: string): WorkbenchConsoleLine => ({
    at: new Date(baseMs + offsetSeconds * 1000).toISOString(),
    level,
    message
  });

  const consoleLines: WorkbenchConsoleLine[] = [
    line(0, "info", "relationship-graph build started"),
    line(1, "info", `cities: loaded ${input.cityCount} tracked cities by importance_score`),
    line(2, "info", `forecast: ${input.forecastRunCount} runs · ${input.forecastPointsLoaded} points aggregated server-side`),
    line(3, "info", `markets: ${input.marketsLinked} weather markets linked to scope`),
    line(4, "info", `links: ${input.cityMarketLinkCount} city-market relevance links resolved`),
    line(5, "info", `signals: ${input.signalsGenerated} combined signals (provenance + freshness attached)`),
    input.staleRecords > 0
      ? line(6, "warn", `freshness: ${input.staleRecords} stale records flagged for refresh`)
      : line(6, "info", "freshness: no stale records in current scope"),
    line(7, "info", `graph: ${input.nodeCount} nodes · ${input.edgeCount} edges · ${input.providerCount} providers`),
    line(8, "info", "relationship-graph build complete")
  ];

  return {
    steps,
    metrics: {
      agentCount: input.providerCount,
      providerRuns: input.forecastRunCount + input.runLogCount,
      forecastPointsLoaded: input.forecastPointsLoaded,
      marketsLinked: input.marketsLinked,
      signalsGenerated: input.signalsGenerated,
      staleRecords: input.staleRecords,
      lastSuccessfulSync: input.lastSuccessfulSync
    },
    console: consoleLines
  };
}
