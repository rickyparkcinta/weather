import { existsSync, readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";
import { runWeatherImpactAgent, type WeatherImpactAgentOptions } from "../src/lib/agents/weatherImpactAgent.ts";

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

function readStringArg(args: string[], name: string) {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
}

function readNumberArg(args: string[], name: string) {
  const value = Number(readStringArg(args, name));
  return Number.isFinite(value) ? value : undefined;
}

function optionsFromArgs(args: string[]): WeatherImpactAgentOptions {
  return {
    cityId: readStringArg(args, "--city-id"),
    marketEventId: readStringArg(args, "--market-event-id"),
    limit: readNumberArg(args, "--limit")
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

const result = await runWeatherImpactAgent(client, optionsFromArgs(process.argv.slice(2)));
console.log(JSON.stringify(result, null, 2));
