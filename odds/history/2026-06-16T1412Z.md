# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-16 14:12:41
- HKT: 2026-06-16 22:12:42
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Chicago/KORD Jun 16 70-71F/72-73F/74-75F/76-77F; Austin/KAUS Jun 17 88-89F/90-91F/92-93F/94-95F; Dallas/KDAL Jun 17 90-91F/92-93F/94-95F/96-97F; Hong Kong/HKO Jun 17 27C/28C/29C/30C; Atlanta/KATL Jun 16 72-73F/74-75F/76-77F; Houston/KHOU Jun 16 80-81F/82-83F/84-85F.
- Official cross-checks: NWS point forecasts for Chicago O'Hare, Austin-Bergstrom, Dallas Love Field, Atlanta/Hartsfield-Jackson, and Houston Hobby; HKO 9-day forecast.
- Live/current-condition cross-checks: NWS current-condition pages for KORD, KATL, KDAL, plus NWS/Wunderground-facing Houston context.
- Settlement/source note: U.S. Polymarket weather markets resolve using Wunderground station history, not NWS forecasts. NWS is supporting evidence. Public Polymarket pages can be rounded, stale, thin, or internally inconsistent.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 16 72-73F YES

- Current price: 72-73F displayed 15%; Buy Yes 16c. Nearby buckets: 74-75F 50% / Buy Yes 50c, 76-77F 19% / Buy Yes 22c, 70-71F 2% / Buy Yes 2.9c.
- Implied probability: about 16% using Buy Yes.
- Estimated fair value: 30%-40%.
- Estimated edge: roughly +14 to +24 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge, tiny add-on cleared.
- Key reasoning: NWS O'Hare still forecasts a high near 73F with showers/thunderstorms likely mainly before 2 p.m., clouds gradually becoming mostly sunny, and breezy southwest winds. The latest available KORD current-condition summary still showed an early-morning 6-hour max of 64.9F before 1151 UTC, so there was no early invalidating warm print in the evidence checked. Polymarket still centers 74-75F at 50% while discounting 72-73F to 16c.
- Liquidity/practicality notes: Opened PT-20260616-188, a $5 simulated BUY_YES add-on at 16c. Size is capped because this is the fourth same-bucket Chicago paper entry, exact-bucket risk is severe, and late-day clearing could push KORD into 74F+.

### 2. Polymarket Austin/KAUS Jun 17 90-91F YES

- Current price: 90-91F displayed 30%; Buy Yes 31c. Nearby buckets: 92-93F 40% / Buy Yes 41c, 88-89F 15% / Buy Yes 16c, 94-95F 12% / Buy Yes 12c.
- Implied probability: about 31% using Buy Yes.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS Austin-Bergstrom forecasts Wednesday high near 91F with decreasing clouds and heat index values as high as 103F. That keeps 90-91F live versus the market-leading warmer 92-93F bucket.
- Liquidity/practicality notes: Maintain PT-20260616-187 from 32c. No duplicate because the improvement to 31c is only 1c and the target-bucket volume is still thin.

### 3. Polymarket Dallas/KDAL Jun 17 94-95F YES

- Current price: 94-95F displayed 25%; Buy Yes 25c. Nearby buckets: 92-93F 37% / Buy Yes 37c, 90-91F 24% / Buy Yes 24c, 96-97F 5% / Buy Yes 5c.
- Implied probability: about 25%.
- Estimated fair value: 31%-41%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge, very low visible target liquidity.
- Key reasoning: NWS Dallas/Love Field forecasts Wednesday high near 95F with decreasing clouds and heat index values as high as 103F, while Polymarket still leads with 92-93F and prices 94-95F at one-quarter probability.
- Liquidity/practicality notes: Maintain PT-20260616-185 from 25c. No duplicate because price equals entry and the visible 94-95F target-bucket volume is only about $144.

### 4. Polymarket Hong Kong/HKO Jun 17 28C YES

- Current price: 28C displayed 36%; Buy Yes 36c. Nearby buckets: 27C 28% / Buy Yes 28c, 29C 21% / Buy Yes 21c, 30C 9% / Buy Yes 9c.
- Implied probability: about 36%.
- Estimated fair value: 40%-50%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: HKO's 9-day forecast for Jun 17 lists 25-28C, cloudy weather with showers and squally thunderstorms, heavy showers at times, and high probability of significant rain. That still centers 28C, but exact one-decimal settlement risk and 27.xC rain-cap risk remain material.
- Liquidity/practicality notes: Maintain PT-20260616-183 from 32%; no add at 36c. PT-20260616-179 on 29C remains weakened/adverse-watch.

### 5. Polymarket Atlanta/KATL Jun 16 74-75F YES

