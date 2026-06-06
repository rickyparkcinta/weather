# Forecast Market Map

A Vercel-ready Next.js App Router application for a global prediction-market forecast map. The production app reads normalized records from Supabase Postgres, while an external hourly bot is responsible for fetching official weather and prediction-market APIs.

The UI reads all data from Supabase. It shows a full-screen MapLibre map, major-city search, market probability bubbles, forecast overlays, city detail panels, timeline controls, market detail pages, and admin health status.

## Stack

- Next.js App Router, TypeScript, React
- Tailwind CSS
- Supabase JS client and Supabase Postgres
- TanStack Query
- Zod validation
- MapLibre GL JS
- Recharts for probability history
- Vitest

## Data Flow

1. Built-in sync or an hourly agent bot fetches official/public APIs.
2. Provider records are normalized into the Supabase schema.
3. Sync and ingestion routes write through secured server-side Supabase service role calls.
4. Vercel-hosted Next.js app reads Supabase using the anon key.
5. UI renders city forecast signals, linked markets, probability history, and model-vs-market disagreement.

The app does not scrape, does not call private APIs, and does not provide trading advice.

## Environment

Copy `.env.example` to `.env.local` for local development or set the same keys in Vercel:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
INGESTION_SECRET=

WINDY_API_KEY=
KALSHI_API_KEY=
KALSHI_API_SECRET=
KALSHI_PRIVATE_KEY=
POLYMARKET_API_KEY=
POLYMARKET_PRIVATE_KEY=
POLYMARKET_FUNDER_ADDRESS=

NEXT_PUBLIC_DEFAULT_CITY=seoul
NEXT_PUBLIC_DEFAULT_MAP_ENGINE=maplibre
NEXT_PUBLIC_DEFAULT_FORECAST_PROVIDER=supabase
NEXT_PUBLIC_DEFAULT_MARKET_PROVIDER=supabase
ENABLE_PROVIDER_FETCH_DEBUG=false
```

Supabase URL, anon key, and service role key must be configured and the migrations applied before the app can load data.

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/migrations/0001_init.sql`.
3. Run `supabase/migrations/0002_ingest_run_foundation.sql`.
4. Run `supabase/migrations/0003_idempotency_upsert_indexes.sql`.
5. Run `supabase/seed.sql`.
6. Copy the project URL and anon key into Vercel.
7. Copy the service role key into Vercel as `SUPABASE_SERVICE_ROLE_KEY`.
8. Create a strong `INGESTION_SECRET` for the hourly bot.

RLS is enabled on every table. Public anon users can only read app data tables. The service role key is required for ingestion writes and must never be exposed in browser code.

## Routes

- `/` main forecast-market map
- `/city/[slug]` city-focused map state
- `/markets/[id]` market detail
- `/docs/data-sources` data-source transparency
- `/admin/health` non-secret environment and read health

## API Routes

- `GET /api/cities`
- `GET /api/cities/[slug]`
- `GET /api/forecast?cityId=...&variable=...&from=...&to=...`
- `GET /api/markets?cityId=...&provider=...&category=...`
- `GET /api/markets/[id]`
- `GET /api/markets/[id]/history`
- `GET /api/combined-signals?cityId=...`
- `GET /api/map-layers?city=...`
- `POST /api/sync/real-api`
- `POST /api/ingest/run`
- `POST /api/ingest/forecast`
- `POST /api/ingest/markets`
- `POST /api/ingest/combined-signals`

Ingestion and sync routes require `Authorization: Bearer ${INGESTION_SECRET}`.

`POST /api/ingest/run` is the canonical normalized ingestion endpoint for new provider adapters. It logs execution in `provider_run_logs`, supports an `Idempotency-Key` header or body `idempotencyKey`, writes forecast/market/timeseries/signal records through the shared normalized writer, and returns the write result used by the map layer API. The narrower `/api/ingest/forecast`, `/api/ingest/markets`, and `/api/ingest/combined-signals` routes are compatibility surfaces.

## Real API Sync

Run a manual server-side sync after migrations and seed data are applied:

```bash
node --experimental-strip-types scripts/sync-real-api-data.ts
```

The sync upserts the city catalog, pulls Open-Meteo forecasts, fetches Polymarket weather/climate markets plus Kalshi public-market snapshots where available, links city-specific weather markets, writes probability history, and recomputes combined signals.

Optional environment overrides:

- `REAL_API_SYNC_CITY_LIMIT=30`
- `REAL_API_SYNC_FORECAST_DAYS=3`
- `REAL_API_SYNC_MARKET_LIMIT=40`
- `REAL_API_SYNC_MARKET_QUERIES=weather,rain,temperature`
- `REAL_API_SYNC_INCLUDE_KALSHI=true`
- `REAL_API_SYNC_INCLUDE_POLYMARKET=true`

## Development

```bash
npm install
npm run dev
npm run test
npm run typecheck
npm run build
```

Configure Supabase before running. Use `npm run dev` for local development, then `npm run build` before deployment.

## Vercel Deployment

1. Import the GitHub repository into Vercel.
2. Set the environment variables from `.env.example`.
3. Deploy with the default Next.js framework preset.
4. Confirm `/admin/health` shows Supabase URL, anon key, service role key, and ingestion secret configured.
5. Point the hourly bot at the production ingestion routes.

No long-running server process and no local filesystem persistence are required. No Vercel cron is required for the core app because the hourly bot updates Supabase externally.

See `docs/deployment-vercel.md` for a full deployment checklist.

## Official References

- [Vercel Next.js deployments](https://vercel.com/docs/frameworks/nextjs)
- [Vercel environment variables](https://vercel.com/docs/environment-variables)
- [Supabase Next.js quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase scheduled functions](https://supabase.com/docs/guides/functions/schedule-functions)
- [Windy API](https://api.windy.com/)
- [NOAA NOMADS](https://nomads.ncep.noaa.gov/)
- [ECMWF Open Data](https://www.ecmwf.int/en/forecasts/datasets/open-data)
- [Open-Meteo API](https://open-meteo.com/en/docs)
- [Kalshi API docs](https://docs.kalshi.com/welcome)
- [Polymarket API docs](https://docs.polymarket.com/api-reference)
