# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-19 05:09:54 UTC
- HKT: 2026-06-19 13:09:54 HKT
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Shanghai/ZSPD Jun 19; Guangzhou/ZGGG Jun 19; Chongqing/ZUCK Jun 19; Shenzhen/ZGSZ Jun 19; Hong Kong/HKO Jun 19; Seoul/Incheon/RKSI Jun 19.
- Evidence checked: Polymarket public market pages; HKO official current forecast and current/regional readings; aviation METAR/TAF pages for ZSPD, ZGGG, ZUCK, ZGSZ, and RKSI; Weather Underground current/forecast pages where accessible.
- Source-quality note: public Polymarket pages were used for visible quotes. No execution APIs, order submission, wallets, or real-money betting actions were used.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 19 30C YES
- Current price: 30C displayed 29.6%; Buy Yes 33.9c. Nearby outcomes: 31C displayed 45% / Buy Yes 48c; 32C displayed 19% / Buy Yes 20c; 33C displayed 1.3% / Buy Yes 1.7c.
- Implied probability: about 34% at the visible Buy Yes quote.
- Estimated fair value: 40%-52%.
- Estimated edge: roughly +6 to +18 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate hedge edge.
- Key reasoning: HKO reported the Observatory at 30C at noon, with the since-midnight max only 30.2C at the Observatory. The 10:45 HKT official forecast still calls for mainly cloudy weather with a few showers, isolated thunderstorms at first, and hot sunny periods during the day. That leaves 31C live, but the market appears to lean too heavily toward 31C/32C given the 30.0C-30.9C bucket is already active and has not yet been breached at the resolution station.
- Liquidity/practicality notes: event volume about $146.4K; 30C bucket volume about $20.3K. HKO one-decimal settlement makes 31.0C a hard invalidation point for the 30C bucket.
- Decision: opened PT-20260619-226 as a $5 simulated BUY_YES hedge at 33.9c. This is paper-only.

### 2. Polymarket Guangzhou/ZGGG Jun 19 33C YES
- Current price: 33C displayed 10.8%; Buy Yes 13.9c. Nearby outcomes: 30C 46% / Buy Yes 47c; 31C 26% / Buy Yes 32c; 32C 25% / Buy Yes 28c; 34C under 1% / Buy Yes 0.5c.
- Implied probability: about 14%.
- Estimated fair value: 20%-32%.
- Estimated edge: roughly +6 to +18 percentage points.
- Confidence: low.
- Classification: moderate represented edge, no fresh add.
- Key reasoning: ZGGG was 30C at 03:30 UTC in light rain showers, and the refreshed TAF still lists TX33/1907Z with thunderstorm/rain risk around 06-08 UTC. The market continues to center around 30C-32C, leaving 33C discounted if the airport reaches the TAF maximum before convection caps heating.
- Liquidity/practicality notes: event volume about $64.7K; 33C bucket volume about $6.9K.
- Decision: maintain PT-20260619-225 from 15c only. The quote is only about 1.1c better than the last paper entry, and the evidence did not tighten enough to justify stacking duplicate paper exposure.

### 3. Polymarket Chongqing/ZUCK Jun 19 30C YES
- Current price: 30C displayed 31%; Buy Yes 34c. Nearby outcomes: 29C 22% / Buy Yes 24c; 31C 21% / Buy Yes 24c; 32C 10% / Buy Yes 12c; 28C 9% / Buy Yes 13c.
- Implied probability: about 34%.
- Estimated fair value: 30%-40%.
- Estimated edge: roughly -4 to +6 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented maintenance, no fresh edge.
- Key reasoning: ZUCK was 27C at 04:00 UTC and the TAF remains centered at TX30/1908Z. That supports the existing 30C paper entry, but the public quote has moved from 25c to 34c and Weather Underground-style context is not uniformly hotter than the TAF center.
- Liquidity/practicality notes: event volume about $20.5K; 30C bucket volume about $2.3K, so practical depth is thin.
- Decision: maintain PT-20260619-224 only; no add at the current ask.

### 4. Polymarket Shanghai/ZSPD Jun 19 30C / 31C cluster
- Current price: 30C displayed 66%; Buy Yes 69c. 31C displayed 37.6%; Buy Yes 42.1c. 29C is now under 1%; Buy Yes 0.2c.
- Implied probability: about 69% for 30C at the visible ask; about 42% for 31C at the visible ask.
- Estimated fair value: 30C 58%-72%; 31C 22%-36%; 29C 0%-5%.
- Estimated edge: no positive edge at visible asks.
- Confidence: low.
- Classification: adverse/maintenance for older 29C paper exposure; no fresh edge.
- Key reasoning: ZSPD was already 29C at 03:30 UTC, but Weather Underground current context later showed about 86F/30C at 13:00 CST and the market has moved sharply to 30C. The TAF's TX29 is now less persuasive than the live station/market evidence, and the 29C add-on from last run is likely adverse unless final Wunderground history differs.
- Liquidity/practicality notes: event volume about $191.4K; deepest current interest is in 30C/31C.
- Decision: no new paper position; mark 29C as adverse-watch until final resolution-source data is available.

