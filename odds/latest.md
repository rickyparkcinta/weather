# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 10:12:36
- HKT: 2026-06-15 18:12:36
- Scheduled invocation: 2026-06-15 18:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Prediction-market weather contracts: Robinhood Houston/KHOU, Austin/KAUS, Dallas/KDFW, Chicago/KMDW, and Atlanta/KATL Jun 15 threshold ladders; Polymarket Houston/KHOU, Austin/KAUS, Chicago/KORD, Atlanta/KATL, Dallas/KDAL, and Hong Kong/HKO Jun 15 exact buckets where readable.
- Official weather cross-checks: NWS point forecasts and observation histories for KHOU, KAUS, KATL, KORD, and Dallas/KDAL-area context; HKO regional readings for Hong Kong.
- Quote-quality note: public Robinhood and Polymarket/aggregator pages can lag, round, or expose malformed ladders. Houston and Chicago Robinhood threshold ladders showed internal non-monotonic prices this hour, so those quotes were haircut rather than treated as clean add triggers.

## Top Edges

### 1. Houston/KHOU Jun 15 Greater Than 85F YES / 86-87F Cluster

- Current price: Robinhood Houston showed greater than 85F at 30c, but the same page also showed greater than 86F at 34c and greater than 84F at 60c, an internally inconsistent threshold ladder. Polymarket search context had 84-85F leading near 33% and 86-87F around 28%.
- Implied probability: about 28%-30% on the live-looking Houston center/threshold expression, with quote-quality capped.
- Estimated fair value: 38%-50% for the 86F+ / 86-87F centered thesis after storm and source haircuts.
- Estimated edge: roughly +8 to +22 points if the 30c threshold quote is actually actionable; lower confidence because of the malformed public ladder.
- Confidence: low.
- Classification: represented moderate edge; no fresh add.
- Key reasoning: NWS Houston Hobby still gives Monday a high near 86F with showers/thunderstorms likely and 70% precipitation chance. KHOU was 81F at 04:53 CDT, so the station still needs meaningful daytime heating. Weather Underground's public forecast is cooler and storms could cap the high at 84-85F, while late clearing could still push 87F+.
- Liquidity/practicality notes: maintain PT-20260615-167 greater-than-85F YES and PT-20260615-165 86-87F YES only. The current 30c public threshold display is not clean enough for a duplicate paper add.

### 2. Polymarket Chicago/KORD Jun 15 76-77F YES

- Current price: Polymarket page context: 74-75F 43%; 76-77F 32%; Buy Yes 33c. Robinhood Chicago/KMDW threshold cross-check showed greater than 75F at 50c but also malformed lower-tail ordering for greater than 76F/77F.
- Implied probability: about 32%-33%.
- Estimated fair value: 40%-50%.
- Estimated edge: about +7 to +18 points before exact-bucket and station-source risk.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge.
- Key reasoning: NWS O'Hare points to a Monday high near 76F, which keeps 76-77F live even though 74-75F remains the market leader. The main risk is that cloud timing or lake/station differences cap the result in 74-75F.
- Liquidity/practicality notes: maintain PT-20260615-163 only. Current price is only 1c better than the 34c entry, below the duplicate-add threshold.

### 3. Austin/KAUS Jun 15 82-83F YES

- Current price: Robinhood Austin threshold ladder implies the 82-83F band near 46% using greater-than-81F at 74c minus greater-than-83F at 28c. Bitget/Polymarket mirror context showed 82-83F near 43%, 84-85F near 30%, and 80-81F near 29%.
- Implied probability: roughly 43%-46%.
- Estimated fair value: 42%-54%.
- Estimated edge: roughly flat to +11 points.
- Confidence: low-to-medium-low.
- Classification: watch/maintenance edge; no fresh add.
- Key reasoning: NWS Austin-Bergstrom has Monday high near 83F with showers/thunderstorms and heavy rainfall. KAUS fell to the low 70s after an 80.1F 00:53 CDT reading, so the book is now a live cap-versus-rebound problem. Existing paper already spans 80-81F and 84-85F.
- Liquidity/practicality notes: maintain PT-20260615-166 80-81F as the rain-cap hedge; keep PT-20260614-159/PT-20260615-162 84-85F adverse-watch.

### 4. Dallas/KDAL Jun 15 84-85F / 82-83F Cluster

- Current price: direct Polymarket KDAL exact-bucket refresh remained quote-limited. Robinhood Dallas is KDFW-resolved and showed greater than 83F at 53c, greater than 84F at 33c, and greater than 85F at 30c.
- Implied probability: exact KDAL probability not clean enough for a new trade; KDFW threshold context broadly supports 84F+ as live.
- Estimated fair value: roughly 34%-46% for KDAL 84-85F, with 82-83F still live under storm/cloud cap risk.
- Estimated edge: mild and represented.
- Confidence: low.
- Classification: represented maintenance only.
- Key reasoning: NWS Dallas-area forecast still shows a high near 84F with a 40% chance of showers/thunderstorms, mostly cloudy. KDAL was 75F at 04:53 CDT, so the day still requires substantial heating.
- Liquidity/practicality notes: maintain PT-20260614-160 84-85F and PT-20260614-161 82-83F. Do not substitute KDFW Robinhood prices directly for KDAL settlement.

### 5. Atlanta/KATL Jun 15 84-85F YES

