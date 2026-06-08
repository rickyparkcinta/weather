import { jsonError, jsonOk } from "@/lib/api/responses";
import { getProviderStatus } from "@/lib/data/intelligence";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return jsonOk({ data: await getProviderStatus() });
  } catch (error) {
    return jsonError("Failed to load provider status", 500, error instanceof Error ? error.message : error);
  }
}
