import type { BucketProbability, ProbabilitySummary, TemperatureBucket } from "@/types/domain";

const SQRT_TWO = Math.sqrt(2);

export type MarketEdgeInput = {
  modelProbability: number | null | undefined;
  marketProbability: number | null | undefined;
  confidence: number | null | undefined;
  fees?: number | null;
  slippage?: number | null;
  riskBuffer?: number | null;
};

export type BucketProbabilityInput = {
  buckets: TemperatureBucket[];
  mean: number | null | undefined;
  sigma: number | null | undefined;
  unit?: "C" | "F";
};

function clamp(value: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function rounded(value: number, decimals = 3) {
  return Number(value.toFixed(decimals));
}

function erf(value: number) {
  const sign = value < 0 ? -1 : 1;
  const x = Math.abs(value);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}

function normalCdf(value: number, mean: number, sigma: number) {
  if (!Number.isFinite(sigma) || sigma <= 0) {
    return value >= mean ? 1 : 0;
  }
  return 0.5 * (1 + erf((value - mean) / (sigma * SQRT_TWO)));
}

function toCelsius(value: number, unit: "C" | "F") {
  return unit === "F" ? ((value - 32) * 5) / 9 : value;
}

function normalizeUnit(unit: string | undefined): "C" | "F" {
  return unit?.toUpperCase() === "C" ? "C" : "F";
}

function makeBucket(input: Omit<TemperatureBucket, "id">): TemperatureBucket {
  const min = input.min === null ? "min" : String(input.min);
  const max = input.max === null ? "max" : String(input.max);
  return { ...input, id: `${input.kind}:${min}:${max}:${input.unit}` };
}

export function parseTemperatureBuckets(text: string, defaultUnit: "C" | "F" = "F"): TemperatureBucket[] {
  const source = text.replace(/\u00b0/g, "").toLowerCase();
  const buckets: TemperatureBucket[] = [];

  const exact = source.match(/\bexactly\s+(-?\d+(?:\.\d+)?)\s*([cf])\b/);
  if (exact) {
    const unit = normalizeUnit(exact[2]);
    const value = Number(exact[1]);
    buckets.push(
      makeBucket({
        label: `Exactly ${value}${unit}`,
        kind: "exact",
        min: value,
        max: value,
        inclusiveMin: true,
        inclusiveMax: true,
        unit
      })
    );
  }

  const rangePatterns = [
    /\bbetween\s+(-?\d+(?:\.\d+)?)\s*(?:and|-)\s*(-?\d+(?:\.\d+)?)\s*([cf])?\b/,
    /\b(-?\d+(?:\.\d+)?)\s*[-\u2013]\s*(-?\d+(?:\.\d+)?)\s*([cf])\b/
  ];
  for (const pattern of rangePatterns) {
    const match = source.match(pattern);
    if (!match) continue;
    const unit = normalizeUnit(match[3] ?? defaultUnit);
    const first = Number(match[1]);
    const second = Number(match[2]);
    const min = Math.min(first, second);
    const max = Math.max(first, second);
    buckets.push(
      makeBucket({
        label: `${min}-${max}${unit}`,
        kind: "range",
        min,
        max,
        inclusiveMin: true,
        inclusiveMax: true,
        unit
      })
    );
  }

  const above = source.match(/\b(?:above|over|exceed|exceeds|at least|>=)\s*(-?\d+(?:\.\d+)?)\s*([cf])?\b/);
  if (above) {
    const unit = normalizeUnit(above[2] ?? defaultUnit);
    const min = Number(above[1]);
    buckets.push(
      makeBucket({
        label: `>= ${min}${unit}`,
        kind: "above_or_equal",
        min,
        max: null,
        inclusiveMin: true,
        inclusiveMax: false,
        unit
      })
    );
  }

  const below = source.match(/\b(?:below|under|at most|<=)\s*(-?\d+(?:\.\d+)?)\s*([cf])?\b/);
  if (below) {
    const unit = normalizeUnit(below[2] ?? defaultUnit);
    const max = Number(below[1]);
    buckets.push(
      makeBucket({
        label: `<= ${max}${unit}`,
        kind: "below_or_equal",
        min: null,
        max,
        inclusiveMin: false,
        inclusiveMax: true,
        unit
      })
    );
  }

  if (buckets.length === 0) {
    const implicit = source.match(/\b(-?\d+(?:\.\d+)?)\s*([cf])\b/);
    if (implicit) {
      const unit = normalizeUnit(implicit[2]);
      const value = Number(implicit[1]);
      const thresholdWord = /\b(will|temperature|temp|heat|cold)\b/.test(source);
      if (thresholdWord) {
        buckets.push(
          makeBucket({
            label: `>= ${value}${unit}`,
            kind: "above_or_equal",
            min: value,
            max: null,
            inclusiveMin: true,
            inclusiveMax: false,
            unit
          })
        );
      }
    }
  }

  return dedupeBuckets(buckets);
}

function dedupeBuckets(buckets: TemperatureBucket[]) {
  return [...new Map(buckets.map((bucket) => [bucket.id, bucket])).values()];
}

function bucketBoundsCelsius(bucket: TemperatureBucket) {
  return {
    min: bucket.min === null ? null : toCelsius(bucket.min, bucket.unit),
    max: bucket.max === null ? null : toCelsius(bucket.max, bucket.unit)
  };
}

function overlaps(a: TemperatureBucket, b: TemperatureBucket) {
  const left = bucketBoundsCelsius(a);
  const right = bucketBoundsCelsius(b);
  const aMin = left.min ?? Number.NEGATIVE_INFINITY;
  const aMax = left.max ?? Number.POSITIVE_INFINITY;
  const bMin = right.min ?? Number.NEGATIVE_INFINITY;
  const bMax = right.max ?? Number.POSITIVE_INFINITY;
  return aMin <= bMax && bMin <= aMax;
}

export function findBucketOverlaps(buckets: TemperatureBucket[]) {
  return buckets.map((bucket, index) => ({
    bucket,
    overlaps: buckets
      .filter((candidate, candidateIndex) => candidateIndex !== index && overlaps(bucket, candidate))
      .map((candidate) => candidate.id)
  }));
}

export function calculateBucketProbabilities(input: BucketProbabilityInput): BucketProbability[] {
  const { mean, sigma } = input;
  const overlapMap = new Map(findBucketOverlaps(input.buckets).map((entry) => [entry.bucket.id, entry.overlaps]));

  return input.buckets.map((bucket) => {
    const bounds = bucketBoundsCelsius(bucket);
    const impossible = bounds.min !== null && bounds.max !== null && bounds.min > bounds.max;

    if (mean === null || mean === undefined || sigma === null || sigma === undefined || impossible) {
      return { bucket, probability: 0, overlaps: overlapMap.get(bucket.id) ?? [], impossible };
    }

    let probability: number;
    if (bucket.kind === "above_or_equal") {
      probability = 1 - normalCdf(bounds.min ?? mean, mean, sigma);
    } else if (bucket.kind === "below_or_equal") {
      probability = normalCdf(bounds.max ?? mean, mean, sigma);
    } else if (bucket.kind === "exact") {
      const center = bounds.min ?? bounds.max ?? mean;
      probability = normalCdf(center + 0.5, mean, sigma) - normalCdf(center - 0.5, mean, sigma);
    } else {
      probability = normalCdf(bounds.max ?? mean, mean, sigma) - normalCdf(bounds.min ?? mean, mean, sigma);
    }

    return {
      bucket,
      probability: rounded(clamp(probability)),
      overlaps: overlapMap.get(bucket.id) ?? [],
      impossible
    };
  });
}

export function calculateMarketEdge(input: MarketEdgeInput) {
  const confidence = clamp(input.confidence ?? 0);
  const modelProbability = input.modelProbability ?? null;
  const marketProbability = input.marketProbability ?? null;
  const rawEdge =
    typeof modelProbability === "number" && typeof marketProbability === "number"
      ? rounded(modelProbability - marketProbability)
      : null;
  const adjustedEdge = rawEdge === null ? null : rounded(rawEdge * confidence);
  const penalties = (input.fees ?? 0) + (input.slippage ?? 0) + (input.riskBuffer ?? 0);
  const netEdge = adjustedEdge === null ? null : rounded(adjustedEdge - penalties);

  return {
    marketProbability,
    rawEdge,
    adjustedEdge,
    netEdge
  };
}

export function classifyProbabilitySignal(netEdge: number | null, confidence: number): ProbabilitySummary["label"] {
  if (confidence < 0.35) return "Avoid: uncertainty too high";
  if (netEdge === null || Math.abs(netEdge) < 0.015) return "Neutral";
  return netEdge > 0 ? "Model-over-market signal" : "Market-over-model signal";
}

export function summarizeProbability(input: {
  rawModelProbability: number | null;
  calibratedModelProbability?: number | null;
  ensembleProbability?: number | null;
  bucketMean?: number | null;
  bucketSigma?: number | null;
  buckets?: TemperatureBucket[];
  marketProbability: number | null;
  confidence: number;
  fees?: number | null;
  slippage?: number | null;
  riskBuffer?: number | null;
}): ProbabilitySummary {
  const calibratedModelProbability = input.calibratedModelProbability ?? input.rawModelProbability;
  const eventProbability = calibratedModelProbability ?? input.ensembleProbability ?? input.rawModelProbability;
  const confidenceScore = rounded(clamp(input.confidence));
  const edge = calculateMarketEdge({
    modelProbability: eventProbability,
    marketProbability: input.marketProbability,
    confidence: confidenceScore,
    fees: input.fees,
    slippage: input.slippage,
    riskBuffer: input.riskBuffer
  });
  const buckets = input.buckets?.length
    ? calculateBucketProbabilities({
        buckets: input.buckets,
        mean: input.bucketMean,
        sigma: input.bucketSigma
      })
    : [];
  const uncertaintyBand =
    eventProbability === null
      ? null
      : [rounded(clamp(eventProbability - (1 - confidenceScore) * 0.25)), rounded(clamp(eventProbability + (1 - confidenceScore) * 0.25))] as [number, number];

  return {
    rawModelProbability: input.rawModelProbability,
    calibratedModelProbability,
    ensembleProbability: input.ensembleProbability ?? null,
    eventProbability,
    confidenceScore,
    confidenceAdjustedProbability: eventProbability === null ? null : rounded(eventProbability * confidenceScore),
    uncertaintyBand,
    buckets,
    marketProbability: edge.marketProbability,
    rawEdge: edge.rawEdge,
    adjustedEdge: edge.adjustedEdge,
    netEdge: edge.netEdge,
    label: classifyProbabilitySignal(edge.netEdge, confidenceScore)
  };
}
