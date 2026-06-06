import { CloudRain, Thermometer, Wind } from "lucide-react";
import { addHoursIso, formatDateTime, formatPercent } from "@/lib/utils";
import type { ForecastPoint } from "@/types/domain";

function getVariable(points: ForecastPoint[], variable: string) {
  return points.find((point) => point.variable === variable);
}

export function ForecastSummaryCard({ forecast }: { forecast: ForecastPoint[] }) {
  const temperature = getVariable(forecast, "temperature_2m");
  const rain = getVariable(forecast, "precipitation_probability");
  const wind = getVariable(forecast, "wind_speed_10m");
  const firstPoint = forecast[0] ?? null;
  const forecastRun = firstPoint?.runTime ?? null;
  const validTime = firstPoint?.forecastTime ?? null;
  const staleAfter = addHoursIso(forecastRun, 24);

  const items = [
    {
      label: "Temperature",
      value: temperature ? `${temperature.value.toFixed(1)} ${temperature.unit}` : "n/a",
      icon: Thermometer
    },
    {
      label: "Precipitation",
      value: rain ? formatPercent(rain.value > 1 ? rain.value / 100 : rain.value) : "n/a",
      icon: CloudRain
    },
    {
      label: "Wind",
      value: wind ? `${wind.value.toFixed(1)} ${wind.unit}` : "n/a",
      icon: Wind
    }
  ];

  return (
    <section className="rounded-md border border-white/12 bg-white/[0.045] p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-100">Forecast Signals</h2>
        <span className="font-mono text-[11px] text-slate-400">{forecast[0]?.provider ?? "n/a"}</span>
      </div>
      <div className="grid grid-cols-1 gap-2 min-[390px]:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-md border border-white/10 bg-black/18 p-3">
            <item.icon size={17} className="mb-2 text-cyan-200" />
            <div className="text-[11px] uppercase text-slate-400">{item.label}</div>
            <div className="mt-1 text-sm font-semibold text-white">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-1 gap-2 text-[11px] text-slate-400 min-[390px]:grid-cols-3">
        <Timestamp label="Forecast run" value={formatDateTime(forecastRun)} />
        <Timestamp label="Valid time" value={formatDateTime(validTime)} />
        <Timestamp label="Stale after" value={formatDateTime(staleAfter)} />
      </div>
    </section>
  );
}

function Timestamp({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/8 bg-black/16 p-2">
      <div className="uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-[11px] text-slate-300">{value}</div>
    </div>
  );
}
