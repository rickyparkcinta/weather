import { timingSafeEqual } from "node:crypto";
import { getEnv } from "@/lib/env";

function configuredSecrets() {
  return [getEnv("INGESTION_SECRET"), getEnv("CRON_SECRET")].filter((value): value is string => Boolean(value));
}

function secretMatches(provided: string, expected: string) {
  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);
  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }
  return timingSafeEqual(providedBuffer, expectedBuffer);
}

export function assertIngestionAuth(request: Request) {
  const allowed = configuredSecrets();
  if (allowed.length === 0) {
    return { ok: false as const, status: 503, message: "INGESTION_SECRET or CRON_SECRET is not configured" };
  }

  const header = request.headers.get("authorization") ?? "";
  const prefix = "Bearer ";
  const provided = header.toLowerCase().startsWith(prefix.toLowerCase()) ? header.slice(prefix.length) : undefined;

  if (!provided || !allowed.some((secret) => secretMatches(provided, secret))) {
    return { ok: false as const, status: 401, message: "Missing or invalid authorization" };
  }

  return { ok: true as const };
}
