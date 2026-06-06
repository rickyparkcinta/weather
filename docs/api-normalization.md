# API Normalization

The app uses camelCase TypeScript domain types in `src/types/domain.ts` and snake_case Supabase columns in SQL.

## Canonical Ingestion Run

`POST /api/ingest/run` is the preferred product ingestion surface. It accepts a provider-normalized run, validates each record with Zod, logs the run in `provider_run_logs`, writes normalized records into Supabase, and returns the canonical write result.

All ingestion calls require:

```http
Authorization: Bearer INGESTION_SECRET
Content-Type: application/json
Idempotency-Key: optional-stable-run-key
```

The body may also include `idempotencyKey`. If both are present, the body value wins.

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
  "records": []
}
```

The adapter contract used by the route is:

```ts
export type ForecastPointRecord = NormalizedForecastPointRecord;
export type MarketEventRecord = NormalizedMarketEventRecord;
export type SignalOutput = NormalizedSignalRecord;

export type NormalizedRecord =
  | NormalizedForecastRunRecord
  | ForecastPointRecord
  | MarketEventRecord
  | NormalizedMarketTimeseriesRecord
  | SignalOutput;

export type ProviderAdapter = {
  id: string;
  type: "weather" | "market" | "observation";
  version: string;
  fetch: (input: AdapterInput) => Promise<RawProviderPayload>;
  normalize: (payload: RawProviderPayload) => Promise<NormalizedRecord[]>;
};

export type ProviderRunLog = {
  providerId: string;
  providerType: "weather" | "market" | "observation";
  adapterVersion: string;
  idempotencyKey?: string | null;
  fetchedAt: string;
  staleAfter: string;
  status: "running" | "complete" | "stale" | "failed";
  recordsSeen: number;
  recordsInserted: number;
  recordsUpdated: number;
  error?: string | null;
  metadata: JsonRecord;
};
```

The current route uses a submitted-payload adapter so external bots can do provider-specific fetching outside the web request path. Future provider adapters can implement the same interface without changing normalized writes.

### Validation and responses

Validation rules:

- `providerId` and `adapterVersion` are required strings.
- `providerType` must be `weather`, `market`, or `observation`.
- `fetchedAt` must be an ISO datetime when present.
- `staleAfterMinutes` must be a positive integer up to 14 days.
- Forecast records require `citySlug`, `provider`, `model`, `runTime`, `forecastTime`, `variable`, `value`, and `unit`.
- Market records require `provider`, `providerEventId`, and `title`; probability, bid, and ask must be decimals from 0 to 1 when present.
- Signal state should be `aligned`, `watch`, `divergent`, `stale`, `unavailable`, or `high_uncertainty`. Legacy statuses are accepted for compatibility and mapped before display.

Success response:

```json
{
  "data": {
    "idempotent": false,
    "providerRunLogId": "uuid",
    "ingestionRunId": "uuid",
    "status": "complete",
    "result": {
      "recordsSeen": 1,
      "forecastRunsUpserted": 0,
      "forecastPointsUpserted": 1,
      "marketEventsUpserted": 0,
      "marketTimeseriesUpserted": 0,
      "marketLinksUpserted": 0,
      "signalsInserted": 0
    }
  }
}
```

Error response examples:

```json
{ "error": "Invalid ingestion run payload", "details": { "fieldErrors": {} } }
```

```json
{
  "error": "Ingestion run is already in progress for this idempotency key",
  "details": { "providerRunLogId": "uuid" }
}
```

```json
{ "error": "Ingestion run failed", "details": "Supabase error message" }
```

## Forecast Normalization

External weather records become `forecast_points`:

- `city_id`: resolved from `citySlug`
- `forecast_run_id`: created/upserted from provider, model, and run time
- `provider`: `open-meteo`, `windy`, `noaa-gfs`, `ecmwf`, or custom value
- `model`: provider model label such as `gfs`, `ifs`, `aifs`, or `best_match`
- `run_time`: model run time
- `forecast_time`: valid forecast time
- `variable`: normalized variable key, for example `temperature_2m`, `precipitation_probability`, `wind_speed_10m`
- `value` and `unit`: numeric value and explicit unit
- `confidence`: optional model confidence/proxy
- `raw`: source payload subset for audit/debugging

## Market Normalization

External prediction-market records become `market_events`:

- `provider`: `kalshi` or `polymarket`
- `provider_event_id`: stable provider ID or ticker
- `title`, `description`, `category`, `tags`
- `city_ids`: resolved from submitted `citySlugs`
- `country_codes`: ISO country codes where relevant
- `probability`, `bid`, `ask`: normalized decimal probabilities from 0 to 1
- `volume`, `liquidity`, `open_interest`
- `close_time`, `resolution_source`, `url`, `status`
- `raw`: source payload subset

Provider history becomes `market_timeseries` keyed by `market_event_id` and `timestamp`.

## Combined Signal Normalization

Signals compare model-probability proxies with market-implied probabilities:

- `forecast_variable`
- `signal_type`, typically `weather_market_disagreement`
- `model_probability`
- `market_probability`
- `disagreement`
- `raw_edge`: signed probability gap, `model_probability - market_probability`
- `adjusted_edge`: raw probability gap multiplied by confidence
- `confidence`: normalized 0-to-1 confidence score
- `freshness_status`: `fresh`, `aging`, `stale`, or `unknown`
- `status`: `aligned`, `watch`, `divergent`, `stale`, `unavailable`, or `high_uncertainty`
- `explanation`

Signals explain forecast-model disagreement, market-implied probability, data freshness, and uncertainty. They are for research only and are not trading advice.

## Run Status And Idempotency

`provider_run_logs` is the source of truth for provider execution status:

- `running`: the run has been accepted and is being written.
- `complete`: the run finished before `stale_after`.
- `stale`: the run finished, but `fetchedAt + staleAfterMinutes` was already in the past.
- `failed`: fetch, normalization, or write failed.

Repeated requests with the same complete or stale idempotency key return the previous result instead of writing duplicate records. Repeated requests while a matching run is still `running` return `409`.

If `fetchedAt + staleAfterMinutes` is already in the past, the route can still write the normalized records, but `provider_run_logs.status` is `stale` and affected signal rows are degraded to stale freshness/status.

## Canonical Map-Layer Output

`GET /api/map-layers?city=seoul` returns one canonical payload for the UI:

```json
{
  "data": {
    "generatedAt": "2026-06-06T00:20:00Z",
    "city": {
      "id": "uuid",
      "slug": "seoul",
      "name": "Seoul",
      "lat": 37.5665,
      "lon": 126.978
    },
    "layers": {
      "forecast": { "type": "FeatureCollection", "features": [] },
      "markets": { "type": "FeatureCollection", "features": [] },
      "signals": { "type": "FeatureCollection", "features": [] }
    },
    "summary": {
      "forecastPoints": 0,
      "markets": 0,
      "signals": 0
    }
  },
  "demoMode": false
}
```

Forecast features expose provider, model, variable, value, unit, confidence, freshness, forecast time, and run time. Market features expose provider, provider event ID, probability, bid, ask, volume, liquidity, status, and freshness. Signal features expose model probability, market probability, disagreement, raw probability gap, confidence-adjusted gap, confidence, freshness, state, and explanation.
