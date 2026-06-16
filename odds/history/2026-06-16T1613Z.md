# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-16 16:13:16
- HKT: 2026-06-17 00:13:16
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Chicago/KORD Jun 16 68-69F/70-71F/72-73F/74-75F/76-77F/78-79F; Houston/KHOU Jun 16 78-79F/80-81F/82-83F/84-85F; Atlanta/KATL Jun 16 72-73F/74-75F/76-77F; Austin/KAUS Jun 17 88-89F/90-91F/92-93F/94-95F; Dallas/KDAL Jun 17 90-91F/92-93F/94-95F/96-97F; Hong Kong/HKO Jun 17 27C/28C/29C/30C.
- Official cross-checks: NWS point forecasts and current-condition/history pages for KORD, KHOU, KATL, KAUS, and KDAL; FlightAware METAR history for KATL; HKO current weather and 9-day forecast.
- Settlement/source note: U.S. Polymarket weather markets resolve using Wunderground station history, not NWS forecasts. NWS and METAR data are supporting evidence. Public Polymarket pages can be rounded, stale, thin, or internally inconsistent.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 16 72-73F YES

- Current price: displayed 16%; Buy Yes 17c / Buy No 86c. Nearby buckets: 74-75F 51% with Buy Yes 53c; 76-77F 32% with Buy Yes 34c.
- Implied probability: about 16%-17%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +17 to +27 percentage points versus Buy Yes.
- Confidence: low-to-medium-low.
- Classification: represented moderate-to-strong raw edge; no fresh duplicate.
- Key reasoning: KORD was 69.1F at 09:51 CDT and NWS O'Hare still forecast a high near 73F, with clouds gradually becoming mostly sunny and breezy southwest winds. That supports the 72-73F bucket more than the market's 74-75F/76-77F-heavy distribution, but late-day clearing and wind mixing can still push 74F+.
- Liquidity/practicality notes: Maintain PT-20260616-180/PT-20260616-184/PT-20260616-186/PT-20260616-188 only. No fifth same-bucket paper add because the current 17c quote is not cheaper than the 16c add-on and exposure is already concentrated.

### 2. Polymarket Austin/KAUS Jun 17 90-91F YES

- Current price: displayed 31%; Buy Yes 31c / Buy No 70c. Nearby buckets: 92-93F 40%; 94-95F 14%; 88-89F 9%.
- Implied probability: about 31%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: The NWS Austin-Bergstrom point forecast for Wednesday is high near 91F, mostly cloudy then gradually sunny, with heat index values as high as 103F. That keeps 90-91F live against the 92-93F market leader, while clearing timing still leaves 92F+ as a major miss path.
- Liquidity/practicality notes: Maintain PT-20260616-187 from 32c. No new paper entry for a 1c improvement because visible target-bucket volume is thin and the edge is already represented.

### 3. Polymarket Dallas/KDAL Jun 17 94-95F YES

- Current price: displayed 24% for 94-95F, with 92-93F leading around 41%.
- Implied probability: about 24%.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly +8 to +18 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS guidance near Dallas/Love Field keeps Wednesday centered around the mid-90s, with high near 95F and heat index values as high as 105F. The market still leans 92-93F despite the warmer official setup.
- Liquidity/practicality notes: Maintain PT-20260616-185 from 25c. No duplicate because the price is only slightly better than entry, public quote rows are thin, and 92-93F remains a plausible cloud/underperformance path.

### 4. Polymarket Hong Kong/HKO Jun 17 28C YES

- Current price: displayed 36%; Buy Yes 37c / Buy No 65c. Nearby buckets: 27C 31%; 29C 21%; 30C 14%.
- Implied probability: about 36%-37%.
- Estimated fair value: 40%-50%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: HKO's 00:00 HKT 9-day forecast for Jun 17 shows 25-28C, cloudy with occasional showers and squally thunderstorms, heavy showers at times, and high probability of significant rain. The 23:02 HKT current-weather bulletin had the Observatory at 26C with light rain, reinforcing a rain-capped profile, but 27.xC remains a very live downside path.
- Liquidity/practicality notes: Maintain PT-20260616-183 from 32%. Do not add at 37c; keep PT-20260616-179 HKO Jun 17 29C weakened/adverse-watch.

### 5. Polymarket Atlanta/KATL Jun 16 74-75F YES / 72-73F YES

