import { jsonError, jsonOk } from "@/lib/api/responses";
import { getSystemStatus } from "@/lib/data/intelligence";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getSystemStatus();
    return jsonOk({
      data,
      telegram: {
        title: `System status: ${data.mode}`,
        lines: [
          `${data.health.counts.cities} cities`,
          `${data.health.counts.markets} markets`,
          `${data.health.counts.signals} signals`,
          `${data.alerts.length} active operational alerts`
        ]
      }
    });
  } catch (error) {
    return jsonError("Failed to load bot system status", 500, error instanceof Error ? error.message : error);
  }
}
