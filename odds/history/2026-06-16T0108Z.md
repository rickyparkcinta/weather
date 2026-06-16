# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-16 01:08:06
- HKT: 2026-06-16 09:08:06
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Atlanta/KATL Jun 16, Austin/KAUS Jun 16, Dallas/KDAL Jun 16, Houston/KHOU Jun 16, Chicago/KORD Jun 16, and Hong Kong/HKO Jun 16 highest-temperature buckets.
- Maintenance checks on open Jun 16 Atlanta, Austin, and HKO paper positions.
- Official cross-checks: NWS point forecasts for KATL, KAUS, KDAL, KHOU, and KORD; HKO 9-day forecast/current bulletin; Wunderground Atlanta context.
- Settlement/source note: U.S. Polymarket weather markets resolve using Wunderground station history, not NWS forecasts, so NWS is a signal rather than the settlement source.

## Top Edges

### 1. Polymarket Atlanta/KATL Jun 16 76-77F YES

- Current price: displayed 21%; Buy Yes 22c. Nearby buckets: 74-75F 32c, 72-73F 23.2c, 78-79F 14c, 80-81F 3c.
- Implied probability: about 22%.
- Estimated fair value: 28%-38% after haircutting for source disagreement.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate paper-only edge, addable at tiny size.
- Key reasoning: NWS KATL still showed Tuesday high near 76F with an 80% shower/thunderstorm chance, while the market repriced toward cooler 72-75F buckets. Wunderground-facing forecast snippets were cooler, so the edge is kept small and low-confidence.
- Liquidity/practicality notes: total market volume about $16.8K; target bucket volume about $1.19K.

### 2. Polymarket Austin/KAUS Jun 16 84-85F YES

- Current price: displayed 17%; Buy Yes 17c. Nearby buckets: 88-89F 35c, 86-87F 33c, 90-91F 12.2c, 82-83F 7c.
- Implied probability: about 17%.
- Estimated fair value: 26%-36%.
- Estimated edge: roughly +9 to +19 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate raw edge; no new add.
- Key reasoning: NWS KAUS still showed Tuesday high near 85F with showers likely and 70% precipitation chance. The quote is live but worse than the existing 15c add-on.
- Liquidity/practicality notes: total market volume about $11.0K; target bucket volume about $727. Maintain PT-20260615-173 and PT-20260615-175 only.

### 3. Polymarket Dallas/KDAL Jun 16 90-91F YES

- Current price: displayed 39%; Buy Yes 40c. Nearby 88-89F also Buy Yes 40c.
- Implied probability: about 40%.
- Estimated fair value: 44%-54%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS KDAL guidance remains around 91F, but the market is already split between 88-89F and 90-91F, leaving high exact-bucket miss risk.

### 4. Polymarket Hong Kong/HKO Jun 16 28C YES

- Current price: displayed 30%; Buy Yes 31c. Nearby buckets: 27C 48c, 29C 17c, 26C 7.1c.
- Implied probability: about 31%.
- Estimated fair value: 28%-38%.
- Estimated edge: roughly -3 to +7 percentage points.
- Confidence: low.
- Classification: represented maintenance / near fair.
- Key reasoning: HKO forecast kept Tuesday at 25-28C with heavy showers and squally thunderstorms; current conditions near 09:02 HKT were rainy and around 26C. The 28C path is alive but no longer clearly mispriced at 31c.

### 5. Polymarket Houston/KHOU Jun 16 82-83F YES

- Current price: displayed 40%; Buy Yes 40c.
- Implied probability: about 40%.
- Estimated fair value: 40%-50%.
- Estimated edge: roughly 0 to +10 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak watch-only / near fair.
- Key reasoning: NWS KHOU showed high near 82F with heavy rain risk; market is already centered on 82-83F while 80-81F remains live.

### 6. Polymarket Chicago/KORD Jun 16 74-75F YES

- Current price: displayed 51%; Buy Yes 51c.
- Implied probability: about 51%.
- Estimated fair value: 45%-55%.
- Estimated edge: roughly -6 to +4 percentage points.
- Confidence: low-to-medium-low.
- Classification: no edge / close to fair.
- Key reasoning: NWS KORD showed high near 74F, and the market is already centered on the official forecast bucket.

## Recommended Paper Trades

### PT-20260616-177

- Stance: simulated BUY_YES on Polymarket Atlanta/KATL Jun 16 76-77F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 22c; displayed 21%.
- Thesis: NWS KATL still centers Tuesday near 76F while the market discounted 76-77F to 22c during a shift toward cooler adjacent buckets.
- Confidence: low-to-medium-low.
- Invalidation risks: heavier cloud/rain keeps KATL at 72-75F; Wunderground station history lands cooler than NWS point guidance; afternoon clearing pushes 78F+; public price/depth is stale.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- U.S. markets resolve to Wunderground station history; NWS forecasts are evidence, not the settlement source.
- Atlanta has meaningful source disagreement: NWS points to 76F, while Wunderground-facing forecast snippets are cooler.
- Heavy rain and thunderstorm timing can cap Atlanta, Austin, Houston, Chicago, and Hong Kong below the official point forecast.
- A short clearing window can overshoot the target buckets, especially in Austin, Atlanta, and Dallas.
- Public Polymarket pages may be rounded, stale, localized, or inconsistent across event/category views.

## Sources Used

- Polymarket Austin Jun 16: https://polymarket.com/event/highest-temperature-in-austin-on-june-16-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- Polymarket HKO Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- NWS KAUS forecast: https://forecast.weather.gov/zipcity.php?inputstring=KAUS
- NWS KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS KDAL forecast: https://forecast.weather.gov/MapClick.php?lat=32.85416&lon=-96.85506
- NWS KHOU forecast: https://forecast.weather.gov/zipcity.php?inputstring=KHOU
- NWS KORD forecast: https://forecast.weather.gov/zipcity.php?inputstring=KORD
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather bulletin: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- Wunderground Atlanta context: https://www.wunderground.com/weather/us/ga/atlanta

## Repo Log Update

- Created/updated in GitHub repo `rickyparkcinta/weather`: `odds/latest.md`, `odds/history/2026-06-16T0108Z.md`, `alerts/2026-06-16T0108Z.md`, `data/market_snapshots/2026-06-16T0108Z.json`, `paper_trading/entries/PT-20260616-177.md`, `paper_trading/ledger_appends/2026-06-16T0108Z.csv`, and `paper_trading/maintenance/2026-06-16T0108Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and working notes in durable memory.
- No real trades or betting actions were executed.
