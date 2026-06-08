import type { CalibrationSummary, CombinedSignal, ForecastPoint } from "@/types/domain";

function rounded(value: number, decimals = 3) {
  return Number(value.toFixed(decimals));
}

function average(values: number[]) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
}

function standardDeviation(values: number[]) {
  if (values.length < 2) return null;
  const mean = average(values) ?? 0;
  return Math.sqrt(values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length);
}

export function computeBrierScore(points: { probability: number; outcome: 0 | 1 }[]) {
  if (points.length === 0) return null;
  return rounded(points.reduce((sum, point) => sum + (point.probability - point.outcome) ** 2, 0) / points.length);
}

export function buildReliabilityBins(points: { probability: number; outcome?: 0 | 1 | null }[] = []) {
  return Array.from({ length: 5 }, (_, index) => {
    const min = index * 0.2;
    const max = index === 4 ? 1 : min + 0.2;
    const binPoints = points.filter((point) => point.probability >= min && point.probability <= max);
    const observed = binPoints.filter((point): point is { probability: number; outcome: 0 | 1 } => point.outcome === 0 || point.outcome === 1);
    return {
      bin: `${Math.round(min * 100)}-${Math.round(max * 100)}%`,
      forecastProbability: rounded((min + max) / 2),
      observedFrequency: observed.length ? rounded(observed.reduce((sum, point) => sum + point.outcome, 0) / observed.length) : null,
      count: binPoints.length
    };
  });
}

export function summarizeCalibration(input: {
  forecast?: ForecastPoint[];
  signal?: CombinedSignal | null;
  method?: CalibrationSummary["method"];
  version?: string;
  verification?: { probability: number; outcome: 0 | 1 }[];
}): CalibrationSummary {
  const values = input.forecast?.map((point) => point.value).filter((value) => Number.isFinite(value)) ?? [];
  const modelMean = input.signal?.modelProbability ?? average(values);
  const biasCorrection = input.method === "recent_bias_correction" ? -0.015 : 0;
  const calibratedMean =
    typeof modelMean === "number" && typeof input.signal?.modelProbability === "number"
      ? rounded(Math.max(0, Math.min(1, modelMean + biasCorrection)))
      : typeof modelMean === "number"
        ? rounded(modelMean + biasCorrection)
        : null;
  const verification = input.verification ?? [];

  return {
    method: input.method ?? "legacy_normal",
    version: input.version ?? "cal-v1-shadow",
    modelMean: modelMean === null ? null : rounded(modelMean),
    calibratedMean,
    uncertaintySigma: standardDeviation(values)?.valueOf() ?? (input.signal?.confidence ? rounded((1 - input.signal.confidence) * 0.22) : null),
    historicalError: verification.length
      ? rounded(verification.reduce((sum, point) => sum + Math.abs(point.probability - point.outcome), 0) / verification.length)
      : null,
    brierScore: computeBrierScore(verification),
    reliabilityBins: buildReliabilityBins(verification),
    generatedAt: new Date().toISOString()
  };
}
