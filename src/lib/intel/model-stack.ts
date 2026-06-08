import type { DynamicErrorBalancingResult, ForecastPoint, ModelMember, ModelWeight } from "@/types/domain";

export type DynamicErrorBalancingInput = {
  members: ModelMember[];
  officialObservationValue?: number | null;
  settlementStationAdjustment?: number | null;
  cityToStationAdjustment?: number | null;
  fallbackModelHierarchy?: string[];
};

function rounded(value: number, decimals = 3) {
  return Number(value.toFixed(decimals));
}

function clamp(value: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function average(values: number[]) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;
}

function standardDeviation(values: number[]) {
  if (values.length < 2) return 0;
  const mean = average(values) ?? 0;
  const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length;
  return Math.sqrt(variance);
}

function normalize(values: number[]) {
  const sum = values.reduce((acc, value) => acc + value, 0);
  if (sum <= 0) {
    const fallback = values.length ? 1 / values.length : 0;
    return values.map(() => fallback);
  }
  return values.map((value) => value / sum);
}

function providerFreshnessScore(minutes: number | null) {
  if (minutes === null || !Number.isFinite(minutes)) return 0.65;
  if (minutes <= 90) return 1;
  if (minutes <= 360) return 0.85;
  if (minutes <= 720) return 0.65;
  return 0.35;
}

function recentErrorScore(error: number | null) {
  if (error === null || !Number.isFinite(error)) return 0.65;
  return 1 / (1 + Math.max(0, error));
}

function volatilityPenalty(delta: number | null) {
  if (delta === null || !Number.isFinite(delta)) return 0.9;
  return 1 / (1 + Math.abs(delta) / 8);
}

export function forecastPointsToModelMembers(points: ForecastPoint[], now = Date.now()): ModelMember[] {
  return points.map((point) => {
    const runMs = new Date(point.runTime).getTime();
    const forecastMs = new Date(point.forecastTime).getTime();
    const leadTimeHours = Number.isFinite(runMs) && Number.isFinite(forecastMs) ? (forecastMs - runMs) / 3_600_000 : 0;
    const freshnessMinutes = Number.isFinite(runMs) ? Math.max(0, (now - runMs) / 60_000) : null;
    const rawError = typeof point.raw.recentError === "number" ? point.raw.recentError : null;
    const rawSkill = typeof point.raw.leadTimeSkill === "number" ? point.raw.leadTimeSkill : point.confidence;
    const rawDelta = typeof point.raw.runToRunDelta === "number" ? point.raw.runToRunDelta : null;

    return {
      id: point.id,
      provider: point.provider,
      model: point.model,
      runTime: point.runTime,
      leadTimeHours,
      variable: point.variable,
      value: point.value,
      unit: point.unit,
      recentError: rawError,
      leadTimeSkill: rawSkill,
      freshnessMinutes,
      runToRunDelta: rawDelta
    };
  });
}

export function computeDynamicErrorBalancing(input: DynamicErrorBalancingInput): DynamicErrorBalancingResult {
  const members = input.members.filter((member) => Number.isFinite(member.value));
  const values = members.map((member) => member.value);
  const modelMean = average(values);
  const modelSpread = standardDeviation(values);
  const runToRunVolatility = average(members.map((member) => Math.abs(member.runToRunDelta ?? 0)));
  const recentTrend = average(members.map((member) => member.runToRunDelta ?? 0));
  const baseWeights = members.map((member) => {
    const recentErrorSkill = recentErrorScore(member.recentError);
    const leadTimeSkill = clamp(member.leadTimeSkill ?? 0.65);
    const providerFreshness = providerFreshnessScore(member.freshnessMinutes);
    const freshness = providerFreshness;
    const volatility = volatilityPenalty(member.runToRunDelta);
    const error = recentErrorSkill;
    return {
      member,
      value: recentErrorSkill * leadTimeSkill * providerFreshness * volatility,
      penalties: {
        error: rounded(1 - error),
        freshness: rounded(1 - freshness),
        volatility: rounded(1 - volatility)
      },
      components: {
        recentErrorSkill: rounded(recentErrorSkill),
        leadTimeSkill: rounded(leadTimeSkill),
        providerFreshness: rounded(providerFreshness)
      }
    };
  });
  const normalized = normalize(baseWeights.map((weight) => weight.value));
  const weights: ModelWeight[] = baseWeights.map((entry, index) => ({
    memberId: entry.member.id,
    provider: entry.member.provider,
    model: entry.member.model,
    weight: rounded(normalized[index] ?? 0),
    penalties: entry.penalties,
    components: entry.components
  }));
  const weighted = members.reduce((sum, member, index) => sum + member.value * (normalized[index] ?? 0), 0);
  const officialObservationCorrection =
    typeof input.officialObservationValue === "number" && modelMean !== null
      ? rounded((input.officialObservationValue - modelMean) * 0.15)
      : 0;
  const settlementStationAdjustment = rounded(input.settlementStationAdjustment ?? 0);
  const cityToStationAdjustment = rounded(input.cityToStationAdjustment ?? 0);
  const blendedValue = members.length
    ? rounded(weighted + officialObservationCorrection + settlementStationAdjustment + cityToStationAdjustment)
    : null;
  const fallbackModelHierarchy =
    input.fallbackModelHierarchy ??
    [...new Set(members.map((member) => `${member.provider}/${member.model}`))].slice(0, 6);

  return {
    method: "dynamic_error_balancing",
    modelMean: modelMean === null ? null : rounded(modelMean),
    clusterMean: modelMean === null ? null : rounded(modelMean),
    modelSpread: rounded(modelSpread),
    runToRunVolatility: runToRunVolatility === null ? null : rounded(runToRunVolatility),
    recentTrend: recentTrend === null ? null : rounded(recentTrend),
    officialObservationCorrection,
    settlementStationAdjustment,
    cityToStationAdjustment,
    blendedValue,
    unit: members[0]?.unit ?? null,
    fallbackModelHierarchy,
    weights,
    generatedAt: new Date().toISOString()
  };
}
