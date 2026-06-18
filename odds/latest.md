# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 06:08:15
- HKT: 2026-06-18 14:08:15
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Tokyo/Haneda Jun 18; Seoul/Incheon Jun 18 and Jun 19; Shanghai/Pudong Jun 19 and Jun 20; Hong Kong/HKO Jun 19; Shenzhen/ZGSZ Jun 18 and Jun 19; Guangzhou/ZGGG Jun 19.
- Station and weather evidence: Polymarket public market pages and resolution rules; Met Office forecasts for Tokyo Haneda, Incheon, Seoul Incheon, Shanghai, Shanghai International, Shenzhen, and Guangzhou; HKO 9-day text forecast; NOAA/NWS current station summaries for RJTT, RKSI, and ZSPD.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes / Buy No quotes. Confidence is capped where displayed probabilities, executable depth, final Wunderground station history, or source timing may diverge.

## Top Edges

### 1. Polymarket Seoul/Incheon Jun 19 30C YES
- Current price: 30C displayed 25%; Buy Yes 25c. Nearby outcomes: 29C displayed 35% / Buy Yes 35c; 28C displayed 28% / Buy Yes 28c; 31C displayed 7% / Buy Yes 8c.
- Implied probability: about 25%.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate fresh paper-only edge.
- Key reasoning: the market resolves to Incheon Intl Airport. Met Office Incheon and Seoul Incheon both show Jun 19 max around 30C with hourly peaks at 30C during the afternoon, while the market still makes 29C the leader. RKSI was already 28C at 06:00 UTC on Jun 18, supporting a warm station baseline going into Friday.
- Liquidity/practicality notes: event volume about $23.3K, but the 30C bucket volume is only about $1.35K. Exact-Celsius and station-source risk keep size tiny.
- Decision: open PT-20260618-210, paper-only BUY_YES at 25c.

### 2. Polymarket Shanghai/ZSPD Jun 19 28C YES
- Current price: 28C displayed 17%; Buy Yes 17c. Nearby outcomes: 29C displayed 22% / Buy Yes 22c; 30C displayed 30% / Buy Yes 31c; 31C displayed 21% / Buy Yes 21c.
- Implied probability: about 17%.
- Estimated fair value: 24%-34%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low.
- Classification: moderate fresh adjacent-bucket hedge.
- Key reasoning: the freshest Met Office Shanghai International forecast for Jun 19 shows a 28C daily maximum with heavy rain/showers, and the city forecast also prints 28C. This shifts the best centered paper thesis cooler than the existing PT-20260618-208 29C entry, while the market still centers 30C/29C/31C. ZSPD current observations remain humid and mostly cloudy, which supports the rain-cooled path.
- Liquidity/practicality notes: event volume about $22.6K and 28C bucket volume about $3.6K. The signal is source-sensitive because prior aviation context pointed closer to 29C, so this is a hedge, not a large conviction add.
- Decision: open PT-20260618-211, paper-only BUY_YES at 17c.

### 3. Polymarket Tokyo/Haneda Jun 18 27C YES
- Current price: 27C displayed 10.8%; Buy Yes 12.0c. Nearby outcomes: 25C displayed 57% / Buy Yes 59c; 26C displayed 31% / Buy Yes 35c.
- Implied probability: about 12%.
- Estimated fair value: 18%-30%.
- Estimated edge: roughly +6 to +18 percentage points.
- Confidence: low.
- Classification: moderate represented paper-only edge.
- Key reasoning: Met Office Tokyo Haneda still shows today at 27C, with hourly values at 27C in the afternoon, and NOAA/NWS had RJTT at 26C by 06:00 UTC. The market still leads with 25C/26C. However, PT-20260618-209 already opened at the same 12c price 43 minutes earlier.
- Liquidity/practicality notes: event volume about $88.8K and 27C bucket volume about $6.3K. Same-price duplicate blocked by recent entry and exact-degree settlement risk.
- Decision: maintain PT-20260618-209 only; no duplicate.

### 4. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 42%; Buy Yes 43c. Nearby outcomes: 30C displayed 27% / Buy Yes 28c; 32C displayed 16% / Buy Yes 17c; 29C displayed 14% / Buy Yes 14c.
- Implied probability: about 43%.
- Estimated fair value: 44%-54%.
- Estimated edge: roughly +1 to +11 percentage points.
- Confidence: medium-low.
- Classification: represented maintenance.
- Key reasoning: HKO's 11:30 HKT 9-day forecast still lists Jun 19 at 27-31C with mainly cloudy weather, a few showers, isolated thunderstorms at first, and sunny periods in the afternoon. The market has repriced from 37c to 43c, so the remaining edge is smaller.
- Liquidity/practicality notes: event volume about $25.2K. Existing PT-20260617-199 at 38c and PT-20260617-200 at 35c already cover the thesis.
- Decision: maintain only; no duplicate at 43c.

