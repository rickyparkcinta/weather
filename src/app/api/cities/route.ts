import { jsonError, jsonOk, SHORT_CACHE_HEADERS } from "@/lib/api/responses";
import { listCities } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cities = await listCities();
    return jsonOk({ data: cities }, { headers: SHORT_CACHE_HEADERS });
  } catch (error) {
    return jsonError("Failed to load cities", 500, error instanceof Error ? error.message : error);
  }
}
