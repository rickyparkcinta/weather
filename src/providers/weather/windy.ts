import type { City, ForecastPoint } from "@/types/domain";
import type { ForecastFetchOptions, ProviderResult, WeatherProviderAdapter } from "@/providers/weather/types";

export const windyAdapter: WeatherProviderAdapter = {
  name: "windy",
  async fetchForecastForCity(_city: City, _options?: ForecastFetchOptions): Promise<ProviderResult<ForecastPoint[]>> {
    return {
      ok: false,
      error: {
        code: "windy_not_implemented",
        message: "Windy Map Forecast API is documented for map visualization. Add endpoint-specific server integration only after confirming plan, terms, and production key scope."
      }
    };
  }
};
