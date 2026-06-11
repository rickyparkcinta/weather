import { jsonError, jsonOk, SHORT_CACHE_HEADERS } from "@/lib/api/responses";
import { buildRelationshipGraph } from "@/lib/graph/build";

export const dynamic = "force-dynamic";

function parsePositiveInt(value: string | null, fallback: number, max: number): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(parsed, max);
}

export async function GET(request: Request) {
  try {
    const params = new URL(request.url).searchParams;
    const graph = await buildRelationshipGraph({
      cityLimit: parsePositiveInt(params.get("cityLimit"), 30, 200),
      marketLimit: parsePositiveInt(params.get("marketLimit"), 80, 400),
      signalLimit: parsePositiveInt(params.get("signalLimit"), 120, 500),
      forecastRunLimit: parsePositiveInt(params.get("forecastRunLimit"), 40, 200)
    });

    return jsonOk(graph, { headers: SHORT_CACHE_HEADERS });
  } catch (error) {
    return jsonError(
      "Failed to build relationship graph",
      500,
      error instanceof Error ? error.message : error
    );
  }
}
