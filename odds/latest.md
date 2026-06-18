# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 20:07:58 UTC
- HKT: 2026-06-19 04:07:58 HKT
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Chongqing/ZUCK Jun 19; Shanghai/Pudong Jun 19; Seoul/Incheon Jun 19; Hong Kong/HKO Jun 19; Guangzhou/ZGGG Jun 19; Shenzhen/ZGSZ Jun 19.
- Forecast and public evidence: Polymarket public market pages; Met Office forecasts for Chongqing, Incheon, Shanghai International, Guangzhou, and Shenzhen; HKO 9-day forecast; AccuWeather airport pages for Guangzhou Baiyun and Shenzhen Bao'an.
- Source-quality note: direct Polymarket API access was not used for execution and no live order books were touched. Public Polymarket pages were used for displayed probabilities and Buy Yes quotes. Confidence is capped where public display, executable depth, Wunderground final history, station mapping, or forecast-source disagreement may diverge.

## Top Edges

### 1. Polymarket Chongqing/ZUCK Jun 19 31C YES
- Current price: 31C displayed 29%; Buy Yes 29c. Nearby outcomes: 30C displayed 32% / Buy Yes 33c; 29C displayed 16% / Buy Yes 18c; 28C displayed 10% / Buy Yes 10c; 32C displayed 11% / Buy Yes 12c.
- Implied probability: about 29%.
- Estimated fair value: 37%-47%.
- Estimated edge: roughly +8 to +18 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: Met Office Chongqing still lists Jun 19 at 31C, and the hourly path reaches 31C for several afternoon/evening hours with low afternoon precipitation risk.
- Liquidity/practicality notes: event volume about $13.9K; 31C bucket volume about $2.3K. Current quote is above PT-20260618-214's 23c entry.
- Decision: maintain PT-20260618-214 only; no duplicate above entry.

### 2. Polymarket Shanghai/ZSPD Jun 19 30C YES
- Current price: 30C displayed 23%; Buy Yes 23c. Nearby outcomes: 29C displayed 30% / Buy Yes 30c; 28C displayed 20% / Buy Yes 20c; 31C displayed 20% / Buy Yes 21c; 32C displayed 10% / Buy Yes 10c.
- Implied probability: about 23%.
- Estimated fair value: 29%-39%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low.
- Classification: represented moderate hedge edge.
- Key reasoning: Met Office Shanghai International's hourly path reaches 30C once, and Polymarket's own market context still frames 29C/30C/31C as tightly live under rain-timing uncertainty. The bucket is better than the older 28C thesis, but the edge remains noisy.
- Liquidity/practicality notes: event volume about $64.3K; 30C bucket volume about $4.2K. Current quote is only 1c below PT-20260618-217's 24c entry.
- Decision: maintain PT-20260618-217 only; no duplicate on a one-cent improvement.

### 3. Polymarket Seoul/Incheon Jun 19 31C YES
- Current price: 31C displayed 12%; Buy Yes 12c. Nearby outcomes: 29C displayed 39% / Buy Yes 39c; 30C displayed 28% / Buy Yes 28c; 28C displayed 18% / Buy Yes 18c; 32C or higher displayed 5% / Buy Yes 6.9c.
- Implied probability: about 12%.
- Estimated fair value: 18%-28%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low.
- Classification: represented moderate edge.
- Key reasoning: Met Office Incheon lists Jun 19 at 31C, but the hourly path only touches 31C once before cloud/rain risk rises. The low market price leaves a positive tail edge, but the evidence is not clean enough for another add.
- Liquidity/practicality notes: event volume about $49.0K; 31C bucket volume about $2.5K. Current quote is above PT-20260618-216's 10c entry.
- Decision: maintain PT-20260618-216 only; no duplicate above entry.

