"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { ForecastMarketMap } from "@/components/map/ForecastMarketMap";

/**
 * Browser-only entry point for the map.
 *
 * MapLibre GL touches `window`, `document` and WebGL at module/instance time,
 * none of which exist during Next.js server rendering. Loading the real map
 * with `ssr: false` guarantees its code never runs on the server, which is the
 * single most important fix for the crash/hydration failures.
 *
 * Everything that imports the map should import THIS component, not
 * `ForecastMarketMap` directly.
 */
const Map = dynamic(
  () => import("@/components/map/ForecastMarketMap").then((mod) => mod.ForecastMarketMap),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-[#06080b]">
        <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/40 px-4 py-2 text-xs text-white/70 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
          Loading map…
        </div>
      </div>
    )
  }
);

export type ClientMapProps = ComponentProps<typeof ForecastMarketMap>;

export function ClientMap(props: ClientMapProps) {
  return <Map {...props} />;
}
