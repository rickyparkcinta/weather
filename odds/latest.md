# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 22:12:11 UTC
- HKT: 2026-06-19 06:12:11 HKT
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Guangzhou/ZGGG Jun 19; Shenzhen/ZGSZ Jun 19; Chongqing/ZUCK Jun 19; Shanghai/ZSPD Jun 19; Hong Kong/HKO Jun 19; Seoul/Incheon/RKSI Jun 19.
- Evidence checked: Polymarket public market pages; Met Office city/airport forecasts; HKO 9-day forecast and regional readings; AccuWeather airport pages for Guangzhou, Shenzhen, and Chongqing; aviation METAR/TAF pages for ZGGG, ZGSZ, ZUCK, ZSPD, and RKSI.
- Source-quality note: direct trading/execution APIs were not used and no order books were touched for execution. Public Polymarket pages and public weather sources were used for analysis only.

## Top Edges

### 1. Polymarket Guangzhou/ZGGG Jun 19 31C YES
- Current price: 31C displayed 18%; Buy Yes 18c. Nearby outcomes: 32C 29% / Buy Yes 29c; 30C 20% / Buy Yes 21c; 33C 17% / Buy Yes 19c; 34C 16% / Buy Yes 16c.
- Implied probability: about 18%.
- Estimated fair value: 32%-44%.
- Estimated edge: roughly +14 to +26 percentage points.
- Confidence: low-to-medium-low.
- Classification: strong paper-only hedge edge.
- Key reasoning: ZGGG was 26C at 06:09 HKT with light rain showers. The fresh airport TAF calls TX31/1907Z, AccuWeather's airport page shows an 88F/31C-style high and hourly peak, and Met Office hourly guidance also only reaches 31C even though its daily headline says 32C. The market still prices 31C below both 30C and 32C.
- Liquidity/practicality notes: event volume about $34.1K; 31C bucket volume about $2.3K. Exact-degree and Wunderground/source risk remain high.
- Decision: open PT-20260618-218, a $5 simulated BUY_YES hedge on 31C.

### 2. Polymarket Shanghai/ZSPD Jun 19 30C YES
- Current price: 30C displayed 24%; Buy Yes 24c. Nearby outcomes: 29C 31% / Buy Yes 31c; 31C 24% / Buy Yes 24c; 28C 19% / Buy Yes 19c.
- Implied probability: about 24%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +10 to +20 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge.
- Key reasoning: ZSPD was 24C with fog/mist early, and the current TAF has TX30/1906Z. Met Office's daily headline also says 30C, but its hourly path and heavy-shower probabilities keep 28C/29C/31C live.
- Liquidity/practicality notes: event volume about $68.5K; 30C bucket volume about $4.8K. Current price matches PT-20260618-217's 24c entry.
- Decision: maintain PT-20260618-217 only; no duplicate at the same entry price.

### 3. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 39%; Buy Yes 39c. Nearby outcomes: 30C 32% / Buy Yes 32c; 32C 16% / Buy Yes 16c; 29C 14% / Buy Yes 15c.
- Implied probability: about 39%.
- Estimated fair value: 45%-55%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: medium-low.
- Classification: represented moderate edge.
- Key reasoning: HKO's 05:50 HKT official forecast keeps Jun 19 at 27C-31C with showers at first and sunny periods during the day. At 05:00 HKT the Observatory's max since midnight was still 28.4C, so the thesis needs afternoon clearing but remains centered on 31C.
- Liquidity/practicality notes: event volume about $91.9K; 31C bucket volume about $11.6K. Current quote is above existing 35c/38c paper entries.
- Decision: maintain PT-20260617-199 and PT-20260617-200 only; no duplicate above entries.

### 4. Polymarket Chongqing/ZUCK Jun 19 28C YES
- Current price: 28C displayed 10%; Buy Yes 10c. Nearby outcomes: 30C 34% / Buy Yes 34c; 31C 31% / Buy Yes 31c; 29C 16% / Buy Yes 17c; 32C 11% / Buy Yes 12c.
- Implied probability: about 10%.
- Estimated fair value: 18%-30%.
- Estimated edge: roughly +8 to +20 percentage points.
- Confidence: low.
- Classification: moderate low-confidence hedge edge.
- Key reasoning: ZUCK was only 22C at 06:09 HKT, and the latest airport TAF calls TX28/1907Z. This conflicts sharply with Met Office and AccuWeather airport guidance around 31C, so this is a risk-control hedge against the existing 31C paper thesis, not a clean standalone.
- Liquidity/practicality notes: event volume about $14.4K; 28C bucket volume about $1.2K. Liquidity is thinner and source disagreement is large.
- Decision: open PT-20260618-219, a $5 simulated BUY_YES hedge on 28C; downgrade PT-20260618-214 31C to adverse-watch.

