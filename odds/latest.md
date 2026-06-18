# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 07:11:57
- HKT: 2026-06-18 15:11:57
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Tokyo/Haneda Jun 18; Seoul/Incheon Jun 18 and Jun 19; Shanghai/Pudong Jun 19 and Jun 20; Hong Kong/HKO Jun 19; Shenzhen/ZGSZ Jun 19; Guangzhou/ZGGG Jun 19.
- Station and weather evidence: Polymarket public market pages and resolution rules; Met Office forecasts for Tokyo Haneda, Incheon, Seoul Incheon, Shanghai International, Shenzhen, and Guangzhou; HKO 9-day text forecast; NOAA/NWS current station summaries for RJTT, RKSI, ZSPD, and ZGSZ.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes / Buy No quotes. Confidence is capped where displayed probabilities, executable depth, final Wunderground station history, or source timing may diverge.

## Top Edges

### 1. Polymarket Shanghai/ZSPD Jun 19 28C YES
- Current price: 28C displayed 15%; Buy Yes 16c. Nearby outcomes: 29C displayed 24% / Buy Yes 24c; 30C displayed 31% / Buy Yes 31c; 31C displayed 22% / Buy Yes 23c.
- Implied probability: about 16%.
- Estimated fair value: 24%-34%.
- Estimated edge: roughly +8 to +18 percentage points.
- Confidence: low.
- Classification: moderate represented adjacent-bucket edge.
- Key reasoning: Met Office Shanghai International still shows Jun 19 daily max at 28C with heavy showers and a rain-heavy hourly path peaking only around 27C, while the market remains centered around 29C/30C/31C. ZSPD current summaries remain humid with a 27C latest print, supporting a rain-cooled path but not resolving the source conflict.
- Liquidity/practicality notes: event volume about $24.7K and 28C bucket volume about $3.8K. PT-20260618-211 already opened at 17c one hour ago, so a 1c improvement is not enough for another paper add.
- Decision: maintain PT-20260618-211 only; no duplicate.

### 2. Polymarket Seoul/Incheon Jun 19 30C YES
- Current price: 30C displayed 25%; Buy Yes 25c. Nearby outcomes: 29C displayed 34% / Buy Yes 35c; 28C displayed 27% / Buy Yes 28c; 31C displayed 8% / Buy Yes 9c.
- Implied probability: about 25%.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: the market resolves to Incheon Intl Airport. Met Office Incheon and Seoul Incheon both show Jun 19 max around 30C with afternoon hourly peaks at 30C, while Polymarket still makes 29C the leader. RKSI had already printed 28C by 06:00 UTC on Jun 18.
- Liquidity/practicality notes: event volume about $24.8K, but the 30C bucket volume is only about $1.4K. PT-20260618-210 already opened at the same 25c price one hour ago.
- Decision: maintain PT-20260618-210 only; no same-price duplicate.

### 3. Polymarket Shenzhen/ZGSZ Jun 19 32C YES
- Current price: 32C displayed 22%; Buy Yes 22c. Nearby outcomes: 31C displayed 31% / Buy Yes 31c; 30C displayed 22% / Buy Yes 24c; 29C displayed 14% / Buy Yes 14c; 33C displayed 7% / Buy Yes 7.5c.
- Implied probability: about 22%.
- Estimated fair value: 28%-38%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low.
- Classification: moderate fresh paper-only edge.
- Key reasoning: Met Office Shenzhen prints Jun 19 daily max at 32C, with a warm afternoon plateau near 31C and lower rain probabilities later in the day. The market now prices 32C below both 31C and the 30C buy quote despite the official daily max centering the bucket. This is a narrow whole-degree edge; the same Met Office hourly table only reaches 31C, so confidence stays low.
- Liquidity/practicality notes: event volume about $19.1K and 32C bucket volume about $2.8K. ZGSZ current data was stale at 03:00 UTC and storm-affected, so this is forecast-driven rather than live-station-confirmed.
- Decision: open PT-20260618-212, paper-only BUY_YES at 22c, $5 simulated notional.

### 4. Polymarket Tokyo/Haneda Jun 18 27C YES
- Current price: 27C displayed 13.9%; Buy Yes 16.9c. Nearby outcomes: 26C displayed 83% / Buy Yes 84c; 28C displayed 3.1% / Buy Yes 5.0c.
- Implied probability: about 17%.
- Estimated fair value: 18%-28%.
- Estimated edge: roughly +1 to +11 percentage points.
- Confidence: low.
- Classification: represented maintenance.
- Key reasoning: Met Office Tokyo Haneda still shows today at 27C and the hourly table sits at 27C through late afternoon; NOAA/NWS had RJTT at 26C by 06:30 UTC. The market has repriced 27C up from the 12c paper entry, narrowing the edge.
- Liquidity/practicality notes: event volume about $114.4K and 27C bucket volume about $8.7K. Existing PT-20260618-209 is better than the current quote.
- Decision: maintain only; no duplicate.

