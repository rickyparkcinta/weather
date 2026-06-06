import { jsonError, jsonOk } from "@/lib/api/responses";
import { listCombinedSignals } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const cityId = new URL(request.url).searchParams.get("cityId") ?? undefined;
    const signals = await listCombinedSignals(cityId);
    return jsonOk({ data: signals });
  } catch (error) {
    return jsonError("Failed to load combined signals", 500, error instanceof Error ? error.message : error);
  }
}
