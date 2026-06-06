import { listCities, listCombinedSignals, listForecastPoints, listMarkets, usingDemoData } from "@/lib/data/queries";
import { getEnv, isDemoModeEnabled } from "@/lib/env";
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
  demoMode: boolean;
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

export async function getHealthReport(): Promise<HealthReport> {
  const demoMode = usingDemoData();
  const supabaseConfigured = Boolean(getEnv("NEXT_PUBLIC_SUPABASE_URL") && getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"));
  const serviceRoleConfigured = Boolean(getEnv("SUPABASE_SERVICE_ROLE_KEY"));

  const [cities, forecast, markets, signals] = await Promise.all([
    listCities(),
    listForecastPoints({}),
    listMarkets(),
    listCombinedSignals()
  ]);

  // A read that succeeds outside demo mode means live data is reachable.
  const supabaseReachable = supabaseConfigured && !demoMode;

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
      status: (ingestion?.status as string) ?? (demoMode ? "demo" : "none"),
      detail: ingestion
        ? `${ingestion.source ?? "unknown"} · seen ${ingestion.records_seen ?? 0} · inserted ${ingestion.records_inserted ?? 0}`
        : "No ingestion runs recorded."
    },
    {
      label: "Latest forecast run",
      at: (forecastRun?.run_time as string) ?? null,
      status: (forecastRun?.status as string) ?? (demoMode ? "demo" : "none"),
      detail: forecastRun ? `${forecastRun.provider ?? "?"} / ${forecastRun.model ?? "?"}` : "No forecast runs recorded."
    },
    {
      label: "Latest market update",
      at: (market?.updated_at as string) ?? null,
      status: market ? (market.status as string) ?? "active" : demoMode ? "demo" : "none",
      detail: market ? `${market.provider ?? "?"} · ${market.title ?? ""}`.slice(0, 80) : "No market events recorded."
    }
  ];

  const warnings: Warning[] = [];
  if (demoMode) {
    warnings.push({
      level: "warn",
      message: "Running on demo data. Configure Supabase and run an ingestion sync to go live."
    });
  }
  if (supabaseConfigured && !serviceRoleConfigured) {
    warnings.push({
      level: "warn",
      message: "Service role key is missing. Ingestion and sync routes cannot write data."
    });
  }
  if (supabaseReachable) {
    if (cities.length === 0) warnings.push({ level: "error", message: "No cities found in Supabase. Seed the cities table." });
    if (forecast.length === 0) warnings.push({ level: "error", message: "No forecast points found. Run a forecast ingestion." });
    if (markets.length === 0) warnings.push({ level: "warn", message: "No market events found. Run a market sync." });
    if (signals.length === 0) warnings.push({ level: "warn", message: "No combined signals computed yet." });

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
    { key: "NEXT_PUBLIC_SUPABASE_URL", label: "Supabase URL", configured: Boolean(getEnv("NEXT_PUBLIC_SUPABASE_URL")), required: true },
    { key: "NEXT_PUBLIC_SUPABASE_ANON_KEY", label: "Supabase anon key", configured: Boolean(getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY")), required: true },
    { key: "SUPABASE_SERVICE_ROLE_KEY", label: "Service role key (server only)", configured: serviceRoleConfigured, required: true },
    { key: "INGESTION_SECRET", label: "Ingestion secret", configured: Boolean(getEnv("INGESTION_SECRET")), required: true },
    { key: "NEXT_PUBLIC_DEFAULT_CITY", label: "Default city slug", configured: Boolean(getEnv("NEXT_PUBLIC_DEFAULT_CITY")), required: false },
    { key: "NEXT_PUBLIC_ENABLE_DEMO_DATA", label: "Demo data flag", configured: Boolean(getEnv("NEXT_PUBLIC_ENABLE_DEMO_DATA")), required: false }
  ];

  return {
    demoMode: isDemoModeEnabled() || demoMode,
    supabaseConfigured,
    supabaseReachable,
    serviceRoleConfigured,
    counts: {
      cities: cities.length,
      forecast: forecast.length,
      markets: markets.length,
      signals: signals.length
    },
    runs,
    warnings,
    env
  };
}
