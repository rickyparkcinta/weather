"use client";

import { useMemo, useState } from "react";
import {
  GitBranch,
  Maximize2,
  RotateCcw,
  RefreshCw,
  Scissors,
  Search,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { NODE_TYPE_META, type GraphNode } from "@/lib/graph/types";

function ControlButton({
  label,
  onClick,
  icon: Icon,
  active = false,
  disabled = false
}: {
  label: string;
  onClick: () => void;
  icon: typeof ZoomIn;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={label}
      aria-label={label}
      aria-pressed={active}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md border transition disabled:cursor-not-allowed disabled:opacity-40 ${
        active
          ? "border-sky-300 bg-sky-50 text-sky-700"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
      }`}
    >
      <Icon size={15} />
    </button>
  );
}

export function GraphControls({
  nodes,
  onRefresh,
  onFit,
  onZoomIn,
  onZoomOut,
  onResetFilters,
  onSearchSelect,
  onExpandOneHop,
  expandActive,
  onToggleCollapseLowConfidence,
  collapseActive,
  refreshing
}: {
  nodes: GraphNode[];
  onRefresh: () => void;
  onFit: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetFilters: () => void;
  onSearchSelect: (id: string) => void;
  onExpandOneHop: () => void;
  expandActive: boolean;
  onToggleCollapseLowConfidence: () => void;
  collapseActive: boolean;
  refreshing: boolean;
}) {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return nodes
      .filter((node) => node.label.toLowerCase().includes(q))
      .slice(0, 8);
  }, [nodes, query]);

  return (
    <div className="pointer-events-auto flex flex-col gap-2">
      <div className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white/95 p-1.5 shadow-lg backdrop-blur">
        <ControlButton label="Refresh" onClick={onRefresh} icon={RefreshCw} active={refreshing} />
        <ControlButton label="Fit to screen" onClick={onFit} icon={Maximize2} />
        <ControlButton label="Zoom in" onClick={onZoomIn} icon={ZoomIn} />
        <ControlButton label="Zoom out" onClick={onZoomOut} icon={ZoomOut} />
        <span className="mx-0.5 h-5 w-px bg-slate-200" />
        <ControlButton
          label="Expand one hop from selected"
          onClick={onExpandOneHop}
          icon={GitBranch}
          active={expandActive}
        />
        <ControlButton
          label="Collapse low-confidence edges"
          onClick={onToggleCollapseLowConfidence}
          icon={Scissors}
          active={collapseActive}
        />
        <ControlButton label="Reset filters" onClick={onResetFilters} icon={RotateCcw} />
      </div>

      <div className="relative rounded-md border border-slate-200 bg-white/95 shadow-lg backdrop-blur">
        <div className="flex items-center gap-2 px-2.5">
          <Search size={14} className="text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search node…"
            className="h-9 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
        {matches.length > 0 ? (
          <ul className="max-h-64 overflow-y-auto border-t border-slate-100 py-1">
            {matches.map((node) => (
              <li key={node.id}>
                <button
                  type="button"
                  onClick={() => {
                    onSearchSelect(node.id);
                    setQuery("");
                  }}
                  className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm text-slate-600 hover:bg-slate-100"
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: NODE_TYPE_META[node.type].color }}
                  />
                  <span className="min-w-0 flex-1 truncate">{node.label}</span>
                  <span className="shrink-0 text-[10px] uppercase tracking-wide text-slate-400">
                    {NODE_TYPE_META[node.type].label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
