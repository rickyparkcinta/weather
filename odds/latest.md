# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-19 03:08:09 UTC
- HKT: 2026-06-19 11:08:09 HKT
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Shanghai/ZSPD Jun 19; Guangzhou/ZGGG Jun 19; Chongqing/ZUCK Jun 19; Shenzhen/ZGSZ Jun 19; Hong Kong/HKO Jun 19; Seoul/Incheon/RKSI Jun 19.
- Evidence checked: Polymarket public market pages; HKO 9-day forecast and regional readings; aviation METAR/TAF pages for ZSPD, ZGGG, ZUCK, ZGSZ, and RKSI; Met Office city/airport forecasts; AccuWeather airport pages for Guangzhou, Shenzhen, and Chongqing.
- Source-quality note: public Polymarket pages were used for visible quotes. No execution APIs, order submission, wallets, or real-money betting actions were used.

## Top Edges

### 1. Polymarket Seoul/Incheon/RKSI Jun 19 31C YES
- Current price: 31C displayed 7%; Buy Yes 7c. Nearby outcomes: 30C 62% / Buy Yes 62c; 29C 30% / Buy Yes 30c; 32C or higher 2.7% / Buy Yes 3.2c.
- Implied probability: about 7%.
- Estimated fair value: 12%-22%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: low.
- Classification: moderate fresh add-on edge.
- Key reasoning: RKSI was already 29C at 01:30 UTC, and the Met Office Incheon forecast still shows a 31C daily maximum with an hourly 31C touch before rain arrives. The market has repriced heavily toward 30C/29C, leaving 31C as a small tail. The active TAF still calls TX29/1906Z, so this is a low-confidence tail, not a clean centered forecast.
- Liquidity/practicality notes: event volume about $89.2K; 31C bucket volume about $7.1K.
- Decision: opened PT-20260619-222 as a $5 simulated BUY_YES add-on at 7c. This is paper-only.

### 2. Polymarket Shanghai/ZSPD Jun 19 29C YES
- Current price: 29C displayed 26%; Buy Yes 26c. Nearby outcomes: 30C 44% / Buy Yes 48c; 31C 26.8% / Buy Yes 27.5c; 32C 3.9% / Buy Yes 5.6c.
- Implied probability: about 26%.
- Estimated fair value: 30%-42%.
- Estimated edge: roughly +4 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: ZSPD was 27C at 01:30 UTC; the active TAF calls TX29/1906Z; Met Office Shanghai International shows a 30C daily card but the hourly table peaks around 29C with heavy showers/rain later. The market has moved strongly toward 30C and 31C, making 29C interesting again, but existing paper exposure has a much better 14c entry.
- Liquidity/practicality notes: event volume about $132.0K; 29C bucket volume about $15.5K.
- Decision: maintain PT-20260618-208 only; no duplicate add above the 14c paper entry.

### 3. Polymarket Guangzhou/ZGGG Jun 19 31C YES
- Current price: 31C displayed 24%; Buy Yes 26c. Nearby outcomes: 30C 32% / Buy Yes 35c; 32C 19% / Buy Yes 22c; 29C 13.5% / Buy Yes 16.7c.
- Implied probability: about 26%.
- Estimated fair value: 28%-38%.
- Estimated edge: roughly +2 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: ZGGG was 28C at 01:30 UTC; the active TAF calls TX31/1907Z; AccuWeather's airport page shows an 88F/31C high. Met Office Guangzhou is warmer at 32C and its hourly table reaches 32C, so 31C remains positive but source-conflicted.
- Liquidity/practicality notes: event volume about $47.2K; 31C bucket volume about $2.9K.
- Decision: maintain PT-20260618-218 only; no add above the 18c entry.

### 4. Polymarket Shenzhen/ZGSZ Jun 19 30C YES
- Current price: 30C displayed 34%; Buy Yes 35c. Nearby outcomes: 32C 22% / Buy Yes 23c; 31C 21% / Buy Yes 22c; 29C 19% / Buy Yes 21c.
- Implied probability: about 35%.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly -3 to +7 percentage points.
- Confidence: low.
- Classification: represented maintenance, no fresh edge.
- Key reasoning: ZGSZ was 27C with thunderstorm/rain around 01:00 UTC; the active TAF calls TX30/1906Z; AccuWeather airport guidance still shows 86F/30C. Met Office remains warmer with a 32C daily max and a 32C hourly peak, so the current 35c quote is not cheap enough.
- Liquidity/practicality notes: event volume about $89.6K; 30C bucket volume about $6.4K.
- Decision: maintain PT-20260618-220 only; no add.

