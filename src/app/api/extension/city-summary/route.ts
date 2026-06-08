import { jsonError, jsonOk } from "@/lib/api/responses";
import { getCitySummary } from "@/lib/data/intelligence";
import { getDefaultCitySlug } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const slug = new URL(request.url).searchParams.get("slug") ?? getDefaultCitySlug();
    const summary = await getCitySummary(slug);
    if (!summary) return jsonError("City not found", 404);
    return jsonOk({
      data: {
        city: summary.city,
        markets: summary.markets,
        staleSettlementSources: summary.settlements.filter((settlement) => settlement.stale).length,
        generatedAt: summary.generatedAt
      }
    });
  } catch (error) {
    return jsonError("Failed to load extension city summary", 500, error instanceof Error ? error.message : error);
  }
}
