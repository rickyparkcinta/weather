# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-17 21:13:52
- HKT: 2026-06-18 05:13:52
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Chicago/KORD Jun 17; Hong Kong/HKO Jun 18 and Jun 19; Dallas/KDAL Jun 17; Austin/KAUS Jun 17; Los Angeles/KLAX Jun 17; Houston/KHOU Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; San Francisco/KSFO Jun 17.
- Cross-market / public signal checks: Kalshi Houston and Austin/Dallas related snippets through p/data and search surfaces; official HKO text forecast/current weather; NWS station observation histories and O'Hare point forecast snippets.
- Source-quality note: direct container curl/API access to Polymarket, Gamma, and HKO endpoints was blocked by the proxy. Public web-rendered pages and official text pages were used instead. Confidence is capped where displayed probabilities, Buy Yes quotes, and executable depth diverge.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 17 64-65F YES
- Current price: displayed 12%; Buy Yes 11.7c.
- Implied probability: about 11.7%-12%.
- Estimated fair value: 24%-34%.
- Estimated edge: roughly +12 to +22 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate fresh paper-only hedge; strong raw gap, practical risk capped.
- Key reasoning: KORD has already printed 64F at 15:51 CDT after a storm/rain-cooled day, while Polymarket still makes 66-67F the leader. NWS O'Hare observations show 64F at 15:51 CDT, 60.1F at 14:51 CDT, and 57F at 13:51 CDT, with showers/storms and breezy south winds. A public NWS O'Hare forecast snippet showed this afternoon high 64F with severe thunderstorms, although other NWS point text still carries high near 68F, so late rebound risk remains real.
- Liquidity/practicality notes: Polymarket event volume is about $117.9K; the 64-65F outcome shows about $8.8K volume. The spread is still meaningful and Wunderground whole-degree settlement can differ from NWS-style max fields.
- Decision: opened PT-20260617-201, a tiny $5 simulated BUY_YES at 11.7c. This is a paper-only hedge against weakened Chicago 68-69F exposure, not a real trade.

### 2. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: displayed 37%; Buy Yes 38c. Nearby outcomes: 30C 29% / Buy Yes 31c, 32C 18% / Buy Yes 19c, 29C 16% / Buy Yes 17c.
- Implied probability: about 37%-38%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +4 to +14 percentage points versus the 38c buy quote.
- Confidence: medium-low.
- Classification: moderate represented maintenance.
- Key reasoning: HKO's 00:00 HKT forecast lists Jun 19 at 27-31C, with mainly cloudy weather, a few showers, isolated thunderstorms at first, and hot sunny periods in the afternoon. That still centers the 31C bucket, but the market has moved from the 35c add-on to 38c, so a duplicate is not justified.
- Liquidity/practicality notes: about $13.8K total event volume, with 31C outcome volume around $2.7K. Exact-Celsius one-decimal settlement keeps 30.9C and 32.0C miss paths material.
- Decision: maintain PT-20260617-199 at 38c and PT-20260617-200 at 35c only.

### 3. Polymarket Hong Kong/HKO Jun 18 29C YES
- Current price: displayed 33%; Buy Yes 33c. Nearby outcomes: 28C 36% / Buy Yes 36c, 30C 15% / Buy Yes 16c, 27C 10.6% / Buy Yes 12c.
- Implied probability: about 33%.
- Estimated fair value: 31%-41%.
- Estimated edge: roughly -2 to +8 percentage points.
- Confidence: medium-low.
- Classification: weak represented maintenance.
- Key reasoning: HKO's 00:00 HKT forecast keeps Jun 18 max at 29C, but the 04:02 HKT current report shows the Observatory at 27C with rain and a thunderstorm warning through 07:30 HKT. That leaves 28C as a live cap path and explains why the market is led by 28C.
- Liquidity/practicality notes: about $95.3K event volume. No duplicate because the current 33c price is above PT-20260617-197's 30c entry and the thesis has not tightened.

