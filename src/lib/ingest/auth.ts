import { getEnv } from "@/lib/env";

export function assertIngestionAuth(request: Request) {
  const expected = getEnv("INGESTION_SECRET");
  if (!expected) {
    return { ok: false as const, status: 503, message: "INGESTION_SECRET is not configured" };
  }

  const header = request.headers.get("authorization") ?? "";
  const token = header.match(/^Bearer\s+(.+)$/i)?.[1];

  if (!token || token !== expected) {
    return { ok: false as const, status: 401, message: "Missing or invalid bearer token" };
  }

  return { ok: true as const };
}
