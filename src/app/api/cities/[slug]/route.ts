import { jsonError, jsonOk, SHORT_CACHE_HEADERS } from "@/lib/api/responses";
import { getCityBySlug, listCombinedSignals, listForecastPoints, listMarkets, listWeatherAgentReports } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params;
    const city = await getCityBySlug(slug);
    if (!city) {
      return jsonError("City not found", 404);
    }

    const [forecast, markets, signals, weatherAgentReports] = await Promise.all([
      listForecastPoints({ cityId: city.id }),
      listMarkets({ cityId: city.id }),
      listCombinedSignals(city.id),
      listWeatherAgentReports({ cityId: city.id, limit: 200 })
    ]);

    return jsonOk({ data: { city, forecast, markets, signals, weatherAgentReports } }, { headers: SHORT_CACHE_HEADERS });
  } catch (error) {
    return jsonError("Failed to load city", 500, error instanceof Error ? error.message : error);
  }
}
