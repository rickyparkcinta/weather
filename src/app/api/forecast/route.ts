import { jsonError, jsonOk, SHORT_CACHE_HEADERS } from "@/lib/api/responses";
import { listForecastPoints } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const cityId = url.searchParams.get("cityId") ?? undefined;
    const variable = url.searchParams.get("variable") ?? undefined;
    const from = url.searchParams.get("from") ?? undefined;
    const to = url.searchParams.get("to") ?? undefined;

    const forecast = await listForecastPoints({ cityId, variable, from, to });
    return jsonOk({ data: forecast }, { headers: SHORT_CACHE_HEADERS });
  } catch (error) {
    return jsonError("Failed to load forecast", 500, error instanceof Error ? error.message : error);
  }
}
