# API Normalization

The app uses camelCase TypeScript domain types in `src/types/domain.ts` and snake_case Supabase columns in SQL.

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
- `status`: `aligned`, `market_above_model`, `model_above_market`, or `insufficient_data`
- `explanation`

Signals are informational only and must not recommend trades.
