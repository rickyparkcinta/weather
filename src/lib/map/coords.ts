/**
 * Defensive coordinate helpers shared by every map layer.
 *
 * live data is updated hourly by an external agent bot, so we treat all
 * coordinates as untrusted: a single NaN / null / out-of-range value passed to
 * `setLngLat` or `easeTo` throws synchronously inside a React effect and takes
 * the whole map (and often the page) down. These helpers keep that from ever
 * reaching MapLibre.
 */

export type LngLat = [number, number];

/** A safe place to look at the world when we have no valid coordinates at all. */
export const FALLBACK_CENTER: LngLat = [0, 20];

/** Longitude is valid on [-180, 180], latitude on [-90, 90]. */
export function isValidLngLat(lon: unknown, lat: unknown): boolean {
  return (
    typeof lon === "number" &&
    typeof lat === "number" &&
    Number.isFinite(lon) &&
    Number.isFinite(lat) &&
    lon >= -180 &&
    lon <= 180 &&
    lat >= -90 &&
    lat <= 90
  );
}

/**
 * Returns a guaranteed-valid [lon, lat] pair, or `null` if the input is junk.
 * Callers can `.filter(Boolean)` over a list of these to drop bad points.
 */
export function toLngLat(lon: unknown, lat: unknown): LngLat | null {
  return isValidLngLat(lon, lat) ? [lon as number, lat as number] : null;
}

/**
 * Always returns a usable center for map init / camera moves. Falls back to a
 * stable world view when the requested coordinates are invalid.
 */
export function sanitizeCenter(lon: unknown, lat: unknown): LngLat {
  return toLngLat(lon, lat) ?? FALLBACK_CENTER;
}
