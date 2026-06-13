# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 22:08:04
- HKT: 2026-06-14 06:08:04
- Scheduled invocation: 2026-06-14 06:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Primary watchlist scope: Polymarket station-resolved highest-temperature markets for Los Angeles/KLAX Jun 14, Dallas/KDAL Jun 14, Houston/KHOU Jun 14, Chicago/KORD Jun 14, and NYC/KLGA Jun 14.
- Broader screen: Polymarket high-temperature board for nearby Jun 14 weather markets; no stronger unrepresented opportunity was identified than the existing watchlist cluster.
- Evidence cross-checks: Polymarket event/category pages; NWS point forecasts and current station context; market resolution rules noting Wunderground station-history settlement.
- Durable logging target: memory/GitHub-backed odds log.

## Top Edges

### 1. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: 18% displayed / Buy Yes 19c. Market leaders: 72-73F at 42% / Buy Yes 43c and 74-75F at 31% / Buy Yes 32c.
- Implied probability: about 19% using the displayed buy price.
- Estimated fair value: 30%-42%.
- Estimated edge: roughly +11 to +23 percentage points before exact-bucket, marine-layer, Wunderground, and liquidity penalties.
- Confidence: low-to-medium-low.
- Classification: strongest raw represented edge; no duplicate paper add.
- Key reasoning: NWS KLAX shows Sunday high near 70F with patchy fog before 11am and gradual clearing. That centers the 70-71F bucket more than the market does, while Polymarket still prices 72-75F as the dominant cluster. The current quote is not better than PT-20260613-138's 18c entry, so this is maintenance-only.
- Liquidity/practicality notes: Target-bucket volume is about $496 and total market volume about $10.9K. The market resolves to Wunderground KLAX history, so NWS guidance is a proxy rather than the settlement source.

### 2. Polymarket Dallas/KDAL Jun 14 92-93F YES

- Current price: 10% displayed / Buy Yes 10.0c. Market leaders: 88-89F at 30% / Buy Yes 32c, 90-91F at 22% / Buy Yes 24c, and 86-87F at 20% / Buy Yes 21c.
- Implied probability: about 10%.
- Estimated fair value: 16%-28%.
- Estimated edge: roughly +6 to +18 percentage points before exact-bucket, storm, and source penalties.
- Confidence: low.
- Classification: moderate represented edge; no duplicate paper add.
- Key reasoning: NWS KDAL shows Sunday high near 93F, but also a 50% shower/thunderstorm chance after 10am, which can cap the station in the upper 80s or low 90s. The same bucket is already represented by PT-20260613-142 at 10c.
- Liquidity/practicality notes: Target-bucket volume is about $1.5K. Do not duplicate unless a verified quote falls materially below 8c or storm timing shifts later while KDAL-specific 92F+ evidence strengthens.

### 3. Polymarket Houston/KHOU Jun 14 92-93F YES and 94-95F YES

- Current price: 92-93F at 8% displayed / Buy Yes 9c; 94-95F at 1% displayed / Buy Yes 1.8c.
- Implied probability: about 9% for 92-93F and 1.8% for 94-95F using buy prices.
- Estimated fair value: 13%-23% for 92-93F; 4%-10% for 94-95F.
- Estimated edge: roughly +4 to +14 points on 92-93F and +2 to +8 points on 94-95F, both heavily risk-adjusted.
- Confidence: low.
- Classification: represented warm-tail cluster; no fresh paper add.
- Key reasoning: NWS near KHOU/Hobby supports a hot Sunday high around 94F, but showers and thunderstorms are likely mainly during the afternoon and public Polymarket context still frames the plausible envelope around 88-93F. PT-20260613-140 already holds 92-93F and PT-20260613-143 already holds the 94-95F upper-tail hedge.
- Liquidity/practicality notes: Target-bucket depth is thin and Houston exposure is already concentrated. No duplicate unless the quote becomes materially cheaper or storm timing clearly shifts later.

