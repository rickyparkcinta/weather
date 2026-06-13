# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 20:08:32
- HKT: 2026-06-14 04:08:32
- Scheduled invocation: 2026-06-14 04:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Primary watchlist scope: Polymarket station-resolved highest-temperature markets for Dallas/KDAL Jun 14, Chicago/KORD Jun 14, Houston/KHOU Jun 14, Los Angeles/KLAX Jun 14, and NYC/KLGA Jun 14.
- Cross-checks: Polymarket weather/category, city, event, and search surfaces; NWS point forecasts; public weather forecast cross-checks where available.
- GitHub logging target: rickyparkcinta/weather.

## Top Edges

### 1. Polymarket Dallas/KDAL Jun 14 92-93F YES

- Current price: 10% displayed / Buy Yes about 10c; nearby buckets show 88-89F around 31%, 90-91F around 25%, and 86-87F around 16%. Market volume is about $10K; target-bucket volume is about $1.5K.
- Implied probability: about 10%.
- Estimated fair value: 14%-24%.
- Estimated edge: roughly +4 to +14 percentage points before exact-bucket, source, storm, and quote-staleness penalties.
- Confidence: low.
- Classification: moderate raw edge, tiny paper-only add.
- Key reasoning: The KDAL point-forecast context now centers Sunday near 92F while Polymarket still leaves 92-93F at about 10% behind the cooler 88-91F cluster. The edge is capped hard because public weather cross-checks remain closer to 89F and thunderstorms/cloud cover after 10am could keep the station below the target bucket.
- Liquidity/practicality notes: Thin target-bucket depth and high exact-bucket risk. Paper trading only; no real execution.

### 2. Polymarket Chicago/KORD Jun 14 70-71F / 72-73F cluster

- Current price: Chicago page/search context now shows 72-73F around 33% and 70-71F around 30%, with market volume around $11K.
- Implied probability: about 30% for 70-71F; about 33% for 72-73F.
- Estimated fair value: 30%-40% for 70-71F; 31%-42% for 72-73F.
- Estimated edge: small and split across adjacent buckets.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge, no duplicate add.
- Key reasoning: NWS O'Hare Sunday high remains near 72F, while public forecast context is near 71F. The prior PT-20260613-141 70-71F entry already represents the cooler side of the forecast cluster, and the current market has shifted enough toward 72-73F that a new add is not justified.
- Liquidity/practicality notes: Better depth than some forward buckets, but the one-bucket miss risk between 70-71F and 72-73F is high.

### 3. Polymarket Houston/KHOU Jun 14 92-93F YES

- Current price: about 12%; market leaders remain 88-89F around 36% and 90-91F around 30%.
- Implied probability: about 12%.
- Estimated fair value: 12%-24%.
- Estimated edge: roughly 0 to +12 percentage points after source-disagreement and storm penalties.
- Confidence: low.
- Classification: represented weak-to-moderate, no duplicate add.
- Key reasoning: NWS Hobby remains warm enough to support a 92-93F path, but public and market context are cooler and late-day showers/thunderstorms remain a major cap risk. PT-20260613-140 already holds the thesis from 12c.
- Liquidity/practicality notes: Existing Houston exposure is sufficient; no duplicate without a materially cheaper verified quote or cleaner station evidence.

### 4. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: last clean target context around 18%-19c; event context shows 72-73F around 42% and 74-75F around 31%.
- Implied probability: about 18%-19% for 70-71F.
- Estimated fair value: 15%-27%.
- Estimated edge: roughly -4 to +9 percentage points.
- Confidence: low.
- Classification: represented watch edge, no add.
- Key reasoning: NWS KLAX still supports a cooler Sunday near 70F, but Polymarket and public context continue to favor a 72-75F outcome. Existing PT-20260613-138 already covers the cooler-thesis bucket.
- Liquidity/practicality notes: Maintain only; marine-layer timing and Wunderground/NWS source mismatch remain the main risks.

### 5. Polymarket NYC/KLGA Jun 14 88-89F YES

- Current price: 88-89F around 36%; 86-87F around 28%; 90-91F around 27%; market volume around $7.9K.
- Implied probability: about 36% for 88-89F.
- Estimated fair value: 31%-43%.
- Estimated edge: small and mostly represented.
- Confidence: low.
- Classification: no fresh edge.
- Key reasoning: NWS LaGuardia points near 89F while public forecast context remains cooler around 86F, keeping the 86-91F cluster live. PT-20260613-130 already holds an 88-89F YES entry from 18c, so the current price is maintenance-only.
- Liquidity/practicality notes: No duplicate at the current price.

## Recommended Paper Trades

### PT-20260613-142

- Stance: BUY_YES on Polymarket Dallas/KDAL Jun 14 92-93F.
- Simulated size: $5 notional.
- Entry price: 10c displayed / Buy Yes context.
- Thesis: KDAL official forecast context is centered near 92F while Polymarket still prices 92-93F as a 10% tail bucket behind 88-91F.
- Confidence: low.
- Invalidation risks: storms/clouds cap the high at 88-91F; late heating overshoots into 94F+; Wunderground settlement differs from NWS point guidance; the public quote is stale; or the visible market center reflects better live station-model information.

## Risks and Invalidation Factors

- Exact-bucket risk dominates every listed edge.
- Dallas and Houston Jun 14 remain storm-timing markets as much as temperature markets.
- Polymarket resolves these markets using Wunderground station histories; NWS forecasts are only a proxy for settlement.
- Polymarket public surfaces and search snippets can lag the live order book.
- Existing paper exposure already covers Chicago/KORD Jun 14, Houston/KHOU Jun 14, LA/KLAX Jun 14, and NYC/KLGA Jun 14, so duplicate adds need a materially better fresh quote or stronger station evidence.

## Sources Used

- Polymarket high-temperature page: https://polymarket.com/weather/high-temperature
- Polymarket Chicago page: https://polymarket.com/predictions/chicago
- Polymarket Dallas Jun 14: https://polymarket.com/event/highest-temperature-in-dallas-on-june-14-2026
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket NYC Jun 14: https://polymarket.com/event/highest-temperature-in-nyc-on-june-14-2026
- NWS Chicago/O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston/Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409
- NWS KLGA forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS KDAL forecast context: https://forecast.weather.gov/MapClick.php?textField1=32.85&textField2=-96.85
- Public weather forecast cross-checks for Jun 14 station highs.

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T2008Z.md`.
- Created `alerts/2026-06-13T2008Z.md`.
- Created `data/market_snapshots/2026-06-13T2008Z.json`.
- Created `paper_trading/entries/PT-20260613-142.md`.
- Created `paper_trading/ledger_appends/2026-06-13T2008Z.csv`.
- Created `paper_trading/maintenance/2026-06-13T2008Z.md`.
- Updated rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- Mirrored the latest snapshot, history entry, alert, structured snapshot, paper-trading entry, ledger append, and maintenance note to GitHub.
- No real bets or trades were executed.