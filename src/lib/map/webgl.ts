/**
 * WebGL availability detection.
 *
 * MapLibre GL requires WebGL. On lower-end / older mobile devices, in some
 * privacy modes, or when GPU acceleration is disabled, `new maplibregl.Map`
 * throws. We probe for support up front so the UI can show a graceful fallback
 * instead of crashing.
 *
 * Must only be called in the browser (guarded by `typeof window`).
 */
export function isWebglSupported(): boolean {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}
