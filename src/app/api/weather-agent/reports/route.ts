import { jsonError, jsonOk } from "@/lib/api/responses";
import { getCityBySlug, listWeatherAgentReports } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const citySlug = searchParams.get("citySlug") ?? undefined;
    let cityId = searchParams.get("cityId") ?? undefined;
    const marketEventId = searchParams.get("marketEventId") ?? undefined;

    if (!cityId && citySlug) {
      const city = await getCityBySlug(citySlug);
      if (!city) {
        return jsonError("City not found", 404);
      }
      cityId = city.id;
    }

    if (!cityId) {
      return jsonError("cityId or citySlug is required", 400);
    }

    const reports = await listWeatherAgentReports({ cityId, marketEventId, limit: marketEventId ? 1 : 20 });
    return jsonOk({ data: reports });
  } catch (error) {
    return jsonError("Failed to load weather agent reports", 500, error instanceof Error ? error.message : error);
  }
}
