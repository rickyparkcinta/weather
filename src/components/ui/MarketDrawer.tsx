"use client";

import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { formatCompactNumber, formatPercent } from "@/lib/utils";
import type { MarketEvent, MarketTimeSeriesPoint } from "@/types/domain";

export function MarketDrawer({
  market,
  onClose
}: {
  market: MarketEvent | null;
  onClose: () => void;
}) {
  const historyQuery = useQuery({
    queryKey: ["market-history", market?.id],
    enabled: Boolean(market),
    queryFn: async () => {
      if (!market) return [];
      const response = await fetch(`/api/markets/${market.id}/history`);
      if (!response.ok) throw new Error(await response.text());
      return ((await response.json()) as { data: MarketTimeSeriesPoint[] }).data;
    }
  });

  if (!market) {
    return null;
  }

  const history = historyQuery.data ?? [];

  return (
    <aside className="pointer-events-auto absolute inset-x-3 bottom-3 z-30 max-h-[82dvh] overflow-y-auto rounded-md border border-white/12 bg-[var(--panel-strong)] p-4 shadow-2xl backdrop-blur-xl md:inset-x-auto md:bottom-4 md:right-4 md:top-24 md:w-[min(92vw,390px)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wide text-slate-500">{market.provider}</div>
          <h2 className="mt-1 text-base font-semibold leading-6 text-white">{market.title}</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close market details"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/8 hover:bg-white/12"
        >
          <X size={16} />
        </button>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{market.description ?? "No description provided."}</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <Metric label="Probability" value={formatPercent(market.probability)} />
        <Metric label="Volume" value={formatCompactNumber(market.volume)} />
        <Metric label="Liquidity" value={formatCompactNumber(market.liquidity)} />
      </div>
      <div className="mt-4 h-48 rounded-md border border-white/10 bg-black/20 p-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={history}>
            <defs>
              <linearGradient id="probability" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#37c2ff" stopOpacity={0.55} />
                <stop offset="95%" stopColor="#37c2ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="timestamp" hide />
            <YAxis hide domain={[0, 1]} />
            <Tooltip
              contentStyle={{ background: "#081018", border: "1px solid rgba(255,255,255,.14)", borderRadius: 6 }}
              formatter={(value) => formatPercent(Number(value))}
              labelFormatter={(value) => new Date(String(value)).toLocaleString()}
            />
            <Area type="monotone" dataKey="probability" stroke="#37c2ff" fill="url(#probability)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {market.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white/8 px-2 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
      {market.url ? (
        <a className="mt-4 inline-flex text-sm text-cyan-200 hover:text-cyan-100" href={market.url} target="_blank" rel="noreferrer">
          Open provider page
        </a>
      ) : null}
    </aside>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
      <div className="text-[11px] uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-sm text-white">{value}</div>
    </div>
  );
}