### 4. Polymarket Chicago/KORD Jun 14 72-73F / 70-71F Cluster

- Current price: 72-73F about 33%; 70-71F about 28%-29%.
- Implied probability: roughly 33% for 72-73F and 29% for 70-71F.
- Estimated fair value: 34%-44% for 72-73F; 24%-34% for 70-71F.
- Estimated edge: small and split across adjacent buckets.
- Confidence: low-to-medium-low.
- Classification: mostly fair to mildly positive; no new paper position.
- Key reasoning: NWS O'Hare forecasts a Sunday high near 72F after early showers, then gradual clearing with northwest wind. Market pricing has moved into the correct 70-73F cluster, and PT-20260613-141 already represents the cooler 70-71F side.
- Liquidity/practicality notes: Market volume is about $12K. No adjacent-bucket hedge clears at current prices.

### 5. Polymarket NYC/KLGA Jun 14 88-89F YES

- Current price: 37% displayed / Buy Yes 37c. Nearby buckets: 86-87F about 28%-29%, 90-91F about 27%-28%.
- Implied probability: about 37%.
- Estimated fair value: 34%-45%.
- Estimated edge: small and represented.
- Confidence: low.
- Classification: no fresh edge.
- Key reasoning: NWS LaGuardia shows Sunday high near 89F with increasing clouds and stronger south wind, but the market has already repriced sharply from PT-20260613-130's 18c entry. The 86-91F cluster remains live.
- Liquidity/practicality notes: Maintain only; no duplicate near 37c.

## Recommended Paper Trades

No new paper trade is recommended this run.

Maintenance actions only:

- Maintain PT-20260613-138, LA/KLAX Jun 14 70-71F YES at 18c entry.
- Maintain PT-20260613-142, Dallas/KDAL Jun 14 92-93F YES at 10c entry.
- Maintain PT-20260613-140, Houston/KHOU Jun 14 92-93F YES at 12c entry.
- Maintain PT-20260613-143, Houston/KHOU Jun 14 94-95F YES at 1.9c entry.
- Maintain PT-20260613-141, Chicago/KORD Jun 14 70-71F YES at 30c entry.
- Maintain PT-20260613-130, NYC/KLGA Jun 14 88-89F YES at 18c entry.

## Risks and Invalidation Factors

- Exact-bucket risk dominates every listed edge.
- Polymarket resolves these markets using Wunderground station histories; NWS forecasts are only proxies.
- LA/KLAX can miss warmer into 72-75F if clearing beats forecast or Wunderground records warmer than NWS point guidance.
- Dallas and Houston are storm-timing markets as much as temperature markets; earlier convection can cap highs below the target buckets.
- Chicago is split between 70-71F and 72-73F, with one-degree settlement risk driving most of the edge uncertainty.
- NYC has largely repriced around the NWS high, leaving only a small residual edge.
- Several target buckets have thin volume and public pages may lag live executable order books.

## Sources Used

- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket Dallas Jun 14: https://polymarket.com/event/highest-temperature-in-dallas-on-june-14-2026
- Polymarket Chicago Jun 14: https://polymarket.com/event/highest-temperature-in-chicago-on-june-14-2026
- Polymarket NYC Jun 14: https://polymarket.com/event/highest-temperature-in-nyc-on-june-14-2026
- Polymarket high-temperature board: https://polymarket.com/weather/high-temperature
- NWS Houston/Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409
- NWS Dallas/Love Field forecast: https://forecast.weather.gov/MapClick.php?lat=32.858386&lon=-96.861368
- NWS Chicago/O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS KLGA forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T2208Z.md`.
- Created `alerts/2026-06-13T2208Z.md`.
- Created `data/market_snapshots/2026-06-13T2208Z.json`.
- Created `paper_trading/maintenance/2026-06-13T2208Z.md`.
- Updated rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- No new paper-trade entry or ledger append was created because no fresh simulated position was opened.
- No real bets or trades were executed.