# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-17 22:12:07
- HKT: 2026-06-18 06:12:07
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Chicago/KORD Jun 17; Hong Kong/HKO Jun 18 and Jun 19; Dallas/KDAL Jun 17; Austin/KAUS Jun 17; Los Angeles/KLAX Jun 17; Houston/KHOU Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; San Francisco/KSFO Jun 17.
- Official signal checks: HKO 9-day forecast and current weather text pages; NWS station observation histories for KORD, KDAL, KAUS, KLAX, KHOU, KATL, KMIA, and KSFO.
- Source-quality note: public Polymarket pages were used for odds. Confidence is capped where displayed probabilities, Buy Yes quotes, and late-session executable depth diverge.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 17 68-69F YES
- Current price: displayed 46%; Buy Yes 51c. Nearby outcomes: 70-71F displayed 42% / Buy Yes 55c; 72-73F displayed 11% / Buy Yes 15.5c.
- Implied probability: about 51% at the buy quote.
- Estimated fair value: 55%-65%.
- Estimated edge: roughly +4 to +14 percentage points versus the 51c buy quote.
- Confidence: medium-low.
- Classification: moderate represented maintenance; not a fresh add.
- Key reasoning: KORD printed 69.1F at 16:51 CDT after earlier rain and storm-cooled readings of 64F at 15:51, 60.1F at 14:51, and 57F at 13:51. If the station does not print 70F+ before the day closes, the whole-degree Wunderground result should favor the 68-69F bucket. The risk is live because current time is still late afternoon in Chicago and one more warm print can move resolution into 70-71F.
- Liquidity/practicality notes: Polymarket event volume is about $133.5K. Existing paper entries PT-20260616-190 and PT-20260617-196 already cover this bucket at materially better prices, so no duplicate is justified.
- Decision: maintain existing 68-69F paper exposure only. Mark PT-20260617-201 Chicago 64-65F hedge adverse-watch after the 69.1F observation.

### 2. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: displayed 37%; Buy Yes 38c. Nearby outcomes: 30C displayed 29% / Buy Yes 31c; 32C displayed 18% / Buy Yes 19c; 29C displayed 16% / Buy Yes 17c.
- Implied probability: about 38% at the buy quote.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: medium-low.
- Classification: moderate represented maintenance.
- Key reasoning: HKO's 00:00 HKT 9-day forecast lists Jun 19 at 27-31C with mainly cloudy weather, a few showers, isolated thunderstorms at first, and hot sunny periods in the afternoon. That still centers the 31C bucket, but exact one-decimal Celsius risk leaves 30C and 32C live.
- Liquidity/practicality notes: about $13.8K total event volume. Existing paper entries PT-20260617-199 at 38c and PT-20260617-200 at 35c already represent the thesis; no add above the latest 35c add-on.
- Decision: maintain only.

### 3. Polymarket Hong Kong/HKO Jun 18 29C YES
- Current price: displayed 33%; Buy Yes 33c. Nearby outcomes: 28C displayed 35% / Buy Yes 35c; 27C displayed 21% / Buy Yes 21.8c; 30C displayed 11% / Buy Yes 11c.
- Implied probability: about 33%.
- Estimated fair value: 31%-41%.
- Estimated edge: roughly -2 to +8 percentage points.
- Confidence: medium-low.
- Classification: weak represented maintenance / no fresh edge.
- Key reasoning: HKO's 00:00 HKT forecast caps Jun 18 at 29C, but the 06:02 HKT current report showed 27C, heavy rain, an Amber Rainstorm Warning, and a Thunderstorm Warning through 07:30 HKT. That supports a 28C/29C split rather than a clear 29C discount.
- Liquidity/practicality notes: about $102.4K event volume. No duplicate because current price is above PT-20260617-197's 30c entry and 28C leads the board.
- Decision: maintain only.

## Near-Fair / Weakened Monitors
- Chicago/KORD Jun 17 64-65F: adverse-watch for PT-20260617-201. The market moved to below 1% after KORD printed 69.1F at 16:51 CDT.
- Dallas/KDAL Jun 17: KDAL printed 91F at 15:53 CDT. Polymarket shows 92-93F at 44% displayed / Buy Yes 55c, 90-91F at 30% displayed / Buy Yes 40c, and 94-95F at 26% displayed / Buy Yes 42.8c. Existing 94-95F paper exposure remains weakened/adverse-watch.
- Austin/KAUS Jun 17: KAUS printed 89.1F at 16:53 CDT. Polymarket shows 88-89F at 49% / Buy Yes 67.3c and 90-91F at 44% / Buy Yes 56c; older 92-93F paper entries are adverse-watch.
- Los Angeles/KLAX Jun 17: KLAX printed 70F at 11:53 and 12:53 PDT, then cooled to 68F at 13:53 PDT. Polymarket has 70-71F near 99%; no fresh edge.
- Houston/KHOU Jun 17: KHOU printed 88F at 15:53 CDT. Polymarket has 88-89F displayed 97% / Buy Yes 99.8c; no fresh edge.
- Atlanta/KATL Jun 17: KATL printed 84.9F at 15:52, 16:52, and 17:52 EDT. Polymarket has 84-85F near 94%; no fresh edge.
- Miami/KMIA Jun 17: KMIA printed 93F at 13:53 and 14:53 EDT. Polymarket has 92-93F at 100%; no fresh edge.
- San Francisco/KSFO Jun 17: KSFO printed 72F at 14:56 PDT. Polymarket has 72-73F at 94% / Buy Yes 95c; no fresh edge.

## Recommended Paper Trades
- No new paper trade this run. The two positive-looking gaps are already represented, and the remaining watchlist has largely converged to observed station highs.

## Risks and Invalidation Factors
- Late same-day weather buckets can flip on one final station print, especially Chicago 68-69F versus 70-71F and Dallas/Austin adjacent buckets.
- U.S. Polymarket weather markets resolve against Wunderground station history, not directly against NWS observations; whole-degree handling and late revisions matter.
- HKO markets resolve to official Daily Extract absolute max at one-decimal Celsius precision, so 30.9C/32.0C boundary paths remain important for Jun 19 31C.
- Public Polymarket pages can show display probabilities that diverge from Buy Yes quotes or executable depth.

## Sources Used
- Polymarket Chicago Jun 17 event: https://polymarket.com/event/highest-temperature-in-chicago-on-june-17-2026
- NWS KORD observation history: https://forecast.weather.gov/data/obhistory/KORD.html
- Polymarket HKO Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket HKO Jun 18 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather text page: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- Polymarket Dallas, Austin, Los Angeles, Houston, Atlanta, Miami, and San Francisco Jun 17 event pages.
- NWS station observation histories: KDAL, KAUS, KLAX, KHOU, KATL, KMIA, and KSFO via https://forecast.weather.gov/data/obhistory/

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-17T2212Z.md, alerts/2026-06-17T2212Z.md, data/market_snapshots/2026-06-17T2212Z.json, and paper_trading/maintenance/2026-06-17T2212Z.md.
- Updated rolling local memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only position: none. No real trades or betting actions were executed.
