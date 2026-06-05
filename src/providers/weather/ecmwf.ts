import type { City, ForecastPoint } from "@/types/domain";
import type { ForecastFetchOptions, ProviderResult, WeatherProviderAdapter } from "@/providers/weather/types";

export const ecmwfAdapter: WeatherProviderAdapter = {
  name: "ecmwf",
  async fetchForecastForCity(_city: City, _options?: ForecastFetchOptions): Promise<ProviderResult<ForecastPoint[]>> {
    return {
      ok: false,
      error: {
        code: "ecmwf_bot_ingestion_required",
        message: "ECMWF Open Data should be fetched by the hourly bot or a data worker, decoded from GRIB, attributed, and posted as normalized forecast_points."
      }
    };
  }
};
