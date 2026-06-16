# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-16 10:13:15
- HKT: 2026-06-16 18:13:15
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Dallas/KDAL Jun 17 90-91F/92-93F/94-95F; Hong Kong/HKO Jun 17 27C/28C/29C; Chicago/KORD Jun 16 72-73F/74-75F; Atlanta/KATL Jun 16 72-73F/74-75F/76-77F; Houston/KHOU Jun 16 80-81F/82-83F/84-85F; Austin/KAUS Jun 16 and Jun 17; Dallas/KDAL Jun 16; Hong Kong/HKO Jun 16 27C/28C.
- Official cross-checks: NWS point forecasts for KDAL, KAUS, KORD, KATL, and KHOU; NWS current observations for KAUS and KDAL; HKO current weather and HKO 9-day forecast.
- Settlement/source note: U.S. Polymarket weather markets resolve using Wunderground station history, not NWS forecasts. NWS is used as supporting evidence. Public Polymarket pages can be rounded, stale, thin, or internally inconsistent.

## Top Edges

### 1. Polymarket Dallas/KDAL Jun 17 94-95F YES

- Current price: 94-95F displayed around 24%; Buy Yes 25c. Nearby buckets: 92-93F around 38% / Buy Yes 39c, 90-91F around 27% / Buy Yes 28c, 96-97F around 5%.
- Implied probability: about 25%.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate fresh edge, low-liquidity.
- Key reasoning: The NWS Dallas Love Field point forecast for Wednesday shows a high near 95F, while the market still leads with 92-93F and leaves 94-95F near one-quarter probability. This is a clean forecast-center dislocation, but not a high-confidence one because early-market depth is very thin and some private/consumer forecast surfaces are cooler.
- Liquidity/practicality notes: Opened tiny paper-only PT-20260616-185, $5 simulated BUY_YES at a represented 25c entry. The target bucket showed only about $97 volume on the public page, so this is sized as a small paper probe only.

### 2. Polymarket Hong Kong/HKO Jun 17 28C YES

- Current price: 28C displayed around 33%; nearby 27C around 27%, 29C around the low 20s.
- Implied probability: about 33%.
- Estimated fair value: 40%-52%.
- Estimated edge: roughly +7 to +19 percentage points.
- Confidence: medium-low.
- Classification: represented moderate edge.
- Key reasoning: HKO's 9-day forecast still gives Jun 17 a 25-28C range with cloudy weather, showers, squally thunderstorms, and heavy showers at times. That keeps 28C the better-centered bucket after the earlier forecast shift away from 29C.
- Liquidity/practicality notes: Maintain PT-20260616-183 from 32%; no duplicate at 33c because the price is slightly worse than entry and 27C rain-cap risk remains live.

### 3. Polymarket Atlanta/KATL Jun 16 74-75F YES

- Current price: 74-75F displayed around 38%; 72-73F around 25% and 76-77F around 25%-26%.
- Implied probability: about 38%.
- Estimated fair value: 44%-54%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge.
- Key reasoning: NWS KATL forecasts a high near 74F with showers and thunderstorms likely through the day. That keeps 74-75F as the most centered bucket, though 72-73F remains a live rain/cloud cap and 76-77F is not dead if storms break later.
- Liquidity/practicality notes: Maintain PT-20260616-182 from 38%; no duplicate at the same price with existing Atlanta exposure.

### 4. Polymarket Chicago/KORD Jun 16 72-73F YES

- Current price: 72-73F displayed around 26%; 74-75F leads around 50%-51%.
- Implied probability: about 26%.
- Estimated fair value: 33%-43%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge.
- Key reasoning: NWS O'Hare keeps Tuesday high near 73F with showers/thunderstorms likely before 2 p.m. The 74-75F bucket still leads, but official guidance keeps 72-73F live.
- Liquidity/practicality notes: Maintain PT-20260616-180 and PT-20260616-184 only; no same-price duplicate after the 26c add-on.

### 5. Polymarket Austin/KAUS Jun 17 90-91F YES