### 5. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 42%; Buy Yes 42c. Nearby outcomes: 30C displayed 30% / Buy Yes 31c; 29C displayed 14% / Buy Yes 15c; 32C displayed 6% / Buy Yes 6c.
- Implied probability: about 42%.
- Estimated fair value: 44%-54%.
- Estimated edge: roughly +2 to +12 percentage points.
- Confidence: medium-low.
- Classification: represented maintenance.
- Key reasoning: HKO's 9-day forecast lists Jun 19 at 27-31C with mainly cloudy weather, a few showers, isolated thunderstorms at first, and sunny periods in the afternoon. The market remains centered on 31C but has already repriced well above the 35c/38c paper entries.
- Liquidity/practicality notes: event volume about $28.4K and 31C bucket volume about $5.7K. HKO one-decimal settlement makes 30.9C and 32.0C boundary risk material.
- Decision: maintain PT-20260617-199 / PT-20260617-200 only; no duplicate.

## Recommended Paper Trades
- Open PT-20260618-212: paper-only BUY_YES on Polymarket Shenzhen/ZGSZ Jun 19 highest temperature 32C at Buy Yes 22c, $5 simulated notional.
- Maintain, no duplicate: PT-20260618-211 Shanghai/ZSPD Jun 19 28C YES from 17c; PT-20260618-210 Seoul/Incheon Jun 19 30C YES from 25c; PT-20260618-209 Tokyo/Haneda Jun 18 27C YES from 12c; PT-20260617-199 / PT-20260617-200 HKO Jun 19 31C YES from 38c/35c.

## Risks and Invalidation Factors
- Whole-degree Wunderground settlement can flip Seoul, Shanghai, Shenzhen, Guangzhou, and Tokyo on one rounded station print.
- Shenzhen 32C can miss lower if rain/cloud persists or the ZGSZ station tops at 31C; it can miss higher if late clearing pushes to 33C.
- Shanghai 28C depends on heavy rain and cloud persistence; any earlier clearing can shift ZSPD back toward 29C/30C.
- Seoul 30C can miss to 29C on sea-breeze/cloud suppression or to 31C on stronger afternoon heating.
- HKO Jun 19 31C can lose either to a 30.9C cap or to a 32.0C+ sunny-break overshoot.
- Public Polymarket pages can show display probabilities that differ from live executable depth.

## Sources Used
- Polymarket Seoul Jun 19 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- Polymarket Shanghai Jun 19 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- Polymarket Shenzhen Jun 19 event: https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- Polymarket Hong Kong Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket Tokyo Jun 18 event: https://polymarket.com/event/highest-temperature-in-tokyo-on-june-18-2026
- Polymarket Guangzhou Jun 19 event: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- Met Office Tokyo Haneda forecast: https://weather.metoffice.gov.uk/forecast/xn76hz8ty
- Met Office Incheon and Seoul Incheon forecasts: https://weather.metoffice.gov.uk/forecast/wydj553hq and https://weather.metoffice.gov.uk/forecast/wy9vjmn3q
- Met Office Shanghai International forecast: https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- Met Office Shenzhen and Guangzhou forecasts: https://weather.metoffice.gov.uk/forecast/ws10k3j56 and https://weather.metoffice.gov.uk/forecast/ws0e3x09w
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- NOAA/NWS current station summaries: https://tgftp.nws.noaa.gov/weather/current/RJTT.html, https://tgftp.nws.noaa.gov/weather/current/RKSI.html, https://tgftp.nws.noaa.gov/weather/current/ZSPD.html, and https://tgftp.nws.noaa.gov/weather/current/ZGSZ.html

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0711Z.md, alerts/2026-06-18T0711Z.md, data/market_snapshots/2026-06-18T0711Z.json, paper_trading/entries/PT-20260618-212.md, paper_trading/ledger_appends/2026-06-18T0711Z.csv, and paper_trading/maintenance/2026-06-18T0711Z.md.
- Updated rolling memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only position: PT-20260618-212 Shenzhen/ZGSZ Jun 19 32C YES at Buy Yes 22c, $5 notional. No real trades or betting actions were executed.
