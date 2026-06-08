import { jsonError, jsonOk } from "@/lib/api/responses";
import { getEdgeSummaries } from "@/lib/data/intelligence";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const limit = Number(new URL(request.url).searchParams.get("limit") ?? 20);
    return jsonOk({ data: await getEdgeSummaries(Number.isFinite(limit) ? limit : 20) });
  } catch (error) {
    return jsonError("Failed to load extension edge summary", 500, error instanceof Error ? error.message : error);
  }
}
