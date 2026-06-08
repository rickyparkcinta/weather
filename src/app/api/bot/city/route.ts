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
        topMarkets: summary.markets.slice(0, 5),
        forecastCount: summary.forecast.length,
        signalCount: summary.signals.length,
        generatedAt: summary.generatedAt
      },
      telegram: {
        title: `${summary.city.name} weather market brief`,
        lines: summary.markets.slice(0, 5).map((market) => `${market.title}: ${market.modelProbability ?? "n/a"} model / ${market.marketProbability ?? "n/a"} market`)
      },
      demoMode: summary.demoMode
    });
  } catch (error) {
    return jsonError("Failed to load bot city payload", 500, error instanceof Error ? error.message : error);
  }
}