- Current price: 72-73F displayed 51% with Buy Yes 57.9c; 74-75F displayed 38% with Buy Yes 40c; 76-77F 9%.
- Implied probability: about 38%-40% for 74-75F and about 51%-58% for 72-73F depending on displayed price versus buy quote.
- Estimated fair value: 74-75F roughly 30%-42%; 72-73F roughly 40%-52%.
- Estimated edge: mostly no edge at the current executable quotes.
- Confidence: low.
- Classification: represented maintenance / mostly fair.
- Key reasoning: KATL was 69F at 10:52 EDT and NWS forecasts high near 75F with showers and thunderstorms. That keeps 74-75F possible, but persistent rain/low clouds make 72-73F highly live and remove the earlier clean value from the 74-75F paper hedge.
- Liquidity/practicality notes: Maintain PT-20260616-182 from 38%; no duplicate at 40c.

### 6. Polymarket Houston/KHOU Jun 16 80-81F / 82-83F

- Current price: 80-81F displayed 42% with Buy Yes 51c / Buy No 67c; 78-79F displayed 33% with Buy Yes 38.9c; 82-83F displayed and Buy Yes 26c.
- Implied probability: about 42%-51% for 80-81F, 33%-39% for 78-79F, and 26% for 82-83F depending on quote used.
- Estimated fair value: 80-81F roughly 30%-42%; 78-79F roughly 28%-38%; 82-83F roughly 18%-28%.
- Estimated edge: no clear fresh edge after spread and forecast-risk haircut.
- Confidence: low.
- Classification: represented maintenance / no fresh edge.
- Key reasoning: KHOU was 78F at 09:53 CDT, NWS has a flood watch and forecasts high near 81F with heavy rain, and local hourly context points to a very narrow 78-81F range. The older 82-83F hedge idea is weaker now; the 80-81F executable ask is too high relative to fair.
- Liquidity/practicality notes: Maintain PT-20260616-181 from 26c only. No 82-83F paper hedge this run.

## Recommended Paper Trades

No new paper trade is recommended this run.

### Maintained / No Duplicate

- Maintain PT-20260616-180/PT-20260616-184/PT-20260616-186/PT-20260616-188 Chicago/KORD Jun 16 72-73F YES; block a fifth duplicate unless the price materially breaks lower and live station evidence remains supportive.
- Maintain PT-20260616-187 Austin/KAUS Jun 17 90-91F YES from 32c.
- Maintain PT-20260616-185 Dallas/KDAL Jun 17 94-95F YES from 25c.
- Maintain PT-20260616-183 HKO Jun 17 28C YES from 32%; keep PT-20260616-179 HKO Jun 17 29C weakened/adverse-watch.
- Maintain PT-20260616-182 Atlanta/KATL Jun 16 74-75F YES from 38%.
- Maintain PT-20260616-181 Houston/KHOU Jun 16 80-81F YES from 26c.

No real bets, trades, wallet actions, or order execution occurred.

## Risks and Invalidation Factors

- Exact weather buckets can lose by one degree even when the broad forecast thesis is right.
- U.S. markets resolve to Wunderground station history; NWS forecasts/current observations are supporting evidence only.
- Chicago is already heavily represented in the paper book, so duplicate discipline matters more than raw edge size.
- Austin and Dallas Jun 17 are thin forward-day markets; adjacent bucket miss paths remain large.
- Houston is now a narrow 78-81F rain-cooled range; wide spreads make apparent value hard to act on even in paper.
- HKO Jun 17 can still settle 27.xC if heavy rain caps temperatures or 29C if showers ease and daytime breaks develop.
- Atlanta's 74-75F thesis is weakened by persistent rain/low-cloud evidence and a market shift toward 72-73F.

## Sources Used

- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026/highest-temperature-in-atlanta-on-june-16-2026-76-77f
- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket Dallas Jun 17: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket HKO Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- NWS Chicago O'Hare forecast/current history: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9 and https://forecast.weather.gov/data/obhistory/KORD.html
- NWS Houston Hobby forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Austin-Bergstrom forecast: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- NWS Dallas/Love Field-area forecast: https://forecast.weather.gov/MapClick.php?lat=32.783&lon=-96.8
- NWS Atlanta forecast: https://forecast.weather.gov/MapClick.php?lat=33.7483&lon=-84.3911
- FlightAware KATL METAR history: https://www.flightaware.com/resources/airport/KATL/weather
- HKO current weather and 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm and https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update

- Saved durable records locally: odds/latest.md, odds/history/2026-06-16T1613Z.md, alerts/2026-06-16T1613Z.md, data/market_snapshots/2026-06-16T1613Z.json, and paper_trading/maintenance/2026-06-16T1613Z.md.
- Updated rolling paper-trading summary, watchlist, and edge notes.
- No new paper-trade entry or ledger append was created because no fresh paper trade cleared the threshold.
- GitHub connector mirror target: rickyparkcinta/weather.