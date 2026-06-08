import type {
  CalibrationSummary,
  CombinedSignal,
  DynamicErrorBalancingResult,
  MarketEvent,
  SettlementSourceSummary,
  StructuredWeatherExplanation
} from "@/types/domain";

function pct(value: number | null | undefined) {
  return typeof value === "number" ? `${Math.round(value * 100)}%` : "n/a";
}

export function buildStructuredWeatherExplanation(input: {
  market: MarketEvent;
  signal: CombinedSignal | null;
  settlement: SettlementSourceSummary;
  modelStack: DynamicErrorBalancingResult;
  calibration: CalibrationSummary;
  llmEnabled?: boolean;
}): StructuredWeatherExplanation {
  const signal = input.signal;
  const modelProbability = pct(signal?.modelProbability);
  const marketProbability = pct(signal?.marketProbability ?? input.market.probability);
  const confidence = pct(signal?.confidence);
  const station = input.settlement.station;
  const provider = input.settlement.provider;
  const blended = input.modelStack.blendedValue === null ? "n/a" : `${input.modelStack.blendedValue}${input.modelStack.unit ?? ""}`;

  return {
    weatherPathSummary: `${input.market.title} is mapped to ${station.code} (${station.name}) with ${provider.name} as the official/public source layer.`,
    baselineScenario: `Current blended model value is ${blended}; model probability is ${modelProbability} versus market-implied ${marketProbability}.`,
    upsideWeatherScenario: "Upside weather scenario means the observed event variable finishes above the baseline model path for the defined settlement window.",
    downsideWeatherScenario: "Downside weather scenario means the observed event variable finishes below the baseline model path for the defined settlement window.",
    invalidationConditions: [
      "Official station metadata changes before resolution.",
      "Latest provider run becomes stale or fails quality checks.",
      "Market rule text uses a different location, threshold, or event window than the current mapping."
    ],
    confirmationConditions: [
      "Next station observation moves toward the modeled event threshold.",
      "Fresh model runs keep the same direction with lower spread.",
      "Provider health remains online through the settlement window."
    ],
    nextObservationCheckpoints: [
      `${station.code} latest observation`,
      `${input.modelStack.fallbackModelHierarchy[0] ?? "primary model"} next run`,
      `${provider.name} source-status check`
    ],
    evidenceChain: [
      `Settlement source: ${station.code} / ${station.name}`,
      `Calibration: ${input.calibration.method} ${input.calibration.version}`,
      `Confidence: ${confidence}`,
      `Freshness: ${input.settlement.status}`
    ],
    modelLayerExplanation: `Dynamic Error Balancing used ${input.modelStack.weights.length} model members, spread ${input.modelStack.modelSpread ?? "n/a"}, and run-to-run volatility ${input.modelStack.runToRunVolatility ?? "n/a"}.`,
    settlementSourceExplanation: `${station.stationType} station ${station.code} is ${input.settlement.cityDistanceKm} km from the linked city center, timezone ${input.settlement.rule.timezone}, source confidence ${pct(input.settlement.rule.sourceConfidence)}.`,
    generatedBy: input.llmEnabled ? "llm" : "deterministic"
  };
}
