import { jsonError, jsonOk } from "@/lib/api/responses";
import { assertIngestionAuth } from "@/lib/ingest/auth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { realApiSyncOptionsFromEnv, syncRealApiData, type RealApiSyncOptions } from "@/lib/sync/real-api-sync";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

function bodyOptions(input: unknown): RealApiSyncOptions {
  if (!input || typeof input !== "object" || Array.isArray(input)) return {};
  const body = input as Record<string, unknown>;

  return {
    cityLimit: typeof body.cityLimit === "number" ? body.cityLimit : undefined,
    forecastDays: typeof body.forecastDays === "number" ? body.forecastDays : undefined,
    marketLimit: typeof body.marketLimit === "number" ? body.marketLimit : undefined,
    marketQueries: Array.isArray(body.marketQueries) ? body.marketQueries.filter((item): item is string => typeof item === "string") : undefined,
    includeKalshi: typeof body.includeKalshi === "boolean" ? body.includeKalshi : undefined,
    includePolymarket: typeof body.includePolymarket === "boolean" ? body.includePolymarket : undefined
  };
}

function queryOptions(request: Request): RealApiSyncOptions {
  const url = new URL(request.url);
  const numberParam = (name: string) => {
    const raw = url.searchParams.get(name);
    if (!raw) return undefined;
    const value = Number(raw);
    return Number.isFinite(value) ? value : undefined;
  };
  const booleanParam = (name: string) => {
    const raw = url.searchParams.get(name)?.toLowerCase();
    if (!raw) return undefined;
    if (["1", "true", "yes"].includes(raw)) return true;
    if (["0", "false", "no"].includes(raw)) return false;
    return undefined;
  };
  const marketQueries = url.searchParams.get("marketQueries")?.split(",").map((query) => query.trim()).filter(Boolean);

  return {
    cityLimit: numberParam("cityLimit"),
    forecastDays: numberParam("forecastDays"),
    marketLimit: numberParam("marketLimit"),
    marketQueries: marketQueries?.length ? marketQueries : undefined,
    includeKalshi: booleanParam("includeKalshi"),
    includePolymarket: booleanParam("includePolymarket")
  };
}

async function runSync(options: RealApiSyncOptions) {
  const client = getSupabaseAdminClient();
  if (!client) {
    return jsonError("Live data write client is not configured", 503);
  }

  try {
    const result = await syncRealApiData(client, {
      ...realApiSyncOptionsFromEnv(process.env),
      ...options
    });
    return jsonOk({ data: result });
  } catch (error) {
    return jsonError("Real API sync failed", 500, error instanceof Error ? error.message : error);
  }
}

export async function GET(request: Request) {
  const auth = assertIngestionAuth(request);
  if (!auth.ok) {
    return jsonError(auth.message, auth.status);
  }

  return runSync(queryOptions(request));
}

export async function POST(request: Request) {
  const auth = assertIngestionAuth(request);
  if (!auth.ok) {
    return jsonError(auth.message, auth.status);
  }

  const payload = await request.json().catch(() => ({}));
  return runSync(bodyOptions(payload));
}
