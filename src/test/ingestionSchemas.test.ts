import { describe, expect, it } from "vitest";
import { combinedSignalsIngestSchema, forecastIngestSchema, ingestRunSchema, marketsIngestSchema } from "@/lib/validation/schemas";

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

  it("accepts unified normalized ingestion runs", () => {
    const result = ingestRunSchema.safeParse({
      providerId: "hourly-bot",
      providerType: "weather",
      adapterVersion: "normalized.v1",
      idempotencyKey: "demo-key",
      fetchedAt: "2026-06-05T00:00:00Z",
      records: [
        {
          kind: "forecast_point",
          citySlug: "seoul",
          provider: "open-meteo",
          model: "best_match",
          runTime: "2026-06-05T00:00:00Z",
          forecastTime: "2026-06-05T12:00:00Z",
          variable: "precipitation_probability",
          value: 0.72,
          unit: "probability",
          confidence: 0.8,
          raw: {}
        },
        {
          kind: "combined_signal",
          citySlug: "seoul",
          providerEventId: "KX",
          forecastVariable: "precipitation_probability",
          modelProbability: 0.72,
          marketProbability: 0.58,
          disagreement: 0.14,
          rawEdge: 0.14,
          adjustedEdge: 0.112,
          confidence: 0.8,
          freshnessStatus: "fresh",
          status: "divergent",
          raw: {}
        }
      ]
    });

    expect(result.success).toBe(true);
  });
});
