"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Loader2, Network, TriangleAlert } from "lucide-react";
import type { GraphCanvasApi } from "@/components/graph/GraphCanvas";
import { GraphControls } from "@/components/graph/GraphControls";
import { GraphFilters, defaultFilterState, type GraphFilterState } from "@/components/graph/GraphFilters";
import { GraphLegend } from "@/components/graph/GraphLegend";
import { NodeDetailsPanel } from "@/components/graph/NodeDetailsPanel";
import { Workbench } from "@/components/graph/Workbench";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import {
  NODE_TYPES,
  type GraphEdgeType,
  type GraphNode,
  type GraphNodeType,
  type RelationshipGraphResponse
} from "@/lib/graph/types";
import { localizedPath, type AppLocale } from "@/lib/i18n";
import { formatDateTime } from "@/lib/utils";

const GraphCanvas = dynamic(() => import("@/components/graph/GraphCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
      <Loader2 className="mr-2 animate-spin" size={16} /> Preparing graph canvas…
    </div>
  )
});

const GRID_STYLE: React.CSSProperties = {
  backgroundColor: "#f8fafc",
  backgroundImage:
    "linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)",
  backgroundSize: "28px 28px"
};

const LOW_CONFIDENCE_EDGE = 0.3;
const PROVIDER_SCOPED: ReadonlySet<GraphNodeType> = new Set(["provider", "provider_run", "market_event"]);

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(await response.text());
  return response.json() as Promise<T>;
}

function providerOf(node: GraphNode): string | null {
  const value = node.properties.provider;
  return typeof value === "string" ? value : null;
}

