import { z } from "zod";

const jsonRecord = z.record(z.string(), z.unknown()).default({});
const probability = z.number().min(0).max(1).nullable().optional();

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
      status: z.enum(["aligned", "market_above_model", "model_above_market", "insufficient_data"]),
      explanation: z.string().nullable().optional(),
      raw: jsonRecord
    })
  )
});

export type ForecastIngestPayload = z.infer<typeof forecastIngestSchema>;
export type MarketsIngestPayload = z.infer<typeof marketsIngestSchema>;
export type CombinedSignalsIngestPayload = z.infer<typeof combinedSignalsIngestSchema>;
