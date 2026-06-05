import { CloudRain, Thermometer, Wind } from "lucide-react";
import { formatPercent } from "@/lib/utils";
import type { ForecastPoint } from "@/types/domain";

function getVariable(points: ForecastPoint[], variable: string) {
  return points.find((point) => point.variable === variable);
}

export function ForecastSummaryCard({ forecast }: { forecast: ForecastPoint[] }) {
  const temperature = getVariable(forecast, "temperature_2m");
  const rain = getVariable(forecast, "precipitation_probability");
  const wind = getVariable(forecast, "wind_speed_10m");

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
    <section className="rounded-md border border-white/12 bg-white/[0.045] p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-100">Forecast Signals</h2>
        <span className="font-mono text-[11px] text-slate-400">{forecast[0]?.provider ?? "n/a"}</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {items.map((item) => (
          <div key={item.label} className="rounded-md border border-white/10 bg-black/18 p-3">
            <item.icon size={17} className="mb-2 text-cyan-200" />
            <div className="text-[11px] uppercase text-slate-400">{item.label}</div>
            <div className="mt-1 text-sm font-semibold text-white">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
