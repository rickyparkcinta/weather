# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 19:08:03
- HKT: 2026-06-19 03:08:03
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Chongqing/ZUCK Jun 19; Seoul/Incheon Jun 19; Shanghai/Pudong Jun 19; Hong Kong/HKO Jun 19; Guangzhou/ZGGG Jun 19; Shenzhen/ZGSZ Jun 19.
- Forecast evidence: Polymarket public pages; Met Office forecasts for Chongqing, Incheon, Shanghai International, Guangzhou, and Shenzhen; HKO 9-day forecast; AccuWeather airport pages for Guangzhou Baiyun and Shenzhen Bao'an.
- Source-quality note: direct Polymarket API access from the container returned 403, so public Polymarket pages were used for displayed probabilities and Buy Yes quotes. Confidence is capped where public display, executable depth, Wunderground final history, station mapping, or forecast-source disagreement may diverge.

## Top Edges

### 1. Polymarket Chongqing/ZUCK Jun 19 31C YES
- Current price: 31C displayed 29%; Buy Yes 29c. Nearby outcomes: 30C displayed 32% / Buy Yes 33c; 29C displayed 16% / Buy Yes 18c; 28C displayed 10% / Buy Yes 10c.
- Implied probability: about 29%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: Met Office Chongqing still lists Friday at 31C and the hourly table shows several 31C afternoon/evening hours with low afternoon precipitation odds.
- Liquidity/practicality notes: event volume about $13.6K; 31C bucket volume about $2.3K. Current quote is still above the PT-20260618-214 entry at 23c.
- Decision: maintain PT-20260618-214 only; no duplicate above entry.

### 2. Polymarket Seoul/Incheon Jun 19 31C YES
- Current price: 31C displayed 14%; Buy Yes 14c. Nearby outcomes: 29C displayed 39% / Buy Yes 39c; 30C displayed 28% / Buy Yes 28c; 28C displayed 18% / Buy Yes 18c.
- Implied probability: about 14%.
- Estimated fair value: 18%-28%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low.
- Classification: represented moderate edge.
- Key reasoning: Met Office Incheon still lists Friday at 31C, but the hourly table only touches 31C once before rain probabilities rise. The market has moved 31C up from the earlier 12c context, reducing the fresh edge.
- Liquidity/practicality notes: event volume about $44.1K; 31C bucket volume about $2.4K. Current quote is above PT-20260618-216's 10c entry.
- Decision: maintain PT-20260618-216 only; no duplicate at a worse price.

### 3. Polymarket Shanghai/ZSPD Jun 19 30C YES
- Current price: 30C displayed 24%; Buy Yes 24c. Nearby outcomes: 29C displayed 30% / Buy Yes 30c; 28C displayed 24% / Buy Yes 24c; 31C displayed 17% / Buy Yes 18c.
- Implied probability: about 24%.
- Estimated fair value: 28%-38%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low.
- Classification: represented moderate hedge edge.
- Key reasoning: Met Office Shanghai International lists Friday at 30C and the hourly table reaches 30C once before heavy shower risk dominates. The 30C bucket was already opened as a tiny simulated hedge last hour at the same 24c.
- Liquidity/practicality notes: event volume about $60.6K; 30C bucket volume about $3.9K.
- Decision: maintain PT-20260618-217 only; no same-price duplicate.

### 4. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 42%; Buy Yes 43c. Nearby outcomes: 30C displayed 29% / Buy Yes 30c; 32C displayed 19% / Buy Yes 20c; 29C displayed 7% / Buy Yes 8c.
- Implied probability: about 43%.
- Estimated fair value: 45%-55%.
- Estimated edge: roughly +2 to +12 percentage points.
- Confidence: medium-low.
- Classification: represented moderate maintenance edge.
- Key reasoning: HKO's 00:00 HKT forecast keeps Jun 19 at 26C-31C, with showers easing and sunny periods in the afternoon. That supports 31C, but 30.xC cap and 32.0C overshoot remain live exact-boundary risks.
- Liquidity/practicality notes: event volume about $80.9K; 31C bucket volume about $9.4K. Current quote is above the 38c and 35c paper entries.
- Decision: maintain PT-20260617-199 and PT-20260617-200 only; no duplicate above entries.

