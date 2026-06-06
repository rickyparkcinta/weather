"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatPercent } from "@/lib/utils";
import type { MarketTimeSeriesPoint } from "@/types/domain";

export function ProbabilityChart({
  history,
  height = 220
}: {
  history: MarketTimeSeriesPoint[];
  height?: number;
}) {
  if (history.length === 0) {
    return (
      <div
        className="flex items-center justify-center rounded-md border border-white/10 bg-black/20 text-sm text-slate-400"
        style={{ height }}
      >
        No probability history recorded yet.
      </div>
    );
  }

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={history} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
          <defs>
            <linearGradient id="prob-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="5%" stopColor="#37c2ff" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#37c2ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis
            dataKey="timestamp"
            tick={{ fill: "#64748b", fontSize: 10 }}
            tickFormatter={(value) =>
              new Date(String(value)).toLocaleDateString(undefined, { month: "short", day: "numeric" })
            }
            minTickGap={32}
            stroke="rgba(255,255,255,0.1)"
          />
          <YAxis
            domain={[0, 1]}
            tick={{ fill: "#64748b", fontSize: 10 }}
            tickFormatter={(value) => `${Math.round(Number(value) * 100)}%`}
            width={40}
            stroke="rgba(255,255,255,0.1)"
          />
          <Tooltip
            contentStyle={{
              background: "#081018",
              border: "1px solid rgba(255,255,255,.14)",
              borderRadius: 6,
              fontSize: 12
            }}
            formatter={(value) => [formatPercent(Number(value)), "Probability"]}
            labelFormatter={(value) => new Date(String(value)).toLocaleString()}
          />
          <Area
            type="monotone"
            dataKey="probability"
            stroke="#37c2ff"
            fill="url(#prob-fill)"
            strokeWidth={2}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