## Near-Fair / Weakened Monitors
- Chicago/KORD Jun 17 68-69F: weakened versus PT-20260616-190/PT-20260617-196. Current 68-69F Buy Yes is 25c, but observed 64F at 15:51 CDT and the market's lower-bucket shift make the old 68-69F thesis adverse.
- Los Angeles/KLAX Jun 17: 70-71F is now 96% displayed / Buy Yes 97c after KLAX printed 70F at 11:53 and 12:53 PDT, then cooled to 68F at 13:53 PDT. Maintain PT-20260617-195 only; no fresh edge at current price.
- Dallas/KDAL Jun 17: 92-93F leads at 53% and 94-95F Buy Yes is 42.8c, but KDAL was only 90F at 14:53 CDT. Existing 94-95F paper exposure stays weakened/adverse-watch.
- Austin/KAUS Jun 17: 88-89F Buy Yes 68.8c and 92-93F Buy Yes 42c, while KAUS was 87.1F at 14:53 CDT. Existing 92-93F paper exposure remains weakened.
- Atlanta/KATL Jun 17: public Polymarket search shows 84-85F leading near 65%; KATL printed 84.9F at 15:52 and 16:52 EDT. No fresh edge.
- Miami/KMIA Jun 17: KMIA printed 93F at 13:53/14:53 EDT and 91.9F at 15:53 EDT. The 92-93F thesis is near resolution / near fair.
- Houston/KHOU Jun 17: Polymarket related public surface shows 88-89F around 80c; KHOU printed 88F at 13:53 CDT and 87.1F at 14:53 CDT. No fresh discount.
- San Francisco/KSFO Jun 17: KSFO reached 69.1F at 12:56 PDT; quote quality remains too poor for a fresh exact-bucket entry.

## Recommended Paper Trades

### Open PT-20260617-201
- Stance: simulated BUY_YES on Polymarket Chicago/KORD Jun 17 64-65F.
- Simulated size: $5 notional.
- Entry price: 11.7c Buy Yes.
- Thesis: KORD has already reached 64F late in the day after rain and severe-storm conditions, while 64-65F is still priced near 12c. The edge is a small paper hedge that benefits if the station does not rebound into 66F+ before resolution.
- Confidence: low-to-medium-low.
- Invalidation risks: late clearing or warm advection lifts KORD to 66F+; Wunderground daily high handling diverges from the NWS observation history; public Polymarket display is stale or differs from executable depth; a late station correction changes the maximum.

## Risks and Invalidation Factors
- Exact weather buckets can lose by one degree or one decimal even when the directional thesis is right.
- HKO high-temperature markets resolve to official Daily Extract absolute max to one decimal place; 30.9C and 32.0C remain live miss paths for Jun 19 31C.
- U.S. Polymarket weather markets resolve against Wunderground station history, not directly against NWS point forecasts.
- Public web-rendered Polymarket pages can lag and can show display probabilities that differ from buy quotes or executable depth.
- Late-session U.S. markets can still flip on one station print, storm clearing, wind shift, or source-history revision.

## Sources Used
- Polymarket HKO Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket HKO Jun 18 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather text page: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- Polymarket Chicago Jun 17 event: https://polymarket.com/event/highest-temperature-in-chicago-on-june-17-2026
- NWS KORD observation history: https://forecast.weather.gov/data/obhistory/KORD.html
- NWS O'Hare point forecast search result: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Dallas Jun 17 event: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket Austin Jun 17 event: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket Los Angeles Jun 17 event: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-17-2026
- NWS observation histories: KDAL, KAUS, KLAX, KHOU, KATL, KMIA, KSFO via https://forecast.weather.gov/data/obhistory/
- Kalshi Houston p/data cross-check: https://pdata.world/events/kalshi/KXHIGHTHOU-26JUN17

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-17T2114Z.md, alerts/2026-06-17T2114Z.md, data/market_snapshots/2026-06-17T2114Z.json, paper_trading/entries/PT-20260617-201.md, paper_trading/ledger_appends/2026-06-17T2114Z.csv, and paper_trading/maintenance/2026-06-17T2114Z.md.
- Updated rolling local memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only position: PT-20260617-201 Chicago/KORD Jun 17 64-65F YES at 11.7c, $5 notional. No real trades or betting actions were executed.