### 5. Polymarket Guangzhou/ZGGG Jun 19 32C YES
- Current price: 32C displayed 30%; Buy Yes 31c. Nearby outcomes: 33C displayed 26% / Buy Yes 27c; 34C displayed 15% / Buy Yes 16c; 31C displayed 14% / Buy Yes 15c.
- Implied probability: about 31%.
- Estimated fair value: 26%-36%.
- Estimated edge: roughly -5 to +5 percentage points.
- Confidence: low.
- Classification: represented near-fair maintenance.
- Key reasoning: Met Office Guangzhou's daily card shows 32C, but its hourly table peaks around 31C. AccuWeather's Guangzhou Baiyun page shows an 88F/31C daily high and afternoon hourly readings around 86F/30C, leaving the target bucket source-conflicted.
- Liquidity/practicality notes: event volume about $23.0K; 32C bucket volume about $3.0K. Current quote is worse than PT-20260618-215's 25c entry.
- Decision: maintain PT-20260618-215 only; no duplicate.

### 6. Polymarket Shenzhen/ZGSZ Jun 19 32C YES
- Current price: 32C displayed 29%; Buy Yes 30c. Nearby outcomes: 31C displayed 38% / Buy Yes 39c; 30C displayed 14% / Buy Yes 15c; 33C displayed 10.4% / Buy Yes 11.7c.
- Implied probability: about 30%.
- Estimated fair value: 20%-30%.
- Estimated edge: roughly -10 to 0 percentage points.
- Confidence: low.
- Classification: represented near-fair to weakened maintenance.
- Key reasoning: Met Office Shenzhen's daily card shows 32C, but the hourly path peaks around 31C. AccuWeather's Shenzhen Bao'an airport forecast is cooler, showing an 86F/30C high with rain/thunderstorm risk, so the market's 31C lead looks reasonable.
- Liquidity/practicality notes: event volume about $51.8K; 32C bucket volume about $5.7K. Current quote is above PT-20260618-212's 22c entry.
- Decision: maintain PT-20260618-212 only; no duplicate.

## Recommended Paper Trades
- No new paper trade recommended this run.
- Rationale: the strongest positive gaps are already represented, and none improved enough versus existing entries to justify another simulated add. Chongqing 31C cheapened from the prior hour, but 29c is still well above the 23c paper entry.

## Risks and Invalidation Factors
- Exact-weather buckets can lose on a one-degree boundary even when the broad forecast direction is right.
- Public Polymarket display and executable depth can diverge; all paper decisions use visible public quotes only.
- Met Office city/location pages and AccuWeather airport pages may not map perfectly to the Wunderground resolution station.
- Shanghai remains a hedged cluster rather than a clean single-bucket thesis: 28C, 29C, 30C, and 31C all remain live because rain timing dominates.
- Guangzhou and Shenzhen show daily-vs-hourly and source-to-source conflict, so 32C add-ons are blocked.
- Asia weather exposure remains concentrated across correlated rain/cloud, station mapping, model-update, and exact-bucket errors.

## Sources Used
- https://polymarket.com/event/highest-temperature-in-chongqing-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- https://weather.metoffice.gov.uk/forecast/wm78q9qxj
- https://weather.metoffice.gov.uk/forecast/wydj553hq
- https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- https://weather.metoffice.gov.uk/forecast/ws0e3x09w
- https://weather.metoffice.gov.uk/forecast/ws10k3j56
- https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- https://www.accuweather.com/en/cn/guangzhou-baiyun-international-airport/1839_poi/weather-forecast/1839_poi
- https://www.accuweather.com/en/cn/shenzhen-baoan-international-airport/1831_poi/weather-forecast/1831_poi

## Repo Log Update
- Updated odds/latest.md.
- Added odds/history/2026-06-18T1908Z.md.
- Added alerts/2026-06-18T1908Z.md.
- Added data/market_snapshots/2026-06-18T1908Z.json.
- Added paper_trading/maintenance/2026-06-18T1908Z.md.
- No new paper-trade entry file or ledger append was created because no new simulated position was opened.
- Paper trading only; no real bets, trades, wallet actions, or order execution performed.
