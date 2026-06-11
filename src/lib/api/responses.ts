/** Public, read-only data that tolerates a short CDN cache. */
export const SHORT_CACHE_HEADERS = {
  "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120"
} as const;

/** Health/status payloads that must always reflect the current state. */
export const NO_STORE_HEADERS = {
  "Cache-Control": "no-store"
} as const;

export function jsonOk<T>(data: T, init?: ResponseInit) {
  // Default to no-store so status- and freshness-sensitive payloads are never
  // cached by proxies; routes serving stable public data opt into a short
  // CDN cache explicitly.
  return Response.json(data, init ?? { headers: NO_STORE_HEADERS });
}

export function jsonError(message: string, status = 500, details?: unknown) {
  return Response.json({ error: message, details }, { status, headers: NO_STORE_HEADERS });
}

/** Parse and clamp a positive integer query param such as `limit`. */
export function clampedIntParam(raw: string | null, fallback: number, max: number) {
  if (!raw) return fallback;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(parsed, max);
}
