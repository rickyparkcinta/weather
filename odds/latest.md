# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-12 06:13:18
- HKT: 2026-06-12 14:13:18
- Scheduled invocation: 2026-06-12 14:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket Jun 12 and Jun 13 highest-temperature markets: Hong Kong Observatory, London City Airport/EGLC, Chicago/O'Hare KORD, Houston/Hobby KHOU, NYC/LaGuardia KLGA, Atlanta/KATL, and Miami/KMIA.
- Kalshi Jun 12 daily high-temperature markets for NYC/Central Park and Chicago/Midway.
- Existing open paper exposure from Jun 11 and Jun 12 runs.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 13 84-85F YES

- Current market: 84-85F displayed 35%; Buy Yes 37c.
- Implied probability: 37%.
- Estimated fair value: 45%-57%.
- Estimated edge: +8 to +20 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare-area forecast shows Saturday sunny with a high near 85F, putting 84-85F near the forecast center while the market still leaves meaningful adjacent-bucket probability.
- Liquidity/practicality: young/thin Polymarket bucket; price is above PT-20260612-122's 36c entry.
- Action: maintain PT-20260612-122 only.

### 2. Polymarket London/EGLC Jun 13 23C YES

- Current market: 23C displayed 23%; Buy Yes 23c.
- Implied probability: 23%.
- Estimated fair value: 31%-43%.
- Estimated edge: +8 to +20 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport still lists Saturday maximum daytime temperature at 23C while Polymarket has 22C as the leader.
- Liquidity/practicality: exact-Celsius settlement risk and existing PT-20260612-124 block a duplicate.
- Action: maintain PT-20260612-124 only.

### 3. Kalshi NYC/Central Park Jun 12 94-95F YES

- Current market: 94-95F chance 27%; Yes 28c.
- Implied probability: 28%.
- Estimated fair value: 35%-45%.
- Estimated edge: +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS Central Park/Manhattan continues to show Heat Advisory context and a Friday high near 95F.
- Liquidity/practicality: already represented by PT-20260612-123 at the same 28c entry price.
- Action: maintain PT-20260612-123 only.

### 4. Polymarket Houston/KHOU Jun 13 92-93F YES

- Current market: 92-93F displayed 30%; Buy Yes 35c.
- Implied probability: 35%.
- Estimated fair value: 42%-52%.
- Estimated edge: +7 to +17 percentage points.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Hobby forecast shows Saturday mostly sunny with a high near 93F, but the Polymarket book is very thin and wide.
- Liquidity/practicality: only watch; no paper entry.

### 5. Polymarket NYC/KLGA Jun 13 88-89F YES

- Current market: 88-89F displayed 36%; Buy Yes 39c.
- Implied probability: 39%.
- Estimated fair value: 40%-48%.
- Estimated edge: +1 to +9 percentage points.
- Confidence: low.
- Classification: weak watch-only.
- Key reasoning: NWS LaGuardia forecast shows Saturday sunny with a high near 88F, but the buy price is already close to fair after spread.
- Action: watch only.

## Recommended Paper Trades

No new paper-only position is recommended this run. The strongest current opportunities are already represented in the paper book or are too thin/close-to-fair after spread.

## Paper-Book Maintenance

- PT-20260612-122: Polymarket Chicago/KORD Jun 13 84-85F YES; open, still positive but no duplicate above entry.
- PT-20260612-124: Polymarket London/EGLC Jun 13 23C YES; open, still positive but source/settlement-risk capped.
- PT-20260612-123: Kalshi NYC/Central Park Jun 12 94-95F YES; open, positive but no duplicate at same entry.
- PT-20260612-125 and PT-20260611-117: HKO Jun 12 29C YES positions are now open/adverse-watch after HKO's official live table showed HK Observatory at 30.4C with 30.4C as the maximum since midnight.

## Risks and Invalidation Factors

- Exact weather buckets can flip on a one-degree or one-tenth-degree station move.
- HKO 29C is now adverse because the Observatory has already exceeded 30.0C in provisional readings.
- Kalshi and Polymarket use different station definitions for New York and Chicago.
- Wunderground settlement can differ from nearby NWS point forecasts and preliminary observations.
- Young Polymarket Jun 13 boards are thin; displayed prices can move sharply on small orders.

## Sources Used

- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket Chicago Jun 13: https://polymarket.com/es/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket Houston Jun 13: https://polymarket.com/zh/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Hong Kong Jun 12: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-12-2026
- Kalshi NYC Jun 12: https://kalshi.com/markets/kxhighny/highest-temperature-in-nyc/kxhighny-26jun12
- NWS Central Park/Manhattan: https://forecast.weather.gov/MapClick.php?lat=40.76514834741937&lon=-73.9849843124752
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Chicago O'Hare/KORD: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO regional readings: https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T0613Z.md`.
- Created `alerts/2026-06-12T0613Z.md`.
- Created `data/market_snapshots/2026-06-12T0613Z.json`.
- Created `paper_trading/maintenance/2026-06-12T0613Z.md`.
- Updated rolling paper-trading log, summaries, watchlist, edge notes, repo working notes, and HKO paper-entry maintenance notes in the durable workspace record.
- No new paper position or ledger append was created.
