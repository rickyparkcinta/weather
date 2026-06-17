# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-17 20:12:29
- HKT: 2026-06-18 04:12:29
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Hong Kong/HKO Jun 18 and Jun 19; Chicago/KORD Jun 17; Dallas/KDAL Jun 17; Austin/KAUS Jun 17; Los Angeles/KLAX Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; Houston/KHOU Jun 17.
- Exploratory monitor: San Francisco/KSFO Jun 17 because the public Polymarket page remains liquid but quote quality is poor.
- Cross-market check: Kalshi Dallas Jun 17 high-temperature buckets, with station/rule differences noted.
- Evidence used: public Polymarket rendered pages and search snippets; p/data Polymarket Dallas mirror; Kalshi Dallas page; HKO official forecast/current/max-min APIs; NWS station observation histories.
- Source-quality note: workspace curl/API calls to NWS and aviation-weather endpoints failed during this run, so NWS observation pages and public rendered market pages were used directly. Confidence is capped where public display prices differ from executable order-book depth.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 36%; Buy Yes 36c. Nearby outcomes: 30C 31c, 32C 17c, 29C 14c.
- Implied probability: about 36%.
- Estimated fair value: 43%-53%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: medium-low.
- Classification: moderate represented maintenance; no new add.
- Key reasoning: HKO's 00:00 HKT forecast still lists Jun 19 maximum temperature at 31C, with mainly cloudy weather, a few showers, isolated thunderstorms at first, and hot sunny periods in the afternoon. The market moved from 35c last hour to 36c, so it remains positive but no longer improves on the latest paper add-on.
- Liquidity/practicality notes: Polymarket shows about $11.6K total event volume, with 31C outcome volume around $2.2K. Exact-Celsius and one-decimal Daily Extract settlement risk remain material.
- Decision: maintain PT-20260617-199 and PT-20260617-200 only. No new paper trade because the current 36c price is worse than the latest 35c simulated entry.

### 2. Polymarket Hong Kong/HKO Jun 18 29C YES
- Current price: 29C displayed 34%; Buy Yes 34c. Nearby outcomes: 28C 37% / Buy Yes 38c, 27C 17.6% / Buy Yes 20.2c, 30C 13% / Buy Yes 14c.
- Implied probability: about 34%.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly -2 to +8 percentage points.
- Confidence: medium-low.
- Classification: weak represented maintenance.
- Key reasoning: HKO's 00:00 HKT forecast lists Jun 18 maximum temperature at 29C with showers and squally thunderstorms, heavy at first. HKO current readings show the Observatory at 27C at 03:00 HKT and the since-midnight maximum at HK Observatory only 26.9C, while a thunderstorm warning remains active. That keeps 28C live, but 29C remains plausible if showers ease after daybreak.
- Liquidity/practicality notes: Polymarket shows about $87.6K total event volume. No duplicate because current 34c is above PT-20260617-197's 30c entry and 28.xC cap risk is high.

### 3. Polymarket Chicago/KORD Jun 17 lower-temperature buckets
- Current price: 62-63F displayed 14% / Buy Yes 17.3c; 64-65F displayed 27% / Buy Yes 33.2c; 66-67F displayed 28% / Buy Yes 35c; 68-69F displayed 26% / Buy Yes 29c.
- Implied probability: about 14% displayed for 62-63F, with higher adjacent buckets still priced aggressively.
- Estimated fair value: 62-63F roughly 15%-25%; 60-61F and 64-65F both meaningful but source-sensitive.
- Estimated edge: small-to-moderate raw gap on 62-63F only, roughly -2 to +8 percentage points after spread.
- Confidence: low.
- Classification: weak watch-only; no hedge entry.
- Key reasoning: KORD was 57F at 13:51 CDT in rain/fog/mist, and the 12:51 CDT NWS row showed a 6-hour max around 61F. That makes a cooler finish interesting, but Wunderground settlement handling of METAR six-hour max fields, possible later clearing/rebound, and still-wide Polymarket spreads keep this below the bar for a new paper hedge.
- Liquidity/practicality notes: event volume is about $103.4K, but outcome spreads are wide and the book already has weakened Chicago 68-69F exposure.

