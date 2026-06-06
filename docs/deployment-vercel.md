# Vercel Deployment

## Checklist

1. Create a Supabase project.
2. Apply `supabase/migrations/0001_init.sql`.
3. Apply `supabase/seed.sql`.
4. Import the GitHub repository into Vercel.
5. Add all required environment variables from `.env.example`.
6. Deploy using the default Next.js preset.
7. Open `/admin/health` and verify non-secret status.
8. Configure the hourly bot to call production `/api/ingest/*` routes.

## Required Vercel Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `INGESTION_SECRET`
- `NEXT_PUBLIC_DEFAULT_CITY`
- `ENABLE_PROVIDER_FETCH_DEBUG`

Optional provider variables:

- `WINDY_API_KEY`
- `KALSHI_API_KEY`
- `KALSHI_API_SECRET`
- `KALSHI_PRIVATE_KEY`
- `POLYMARKET_API_KEY`
- `POLYMARKET_PRIVATE_KEY`
- `POLYMARKET_FUNDER_ADDRESS`

## Vercel Compatibility

- API routes are standard Next.js Route Handlers.
- No long-running process is required.
- No filesystem persistence is required.
- No Vercel cron is required for core behavior.
- Supabase clients are lazily initialized so missing env vars surface as a clear runtime error rather than a crash at import time.

## Tile Provider Note

The map style uses public OpenStreetMap raster tiles so the app can render without a key. For production traffic, configure a dedicated tile provider or self-hosted tiles that match your usage requirements.
