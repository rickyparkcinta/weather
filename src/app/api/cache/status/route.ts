import { jsonError, jsonOk } from "@/lib/api/responses";
import { getCacheStatus } from "@/lib/data/intelligence";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return jsonOk({ data: await getCacheStatus() });
  } catch (error) {
    return jsonError("Failed to load cache status", 500, error instanceof Error ? error.message : error);
  }
}
