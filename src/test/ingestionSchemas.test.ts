import { describe, expect, it } from "vitest";
import { combinedSignalsIngestSchema, forecastIngestSchema, marketsIngestSchema } from "@/lib/validation/schemas";

describe("ingestion schemas", () => {
  it("accepts forecast bot payloads", () => {
    const result = forecastIngestSchema.safeParse({
      source: "open-meteo",
      run: {
        provider: "open-meteo",
        model: "gfs",
        runTime: "2026-06-05T00:00:00Z"
      },
      points: [
        {
          citySlug: "seoul",
          forecastTime: "2026-06-05T12:00:00Z",
          variable: "temperature_2m",
          value: 27.4,
          unit: "C",
          raw: {}
        }
      ]
    });

    expect(result.success).toBe(true);
  });

  it("rejects market probabilities outside 0 to 1", () => {
    const result = marketsIngestSchema.safeParse({
      source: "kalshi",
      events: [
        {
          provider: "kalshi",
          providerEventId: "KX",
          title: "Bad probability",
          probability: 1.4,
          raw: {}
        }
      ]
    });

    expect(result.success).toBe(false);
  });

  it("accepts combined signal statuses", () => {
    const result = combinedSignalsIngestSchema.safeParse({
      citySlug: "seoul",
      signals: [
        {
          providerEventId: "KX",
          status: "aligned",
          disagreement: 0.04,
          raw: {}
        }
      ]
    });

    expect(result.success).toBe(true);
  });
});
