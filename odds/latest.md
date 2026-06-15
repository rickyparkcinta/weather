# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 14:08:35
- HKT: 2026-06-15 22:08:35
- Scheduled invocation: 2026-06-15 22:07:00 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Same-day weather prediction markets: Polymarket Austin/KAUS, Houston/KHOU, Chicago/KORD, Dallas/KDAL, Atlanta/KATL, and Hong Kong/HKO Jun 15 high-temperature buckets.
- Forward weather contracts: Polymarket Atlanta/KATL, Houston/KHOU, Chicago/KORD, Dallas/KDAL, Austin/KAUS, Chicago/KORD, and Hong Kong/HKO Jun 16 high-temperature buckets.
- Official cross-checks: NWS point forecasts and observation histories for KAUS, KHOU, KORD, KDAL, and KATL; HKO regional readings and 9-day forecast.
- Quote-quality note: public prediction-market pages can lag, round, or differ from executable order books. This run records analysis and paper trading only.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 16 29C YES

- Current price: 29C 34% displayed / Buy Yes 35c. Nearby buckets: 28C 29% / Buy Yes 30c, 27C 16% / Buy Yes 17c, 30C 13% / Buy Yes 14c.
- Implied probability: about 34%-35%.
- Estimated fair value: 44%-56%.
- Estimated edge: roughly +9 to +21 points before one-decimal settlement and forecast-error haircuts.
- Confidence: medium-low.
- Classification: strongest fresh paper-only edge.
- Key reasoning: HKO's 19:50 HKT 9-day forecast for Tuesday shows a 25-29C range with cloudy weather, heavy showers, and squally thunderstorms. That official cap and monsoon-heavy setup make 29C the best-centered HKO bucket, while Polymarket still prices it in the mid-30s.
- Liquidity/practicality notes: event volume is about $20.3K and the target bucket shows about $2.5K volume. Still keep size tiny because any final HKO daily max below 29.0C or at/above 30.0C loses the exact bucket.

### 2. Polymarket Atlanta/KATL Jun 16 80-81F YES

- Current price: 80-81F 14% displayed / Buy Yes 17c. Nearby buckets: 78-79F 28% / Buy Yes 31c, 76-77F 27% / Buy Yes 27c, 74-75F 17% / Buy Yes 19c.
- Implied probability: about 14%-17%.
- Estimated fair value: 24%-36%.
- Estimated edge: roughly +7 to +19 points versus buy price, but already represented at 5c.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge, no duplicate.
- Key reasoning: NWS KATL still forecasts Tuesday high near 80F with mostly cloudy conditions and a 50% shower/thunderstorm chance. The market has repriced sharply from the prior 5c entry but still leaves the NWS-centered bucket below my fair range.
- Liquidity/practicality notes: maintain PT-20260615-168 from 5c. No fresh add after the price moved to 17c.

### 3. Polymarket Chicago/KORD Jun 16 74-75F YES

- Current price: 74-75F 33% displayed / Buy Yes 33c; 72-73F 33% / Buy Yes 34c; 70-71F 12% / Buy Yes 12c.
- Implied probability: about 33%.
- Estimated fair value: 34%-46%.
- Estimated edge: roughly +1 to +13 points.
- Confidence: low-to-medium-low.
- Classification: watch-only moderate/weak edge.
- Key reasoning: NWS O'Hare forecasts Tuesday high near 75F with showers and thunderstorms likely. The 74-75F bucket is official-forecast-centered, but 72-73F remains very live if rain arrives early or heating is muted.
- Liquidity/practicality notes: target volume is thin. No paper entry at 33c because the edge is not clearly better than HKO and exact-bucket risk is large.

### 4. Polymarket Dallas/KDAL Jun 16 90-91F YES

- Current price: 90-91F 37% displayed / Buy Yes 39c; 88-89F 36% / Buy Yes 36c; 86-87F 13% / Buy Yes 13c.
- Implied probability: about 37%-39%.
- Estimated fair value: 40%-52%.
- Estimated edge: small to moderate, roughly +1 to +13 points.
- Confidence: low-to-medium-low.
- Classification: watch-only / near fair.
- Key reasoning: NWS Dallas Love Field forecasts Tuesday high near 91F and mostly sunny conditions, so 90-91F is the official-forecast-centered bucket. The market already prices 88-91F as the core cluster, limiting the edge.
- Liquidity/practicality notes: no new Dallas paper position. Keep monitoring if 90-91F falls materially below the mid-30s or if guidance strengthens.

### 5. Polymarket Houston/KHOU Jun 16 82-83F YES

- Current price: 82-83F about 40% displayed / Buy Yes 41c; 80-81F 36% / Buy Yes 37c; 84-85F 13% / Buy Yes 13c.
- Implied probability: about 40%-41%.
- Estimated fair value: 40%-52%.
- Estimated edge: near fair to small positive.
- Confidence: medium-low.
- Classification: watch-only / near fair.
- Key reasoning: NWS Houston Hobby forecasts Tuesday high near 82F with showers and thunderstorms, 90% precipitation chance, and 2-3 inches of possible rainfall. That supports 82-83F but also leaves 80-81F live if storms suppress heating.
- Liquidity/practicality notes: no paper trade; the market has mostly found the right cluster.