### 5. Polymarket Chongqing/ZUCK Jun 19 28C YES
- Current price: 28C displayed 5%; Buy Yes 6c. Nearby outcomes: 30C 30% / Buy Yes 31c; 31C 29% / Buy Yes 30c; 29C 21% / Buy Yes 23c.
- Implied probability: about 6%.
- Estimated fair value: 6%-14%.
- Estimated edge: roughly 0 to +8 percentage points.
- Confidence: low.
- Classification: weak represented hedge edge.
- Key reasoning: ZUCK was 24C with mist around 01:00 UTC and the active TAF still calls TX28/1907Z. Met Office and AccuWeather both point closer to 31C, making the 28C thesis a small source-conflict hedge only.
- Liquidity/practicality notes: event volume about $18.1K; 28C bucket volume about $1.9K.
- Decision: maintain PT-20260618-219 only; no duplicate.

### 6. Polymarket Hong Kong/HKO Jun 19 32C YES
- Current price: 32C displayed 44%; Buy Yes 45c. Nearby outcomes: 31C 44% / Buy Yes 46c; 33C 9.1% / Buy Yes 11.2c; 30C 7.3% / Buy Yes 9.4c.
- Implied probability: about 45%.
- Estimated fair value: 38%-50%.
- Estimated edge: roughly -7 to +5 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented favorable entry, no fresh edge.
- Key reasoning: HKO's 07:50 HKT forecast lists 27C-32C with hot sunny periods during the day, while the 09:50 HKT Observatory reading was 29.6C with a 29.6C max since midnight. A 32.0C print is live, but the market has mostly closed the discount from the 18c paper entry.
- Liquidity/practicality notes: event volume about $126.9K; 32C bucket volume about $18.9K.
- Decision: maintain PT-20260619-221 only; no add.

## Recommended Paper Trades
- Opened PT-20260619-222: BUY_YES Seoul/Incheon/RKSI Jun 19 31C at Buy Yes 7c, $5 simulated notional.
- Thesis: The 31C tail was marked down to 7c even though RKSI had already reached 29C by 01:30 UTC and Met Office still shows a brief 31C afternoon touch before rain. This is only a tiny add-on because RKSI TAF TX29 is a major conflicting signal.
- Confidence: low.
- Invalidation risks: RKSI stalls at 29C/30C; rain/cloud arrives early; Wunderground final history differs from METAR/Met Office context; public Polymarket quote depth is stale or thin.
- Current status: open/unresolved.

## Settlements
- No newly settled paper trades were recorded this run. Jun 19 positions remain unresolved until final resolution-source data is available.

## Risks and Invalidation Factors
- Exact Celsius buckets can lose on a one-degree or one-decimal boundary even when the broad forecast direction is right.
- Wunderground final history may differ from METAR/TAF, Met Office, or AccuWeather supporting evidence for airport-settled markets.
- HKO resolves on the Observatory's one-decimal Daily Extract, making 31.9C versus 32.0C decisive.
- Public Polymarket display can diverge from executable depth; this paper-trading workflow uses visible public quotes only.
- Thunderstorm timing remains material for Shanghai, Guangzhou, Shenzhen, and Hong Kong.
- Seoul/Incheon and Chongqing remain materially source-conflicted.

## Sources Used
- https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-chongqing-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm
- https://en.allmetsat.com/metar-taf/asia.php?icao=ZSPD
- https://en.allmetsat.com/metar-taf/china.php?icao=ZGGG
- https://en.allmetsat.com/metar-taf/asia.php?icao=ZUCK
- https://en.allmetsat.com/metar-taf/east-china.php?icao=ZGSZ
- https://en.allmetsat.com/metar-taf/asia.php?icao=RKSI
- https://weather.metoffice.gov.uk/forecast/ws0e3x09w
- https://weather.metoffice.gov.uk/forecast/ws10k3j56
- https://weather.metoffice.gov.uk/forecast/wm78q9qxj
- https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- https://weather.metoffice.gov.uk/forecast/wydj553hq
- https://www.accuweather.com/en/cn/guangzhou-baiyun-international-airport/1839_poi/weather-forecast/1839_poi
- https://www.accuweather.com/en/cn/shenzhen-baoan-international-airport/1831_poi/weather-forecast/1831_poi
- https://www.accuweather.com/en/cn/chongqing-jiangbei-international-airport/1795_poi/weather-forecast/1795_poi

## Repo Log Update
- Updated latest snapshot target: odds/latest.md.
- Added history snapshot target: odds/history/2026-06-19T0308Z.md.
- Added alert target: alerts/2026-06-19T0308Z.md.
- Added structured data target: data/market_snapshots/2026-06-19T0308Z.json.
- Added paper-trading entry target: paper_trading/entries/PT-20260619-222.md.
- Added paper-trading ledger append target: paper_trading/ledger_appends/2026-06-19T0308Z.csv.
- Added paper-trading maintenance target: paper_trading/maintenance/2026-06-19T0308Z.md.
- Updated rolling paper-trading log, paper-trading summary, watchlist, edge notes, and repo working notes.
- Paper trading only; no real bets, trades, wallet actions, or order execution performed.