### 5. Other Watchlist Notes
- Seoul/Incheon Jun 18 29C BUY_NO moved further in favor: 28C is now displayed 94% / Buy Yes 95c, while 29C is 7% / Buy Yes 8c / Buy No 95c. Maintain PT-20260618-207 from Buy No 35c; no add at the current expensive No quote.
- Shanghai/ZSPD Jun 19 29C YES from 14c is still open but less centered after the latest Met Office Shanghai International update shifted toward 28C. Maintain PT-20260618-208 only and use the new 28C hedge rather than defending 29C.
- Shenzhen/ZGSZ Jun 19 is close to fair: 31C Buy Yes 30c and 32C Buy Yes 28c versus Met Office Shenzhen daily max 32C and hourly 31C/32C split.
- Guangzhou/ZGGG Jun 19 is near fair or too thin: 32C Buy Yes 30c and 31C Buy Yes 24c versus Met Office Guangzhou daily max 32C and hourly 31C peak; target bucket volumes are light.
- Shanghai/ZSPD Jun 20 is too young/thin for a paper entry despite interesting 29C/30C clustering.

## Recommended Paper Trades
- Open PT-20260618-210: paper-only BUY_YES on Polymarket Seoul/Incheon Jun 19 highest temperature 30C at Buy Yes 25c, $5 simulated notional.
- Open PT-20260618-211: paper-only BUY_YES on Polymarket Shanghai/ZSPD Jun 19 highest temperature 28C at Buy Yes 17c, $5 simulated notional.
- Maintain, no duplicate: PT-20260618-209 Tokyo/Haneda Jun 18 27C YES from 12c; PT-20260618-207 Seoul/Incheon Jun 18 29C BUY_NO from 35c; PT-20260618-208 Shanghai/ZSPD Jun 19 29C YES from 14c; PT-20260617-199 / PT-20260617-200 HKO Jun 19 31C YES from 38c/35c.

## Risks and Invalidation Factors
- Whole-degree Wunderground settlement can flip Tokyo, Seoul, Shanghai, Shenzhen, and Guangzhou on one rounded station print.
- Seoul Jun 19 can miss to 29C if the sea breeze or late cloud suppresses Incheon Intl by one degree, or to 31C if afternoon heating exceeds the Met Office peak.
- Shanghai Jun 19 28C depends on rain/cloud persistence; any midday clearing can push ZSPD back toward 29C/30C and leave both 28C and the older 29C hedge exposed to adjacent-bucket risk.
- HKO Jun 19 31C can lose either to a 30.9C cap or to a 32.0C+ sunny-break overshoot.
- Public Polymarket pages can show display probabilities that differ from live executable depth.

## Sources Used
- Polymarket Tokyo Jun 18 event: https://polymarket.com/event/highest-temperature-in-tokyo-on-june-18-2026
- Polymarket Seoul Jun 18 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-18-2026
- Polymarket Seoul Jun 19 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- Polymarket Shanghai Jun 19 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- Polymarket Shanghai Jun 20 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-20-2026
- Polymarket Hong Kong Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket Shenzhen Jun 18 event: https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-18-2026
- Polymarket Shenzhen Jun 19 event: https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- Polymarket Guangzhou Jun 19 event: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- Met Office Tokyo Haneda forecast: https://weather.metoffice.gov.uk/forecast/xn76hz8ty
- Met Office Incheon and Seoul Incheon forecasts: https://weather.metoffice.gov.uk/forecast/wydj553hq and https://weather.metoffice.gov.uk/forecast/wy9vjmn3q
- Met Office Shanghai and Shanghai International forecasts: https://weather.metoffice.gov.uk/forecast/wtw3u0gu2 and https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- Met Office Shenzhen and Guangzhou forecasts: https://weather.metoffice.gov.uk/forecast/ws10k3j56 and https://weather.metoffice.gov.uk/forecast/ws0e3x09w
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- NOAA/NWS current station summaries: https://tgftp.nws.noaa.gov/weather/current/RJTT.html, https://tgftp.nws.noaa.gov/weather/current/RKSI.html, and https://tgftp.nws.noaa.gov/weather/current/ZSPD.html

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0608Z.md, alerts/2026-06-18T0608Z.md, data/market_snapshots/2026-06-18T0608Z.json, paper_trading/entries/PT-20260618-210.md, paper_trading/entries/PT-20260618-211.md, paper_trading/ledger_appends/2026-06-18T0608Z.csv, and paper_trading/maintenance/2026-06-18T0608Z.md.
- Updated rolling memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only positions: PT-20260618-210 Seoul/Incheon Jun 19 30C YES at Buy Yes 25c, $5 notional; PT-20260618-211 Shanghai/ZSPD Jun 19 28C YES at Buy Yes 17c, $5 notional. No real trades or betting actions were executed.
