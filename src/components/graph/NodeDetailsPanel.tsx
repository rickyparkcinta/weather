"use client";

import { X } from "lucide-react";
import { NODE_TYPE_META, type GraphNode } from "@/lib/graph/types";
import { formatDateTime, formatPercent } from "@/lib/utils";

function underlyingId(node: GraphNode): string {
  const rest = node.id.split(":").slice(1).join(":");
  return rest || node.id;
}

function formatValue(value: string | number | boolean | null): string {
  if (value === null || value === undefined) return "—";
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") return String(value);
  return value;
}

function looksLikeTimestamp(key: string): boolean {
  return /At$|Time$|_at$/.test(key);
}

const PROB_KEYS = new Set(["modelProbability", "marketProbability", "confidence", "rawEdge", "adjustedEdge"]);

function FreshnessChip({ status }: { status: GraphNode["freshnessStatus"] }) {
  const tone =
    status === "fresh"
      ? "border-emerald-300 bg-emerald-50 text-emerald-700"
      : status === "aging"
        ? "border-amber-300 bg-amber-50 text-amber-700"
        : status === "stale"
          ? "border-rose-300 bg-rose-50 text-rose-700"
          : "border-slate-300 bg-slate-50 text-slate-500";
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${tone}`}>
      {status}
    </span>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_minmax(0,1fr)] gap-3 py-1.5">
      <span className="text-[11px] uppercase tracking-wide text-slate-400">{label}</span>
      <span className="min-w-0 break-words text-sm text-slate-700">{children}</span>
    </div>
  );
}

function SignalDetail({ node }: { node: GraphNode }) {
  const p = node.properties;
  const fields: Array<[string, string]> = [
    ["model_probability", formatPercent(typeof p.modelProbability === "number" ? p.modelProbability : null)],
    ["market_probability", formatPercent(typeof p.marketProbability === "number" ? p.marketProbability : null)],
    ["raw_edge", typeof p.rawEdge === "number" ? `${(p.rawEdge * 100).toFixed(1)} pp` : "—"],
    ["adjusted_edge", typeof p.adjustedEdge === "number" ? `${(p.adjustedEdge * 100).toFixed(1)} pp` : "—"],
    ["confidence", formatPercent(typeof p.confidence === "number" ? p.confidence : null)],
    ["freshness_status", String(node.freshnessStatus)],
    ["computed_at", formatDateTime(typeof p.computedAt === "string" ? p.computedAt : null)]
  ];

  return (
    <div className="mt-4 rounded-md border border-rose-200 bg-rose-50/60 p-3">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-rose-600">Research signal</div>
      <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-2">
        {fields.map(([label, value]) => (
          <div key={label} className="min-w-0">
            <dt className="text-[10px] uppercase tracking-wide text-slate-400">{label}</dt>
            <dd className="truncate font-mono text-xs text-slate-700">{value}</dd>
          </div>
        ))}
      </dl>
      {typeof p.status === "string" ? (
        <div className="mt-2 text-[10px] uppercase tracking-wide text-slate-400">
          status: <span className="font-mono text-slate-600">{p.status}</span>
        </div>
      ) : null}
      <p className="mt-2 text-sm leading-6 text-slate-600">{node.summary}</p>
    </div>
  );
}

export function NodeDetailsPanel({
  node,
  connectedCount,
  onClose
}: {
  node: GraphNode | null;
  connectedCount: number;
  onClose: () => void;
}) {
  if (!node) return null;
  const meta = NODE_TYPE_META[node.type];
  const isSignal = node.type === "combined_signal";

  const propertyEntries = Object.entries(node.properties).filter(([key]) => !(isSignal && PROB_KEYS.has(key)));

  return (
    <aside className="pointer-events-auto flex max-h-full w-[340px] flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-2xl">
      <div className="flex items-start justify-between gap-3 border-b border-slate-100 p-4">
        <div className="min-w-0">
          <div className="text-base font-semibold text-slate-800">Node Details</div>
          <span
            className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-white"
            style={{ backgroundColor: meta.color }}
          >
            {meta.label}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close node details"
          className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        >
          <X size={16} />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        <Row label="Name">{node.label}</Row>
        <Row label="UUID">
          <span className="font-mono text-xs text-slate-500">{underlyingId(node)}</span>
        </Row>
        {typeof node.properties.createdAt === "string" ? (
          <Row label="Created">{formatDateTime(node.properties.createdAt)}</Row>
        ) : null}
        {typeof node.properties.updatedAt === "string" ? (
          <Row label="Updated">{formatDateTime(node.properties.updatedAt)}</Row>
        ) : null}
        <Row label="Freshness">
          <FreshnessChip status={node.freshnessStatus} />
        </Row>
        {typeof node.confidence === "number" ? (
          <Row label="Confidence">{formatPercent(node.confidence)}</Row>
        ) : null}
        <Row label="Connections">{connectedCount}</Row>
        <Row label="Provenance">
          <span className="text-xs text-slate-500">{node.source}</span>
        </Row>

        {isSignal ? <SignalDetail node={node} /> : null}

        <div className="mt-4">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Summary</div>
          <p className="mt-1.5 text-sm leading-6 text-slate-600">{node.summary}</p>
        </div>

        {propertyEntries.length > 0 ? (
          <div className="mt-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Properties</div>
            <table className="mt-2 w-full table-fixed border-collapse text-sm">
              <tbody>
                {propertyEntries.map(([key, value]) => (
                  <tr key={key} className="border-b border-slate-100 last:border-0">
                    <td className="w-2/5 py-1.5 pr-2 align-top text-[11px] uppercase tracking-wide text-slate-400">
                      {key}
                    </td>
                    <td className="break-words py-1.5 align-top font-mono text-xs text-slate-700">
                      {looksLikeTimestamp(key) && typeof value === "string"
                        ? formatDateTime(value)
                        : formatValue(value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
