# Hourly Bot Contract

All ingestion routes require:

```http
Authorization: Bearer INGESTION_SECRET
Content-Type: application/json
```

The bot should fetch official/public APIs, normalize records, and submit payloads. The app does not call external data providers for the main user experience. Operators can also run the built-in real API sync endpoint for a one-shot server-side collection pass.

## Canonical Normalized Ingestion

`POST /api/ingest/run`

Use this endpoint for the real product path. It accepts normalized records from a provider adapter, records the provider execution in `provider_run_logs`, writes to the canonical live tables, and produces map-ready forecast, market, and signal data for `GET /api/map-layers`.

Required adapter interface:

```ts
export type ProviderAdapter = {
  id: string;
  type: "weather" | "market" | "observation";
  version: string;
  fetch: (input: AdapterInput) => Promise<RawProviderPayload>;
  normalize: (payload: RawProviderPayload) => Promise<NormalizedRecord[]>;
};
```

The web route currently uses a submitted-payload adapter. The hourly bot performs provider-specific fetches, normalizes records, and sends them in the body:

```json
{
  "providerId": "hourly-bot",
  "providerType": "weather",
  "adapterVersion": "normalized.v1",
  "idempotencyKey": "open-meteo-2026-06-06T00",
  "fetchedAt": "2026-06-06T00:12:00Z",
  "staleAfterMinutes": 180,
  "metadata": {
    "source": "operator-bot"
  },
  "records": [
    {
      "kind": "forecast_point",
      "citySlug": "seoul",
      "provider": "open-meteo",
      "model": "best_match",
      "runTime": "2026-06-06T00:00:00Z",
      "forecastTime": "2026-06-06T12:00:00Z",
      "variable": "precipitation_probability",
      "value": 0.72,
      "unit": "probability",
      "confidence": 0.8,
      "raw": {}
    },
    {
      "kind": "market_event",
      "provider": "kalshi",
      "providerEventId": "KXDEMO",
      "title": "Will Seoul record measurable rain this weekend?",
      "category": "weather",
      "tags": ["weather", "rain"],
      "citySlugs": ["seoul"],
      "probability": 0.55,
      "bid": 0.53,
      "ask": 0.57,
      "status": "active",
      "raw": {}
    },
    {
      "kind": "combined_signal",
      "citySlug": "seoul",
      "providerEventId": "KXDEMO",
      "forecastVariable": "precipitation_probability",
      "signalType": "weather_market_disagreement",
      "modelProbability": 0.72,
      "marketProbability": 0.55,
      "disagreement": 0.17,
      "rawEdge": 0.17,
      "adjustedEdge": 0.136,
      "confidence": 0.8,
      "freshnessStatus": "fresh",
      "status": "divergent",
      "explanation": "Forecast-model probability is above market-implied probability with fresh inputs.",
      "raw": {}
    }
  ]
}
```

Idempotency may be supplied as an `Idempotency-Key` header or body `idempotencyKey`. Completed and stale runs return the previous result; a matching running run returns `409`. If `fetchedAt + staleAfterMinutes` is already in the past, the route still writes usable records but marks the provider run, inferred forecast run, and submitted signal rows as stale.

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
      "rawEdge": 0.17,
      "adjustedEdge": 0.136,
      "confidence": 0.8,
      "freshnessStatus": "fresh",
      "status": "divergent",
      "explanation": "Model precipitation probability is higher than market-implied probability with fresh inputs.",
      "raw": {}
    }
  ]
}
```

## Operational Rules

- Send already-normalized data. Do not send private provider credentials to this app.
- Prefer `POST /api/ingest/run` for new adapters. The older forecast, market, and combined-signal routes remain compatibility surfaces for narrower bot payloads.
- Unknown `citySlug` records are skipped by the forecast and market ingestion routes.
- Service role writes are server-side only.
- Provider debug fetching is intentionally not enabled by default.
- `ENABLE_PROVIDER_FETCH_DEBUG=true` is required before any adapter debug fetch helper will call live providers.
- Store provider response fragments in `raw` only when they are safe and useful for audit/debugging.
