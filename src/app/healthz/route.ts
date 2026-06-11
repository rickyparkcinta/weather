import { jsonError, jsonOk, NO_STORE_HEADERS } from "@/lib/api/responses";
import { getHealthReport } from "@/lib/data/health";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const health = await getHealthReport();
    // 503 only for a true outage (database unreachable/unconfigured) so uptime
    // checks page on real incidents; empty-data warnings stay 200 with ok=false.
    const reachable = health.supabaseConfigured && health.supabaseReachable;
    return jsonOk(
      {
        ok: health.warnings.every((warning) => warning.level !== "error"),
        reachable,
        mode: "production",
        counts: health.counts,
        generatedAt: new Date().toISOString()
      },
      { status: reachable ? 200 : 503, headers: NO_STORE_HEADERS }
    );
  } catch (error) {
    return jsonError("Health check failed", 500, error instanceof Error ? error.message : error);
  }
}
