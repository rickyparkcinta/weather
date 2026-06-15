# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 17:11:47
- HKT: 2026-06-16 01:11:48
- Scheduled invocation: 2026-06-16 01:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Atlanta/KATL Jun 16, Hong Kong/HKO Jun 16 and Jun 17, Chicago/KORD Jun 16, Austin/KAUS Jun 16, Houston/KHOU Jun 16, and Dallas/KDAL Jun 16 highest-temperature buckets.
- Maintenance checks on open same-day U.S. and HKO weather paper positions.
- Official cross-checks: NWS point forecasts/current conditions for KATL, KORD, KAUS, KHOU, and KDAL; HKO 9-day forecast and regional readings.
- Quote-quality note: public Polymarket pages can be rounded, stale, or inconsistent across surfaces. This run favors direct event-page/search-result data and sizes paper trades conservatively.

## Top Edges

### 1. Polymarket Atlanta/KATL Jun 16 80-81F YES

- Current price: 80-81F displayed 3% / Buy Yes 3.5c. Nearby buckets: 74-75F 32% / Buy Yes 33c, 76-77F 32% / Buy Yes 33c, 78-79F 12% / Buy Yes 13c, and 72-73F 11.6% / Buy Yes 14c.
- Implied probability: about 3.5%.
- Estimated fair value: 20%-32%.
- Estimated edge: roughly +16.5 to +28.5 percentage points before exact-bucket and quote-quality haircuts.
- Confidence: low-to-medium-low.
- Classification: strongest addable paper-only edge.
- Key reasoning: NWS KATL still keeps Tuesday's high near 80F with showers/thunderstorms likely. The market has moved further away from the official point forecast, pricing 80-81F as a very small tail while clustering around 74-77F.
- Liquidity/practicality notes: target bucket volume is about $1.8K. This is a tiny add-on to PT-20260615-168 and PT-20260615-171, not a broad build, because the market's public summary now leans mid-70s and rain timing can still cap KATL below 80F.

### 2. Polymarket Hong Kong/HKO Jun 16 29C YES

- Current price: 29C displayed 33% / Buy Yes 34c. Nearby buckets: 28C Buy Yes 29c, 27C Buy Yes 24c, and 30C Buy Yes 12c.
- Implied probability: about 34% on the buy quote.
- Estimated fair value: 40%-52%.
- Estimated edge: roughly +6 to +18 percentage points.
- Confidence: medium-low.
- Classification: represented moderate edge, no duplicate.
- Key reasoning: HKO's 00:00 HKT forecast for Jun 16 remains capped at 29C with cloudy weather, occasional heavy showers, and squally thunderstorms. The 01:00 HKT regional table shows the Observatory still in a cool rain regime near 26C.
- Liquidity/practicality notes: event volume is about $31.7K and target-bucket volume is about $3.1K. Maintain PT-20260615-169 and PT-20260615-170 only; current price is not cheaper than the 30c add-on.

### 3. Polymarket Austin/KAUS Jun 16 84-85F YES

- Current price: 84-85F displayed 27% / Buy Yes 28c. Nearby buckets: 86-87F 37% / Buy Yes 39c, 88-89F 19% / Buy Yes 20c, and 82-83F 8% / Buy Yes 9c.
- Implied probability: about 28%.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: watch-only moderate edge.
- Key reasoning: NWS Austin-Bergstrom guidance is near 85F with showers and thunderstorms likely, making 84-85F meaningfully live even though the market still favors 86-87F.
- Liquidity/practicality notes: target-bucket volume is only about $270 and the paper book has recent Austin concentration from Jun 15 weather trades. No fresh paper add.

### 4. Polymarket Chicago/KORD Jun 16 74-75F YES

- Current price: 74-75F displayed 33% / Buy Yes 33c. Nearby buckets: 72-73F Buy Yes 33c, 76-77F Buy Yes 17c, and 70-71F Buy Yes 12c.
- Implied probability: about 33%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: low-to-medium-low.
- Classification: watch-only moderate edge.
- Key reasoning: NWS O'Hare forecasts Tuesday high near 75F with showers/thunderstorms likely. That centers 74-75F, but 72-73F remains nearly co-live if clouds or rain arrive early.
- Liquidity/practicality notes: target-bucket volume is only about $321 and the adjacent 72-73F bucket is priced almost identically. No fresh paper add.

