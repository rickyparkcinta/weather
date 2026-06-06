import { existsSync, readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import { realApiSyncOptionsFromEnv, syncRealApiData, type RealApiSyncOptions } from "../src/lib/sync/real-api-sync.ts";

function loadEnvFile(path: string) {
  if (!existsSync(path)) return;

  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const match = trimmed.match(/^(?:export\s+)?([^=]+)=(.*)$/);
    if (!match) continue;

    const key = match[1].trim();
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    process.env[key] ??= value;
  }
}

function readNumberArg(args: string[], name: string) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  const value = Number(args[index + 1]);
  return Number.isFinite(value) ? value : undefined;
}

function readBooleanArg(args: string[], positive: string, negative: string) {
  if (args.includes(positive)) return true;
  if (args.includes(negative)) return false;
  return undefined;
}

function readStringListArg(args: string[], name: string) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  return args[index + 1]?.split(",").map((item) => item.trim()).filter(Boolean);
}

function optionsFromArgs(args: string[]): RealApiSyncOptions {
  return {
    cityLimit: readNumberArg(args, "--city-limit"),
    forecastDays: readNumberArg(args, "--forecast-days"),
    marketLimit: readNumberArg(args, "--market-limit"),
    marketQueries: readStringListArg(args, "--market-queries"),
    includeKalshi: readBooleanArg(args, "--include-kalshi", "--no-kalshi"),
    includePolymarket: readBooleanArg(args, "--include-polymarket", "--no-polymarket")
  };
}

loadEnvFile(".env.local");
loadEnvFile(".env.production.local");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required");
}

const client = createClient(url, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

const options = {
  ...realApiSyncOptionsFromEnv(process.env),
  ...optionsFromArgs(process.argv.slice(2))
};

const result = await syncRealApiData(client, options);
console.log(JSON.stringify(result, null, 2));
