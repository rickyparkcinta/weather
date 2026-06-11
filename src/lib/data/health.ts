import { listCities, listCombinedSignals, listForecastPoints, listMarkets } from "@/lib/data/queries";
import { getEnv } from "@/lib/env";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export type EnvCheck = { key: string; label: string; configured: boolean; required: boolean };

export type RunInfo = {
  label: string;
  at: string | null;
  status: string | null;
  detail: string | null;
};

export type Warning = { level: "warn" | "error"; message: string };

export type HealthReport = {
  supabaseConfigured: boolean;
  supabaseReachable: boolean;
  serviceRoleConfigured: boolean;
  counts: { cities: number; forecast: number; markets: number; signals: number };
  runs: RunInfo[];
  warnings: Warning[];
  env: EnvCheck[];
};

const STALE_HOURS = 24;

function hoursSince(value: string | null | undefined): number | null {
  if (!value) return null;
  const ms = Date.now() - new Date(value).getTime();
  return Number.isFinite(ms) ? ms / 3_600_000 : null;
}

async function latestRow(table: string, orderColumn: string): Promise<Record<string, unknown> | null> {
  const client = getSupabaseAdminClient() ?? getSupabaseServerClient();
  if (!client) return null;
  try {
    const { data, error } = await client
      .from(table)
      .select("*")
      .order(orderColumn, { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) return null;
    return (data as Record<string, unknown> | null) ?? null;
  } catch {
    return null;
  }
}

async function safeCount<T>(load: () => Promise<T[]>) {
  try {
    return { count: (await load()).length, error: null as string | null };
  } catch (error) {
    return { count: 0, error: error instanceof Error ? error.message : String(error) };
  }
}

export async function getHealthReport(): Promise<HealthReport> {
  const supabaseConfigured = Boolean(getEnv("NEXT_PUBLIC_SUPABASE_URL") && getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"));
  const serviceRoleConfigured = Boolean(getEnv("SUPABASE_SERVICE_ROLE_KEY"));

  const [cities, forecast, markets, signals] = await Promise.all([
    safeCount(() => listCities()),
    safeCount(() => listForecastPoints({})),
    safeCount(() => listMarkets()),
    safeCount(() => listCombinedSignals())
  ]);

  const liveReadErrors = [cities.error, forecast.error, markets.error, signals.error].filter((error): error is string => Boolean(error));
  const supabaseReachable = supabaseConfigured && liveReadErrors.length === 0;

  const [ingestion, forecastRun, market] = supabaseReachable
    ? await Promise.all([
        latestRow("ingestion_runs", "started_at"),
        latestRow("forecast_runs", "run_time"),
        latestRow("market_events", "updated_at")
      ])
    : [null, null, null];

  const runs: RunInfo[] = [
    {
      label: "Latest ingestion run",
      at: (ingestion?.finished_at as string) ?? (ingestion?.started_at as string) ?? null,
      status: (ingestion?.status as string) ?? "none",
      detail: ingestion
        ? `${ingestion.source ?? "unknown"} · seen ${ingestion.records_seen ?? 0} · inserted ${ingestion.records_inserted ?? 0}`
        : "No ingestion runs recorded."
    },
    {
      label: "Latest forecast run",
      at: (forecastRun?.run_time as string) ?? null,
      status: (forecastRun?.status as string) ?? "none",
      detail: forecastRun ? `${forecastRun.provider ?? "?"} / ${forecastRun.model ?? "?"}` : "No forecast runs recorded."
    },
    {
      label: "Latest market update",
      at: (market?.updated_at as string) ?? null,
      status: market ? (market.status as string) ?? "active" : "none",
      detail: market ? `${market.provider ?? "?"} · ${market.title ?? ""}`.slice(0, 80) : "No market events recorded."
    }
  ];

  const warnings: Warning[] = [];
  if (!supabaseConfigured) {
    warnings.push({
      level: "error",
      message: "Public database connection settings are missing."
    });
  }
  if (supabaseConfigured && !serviceRoleConfigured) {
    warnings.push({
      level: "warn",
      message: "Service role key is missing. Ingestion and sync routes cannot write data."
    });
  }
  if (!getEnv("INGESTION_SECRET") && !getEnv("CRON_SECRET")) {
    warnings.push({
      level: "warn",
      message: "No ingestion or cron secret is configured. Sync routes cannot be triggered securely."
    });
  }
  for (const error of liveReadErrors) {
    warnings.push({ level: "error", message: `Live data read failed: ${error}` });
  }
  if (supabaseReachable) {
    if (cities.count === 0) warnings.push({ level: "error", message: "No cities found in the live database. Seed the cities table." });
    if (forecast.count === 0) warnings.push({ level: "error", message: "No forecast points found. Run a forecast ingestion." });
    if (markets.count === 0) warnings.push({ level: "warn", message: "No market events found. Run a market sync." });
    if (signals.count === 0) warnings.push({ level: "warn", message: "No combined signals computed yet." });

    for (const run of runs) {
      const age = hoursSince(run.at);
      if (age !== null && age > STALE_HOURS) {
        warnings.push({
          level: "warn",
          message: `${run.label} is stale (${Math.round(age)}h old). Trigger a fresh sync.`
        });
      }
    }
  }

  const env: EnvCheck[] = [
    { key: "NEXT_PUBLIC_SUPABASE_URL", label: "Public database URL", configured: Boolean(getEnv("NEXT_PUBLIC_SUPABASE_URL")), required: true },
    { key: "NEXT_PUBLIC_SUPABASE_ANON_KEY", label: "Public database key", configured: Boolean(getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY")), required: true },
    { key: "SUPABASE_SERVICE_ROLE_KEY", label: "Service role key (server only)", configured: serviceRoleConfigured, required: true },
    { key: "WEATHER_PROVIDER_KEYS", label: "Weather provider keys", configured: Boolean(getEnv("WEATHER_PROVIDER_KEYS")), required: false },
    { key: "MARKET_PROVIDER_KEYS", label: "Market provider keys", configured: Boolean(getEnv("MARKET_PROVIDER_KEYS")), required: false },
    { key: "AI_PROVIDER_KEY", label: "AI provider key", configured: Boolean(getEnv("AI_PROVIDER_KEY")), required: false },
    { key: "ENABLE_REALTIME", label: "Realtime updates", configured: Boolean(getEnv("ENABLE_REALTIME")), required: false },
    { key: "ENABLE_PAYMENTS", label: "Payments skeleton", configured: Boolean(getEnv("ENABLE_PAYMENTS")), required: false },
    { key: "ENABLE_ALERTS", label: "Alert framework", configured: Boolean(getEnv("ENABLE_ALERTS")), required: false },
    { key: "OPS_ADMIN_EMAILS", label: "Ops admin emails", configured: Boolean(getEnv("OPS_ADMIN_EMAILS")), required: false },
    { key: "INGESTION_SECRET", label: "Ingestion secret", configured: Boolean(getEnv("INGESTION_SECRET")), required: true },
    { key: "CRON_SECRET", label: "Vercel cron secret", configured: Boolean(getEnv("CRON_SECRET")), required: false },
    { key: "NEXT_PUBLIC_DEFAULT_CITY", label: "Default city slug", configured: Boolean(getEnv("NEXT_PUBLIC_DEFAULT_CITY")), required: false }
  ];

  return {
    supabaseConfigured,
    supabaseReachable,
    serviceRoleConfigured,
    counts: {
      cities: cities.count,
      forecast: forecast.count,
      markets: markets.count,
      signals: signals.count
    },
    runs,
    warnings,
    env
  };
}
