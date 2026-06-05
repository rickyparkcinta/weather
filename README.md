# Forecast Market Map

A Vercel-ready Next.js App Router application for a global prediction-market forecast map. The production app reads normalized records from Supabase Postgres, while an external hourly bot is responsible for fetching official weather and prediction-market APIs.

The UI runs without credentials in demo mode. It shows a full-screen MapLibre map, major-city search, market probability bubbles, forecast overlays, city detail panels, timeline controls, market detail pages, data-source transparency, and admin health status.

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

1. Hourly agent bot fetches official/public APIs.
2. Bot normalizes records into the contract in `docs/hourly-bot-contract.md`.
3. Bot calls secured ingestion routes with `Authorization: Bearer INGESTION_SECRET`.
4. Vercel-hosted Next.js app reads Supabase using the anon key.
5. UI renders city forecast signals, linked markets, probability history, and model-vs-market disagreement.

The app does not scrape, does not call private APIs, and does not recommend trades.

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
NEXT_PUBLIC_ENABLE_DEMO_DATA=true
NEXT_PUBLIC_DEFAULT_FORECAST_PROVIDER=supabase
NEXT_PUBLIC_DEFAULT_MARKET_PROVIDER=supabase
ENABLE_PROVIDER_FETCH_DEBUG=false
```

Leave `NEXT_PUBLIC_ENABLE_DEMO_DATA=true` for a credential-free demo. Set it to `false` only after Supabase URL and anon key are configured and migrations have been applied.

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/migrations/0001_init.sql`.
3. Run `supabase/seed.sql`.
4. Copy the project URL and anon key into Vercel.
5. Copy the service role key into Vercel as `SUPABASE_SERVICE_ROLE_KEY`.
6. Create a strong `INGESTION_SECRET` for the hourly bot.

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
- `POST /api/ingest/forecast`
- `POST /api/ingest/markets`
- `POST /api/ingest/combined-signals`

Ingestion routes require `Authorization: Bearer ${INGESTION_SECRET}`.

## Development

```bash
npm install
npm run dev
npm run test
npm run typecheck
npm run build
```

The current repo was scaffolded without running a local build. Use `npm run dev` to inspect demo mode, then `npm run build` before deployment.

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
