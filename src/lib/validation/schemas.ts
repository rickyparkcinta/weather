import { z } from "zod";

const jsonRecord = z.record(z.string(), z.unknown()).default({});
const probability = z.number().min(0).max(1).nullable().optional();
const providerType = z.enum(["weather", "market", "observation"]);
const freshnessStatus = z.enum(["fresh", "aging", "stale", "unknown"]);
const signalStatus = z.enum([
  "aligned",
  "watch",
  "divergent",
  "stale",
  "unavailable",
  "high_uncertainty",
  "avoid",
  "market_above_model",
  "model_above_market",
  "insufficient_data"
]);

export const forecastIngestSchema = z.object({
  source: z.enum(["open-meteo", "windy", "noaa-gfs", "ecmwf", "custom"]),
  run: z.object({
    provider: z.string().min(1),
    model: z.string().min(1),
    runTime: z.string().datetime(),
    sourceUrl: z.string().url().optional()
  }),
  points: z.array(
    z.object({
      citySlug: z.string().min(1),
      forecastTime: z.string().datetime(),
      variable: z.string().min(1),
      value: z.number(),
      unit: z.string().min(1),
      confidence: z.number().min(0).max(1).nullable().optional(),
      raw: jsonRecord
    })
  )
});

export const marketsIngestSchema = z.object({
  source: z.enum(["kalshi", "polymarket"]),
  events: z.array(
    z.object({
      provider: z.string().min(1),
      providerEventId: z.string().min(1),
      title: z.string().min(1),
      description: z.string().nullable().optional(),
      category: z.string().nullable().optional(),
      tags: z.array(z.string()).default([]),
      citySlugs: z.array(z.string()).default([]),
      countryCodes: z.array(z.string()).default([]),
      probability,
      bid: probability,
      ask: probability,
      volume: z.number().nonnegative().nullable().optional(),
      liquidity: z.number().nonnegative().nullable().optional(),
      openInterest: z.number().nonnegative().nullable().optional(),
      closeTime: z.string().datetime().nullable().optional(),
      resolutionSource: z.string().nullable().optional(),
      url: z.string().url().nullable().optional(),
      status: z.string().nullable().optional(),
      raw: jsonRecord
    })
  ),
  timeseries: z
    .array(
      z.object({
        providerEventId: z.string().min(1),
        timestamp: z.string().datetime(),
        probability,
        bid: probability,
        ask: probability,
        volume: z.number().nonnegative().nullable().optional(),
        liquidity: z.number().nonnegative().nullable().optional(),
        raw: jsonRecord
      })
    )
    .default([])
});

export const combinedSignalsIngestSchema = z.object({
  citySlug: z.string().min(1),
  signals: z.array(
    z.object({
      providerEventId: z.string().min(1),
      forecastVariable: z.string().nullable().optional(),
      signalType: z.string().nullable().optional(),
      modelProbability: probability,
      marketProbability: probability,
      disagreement: probability,
      rawEdge: z.number().nullable().optional(),
      adjustedEdge: z.number().nullable().optional(),
      confidence: probability,
      freshnessStatus: freshnessStatus.optional(),
      status: signalStatus,
      explanation: z.string().nullable().optional(),
      raw: jsonRecord
    })
  )
});

export const normalizedRecordSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("forecast_run"),
    provider: z.string().min(1),
    model: z.string().min(1),
    runTime: z.string().datetime(),
    sourceUrl: z.string().url().nullable().optional(),
    status: z.enum(["running", "complete", "stale", "failed"]).optional(),
    metadata: jsonRecord
  }),
  z.object({
    kind: z.literal("forecast_point"),
    citySlug: z.string().min(1),
    provider: z.string().min(1),
    model: z.string().min(1),
    runTime: z.string().datetime(),
    forecastTime: z.string().datetime(),
    variable: z.string().min(1),
    value: z.number(),
    unit: z.string().min(1),
    confidence: probability,
    raw: jsonRecord
  }),
  z.object({
    kind: z.literal("market_event"),
    provider: z.string().min(1),
    providerEventId: z.string().min(1),
    title: z.string().min(1),
    description: z.string().nullable().optional(),
    category: z.string().nullable().optional(),
    tags: z.array(z.string()).default([]),
    citySlugs: z.array(z.string()).default([]),
    countryCodes: z.array(z.string()).default([]),
    probability,
    bid: probability,
    ask: probability,
    volume: z.number().nonnegative().nullable().optional(),
    liquidity: z.number().nonnegative().nullable().optional(),
    openInterest: z.number().nonnegative().nullable().optional(),
    closeTime: z.string().datetime().nullable().optional(),
    resolutionSource: z.string().nullable().optional(),
    url: z.string().url().nullable().optional(),
    status: z.string().nullable().optional(),
    raw: jsonRecord
  }),
  z.object({
    kind: z.literal("market_timeseries"),
    provider: z.string().min(1),
    providerEventId: z.string().min(1),
    timestamp: z.string().datetime(),
    probability,
    bid: probability,
    ask: probability,
    volume: z.number().nonnegative().nullable().optional(),
    liquidity: z.number().nonnegative().nullable().optional(),
    raw: jsonRecord
  }),
  z.object({
    kind: z.literal("combined_signal"),
    citySlug: z.string().min(1),
    providerEventId: z.string().nullable().optional(),
    forecastVariable: z.string().nullable().optional(),
    signalType: z.string().nullable().optional(),
    modelProbability: probability,
    marketProbability: probability,
    disagreement: probability,
    rawEdge: z.number().nullable().optional(),
    adjustedEdge: z.number().nullable().optional(),
    confidence: probability,
    freshnessStatus: freshnessStatus.optional(),
    status: signalStatus,
    explanation: z.string().nullable().optional(),
    raw: jsonRecord
  })
]);

export const ingestRunSchema = z.object({
  providerId: z.string().min(1),
  providerType,
  adapterVersion: z.string().min(1).default("normalized.v1"),
  idempotencyKey: z.string().min(1).optional(),
  fetchedAt: z.string().datetime().optional(),
  staleAfterMinutes: z.number().int().positive().max(60 * 24 * 14).default(180),
  metadata: jsonRecord,
  records: z.array(normalizedRecordSchema)
});

export type ForecastIngestPayload = z.infer<typeof forecastIngestSchema>;
export type MarketsIngestPayload = z.infer<typeof marketsIngestSchema>;
export type CombinedSignalsIngestPayload = z.infer<typeof combinedSignalsIngestSchema>;
export type IngestRunPayload = z.infer<typeof ingestRunSchema>;
