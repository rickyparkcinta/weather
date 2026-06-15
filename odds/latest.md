# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 13:08:12
- HKT: 2026-06-15 21:08:12
- Scheduled invocation: 2026-06-15 21:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Same-day prediction-market weather contracts: Polymarket Austin/KAUS, Houston/KHOU, Chicago/KORD, Dallas/KDAL, Atlanta/KATL, and Hong Kong/HKO Jun 15 high-temperature buckets.
- Forward weather contracts: Polymarket Atlanta/KATL, Houston/KHOU, Chicago/KORD, and Austin/KAUS Jun 16 high-temperature buckets.
- Official cross-checks: NWS point forecasts and observation histories for KAUS, KHOU, KORD, KDAL, and KATL; HKO regional readings and 9-day forecast.
- Quote-quality note: public prediction-market pages may lag, round, or differ from executable depth. This run records analysis and paper trading only.

## Top Edges

### 1. Polymarket Atlanta/KATL Jun 16 80-81F YES

- Current price: 80-81F 5% / Buy Yes 5c. Nearby buckets: 76-77F 31% / Buy Yes 32c, 74-75F 26% / Buy Yes 29c, 78-79F 16% / Buy Yes 16c.
- Implied probability: about 5%.
- Estimated fair value: 24%-36%.
- Estimated edge: roughly +19 to +31 points before source and liquidity haircuts.
- Confidence: low-to-medium-low.
- Classification: strongest fresh paper-only edge.
- Key reasoning: NWS KATL forecasts Tuesday high near 80F with mostly cloudy conditions and a 50% shower/thunderstorm chance, while the new market heavily favors cooler 74-77F buckets. If the official station reaches the NWS point forecast, 80-81F is meaningfully underpriced.
- Liquidity/practicality notes: target bucket shows about $1.6K displayed volume, but the market is new and public depth may be thin. Open only a tiny paper position.

### 2. Polymarket Austin/KAUS Jun 15 80-81F YES

- Current price: 80-81F 64% / Buy Yes 66c; 82-83F 18% / Buy Yes 18c; 84-85F 11% / Buy Yes 12c.
- Implied probability: about 64%-66%.
- Estimated fair value: 62%-76%.
- Estimated edge: small; already represented.
- Confidence: medium-low.
- Classification: represented maintenance edge.
- Key reasoning: KAUS printed 80.1F shortly after midnight, then fell to 71.1F at 06:53 CDT under light rain/fog after heavy rain and thunderstorms. NWS still has a high near 82F, so 82-83F remains live, but the market has now repriced heavily toward the existing 80-81F paper thesis.
- Liquidity/practicality notes: maintain PT-20260615-166 from 33c. Do not chase a same-day bucket at 66c.

### 3. Polymarket Houston/KHOU Jun 15 86-87F YES

- Current price: 86-87F 29% / Buy Yes 30c; 84-85F 37c; 82-83F 30c.
- Implied probability: about 29%-30%.
- Estimated fair value: 32%-42%.
- Estimated edge: about +2 to +12 points.
- Confidence: low-to-medium-low.
- Classification: represented moderate maintenance edge.
- Key reasoning: NWS Houston Hobby keeps today's high near 86F with showers and thunderstorms likely. KHOU was 81F at 06:53 CDT after reaching 82F overnight, so 86-87F remains plausible if there is any heating window before afternoon storms.
- Liquidity/practicality notes: maintain PT-20260615-165 86-87F and PT-20260615-167 greater-than-85F only. No duplicate at roughly the same price as the 30c exact-bucket entry.

### 4. Polymarket Chicago/KORD Jun 15 76-77F YES

- Current price: 76-77F 41% / Buy Yes 42c; 74-75F leads at 45% / Buy Yes 47c.
- Implied probability: about 41%-42%.
- Estimated fair value: 40%-50%.
- Estimated edge: near fair to small positive.
- Confidence: low-to-medium-low.
- Classification: represented maintenance edge.
- Key reasoning: NWS O'Hare still forecasts a high near 76F with increasing clouds and west wind. KORD was 61F at 07:51 CDT, so 74-75F remains very live, but the official forecast still gives 76-77F a fair share.
- Liquidity/practicality notes: maintain PT-20260615-163 from 34c. The edge has narrowed and current price is well above entry.

### 5. Polymarket Dallas/KDAL Jun 15 84-85F YES

- Current price: 84-85F 31% / Buy Yes 33c; 82-83F 36% / Buy Yes 37c; 86-87F 16% / Buy Yes 16.6c.
- Implied probability: about 31%-33% for 84-85F.
- Estimated fair value: 30%-40%.
- Estimated edge: small and represented.
- Confidence: low.
- Classification: represented weak-to-moderate maintenance edge.
- Key reasoning: NWS Dallas Love Field forecasts a high near 84F with showers/storms mainly before 4pm. KDAL was 75F at 07:53 CDT under overcast skies, keeping 82-83F live, but 84-85F remains the official-forecast-centered bucket.
- Liquidity/practicality notes: maintain PT-20260614-160 84-85F and PT-20260614-161 82-83F. No fresh Dallas add.

### 6. Polymarket Atlanta/KATL Jun 15 84-85F YES

