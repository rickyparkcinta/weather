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
      data: summary,
      telegram: {
        title: summary.title,
        lines: [
          `Model probability: ${summary.modelProbability ?? "n/a"}`,
          `Market probability: ${summary.marketProbability ?? "n/a"}`,
          `Signal: ${summary.probability.label}`,
          `Settlement: ${summary.settlement?.station.code ?? "unmapped"}`
        ]
      }
    });
  } catch (error) {
    return jsonError("Failed to load bot market payload", 500, error instanceof Error ? error.message : error);
  }
}
