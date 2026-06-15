# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 00:16:15
- HKT: 2026-06-15 08:16:15
- Scheduled invocation: 2026-06-15 08:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket daily temperature markets: Hong Kong/HKO Jun 15, Houston/KHOU Jun 15, Dallas/KDAL Jun 15, Chicago/KORD Jun 15, Atlanta/KATL Jun 15, and Austin/KAUS Jun 15.
- Official weather cross-checks: HKO current weather and 9-day forecast; NWS point forecasts/current conditions for KHOU, KDAL, KORD, KATL, and KAUS.
- Quote-quality note: public Polymarket pages can lag executable order books or disagree by localized route. Confidence is capped where order-book depth was not independently executable-verified.

## Top Edges

### 1. Polymarket Austin/KAUS Jun 15 84-85F YES

- Current price: displayed 13%; Buy Yes 19c. Market leaders on the event page are 82-83F at 37% and 80-81F at 28%.
- Implied probability: about 19% at the ask.
- Estimated fair value: 28%-40%.
- Estimated edge: about +9 to +21 percentage points after rain-cap and thin-depth penalties.
- Confidence: low-to-medium-low.
- Classification: fresh moderate paper-only edge, but liquidity-limited.
- Key reasoning: NWS Austin-Bergstrom keeps Monday's forecast high near 84F, with showers and possibly a thunderstorm, an 80% precipitation chance, and a Flood Watch. The market has repriced toward 80-83F despite the official center remaining 84F. This makes 84-85F underweighted if rainfall pauses enough for the station to reach the forecast high.
- Liquidity/practicality notes: target-bucket volume is very thin, and PT-20260614-159 already holds 84-85F from 22c. Opened only a tiny $5 simulated add-on because the quote moved materially lower from the prior 29c context and below the 22c paper entry.

### 2. Polymarket Hong Kong/HKO Jun 15 29C YES

- Current price: displayed about 44%; 30C has moved up to roughly the mid-30s.
- Implied probability: about 44%.
- Estimated fair value: 50%-62%.
- Estimated edge: about +6 to +18 points after trimming for 30.0C risk.
- Confidence: medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: HKO's 07:50 HKT 9-day forecast keeps Jun 15 at 26-29C with cloudy weather, occasional showers, heavy showers at times, and a few squally thunderstorms. The 07:11 HKT current bulletin showed 29C at the Observatory with light rain and a Thunderstorm Warning effective until 08:30. That keeps 29C live, but the day is young and 30C is now a very live adjacent miss.
- Liquidity/practicality notes: maintain PT-20260614-155 from 43c. No duplicate while current quote is not cheaper and 30C repriced upward.

### 3. Polymarket Houston/KHOU Jun 15 88-89F YES

- Current price: last readable page context around 13-15c, with the event page led by 84-85F at 33% and 86-87F at 28%.
- Implied probability: about 13%-15%.
- Estimated fair value: 20%-32%.
- Estimated edge: about +5 to +19 points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS Hobby forecasts Monday high near 88F, with showers and thunderstorms likely mainly from 1pm to 4pm and a 70% precipitation chance. The market still centers lower, so 88-89F remains underweighted if the station heats before the heavier rain.
- Liquidity/practicality notes: PT-20260614-156 and PT-20260614-158 already represent this thesis at 14c and 9c. No new paper add above the 9c add-on.

### 4. Polymarket Atlanta/KATL Jun 15 84-85F YES

- Current price: displayed 36%; next closest 82-83F at 34%.
- Implied probability: about 36%.
- Estimated fair value: 42%-52%.
- Estimated edge: about +6 to +16 points.
- Confidence: medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS KATL forecasts Monday high near 84F with only a 20% chance of showers and thunderstorms after 2pm. That keeps 84-85F centered, with 82-83F the main cooler miss if clouds/rain linger.
- Liquidity/practicality notes: maintain PT-20260614-157 from 31c. Current price is worse than entry.

### 5. Polymarket Dallas/KDAL Jun 15 84-85F YES

- Current price: canonical Polymarket page context shows 82-83F and 84-85F around 31%; a localized page surfaced conflicting lower-cluster pricing with 80-81F leading.
- Implied probability: about 31%.
- Estimated fair value: 36%-48%.
- Estimated edge: about +5 to +17 points before quote-conflict penalties.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS Dallas/Love Field keeps Monday cloudy with a high near 84F and a 30% chance of showers and thunderstorms mainly before 10am. That supports 84-85F as the better-centered Dallas bucket, but quote conflict and rain/cloud timing keep confidence capped.
- Liquidity/practicality notes: maintain PT-20260614-160 from 25c. Treat PT-20260614-161 82-83F as an adjacent cooler hedge only.

