# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 23:08:41
- HKT: 2026-06-14 07:08:41
- Scheduled invocation: 2026-06-14 07:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Primary watchlist scope: Polymarket station-resolved highest-temperature markets for Hong Kong/HKO Jun 14, Los Angeles/KLAX Jun 14, Dallas/KDAL Jun 14, Houston/KHOU Jun 14, Chicago/KORD Jun 14, and NYC/KLGA Jun 14.
- Broader screen: Polymarket high-temperature board for nearby Jun 14 weather markets. No stronger unrepresented opportunity was identified than the existing watchlist cluster.
- Evidence cross-checks: Polymarket event/category pages; NWS point forecasts for US airport stations; HKO open-data forecast and regional readings for Hong Kong; market resolution rules.
- Durable logging target: memory/GitHub-backed odds log.

## Top Edges

### 1. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: 22% displayed / Buy Yes 23c. Market leaders: 72-73F at 47% / Buy Yes 48c and 74-75F at 25% / Buy Yes 26c.
- Implied probability: about 23% using the buy price.
- Estimated fair value: 28%-40%.
- Estimated edge: roughly +5 to +17 percentage points before exact-bucket, marine-layer, Wunderground, and liquidity penalties.
- Confidence: low-to-medium-low.
- Classification: strongest raw represented edge; no duplicate paper add.
- Key reasoning: NWS KLAX still shows Sunday high near 70F with patchy fog before 11am, then gradual clearing. That keeps 70-71F underpriced versus the warmer 72-75F market center, but the quote has moved against the paper book from the PT-20260613-138 entry at 18c to 23c.
- Liquidity/practicality notes: Total market volume is about $12.1K; target-bucket volume is about $523. The market resolves from Wunderground KLAX history, so NWS is a proxy rather than the settlement source.

### 2. Polymarket Dallas/KDAL Jun 14 92-93F YES

- Current price: 13% displayed / Buy Yes 14.9c. Market leaders: 88-89F at 28% / Buy Yes 30c, 90-91F at 20% / Buy Yes 21c, and 86-87F at 19% / Buy Yes 20c.
- Implied probability: about 14.9%.
- Estimated fair value: 18%-30%.
- Estimated edge: roughly +3 to +15 percentage points before exact-bucket, storm, and source penalties.
- Confidence: low.
- Classification: moderate represented edge; no duplicate paper add.
- Key reasoning: NWS KDAL shows Sunday high near 93F, but with a 50% chance of showers/thunderstorms after 10am. The bucket remains plausibly underpriced, but it has moved above PT-20260613-142's 10c entry and storm timing is still the main cap risk.
- Liquidity/practicality notes: Total market volume is about $13.2K and target-bucket volume about $1.6K. No add unless a verified quote falls materially below entry or thunderstorm timing shifts later.

### 3. Polymarket Houston/KHOU Jun 14 Warm Tail

- Current price: 92-93F at 12% displayed / Buy Yes 13c; 94-95F at 2% displayed / Buy Yes 2.0c.
- Implied probability: about 13% for 92-93F and 2.0% for 94-95F using buy prices.
- Estimated fair value: 14%-24% for 92-93F; 5%-12% for 94-95F.
- Estimated edge: roughly +1 to +11 points on 92-93F and +3 to +10 points on 94-95F, both heavily risk-adjusted.
- Confidence: low.
- Classification: represented warm-tail cluster; no fresh paper add.
- Key reasoning: NWS near Hobby shows Sunday high near 94F, with showers and thunderstorms likely mainly from 2pm to 4pm and after. That keeps the warm-tail thesis alive, but PT-20260613-140 already represents 92-93F and PT-20260613-143 already represents 94-95F.
- Liquidity/practicality notes: Target-bucket depth is thin and Houston exposure is already concentrated. No duplicate unless the quote becomes materially cheaper or storm timing clearly shifts later.

### 4. Polymarket Chicago/KORD Jun 14 72-73F / 70-71F Cluster

- Current price: 72-73F at 35% displayed / Buy Yes 36c; 70-71F at 29% displayed / Buy Yes 29c.
- Implied probability: about 36% for 72-73F and 29% for 70-71F using buy prices.
- Estimated fair value: 38%-48% for 72-73F; 24%-34% for 70-71F.
- Estimated edge: small and split across adjacent buckets.
- Confidence: low-to-medium-low.
- Classification: mostly fair to mildly positive; no new paper position.
- Key reasoning: NWS O'Hare forecasts Sunday high near 72F after a slight chance of early showers, then gradual clearing. The market has now centered the correct 70-73F area; a fresh 72-73F hedge does not clear the edge threshold, and PT-20260613-141 already holds the cooler 70-71F side.
- Liquidity/practicality notes: Total market volume is about $12.8K. The 72F boundary is the main practical risk.

