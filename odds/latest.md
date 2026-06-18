# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 18:08:13
- HKT: 2026-06-19 02:08:13
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Chongqing/ZUCK Jun 19; Seoul/Incheon Jun 19; Hong Kong/HKO Jun 19; Shanghai/Pudong Jun 19; Guangzhou/ZGGG Jun 19; Shenzhen/ZGSZ Jun 19.
- Forecast and station evidence: Polymarket public market pages; Met Office forecasts for Chongqing, Seoul Incheon, Shanghai International, Guangzhou, and Shenzhen; HKO 9-day/current/regional observations; NOAA/NWS current station summaries for RKSI, ZUCK, ZSPD, ZGGG, and ZGSZ.
- Source-quality note: direct API access was blocked from the container, so Polymarket public pages were used for displayed probabilities and Buy Yes quotes. Confidence remains capped where public display, executable depth, Wunderground final history, station mapping, or forecast-source disagreement may diverge.

## Top Edges

### 1. Polymarket Chongqing/ZUCK Jun 19 31C YES
- Current price: 31C displayed 30%; Buy Yes 31c. Nearby outcomes: 30C displayed 30% / Buy Yes 31c; 29C displayed 16% / Buy Yes 18c; 28C displayed 10% / Buy Yes 10c.
- Implied probability: about 31%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: Met Office Chongqing still lists Friday at 31C and the hourly table shows a multi-hour 31C late-afternoon/evening plateau with low afternoon precipitation odds. ZUCK remains cool/humid before the forecasted warmer clearing, so the setup is plausible but not station-confirmed.
- Liquidity/practicality notes: event volume about $13.5K; 31C bucket volume about $2.3K. Current quote is materially above the PT-20260618-214 entry at 23c.
- Decision: maintain PT-20260618-214 only; no duplicate above entry.

### 2. Polymarket Shanghai/ZSPD Jun 19 30C YES
- Current price: 30C displayed 24%; Buy Yes 24c. Nearby outcomes: 29C displayed 30% / Buy Yes 30c; 28C displayed 24% / Buy Yes 24c; 31C displayed 17% / Buy Yes 18c.
- Implied probability: about 24%.
- Estimated fair value: 28%-38%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low.
- Classification: moderate fresh paper-only hedge.
- Key reasoning: Met Office Shanghai International lists Friday at 30C and the hourly table reaches 30C once in the early afternoon before heavy showers. The price has dropped from the prior no-entry area near 29c to 24c, making the now-better-centered 30C bucket cheap enough for a tiny simulated hedge against existing Shanghai 28C/29C paper exposure.
- Liquidity/practicality notes: event volume about $60.6K; 30C bucket volume about $3.9K. Target bucket depth is acceptable for paper tracking but still thin for an exact-weather market.
- Decision: opened PT-20260618-217, a $5 simulated BUY_YES only. No real trade or bet.

### 3. Polymarket Seoul/Incheon Jun 19 31C YES
- Current price: 31C displayed 11%; Buy Yes 12c. Nearby outcomes: 29C displayed 38% / Buy Yes 38c; 30C displayed 27% / Buy Yes 27c; 28C displayed 21% / Buy Yes 21c.
- Implied probability: about 12%.
- Estimated fair value: 18%-28%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low.
- Classification: represented moderate edge, exact-hour-peak sensitive.
- Key reasoning: Met Office Seoul Incheon still lists Friday at 31C, but the hourly table only touches 31C once around mid-afternoon before rain risk rises. The market still prices 31C as a tail behind 29C/30C/28C.
- Liquidity/practicality notes: event volume about $42.3K; 31C bucket volume about $2.3K. Current Buy Yes is above PT-20260618-216's 10c entry.
- Decision: maintain PT-20260618-216 only; no duplicate at a worse price.

### 4. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 41%; Buy Yes 41c. Nearby outcomes: 30C displayed 29% / Buy Yes 30c; 32C displayed 16% / Buy Yes 18c; 29C displayed 10% / Buy Yes 11c.
- Implied probability: about 41%.
- Estimated fair value: 44%-54%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: medium-low.
- Classification: represented moderate maintenance edge.
- Key reasoning: HKO's 00:00 HKT 9-day forecast keeps Jun 19 at 26C-31C with showers easing and sunny periods in the afternoon. HKO regional readings at 02:00 HKT show HK Observatory at 28.2C with max since midnight 28.3C, so the day has not yet tested the forecast peak. The 31C bucket remains plausible, but 30.xC cap and 32.0C overshoot remain live.
- Liquidity/practicality notes: event volume about $74.1K; 31C bucket volume about $9.0K. Current quote is above the 38c and 35c paper entries.
- Decision: maintain PT-20260617-199 and PT-20260617-200 only; no duplicate above entries.

