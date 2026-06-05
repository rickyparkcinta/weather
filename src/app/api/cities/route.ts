import { jsonError, jsonOk } from "@/lib/api/responses";
import { listCities, usingDemoData } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const cities = await listCities();
    return jsonOk({ data: cities, demoMode: usingDemoData() });
  } catch (error) {
    return jsonError("Failed to load cities", 500, error instanceof Error ? error.message : error);
  }
}
