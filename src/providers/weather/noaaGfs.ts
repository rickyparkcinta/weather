import type { City, ForecastPoint } from "@/types/domain";
import type { ForecastFetchOptions, ProviderResult, WeatherProviderAdapter } from "@/providers/weather/types";

export function buildNoaaGfsNomadsUrl(runDate: string, cycle = "00") {
  const url = new URL("https://nomads.ncep.noaa.gov/cgi-bin/filter_gfs_0p25.pl");
  url.searchParams.set("dir", `/gfs.${runDate}/${cycle}/atmos`);
  url.searchParams.set("file", `gfs.t${cycle}z.pgrb2.0p25.f012`);
  url.searchParams.set("lev_2_m_above_ground", "on");
  url.searchParams.set("lev_10_m_above_ground", "on");
  url.searchParams.set("var_TMP", "on");
  url.searchParams.set("var_UGRD", "on");
  url.searchParams.set("var_VGRD", "on");
  return url.toString();
}

export const noaaGfsAdapter: WeatherProviderAdapter = {
  name: "noaa-gfs",
  async fetchForecastForCity(_city: City, _options?: ForecastFetchOptions): Promise<ProviderResult<ForecastPoint[]>> {
    return {
      ok: false,
      error: {
        code: "noaa_gfs_parser_required",
        message: "NOMADS GFS access returns GRIB2. Add a GRIB parser/wgrib2 worker in the hourly bot, then post normalized points to this app."
      }
    };
  }
};
