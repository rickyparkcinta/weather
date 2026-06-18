# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 13:12:52
- HKT: 2026-06-18 21:12:52
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Seoul/Incheon Jun 19; Chongqing/ZUCK Jun 19; Shanghai/Pudong Jun 19; Guangzhou/ZGGG Jun 19; Shenzhen/ZGSZ Jun 19; Hong Kong/HKO Jun 19.
- Forecast and station evidence: Polymarket public market pages; Met Office forecasts for Incheon, Chongqing, Shanghai International, Guangzhou, and Shenzhen; HKO 9-day forecast; NOAA/NWS current station summaries for RKSI, ZUCK, ZSPD, ZGGG, and ZGSZ.
- Source-quality note: public Polymarket pages were used for displayed probabilities and Buy Yes quotes. Confidence is capped where public display, executable depth, Wunderground final history, station mapping, or forecast-source disagreement may diverge.

## Top Edges

### 1. Polymarket Chongqing/ZUCK Jun 19 31C YES
- Current price: 31C displayed 26%; Buy Yes 26c. Nearby outcomes: 30C displayed 32% / Buy Yes 33c; 29C displayed 23% / Buy Yes 24c; 28C displayed 14% / Buy Yes 15c.
- Implied probability: about 26%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +8 to +18 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: Met Office Chongqing still lists Friday Jun 19 at 31C, and the hourly table shows a multi-hour 31C afternoon/evening plateau. The market still favors 30C even though 31C remains the forecast-centered bucket.
- Liquidity/practicality notes: event volume about $11.4K; 31C bucket volume about $1.8K. Current quote is above the PT-20260618-214 paper entry at 23c.
- Decision: maintain PT-20260618-214 only; no duplicate above entry.

### 2. Polymarket Shanghai/ZSPD Jun 19 28C YES
- Current price: 28C displayed 14%; Buy Yes 15c. Nearby outcomes: 30C displayed 30% / Buy Yes 30c; 31C displayed 23% / Buy Yes 23c; 29C displayed 22% / Buy Yes 22c.
- Implied probability: about 15%.
- Estimated fair value: 22%-32%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low.
- Classification: represented maintenance edge.
- Key reasoning: Met Office Shanghai International still lists Friday Jun 19 at 28C with heavy showers and an hourly peak at 28C. Confidence is haircut because Polymarket's public market context cites hotter 30C-31C model consensus, so this is a source-disagreement edge rather than a clean forecast lock.
- Liquidity/practicality notes: event volume about $36.6K; 28C bucket volume about $5.7K. Existing paper entries already cover the thesis from 17c and 12c.
- Decision: maintain PT-20260618-211 and PT-20260618-213 only; no duplicate above the latest 12c add-on.

### 3. Polymarket Seoul/Incheon Jun 19 31C YES
- Current price: 31C displayed 12%; Buy Yes 12c. Nearby outcomes: 29C displayed 39% / Buy Yes 39c; 30C displayed 25% / Buy Yes 26c; 28C displayed 16% / Buy Yes 16c.
- Implied probability: about 12%.
- Estimated fair value: 18%-28%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low.
- Classification: represented moderate edge.
- Key reasoning: Met Office Incheon still lists Friday Jun 19 at 31C and shows one 31C hourly touch around mid-afternoon. The market leaves 31C as a tail outcome behind 29C, 30C, and 28C.
- Liquidity/practicality notes: event volume about $34.4K; 31C bucket volume about $1.8K. The current quote is above PT-20260618-216's 10c entry.
- Decision: maintain PT-20260618-216 only; no duplicate at a worse price.

### 4. Polymarket Guangzhou/ZGGG Jun 19 32C YES
- Current price: 32C displayed 24%; Buy Yes 25c. Nearby outcomes: 33C displayed 28% / Buy Yes 28c; 31C displayed 21% / Buy Yes 21c; 34C displayed 14% / Buy Yes 15c.
- Implied probability: about 25%.
- Estimated fair value: 30%-40%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: low.
- Classification: represented moderate edge.
- Key reasoning: Met Office Guangzhou lists Friday Jun 19 at 32C, with hourly values reaching 32C during the afternoon. The market has warmed toward 33C, but 32C remains the official daily-max bucket.
- Liquidity/practicality notes: event volume about $14.7K; 32C bucket volume about $1.3K. Current quote matches the PT-20260618-215 paper entry.
- Decision: maintain PT-20260618-215 only; no same-price duplicate.

### 5. Polymarket Shenzhen/ZGSZ Jun 19 32C YES
- Current price: 32C displayed 21%; Buy Yes 22c. Nearby outcomes: 31C displayed 30% / Buy Yes 30c; 30C displayed 19% / Buy Yes 20c; 33C displayed 13.2% / Buy Yes 14.4c.
- Implied probability: about 22%.
- Estimated fair value: 24%-34%.
- Estimated edge: roughly +2 to +12 percentage points.
- Confidence: low.
- Classification: represented weak-to-moderate edge.
- Key reasoning: Met Office Shenzhen's daily card still lists Friday Jun 19 at 32C, but the hourly table peaks at 31C, which keeps the 31C leader highly live and trims fair value.
- Liquidity/practicality notes: event volume about $25.4K; 32C bucket volume about $3.7K. The same-thesis 22c entry already exists.
- Decision: maintain PT-20260618-212 only; no duplicate at the same entry price.

