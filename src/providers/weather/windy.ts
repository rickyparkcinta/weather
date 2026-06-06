import type { ForecastPoint } from "@/types/domain";
import type { ProviderResult, WeatherProviderAdapter } from "@/providers/weather/types";

export const windyAdapter: WeatherProviderAdapter = {
  name: "windy",
  async fetchForecastForCity(): Promise<ProviderResult<ForecastPoint[]>> {
    return {
      ok: false,
      error: {
        code: "windy_not_implemented",
        message: "Windy Map Forecast API is documented for map visualization. Add endpoint-specific server integration only after confirming plan, terms, and production key scope."
      }
    };
  }
};
