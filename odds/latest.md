# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 16:07:31
- HKT: 2026-06-16 00:07:31
- Scheduled invocation: 2026-06-16 00:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Atlanta/KATL Jun 16, Hong Kong/HKO Jun 16 and Jun 17, Chicago/KORD Jun 16, Houston/KHOU Jun 16, and Dallas/KDAL Jun 16 highest-temperature buckets.
- Maintenance checks on open same-day U.S. and HKO weather positions.
- Official cross-checks: NWS point forecasts/current conditions for KATL, KHOU, KORD, and KDAL; HKO 9-day forecast and regional readings.
- Quote-quality note: public Polymarket pages can be rounded, stale, or inconsistent across surfaces. This run favors direct event-page data and sizes paper trades conservatively.

## Top Edges

### 1. Polymarket Atlanta/KATL Jun 16 80-81F YES

- Current price: 80-81F displayed 5% / Buy Yes 5c. Nearby buckets: 76-77F 34% / Buy Yes 35c, 74-75F 33% / Buy Yes 34c, and 78-79F 10% / Buy Yes 11c.
- Implied probability: about 5%.
- Estimated fair value: 24%-36%.
- Estimated edge: roughly +19 to +31 percentage points before exact-bucket and quote-quality haircuts.
- Confidence: low-to-medium-low.
- Classification: strongest addable paper-only edge.
- Key reasoning: NWS KATL keeps Tuesday's high near 80F with mostly cloudy conditions and 50% shower/thunderstorm risk. The market still prices the NWS-centered 80-81F bucket like a tail behind 74-77F.
- Liquidity/practicality notes: target bucket volume is about $1.7K. This is a tiny add-on to PT-20260615-168, not a broad build, because rain timing can still cap KATL at 76-79F and the market is new.

### 2. Polymarket Hong Kong/HKO Jun 16 29C YES

- Current price: 29C displayed 32% / Buy Yes 33c. Nearby buckets: 28C Buy Yes 30c, 27C Buy Yes 23c, and 30C Buy Yes 13c.
- Implied probability: about 33% on the buy quote.
- Estimated fair value: 40%-52%.
- Estimated edge: roughly +7 to +19 percentage points.
- Confidence: medium-low.
- Classification: represented moderate edge, no duplicate.
- Key reasoning: HKO's 00:00 HKT forecast for Jun 16 remains capped at 29C with cloudy weather, occasional heavy showers, and squally thunderstorms. The regional table at 00:00 HKT still showed the Observatory at 25.9C and the prior-day max at 29.9C, reinforcing the rain-cap regime.
- Liquidity/practicality notes: event volume is about $31.5K and target-bucket volume is about $3.1K. Maintain PT-20260615-169 and PT-20260615-170 only; current price is no cheaper than the 30c add-on.

### 3. Polymarket Chicago/KORD Jun 16 74-75F YES

- Current price: 74-75F displayed 33% / Buy Yes 33c. Nearby buckets: 72-73F Buy Yes 33c, 70-71F Buy Yes 12c, and 76-77F Buy Yes 11c.
- Implied probability: about 33%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: low-to-medium-low.
- Classification: watch-only moderate edge.
- Key reasoning: NWS O'Hare forecasts Tuesday high near 75F with showers/thunderstorms likely and 80% precipitation chance. That centers 74-75F, but 72-73F remains nearly co-live if clouds or rain arrive early.
- Liquidity/practicality notes: target-bucket volume is only about $321 and the adjacent 72-73F bucket is priced almost identically. No fresh paper add.

### 4. Polymarket Hong Kong/HKO Jun 17 30C YES

- Current price: 30C displayed 14% / Buy Yes 15c. Nearby buckets: 28C Buy Yes 37c, 29C Buy Yes 24c, and 27C Buy Yes 19c.
- Implied probability: about 15%.
- Estimated fair value: 18%-28%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: low.
- Classification: weak-to-moderate watch-only edge.
- Key reasoning: HKO's day-two forecast for Jun 17 is 26-30C with occasional showers and a few squally thunderstorms. The forecast maximum gives 30C some support, but the unsettled regime keeps 28C/29C highly live.
- Liquidity/practicality notes: target-bucket volume is only about $682. No paper add until the day-two forecast tightens or the price falls materially.

### 5. Polymarket Houston/KHOU Jun 16 82-83F YES

- Current price: 82-83F displayed 37% / Buy Yes 38c; 80-81F leads at 38% / Buy Yes 39c.
- Implied probability: about 38%.
- Estimated fair value: 36%-48%.
- Estimated edge: near fair to modest positive.
- Confidence: medium-low.
- Classification: watch-only / near fair.
- Key reasoning: NWS Houston Hobby forecasts Tuesday high near 82F with 90% shower/thunderstorm probability and possible 2-3 inch rainfall. The market is already centered on the correct 80-83F cluster.
- Liquidity/practicality notes: no fresh paper entry.

## Recommended Paper Trades

Open one tiny paper-only add-on:

- Trade ID: PT-20260615-171
- Stance: BUY_YES on Polymarket Atlanta/KATL Jun 16 highest temperature 80-81F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 5c.
- Thesis: The direct Atlanta event page still prices 80-81F at 5c while NWS KATL's point forecast remains high near 80F. The price gap is large enough for a tiny simulated add-on despite exact-bucket and storm-timing risk.
- Confidence: low-to-medium-low.
- Invalidation risks: KATL settles 76-79F because showers/clouds cap heating; stronger clearing pushes 82F or higher; NWS cools Tuesday's forecast; the public Polymarket quote is stale or shallow.

Maintenance actions:

- Maintain PT-20260615-168 and the new PT-20260615-171 on Atlanta/KATL Jun 16 80-81F; no further Atlanta duplicate unless the quote remains 5c after a fresher forecast update or falls lower.
- Maintain PT-20260615-169 and PT-20260615-170 on HKO Jun 16 29C; no duplicate at 33c.
- Keep Chicago/KORD Jun 16 74-75F and HKO Jun 17 30C watch-only.
- Keep Houston/KHOU Jun 16 and Dallas/KDAL Jun 16 near-fair/watch-only.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- Polymarket public pages may be stale, rounded, or inconsistent across event and overview surfaces.
- U.S. station markets resolve against Wunderground histories, not directly against NWS point forecasts.
- HKO markets resolve to one-decimal Celsius daily maxima, so 28.9C, 29.9C, and 30.0C are materially different outcomes.
- Rain and thunderstorm timing is the main swing factor for Atlanta, Houston, Chicago, and Hong Kong.

## Sources Used

- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026/highest-temperature-in-atlanta-on-june-16-2026-76-77f
- NWS KATL forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Polymarket Hong Kong Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- Polymarket Hong Kong Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO regional readings: https://www.weather.gov.hk/textonly/v2/forecast/text_readings_v2_e.htm
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026/highest-temperature-in-chicago-on-june-16-2026-72-73f
- NWS KORD forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- NWS KHOU forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=29.6375&lon=-95.2825
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- NWS KDAL forecast/current conditions: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=32.8929&lg=english&lon=-96.8641

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T1607Z.md`.
- Created `alerts/2026-06-15T1607Z.md`.
- Created `data/market_snapshots/2026-06-15T1607Z.json`.
- Created `paper_trading/entries/PT-20260615-171.md`.
- Created `paper_trading/ledger_appends/2026-06-15T1607Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T1607Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in durable memory.
- Mirrored the latest snapshot, timestamped history, alert, JSON snapshot, paper-trading entry, ledger append, and maintenance note to GitHub connector target `rickyparkcinta/weather`.
- No real trades or betting actions were executed.