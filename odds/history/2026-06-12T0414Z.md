# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-12 04:14:16
- HKT: 2026-06-12 12:14:16
- Scheduled invocation: 2026-06-12 12:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket Jun 12 and Jun 13 highest-temperature markets: NYC/LaGuardia KLGA, Chicago/O'Hare KORD, Houston/Hobby KHOU, Atlanta/KATL, Miami/KMIA, London City Airport/EGLC, and Hong Kong Observatory.
- Kalshi Jun 12 daily high-temperature markets for NYC/Central Park and Chicago/Midway as cross-market checks.
- Existing open paper exposure from Jun 11 and Jun 12 runs.

## Sources Used

- Polymarket high-temperature board: https://polymarket.com/weather/high-temperature
- Polymarket London Jun 13 event: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket Chicago Jun 13 event: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket Houston Jun 13 event: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket NYC Jun 13 event: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket London Jun 12 event: https://polymarket.com/event/highest-temperature-in-london-on-june-12-2026
- Polymarket Hong Kong Jun 12 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-12-2026
- Kalshi NYC Jun 12 daily high market: https://kalshi.com/markets/kxhighny/highest-temperature-in-nyc/kxhighny-26jun12
- Kalshi Chicago Jun 12 daily high market: https://kalshi.com/markets/kxhighchi/highest-temperature-in-chicago/kxhighchi-26jun12
- NWS station forecasts for KLGA, KNYC, KORD, KMDW, KHOU, KATL, and KMIA.
- Met Office London City Airport and HKO text forecasts/readings.

## Top Edges

### 1. Kalshi NYC/Central Park Jun 12 94-95F YES

- Current market: 94-95F displayed at 25%; Yes price 28c.
- Implied probability: 28%.
- Estimated fair value: 36%-46%.
- Estimated edge: +8 to +18 percentage points.
- Confidence: low-to-medium-low.
- Key reasoning: NWS Central Park/Manhattan forecast is high near 95F with a Heat Advisory, while Kalshi still makes 92-93F the leader near 49%.
- Liquidity/practicality notes: station is Central Park, not KLGA; tiny paper sizing only.

### 2. Polymarket London/EGLC Jun 13 23C YES

- Current market: 25c / 25%.
- Implied probability: 25%.
- Estimated fair value: 32%-44%.
- Estimated edge: +7 to +19 percentage points.
- Confidence: low-to-medium-low.
- Key reasoning: Met Office Saturday text max is 23C while Polymarket still leads with 22C at 38%.
- Liquidity/practicality notes: event volume about $18.9K; exact-Celsius and Wunderground rounding risk remain material.

### 3. Polymarket Chicago/KORD Jun 13 84-85F YES

- Current market: buy Yes 37c; displayed 33%.
- Implied probability: 37%.
- Estimated fair value: 42%-54%.
- Estimated edge: +5 to +17 percentage points.
- Confidence: low-to-medium-low.
- Key reasoning: NWS O'Hare forecast remains high near 84F.
- Liquidity/practicality notes: already represented by PT-20260612-122 at 36c, so no duplicate.

### 4. Polymarket Houston/KHOU Jun 13 92-93F YES

- Current market: buy Yes 35c; displayed 32%.
- Implied probability: 35%.
- Estimated fair value: 39%-49%.
- Estimated edge: +4 to +14 percentage points.
- Confidence: low.
- Key reasoning: NWS Hobby high near 93F supports the bucket, but visible depth is very thin.
- Liquidity/practicality notes: watch-only.

## Recommended Paper Trades

- PT-20260612-123: Kalshi NYC/Central Park Jun 12 94-95F YES, $5 simulated notional at 28c. Confidence low-to-medium-low. Invalidation: Central Park caps at 92-93F, storms/clouds reduce heating, or final CLI differs from point forecast.
- PT-20260612-124: Polymarket London/EGLC Jun 13 23C YES, $5 simulated notional at 25c. Confidence low-to-medium-low. Invalidation: EGLC peaks at 22C, Wunderground whole-degree treatment differs, or public forecast overstates airport high.

## Risks and Invalidation Factors

- Exact station buckets are one-degree fragile.
- Kalshi and Polymarket station rules differ, especially for New York and Chicago.
- Wunderground and NWS settlement sources can diverge from public point forecasts.
- Thin forward-day Polymarket depth can make displayed edges less practical than they look.

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T0414Z.md`.
- Created `alerts/2026-06-12T0414Z.md`.
- Created `data/market_snapshots/2026-06-12T0414Z.json`.
- Created `paper_trading/entries/PT-20260612-123.md` and `paper_trading/entries/PT-20260612-124.md`.
- Created `paper_trading/ledger_appends/2026-06-12T0414Z.csv`.
- Created `paper_trading/maintenance/2026-06-12T0414Z.md`.
- Updated rolling paper-trading log, summaries, watchlist, edge notes, and repo working notes.