### 5. Polymarket Guangzhou/ZGGG Jun 19 32C YES
- Current price: 32C displayed 30%; Buy Yes 31c. Nearby outcomes: 33C displayed 26% / Buy Yes 27c; 34C displayed 15% / Buy Yes 16c; 31C displayed 14% / Buy Yes 15c.
- Implied probability: about 31%.
- Estimated fair value: 26%-36%.
- Estimated edge: roughly -5 to +5 percentage points.
- Confidence: low.
- Classification: represented near-fair maintenance.
- Key reasoning: Met Office Guangzhou's daily card still shows 32C, but the hourly table peaks at 31C through the afternoon. ZGGG was 26C with light rain/overcast at 18:00 UTC Jun 18, so a warm day remains possible but the exact 32C edge has largely compressed.
- Liquidity/practicality notes: event volume about $23.0K; 32C bucket volume about $3.0K. Current quote is worse than PT-20260618-215's 25c entry.
- Decision: maintain PT-20260618-215 only; no duplicate.

### 6. Polymarket Shenzhen/ZGSZ Jun 19 32C YES
- Current price: 32C displayed 29%; Buy Yes 30c. Nearby outcomes: 31C displayed 39% / Buy Yes 40c; 30C displayed 14% / Buy Yes 15c; 33C displayed 9.7% / Buy Yes 12.1c.
- Implied probability: about 30%.
- Estimated fair value: 22%-32%.
- Estimated edge: roughly -8 to +2 percentage points.
- Confidence: low.
- Classification: represented near-fair to slightly weakened maintenance.
- Key reasoning: Met Office Shenzhen's daily card still shows 32C, but the hourly table peaks at 31C for several hours. ZGSZ was already 28C at 18:00 UTC Jun 18, but market pricing now correctly favors 31C and does not leave a clear 32C discount.
- Liquidity/practicality notes: event volume about $47.9K; 32C bucket volume about $5.7K. Current quote is above PT-20260618-212's 22c entry.
- Decision: maintain PT-20260618-212 only; no duplicate.

## Recommended Paper Trades

### Open PT-20260618-217
- Stance: BUY_YES on Polymarket Shanghai/ZSPD Jun 19 highest temperature 30C YES.
- Simulated size: $5 notional.
- Entry price: Buy Yes 24c.
- Thesis: the forecast center has shifted away from the older Shanghai 28C/29C paper cluster toward 30C, and the 30C bucket has cheapened enough to justify a tiny simulated hedge.
- Confidence: low.
- Invalidation risks: heavy showers may cap ZSPD at 28C/29C; a single 30C hourly forecast touch may not verify at Wunderground; market/model consensus may already be correctly leaning 29C; stronger afternoon clearing could overshoot into 31C; visible public price/depth may differ from executable depth.

## Risks and Invalidation Factors
- Exact-weather buckets can lose on a one-degree boundary, even when the broad forecast direction is right.
- Public Polymarket display and executable depth can diverge; all paper decisions use visible public quotes only.
- Met Office location pages may not map perfectly to the Wunderground resolution station.
- Shanghai is now a hedged cluster rather than a clean single-bucket thesis: 28C, 29C, 30C, and 31C all remain live because rain timing dominates.
- Guangzhou and Shenzhen still show daily-vs-hourly forecast conflict: daily cards show 32C, but hourly tables peak at 31C.
- Asia weather exposure remains concentrated across correlated rain/cloud, station mapping, model-update, and exact-bucket errors.

## Sources Used
- https://polymarket.com/event/highest-temperature-in-chongqing-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- https://weather.metoffice.gov.uk/forecast/wm78q9qxj
- https://weather.metoffice.gov.uk/forecast/wy9vjmn3q
- https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- https://weather.metoffice.gov.uk/forecast/ws0e3x09w
- https://weather.metoffice.gov.uk/forecast/ws10k3j56
- https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm
- https://tgftp.nws.noaa.gov/weather/current/RKSI.html
- https://tgftp.nws.noaa.gov/weather/current/ZUCK.html
- https://tgftp.nws.noaa.gov/weather/current/ZSPD.html
- https://tgftp.nws.noaa.gov/weather/current/ZGGG.html
- https://tgftp.nws.noaa.gov/weather/current/ZGSZ.html

## Repo Log Update
- Updated latest snapshot target: odds/latest.md.
- Added history snapshot target: odds/history/2026-06-18T1808Z.md.
- Added alert target: alerts/2026-06-18T1808Z.md.
- Added structured data target: data/market_snapshots/2026-06-18T1808Z.json.
- Added paper-trade entry target: paper_trading/entries/PT-20260618-217.md.
- Added ledger append target: paper_trading/ledger_appends/2026-06-18T1808Z.csv.
- Added paper-trading maintenance target: paper_trading/maintenance/2026-06-18T1808Z.md.
- Updated rolling memory notes and paper-trading summaries.
- Paper trading only; no real bets, trades, wallet actions, or order execution performed.
