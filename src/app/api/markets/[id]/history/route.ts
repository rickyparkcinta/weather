import { jsonError, jsonOk, SHORT_CACHE_HEADERS } from "@/lib/api/responses";
import { getMarketHistory } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const history = await getMarketHistory(id);
    return jsonOk({ data: history }, { headers: SHORT_CACHE_HEADERS });
  } catch (error) {
    return jsonError("Failed to load market history", 500, error instanceof Error ? error.message : error);
  }
}
