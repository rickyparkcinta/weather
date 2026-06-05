import { CloudSun, Landmark, Map, Waves } from "lucide-react";

export type LayerState = {
  forecast: boolean;
  markets: boolean;
  wind: boolean;
};

export function RightLayerPanel({
  layers,
  onChange
}: {
  layers: LayerState;
  onChange: (layers: LayerState) => void;
}) {
  const controls = [
    { key: "forecast" as const, label: "Forecast", icon: CloudSun },
    { key: "markets" as const, label: "Markets", icon: Landmark },
    { key: "wind" as const, label: "Flow", icon: Waves }
  ];

  return (
    <aside className="pointer-events-auto w-44 rounded-md border border-white/12 bg-[var(--panel)] p-3 shadow-2xl backdrop-blur-xl">
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
    </aside>
  );
}