- Current price: Polymarket search context had 84-85F at 45% and 82-83F at 36%. Robinhood Atlanta thresholds showed greater than 83F at 59c and greater than 84F at 32c.
- Implied probability: about 45% on Polymarket.
- Estimated fair value: 42%-50%.
- Estimated edge: roughly -3 to +5 points.
- Confidence: medium-low.
- Classification: represented near-fair maintenance.
- Key reasoning: NWS KATL still shows a high near 84F. The existing 31c paper entry remains favorable, but the current mid-40s Polymarket price is close to fair after exact-bucket risk.
- Liquidity/practicality notes: maintain PT-20260614-157 only.

### 6. Polymarket Hong Kong/HKO Jun 15 29C YES / 30C NO

- Current price: Polymarket showed 29C at 99.8c / 100%, 30C below 1%.
- Implied probability: about 99.8% for 29C.
- Estimated fair value: 99.0%-99.8% for the 29C YES / 30C NO cluster.
- Estimated edge: no fresh edge at current high prices.
- Confidence: medium for direction; low for incremental entry.
- Classification: represented, mostly converged.
- Key reasoning: HKO's 16:00 HKT regional table showed HK Observatory current 26.1C and max since midnight 29.9C. That strongly supports the existing paper thesis, but data remains provisional and a one-tenth-degree revision is the residual risk.
- Liquidity/practicality notes: maintain PT-20260614-155 and PT-20260615-164 only. Do not chase 99c+ paper entries.

## Recommended Paper Trades

No new paper-only trade is recommended this hour.

Maintenance actions:

- Maintain PT-20260615-167 Houston/KHOU greater-than-85F YES and PT-20260615-165 Houston/KHOU 86-87F YES. The thesis remains the best raw gap, but the public ladder is internally inconsistent this hour.
- Keep PT-20260614-156/PT-20260614-158 Houston 88-89F weakened/adverse-watch after the official center stayed nearer 86F.
- Maintain PT-20260615-163 Chicago/KORD 76-77F YES; no duplicate on a 1c improvement.
- Maintain PT-20260615-166 Austin/KAUS 80-81F YES; keep Austin 84-85F entries adverse-watch.
- Maintain Dallas/KDAL 84-85F and 82-83F cluster, Atlanta/KATL 84-85F, and HKO 29C YES / 30C NO only.

## Risks and Invalidation Factors

- Public market pages may lag executable books, display rounded prices, or expose stale/malformed thresholds.
- Weather contracts resolve on specified station/source histories; NWS inputs are strong evidence but not always the settlement source.
- Houston, Austin, and Dallas are storm-timing markets. Persistent rain/clouds can cap highs below the official forecast; late clearing can push them one bucket warmer.
- Exact-bucket contracts can lose even when the directional forecast is correct.
- HKO is close to settled in favor of 29C, but the 29.9C maximum is provisional and one-tenth-degree revisions matter.
- KDFW Robinhood Dallas prices are only a broad cross-check for KDAL Polymarket positions.

## Sources Used

- Robinhood Houston Jun 15 threshold market: https://robinhood.com/us/en/prediction-markets/climate/events/houston-daily-temperature-high-june-15-2026-jun-15-2026/
- NWS Houston Hobby forecast/current conditions: https://forecast.weather.gov/zipcity.php?inputstring=KHOU
- NWS KHOU current/observation history: https://tgftp.nws.noaa.gov/weather/current/KHOU.html and https://forecast.weather.gov/data/obhistory/KHOU.html
- Robinhood Austin Jun 15 threshold market: https://robinhood.com/us/en/prediction-markets/climate/events/austin-daily-temperature-high-june-15-2026-jun-15-2026/
- Bitget/Polymarket mirror Austin Jun 15: https://web3.bitget.com/predictions/event/highest-temperature-in-austin-on-june-15-2026
- NWS Austin-Bergstrom forecast/observations: https://forecast.weather.gov/zipcity.php?inputstring=KAUS and https://forecast.weather.gov/data/obhistory/KAUS.html
- Polymarket Chicago Jun 15: https://polymarket.com/event/highest-temperature-in-chicago-on-june-15-2026
- Robinhood Chicago Jun 15 threshold market: https://robinhood.com/us/en/prediction-markets/climate/events/chicago-daily-temperature-high-june-15-2026-jun-15-2026/
- NWS Chicago O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Atlanta Jun 15: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-15-2026
- Robinhood Atlanta Jun 15 threshold market: https://robinhood.com/us/en/prediction-markets/climate/events/atlanta-daily-temperature-high-june-15-2026-jun-15-2026/
- NWS KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Polymarket Hong Kong Jun 15: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-15-2026
- HKO regional readings: https://www.weather.gov.hk/textonly/v2/forecast/text_readings_v2_e.htm
- Robinhood Dallas Jun 15 KDFW threshold cross-check: https://robinhood.com/us/en/prediction-markets/climate/events/dallas-daily-temperature-high-june-15-2026-jun-15-2026/
- NWS Dallas-area forecast/current conditions: https://forecast.weather.gov/zipcity.php?inputstring=dallas%2CTX and https://forecast.weather.gov/MapClick.php?FcstType=text&lat=32.8929&lg=english&lon=-96.8641

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T1012Z.md`.
- Created `alerts/2026-06-15T1012Z.md`.
- Created `data/market_snapshots/2026-06-15T1012Z.json`.
- Created `paper_trading/maintenance/2026-06-15T1012Z.md`.
- Updated local rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No new paper-trading entry or ledger append was created.
- GitHub connector mirror status: succeeded for latest/history/alert/snapshot and paper-trading maintenance files.
- No real trades or betting actions were executed.
