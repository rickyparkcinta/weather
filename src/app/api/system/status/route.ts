import { jsonError, jsonOk } from "@/lib/api/responses";
import { getSystemStatus } from "@/lib/data/intelligence";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return jsonOk({ data: await getSystemStatus() });
  } catch (error) {
    return jsonError("Failed to load system status", 500, error instanceof Error ? error.message : error);
  }
}
