import { jsonError, jsonOk } from "@/lib/api/responses";
import { getHealthReport } from "@/lib/data/health";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const health = await getHealthReport();
    return jsonOk({
      ok: health.warnings.every((warning) => warning.level !== "error"),
      mode: health.demoMode ? "demo" : "production",
      counts: health.counts,
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    return jsonError("Health check failed", 500, error instanceof Error ? error.message : error);
  }
}
