import { jsonError, jsonOk } from "@/lib/api/responses";
import { assertIngestionAuth } from "@/lib/ingest/auth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { syncRealApiData, type RealApiSyncOptions } from "@/lib/sync/real-api-sync";

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

export async function POST(request: Request) {
  const auth = assertIngestionAuth(request);
  if (!auth.ok) {
    return jsonError(auth.message, auth.status);
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return jsonError("Supabase admin client is not configured", 503);
  }

  try {
    const payload = await request.json().catch(() => ({}));
    const result = await syncRealApiData(client, bodyOptions(payload));
    return jsonOk({ data: result });
  } catch (error) {
    return jsonError("Real API sync failed", 500, error instanceof Error ? error.message : error);
  }
}