### 6. Same-Day U.S. Maintenance Cluster

- Austin/KAUS Jun 15: 80-81F 47% / Buy Yes 48c and 82-83F 40% / Buy Yes 42c. KAUS has already printed 80.1F and NWS still shows high near 82F; maintain PT-20260615-166 but no chase.
- Houston/KHOU Jun 15: 84-85F 42% / Buy Yes 42c and 86-87F 29% / Buy Yes 29c. NWS high near 86F keeps 86-87F live, but storm timing and market pricing make this maintenance only.
- Dallas/KDAL Jun 15: 82-83F about 36%, 84-85F about 31%. NWS high near 84F and overcast 75-77F morning observations keep the represented 82-85F cluster live.
- Chicago/KORD Jun 15: NWS high near 76F; the market has moved toward 74-75F/76-77F. Maintain existing Chicago 76-77F only.
- Atlanta/KATL Jun 15: 84-85F remains near the market lead and NWS high near 84F; maintain existing Atlanta paper only.
- HKO Jun 15: regional readings at 21:00 HKT show the Observatory max still 29.9C; represented 29C YES / 30C NO exposure has converged and should not be chased.

## Recommended Paper Trades

Open one tiny paper-only position:

- Trade ID: PT-20260615-169
- Stance: BUY_YES on Polymarket Hong Kong/HKO Jun 16 highest temperature 29C.
- Simulated size: $5 notional.
- Entry price: Buy Yes 35c.
- Thesis: HKO's official 19:50 HKT forecast caps Tuesday at 29C with heavy showers and squally thunderstorms, while Polymarket prices the official-cap bucket at only 34%-35%.
- Confidence: medium-low.
- Invalidation risks: HKO final daily max stays 28.xC due heavier rain; a dry/heating window pushes the Observatory to 30.0C+; forecast updates warm or cool the cap; final Daily Extract handling differs from provisional expectations.

Maintenance actions:

- Maintain PT-20260615-168 Atlanta/KATL Jun 16 80-81F from 5c; no duplicate at 17c.
- Maintain same-day Austin/KAUS 80-81F, Houston/KHOU 86-87F and greater-than-85F, Chicago/KORD 76-77F, Dallas/KDAL 82-83F/84-85F cluster, Atlanta/KATL 84-85F, and HKO Jun 15 29C YES / 30C NO.

## Risks and Invalidation Factors

- Public Polymarket pages can be stale, rounded, or different from live executable order books.
- Exact-bucket temperature markets can lose even when the broad directional forecast is right.
- HKO contracts resolve on one-decimal Celsius daily max; 28.9C, 29.9C, and 30.0C are materially different outcomes.
- U.S. markets use Wunderground station histories, which can differ from NWS point forecasts and provisional observations.
- Texas storm timing can swing Austin, Houston, and Dallas several buckets.
- Atlanta Jun 16 has already repriced; adding more would concentrate exposure at worse terms.

## Sources Used

- Polymarket Hong Kong Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO regional readings: https://www.weather.gov.hk/textonly/v2/forecast/text_readings_v2_e.htm
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026/highest-temperature-in-atlanta-on-june-16-2026-76-77f
- NWS KATL forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS KATL observation history: https://forecast.weather.gov/data/obhistory/KATL.html
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026/highest-temperature-in-chicago-on-june-16-2026-72-73f
- NWS Chicago O'Hare forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS KORD observation history: https://forecast.weather.gov/data/obhistory/KORD.html
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- NWS Dallas Love Field forecast/current conditions: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=32.8929&lg=english&lon=-96.8641
- NWS KDAL observation history: https://forecast.weather.gov/data/obhistory/KDAL.html
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- NWS Houston Hobby forecast/current conditions: https://forecast.weather.gov/zipcity.php?inputstring=KHOU
- NWS KHOU observation history: https://forecast.weather.gov/data/obhistory/KHOU.html
- Polymarket Austin Jun 15: https://polymarket.com/event/highest-temperature-in-austin-on-june-15-2026
- NWS Austin-Bergstrom forecast/current conditions: https://forecast.weather.gov/zipcity.php?inputstring=KAUS
- NWS KAUS observation history: https://forecast.weather.gov/data/obhistory/KAUS.html

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T1408Z.md`.
- Created `alerts/2026-06-15T1408Z.md`.
- Created `data/market_snapshots/2026-06-15T1408Z.json`.
- Created `paper_trading/entries/PT-20260615-169.md`.
- Created `paper_trading/ledger_appends/2026-06-15T1408Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T1408Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- GitHub connector mirror target: `rickyparkcinta/weather`.
- No real trades or betting actions were executed.
