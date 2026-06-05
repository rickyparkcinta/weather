import { jsonError, jsonOk } from "@/lib/api/responses";
import { getCityBySlug, listCombinedSignals, listForecastPoints, listMarkets, usingDemoData } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params;
    const city = await getCityBySlug(slug);
    if (!city) {
      return jsonError("City not found", 404);
    }

    const [forecast, markets, signals] = await Promise.all([
      listForecastPoints({ cityId: city.id }),
      listMarkets({ cityId: city.id }),
      listCombinedSignals(city.id)
    ]);

    return jsonOk({ data: { city, forecast, markets, signals }, demoMode: usingDemoData() });
  } catch (error) {
    return jsonError("Failed to load city", 500, error instanceof Error ? error.message : error);
  }
}
