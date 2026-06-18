# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 21:10:53 UTC
- HKT: 2026-06-19 05:10:53 HKT
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Chongqing/ZUCK Jun 19; Shanghai/Pudong Jun 19; Seoul/Incheon Jun 19; Hong Kong/HKO Jun 19; Guangzhou/ZGGG Jun 19; Shenzhen/ZGSZ Jun 19.
- Forecast and public evidence: Polymarket public market pages; Met Office forecasts for Chongqing, Incheon, Shanghai International, Guangzhou, and Shenzhen; HKO 9-day forecast and regional readings; AccuWeather airport pages for Guangzhou Baiyun and Shenzhen Bao'an.
- Source-quality note: direct trading/execution APIs were not used and no order books were touched for execution. Public Polymarket pages were used for displayed probabilities and Buy Yes quotes. Confidence is capped where public display, executable depth, Wunderground final history, station mapping, or forecast-source disagreement may diverge.

## Top Edges

### 1. Polymarket Shanghai/ZSPD Jun 19 30C YES
- Current price: 30C displayed 23%; Buy Yes 23c. Nearby outcomes: 29C displayed 30% / Buy Yes 30c; 31C displayed 21% / Buy Yes 21c; 28C displayed 19% / Buy Yes 20c; 32C displayed 7% / Buy Yes 9c.
- Implied probability: about 23%.
- Estimated fair value: 29%-39%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low.
- Classification: represented moderate hedge edge.
- Key reasoning: Met Office Shanghai International lists Friday at 30C and the hourly path reaches 30C once, but heavy shower probabilities stay high and 28C/29C/31C remain live. This is a positive but noisy exact-bucket setup.
- Liquidity/practicality notes: event volume about $65.2K; 30C bucket volume about $4.3K. Current quote is only 1c below PT-20260618-217's 24c entry.
- Decision: maintain PT-20260618-217 only; no duplicate on a one-cent improvement.

### 2. Polymarket Chongqing/ZUCK Jun 19 31C YES
- Current price: 31C displayed 31%; Buy Yes 31c. Nearby outcomes: 30C displayed 33% / Buy Yes 34c; 29C displayed 16% / Buy Yes 18c; 32C displayed 11% / Buy Yes 13c; 28C displayed 10% / Buy Yes 10c.
- Implied probability: about 31%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: Met Office Chongqing still lists Friday at 31C, with several afternoon/evening hours at 31C and low afternoon precipitation risk. The market has moved closer to the forecast center, so the discount is thinner than earlier.
- Liquidity/practicality notes: event volume about $14.2K; 31C bucket volume about $2.3K. Current quote is well above PT-20260618-214's 23c entry.
- Decision: maintain PT-20260618-214 only; no duplicate above entry.

### 3. Polymarket Seoul/Incheon Jun 19 31C YES
- Current price: 31C displayed 13%; Buy Yes 13c. Nearby outcomes: 29C displayed 37% / Buy Yes 37c; 30C displayed 30% / Buy Yes 31c; 28C displayed 17% / Buy Yes 18c; 32C or higher displayed 5% / Buy Yes 5c.
- Implied probability: about 13%.
- Estimated fair value: 18%-28%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: low.
- Classification: represented moderate tail edge.
- Key reasoning: Met Office Incheon lists Friday at 31C, but the hourly path only touches 31C once before cloud/rain risk rises. The price still underweights the warm tail, but the evidence is not clean enough to add above the existing entry.
- Liquidity/practicality notes: event volume about $51.4K; 31C bucket volume about $2.9K. Current quote is above PT-20260618-216's 10c entry.
- Decision: maintain PT-20260618-216 only; no duplicate above entry.

### 4. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 44%; Buy Yes 44c. Nearby outcomes: 30C displayed 31% / Buy Yes 32c; 32C displayed 20% / Buy Yes 21c; 29C displayed 7% / Buy Yes 8c.
- Implied probability: about 44%.
- Estimated fair value: 43%-53%.
- Estimated edge: roughly -1 to +9 percentage points.
- Confidence: medium-low.
- Classification: represented near-fair maintenance.
- Key reasoning: HKO's 00:00 HKT forecast keeps Jun 19 at 26C-31C with showers easing and sunny periods in the afternoon. Regional readings at 05:00 HKT show HK Observatory max since midnight at 28.4C, so 31C remains plausible but not underpriced enough at 44c.
- Liquidity/practicality notes: event volume about $86.8K; 31C bucket volume about $10.0K. Current quote is above the 38c and 35c paper entries.
- Decision: maintain PT-20260617-199 and PT-20260617-200 only; no duplicate above entries.