- Current price: 74-75F displayed 43%; Buy Yes 43c. Nearby buckets: 72-73F 37% / Buy Yes 39c, 76-77F 18% / Buy Yes 19c.
- Implied probability: about 43%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly -5 to +5 percentage points.
- Confidence: low-to-medium-low.
- Classification: mostly fair / represented maintenance.
- Key reasoning: NWS Atlanta forecasts a high near 75F with showers and thunderstorms, while the KATL current-condition page showed an early 6-hour max near 73F. Both 72-73F and 74-75F remain live, leaving limited value at the current 43c price.
- Liquidity/practicality notes: Maintain PT-20260616-182 from 38%; no duplicate at a worse price.

### 6. Polymarket Houston/KHOU Jun 16 82-83F / 80-81F

- Current price: 82-83F displayed 44% / Buy Yes 44c; 80-81F displayed 35% / Buy Yes 35c; 84-85F displayed 17% / Buy Yes 18c.
- Estimated fair value: 82-83F roughly 38%-48%; 80-81F roughly 28%-38%.
- Confidence: low.
- Classification: mostly fair / maintenance only.
- Key reasoning: NWS Houston Hobby forecasts high near 82F with showers, possible thunderstorms, and heavy rainfall possible; live public weather context around Houston also remains rain-cooled. The market has mostly converged around the 80-83F cluster.
- Liquidity/practicality notes: Maintain PT-20260616-181 only; no duplicate after 80-81F repriced from the 26c paper entry to 35c.

## Recommended Paper Trades

### New Paper Trade

- Stance: BUY_YES on Polymarket Chicago/KORD Jun 16 72-73F.
- Simulated size: $5 paper notional.
- Entry price: 16c / 16% implied probability.
- Estimated fair value: 30%-40%.
- Thesis: The quote fell materially below the latest 20c paper add-on while NWS O'Hare still centers the day near 73F and early station evidence had not invalidated the lower bucket. The edge is price-driven but still exact-bucket fragile.
- Confidence: low-to-medium-low.
- Invalidation risks: KORD prints 74F+ if clouds clear faster or southwest winds mix warmer air down; final Wunderground history differs from NWS point evidence; the public Polymarket quote is stale; this is already fourth same-bucket Chicago exposure; final rounding can move the result by one bucket.

### Maintained / No Duplicate

- Maintain PT-20260616-187 Austin/KAUS Jun 17 90-91F YES from 32c.
- Maintain PT-20260616-185 Dallas/KDAL Jun 17 94-95F YES from 25c.
- Maintain PT-20260616-183 HKO Jun 17 28C YES from 32%.
- Maintain PT-20260616-182 Atlanta/KATL Jun 16 74-75F YES from 38%.
- Maintain PT-20260616-181 Houston/KHOU Jun 16 80-81F YES as maintenance only.

No real bets, trades, wallet actions, or order execution occurred.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- U.S. markets resolve to Wunderground station history; NWS forecasts and current-condition pages are supporting evidence only.
- Chicago concentration is now high for one bucket, so future duplicates should require a much deeper discount or live-station evidence very close to resolution.
- Austin and Dallas Jun 17 target buckets have thin visible public volume, so confidence and size stay capped.
- HKO Jun 17 can still cap at 27.xC in heavier rain or warm toward 29C if showers ease.
- Atlanta and Houston remain storm-timing markets where late clearing or persistent rain can move the result by one bucket.

## Sources Used

- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026/highest-temperature-in-chicago-on-june-16-2026-72-73f
- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026/highest-temperature-in-austin-on-june-17-2026-90-91f
- Polymarket Dallas Jun 17: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026/highest-temperature-in-dallas-on-june-17-2026-94-95f
- Polymarket HKO Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026/highest-temperature-in-atlanta-on-june-16-2026-76-77f
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- NWS Chicago O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Austin-Bergstrom forecast: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- NWS Dallas forecast: https://forecast.weather.gov/zipcity.php?inputstring=dallas%2CTX
- NWS Atlanta forecast: https://forecast.weather.gov/MapClick.php?lat=33.7483&lon=-84.3911
- NWS Houston Hobby forecast: https://forecast.weather.gov/MapClick.php?lat=29.6913&lon=-95.2988
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- NWS KORD current conditions: https://tgftp.nws.noaa.gov/weather/current/KORD.html
- NWS KATL current conditions: https://tgftp.nws.noaa.gov/weather/current/KATL.html
- NWS KDAL current conditions: https://tgftp.nws.noaa.gov/weather/current/KDAL.html

## Repo Log Update

- Saved durable records locally: odds/latest.md, odds/history/2026-06-16T1412Z.md, alerts/2026-06-16T1412Z.md, data/market_snapshots/2026-06-16T1412Z.json, paper_trading/entries/PT-20260616-188.md, paper_trading/ledger_appends/2026-06-16T1412Z.csv, and paper_trading/maintenance/2026-06-16T1412Z.md.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- GitHub connector mirror target: rickyparkcinta/weather.
