# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 00:13:10
- HKT: 2026-06-18 08:13:10
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Hong Kong/HKO Jun 18 and Jun 19; Chicago/KORD Jun 17; Dallas/KDAL Jun 17; Austin/KAUS Jun 17; Los Angeles/KLAX Jun 17; Houston/KHOU Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; San Francisco/KSFO Jun 17.
- Fresh global weather screen: London/EGLC Jun 18 and Seoul Jun 18, because both were active popular weather markets with visible prices.
- Official signal checks: HKO 9-day forecast and current weather text pages; NWS station observation histories for KORD, KDAL, KAUS, KLAX, KHOU, KATL, KMIA, and KSFO; Met Office London City Airport forecast; Korea Meteorological Administration Seoul forecast context.
- Source-quality note: public Polymarket pages/search-rendered pages were used for odds. Confidence is capped where displayed probabilities, Buy Yes quotes, and executable depth may diverge.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: displayed 37%; Buy Yes 38c. Nearby outcomes: 30C displayed 27% / Buy Yes 28c; 29C displayed 16% / Buy Yes 16c; 32C displayed 17% / Buy Yes 18c.
- Implied probability: about 38% at the buy quote.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +4 to +14 percentage points versus the 38c buy quote.
- Confidence: medium-low.
- Classification: moderate represented maintenance; not a fresh add.
- Key reasoning: HKO's 07:50 HKT forecast lists Jun 19 at 27-31C, with mainly cloudy weather, a few showers, isolated thunderstorms at first, and hot sunny periods in the afternoon. That still supports 31C as the best single bucket, but the fair range stays modest because 30.9C, 32.0C, and forecast-revision paths remain live.
- Liquidity/practicality notes: about $14.3K total event volume; target-bucket volume around $2.8K. Existing paper entries PT-20260617-199 at 38c and PT-20260617-200 at 35c already represent the thesis, so no duplicate above the 35c add-on.
- Decision: maintain only.

### 2. Polymarket London/EGLC Jun 18 28C YES
- Current price: displayed 40%; next closest 27C at 35%.
- Implied probability: about 40%.
- Estimated fair value: 40%-50%.
- Estimated edge: roughly 0 to +10 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate watch-only; no fresh entry.
- Key reasoning: Met Office London City Airport shows a daily maximum daytime temperature of 28C for Jun 18, but the hourly table exposed in the same page peaks at 27C. The market is already split between 28C and 27C, so the apparent 28C discount is not clean enough to open a new paper position.
- Liquidity/practicality notes: about $41.2K total event volume. Fresh market, useful to keep on the watchlist, but no paper trade without a cleaner station-specific observation/forecast edge.
- Decision: watch only.

### 3. Polymarket Hong Kong/HKO Jun 18 28C / 29C split
- Current price: 28C displayed 48% / Buy Yes 48c; 29C displayed 34% / Buy Yes 34c; 30C displayed 19% / Buy Yes 20c; 31C displayed 2.6% / Buy Yes 3.0c.
- Implied probability: about 48% for 28C and 34% for 29C.
- Estimated fair value: 28C around 43%-53%; 29C around 30%-40%.
- Estimated edge: no clear positive edge after spread.
- Confidence: medium-low.
- Classification: near fair / represented maintenance.
- Key reasoning: HKO's 07:50 forecast caps Jun 18 at 29C, while the 07:02 current weather page showed 28C at the Observatory, heavy rain, an Amber Rainstorm Warning, and a Thunderstorm Warning through 10:30 HKT. This creates a genuine 28C/29C split rather than a clean 29C add. Existing PT-20260617-197 holds 29C from 30c; do not add or chase 28C at 48c.
- Liquidity/practicality notes: about $147.7K total event volume. Good liquidity, but the market has mostly caught up with the rain-cooled morning.
- Decision: maintain HKO Jun 18 paper exposure only; no new hedge.

## Near-Fair / Weakened Monitors
- Chicago/KORD Jun 17: Latest public Polymarket rendering moved 68-69F to roughly 95% / Buy Yes 96c after KORD printed 69.1F at 16:51 CDT and 68F at 17:51 CDT. Existing 26c/21c 68-69F paper entries are favorable; no add near 96c. PT-20260617-201 64-65F remains adverse.
- Dallas/KDAL Jun 17: KDAL printed 91F at 17:53 CDT; public Polymarket context moved 90-91F to the lead at roughly 83% / Buy Yes 87c. Existing 94-95F paper entries remain adverse-watch.
- Austin/KAUS Jun 17: KAUS printed 89.1F at 16:53 CDT and 87.1F at 17:53 CDT. The board moved toward 88-89F/90-91F while existing 92-93F paper entries remain adverse-watch.
- Los Angeles/KLAX Jun 17: KLAX printed 70F at 11:53 and 12:53 PDT, then 69.1F later; the 70-71F paper hedge remains favorable/near-resolution.
- Houston/KHOU Jun 17: KHOU printed 88F at 13:53 and 15:53 CDT before cooling; no fresh edge.
- Atlanta/KATL Jun 17: KATL printed 84.9F repeatedly before cooling; no fresh edge.
- Miami/KMIA Jun 17: KMIA printed 93F at 13:53 and 14:53 EDT; no fresh edge.
- San Francisco/KSFO Jun 17: KSFO printed 72F at 14:56 PDT and 71.1F at 15:56 PDT; no fresh edge.
- Seoul Jun 18: Polymarket has 28C around 39%-40% and 29C around 33%; KMA/public context points to a 28C-29C day. No clear edge after exact-Celsius risk.

## Recommended Paper Trades
- No new paper trade this run. The best positive gap, HKO Jun 19 31C, is already represented from 38c/35c. London Jun 18 28C is a watch-only candidate, not a clean enough simulated entry.

## Risks and Invalidation Factors
- Exact weather buckets can flip on one final station print, especially late U.S. markets awaiting Wunderground final history.
- U.S. Polymarket weather markets resolve against Wunderground station history, not directly against NWS observation tables; whole-degree handling and late revisions matter.
- HKO markets resolve to official Daily Extract absolute max at one-decimal Celsius precision, so 28.9C/29.0C and 30.9C/31.0C boundary paths remain decisive.
- Public Polymarket pages can show display probabilities that diverge from Buy Yes quotes or executable depth.
- Fresh global screens such as London and Seoul need extra source caution until station-specific live observations tighten the bucket.

## Sources Used
- Polymarket HKO Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket HKO Jun 18 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather text page: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- Polymarket London Jun 18 event: https://polymarket.com/event/highest-temperature-in-london-on-june-18-2026
- Met Office London City Airport forecast: https://weather.metoffice.gov.uk/forecast/u10j124jp
- Polymarket Seoul Jun 18 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-18-2026
- Korea Meteorological Administration short-range forecast: https://www.kma.go.kr/neng/forecast/short-term.do
- Polymarket Chicago Jun 17 event: https://polymarket.com/event/highest-temperature-in-chicago-on-june-17-2026
- Polymarket Dallas Jun 17 event: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket Austin Jun 17 event: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- NWS KORD/KDAL/KAUS/KLAX/KHOU/KATL/KMIA/KSFO observation histories: https://forecast.weather.gov/data/obhistory/

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0013Z.md, alerts/2026-06-18T0013Z.md, data/market_snapshots/2026-06-18T0013Z.json, and paper_trading/maintenance/2026-06-18T0013Z.md.
- Updated rolling memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only position: none. No real trades or betting actions were executed.