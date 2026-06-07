"use client";

import { NODE_TYPE_META, NODE_TYPES, type GraphNodeType } from "@/lib/graph/types";

export function GraphLegend({
  counts,
  activeTypes,
  onToggleType
}: {
  counts: Record<GraphNodeType, number>;
  activeTypes: Set<GraphNodeType>;
  onToggleType: (type: GraphNodeType) => void;
}) {
  return (
    <div className="pointer-events-auto rounded-md border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Entity types</div>
      <ul className="mt-2 grid gap-1">
        {NODE_TYPES.map((type) => {
          const meta = NODE_TYPE_META[type];
          const active = activeTypes.has(type);
          return (
            <li key={type}>
              <button
                type="button"
                onClick={() => onToggleType(type)}
                aria-pressed={active}
                title={meta.description}
                className={`flex w-full items-center justify-between gap-3 rounded px-1.5 py-1 text-left text-xs transition ${
                  active ? "text-slate-700 hover:bg-slate-100" : "text-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: meta.color, opacity: active ? 1 : 0.3 }}
                  />
                  {meta.label}
                </span>
                <span className="font-mono text-[10px] text-slate-400">{counts[type] ?? 0}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
