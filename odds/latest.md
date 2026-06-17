# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-17 14:18:33
- HKT: 2026-06-17 22:18:33
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Chicago/KORD Jun 17; Los Angeles/KLAX Jun 17; Dallas/KDAL Jun 17; Austin/KAUS Jun 17; Houston/KHOU Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; Hong Kong/HKO Jun 18 and Jun 19.
- Cross-market check: Robinhood Dallas/Fort Worth Jun 17 temperature thresholds.
- Maintenance focus: Chicago 68-69F; HKO Jun 18 29C; Dallas 94-95F; Austin 92-93F; Los Angeles 68-69F/70-71F; Houston 88-89F; Atlanta 84-85F; Miami 92-93F.
- Source-quality note: direct Polymarket API and event-page fetches were blocked from the workspace. Polymarket prices below use the latest reliable 13:08 UTC internal snapshot, with one Dallas cross-market check from Robinhood search context. Confidence is haircut because the prices are not a fresh live order book.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 18 29C YES
- Current price: last verified Polymarket quote about 27%; 28C still appeared to lead around 37%-40%.
- Implied probability: about 27%.
- Estimated fair value: 35%-45%.
- Estimated edge: roughly +8 to +18 percentage points.
- Confidence: medium-low.
- Classification: moderate represented edge; no fresh add.
- Key reasoning: HKO's official 9-day forecast keeps Jun 18 at 26-29C with showers and a few squally thunderstorms. That keeps 29C live as the upper official bucket, but the wet/cloudy setup keeps 28C a very live cap path.
- Liquidity/practicality notes: Maintain PT-20260617-197 from 30c. No duplicate because the price is stale, 28C still leads, and HKO one-decimal settlement creates sharp 28.9C/29.0C boundary risk.

### 2. Polymarket Chicago/KORD Jun 17 68-69F YES
- Current price: last verified Polymarket quote about 27%; 70-71F previously appeared to lead around 38%.
- Implied probability: about 27%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +9 to +19 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge; no fresh add.
- Key reasoning: NWS O'Hare still supports a high near 68F with showers, possible severe thunderstorms, and heavy rainfall. That is centered on the target bucket, but the exact timing of rain/storms can still miss to 66-67F or 70-71F.
- Liquidity/practicality notes: Maintain PT-20260616-190 from 26c and PT-20260617-196 from 21c. No duplicate because the latest confirmed price is worse than the 21c add-on, only modestly different from the first entry, and not live-confirmed.

### 3. Polymarket Dallas/KDAL Jun 17 94-95F YES
- Current price: last verified Polymarket quote about 32%; Robinhood KDFW threshold search context implies a rough 94-95F band around 28%, but that is a different station/source.
- Implied probability: about 32% on the carried-forward Polymarket quote.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +6 to +16 percentage points versus the carried-forward Polymarket quote.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge; no fresh add.
- Key reasoning: NWS Love Field forecasts high near 94F with mostly sunny conditions, which supports the 94-95F bucket. The key risk is the 93F/94F boundary, plus source mismatch between KDAL, KDFW threshold context, and Wunderground settlement.
- Liquidity/practicality notes: Maintain PT-20260616-185 from 25c and PT-20260617-194 from 20c. No add because the latest Polymarket price is above both paper entries and not freshly verified.

### 4. Polymarket Austin/KAUS Jun 17 92-93F YES
- Current price: last verified Polymarket quote about 41%; 92-93F was the market leader.
- Implied probability: about 41%.
- Estimated fair value: 45%-55%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented weak-to-moderate edge; no fresh add.
- Key reasoning: NWS Austin-Bergstrom forecasts high near 92F with clouds decreasing into sun, centering the 92-93F bucket. Morning cloud timing and exact-degree risk keep 90-91F live enough to cap confidence.
- Liquidity/practicality notes: Maintain PT-20260617-193 from 40c. No duplicate above entry without fresh price confirmation or a stronger station read.

