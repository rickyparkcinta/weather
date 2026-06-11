import { jsonError, jsonOk, SHORT_CACHE_HEADERS } from "@/lib/api/responses";
import { listMarkets } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const cityId = url.searchParams.get("cityId") ?? undefined;
    const provider = url.searchParams.get("provider") ?? undefined;
    const category = url.searchParams.get("category") ?? undefined;

    const markets = await listMarkets({ cityId, provider, category });
    return jsonOk({ data: markets }, { headers: SHORT_CACHE_HEADERS });
  } catch (error) {
    return jsonError("Failed to load markets", 500, error instanceof Error ? error.message : error);
  }
}