export function GraphShell({
  initialData,
  initialError = null,
  locale = "en"
}: {
  initialData: RelationshipGraphResponse | null;
  initialError?: string | null;
  locale?: AppLocale;
}) {
  const [tab, setTab] = useState<"graph" | "workbench">("graph");
  const [filters, setFilters] = useState<GraphFilterState>(defaultFilterState);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [expandOneHop, setExpandOneHop] = useState(false);
  const [collapseLowConfidence, setCollapseLowConfidence] = useState(false);
  const apiRef = useRef<GraphCanvasApi | null>(null);

  const query = useQuery({
    queryKey: ["relationship-graph"],
    queryFn: () => getJson<RelationshipGraphResponse>("/api/relationship-graph"),
    initialData: initialData ?? undefined,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    retry: 1
  });

  const data = query.data ?? initialData ?? null;
  const nodes = useMemo(() => data?.nodes ?? [], [data]);
  const edges = useMemo(() => data?.edges ?? [], [data]);

  const nodeById = useMemo(() => new Map(nodes.map((node) => [node.id, node] as const)), [nodes]);

  const adjacency = useMemo(() => {
    const map = new Map<string, Set<string>>();
    for (const node of nodes) map.set(node.id, new Set());
    for (const edge of edges) {
      map.get(edge.source)?.add(edge.target);
      map.get(edge.target)?.add(edge.source);
    }
    return map;
  }, [nodes, edges]);

  const typeCounts = useMemo(() => {
    const counts = Object.fromEntries(NODE_TYPES.map((type) => [type, 0])) as Record<GraphNodeType, number>;
    for (const node of nodes) counts[node.type] = (counts[node.type] ?? 0) + 1;
    return counts;
  }, [nodes]);

  const filterOptions = useMemo(() => {
    const cities = nodes
      .filter((node) => node.type === "city")
      .map((node) => ({ id: node.id, label: node.label }))
      .sort((a, b) => a.label.localeCompare(b.label));
    const providers = Array.from(
      new Set(nodes.filter((node) => node.type === "provider").map((node) => node.label))
    ).sort();
    const signalStatuses = Array.from(
      new Set(
        nodes
          .filter((node) => node.type === "combined_signal")
          .map((node) => (typeof node.properties.status === "string" ? node.properties.status : null))
          .filter((value): value is string => Boolean(value))
      )
    ).sort();
    return { cities, providers, signalStatuses };
  }, [nodes]);

  const { hiddenNodeIds, hiddenEdgeIds } = useMemo(() => {
    const hiddenNodes = new Set<string>();
    for (const node of nodes) {
      if (!filters.nodeTypes.has(node.type)) {
        hiddenNodes.add(node.id);
        continue;
      }
      if (
        filters.freshness !== "all" &&
        node.freshnessStatus !== "unknown" &&
        node.freshnessStatus !== filters.freshness
      ) {
        hiddenNodes.add(node.id);
        continue;
      }
      if (
        filters.confidenceThreshold > 0 &&
        typeof node.confidence === "number" &&
        node.confidence < filters.confidenceThreshold
      ) {
        hiddenNodes.add(node.id);
        continue;
      }
      if (filters.provider !== "all" && PROVIDER_SCOPED.has(node.type) && providerOf(node) !== filters.provider) {
        hiddenNodes.add(node.id);
        continue;
      }
      if (
        filters.signalStatus !== "all" &&
        node.type === "combined_signal" &&
        node.properties.status !== filters.signalStatus
      ) {
        hiddenNodes.add(node.id);
        continue;
      }
    }

    // City focus: keep the chosen city and its direct neighbours.
    if (filters.city !== "all" && nodeById.has(filters.city)) {
      const keep = new Set<string>([filters.city, ...(adjacency.get(filters.city) ?? [])]);
      for (const node of nodes) if (!keep.has(node.id)) hiddenNodes.add(node.id);
    }

    // Expand one hop: focus the selected node's local neighbourhood.
    if (expandOneHop && selectedNodeId && nodeById.has(selectedNodeId)) {
      const keep = new Set<string>([selectedNodeId, ...(adjacency.get(selectedNodeId) ?? [])]);
      for (const node of nodes) if (!keep.has(node.id)) hiddenNodes.add(node.id);
    }

    const hiddenEdges = new Set<string>();
    for (const edge of edges) {
      if (!filters.edgeTypes.has(edge.type)) {
        hiddenEdges.add(edge.id);
        continue;
      }
      if (collapseLowConfidence && edge.weight < LOW_CONFIDENCE_EDGE) {
        hiddenEdges.add(edge.id);
      }
    }

    return { hiddenNodeIds: hiddenNodes, hiddenEdgeIds: hiddenEdges };
  }, [nodes, edges, filters, adjacency, nodeById, expandOneHop, selectedNodeId, collapseLowConfidence]);

  const visibleNodeCount = nodes.length - hiddenNodeIds.size;

  const handleSelectNode = useCallback((id: string | null) => setSelectedNodeId(id), []);
  const handleReady = useCallback((api: GraphCanvasApi) => {
    apiRef.current = api;
  }, []);
  const patchFilters = useCallback(
    (patch: Partial<GraphFilterState>) => setFilters((prev) => ({ ...prev, ...patch })),
    []
  );
  const toggleNodeType = useCallback((type: GraphNodeType) => {
    setFilters((prev) => {
      const next = new Set(prev.nodeTypes);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return { ...prev, nodeTypes: next };
    });
  }, []);
  const toggleEdgeType = useCallback((type: GraphEdgeType) => {
    setFilters((prev) => {
      const next = new Set(prev.edgeTypes);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return { ...prev, edgeTypes: next };
    });
  }, []);
  const resetFilters = useCallback(() => {
    setFilters(defaultFilterState());
    setExpandOneHop(false);
    setCollapseLowConfidence(false);
  }, []);
  const focusSearch = useCallback((id: string) => {
    setSelectedNodeId(id);
    apiRef.current?.focusNode(id);
  }, []);

  const selectedNode = selectedNodeId ? nodeById.get(selectedNodeId) ?? null : null;
  const connectedCount = selectedNodeId ? adjacency.get(selectedNodeId)?.size ?? 0 : 0;

  return (
    <main className="flex h-[100dvh] flex-col overflow-hidden bg-[#06080b]">
      <ProductHeader locale={locale} />

      <div className="flex items-center justify-between gap-3 overflow-x-auto border-b border-white/10 bg-[#070b10] px-4 py-2 md:px-6">
        <div className="flex shrink-0 items-center gap-1">
          <TabButton active={tab === "graph"} onClick={() => setTab("graph")}>
            <Network size={14} /> Graph
          </TabButton>
          <TabButton active={tab === "workbench"} onClick={() => setTab("workbench")}>
            Workbench
          </TabButton>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {data ? (
            <div className="hidden items-center gap-2 font-mono text-[11px] text-slate-400 lg:flex">
              <Stat label="nodes" value={`${visibleNodeCount}/${data.stats.nodeCount}`} />
              <Stat label="edges" value={String(data.stats.edgeCount)} />
              <Stat label="fresh" value={String(data.stats.freshSignals)} />
              <Stat label="stale" value={String(data.stats.staleSignals)} />
              <Stat label="latest run" value={formatDateTime(data.stats.latestRunAt)} />
            </div>
          ) : null}
          <nav aria-label="Graph context" className="flex items-center gap-1 text-xs">
            <ContextLink href={locale === "en" ? "/map" : localizedPath(locale, "/")}>Map</ContextLink>
            <ContextLink href={localizedPath(locale, "/signals")}>Signals</ContextLink>
            <ContextLink href={localizedPath(locale, "/data")}>Data</ContextLink>
            <ContextLink href={localizedPath(locale, "/docs")}>Docs</ContextLink>
          </nav>
        </div>
      </div>

      {tab === "graph" ? (
        <div className="relative min-h-0 flex-1" style={GRID_STYLE}>
          {data ? (
            <GraphCanvas
              nodes={nodes}
              edges={edges}
              hiddenNodeIds={hiddenNodeIds}
              hiddenEdgeIds={hiddenEdgeIds}
              selectedNodeId={selectedNodeId}
              onSelectNode={handleSelectNode}
              onReady={handleReady}
            />
          ) : null}
          {!data ? <GraphErrorOverlay message={initialError ?? (query.error as Error | undefined)?.message} /> : null}

          {data ? (
            <>
              <div className="absolute left-3 top-3 z-10 flex max-h-[calc(100%-1.5rem)] flex-col gap-3 overflow-y-auto">
                <GraphFilters
                  options={filterOptions}
                  value={filters}
                  onChange={patchFilters}
                  onToggleEdgeType={toggleEdgeType}
                />
              </div>

              <div className="absolute right-3 top-3 z-10 flex max-h-[calc(100%-1.5rem)] flex-col items-end gap-3 overflow-hidden">
                <GraphControls
                  nodes={nodes}
                  onRefresh={() => query.refetch()}
                  onFit={() => apiRef.current?.fit()}
                  onZoomIn={() => apiRef.current?.zoomIn()}
                  onZoomOut={() => apiRef.current?.zoomOut()}
                  onResetFilters={resetFilters}
                  onSearchSelect={focusSearch}
                  onExpandOneHop={() => setExpandOneHop((prev) => !prev)}
                  expandActive={expandOneHop}
                  onToggleCollapseLowConfidence={() => setCollapseLowConfidence((prev) => !prev)}
                  collapseActive={collapseLowConfidence}
                  refreshing={query.isFetching}
                />
                {selectedNode ? (
                  <div className="min-h-0 w-[340px] overflow-hidden">
                    <NodeDetailsPanel
                      node={selectedNode}
                      connectedCount={connectedCount}
                      onClose={() => setSelectedNodeId(null)}
                    />
                  </div>
                ) : null}
              </div>

              <div className="absolute bottom-3 left-3 z-10 w-[210px]">
                <GraphLegend counts={typeCounts} activeTypes={filters.nodeTypes} onToggleType={toggleNodeType} />
              </div>

              <div className="pointer-events-none absolute bottom-3 right-3 z-10">
                <NonAdvisoryNotice compact locale={locale} className="max-w-sm border-slate-200 bg-white/90 text-slate-600" />
              </div>
            </>
          ) : null}
        </div>
      ) : (
        <div className="min-h-0 flex-1 overflow-y-auto">
          {data ? (
            <Workbench
              report={data.workbench}
              stats={data.stats}
              generatedAt={data.generatedAt}
              onRebuild={() => query.refetch()}
              rebuilding={query.isFetching}
            />
          ) : (
            <div className="mx-auto max-w-3xl px-4 py-10">
              <GraphErrorOverlay
                inline
                message={initialError ?? (query.error as Error | undefined)?.message}
              />
            </div>
          )}
        </div>
      )}
    </main>
  );
}

