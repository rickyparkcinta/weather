# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 04:13:22
- HKT: 2026-06-15 12:13:22
- Scheduled invocation: 2026-06-15 12:07:00 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket daily temperature markets: Hong Kong/HKO Jun 15, Austin/KAUS Jun 15, Chicago/KORD Jun 15, Houston/KHOU Jun 15, Atlanta/KATL Jun 15, and Dallas/KDAL Jun 15.
- Official weather cross-checks: HKO current weather, local forecast, regional max-since-midnight readings, and NWS point forecasts for KAUS, KORD, KHOU, KATL, and KDAL.
- Quote-quality note: Polymarket prices were read from public/search-rendered pages. These can lag executable order books, so all fair-value estimates are haircut for stale-page and depth risk.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 15 30C NO

- Current price: 30C displayed 77%; Buy Yes 79c; Buy No 26c. Nearby: 29C displayed 7% / Buy Yes 7c, 31C displayed 10.8% / Buy Yes 11.9c.
- Implied probability: about 26% for NO on 30C, before spread effects.
- Estimated fair value: 35%-50% for NO on 30C.
- Estimated edge: about +9 to +24 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate-to-strong paper edge, very boundary-fragile.
- Key reasoning: HKO regional readings at 12:00 HKT showed the Hong Kong Observatory at 28.5C with a provisional max/min since midnight of 29.9C / 26.5C. HKO also had heavy rain, amber rainstorm, and thunderstorm conditions, and the local forecast called for occasional heavy showers and squally thunderstorms this afternoon and tonight. The market is pricing 30C as if one more 0.1C print is highly likely; the evidence supports that risk, but not enough for 30C to be a 77%-79% favorite.
- Liquidity/practicality notes: volume is much better than the US station buckets, but the thesis can fail on a single 30.0C print. Opened only a tiny $5 simulated position, PT-20260615-164, and kept existing PT-20260614-155 29C YES open.

### 2. Polymarket Austin/KAUS Jun 15 84-85F YES

- Current price: displayed 16%; Buy Yes 18c. Cooler leader: 82-83F displayed 38%; Buy Yes 39c.
- Implied probability: about 18%.
- Estimated fair value: 28%-38%.
- Estimated edge: about +10 to +20 points after all-day rain, exact-bucket, and quote-quality penalties.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS Austin-Bergstrom still forecasts Monday high near 84F with showers and thunderstorms likely. The market remains centered lower, but official station guidance still sits in the 84-85F bucket.
- Liquidity/practicality notes: maintain PT-20260614-159 from 22c and PT-20260615-162 from 19c. The current quote is only 1c below the latest entry and does not justify another add.

### 3. Polymarket Chicago/KORD Jun 15 76-77F YES

- Current price: public pages conflict around 35%-38%; most recent event-context read makes 74-75F the leader near 43% and 76-77F next near 35%.
- Implied probability: about 35%-38%.
- Estimated fair value: 44%-54%.
- Estimated edge: about +6 to +19 points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS O'Hare still points near 76F to 77F for Monday. The cooler 74-75F bucket is live, but the market appears to have discounted 76-77F more than the official forecast warrants.
- Liquidity/practicality notes: maintain PT-20260615-163 from 34c. No duplicate above the existing basis.

### 4. Polymarket Houston/KHOU Jun 15 88-89F YES

- Current price: displayed 12%; Buy Yes 14c. Leaders: 84-85F displayed 32%; 86-87F displayed 25%.
- Implied probability: about 14%.
- Estimated fair value: 20%-30%.
- Estimated edge: about +6 to +16 points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS Hobby forecasts high near 88F with showers and thunderstorms likely. Rain can cap the station in the mid-80s, but 88-89F still looks underweighted if storms arrive later or breaks in cloud cover allow heating.
- Liquidity/practicality notes: maintain PT-20260614-156 at 14c and PT-20260614-158 at 9c. No add because the current quote is not cheaper than the first entry and is well above the add-on basis.

### 5. Polymarket Atlanta/KATL Jun 15 84-85F YES

- Current price: displayed 38%; Buy Yes 39c. Nearby leader: 82-83F displayed 40%; Buy Yes 41c.
- Implied probability: about 39%.
- Estimated fair value: 42%-50%.
- Estimated edge: about +3 to +11 points.
- Confidence: medium-low.
- Classification: represented mild-to-moderate edge; no duplicate.
- Key reasoning: NWS Hartsfield-Jackson forecasts high near 84F with only a 20% afternoon thunderstorm chance. That keeps 84-85F co-live with 82-83F.
- Liquidity/practicality notes: maintain PT-20260614-157 from 31c. Current quote is too far above entry to add.

