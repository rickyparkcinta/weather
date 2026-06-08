import { jsonError, jsonOk } from "@/lib/api/responses";
import { getMarketSummary } from "@/lib/data/intelligence";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const id = new URL(request.url).searchParams.get("id");
    if (!id) return jsonError("Missing id query parameter", 400);
    const summary = await getMarketSummary(id);
    if (!summary) return jsonError("Market not found", 404);

    return jsonOk({
      data: {
        marketId: summary.marketId,
        title: summary.title,
        marketProbability: summary.marketProbability,
        modelProbability: summary.modelProbability,
        edge: summary.edge,
        confidence: summary.confidence,
        settlementSource: summary.settlementSource,
        freshness: summary.freshness
      }
    });
  } catch (error) {
    return jsonError("Failed to load extension market summary", 500, error instanceof Error ? error.message : error);
  }
}
