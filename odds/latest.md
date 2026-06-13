# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 19:09:08
- HKT: 2026-06-14 03:09:08
- Scheduled invocation: 2026-06-14 03:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Primary watchlist scope: Polymarket station-resolved highest-temperature markets for Chicago/KORD Jun 14, Houston/KHOU Jun 13 and Jun 14, Los Angeles/KLAX Jun 13 and Jun 14, Dallas/KDAL Jun 13 and Jun 14, and NYC/KLGA Jun 14.
- Cross-checks: Polymarket weather/category and city pages, Polymarket event pages/search snippets, Kalshi LA Jun 13 where readable, NWS point forecasts, NWS station observations, and a public weather forecast cross-check for Jun 14 station highs.
- GitHub logging target: rickyparkcinta/weather.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 14 70-71F YES

- Current price: Polymarket Chicago page shows 70-71F at 30%; $10.7K volume and $44.5K liquidity.
- Implied probability: about 30%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +6 to +16 percentage points before exact-bucket and source penalties.
- Confidence: low-to-medium-low.
- Classification: moderate edge, tiny paper-only add.
- Key reasoning: Current O'Hare forecast context clusters around 71-72F. NWS search context shows Sunday high near 72F with morning shower risk fading and northwest winds; public weather cross-check shows a 71F peak. Polymarket prices 70-71F as the leader, but not decisively, leaving a modest gap if the station lands just below the NWS rounded high.
- Liquidity/practicality notes: Better practical depth than the thin Houston/Dallas forward buckets, but one-degree risk is high because 72-73F is a very live adjacent outcome.

### 2. Polymarket Houston/KHOU Jun 14 92-93F YES

- Current price: 11%-12c area from the live event context; market leaders remain 88-89F around 36%-37% and 90-91F around 28%-31%.
- Implied probability: about 12%.
- Estimated fair value: 10%-22%.
- Estimated edge: roughly -2 to +10 percentage points after source disagreement and storm risk.
- Confidence: low.
- Classification: represented weak-to-moderate, no add.
- Key reasoning: NWS Hobby now shows Sunday high near 94F, but the public weather cross-check is much cooler near 89F and Polymarket's own market context heavily favors 88-91F because of afternoon convection and cloud cover. PT-20260613-140 already represents the 92-93F thesis at 12c.
- Liquidity/practicality notes: No duplicate. Houston exposure is already concentrated and the signal is now more source-disagreement than clean mispricing.

### 3. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: 18% displayed; Buy Yes 19c; 72-73F at 42% and 74-75F at 33%.
- Implied probability: about 19%.
- Estimated fair value: 15%-28%.
- Estimated edge: roughly -4 to +9 percentage points.
- Confidence: low.
- Classification: represented watch edge, no add.
- Key reasoning: NWS KLAX still shows Sunday high near 70F, but the Polymarket event context and public forecast cross-check lean 72-74F under marine-layer uncertainty. Existing PT-20260613-138 already holds this at 18c.
- Liquidity/practicality notes: Maintain only; current price is not better than entry.

### 4. Polymarket NYC/KLGA Jun 14 88-89F and 86-87F

- Current price: 88-89F at 37% / Buy Yes 37c; 86-87F at 29% / Buy Yes about 29c-30c; 90-91F at 27%.
- Implied probability: about 37% for 88-89F and 30% for 86-87F.
- Estimated fair value: 30%-42% for 88-89F; 24%-36% for 86-87F.
- Estimated edge: small and ambiguous.
- Confidence: low.
- Classification: no fresh edge.
- Key reasoning: NWS LaGuardia forecasts Sunday high near 89F, while the public forecast cross-check peaks near 86F. That keeps the 86-91F cluster live and makes the market broadly reasonable.
- Liquidity/practicality notes: PT-20260613-130 already holds an 88-89F YES entry from 18c; no new exposure.

### 5. Polymarket Dallas/KDAL Jun 14 92-93F YES

- Current price: 10% displayed; Buy Yes 10.0c; 88-89F at 31%, 90-91F at 25%, and 86-87F at 16%.
- Implied probability: about 10%.
- Estimated fair value: 6%-16%.
- Estimated edge: roughly -4 to +6 percentage points.
- Confidence: low.
- Classification: weak watch-only.
- Key reasoning: The market repriced cooler from the prior hour. The public weather cross-check shows Dallas Love Field near 89F for Jun 14, and the accessible NWS point page was stale enough that I am not using its older 97F output as a high-confidence input.
- Liquidity/practicality notes: No new paper trade.

## Recommended Paper Trades

### PT-20260613-141

- Stance: BUY_YES on Polymarket Chicago/KORD Jun 14 70-71F.
- Simulated size: $5 notional.
- Entry price: 30c displayed price.
- Thesis: O'Hare's Sunday high is clustered near 71-72F, with the 70-71F bucket underpriced if cloud cover, morning showers, and northwest flow hold the station just below the rounded NWS 72F high.
- Confidence: low-to-medium-low.
- Invalidation risks: KORD reaches 72F or higher after afternoon clearing, Wunderground station history rounds differently, the visible Polymarket city-card quote is stale, or early-day rain/cool advection caps the high below 70F.

## Risks and Invalidation Factors

- Exact-bucket risk dominates every listed edge.
- Houston and Dallas Jun 14 remain storm-timing markets as much as temperature markets.
- Polymarket resolves these weather markets to Wunderground station histories; NWS forecast/observation evidence is a proxy, not the settlement source.
- Public market surfaces and search snippets can lag the order book. This is especially relevant for the new Chicago Jun 14 entry, where only a displayed city-page price was cleanly available.
- Existing Houston, Los Angeles, and NYC paper exposure is already concentrated enough that only materially better fresh quotes should justify duplicate adds.

## Sources Used

- Polymarket high-temperature page: https://polymarket.com/weather/high-temperature
- Polymarket Chicago page: https://polymarket.com/predictions/chicago
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket Dallas Jun 14: https://polymarket.com/zh/event/highest-temperature-in-dallas-on-june-14-2026
- Polymarket NYC Jun 14: https://polymarket.com/zh/event/highest-temperature-in-nyc-on-june-14-2026
- NWS Chicago/O'Hare forecast search context: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston/Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409
- NWS KLGA forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS KHOU observations: https://tgftp.nws.noaa.gov/weather/current/KHOU.html
- NWS KDAL observations: https://tgftp.nws.noaa.gov/weather/current/KDAL.html
- NWS KLAX observations: https://tgftp.nws.noaa.gov/weather/current/KLAX.html
- NWS KLGA observations: https://tgftp.nws.noaa.gov/weather/current/KLGA.html
- Public weather forecast cross-check for Jun 14 station highs.

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T1909Z.md`.
- Created `alerts/2026-06-13T1909Z.md`.
- Created `data/market_snapshots/2026-06-13T1909Z.json`.
- Created `paper_trading/entries/PT-20260613-141.md`.
- Created `paper_trading/ledger_appends/2026-06-13T1909Z.csv`.
- Created `paper_trading/maintenance/2026-06-13T1909Z.md`.
- Updated rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- Mirrored the latest snapshot, history entry, alert, structured snapshot, paper-trading entry, ledger append, and maintenance note to GitHub.
- No real bets or trades were executed.