### 6. Polymarket Dallas/KDAL Jun 15 84-85F YES

- Current price: 84-85F displayed 32%; Buy Yes 34c. Adjacent cooler hedge: 82-83F displayed 31%; Buy Yes 33c.
- Implied probability: about 34% for 84-85F.
- Estimated fair value: 36%-46%.
- Estimated edge: about +2 to +12 points.
- Confidence: low-to-medium-low.
- Classification: represented mild edge; no duplicate.
- Key reasoning: NWS Dallas/Love Field keeps Monday near 84F with shower risk mainly before 10am. Both 82-83F and 84-85F remain live; 84-85F remains the better-centered held bucket.
- Liquidity/practicality notes: maintain PT-20260614-160 from 25c and PT-20260614-161 as an adjacent cooler hedge. No fresh add.

## Recommended Paper Trades

Opened one new paper-only position:

- Trade ID: PT-20260615-164
- Stance: BUY_NO on Polymarket Hong Kong/HKO Jun 15 30C
- Simulated size: $5 notional
- Entry price: Buy No 26c
- Thesis: HKO's 12:00 HKT regional table showed the Observatory max since midnight at 29.9C, with current temperature down to 28.5C and heavy rain/thunderstorm conditions ongoing. The market's 30C price implies a very high chance of at least one 30.0C print, but the official nowcast and low-solar/rain setup leave meaningful probability that the day stays in the 29C bucket, or less likely overshoots beyond 30C.
- Confidence: low-to-medium-low
- Invalidation risks: any HKO 30.0C to 30.9C print; public Polymarket price may be stale; provisional HKO regional max can revise; rapid afternoon clearing can restore heating.

Maintenance actions:

- Maintain PT-20260614-155 Hong Kong/HKO Jun 15 29C YES from 43c as a high-volatility live boundary position, not as a fresh add.
- Maintain PT-20260614-159 and PT-20260615-162 Austin/KAUS Jun 15 84-85F YES.
- Maintain PT-20260615-163 Chicago/KORD Jun 15 76-77F YES.
- Maintain PT-20260614-156 and PT-20260614-158 Houston/KHOU Jun 15 88-89F YES.
- Maintain PT-20260614-157 Atlanta/KATL Jun 15 84-85F YES.
- Maintain PT-20260614-160 Dallas/KDAL Jun 15 84-85F YES and PT-20260614-161 Dallas/KDAL Jun 15 82-83F YES as adjacent cooler hedge.

## Risks and Invalidation Factors

- HKO is a one-tenth-degree boundary market. The 30C NO thesis loses on any final 30.0C to 30.9C print at the Observatory.
- The HKO 12:00 HKT max of 29.9C is provisional and leaves no cushion below 30.0C.
- US airport markets are exact two-degree buckets; a one-degree Wunderground station-history difference can flip outcomes.
- Public Polymarket pages/search snippets may lag executable order books, and this run did not verify live depth.
- Austin, Houston, and Dallas depend heavily on storm timing; earlier rain favors cooler buckets, while delayed storms favor warmer buckets.
- Chicago is a 74-77F setup; cloud timing and station rounding can decide 74-75F versus 76-77F.
- Atlanta remains a narrow 82-85F setup; earlier clouds favor 82-83F, while cleaner sun favors 84-85F or warmer.

## Sources Used

- Polymarket Hong Kong Jun 15: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-15-2026
- HKO regional readings: https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm
- HKO current report API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en
- HKO local forecast API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en
- Polymarket Austin Jun 15: https://polymarket.com/event/highest-temperature-in-austin-on-june-15-2026
- NWS Austin/KAUS forecast: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- Polymarket Chicago Jun 15: https://polymarket.com/event/highest-temperature-in-chicago-on-june-15-2026
- NWS O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Houston Jun 15: https://polymarket.com/event/highest-temperature-in-houston-on-june-15-2026
- NWS Houston Hobby forecast: https://forecast.weather.gov/zipcity.php?inputstring=KHOU
- Polymarket Atlanta Jun 15: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-15-2026
- NWS Atlanta/KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Polymarket Dallas Jun 15: https://polymarket.com/event/highest-temperature-in-dallas-on-june-15-2026
- NWS Dallas/Love Field forecast: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=32.8929&lg=english&lon=-96.8641

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T0413Z.md`.
- Created `alerts/2026-06-15T0413Z.md`.
- Created `data/market_snapshots/2026-06-15T0413Z.json`.
- Created `paper_trading/entries/PT-20260615-164.md`.
- Created `paper_trading/ledger_appends/2026-06-15T0413Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T0413Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No real trades or betting actions were executed.