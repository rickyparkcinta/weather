"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import {
  EDGE_TYPE_META,
  EDGE_TYPES,
  NODE_TYPES,
  type GraphEdgeType,
  type GraphFreshness,
  type GraphNodeType
} from "@/lib/graph/types";

export type GraphFilterState = {
  city: string; // city node id or "all"
  provider: string; // provider name or "all"
  signalStatus: string; // status or "all"
  freshness: GraphFreshness | "all";
  nodeTypes: Set<GraphNodeType>;
  edgeTypes: Set<GraphEdgeType>;
  confidenceThreshold: number; // 0..1
};

export function defaultFilterState(): GraphFilterState {
  return {
    city: "all",
    provider: "all",
    signalStatus: "all",
    freshness: "all",
    nodeTypes: new Set(NODE_TYPES),
    edgeTypes: new Set(EDGE_TYPES),
    confidenceThreshold: 0
  };
}

const FRESHNESS_OPTIONS: Array<GraphFreshness | "all"> = ["all", "fresh", "aging", "stale", "unknown"];

function Select({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: Array<{ value: string; label: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 h-8 w-full rounded-md border border-slate-200 bg-white px-2 text-sm text-slate-700 outline-none focus:border-sky-300"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function GraphFilters({
  options,
  value,
  onChange,
  onToggleEdgeType
}: {
  options: {
    cities: Array<{ id: string; label: string }>;
    providers: string[];
    signalStatuses: string[];
  };
  value: GraphFilterState;
  onChange: (patch: Partial<GraphFilterState>) => void;
  onToggleEdgeType: (type: GraphEdgeType) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="pointer-events-auto w-[260px] rounded-md border border-slate-200 bg-white/95 shadow-lg backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
          <SlidersHorizontal size={14} className="text-slate-500" />
          Filters
        </span>
        <ChevronDown size={15} className={`text-slate-400 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div className="grid gap-3 border-t border-slate-100 p-3">
          <Select
            label="City"
            value={value.city}
            onChange={(city) => onChange({ city })}
            options={[
              { value: "all", label: "All cities" },
              ...options.cities.map((city) => ({ value: city.id, label: city.label }))
            ]}
          />
          <Select
            label="Provider"
            value={value.provider}
            onChange={(provider) => onChange({ provider })}
            options={[
              { value: "all", label: "All providers" },
              ...options.providers.map((provider) => ({ value: provider, label: provider }))
            ]}
          />
          <Select
            label="Signal status"
            value={value.signalStatus}
            onChange={(signalStatus) => onChange({ signalStatus })}
            options={[
              { value: "all", label: "All statuses" },
              ...options.signalStatuses.map((status) => ({ value: status, label: status }))
            ]}
          />
          <Select
            label="Freshness"
            value={value.freshness}
            onChange={(freshness) => onChange({ freshness: freshness as GraphFreshness | "all" })}
            options={FRESHNESS_OPTIONS.map((option) => ({
              value: option,
              label: option === "all" ? "All freshness" : option
            }))}
          />

          <label className="block">
            <span className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              Confidence ≥
              <span className="font-mono text-slate-500">{Math.round(value.confidenceThreshold * 100)}%</span>
            </span>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={Math.round(value.confidenceThreshold * 100)}
              onChange={(event) => onChange({ confidenceThreshold: Number(event.target.value) / 100 })}
              className="mt-2 w-full accent-sky-500"
            />
          </label>

          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Edge types</span>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {EDGE_TYPES.map((type) => {
                const active = value.edgeTypes.has(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => onToggleEdgeType(type)}
                    aria-pressed={active}
                    title={EDGE_TYPE_META[type].description}
                    className={`rounded-full border px-2 py-0.5 text-[10px] transition ${
                      active
                        ? "border-slate-300 bg-slate-100 text-slate-600"
                        : "border-slate-200 bg-white text-slate-300"
                    }`}
                  >
                    {EDGE_TYPE_META[type].label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
