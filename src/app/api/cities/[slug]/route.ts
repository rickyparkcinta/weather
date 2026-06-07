import { jsonError, jsonOk } from "@/lib/api/responses";
import { getCityBySlug, listCombinedSignals, listForecastPoints, listMarkets, listWeatherAgentReports, usingDemoData } from "@/lib/data/queries";

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

    return jsonOk({ data: { city, forecast, markets, signals, weatherAgentReports }, demoMode: usingDemoData() });
  } catch (error) {
    return jsonError("Failed to load city", 500, error instanceof Error ? error.message : error);
  }
}
