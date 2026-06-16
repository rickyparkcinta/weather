# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-16 09:13:40
- HKT: 2026-06-16 17:13:40
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Hong Kong/HKO Jun 17 27C/28C/29C; Chicago/KORD Jun 16 72-73F and 74-75F; Atlanta/KATL Jun 16 72-73F/74-75F/76-77F; Houston/KHOU Jun 16 80-81F and 82-83F; Austin/KAUS Jun 16 84-85F/86-87F/88-89F; Dallas/KDAL Jun 16 88-89F and 90-91F; Hong Kong/HKO Jun 16 27C/28C.
- Official cross-checks: HKO current weather, HKO 9-day forecast, and NWS point forecasts/current observations for KATL, KHOU, KORD, KAUS, and KDAL.
- Settlement/source note: U.S. weather markets resolve using Wunderground station history, not NWS forecasts. NWS is used as evidence, while public market pages can be rounded, stale, localized, or internally inconsistent. All actions remain paper-only.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 17 28C YES

- Current price: 28C displayed around 31%-32%; nearby 27C around 23%, 29C around 22%.
- Implied probability: about 32%.
- Estimated fair value: 40%-52%.
- Estimated edge: roughly +8 to +20 percentage points.
- Confidence: medium-low.
- Classification: moderate fresh hedge.
- Key reasoning: HKO's 9-day forecast updated the Jun 17 range to 25-28C, with cloudy weather, showers, squally thunderstorms, and heavy showers at times. That shifts the better-centered HKO Jun 17 thesis from the older 29C entry to 28C, while the market still prices 28C only in the low 30s.
- Liquidity/practicality notes: Opened tiny paper-only PT-20260616-183, $5 simulated BUY_YES at a represented 32% entry. Size stays capped because 27C rain-cap risk remains live and HKO exact-Celsius settlement is a one-decimal boundary setup.

### 2. Polymarket Chicago/KORD Jun 16 72-73F YES

- Current price: 72-73F displayed around 26%; 74-75F leads around 50%.
- Implied probability: about 26%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +8 to +18 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge with add-on trigger.
- Key reasoning: NWS O'Hare shows 62F at 3:51 a.m. CDT and a Tuesday high near 73F with showers/thunderstorms likely before 2 p.m. The market still favors 74-75F, but the 72-73F bucket got cheaper versus the 30c paper entry.
- Liquidity/practicality notes: Opened tiny paper-only PT-20260616-184, $5 simulated BUY_YES at a represented 26% entry. Size stays capped because a one-degree warm miss into 74-75F is very live and the market data is public-display quality rather than verified depth.

### 3. Polymarket Atlanta/KATL Jun 16 74-75F YES

- Current price: 74-75F displayed around 38%; nearby snippets show 72-73F around 25%-26% and 76-77F around 30%.
- Implied probability: about 38%.
- Estimated fair value: 48%-58%.
- Estimated edge: roughly +10 to +20 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no add at same price.
- Key reasoning: NWS KATL shows 71F at 4:52 a.m. EDT and now forecasts a high near 74F with showers and thunderstorms likely. That keeps 74-75F as the cleanest Atlanta bucket, but 72-73F remains a live cap path and prior Atlanta exposure is already meaningful.
- Liquidity/practicality notes: Maintain PT-20260616-182 from 38%; no duplicate at the same displayed price without either a cheaper quote or live station evidence reaching 74F.

### 4. Polymarket Houston/KHOU Jun 16 80-81F YES

- Current price: public pages conflict: main English snippets show 80-81F around 25% / Buy Yes 26c while a localized snippet shows 80-81F and 82-83F both around 37%.
- Implied probability: roughly 25%-37%, quote-quality capped.
- Estimated fair value: 30%-42%.
- Estimated edge: roughly +5 to +17 percentage points if the 25%-26c quote is real; little edge if the 37% display is the correct current surface.
- Confidence: low.
- Classification: represented moderate but quote-conflicted edge.
- Key reasoning: NWS KHOU shows 78F at 3:53 a.m. CDT, a Flood Watch, and a high near 82F with showers/thunderstorms and heavy rain possible. That keeps 80-81F live, but 82-83F remains a plausible winner and the market surface is inconsistent.
- Liquidity/practicality notes: Maintain PT-20260616-181 from 26c only; no duplicate until quote surfaces agree.

### 5. Polymarket Hong Kong/HKO Jun 16 27C YES