function TabButton({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition ${
        active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function ContextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-md px-2 py-1.5 text-slate-400 transition hover:bg-white/8 hover:text-white">
      {children}
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <span className="rounded border border-white/10 bg-black/30 px-2 py-1">
      <span className="text-slate-500">{label}</span> <span className="text-slate-200">{value}</span>
    </span>
  );
}

function GraphErrorOverlay({ message, inline = false }: { message?: string; inline?: boolean }) {
  const content = (
    <div className="max-w-md rounded-md border border-amber-300/30 bg-[#0b1118] p-5 text-sm text-amber-50 shadow-xl">
      <div className="flex items-center gap-2 font-semibold text-amber-200">
        <TriangleAlert size={16} /> Relationship graph unavailable
      </div>
      <p className="mt-2 leading-6 text-slate-300">
        {message ?? "The relationship graph could not be built."}
      </p>
      <p className="mt-2 text-xs leading-5 text-slate-500">
        Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
      </p>
      <div className="pointer-events-auto mt-3 flex flex-wrap gap-2 text-xs">
        <Link href="/admin/health" className="rounded-md border border-white/15 px-2.5 py-1.5 text-slate-200 hover:bg-white/8">
          Open data health
        </Link>
        <Link href="/docs/ops" className="rounded-md border border-white/15 px-2.5 py-1.5 text-slate-200 hover:bg-white/8">
          Setup docs
        </Link>
      </div>
    </div>
  );

  if (inline) return content;
  return <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-6">{content}</div>;
}
