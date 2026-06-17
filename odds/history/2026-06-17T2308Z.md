# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-17 23:08:35
- HKT: 2026-06-18 07:08:35
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Hong Kong/HKO Jun 18 and Jun 19; Chicago/KORD Jun 17; Dallas/KDAL Jun 17; Austin/KAUS Jun 17; Los Angeles/KLAX Jun 17; Houston/KHOU Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; San Francisco/KSFO Jun 17.
- Official signal checks: HKO 9-day forecast and current weather text pages; NWS station observation histories for KORD, KDAL, KAUS, KLAX, KHOU, KATL, KMIA, and KSFO.
- Source-quality note: public Polymarket pages were used for odds. Confidence is capped where displayed probabilities, Buy Yes quotes, and late-session executable depth diverge.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: displayed 37%; Buy Yes 38c. Nearby outcomes: 30C displayed 29% / Buy Yes 30c; 29C displayed 16% / Buy Yes 17c; 32C displayed 16% / Buy Yes 17c.
- Implied probability: about 38% at the buy quote.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +4 to +14 percentage points versus the 38c buy quote.
- Confidence: medium-low.
- Classification: moderate represented maintenance; not a fresh add.
- Key reasoning: HKO's 00:00 HKT forecast lists Jun 19 at 27-31C, with mainly cloudy weather, a few showers, isolated thunderstorms at first, and hot sunny periods in the afternoon. That still centers the 31C bucket better than the 30C/32C alternatives, but the fair range stays modest because one-decimal settlement can miss at 30.9C or 32.0C.
- Liquidity/practicality notes: about $14.1K total event volume; target-bucket volume around $2.7K. Existing paper entries PT-20260617-199 at 38c and PT-20260617-200 at 35c already represent the thesis, so no duplicate above the 35c add-on.
- Decision: maintain only.

### 2. Polymarket Chicago/KORD Jun 17 68-69F YES
- Current price: displayed 69%; Buy Yes 70c. Nearby outcomes: 70-71F displayed 19% / Buy Yes 31c; 72-73F displayed 8% / Buy Yes 13c; 74-75F displayed 5% / Buy Yes 9.8c.
- Implied probability: about 70% at the buy quote.
- Estimated fair value: 70%-82%.
- Estimated edge: roughly 0 to +12 percentage points versus the 70c buy quote.
- Confidence: medium.
- Classification: moderate represented near-resolution maintenance; not a fresh add.
- Key reasoning: KORD printed 69.1F at 16:51 CDT after a storm-cooled afternoon and had not printed 70F+ in the latest NWS table reviewed. That supports 68-69F if Wunderground's final whole-degree station history does not add a warmer late print. The remaining risk is a late 70F+ observation or source-history revision.
- Liquidity/practicality notes: about $150.3K total event volume. Existing paper entries PT-20260616-190 and PT-20260617-196 hold this bucket from 26c/21c; current price is much worse than both entries.
- Decision: maintain existing 68-69F paper exposure only. Keep PT-20260617-201 Chicago 64-65F adverse-watch.

### 3. Polymarket Hong Kong/HKO Jun 18 29C YES
- Current price: displayed 33%; Buy Yes 34c. Nearby outcomes: 28C displayed 36% / Buy Yes 37c; 30C displayed 18% / Buy Yes 19c; 27C displayed 15.5% / Buy Yes 16c.
- Implied probability: about 34% at the buy quote.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly -2 to +8 percentage points.
- Confidence: medium-low.
- Classification: weak represented maintenance / no fresh edge.
- Key reasoning: HKO's 00:00 HKT forecast caps Jun 18 at 29C, but the 06:43 HKT current report showed 27C at the Observatory, heavy rain, an Amber Rainstorm Warning, and a Thunderstorm Warning through 10:30 HKT. That points to a 28C/29C split rather than a clear 29C discount.
- Liquidity/practicality notes: about $91.1K event volume. No duplicate because current 34c is above PT-20260617-197's 30c entry and 28C leads the board.
- Decision: maintain only.

## Near-Fair / Weakened Monitors
- Dallas/KDAL Jun 17: KDAL printed 91F at 17:53 CDT after repeated 91F readings. Search-rendered Polymarket context moved 90-91F to the market lead, while older 94-95F paper exposure remains adverse-watch. No hedge was opened because direct depth was not revalidated and the outcome is late-session.
- Austin/KAUS Jun 17: KAUS printed 89.1F at 16:53 CDT, leaving the 88-89F bucket favored and the older 92-93F paper entries adverse-watch.
- Los Angeles/KLAX Jun 17: KLAX printed 70F at 11:53 and 12:53 PDT, then 69.1F at 14:53 and 15:53 PDT. The 70-71F hedge remains favorable/near-resolution.
- Houston/KHOU Jun 17: KHOU printed 88F at 13:53 and 15:53 CDT, then cooled to 84-85F; 88-89F is near-resolved with no fresh edge.
- Atlanta/KATL Jun 17: KATL printed 84.9F several times before cooling to 82.9F at 18:52 EDT; 84-85F is near-resolved with no fresh edge.
- Miami/KMIA Jun 17: KMIA printed 93F at 13:53 and 14:53 EDT, then cooled; 92-93F is near-resolved with no fresh edge.
- San Francisco/KSFO Jun 17: KSFO printed 72F at 14:56 PDT and 71.1F at 15:56 PDT; 72-73F is near-resolved with no fresh edge.

## Recommended Paper Trades
- No new paper trade this run. The only meaningful positive gaps are already represented, and the remaining U.S. same-day boards are late-stage or source-quality limited.

## Risks and Invalidation Factors
- Late same-day weather buckets can flip on one final station print, especially Chicago 68-69F versus 70-71F and Dallas/Austin adjacent buckets.
- U.S. Polymarket weather markets resolve against Wunderground station history, not directly against NWS observations; whole-degree handling and late revisions matter.
- HKO markets resolve to official Daily Extract absolute max at one-decimal Celsius precision, so 28.9C/29.0C and 30.9C/31.0C boundary paths remain important.
- Public Polymarket pages can show display probabilities that diverge from Buy Yes quotes or executable depth.

## Sources Used
- Polymarket HKO Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket HKO Jun 18 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather text page: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- Polymarket Chicago Jun 17 event: https://polymarket.com/event/highest-temperature-in-chicago-on-june-17-2026
- NWS KORD observation history: https://forecast.weather.gov/data/obhistory/KORD.html
- NWS station observation histories: KDAL, KAUS, KLAX, KHOU, KATL, KMIA, and KSFO via https://forecast.weather.gov/data/obhistory/

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-17T2308Z.md, alerts/2026-06-17T2308Z.md, data/market_snapshots/2026-06-17T2308Z.json, and paper_trading/maintenance/2026-06-17T2308Z.md.
- Updated rolling local memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only position: none. No real trades or betting actions were executed.
