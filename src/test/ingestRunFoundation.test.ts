import { describe, expect, it } from "vitest";
import { createSubmittedPayloadAdapter } from "@/lib/ingest/adapters/submitted-payload";
import { getRunFreshness, isExpiredRunningRun } from "@/lib/ingest/run-status";
import { ingestRunSchema } from "@/lib/validation/schemas";

describe("ingest run foundation", () => {
  it("computes complete and stale provider run status", () => {
    expect(
      getRunFreshness("2026-06-06T00:00:00Z", 180, new Date("2026-06-06T01:00:00Z"))
    ).toMatchObject({
      stale: false,
      staleAfter: "2026-06-06T03:00:00.000Z",
      status: "complete"
    });

    expect(
      getRunFreshness("2026-06-06T00:00:00Z", 30, new Date("2026-06-06T01:00:00Z"))
    ).toMatchObject({
      stale: true,
      status: "stale"
    });
  });

  it("detects expired running provider logs", () => {
    expect(isExpiredRunningRun("2026-06-06T00:30:00Z", new Date("2026-06-06T01:00:00Z"))).toBe(true);
    expect(isExpiredRunningRun("2026-06-06T01:30:00Z", new Date("2026-06-06T01:00:00Z"))).toBe(false);
    expect(isExpiredRunningRun(null, new Date("2026-06-06T01:00:00Z"))).toBe(false);
  });

  it("wraps normalized submitted records as a provider adapter", async () => {
    const payload = ingestRunSchema.parse({
      providerId: "hourly-bot",
      providerType: "weather",
      adapterVersion: "normalized.v1",
      fetchedAt: "2026-06-06T00:00:00Z",
      records: [
        {
          kind: "forecast_point",
          citySlug: "seoul",
          provider: "open-meteo",
          model: "best_match",
          runTime: "2026-06-06T00:00:00Z",
          forecastTime: "2026-06-06T12:00:00Z",
          variable: "precipitation_probability",
          value: 0.72,
          unit: "probability",
          raw: {}
        }
      ]
    });
    const adapter = createSubmittedPayloadAdapter(payload, "2026-06-06T00:00:00Z");
    const raw = await adapter.fetch({ idempotencyKey: "demo-key" });

    expect(adapter.id).toBe("hourly-bot");
    expect(adapter.type).toBe("weather");
    expect(adapter.version).toBe("normalized.v1");
    await expect(adapter.normalize(raw)).resolves.toEqual(payload.records);
  });
});