### 5. Polymarket Los Angeles/KLAX Jun 17 70-71F YES / 68-69F hedge cluster
- Current price: quote-conflicted and stale; latest reliable 70-71F reference was around the high-30s from the prior scan cycle, while 68-69F/70-71F public snippets have moved materially.
- Implied probability: uncertain.
- Estimated fair value: roughly 38%-48% for 70-71F and 25%-35% for 68-69F after the latest official high-near-70F setup.
- Estimated edge: not clean enough to rank as a fresh add.
- Confidence: low.
- Classification: represented/watch-only cluster.
- Key reasoning: NWS KLAX forecasts high near 70F, which keeps the 70-71F hedge live and weakens the original 68-69F thesis. Marine-layer depth and afternoon clearing remain the swing variables.
- Liquidity/practicality notes: Maintain PT-20260617-192 and PT-20260617-195 only. Do not add while target quotes are stale/conflicted.

## Near-Fair / Weakened Monitors
- Houston/KHOU Jun 17 88-89F: watch-only. Last verified around 41% versus fair 34%-44% after rain-risk haircut; NWS high near 89F is supportive, but heavy rain/flood hazards can cap the station.
- Atlanta/KATL Jun 17 84-85F: near fair. NWS high near 85F with a late shower/thunderstorm chance looks mostly priced around the mid-40s.
- Miami/KMIA Jun 17 92-93F: near fair. NWS high near 93F, heat-advisory context, and afternoon thunderstorm risk make prior low-60s market context roughly fair.
- HKO Jun 19: watch-only/no edge due thin or wide visible pricing and no clean current quote.

## Recommended Paper Trades
- No new paper-only position opened this run.
- Maintain existing paper positions listed above.
- No real bets, trades, wallet actions, or order execution occurred.

## Risks and Invalidation Factors
- Exact weather buckets can lose by one degree even when the broad forecast thesis is right.
- U.S. Polymarket weather markets resolve to Wunderground station history, not directly to NWS point forecasts.
- HKO Celsius markets resolve to one decimal place, creating sharp 28.9C/29.0C and 29.9C/30.0C boundary risk.
- Direct Polymarket API and event-page access was blocked this run; stale market prices require a material confidence haircut.
- Thunderstorm and rain timing is the main uncertainty for Chicago, Houston, Atlanta, Miami, Austin, and Dallas.
- Los Angeles hinges on marine-layer depth and afternoon clearing.

## Sources Used
- Polymarket Chicago Jun 17: https://polymarket.com/event/highest-temperature-in-chicago-on-june-17-2026
- Polymarket Los Angeles Jun 17: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-17-2026
- Polymarket Dallas Jun 17: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket Houston Jun 17: https://polymarket.com/event/highest-temperature-in-houston-on-june-17-2026
- Polymarket Atlanta Jun 17: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-17-2026
- Polymarket Miami Jun 17: https://polymarket.com/event/highest-temperature-in-miami-on-june-17-2026
- Polymarket HKO Jun 18: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026
- Polymarket HKO Jun 19: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- NWS Chicago/O'Hare forecast and observations: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9 and https://forecast.weather.gov/data/obhistory/KORD.html
- NWS Los Angeles/KLAX forecast and observations: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409 and https://forecast.weather.gov/data/obhistory/KLAX.html
- NWS Dallas/Love Field forecast: https://forecast.weather.gov/MapClick.php?lat=32.858386&lon=-96.861368
- NWS Austin-Bergstrom forecast: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- NWS Houston/Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Atlanta/KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS Miami/KMIA forecast: https://forecast.weather.gov/MapClick.php?lat=25.7933&lon=-80.2906
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-17T1418Z.md, alerts/2026-06-17T1418Z.md, data/market_snapshots/2026-06-17T1418Z.json, and paper_trading/maintenance/2026-06-17T1418Z.md.
- Updated rolling records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- No new simulated paper position was opened; no real trades or betting actions were executed.
