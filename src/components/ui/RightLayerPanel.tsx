import { Activity, CloudSun, Landmark, Map, SlidersHorizontal, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

export type LayerState = {
  forecast: boolean;
  markets: boolean;
  signals: boolean;
  wind: boolean;
};

export function RightLayerPanel({
  layers,
  onChange,
  compact = false,
  className
}: {
  layers: LayerState;
  onChange: (layers: LayerState) => void;
  compact?: boolean;
  className?: string;
}) {
  const controls = [
    { key: "forecast" as const, label: "Forecast", icon: CloudSun },
    { key: "markets" as const, label: "Markets", icon: Landmark },
    { key: "signals" as const, label: "Signals", icon: Activity },
    { key: "wind" as const, label: "Flow", icon: Waves }
  ];

  const content = (
    <>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-100">
        <Map size={16} />
        Layers
      </div>
      <div className="space-y-2">
        {controls.map((control) => (
          <label key={control.key} className="flex cursor-pointer items-center justify-between gap-3 rounded-md px-2 py-2 hover:bg-white/8">
            <span className="flex items-center gap-2 text-sm text-slate-200">
              <control.icon size={15} />
              {control.label}
            </span>
            <input
              type="checkbox"
              checked={layers[control.key]}
              onChange={(event) => onChange({ ...layers, [control.key]: event.target.checked })}
              className="h-4 w-4 accent-cyan-300"
            />
          </label>
        ))}
      </div>
    </>
  );

  if (compact) {
    return (
      <details className={cn("pointer-events-auto relative", className)}>
        <summary
          aria-label="Map layers"
          title="Map layers"
          className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-white/12 bg-[var(--panel-strong)] text-slate-100 shadow-2xl backdrop-blur-xl hover:bg-white/8 [&::-webkit-details-marker]:hidden"
        >
          <SlidersHorizontal size={17} />
        </summary>
        <div className="absolute right-0 top-12 z-40 w-44 rounded-md border border-white/12 bg-[var(--panel-strong)] p-3 shadow-2xl backdrop-blur-xl">
          {content}
        </div>
      </details>
    );
  }

  return (
    <aside className={cn("pointer-events-auto w-44 rounded-md border border-white/12 bg-[var(--panel)] p-3 shadow-2xl backdrop-blur-xl", className)}>
      {content}
    </aside>
  );
}
