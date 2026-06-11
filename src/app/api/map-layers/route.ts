import { jsonError, jsonOk } from "@/lib/api/responses";
import { getDashboardData } from "@/lib/data/queries";
import { buildMapLayerPayload } from "@/lib/map/layers";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const citySlug = new URL(request.url).searchParams.get("city") ?? undefined;
    const data = await getDashboardData(citySlug);

    return jsonOk({
      data: buildMapLayerPayload({
        city: data.selectedCity,
        cities: data.cities,
        forecast: data.forecast,
        markets: data.markets,
        signals: data.signals,
        generatedAt: data.generatedAt
      })
    });
  } catch (error) {
    return jsonError("Failed to build map-layer output", 500, error instanceof Error ? error.message : error);
  }
}