## Near-Fair / Weakened Monitors
- Los Angeles/KLAX Jun 17: 70-71F leads at 85% / Buy Yes 85c after KLAX printed 70F at 11:53 PDT. Fair estimate 80%-90%; maintain PT-20260617-195 only after a large favorable repricing from 26c.
- San Francisco/KSFO Jun 17: displayed odds show 72-73F 44%, 70-71F 41%-47%, and 68-69F 31%, but visible Buy Yes quotes are around 50c+ for several adjacent buckets. KSFO printed 68F at 11:56 PDT; quote quality and 70F+ rebound risk make this no-entry.
- Dallas/KDAL Jun 17: p/data shows Polymarket 92-93F at 55c, 90-91F at 31c, and 94-95F at 5c. KDAL was 89.1F at 13:53 CDT. Existing 94-95F paper entries are weakened/adverse-watch. Kalshi's Dallas/DFW 92-93F bucket at 62c is a useful directional cross-check, but it is a different station/ruleset.
- Austin/KAUS Jun 17: Polymarket displays 90-91F at 42% and 92-93F at 31%, but Buy Yes quotes are wider at 66c and 44c. KAUS was 87.1F at 13:53 CDT. Existing 92-93F exposure remains weakened/maintenance only.
- Atlanta/KATL Jun 17: 84-85F is 52% / Buy Yes 54c and 86-87F is 43% / Buy Yes 46c. KATL printed 84F at 13:52 EDT; market looks broadly fair with 86F+ overshoot risk still live.
- Miami/KMIA Jun 17: 92-93F is 98% / Buy Yes 98c after KMIA printed 93F by 14:53 EDT. No edge unless late 94F+ risk were materially underpriced; current 94-95F Buy Yes 5c looks close to fair.
- Houston/KHOU Jun 17: 88-89F leads at 79% / Buy Yes 81c and 90-91F is 20% / Buy Yes 22c. KHOU had printed 86F by 12:53 CDT after heavy rain; later recovery keeps 88-89F plausible, but no price/fair gap is strong enough.

## Recommended Paper Trades

No new paper trade is recommended this run.

- Best maintained stance: continue to monitor HKO Jun 19 31C YES from PT-20260617-199 at 38c and PT-20260617-200 at 35c.
- Simulated size this run: $0 new notional.
- Rationale: the cleanest positive edge is already represented and is priced worse than the latest add-on. Chicago lower-bucket hedges are interesting, but settlement-source ambiguity and possible late rebound keep confidence too low.
- Real-money status: no real bet, trade, order, wallet connection, or automated execution.

## Risks and Invalidation Factors
- Exact weather buckets can lose by one degree or one decimal even when the broad forecast direction is right.
- HKO high-temperature markets resolve to the official Daily Extract absolute max to one decimal place; 30.9C and 32.0C remain live miss paths for the Jun 19 31C thesis.
- U.S. Polymarket weather markets resolve against Wunderground station history, not directly against NWS point forecasts; METAR six-hour max handling can create ambiguity.
- Public Polymarket pages can lag, include display probabilities that differ from executable Buy Yes quotes, or show very wide spreads.
- Late-session U.S. markets can still flip on one final station print, storm clearing, or source-history revision.

## Sources Used
- Polymarket HKO Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket HKO Jun 18 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026
- HKO 9-day forecast API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en
- HKO current readings API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en
- HKO since-midnight max/min API: https://data.weather.gov.hk/weatherAPI/hko_data/regional-weather/latest_since_midnight_maxmin.csv
- Polymarket Chicago Jun 17: https://polymarket.com/event/highest-temperature-in-chicago-on-june-17-2026
- Polymarket Los Angeles Jun 17: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-17-2026
- Polymarket San Francisco Jun 17: https://polymarket.com/event/highest-temperature-in-san-francisco-on-june-17-2026
- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket Atlanta Jun 17: https://polymarket.com/pt/event/highest-temperature-in-atlanta-on-june-17-2026
- Polymarket Houston Jun 17: https://polymarket.com/event/highest-temperature-in-houston-on-june-17-2026
- Polymarket Miami Jun 17: https://polymarket.com/event/highest-temperature-in-miami-on-june-17-2026
- p/data Dallas Polymarket mirror: https://pdata.world/events/polymarket/599384
- Kalshi Dallas Jun 17 high-temperature market: https://kalshi.com/markets/kxhightdal/dallas-maximum-temperature/kxhightdal-26jun17
- NWS observation histories: KORD, KDAL, KAUS, KLAX, KHOU, KATL, KMIA, KSFO via https://forecast.weather.gov/data/obhistory/

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-17T2012Z.md, alerts/2026-06-17T2012Z.md, data/market_snapshots/2026-06-17T2012Z.json, paper_trading/ledger_appends/2026-06-17T2012Z.csv, and paper_trading/maintenance/2026-06-17T2012Z.md.
- Updated rolling local memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only position: none. No real trades or betting actions were executed.