### 4. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 44%; Buy Yes 45c. Nearby outcomes: 30C displayed 32% / Buy Yes 33c; 32C displayed 20% / Buy Yes 21c; 29C displayed 8% / Buy Yes 9c.
- Implied probability: about 45%.
- Estimated fair value: 45%-55%.
- Estimated edge: roughly 0 to +10 percentage points.
- Confidence: medium-low.
- Classification: represented near-fair to moderate maintenance.
- Key reasoning: HKO's 00:00 HKT forecast keeps Jun 19 at 26C-31C with showers easing and sunny periods in the afternoon. That supports 31C, but the current 45c quote has largely priced the signal.
- Liquidity/practicality notes: event volume about $83.7K; 31C bucket volume about $9.9K. Current quote is above the 38c and 35c paper entries.
- Decision: maintain PT-20260617-199 and PT-20260617-200 only; no duplicate above entries.

### 5. Polymarket Guangzhou/ZGGG Jun 19 32C YES
- Current price: 32C displayed 31%; Buy Yes 31c. Nearby outcomes: 33C displayed 25% / Buy Yes 26c; 31C displayed 19% / Buy Yes 19c; 30C displayed 14% / Buy Yes 14c; 34C displayed 14% / Buy Yes 14c.
- Implied probability: about 31%.
- Estimated fair value: 28%-38%.
- Estimated edge: roughly -3 to +7 percentage points.
- Confidence: low.
- Classification: represented near-fair maintenance.
- Key reasoning: Met Office Guangzhou has warmer hourly paths, but AccuWeather at Guangzhou Baiyun Airport shows an 88F/31C high with rain/thunderstorm risk. The market has repriced 32C upward, so the edge is no longer clean.
- Liquidity/practicality notes: event volume about $28.3K; 32C bucket volume about $3.2K. Current quote is worse than PT-20260618-215's 25c entry.
- Decision: maintain PT-20260618-215 only; no duplicate.

### 6. Polymarket Shenzhen/ZGSZ Jun 19 32C YES
- Current price: 32C displayed 29%; Buy Yes 30c. Nearby outcomes: 31C displayed 38% / Buy Yes 39c; 30C displayed 16% / Buy Yes 17c; 29C displayed 10% / Buy Yes 10c; 33C displayed 8% / Buy Yes 10.5c.
- Implied probability: about 30%.
- Estimated fair value: 20%-30%.
- Estimated edge: roughly -10 to 0 percentage points.
- Confidence: low.
- Classification: represented near-fair to weakened maintenance.
- Key reasoning: Met Office Shenzhen is warmer, but AccuWeather at Shenzhen Bao'an Airport shows an 86F/30C high with rain/thunderstorm risk. The market's 31C lead looks reasonable, and 32C is not addable at 30c.
- Liquidity/practicality notes: event volume about $54.1K; 32C bucket volume about $5.7K. Current quote is above PT-20260618-212's 22c entry.
- Decision: maintain PT-20260618-212 only; no duplicate and treat as weakened/near-fair.

## Recommended Paper Trades
- No new paper trade recommended this run.
- Rationale: the strongest positive gaps are already represented, and none improved enough versus existing entries to justify another simulated add. Shanghai 30C improved by only 1c versus the 24c paper entry, while Chongqing, Seoul, and HKO remain above their latest entries.

## Risks and Invalidation Factors
- Exact-weather buckets can lose on a one-degree boundary even when the broad forecast direction is right.
- Public Polymarket display and executable depth can diverge; all paper decisions use visible public quotes only.
- Met Office city/location pages and AccuWeather airport pages may not map perfectly to the Wunderground resolution station.
- Shanghai remains a hedged cluster rather than a clean single-bucket thesis: 28C, 29C, 30C, and 31C all remain live because rain timing dominates.
- Guangzhou and Shenzhen show source-to-source and city-vs-airport conflict, so 32C add-ons are blocked.
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
- Updated latest snapshot target: odds/latest.md.
- Added history snapshot target: odds/history/2026-06-18T2007Z.md.
- Added alert target: alerts/2026-06-18T2007Z.md.
- Added structured data target: data/market_snapshots/2026-06-18T2007Z.json.
- Added paper-trading maintenance target: paper_trading/maintenance/2026-06-18T2007Z.md.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No new paper-trade entry file or ledger append was created because no new simulated position was opened.
- Paper trading only; no real bets, trades, wallet actions, or order execution performed.
