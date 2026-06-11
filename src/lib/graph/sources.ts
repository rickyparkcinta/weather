import { getDefaultCitySlug } from "@/lib/env";
import { mapCombinedSignal, mapMarketEvent } from "@/lib/data/mappers";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { CombinedSignal, ForecastRun, MarketEvent } from "@/types/domain";

/**
 * Graph-specific data access.
 *
 * These helpers keep queries capped and aggregated server-side so the
 * relationship graph stays responsive even against large tables.
 */

function requireLiveClient() {
  const client = getSupabaseServerClient();
  if (!client) {
    throw new Error(
      "Live data is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }
  return client;
}

function text(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function numberOrNull(value: unknown): number | null {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

/** A forecast run row projected to a provider_run node. */
export type GraphForecastRun = {
  id: string;
  provider: string;
  model: string;
  runTime: string;
  status: string;
  sourceUrl: string | null;
};

/** Aggregated forecast coverage for a city / variable / model triple. */
export type ForecastCoverageRow = {
  cityId: string;
  variable: string;
  provider: string;
  model: string;
  points: number;
  avgConfidence: number | null;
  latestRunTime: string | null;
};

/** Operational provider run-log row used by the Workbench metrics + console. */
export type GraphProviderRunLog = {
  id: string;
  providerId: string;
  providerType: string;
  adapterVersion: string;
  status: string;
  startedAt: string | null;
  finishedAt: string | null;
  recordsSeen: number;
  recordsInserted: number;
  recordsUpdated: number;
  staleAfter: string | null;
  error: string | null;
};

export type GraphCityMarketLink = {
  cityId: string;
  marketEventId: string;
  relevanceScore: number;
  linkReason: string | null;
};

function mapForecastRunRow(row: Record<string, unknown>): GraphForecastRun {
  return {
    id: String(row.id),
    provider: String(row.provider),
    model: String(row.model),
    runTime: String(row.run_time),
    status: String(row.status ?? "complete"),
    sourceUrl: text(row.source_url)
  };
}

/**
 * Most recent forecast runs, newest first. Backs the provider_run nodes and
 * the "latest provider runs" default scope.
 */
export async function listRecentForecastRuns(limit = 40): Promise<GraphForecastRun[]> {
  const client = requireLiveClient();
  const { data, error } = await client
    .from("forecast_runs")
    .select("id, provider, model, run_time, status, source_url")
    .order("run_time", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(mapForecastRunRow);
}

/**
 * Forecast coverage aggregated by city / variable / model. We read a capped
 * window of forecast points for the in-scope cities and fold them into one row
 * per (city, variable, model) so the graph builder never holds raw points.
 */
export async function listForecastCoverage(cityIds: string[], pointCap = 2000): Promise<ForecastCoverageRow[]> {
  if (cityIds.length === 0) return [];

  const client = requireLiveClient();
  const { data, error } = await client
    .from("forecast_points")
    .select("city_id, variable, provider, model, confidence, run_time")
    .in("city_id", cityIds)
    .order("run_time", { ascending: false })
    .limit(pointCap);

  if (error) {
    throw new Error(error.message);
  }

  return aggregateCoverage(
    (data ?? []).map((row) => ({
      cityId: String(row.city_id),
      variable: String(row.variable),
      provider: String(row.provider),
      model: String(row.model),
      confidence: numberOrNull(row.confidence),
      runTime: text(row.run_time)
    }))
  );
}

type RawCoverage = {
  cityId: string;
  variable: string;
  provider: string;
  model: string;
  confidence: number | null;
  runTime: string | null;
};

function aggregateCoverage(rows: RawCoverage[]): ForecastCoverageRow[] {
  const buckets = new Map<string, { row: ForecastCoverageRow; confidenceSum: number; confidenceCount: number }>();

  for (const row of rows) {
    const key = `${row.cityId}::${row.variable}::${row.model}`;
    let bucket = buckets.get(key);
    if (!bucket) {
      bucket = {
        row: {
          cityId: row.cityId,
          variable: row.variable,
          provider: row.provider,
          model: row.model,
          points: 0,
          avgConfidence: null,
          latestRunTime: row.runTime
        },
        confidenceSum: 0,
        confidenceCount: 0
      };
      buckets.set(key, bucket);
    }

    bucket.row.points += 1;
    if (typeof row.confidence === "number" && Number.isFinite(row.confidence)) {
      bucket.confidenceSum += row.confidence;
      bucket.confidenceCount += 1;
    }
    if (row.runTime && (!bucket.row.latestRunTime || row.runTime > bucket.row.latestRunTime)) {
      bucket.row.latestRunTime = row.runTime;
    }
  }

  return Array.from(buckets.values()).map(({ row, confidenceSum, confidenceCount }) => ({
    ...row,
    avgConfidence: confidenceCount > 0 ? Number((confidenceSum / confidenceCount).toFixed(3)) : null
  }));
}

/**
 * Weather markets linked to any of the in-scope cities. Uses the GIN-indexed
 * `city_ids` overlap operator and caps the result.
 */
export async function listMarketsLinkedToCities(cityIds: string[], limit = 80): Promise<MarketEvent[]> {
  if (cityIds.length === 0) return [];

  const client = requireLiveClient();
  const { data, error } = await client
    .from("market_events")
    .select("*")
    .overlaps("city_ids", cityIds)
    .order("volume", { ascending: false, nullsFirst: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapMarketEvent(row));
}

/** City-market links for the in-scope cities (relevance-weighted edges). */
export async function listCityMarketLinks(cityIds: string[], limit = 300): Promise<GraphCityMarketLink[]> {
  if (cityIds.length === 0) return [];

  const client = requireLiveClient();
  const { data, error } = await client
    .from("city_market_links")
    .select("city_id, market_event_id, relevance_score, link_reason")
    .in("city_id", cityIds)
    .order("relevance_score", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => ({
    cityId: String(row.city_id),
    marketEventId: String(row.market_event_id),
    relevanceScore: numberOrNull(row.relevance_score) ?? 0,
    linkReason: text(row.link_reason)
  }));
}

/** Latest combined signals (capped), newest first, in domain shape. */
export async function listRecentCombinedSignals(limit = 120): Promise<CombinedSignal[]> {
  const client = requireLiveClient();
  const { data, error } = await client
    .from("combined_signals")
    .select(
      "id, city_id, market_event_id, forecast_variable, signal_type, model_probability, market_probability, disagreement, raw_edge, adjusted_edge, confidence, freshness_status, status, explanation, computed_at, raw"
    )
    .order("computed_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapCombinedSignal(row));
}

/**
 * Operational provider run logs for the Workbench panel. Returns an empty
 * list if the table is not present yet (older databases).
 */
export async function listProviderRunLogs(limit = 60): Promise<GraphProviderRunLog[]> {
  const client = getSupabaseServerClient();
  if (!client) return [];

  const { data, error } = await client
    .from("provider_run_logs")
    .select(
      "id, provider_id, provider_type, adapter_version, status, started_at, finished_at, records_seen, records_inserted, records_updated, stale_after, error"
    )
    .order("started_at", { ascending: false })
    .limit(limit);

  if (error) {
    // provider_run_logs may not exist on every deployment; degrade gracefully.
    return [];
  }

  return (data ?? []).map((row) => ({
    id: String(row.id),
    providerId: String(row.provider_id),
    providerType: String(row.provider_type),
    adapterVersion: String(row.adapter_version ?? "n/a"),
    status: String(row.status ?? "complete"),
    startedAt: text(row.started_at),
    finishedAt: text(row.finished_at),
    recordsSeen: numberOrNull(row.records_seen) ?? 0,
    recordsInserted: numberOrNull(row.records_inserted) ?? 0,
    recordsUpdated: numberOrNull(row.records_updated) ?? 0,
    staleAfter: text(row.stale_after),
    error: text(row.error)
  }));
}

export function getGraphDefaultCitySlug() {
  return getDefaultCitySlug();
}

export type { ForecastRun };
