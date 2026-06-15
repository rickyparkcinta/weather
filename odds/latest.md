# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 09:08:49
- HKT: 2026-06-15 17:08:49
- Scheduled invocation: 2026-06-15 17:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Robinhood weather threshold markets: Houston/KHOU, Austin/KAUS, Atlanta/KATL, Dallas/KDFW, Chicago/KMDW for Jun 15 daily high checks.
- Polymarket weather exact-bucket markets: Austin/KAUS, Atlanta/KATL, Chicago/KORD, Hong Kong/HKO, plus quote-limited checks for Houston/KHOU and Dallas/KDAL.
- Official weather sources: NWS point forecasts/current conditions for KHOU, KAUS, KATL, KDAL/KDFW context, and HKO regional readings.

## Top Edges

### 1. Robinhood Houston/KHOU Jun 15 Daily High Greater Than 85F YES

- Current price: 37c. Nearby thresholds: >84F 60c, >86F 34c, >87F 14c.
- Implied probability: 37%.
- Estimated fair value: 43%-53%.
- Estimated edge: +6 to +16 percentage points before quote-quality and storm-timing haircuts.
- Confidence: low-to-medium-low.
- Classification: moderate addable paper edge.
- Key reasoning: NWS Houston Hobby centers Monday near 86F with showers/thunderstorms likely. The threshold expression is cleaner than another exact 86-87F bucket because any 86F+ final high wins.
- Action: open PT-20260615-167, $5 simulated BUY_YES at 37c.

### 2. Polymarket Austin/KAUS Jun 15 82-83F YES

- Current price: public Polymarket context around 36%-40%; Robinhood thresholds still center around 82-83F.
- Estimated fair value: 44%-56%.
- Estimated edge: +4 to +20 points depending on public surface.
- Confidence: low-to-medium-low.
- Classification: moderate watch/maintenance edge.
- Action: no fresh add because Austin paper exposure already spans 80-81F and 84-85F.

### 3. Atlanta/KATL Jun 15 84-85F YES

- Current price: Polymarket around 45%.
- Estimated fair value: 42%-50%.
- Confidence: medium-low.
- Classification: represented near-fair maintenance.
- Action: maintain PT-20260614-157 only.

### 4. Chicago/KORD Jun 15 76-77F YES

- Current price: public Polymarket context around 35%-36%.
- Estimated fair value: 36%-46%.
- Confidence: low-to-medium-low.
- Classification: represented weak-to-moderate edge.
- Action: maintain PT-20260615-163 only.

### 5. Hong Kong/HKO Jun 15 29C YES / 30C NO

- Current price: mostly converged near 99%.
- Estimated fair value: 98.5%-99.7%.
- Confidence: medium-low for direction; low for incremental entry.
- Classification: represented edge, mostly converged.
- Action: maintain PT-20260614-155 and PT-20260615-164; no high-price add.

### 6. Dallas/KDAL Jun 15 Cluster

- Current price: direct KDAL exact-bucket refresh was quote-limited; prior context had 84-85F around 35c and 82-83F around 30c.
- Estimated fair value: 84-85F roughly 36%-48%.
- Confidence: low.
- Classification: represented maintenance only.
- Action: maintain PT-20260614-160 and PT-20260614-161 only.

## Recommended Paper Trades

- Open PT-20260615-167: BUY_YES on Robinhood Houston/KHOU Jun 15 daily high greater than 85F at 37c.
- Simulated size: $5 notional.
- Thesis: NWS centers KHOU near 86F; threshold wins on any 86F+ final high.
- Confidence: low-to-medium-low.
- Invalidation risks: storms cap KHOU at 84-85F; Weather Underground final history differs from NWS current evidence; public quote is stale or shallow.

## Risks and Invalidation Factors

- Public market pages can lag executable order books.
- Weather contracts resolve on specified station/source histories, not simply NWS forecast text.
- Houston, Austin, and Dallas are storm-timing markets; convection can cap highs below forecast, while clearing can push warmer.
- HKO remains a one-tenth-degree boundary setup: a 30.0C print or revision invalidates 29C YES / 30C NO.
- Dallas/KDAL was quote-limited; KDFW threshold prices were used only as broad cross-checks.

## Sources Used

- Robinhood Houston Jun 15 threshold market: https://robinhood.com/us/en/prediction-markets/climate/events/houston-daily-temperature-high-june-15-2026-jun-15-2026/
- NWS Houston Hobby: https://forecast.weather.gov/zipcity.php?inputstring=KHOU
- Polymarket Austin Jun 15: https://polymarket.com/event/highest-temperature-in-austin-on-june-15-2026
- NWS Austin-Bergstrom: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- Polymarket Atlanta Jun 15: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-15-2026
- NWS KATL: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Polymarket Chicago Jun 15: https://polymarket.com/event/highest-temperature-in-chicago-on-june-15-2026
- Polymarket Hong Kong Jun 15: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-15-2026
- HKO regional readings: https://www.weather.gov.hk/textonly/v2/forecast/text_readings_v2_e.htm
- Robinhood Dallas Jun 15 KDFW cross-check: https://robinhood.com/us/en/prediction-markets/climate/events/dallas-daily-temperature-high-june-15-2026-jun-15-2026/

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T0908Z.md`.
- Created `alerts/2026-06-15T0908Z.md`.
- Created `data/market_snapshots/2026-06-15T0908Z.json`.
- Created `paper_trading/entries/PT-20260615-167.md`.
- Created `paper_trading/ledger_appends/2026-06-15T0908Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T0908Z.md`.
- No real trades or betting actions were executed.