### 5. Polymarket Shenzhen/ZGSZ Jun 19 30C YES
- Current price: 30C displayed 29%; Buy Yes 29c. Nearby outcomes: 31C 32% / Buy Yes 32c; 32C 22% / Buy Yes 22c; 29C 11% / Buy Yes 12c.
- Implied probability: about 29%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: low.
- Classification: moderate hedge edge.
- Key reasoning: ZGSZ was 28C at 06:09 HKT and the fresh airport TAF calls TX30/1906Z; AccuWeather airport guidance peaks at 86F/30C. Met Office still reaches 32C, so the fair range is capped, but the market's 30C price looks too low relative to airport-specific evidence.
- Liquidity/practicality notes: event volume about $60.9K; 30C bucket volume about $4.9K. This hedges older 32C exposure rather than replacing it.
- Decision: open PT-20260618-220, a $5 simulated BUY_YES hedge on 30C; downgrade PT-20260618-212 32C to weakened/adverse-watch.

### 6. Polymarket Seoul/Incheon Jun 19 31C YES
- Current price: 31C displayed 13%; Buy Yes 13c. Nearby outcomes: 29C 35% / Buy Yes 35c; 30C 33% / Buy Yes 34c; 28C 17% / Buy Yes 17c.
- Implied probability: about 13%.
- Estimated fair value: 6%-14%.
- Estimated edge: roughly -7 to +1 percentage points.
- Confidence: low.
- Classification: no fresh edge; represented thesis weakened.
- Key reasoning: Met Office still shows 31C for Incheon, but the newer RKSI TAF calls TX29/1906Z and current airport readings remain cool early. That makes the old 31C tail thesis much weaker than the last run.
- Liquidity/practicality notes: event volume about $54.8K; 31C bucket volume about $3.2K.
- Decision: maintain PT-20260618-216 as weakened/adverse-watch; no new Seoul paper trade.

## Recommended Paper Trades
- PT-20260618-218: BUY_YES Guangzhou/ZGGG Jun 19 31C at 18c, $5 simulated notional, confidence low-to-medium-low.
- PT-20260618-219: BUY_YES Chongqing/ZUCK Jun 19 28C at 10c, $5 simulated notional, confidence low.
- PT-20260618-220: BUY_YES Shenzhen/ZGSZ Jun 19 30C at 29c, $5 simulated notional, confidence low.

## Risks and Invalidation Factors
- Exact Celsius buckets can lose on a one-degree boundary even when the forecast direction is right.
- Wunderground final history may differ from METAR/TAF, Met Office, or AccuWeather sources.
- Guangzhou 31C and Shenzhen 30C are hedges against older 32C exposure; a sunnier afternoon can still push both one or two buckets higher.
- Chongqing is highly source-conflicted: the current airport TAF supports 28C, while Met Office and AccuWeather support hotter 30C/31C outcomes.
- Public Polymarket display can diverge from executable depth; paper prices use visible public quotes only.

## Sources Used
- https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-chongqing-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- https://weather.metoffice.gov.uk/forecast/ws0e3x09w
- https://weather.metoffice.gov.uk/forecast/ws10k3j56
- https://weather.metoffice.gov.uk/forecast/wm78q9qxj
- https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- https://weather.metoffice.gov.uk/forecast/wydj553hq
- https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm
- https://www.accuweather.com/en/cn/guangzhou-baiyun-international-airport/1839_poi/weather-forecast/1839_poi
- https://www.accuweather.com/en/cn/shenzhen-baoan-international-airport/1831_poi/weather-forecast/1831_poi
- https://www.accuweather.com/en/cn/chongqing-jiangbei-international-airport/1795_poi/june-weather/1795_poi
- https://en.allmetsat.com/metar-taf/china.php?icao=ZGGG
- https://en.allmetsat.com/metar-taf/east-china.php?icao=ZGSZ
- https://en.allmetsat.com/metar-taf/asia.php?icao=ZUCK
- https://en.allmetsat.com/metar-taf/asia.php?icao=ZSPD
- https://metarreader.com/station/RKSI/incheon-airport

## Repo Log Update
- Updated latest snapshot target: odds/latest.md.
- Added history snapshot target: odds/history/2026-06-18T2212Z.md.
- Added alert target: alerts/2026-06-18T2212Z.md.
- Added structured data target: data/market_snapshots/2026-06-18T2212Z.json.
- Added paper-trade entries: paper_trading/entries/PT-20260618-218.md, PT-20260618-219.md, PT-20260618-220.md.
- Added ledger append: paper_trading/ledger_appends/2026-06-18T2212Z.csv.
- Added paper-trading maintenance target: paper_trading/maintenance/2026-06-18T2212Z.md.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- Paper trading only; no real bets, trades, wallet actions, or order execution performed.
