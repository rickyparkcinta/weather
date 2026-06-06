export function getEnv(name: string) {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : undefined;
}

export function getDefaultCitySlug() {
  return process.env.NEXT_PUBLIC_DEFAULT_CITY || "seoul";
}