### 6. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 43%; Buy Yes 43c. Nearby outcomes: 30C displayed 33% / Buy Yes 34c; 32C displayed 19% / Buy Yes 19c; 29C displayed 8% / Buy Yes 8c.
- Implied probability: about 43%.
- Estimated fair value: 44%-54%.
- Estimated edge: roughly +1 to +11 percentage points.
- Confidence: medium-low.
- Classification: represented maintenance / near fair.
- Key reasoning: HKO's 16:30 HKT 9-day forecast keeps Friday Jun 19 in a 26C-31C range, with showers easing and sunny periods in the afternoon. That supports 31C, but one-decimal settlement leaves 30.9/32.0 miss paths material.
- Liquidity/practicality notes: event volume about $42.7K; 31C bucket volume about $6.4K. Existing entries from 38c and 35c remain much better than the current quote.
- Decision: maintain PT-20260617-199 and PT-20260617-200 only.

## Recommended Paper Trades

No new paper trade is recommended this run. The strongest current raw gaps are already represented, and none improved enough versus existing entries to justify a duplicate simulated position.

### Maintained Paper Positions
- Maintain PT-20260618-214 on Chongqing/ZUCK Jun 19 31C YES.
- Maintain PT-20260618-211 and PT-20260618-213 on Shanghai/ZSPD Jun 19 28C YES.
- Maintain PT-20260618-216 on Seoul/Incheon Jun 19 31C YES.
- Maintain PT-20260618-215 on Guangzhou/ZGGG Jun 19 32C YES.
- Maintain PT-20260618-212 on Shenzhen/ZGSZ Jun 19 32C YES.
- Maintain PT-20260617-199 and PT-20260617-200 on Hong Kong/HKO Jun 19 31C YES.
- Maintain PT-20260618-210 on Seoul/Incheon Jun 19 30C YES as hedged/weakened maintenance after the forecast shifted warmer toward 31C.

## Risks and Invalidation Factors
- Exact-weather buckets can lose on a one-degree or one-tenth-degree boundary, even when the broad forecast direction is right.
- Public Polymarket display and executable depth can diverge; all paper decisions use visible public quotes only.
- Met Office location pages may not map perfectly to the Wunderground resolution station.
- Shanghai now has explicit source disagreement: Met Office supports 28C, while Polymarket's own public context cites hotter 30C-31C model consensus.
- Asia weather exposure is concentrated across correlated rain/cloud, station mapping, model-update, and exact-bucket errors.
- The main portfolio risk this hour is over-adding to represented exact-bucket signals, not missing a clearly fresh edge.

## Sources Used
- Polymarket Seoul Jun 19: https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- Polymarket Chongqing Jun 19: https://polymarket.com/event/highest-temperature-in-chongqing-on-june-19-2026
- Polymarket Shanghai Jun 19: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- Polymarket Guangzhou Jun 19: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- Polymarket Shenzhen Jun 19: https://polymarket.com/es/event/highest-temperature-in-shenzhen-on-june-19-2026
- Polymarket Hong Kong Jun 19: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Met Office Incheon: https://weather.metoffice.gov.uk/forecast/wydj553hq
- Met Office Chongqing: https://weather.metoffice.gov.uk/forecast/wm78q9qxj
- Met Office Shanghai International: https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- Met Office Guangzhou: https://weather.metoffice.gov.uk/forecast/ws0e3x09w
- Met Office Shenzhen: https://weather.metoffice.gov.uk/forecast/ws10k3j56
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- NOAA/NWS RKSI station summary: https://tgftp.nws.noaa.gov/weather/current/RKSI.html
- NOAA/NWS ZUCK station summary: https://tgftp.nws.noaa.gov/weather/current/ZUCK.html
- NOAA/NWS ZSPD station summary: https://tgftp.nws.noaa.gov/weather/current/ZSPD.html
- NOAA/NWS ZGGG station summary: https://tgftp.nws.noaa.gov/weather/current/ZGGG.html
- NOAA/NWS ZGSZ station summary: https://tgftp.nws.noaa.gov/weather/current/ZGSZ.html

## Repo Log Update
- Updated latest snapshot target: odds/latest.md.
- Added history snapshot target: odds/history/2026-06-18T1312Z.md.
- Added alert target: alerts/2026-06-18T1312Z.md.
- Added structured data target: data/market_snapshots/2026-06-18T1312Z.json.
- Added paper-trading maintenance target: paper_trading/maintenance/2026-06-18T1312Z.md.
- Updated rolling memory notes and paper-trading summaries.
- No new paper-trade entry file or ledger append was created because no new simulated position was opened.