### 5. Polymarket Guangzhou/ZGGG Jun 19 32C YES
- Current price: 32C displayed 29%; Buy Yes 30c. Nearby outcomes: 33C displayed 24% / Buy Yes 25c; 34C displayed 16% / Buy Yes 17c; 31C displayed 16% / Buy Yes 17c; 30C displayed 15% / Buy Yes 17c.
- Implied probability: about 30%.
- Estimated fair value: 28%-38%.
- Estimated edge: roughly -2 to +8 percentage points.
- Confidence: low.
- Classification: weak to near-fair represented maintenance.
- Key reasoning: Met Office Guangzhou lists Friday at 32C, but its hourly path peaks around 31C, while AccuWeather at Guangzhou Baiyun Airport shows an 88F/31C-style high with rain/thunderstorm risk. The market has already priced 32C as the leader.
- Liquidity/practicality notes: event volume about $31.0K; 32C bucket volume about $3.3K. Current quote is worse than PT-20260618-215's 25c entry.
- Decision: maintain PT-20260618-215 only; no duplicate.

### 6. Polymarket Shenzhen/ZGSZ Jun 19 32C YES
- Current price: 32C displayed 28%; Buy Yes 29c. Nearby outcomes: 31C displayed 41% / Buy Yes 42c; 30C displayed 18% / Buy Yes 20c; 29C displayed 8% / Buy Yes 9c; 33C displayed 8% / Buy Yes 9.2c.
- Implied probability: about 29%.
- Estimated fair value: 20%-30%.
- Estimated edge: roughly -9 to +1 percentage points.
- Confidence: low.
- Classification: represented weak/no edge.
- Key reasoning: Met Office Shenzhen lists Friday at 32C, but its hourly temperatures plateau around 31C, and AccuWeather at Shenzhen Bao'an Airport shows an 86F/30C-style high with rain and thunderstorm risk. The market's 31C lead looks reasonable.
- Liquidity/practicality notes: event volume about $54.9K; 32C bucket volume about $5.7K. Current quote is above PT-20260618-212's 22c entry.
- Decision: maintain PT-20260618-212 only; no duplicate and treat as weakened/near-fair.

## Recommended Paper Trades
- No new paper trade recommended this run.
- Rationale: the strongest positive gaps are already represented, and none improved enough versus existing entries to justify another simulated add. Shanghai 30C is only 1c below the 24c paper entry; Chongqing, Seoul, and HKO are above their entries; Guangzhou and Shenzhen remain source-conflicted or close to fair.

## Risks and Invalidation Factors
- Exact-weather buckets can lose on a one-degree or one-tenth-degree boundary even when the broad forecast direction is right.
- Public Polymarket display and executable depth can diverge; all paper decisions use visible public quotes only.
- Met Office city/location pages and AccuWeather airport pages may not map perfectly to the Wunderground resolution stations.
- Shanghai remains a hedged cluster rather than a clean single-bucket thesis: 28C, 29C, 30C, and 31C all remain live because rain timing dominates.
- HKO 31C needs enough afternoon clearing after a wet early morning; a 30.xC cap or 32.0C overshoot would both miss the 31C bucket.
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
- https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm
- https://www.accuweather.com/en/cn/guangzhou-baiyun-international-airport/1839_poi/weather-forecast/1839_poi
- https://www.accuweather.com/en/cn/shenzhen-baoan-international-airport/1831_poi/weather-forecast/1831_poi

## Repo Log Update
- Updated latest snapshot target: odds/latest.md.
- Added history snapshot target: odds/history/2026-06-18T2110Z.md.
- Added alert target: alerts/2026-06-18T2110Z.md.
- Added structured data target: data/market_snapshots/2026-06-18T2110Z.json.
- Added paper-trading maintenance target: paper_trading/maintenance/2026-06-18T2110Z.md.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No new paper-trade entry file or ledger append was created because no new simulated position was opened.
- Paper trading only; no real bets, trades, wallet actions, or order execution performed.
