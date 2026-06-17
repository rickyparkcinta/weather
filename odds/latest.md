# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-17 13:08:50
- HKT: 2026-06-17 21:08:50
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Chicago/KORD Jun 17; Los Angeles/KLAX Jun 17; Dallas/KDAL Jun 17; Austin/KAUS Jun 17; Houston/KHOU Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; Hong Kong/HKO Jun 17, Jun 18, and Jun 19.
- Maintenance focus: Chicago 68-69F; HKO Jun 18 29C/30C; Dallas 94-95F; Austin 92-93F; Los Angeles 68-69F/70-71F; Houston 88-89F; Atlanta 84-85F; Miami 92-93F.
- Source-quality note: direct market APIs were blocked from the workspace, so market prices use public Polymarket page/search snippets and the prior 12:14 UTC snapshot as cross-checks. Confidence is reduced where only related-page snippets were available.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 17 68-69F YES
- Current price: 68-69F displayed about 27%; market leader 70-71F about 38%.
- Implied probability: about 27%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge; no fresh add.
- Key reasoning: NWS O'Hare still forecasts a high near 68F with showers, possible severe thunderstorms, and heavy rainfall. KORD was only around 61F at the latest accessible morning observation, so a high in the 68-69F bucket remains plausible despite 70-71F leading the market.
- Liquidity/practicality notes: Maintain PT-20260616-190 from 26c and PT-20260617-196 from 21c. No duplicate because current pricing is worse than the 21c add-on and only slightly worse than the 26c first entry, while storm timing can still miss lower or higher.

### 2. Polymarket Hong Kong/HKO Jun 18 29C YES
- Current price: 29C displayed about 27%; market leader 28C about 37%-40%.
- Implied probability: about 27%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: medium-low.
- Classification: moderate represented edge; no fresh add.
- Key reasoning: HKO's 16:30 HKT 9-day forecast keeps Jun 18 at 26-29C with mainly cloudy weather, showers, and a few squally thunderstorms; the official upper-bound supports 29C. The 28C cap path remains very live because showers are expected to be heavy at first.
- Liquidity/practicality notes: Maintain PT-20260617-197 from 30c. No duplicate on the roughly 3c improvement because the hedge is fresh, 28C still leads, and HKO one-decimal settlement creates sharp 28.9C/29.0C boundary risk.

### 3. Polymarket Dallas/KDAL Jun 17 94-95F YES
- Current price: 94-95F displayed about 32%; market leader 92-93F about 59%.
- Implied probability: about 32%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge; no fresh add.
- Key reasoning: NWS Love Field forecasts a high near 94F with mostly sunny conditions, directly supporting the 94-95F bucket. The market continues to overweight the adjacent cooler 92-93F bucket, but the 93F/94F boundary remains the key risk.
- Liquidity/practicality notes: Maintain PT-20260616-185 from 25c and PT-20260617-194 from 20c. No add because current price is above both paper entries.

### 4. Polymarket Austin/KAUS Jun 17 92-93F YES
- Current price: 92-93F displayed about 41%; next bucket 90-91F about 33%.
- Implied probability: about 41%.
- Estimated fair value: 45%-55%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented weak-to-moderate edge; no fresh add.
- Key reasoning: NWS Austin-Bergstrom forecasts high near 92F with clouds decreasing into sun, which centers the 92-93F bucket. Morning overcast and exact-degree risk keep adjacent 90-91F live.
- Liquidity/practicality notes: Maintain PT-20260617-193 from 40c. No duplicate at a slightly worse current quote.

### 5. Polymarket Houston/KHOU Jun 17 88-89F YES
- Current price: 88-89F displayed about 41%; next bucket 86-87F about 32%.
- Implied probability: about 41%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly -3 to +7 percentage points.
- Confidence: low.
- Classification: weak/watch-only, near fair after rain-risk haircut.
- Key reasoning: NWS Hobby forecasts a high near 89F, but current conditions showed heavy rain/fog and flood hazards. The centered bucket is plausible, yet rainfall timing could cap the station below 88F.
- Liquidity/practicality notes: No paper entry recommended. The edge is not meaningful after weather and quote-quality risk.

## Near-Fair / Weakened Monitors
- Los Angeles/KLAX Jun 17 68-69F and 70-71F: near fair/quote-conflicted. NWS forecasts high near 70F and morning observations were overcast near 62-63F; public snippets showed the 68-69F/70-71F cluster moving materially, but no clean fresh executable quote was available. Maintain PT-20260617-192 and PT-20260617-195 only.
- Atlanta/KATL Jun 17 84-85F: near fair. Polymarket shows 84-85F around the mid-40s and NWS forecasts high near 85F with a late-day shower/thunderstorm chance.
- Miami/KMIA Jun 17 92-93F: near fair. NWS forecasts high near 93F with heat-advisory context and afternoon thunderstorm risk; prior market pricing near the low 60s looked roughly fair.
- HKO Jun 17 28C: late/pending-resolution maintenance only after the market converged near 100%.
- HKO Jun 18 30C: weakened maintenance only; official forecast max is 29C.
- HKO Jun 19 31C: watch-only/no edge due thin/wide visible pricing and no clean current quote.

## Recommended Paper Trades
- No new paper-only position opened this run.
- Maintain existing paper positions listed above.
- No real bets, trades, wallet actions, or order execution occurred.

## Risks and Invalidation Factors
- Exact weather buckets can lose by one degree even when the broad forecast thesis is right.
- U.S. Polymarket weather markets resolve to Wunderground station history, not directly to NWS point forecasts.
- HKO Celsius markets resolve to one decimal place, creating sharp 28.9C/29.0C/30.0C boundary risk.
- Direct API access to Polymarket was blocked this run; public page/search snippets may lag live order-book pricing.
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

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-17T1308Z.md, alerts/2026-06-17T1308Z.md, data/market_snapshots/2026-06-17T1308Z.json, and paper_trading/maintenance/2026-06-17T1308Z.md.
- Updated rolling records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- No new simulated paper position was opened; no real trades or betting actions were executed.
