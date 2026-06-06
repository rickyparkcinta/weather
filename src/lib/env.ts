export function getEnv(name: string) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : undefined;
}

export function isDemoModeEnabled() {
  const explicit = process.env.NEXT_PUBLIC_ENABLE_DEMO_DATA;
  if (explicit?.toLowerCase() === "false") {
    return false;
  }

  return (
    explicit?.toLowerCase() === "true" ||
    !getEnv("NEXT_PUBLIC_SUPABASE_URL") ||
    !getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY")
  );
}

export function getDefaultCitySlug() {
  return process.env.NEXT_PUBLIC_DEFAULT_CITY || "seoul";
}