### 6. Polymarket Chicago/KORD Jun 15 76-77F YES

- Current price: displayed about 38%; 74-75F is close behind in the mid/high 30s.
- Implied probability: about 38%.
- Estimated fair value: 42%-54%.
- Estimated edge: about +4 to +16 points.
- Confidence: low-to-medium-low.
- Classification: watch-only.
- Key reasoning: NWS O'Hare forecasts Monday high near 76F with increasing clouds and west wind 5-15 mph. The target is aligned with the forecast high, but 74-75F remains nearly co-favored and the target bucket is thin.
- Liquidity/practicality notes: no paper position opened. Require a cheaper quote or clearer station-specific evidence.

## Recommended Paper Trades

Opened one new paper-only position:

- Stance: BUY_YES on Polymarket Austin/KAUS Jun 15 84-85F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 19c; implied probability about 19%.
- Estimated fair value: 28%-40%.
- Thesis: NWS still centers Monday near 84F while Polymarket repriced the exact bucket down and shifted the board toward 80-83F.
- Confidence: low-to-medium-low.
- Invalidation risks: all-day rain caps KAUS at 80-83F; late dry breaks push 86F+; Wunderground final station history differs from the NWS point forecast; public Polymarket quote is stale or too thin to represent practical depth.

Maintenance actions:

- Maintain PT-20260614-155 Hong Kong/HKO Jun 15 29C YES from 43c; no duplicate while 30C risk is rising.
- Maintain PT-20260614-156 and PT-20260614-158 Houston/KHOU Jun 15 88-89F YES; no duplicate above the 9c add-on.
- Maintain PT-20260614-157 Atlanta/KATL Jun 15 84-85F YES from 31c.
- Maintain PT-20260614-160 Dallas/KDAL Jun 15 84-85F YES from 25c.
- Maintain PT-20260614-159 Austin/KAUS Jun 15 84-85F YES from 22c and add PT-20260615-162 as a tiny lower-price add-on.
- Maintain PT-20260614-161 Dallas/KDAL Jun 15 82-83F YES as an adjacent cooler hedge.
- Keep Chicago/KORD Jun 15 76-77F watch-only.

## Risks and Invalidation Factors

- Exact one-degree or one-decimal bucket misses dominate every listed market.
- Public Polymarket pages may lag executable order books, and localized pages have disagreed in prior runs.
- Austin, Houston, Dallas, and Atlanta are storm-timing markets; earlier or later rain can shift the winning bucket by several degrees.
- HKO Jun 15 is now mostly a 29C versus 30C question; a brief dry or sunny break can invalidate the 29C paper thesis.
- Chicago is a narrow 74-77F cluster; small changes in cloud timing, mixing, or lake influence can flip 74-75F versus 76-77F.
- US airport temperature markets resolve from Wunderground station histories; NWS pages are strong proxies but not the final settlement source.

## Sources Used

- Polymarket Austin Jun 15: https://polymarket.com/event/highest-temperature-in-austin-on-june-15-2026
- NWS Austin/KAUS forecast: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- Polymarket Hong Kong Jun 15: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-15-2026
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- Polymarket Houston Jun 15: https://polymarket.com/event/highest-temperature-in-houston-on-june-15-2026
- NWS Houston/Hobby forecast: https://forecast.weather.gov/MapClick.php?lat=29.6375&lon=-95.2825
- Polymarket Dallas Jun 15: https://polymarket.com/event/highest-temperature-in-dallas-on-june-15-2026
- NWS Dallas/Love Field forecast: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=32.8929&lg=english&lon=-96.8641
- Polymarket Chicago Jun 15: https://polymarket.com/event/highest-temperature-in-chicago-on-june-15-2026
- NWS O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Atlanta Jun 15: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-15-2026
- NWS Atlanta/KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T0016Z.md`.
- Created `alerts/2026-06-15T0016Z.md`.
- Created `data/market_snapshots/2026-06-15T0016Z.json`.
- Created `paper_trading/entries/PT-20260615-162.md`.
- Created `paper_trading/ledger_appends/2026-06-15T0016Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T0016Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No real trades or betting actions were executed.