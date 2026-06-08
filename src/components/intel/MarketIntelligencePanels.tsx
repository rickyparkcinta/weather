import { AlertTriangle, Brain, CheckCircle2, DatabaseZap, Gauge, MapPin, RadioTower } from "lucide-react";
import { formatDateTime, formatPercent } from "@/lib/utils";
import type {
  CalibrationSummary,
  DynamicErrorBalancingResult,
  ProbabilitySummary,
  SettlementSourceSummary,
  StructuredWeatherExplanation
} from "@/types/domain";

export function SettlementPanel({ settlement }: { settlement: SettlementSourceSummary | null }) {
  if (!settlement) return null;

  return (
    <section className="rounded-md border border-white/12 bg-white/[0.04] p-5">
      <h2 className="flex items-center gap-2 text-base font-semibold text-white">
        <RadioTower size={16} className="text-cyan-100" />
        Settlement Source
      </h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Detail label="Station" value={`${settlement.station.code} · ${settlement.station.name}`} />
        <Detail label="Station type" value={settlement.station.stationType.replaceAll("_", " ")} />
        <Detail label="Timezone" value={settlement.rule.timezone} />
        <Detail label="Event window" value={`${formatDateTime(settlement.rule.eventWindowStart)} to ${formatDateTime(settlement.rule.eventWindowEnd)}`} />
        <Detail label="Official provider" value={settlement.provider.name} />
        <Detail label="Distance from city" value={`${settlement.cityDistanceKm} km`} />
        <Detail label="Last observed value" value={settlement.station.lastObservedValue === null ? "n/a" : `${settlement.station.lastObservedValue} ${settlement.station.lastObservedUnit ?? ""}`} />
        <Detail label="Source status" value={`${settlement.status} · confidence ${formatPercent(settlement.rule.sourceConfidence)}`} />
      </div>
      {settlement.aliases.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {settlement.aliases.map((alias) => (
            <span key={alias} className="rounded-full bg-white/8 px-2 py-1 text-xs text-slate-300">
              {alias}
            </span>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function ProbabilityPanel({ probability }: { probability: ProbabilitySummary }) {
  return (
    <section className="rounded-md border border-white/12 bg-white/[0.04] p-5">
      <h2 className="flex items-center gap-2 text-base font-semibold text-white">
        <Gauge size={16} className="text-emerald-100" />
        Probability Engine
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Detail label="Raw model probability" value={formatPercent(probability.rawModelProbability)} />
        <Detail label="Calibrated probability" value={formatPercent(probability.calibratedModelProbability)} />
        <Detail label="Confidence adjusted" value={formatPercent(probability.confidenceAdjustedProbability)} />
        <Detail label="Signal label" value={probability.label} />
        <Detail label="Raw gap" value={formatPercent(probability.rawEdge)} />
        <Detail label="Adjusted gap" value={formatPercent(probability.adjustedEdge)} />
        <Detail label="Net diagnostic gap" value={formatPercent(probability.netEdge)} />
        <Detail label="Uncertainty band" value={probability.uncertaintyBand ? `${formatPercent(probability.uncertaintyBand[0])} to ${formatPercent(probability.uncertaintyBand[1])}` : "n/a"} />
      </div>
      {probability.buckets.length ? (
        <div className="mt-5 overflow-x-auto rounded-md border border-white/10">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead className="bg-white/[0.06] text-[11px] uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2">Bucket</th>
                <th className="px-3 py-2">Probability</th>
                <th className="px-3 py-2">Overlap</th>
                <th className="px-3 py-2">Warning</th>
              </tr>
            </thead>
            <tbody>
              {probability.buckets.map((bucket) => (
                <tr key={bucket.bucket.id} className="border-t border-white/8">
                  <td className="px-3 py-2 text-white">{bucket.bucket.label}</td>
                  <td className="px-3 py-2 font-mono text-slate-200">{formatPercent(bucket.probability)}</td>
                  <td className="px-3 py-2 text-slate-300">{bucket.overlaps.length ? `${bucket.overlaps.length} overlap(s)` : "none"}</td>
                  <td className="px-3 py-2 text-slate-300">{bucket.impossible ? "impossible bucket" : "ok"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}

export function ModelStackPanel({ modelStack }: { modelStack: DynamicErrorBalancingResult }) {
  return (
    <section className="rounded-md border border-white/12 bg-white/[0.04] p-5">
      <h2 className="flex items-center gap-2 text-base font-semibold text-white">
        <DatabaseZap size={16} className="text-violet-100" />
        Dynamic Error Balancing
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Detail label="Blended value" value={modelStack.blendedValue === null ? "n/a" : `${modelStack.blendedValue} ${modelStack.unit ?? ""}`} />
        <Detail label="Cluster mean" value={modelStack.clusterMean === null ? "n/a" : String(modelStack.clusterMean)} />
        <Detail label="Model spread" value={modelStack.modelSpread === null ? "n/a" : String(modelStack.modelSpread)} />
        <Detail label="Run volatility" value={modelStack.runToRunVolatility === null ? "n/a" : String(modelStack.runToRunVolatility)} />
      </div>
      <div className="mt-5 overflow-x-auto rounded-md border border-white/10">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-white/[0.06] text-[11px] uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-2">Model</th>
              <th className="px-3 py-2">Weight</th>
              <th className="px-3 py-2">Recent skill</th>
              <th className="px-3 py-2">Lead-time skill</th>
              <th className="px-3 py-2">Freshness</th>
              <th className="px-3 py-2">Penalties</th>
            </tr>
          </thead>
          <tbody>
            {modelStack.weights.map((weight) => (
              <tr key={weight.memberId} className="border-t border-white/8">
                <td className="px-3 py-2 text-white">{weight.provider}/{weight.model}</td>
                <td className="px-3 py-2 font-mono text-slate-200">{formatPercent(weight.weight)}</td>
                <td className="px-3 py-2 font-mono text-slate-300">{formatPercent(weight.components.recentErrorSkill)}</td>
                <td className="px-3 py-2 font-mono text-slate-300">{formatPercent(weight.components.leadTimeSkill)}</td>
                <td className="px-3 py-2 font-mono text-slate-300">{formatPercent(weight.components.providerFreshness)}</td>
                <td className="px-3 py-2 text-slate-300">
                  error {formatPercent(weight.penalties.error)}, stale {formatPercent(weight.penalties.freshness)}, volatility {formatPercent(weight.penalties.volatility)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function CalibrationPanel({ calibration }: { calibration: CalibrationSummary }) {
  return (
    <section className="rounded-md border border-white/12 bg-white/[0.04] p-5">
      <h2 className="flex items-center gap-2 text-base font-semibold text-white">
        <CheckCircle2 size={16} className="text-emerald-100" />
        Calibration
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Detail label="Method" value={calibration.method.replaceAll("_", " ")} />
        <Detail label="Version" value={calibration.version} />
        <Detail label="Model mean" value={calibration.modelMean === null ? "n/a" : String(calibration.modelMean)} />
        <Detail label="Calibrated mean" value={calibration.calibratedMean === null ? "n/a" : String(calibration.calibratedMean)} />
        <Detail label="Uncertainty sigma" value={calibration.uncertaintySigma === null ? "n/a" : String(calibration.uncertaintySigma)} />
        <Detail label="Historical error" value={calibration.historicalError === null ? "n/a" : String(calibration.historicalError)} />
        <Detail label="Brier score" value={calibration.brierScore === null ? "n/a" : String(calibration.brierScore)} />
        <Detail label="Generated" value={formatDateTime(calibration.generatedAt)} />
      </div>
    </section>
  );
}

export function ExplanationPanel({ explanation }: { explanation: StructuredWeatherExplanation | null }) {
  if (!explanation) return null;

  return (
    <section className="rounded-md border border-white/12 bg-white/[0.04] p-5">
      <h2 className="flex items-center gap-2 text-base font-semibold text-white">
        <Brain size={16} className="text-cyan-100" />
        Structured Analysis
      </h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <TextBlock title="Weather path" body={explanation.weatherPathSummary} />
        <TextBlock title="Baseline" body={explanation.baselineScenario} />
        <TextBlock title="Upside weather scenario" body={explanation.upsideWeatherScenario} />
        <TextBlock title="Downside weather scenario" body={explanation.downsideWeatherScenario} />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <ListBlock title="Invalidation" items={explanation.invalidationConditions} icon="warn" />
        <ListBlock title="Confirmation" items={explanation.confirmationConditions} />
        <ListBlock title="Checkpoints" items={explanation.nextObservationCheckpoints} />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <TextBlock title="Model layer" body={explanation.modelLayerExplanation} />
        <TextBlock title="Settlement layer" body={explanation.settlementSourceExplanation} />
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 break-words text-sm text-white">{value}</div>
    </div>
  );
}

function TextBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
    </div>
  );
}

function ListBlock({ title, items, icon }: { title: string; items: string[]; icon?: "warn" }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
        {icon === "warn" ? <AlertTriangle size={13} /> : <MapPin size={13} />}
        {title}
      </h3>
      <ul className="mt-2 space-y-2 text-sm leading-5 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/70" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