- Current price: 84-85F 47% / Buy Yes 49c; 82-83F 37% / Buy Yes 38c.
- Implied probability: about 47%-49%.
- Estimated fair value: 44%-54%.
- Estimated edge: near fair.
- Confidence: medium-low.
- Classification: represented near-fair maintenance edge.
- Key reasoning: NWS KATL forecasts today's high near 84F, and KATL was 73F at 08:52 EDT. The market has mostly caught up to the forecast-centered 84-85F bucket.
- Liquidity/practicality notes: maintain PT-20260614-157 from 31c. No add near 49c.

### 7. Hong Kong/HKO Jun 15 29C YES / 30C NO

- Current price: 29C 99.9%-100%; 30C below 1%.
- Implied probability: effectively 99%+ for the represented 29C/not-30C thesis.
- Estimated fair value: 99.2%-99.8% pending final data treatment.
- Estimated edge: no fresh edge.
- Confidence: medium for direction; low for incremental entry.
- Classification: represented and converged.
- Key reasoning: HKO regional readings at 21:00 HKT show HK Observatory current 25.7C and max since midnight 29.9C. The public market has already priced the 29C outcome in.
- Liquidity/practicality notes: maintain PT-20260614-155 29C YES and PT-20260615-164 30C NO only. Do not chase 99c+.

### Watch-Only Cross-Checks

- Houston/KHOU Jun 16 82-83F: Buy Yes 41c versus fair 36%-48%; near fair under NWS high near 82F and 90% storm/rain setup.
- Chicago/KORD Jun 16 74-75F: Buy Yes 33c versus fair 32%-44%; near fair with NWS high near 75F and storms likely.
- Austin/KAUS Jun 16 86-87F: about 36%-37% versus fair 36%-46%; near fair with NWS high near 86F and showers/storms mainly before 4pm.

## Recommended Paper Trades

Open one tiny paper-only position:

- Trade ID: PT-20260615-168
- Stance: BUY_YES on Polymarket Atlanta/KATL Jun 16 highest temperature 80-81F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 5c.
- Thesis: NWS KATL is centered near 80F for Tuesday while the market prices 80-81F like a tail behind 74-77F. The quote is cheap enough for a small paper entry despite the new-market and exact-bucket risks.
- Confidence: low-to-medium-low.
- Invalidation risks: Tuesday forecast revises cooler; clouds/showers cap KATL in the 74-79F range; Wunderground final history differs from NWS point guidance; public quote is stale or shallow.

Maintenance actions:

- Maintain Austin/KAUS 80-81F YES; no chase after repricing to the mid-60s.
- Maintain Houston/KHOU 86-87F YES and greater-than-85F YES; older Houston 88-89F entries remain adverse-watch.
- Maintain Chicago/KORD 76-77F YES, Dallas/KDAL 84-85F and 82-83F cluster, Atlanta/KATL Jun 15 84-85F, and HKO 29C YES / 30C NO.

## Risks and Invalidation Factors

- Public prediction-market pages can be stale, rounded, or different from live executable order books.
- Exact-bucket temperature markets can lose even when the directional forecast is broadly right.
- Wunderground settlement data can differ from NWS point forecasts and current observations.
- Atlanta Jun 16 is a new market; displayed volume/depth may not support much size.
- Texas storm timing can swing Austin/Houston/Dallas several buckets.
- HKO 29.9C is provisional until final Daily Extract publication.

## Sources Used

- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026/highest-temperature-in-atlanta-on-june-16-2026-76-77f
- NWS KATL forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS KATL observation history: https://forecast.weather.gov/data/obhistory/KATL.html
- Polymarket Austin Jun 15: https://polymarket.com/event/highest-temperature-in-austin-on-june-15-2026
- NWS Austin-Bergstrom forecast/current conditions: https://forecast.weather.gov/zipcity.php?inputstring=KAUS
- NWS KAUS observation history: https://forecast.weather.gov/data/obhistory/KAUS.html
- Polymarket Houston Jun 15: https://polymarket.com/event/highest-temperature-in-houston-on-june-15-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- NWS Houston Hobby forecast/current conditions: https://forecast.weather.gov/zipcity.php?inputstring=KHOU
- NWS KHOU observation history: https://forecast.weather.gov/data/obhistory/KHOU.html
- Polymarket Chicago Jun 15: https://polymarket.com/event/highest-temperature-in-chicago-on-june-15-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026/highest-temperature-in-chicago-on-june-16-2026-72-73f
- NWS Chicago O'Hare forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS KORD observation history: https://forecast.weather.gov/data/obhistory/KORD.html
- Polymarket Dallas Jun 15: https://polymarket.com/event/highest-temperature-in-dallas-on-june-15-2026
- NWS Dallas Love Field forecast/current conditions: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=32.8929&lg=english&lon=-96.8641
- NWS KDAL observation history: https://forecast.weather.gov/data/obhistory/KDAL.html
- Polymarket Hong Kong Jun 15: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-15-2026
- HKO regional readings: https://www.weather.gov.hk/textonly/v2/forecast/text_readings_v2_e.htm
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- Polymarket temperature board: https://polymarket.com/weather/temperature

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T1308Z.md`.
- Created `alerts/2026-06-15T1308Z.md`.
- Created `data/market_snapshots/2026-06-15T1308Z.json`.
- Created `paper_trading/entries/PT-20260615-168.md`.
- Created `paper_trading/ledger_appends/2026-06-15T1308Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T1308Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- GitHub connector mirror target: `rickyparkcinta/weather`.
- No real trades or betting actions were executed.