### 5. Polymarket Shenzhen/ZGSZ Jun 19 31C YES
- Current price: 31C displayed 53%; Buy Yes 59c. Nearby outcomes: 32C 27% / Buy Yes 30c; 33C 12% / Buy Yes 14.9c; 30C 1% / Buy Yes 0.8c.
- Implied probability: about 59%.
- Estimated fair value: 50%-64%.
- Estimated edge: roughly -9 to +5 percentage points.
- Confidence: low.
- Classification: near-fair/no fresh edge.
- Key reasoning: ZGSZ was 29C at 04:00 UTC with showers nearby, and the TAF lists TX31/1906Z. That supports 31C, but Polymarket has already repriced 31C into the lead, and 32C remains a meaningful adjacent overshoot path.
- Liquidity/practicality notes: event volume about $109.2K; 31C bucket volume about $15.7K.
- Decision: maintain older Shenzhen paper positions only; no add.

### 6. Polymarket Seoul/Incheon/RKSI Jun 19 31C YES
- Current price: 31C displayed 74%; Buy Yes 80c. 32C or higher displayed 24.8%; Buy Yes 29.5c.
- Implied probability: about 80% for 31C at the visible ask.
- Estimated fair value: 70%-82% for 31C; 18%-30% for 32C or higher.
- Estimated edge: near fair at visible asks.
- Confidence: low-to-medium-low.
- Classification: favorable represented move, no fresh edge.
- Key reasoning: RKSI printed 31C at 04:30 UTC, which strengthens the earlier low-price 31C paper entries, but 32C+ remains live later in the afternoon and the TAF itself still lists TX29. Current pricing now reflects the known 31C print.
- Liquidity/practicality notes: event volume about $150.3K; 31C bucket volume about $14.8K.
- Decision: maintain existing Seoul/Incheon 31C paper entries only; no add and no settlement until final resolution-source data is available.

## Recommended Paper Trades
- Opened PT-20260619-226: BUY_YES Hong Kong/HKO Jun 19 30C at Buy Yes 33.9c, $5 simulated notional.

This is paper-only and intentionally tiny. It hedges existing HKO 31C/32C exposure after the official resolution station had only reached 30.2C by noon HKT.

## Settlements
- No newly settled paper trades were recorded this run.
- Seoul/Incheon/RKSI has printed 31C, but 32C or higher remains live, so 31C paper positions remain unresolved.
- Shanghai/ZSPD 29C is now adverse-watch after live/current context moved toward 30C, but final settlement is still pending Wunderground history.

## Risks and Invalidation Factors
- Exact Celsius buckets can lose on a one-degree or one-decimal boundary even when the broad forecast direction is right.
- HKO resolves on the Observatory's one-decimal Daily Extract; 31.0C invalidates the 30C hedge.
- Wunderground final history may differ from METAR/TAF or public forecast/current pages for airport-settled markets.
- Public Polymarket display can diverge from executable depth; this paper-trading workflow uses visible public quotes only.
- Thunderstorm timing remains material for Guangzhou, Shenzhen, Shanghai, and Hong Kong.
- The Seoul/Incheon repricing may reflect real-time station evidence not fully captured in the pages reviewed.

## Sources Used
- https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-chongqing-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=en
- https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en
- https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm
- https://en.allmetsat.com/metar-taf/asia.php?icao=ZSPD
- https://en.allmetsat.com/metar-taf/china.php?icao=ZGGG
- https://en.allmetsat.com/metar-taf/asia.php?icao=ZUCK
- https://en.allmetsat.com/metar-taf/east-china.php?icao=ZGSZ
- https://en.allmetsat.com/metar-taf/asia.php?icao=RKSI
- https://www.wunderground.com/weather/cn/shanghai/ZSPD
- https://www.wunderground.com/weather/ZGGG
- https://www.wunderground.com/weather/cn/chongqing

## Repo Log Update
- Updated latest snapshot target: odds/latest.md.
- Added history snapshot target: odds/history/2026-06-19T0509Z.md.
- Added alert target: alerts/2026-06-19T0509Z.md.
- Added structured data target: data/market_snapshots/2026-06-19T0509Z.json.
- Added paper-trading entry target: paper_trading/entries/PT-20260619-226.md.
- Added paper-trading ledger append target: paper_trading/ledger_appends/2026-06-19T0509Z.csv.
- Added paper-trading maintenance target: paper_trading/maintenance/2026-06-19T0509Z.md.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- Paper trading only; no real bets, trades, wallet actions, or order execution performed.
