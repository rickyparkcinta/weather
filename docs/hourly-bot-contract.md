# Hourly Bot Contract

All ingestion routes require:

```http
Authorization: Bearer INGESTION_SECRET
Content-Type: application/json
```

The bot should fetch official/public APIs, normalize records, and submit payloads. The app does not call external data providers for the main user experience. Operators can also run the built-in real API sync endpoint for a one-shot server-side collection pass.

## Built-In Real API Sync

`POST /api/sync/real-api`

Optional JSON body:

```json
{
  "cityLimit": 30,
  "forecastDays": 3,
  "marketLimit": 40,
  "marketQueries": ["weather", "rain", "temperature"],
  "includeKalshi": true,
  "includePolymarket": true
}
```

The route upserts seeded city metadata, Open-Meteo forecast points, linked weather prediction markets, market timeseries snapshots, and computed combined signals.

## Forecast Ingestion

`POST /api/ingest/forecast`

```json
{
  "source": "open-meteo",
  "run": {
    "provider": "open-meteo",
    "model": "gfs",
    "runTime": "2026-06-05T00:00:00Z",
    "sourceUrl": "https://open-meteo.com/en/docs"
  },
  "points": [
    {
      "citySlug": "seoul",
      "forecastTime": "2026-06-05T12:00:00Z",
      "variable": "temperature_2m",
      "value": 27.4,
      "unit": "C",
      "confidence": 0.72,
      "raw": {}
    }
  ]
}
```

Response:

```json
{
  "records_seen": 1,
  "records_inserted": 1,
  "records_updated": 0
}
```

## Market Ingestion

`POST /api/ingest/markets`

```json
{
  "source": "kalshi",
  "events": [
    {
      "provider": "kalshi",
      "providerEventId": "KXDEMO",
      "title": "Will Seoul record measurable rain this weekend?",
      "description": "Example normalized market.",
      "category": "weather",
      "tags": ["weather", "rain"],
      "citySlugs": ["seoul"],
      "countryCodes": ["KR"],
      "probability": 0.63,
      "bid": 0.62,
      "ask": 0.64,
      "volume": 120000,
      "liquidity": 22000,
      "openInterest": 50000,
      "closeTime": "2026-06-06T00:00:00Z",
      "resolutionSource": "Provider resolution source",
      "url": "https://example.com/market",
      "status": "active",
      "raw": {}
    }
  ],
  "timeseries": [
    {
      "providerEventId": "KXDEMO",
      "timestamp": "2026-06-05T01:00:00Z",
      "probability": 0.63,
      "bid": 0.62,
      "ask": 0.64,
      "volume": 120000,
      "liquidity": 22000,
      "raw": {}
    }
  ]
}
```

## Combined Signal Ingestion

`POST /api/ingest/combined-signals`

```json
{
  "citySlug": "seoul",
  "signals": [
    {
      "providerEventId": "KXDEMO",
      "forecastVariable": "precipitation_probability",
      "signalType": "weather_market_disagreement",
      "modelProbability": 0.72,
      "marketProbability": 0.55,
      "disagreement": 0.17,
      "status": "model_above_market",
      "explanation": "Model precipitation probability is higher than market-implied probability.",
      "raw": {}
    }
  ]
}
```

## Operational Rules

- Send already-normalized data. Do not send private provider credentials to this app.
- Unknown `citySlug` records are skipped by the forecast and market ingestion routes.
- Service role writes are server-side only.
- Provider debug fetching is intentionally not enabled by default.
- `ENABLE_PROVIDER_FETCH_DEBUG=true` is required before any adapter debug fetch helper will call live providers.
- Store provider response fragments in `raw` only when they are safe and useful for audit/debugging.