### 5. Polymarket Hong Kong/HKO Jun 17 30C YES

- Current price: 30C displayed 14% / Buy Yes 15c. Nearby buckets: 28C Buy Yes 37c, 29C Buy Yes 25c, and 27C Buy Yes 19c.
- Implied probability: about 15%.
- Estimated fair value: 18%-28%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: low.
- Classification: weak-to-moderate watch-only edge.
- Key reasoning: HKO's day-two forecast for Jun 17 is 26-30C with occasional showers and a few squally thunderstorms. The forecast maximum gives 30C some support, but the unsettled regime keeps 28C/29C highly live.
- Liquidity/practicality notes: target-bucket volume is only about $700. No paper add until the day-two forecast tightens or the price falls materially.

## Near-Fair / No-Add Markets

- Houston/KHOU Jun 16: public quotes were inconsistent around the 80-83F cluster. NWS Houston Hobby still points near 82F with heavy rain/thunderstorm risk, and the market is already centered in the same cluster, so no edge clears the add threshold.
- Dallas/KDAL Jun 16: 90-91F is roughly 37%-38% against a NWS high near 91F. Fair value is about 38%-48%, leaving a modest but not strong edge after exact-bucket risk.

## Recommended Paper Trades

Open one tiny paper-only add-on:

- Trade ID: PT-20260615-172
- Stance: BUY_YES on Polymarket Atlanta/KATL Jun 16 highest temperature 80-81F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 3.5c.
- Thesis: The direct Atlanta market now prices 80-81F at only 3.5c while NWS KATL's point forecast remains high near 80F. The discount is large enough for a tiny simulated add-on despite duplicate exposure, exact-bucket risk, and storm-timing risk.
- Confidence: low-to-medium-low.
- Invalidation risks: KATL settles 74-79F because showers/clouds cap heating; stronger clearing pushes 82F or higher; NWS cools Tuesday's forecast; the public Polymarket quote is stale or shallow.

Maintenance actions:

- Maintain PT-20260615-168, PT-20260615-171, and the new PT-20260615-172 on Atlanta/KATL Jun 16 80-81F; do not add again unless a fresher forecast keeps 80F live and the quote remains extremely discounted or falls further.
- Maintain PT-20260615-169 and PT-20260615-170 on HKO Jun 16 29C; no duplicate at 34c.
- Keep Austin/KAUS Jun 16 84-85F, Chicago/KORD Jun 16 74-75F, and HKO Jun 17 30C watch-only.
- Keep Houston/KHOU Jun 16 and Dallas/KDAL Jun 16 near-fair/watch-only.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- Polymarket public pages may be stale, rounded, or inconsistent across event and overview surfaces.
- U.S. station markets resolve against Wunderground histories, not directly against NWS point forecasts.
- HKO markets resolve to one-decimal Celsius daily maxima, so 28.9C, 29.9C, and 30.0C are materially different outcomes.
- Rain and thunderstorm timing is the main swing factor for Atlanta, Austin, Houston, Chicago, and Hong Kong.

## Sources Used

- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026/highest-temperature-in-atlanta-on-june-16-2026-80-81f
- NWS KATL forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Polymarket Hong Kong Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- Polymarket Hong Kong Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO regional readings: https://www.weather.gov.hk/textonly/v2/forecast/text_readings_v2_e.htm
- Polymarket Austin Jun 16: https://polymarket.com/event/highest-temperature-in-austin-on-june-16-2026
- NWS KAUS forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=30.1945&lon=-97.6699
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026/highest-temperature-in-chicago-on-june-16-2026-74-75f
- NWS KORD forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- NWS KHOU forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=29.6375&lon=-95.2825
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- NWS KDAL forecast/current conditions: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=32.8929&lg=english&lon=-96.8641

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T1711Z.md`.
- Created `alerts/2026-06-15T1711Z.md`.
- Created `data/market_snapshots/2026-06-15T1711Z.json`.
- Created `paper_trading/entries/PT-20260615-172.md`.
- Created `paper_trading/ledger_appends/2026-06-15T1711Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T1711Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in durable memory.
- GitHub connector mirror target: `rickyparkcinta/weather`.
- No real trades or betting actions were executed.
