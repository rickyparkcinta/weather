import { clampedIntParam, jsonError, jsonOk } from "@/lib/api/responses";
import { getTopSignals } from "@/lib/data/intelligence";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const limit = clampedIntParam(new URL(request.url).searchParams.get("limit"), 10, 50);
    const data = await getTopSignals(limit);
    return jsonOk({ data, telegram: { title: "Top model-market signals", lines: data.map((item) => `${item.title}: ${item.edge ?? "n/a"}`) } });
  } catch (error) {
    return jsonError("Failed to load top signals", 500, error instanceof Error ? error.message : error);
  }
}
