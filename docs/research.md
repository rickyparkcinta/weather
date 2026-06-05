# Research Notes

This project intentionally avoids Windy branding, proprietary assets, private APIs, scraping, and trading recommendations. The production app reads normalized Supabase records. Provider adapters are for future bot/debug use only.

## Library And API Evaluation

| Source | License visible | Why useful | Why not useful | Integration notes | Maintenance risk | Include |
| --- | --- | --- | --- | --- | --- | --- |
| https://github.com/windycom/API | No GitHub repo license visible in inspected UI; API terms/pricing apply | Shows public Windy Map Forecast API examples and constraints | Windy API docs say production requires Professional API and the map library is Leaflet-oriented | Do not copy UI/assets. Use only with an API key and plan approval. Keep out of core runtime until needed | Commercial/API terms can change; one Windy map instance limitation | No runtime include for MVP |
| https://github.com/CesiumGS/cesium | Apache 2.0 | Strong 3D globe/terrain engine | Larger dependency and more complex than needed for MVP city-market overlays | Revisit if a true 3D globe becomes core | Medium bundle/runtime complexity | Not included |
| https://github.com/maplibre/maplibre-gl-js | BSD-3-Clause style license | Open-source WebGL map engine, supports vector/raster maps and overlays | Needs a production tile provider for commercial traffic | Primary map engine | Low-medium; active project, tile policy external | Included |
| https://github.com/visgl/deck.gl | MIT | High-performance geospatial layers | Extra dependency not necessary for marker/bubble MVP | Add later for dense heatmaps, arcs, or GPU layers | Medium due dependency breadth | Not included in MVP |
| https://github.com/vasturiano/react-globe.gl | MIT | Fast path to a 3D globe using Three/WebGL | Adds separate rendering stack beside MapLibre | Revisit if globe mode becomes a first-class route | Medium | Not included |
| https://github.com/onaci/leaflet-velocity | CSIRO open-source license variation of BSD/MIT per README | Wind/velocity particle reference | Leaflet plugin, not MapLibre-native | Useful design reference for bot-generated wind grids | Medium; older plugin | Not included |
| https://github.com/geoql/maplibre-gl-wind | MIT in package metadata | MapLibre/deck.gl wind particle layer | Requires deck.gl/luma peer stack and Node >= 24 metadata | Revisit when real gridded wind data lands | Medium; young project | Not included in MVP |
| https://github.com/ecmwf/ecmwf-opendata | Apache 2.0 code; ECMWF open data under CC BY 4.0 and ECMWF terms | Official helper for ECMWF Open Data retrieval | Python/GRIB workflow belongs in the hourly bot, not the Vercel app | Bot should fetch/decode and post normalized records | Low-medium; official ECMWF package | Bot-side only |
| https://github.com/NOAA-EMC/wgrib2 | NOAA/DOC public project terms in README | Standard GRIB2 inspection/conversion utility | Native toolchain unsuitable for Vercel request path | Use in bot/worker for GFS GRIB decoding | Medium operational complexity | Bot-side only |
| https://github.com/weather-gov/api | Public NWS API docs | US weather REST data and OpenAPI reference | US-focused; not global city model source | Optional US fallback/provider adapter | Low | Not included |
| https://github.com/open-meteo/open-meteo | Source AGPLv3; API data CC BY 4.0 | No-key forecast API and excellent demo/fallback normalization source | Free API is non-commercial; terms must be respected for production use | Adapter implemented for optional server-side fetch/debug | Low-medium; API terms matter | Adapter included |
| https://github.com/supabase/supabase-js | MIT | Official JS client for Supabase reads/writes | None for this stack | Primary DB client, lazily initialized | Low | Included |
| https://github.com/supabase/ssr | MIT package | Useful for auth/cookie SSR apps | Current app does not need user auth | Add only when auth is introduced | Low | Not included |
| https://github.com/Polymarket/clob-client-v2 | MIT | Official TypeScript CLOB client | Trading/auth SDK not needed for read-first MVP | Public Gamma/CLOB data should be normalized by bot first | Medium; market/geography rules can change | Adapter only |
| https://github.com/Polymarket/ts-sdk | Beta/new unified SDK noted in docs/news; confirm before use | Potential future unified Polymarket API client | Newer beta surface; not necessary for MVP | Revisit after stability | High until stable | Not included |

## Provider Notes

- Windy API: the public docs describe Map Forecast API for visualization and state production requires the Professional version. This app uses a legally distinct UI and does not embed Windy assets by default.
- NOAA/NCEP NOMADS GFS: best handled by the hourly bot because GRIB2 decoding is not a good Vercel request-time task.
- ECMWF Open Data: data use requires attribution and terms compliance. The bot should fetch from ECMWF/cloud mirrors, decode, and post normalized points.
- Open-Meteo: useful MVP/debug adapter. Production/commercial usage must follow Open-Meteo terms and attribution.
- Kalshi: official REST API can provide public market data. Authenticated keys should remain server-side or bot-side only.
- Polymarket: Gamma/Data APIs expose public market data; CLOB/authenticated trading endpoints are out of scope for this no-advice app.
