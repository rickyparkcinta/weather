import { z } from "zod";
import type { City, ForecastPoint } from "@/types/domain";
import type { ForecastFetchOptions, ProviderResult, WeatherProviderAdapter } from "@/providers/weather/types";

const PROVIDER_FETCH_TIMEOUT_MS = 15_000;

const openMeteoHourlySchema = z.object({
  hourly: z
    .object({
      time: z.array(z.string()),
      temperature_2m: z.array(z.number()).optional(),
      precipitation_probability: z.array(z.number()).optional(),
      wind_speed_10m: z.array(z.number()).optional()
    })
    .passthrough()
});

export function normalizeOpenMeteoHourlyResponse(input: unknown, city: City, runTime = new Date().toISOString()): ForecastPoint[] {
  const parsed = openMeteoHourlySchema.parse(input);
  const times = parsed.hourly.time;
  const variables = Object.entries(parsed.hourly).filter(([key, value]) => key !== "time" && Array.isArray(value)) as [string, number[]][];

  return variables.flatMap(([variable, values]) =>
    values.map((value, index) => ({
      id: `open-meteo-${city.slug}-${variable}-${index}`,
      cityId: city.id,
      provider: "open-meteo",
      model: "best_match",
      runTime,
      forecastTime: times[index] ?? runTime,
      variable,
      value,
      unit: variable === "temperature_2m" ? "C" : variable === "precipitation_probability" ? "probability" : "km/h",
      lat: city.lat,
      lon: city.lon,
      confidence: null,
      raw: { source: "open-meteo" }
    }))
  );
}

export const openMeteoAdapter: WeatherProviderAdapter = {
  name: "open-meteo",
  async fetchForecastForCity(city: City, options?: ForecastFetchOptions): Promise<ProviderResult<ForecastPoint[]>> {
    const variables = options?.variables ?? ["temperature_2m", "precipitation_probability", "wind_speed_10m"];
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", String(city.lat));
    url.searchParams.set("longitude", String(city.lon));
    url.searchParams.set("hourly", variables.join(","));
    url.searchParams.set("timezone", "UTC");

    if (options?.from) url.searchParams.set("start_date", options.from.slice(0, 10));
    if (options?.to) url.searchParams.set("end_date", options.to.slice(0, 10));

    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(PROVIDER_FETCH_TIMEOUT_MS) });
      if (!response.ok) {
        return { ok: false, error: { code: "open_meteo_http", message: `Open-Meteo returned ${response.status}`, retryable: response.status >= 500 } };
      }

      return { ok: true, data: normalizeOpenMeteoHourlyResponse(await response.json(), city) };
    } catch (error) {
      return { ok: false, error: { code: "open_meteo_fetch_failed", message: error instanceof Error ? error.message : String(error), retryable: true } };
    }
  }
};