### 5. Polymarket Hong Kong/HKO Jun 14 29C / 30C Cluster

- Current price: 29C at 54% displayed / Buy Yes 54c; 30C at 37% displayed / Buy Yes 38c; 31C at 10% displayed / Buy Yes 11c.
- Implied probability: about 54% for 29C and 38% for 30C using buy prices.
- Estimated fair value: 43%-55% for 29C; 35%-47% for 30C.
- Estimated edge: no clear add after spread and exact one-decimal settlement risk.
- Confidence: low-to-medium-low.
- Classification: no edge / watch-only.
- Key reasoning: HKO reported Hong Kong Observatory at 29C at 06:00 HKT and forecasts today's maximum around 30C with mainly cloudy weather, occasional showers, squally thunderstorms, and heavy showers at times. The market is correctly concentrated in 29-30C; 31C remains live but not cheap enough given heavy-rain risk.
- Liquidity/practicality notes: This is the highest-volume scanned market at about $72.5K, but the exact "Absolute Daily Max" one-decimal settlement makes the 29.9C/30.0C boundary decisive.

### 6. Polymarket NYC/KLGA Jun 14 88-89F YES

- Current price: 39% displayed / Buy Yes 39c. Nearby buckets: 90-91F at 28% / Buy Yes 28c and 86-87F at 23% / Buy Yes 23c.
- Implied probability: about 39%.
- Estimated fair value: 36%-48%.
- Estimated edge: small and represented.
- Confidence: low.
- Classification: no fresh edge.
- Key reasoning: NWS LaGuardia shows Sunday high near 89F with increasing clouds and stronger south wind. The market has mostly caught up to PT-20260613-130's 18c entry.
- Liquidity/practicality notes: Maintain only; no duplicate near 39c.

## Recommended Paper Trades

No new paper trade is recommended this run.

Maintenance actions only:

- Maintain PT-20260613-138, LA/KLAX Jun 14 70-71F YES at 18c entry.
- Maintain PT-20260613-142, Dallas/KDAL Jun 14 92-93F YES at 10c entry.
- Maintain PT-20260613-140, Houston/KHOU Jun 14 92-93F YES at 12c entry.
- Maintain PT-20260613-143, Houston/KHOU Jun 14 94-95F YES at 1.9c entry.
- Maintain PT-20260613-141, Chicago/KORD Jun 14 70-71F YES at 30c entry, now closer to fair because 72-73F leads.
- Maintain PT-20260613-130, NYC/KLGA Jun 14 88-89F YES at 18c entry.

## Risks and Invalidation Factors

- Exact-bucket risk dominates every listed edge.
- Polymarket US airport temperature markets resolve using Wunderground station histories; NWS forecasts are only proxies.
- HKO resolves from the official Daily Extract absolute maximum to one decimal place; a 29.9C versus 30.0C print is decisive.
- LA/KLAX can miss warmer into 72-75F if clearing beats forecast or Wunderground records warmer than NWS point guidance.
- Dallas and Houston are storm-timing markets as much as temperature markets; earlier convection can cap highs below the target buckets.
- Chicago is now more naturally centered on 72-73F, which weakens the older 70-71F paper thesis.
- NYC has largely repriced around the NWS high, leaving only a small residual edge.
- Several target buckets have thin volume and public pages may lag live executable order books.

## Sources Used

- Polymarket high-temperature board: https://polymarket.com/weather/high-temperature
- Polymarket Hong Kong Jun 14: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-14-2026
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket Dallas Jun 14: https://polymarket.com/event/highest-temperature-in-dallas-on-june-14-2026
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- Polymarket Chicago Jun 14: https://polymarket.com/event/highest-temperature-in-chicago-on-june-14-2026
- Polymarket NYC Jun 14: https://polymarket.com/event/highest-temperature-in-nyc-on-june-14-2026
- HKO 9-day forecast API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en
- HKO local forecast API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en
- HKO current readings API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en
- NWS KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409
- NWS Dallas/Love Field forecast: https://forecast.weather.gov/MapClick.php?lat=32.858386&lon=-96.861368
- NWS Houston/Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Chicago/O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS KLGA forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T2308Z.md`.
- Created `alerts/2026-06-13T2308Z.md`.
- Created `data/market_snapshots/2026-06-13T2308Z.json`.
- Created `paper_trading/maintenance/2026-06-13T2308Z.md`.
- Updated rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- No new paper-trade entry or ledger append was created because no fresh simulated position was opened.
- No real bets or trades were executed.