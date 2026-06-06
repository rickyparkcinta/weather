import { jsonError, jsonOk } from "@/lib/api/responses";
import { getMarketById, usingDemoData } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const market = await getMarketById(id);
    if (!market) {
      return jsonError("Market not found", 404);
    }

    return jsonOk({ data: market, demoMode: usingDemoData() });
  } catch (error) {
    return jsonError("Failed to load market", 500, error instanceof Error ? error.message : error);
  }
}
