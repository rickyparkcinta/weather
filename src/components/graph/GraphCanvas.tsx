"use client";

import { useEffect, useRef } from "react";
import Graph from "graphology";
import forceAtlas2 from "graphology-layout-forceatlas2";
import Sigma from "sigma";
import { nodeBaseSize, nodeColor, edgeColor, type GraphEdge, type GraphNode } from "@/lib/graph/types";

export type GraphCanvasApi = {
  zoomIn: () => void;
  zoomOut: () => void;
  fit: () => void;
  focusNode: (id: string) => void;
};

type GraphCanvasProps = {
  nodes: GraphNode[];
  edges: GraphEdge[];
  hiddenNodeIds: Set<string>;
  hiddenEdgeIds: Set<string>;
  selectedNodeId: string | null;
  onSelectNode: (id: string | null) => void;
  onReady?: (api: GraphCanvasApi) => void;
};

const DIM_NODE = "#d3dce4";
const DIM_EDGE = "#e9eef3";

function layoutIterations(nodeCount: number): number {
  if (nodeCount <= 0) return 0;
  return Math.min(320, Math.max(60, Math.floor(24000 / nodeCount)));
}

export default function GraphCanvas({
  nodes,
  edges,
  hiddenNodeIds,
  hiddenEdgeIds,
  selectedNodeId,
  onSelectNode,
  onReady
}: GraphCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sigmaRef = useRef<Sigma | null>(null);
  const graphRef = useRef<Graph | null>(null);

  const hiddenNodesRef = useRef(hiddenNodeIds);
  const hiddenEdgesRef = useRef(hiddenEdgeIds);
  const selectedRef = useRef<string | null>(selectedNodeId);
  const neighborsRef = useRef<Set<string>>(new Set());
  const onSelectRef = useRef(onSelectNode);

  useEffect(() => {
    onSelectRef.current = onSelectNode;
  }, [onSelectNode]);

  // Build graph + layout + Sigma when the dataset identity changes.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const graph = new Graph({ multi: true, type: "undirected" });
    const count = nodes.length;

    nodes.forEach((node, index) => {
      const angle = (2 * Math.PI * index) / Math.max(1, count);
      const radius = 6 + (index % 11);
      graph.addNode(node.id, {
        x: Math.cos(angle) * radius + Math.cos(index) * 0.6,
        y: Math.sin(angle) * radius + Math.sin(index) * 0.6,
        size: nodeBaseSize(node.type),
        color: nodeColor(node.type),
        label: node.label,
        nodeType: node.type
      });
    });

    edges.forEach((edge) => {
      if (!graph.hasNode(edge.source) || !graph.hasNode(edge.target)) return;
      try {
        graph.addEdgeWithKey(edge.id, edge.source, edge.target, {
          size: 0.5 + Math.min(1.6, edge.weight * 1.6),
          color: edgeColor(edge.type),
          edgeType: edge.type
        });
      } catch {
        // Ignore duplicate-key insertions.
      }
    });

    // Degree-weighted node sizing so hubs read larger.
    graph.forEachNode((id, attrs) => {
      const degree = graph.degree(id);
      graph.setNodeAttribute(id, "size", (attrs.size as number) + Math.sqrt(degree) * 1.4);
    });

    if (count > 0) {
      forceAtlas2.assign(graph, {
        iterations: layoutIterations(count),
        settings: { ...forceAtlas2.inferSettings(graph), gravity: 1.2, scalingRatio: 14, slowDown: 2 }
      });
    }

    const sigma = new Sigma(graph, container, {
      // The flex container can briefly report a zero size on first mount;
      // Sigma's internal ResizeObserver draws once it has real dimensions.
      allowInvalidContainer: true,
      renderEdgeLabels: false,
      defaultEdgeColor: "#cbd5e1",
      labelColor: { color: "#1f2a37" },
      labelSize: 11,
      labelWeight: "500",
      labelFont: "Geist, Inter, system-ui, sans-serif",
      labelRenderedSizeThreshold: 11,
      zIndex: true,
      minCameraRatio: 0.05,
      maxCameraRatio: 12,
      nodeReducer: (node, data) => {
        const res: Record<string, unknown> = { ...data };
        if (hiddenNodesRef.current.has(node)) {
          res.hidden = true;
          return res;
        }
        const selected = selectedRef.current;
        if (selected) {
          if (node === selected) {
            res.highlighted = true;
            res.zIndex = 3;
          } else if (neighborsRef.current.has(node)) {
            res.zIndex = 2;
          } else {
            res.color = DIM_NODE;
            res.label = "";
            res.zIndex = 0;
          }
        }
        return res;
      },
      edgeReducer: (edge, data) => {
        const res: Record<string, unknown> = { ...data };
        const graphInstance = graphRef.current;
        const source = graphInstance?.source(edge);
        const target = graphInstance?.target(edge);
        if (
          hiddenEdgesRef.current.has(edge) ||
          (source && hiddenNodesRef.current.has(source)) ||
          (target && hiddenNodesRef.current.has(target))
        ) {
          res.hidden = true;
          return res;
        }
        const selected = selectedRef.current;
        if (selected && source !== selected && target !== selected) {
          res.color = DIM_EDGE;
          res.zIndex = 0;
        }
        return res;
      }
    });

    sigma.on("clickNode", ({ node }) => onSelectRef.current(node));
    sigma.on("clickStage", () => onSelectRef.current(null));

    graphRef.current = graph;
    sigmaRef.current = sigma;

    const api: GraphCanvasApi = {
      zoomIn: () => sigma.getCamera().animatedZoom(1.6),
      zoomOut: () => sigma.getCamera().animatedUnzoom(1.6),
      fit: () => sigma.getCamera().animatedReset(),
      focusNode: (id: string) => {
        if (!graph.hasNode(id)) return;
        const display = sigma.getNodeDisplayData(id);
        if (display) {
          sigma.getCamera().animate({ x: display.x, y: display.y, ratio: 0.4 }, { duration: 480 });
        }
      }
    };
    onReady?.(api);

    return () => {
      sigma.kill();
      sigmaRef.current = null;
      graphRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, edges]);

  // Apply visibility + selection without rebuilding the layout.
  useEffect(() => {
    hiddenNodesRef.current = hiddenNodeIds;
    hiddenEdgesRef.current = hiddenEdgeIds;
    selectedRef.current = selectedNodeId;

    const graph = graphRef.current;
    if (graph && selectedNodeId && graph.hasNode(selectedNodeId)) {
      neighborsRef.current = new Set(graph.neighbors(selectedNodeId));
    } else {
      neighborsRef.current = new Set();
    }

    sigmaRef.current?.refresh();
  }, [hiddenNodeIds, hiddenEdgeIds, selectedNodeId]);

  return <div ref={containerRef} className="h-full w-full" />;
}
