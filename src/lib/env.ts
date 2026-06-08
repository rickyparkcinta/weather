export function getEnv(name: string) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : undefined;
}

export function isDemoModeEnabled() {
  return (
    process.env.NEXT_PUBLIC_ENABLE_DEMO_DATA?.toLowerCase() === "true" ||
    process.env.ENABLE_DEMO_MODE?.toLowerCase() === "true"
  );
}

export function isLiveModeForced() {
  return process.env.NEXT_PUBLIC_ENABLE_DEMO_DATA?.toLowerCase() === "false";
}

export function getDefaultCitySlug() {
  return process.env.NEXT_PUBLIC_DEFAULT_CITY || "seoul";
}