- Current price: 90-91F displayed around 33%; 92-93F leads around 41%.
- Implied probability: about 33%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Austin-Bergstrom shows Wednesday high near 91F, while the market leans slightly warmer at 92-93F. The edge is plausible, but not clean enough for a new paper entry because both 90-91F and 92-93F are well represented by the public price distribution and target volume is thin.
- Liquidity/practicality notes: Watch only.

### 6. Polymarket Houston/KHOU Jun 16 80-81F / 82-83F

- Current price: 82-83F leads around 41%-42%; 80-81F around 27%-28%; 84-85F around 22%-23%.
- Estimated fair value: 82-83F roughly 36%-46%; 80-81F roughly 24%-34%.
- Confidence: low.
- Classification: mostly fair / maintenance only.
- Key reasoning: NWS Houston Hobby forecasts high near 82F with showers, thunderstorms, and heavy rain possible. That supports the market's current 80-83F center and weakens the earlier 80-81F underpricing.
- Liquidity/practicality notes: Maintain PT-20260616-181 only; no duplicate.

### 7. Hong Kong/HKO Jun 16 27C YES and Dallas/KDAL Jun 16

- HKO Jun 16 current price: 27C around 97%, with 28C around 3%.
- KDAL Jun 16 context: NWS Dallas Love Field high near 90F; market already centered around 90-91F and 88-89F.
- Classification: no fresh edge.
- Key reasoning: HKO Jun 16 has mostly converged after the 17:02 HKT bulletin showed 26C, rain, 92% humidity, and active thunderstorm/heavy-rain warnings. Dallas Jun 16 is priced close to the official forecast center.

## Recommended Paper Trades

Opened one new simulated paper trade:

- PT-20260616-185: BUY_YES Polymarket Dallas/KDAL Jun 17 94-95F, $5 paper notional, represented entry 25c, fair 32%-42%, confidence low-to-medium-low. Thesis: NWS Dallas Love Field centers Wednesday near 95F while the new Polymarket board leaves 94-95F at 24%-25% behind 92-93F. Invalidation risks: private/consumer guidance verifies closer to 92-93F; clouds or storms cap heating; full sun pushes 96F+; very thin early-market volume makes the public quote less reliable.

No real bets, trades, wallet actions, or order execution occurred.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- U.S. markets resolve to Wunderground station history; NWS forecasts and observations are supporting evidence only.
- Dallas Jun 17 has very thin public target-bucket volume, so quote reliability is lower than the displayed percentage suggests.
- HKO Jun 17 remains exposed to a 27.xC rain cap or a later forecast warm-up back toward 29C.
- Chicago and Atlanta Jun 16 are one- or two-degree bucket fights with high sensitivity to storm timing.
- Houston Jun 16 no longer shows a clean underpricing after the market moved toward 82-83F.

## Sources Used

- Polymarket Dallas Jun 17: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket HKO Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket Austin Jun 16: https://polymarket.com/event/highest-temperature-in-austin-on-june-16-2026
- Polymarket HKO Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- NWS KDAL forecast: https://forecast.weather.gov/MapClick.php?lat=32.85416&lon=-96.85506
- NWS KAUS forecast/current observations: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- NWS KORD forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS KHOU forecast: https://forecast.weather.gov/MapClick.php?lat=29.6913&lon=-95.2988
- HKO current weather bulletin: https://www.hko.gov.hk/textonly/forecast/englishwx.htm
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update

- Saved durable records locally: odds/latest.md, odds/history/2026-06-16T1013Z.md, alerts/2026-06-16T1013Z.md, data/market_snapshots/2026-06-16T1013Z.json, paper_trading/entries/PT-20260616-185.md, paper_trading/ledger_appends/2026-06-16T1013Z.csv, and paper_trading/maintenance/2026-06-16T1013Z.md.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in durable memory.
- New paper-only entry: PT-20260616-185 Dallas/KDAL Jun 17 94-95F YES at represented 25c, $5 simulated notional.
- GitHub connector mirror target: rickyparkcinta/weather.
