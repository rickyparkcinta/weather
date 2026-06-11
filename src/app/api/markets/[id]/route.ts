import { jsonError, jsonOk, SHORT_CACHE_HEADERS } from "@/lib/api/responses";
import { getMarketById } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const market = await getMarketById(id);
    if (!market) {
      return jsonError("Market not found", 404);
    }

    return jsonOk({ data: market }, { headers: SHORT_CACHE_HEADERS });
  } catch (error) {
    return jsonError("Failed to load market", 500, error instanceof Error ? error.message : error);
  }
}