- Current price: 27C displayed around 94%; 28C around 4%.
- Implied probability: about 94%.
- Estimated fair value: 97%-99%.
- Estimated edge: roughly +3 to +5 percentage points.
- Confidence: medium-low.
- Classification: small residual represented edge.
- Key reasoning: HKO's 17:02 HKT current bulletin shows 26C at the Observatory, rain, 92% humidity, low UV, warning of widespread heavy rain, and a Thunderstorm Warning effective until 8 p.m. This makes a late move into 28C less likely, but the market has mostly converged.
- Liquidity/practicality notes: Maintain PT-20260616-178 only. No add at a high price with one-decimal boundary risk.

### 6. Austin/KAUS Jun 16

- Current price: 86-87F and 88-89F are co-leaders in the mid-to-high 30s; 84-85F is around 16%-17%.
- Estimated fair value: 84-85F reduced to roughly 14%-24%; 86-87F closer to fair.
- Confidence: low.
- Classification: represented edge weakened / near fair.
- Key reasoning: NWS KAUS shows 73F at 2:53 a.m. CDT and a Tuesday high near 87F with a 50% thunderstorm chance. The older 84-85F paper thesis is no longer the cleanest center.
- Liquidity/practicality notes: Maintain PT-20260615-173 and PT-20260615-175 only; do not add.

### 7. Dallas/KDAL Jun 16

- Current price: 90-91F around 45%; 88-89F around 39%.
- Estimated fair value: 90-91F roughly 40%-50%; 88-89F roughly 30%-40%.
- Confidence: low.
- Classification: no meaningful edge.
- Key reasoning: NWS KDAL shows 75F at 3:53 a.m. CDT and a Tuesday high near 90F. The market is already centered around the official point forecast.

## Recommended Paper Trades

Opened two new simulated paper trades:

- PT-20260616-183: BUY_YES Polymarket Hong Kong/HKO Jun 17 28C, $5 paper notional, represented entry 32%, fair 40%-52%, confidence medium-low. Thesis: HKO shifted the official Jun 17 forecast cap down to 28C under heavy showers/squally thunderstorms while the market still prices 28C in the low 30s. Invalidation risks: rain caps the day at 27.xC; forecast revises warmer back to 29C; one-decimal settlement boundary; public quote rounding/staleness.
- PT-20260616-184: BUY_YES Polymarket Chicago/KORD Jun 16 72-73F, $5 paper notional, represented entry 26%, fair 34%-44%, confidence low-to-medium-low. Thesis: NWS O'Hare still forecasts high near 73F while 72-73F softened below the 30c paper entry and 74-75F remains market leader. Invalidation risks: afternoon mixing clears enough for 74F+; Wunderground station history differs from NWS context; public display is stale or rounded.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- U.S. markets resolve to Wunderground station history; NWS forecasts and observations are supporting evidence only.
- HKO Jun 17 shifted away from the existing 29C paper thesis; PT-20260616-179 should be treated as weakened/adverse-watch unless the forecast warms again.
- Chicago 72-73F loses on a small warm miss into the market-leading 74-75F bucket.
- Atlanta 74-75F loses if KATL either fails to rise above 73F or warms into 76F+.
- Houston remains quote-quality capped because public Polymarket displays disagree materially.

## Sources Used

- Polymarket HKO Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket Austin Jun 16: https://polymarket.com/event/highest-temperature-in-austin-on-june-16-2026
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- Polymarket HKO Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- NWS KATL forecast/current observations: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS KHOU forecast/current observations: https://forecast.weather.gov/MapClick.php?lat=29.6913&lon=-95.2988
- NWS KORD forecast/current observations: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS KAUS forecast/current observations: https://forecast.weather.gov/zipcity.php?inputstring=KAUS
- NWS KDAL forecast/current observations: https://forecast.weather.gov/MapClick.php?lat=32.8471&lon=-96.8518
- HKO current weather bulletin: https://www.hko.gov.hk/textonly/forecast/englishwx.htm
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update

- Saved durable records locally: odds/latest.md, odds/history/2026-06-16T0913Z.md, alerts/2026-06-16T0913Z.md, data/market_snapshots/2026-06-16T0913Z.json, paper_trading/entries/PT-20260616-183.md, paper_trading/entries/PT-20260616-184.md, paper_trading/ledger_appends/2026-06-16T0913Z.csv, and paper_trading/maintenance/2026-06-16T0913Z.md.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in durable memory.
- New paper-only entries: PT-20260616-183 HKO Jun 17 28C YES at represented 32%, $5 simulated notional; PT-20260616-184 Chicago/KORD Jun 16 72-73F YES at represented 26%, $5 simulated notional.
- GitHub connector mirror target: rickyparkcinta/weather.
