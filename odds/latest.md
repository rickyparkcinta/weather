# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 08:12:26
- HKT: 2026-06-18 16:12:26
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Seoul/Incheon Jun 19 and Jun 20; Shanghai/Pudong Jun 19 and Jun 20; Shenzhen/ZGSZ Jun 19; Hong Kong/HKO Jun 19; Guangzhou/ZGGG Jun 19 and Jun 20; Tokyo/Haneda Jun 18.
- Forecast and station evidence: Polymarket public market pages and resolution rules; Met Office forecasts for Incheon, Seoul Incheon, Shanghai International, Shenzhen, Guangzhou, and Tokyo Haneda; HKO 9-day forecast; NOAA/NWS current station summaries for RJTT, RKSI, ZSPD, ZGSZ, and ZGGG.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes / Buy No quotes. Confidence is capped where displayed probabilities, executable depth, final Wunderground station history, or source timing may diverge.

## Top Edges

### 1. Polymarket Seoul/Incheon Jun 19 30C YES
- Current price: 30C displayed 23%; Buy Yes 23c. Nearby outcomes: 29C displayed 33% / Buy Yes 34c; 28C displayed 27% / Buy Yes 27c; 31C displayed 8% / Buy Yes 9c.
- Implied probability: about 23%.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly +9 to +19 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: the market resolves to Incheon Intl Airport. Met Office Incheon and Seoul Incheon both still show Jun 19 maximum temperature at 30C with sunny conditions, while Polymarket still leads with 29C and 28C. RKSI has already shown a warm Jun 18 path near 27C/28C, supporting the idea that a clear Friday can reach the 30C bucket.
- Liquidity/practicality notes: event volume about $28.3K and 30C bucket volume about $1.9K. PT-20260618-210 already holds 30C from 25c; the current 23c quote is only a two-cent improvement, so no duplicate paper add.
- Decision: maintain PT-20260618-210 only.

### 2. Polymarket Shanghai/ZSPD Jun 19 28C YES
- Current price: 28C displayed 15%; Buy Yes 16c. Nearby outcomes: 30C displayed 31% / Buy Yes 31c; 29C displayed 24% / Buy Yes 24c; 31C displayed 22% / Buy Yes 23c.
- Implied probability: about 16%.
- Estimated fair value: 24%-34%.
- Estimated edge: roughly +8 to +18 percentage points.
- Confidence: low.
- Classification: moderate represented adjacent-bucket edge.
- Key reasoning: Met Office Shanghai International still shows Jun 19 maximum temperature at 28C with heavy showers and 90% heavy-rain risk around 6am, while the market remains centered around 29C/30C/31C. ZSPD had reached 28C on Jun 18, so the lower Friday thesis depends on rain/cloud suppression rather than a cold baseline.
- Liquidity/practicality notes: event volume about $24.7K and 28C bucket volume about $3.8K. PT-20260618-211 already holds from 17c; the current 16c quote is only a one-cent improvement.
- Decision: maintain PT-20260618-211 only.

### 3. Polymarket Shenzhen/ZGSZ Jun 19 32C YES
- Current price: 32C displayed 22%; Buy Yes 22c. Nearby outcomes: 31C displayed 31% / Buy Yes 31c; 30C displayed 22% / Buy Yes 24c; 33C displayed 7% / Buy Yes 7.5c.
- Implied probability: about 22%.
- Estimated fair value: 28%-38%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low.
- Classification: moderate represented edge.
- Key reasoning: Met Office Shenzhen still lists Jun 19 daily max at 32C with sunny intervals, while Polymarket prices 32C below the 31C leader and even below the 30C buy quote. The hourly table peaks at 31C and ZGSZ's latest station summary showed rain-cooled 26C, so this remains forecast-driven rather than station-confirmed.
- Liquidity/practicality notes: event volume about $19.1K and 32C bucket volume about $2.8K. PT-20260618-212 already opened at the same 22c price last hour.
- Decision: maintain PT-20260618-212 only.

### 4. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 43%; Buy Yes 44c. Nearby outcomes: 30C displayed 31% / Buy Yes 32c; 32C displayed 13% / Buy Yes 14c; 29C displayed 7% / Buy Yes 8c.
- Implied probability: about 44%.
- Estimated fair value: 45%-55%.
- Estimated edge: roughly +1 to +11 percentage points.
- Confidence: medium-low.
- Classification: represented maintenance.
- Key reasoning: HKO's 11:30 HKT 9-day forecast lists Jun 19 at 27-31C with mainly cloudy weather, a few showers, isolated thunderstorms at first, and sunny periods in the afternoon. The market has repriced close to the forecast center and is now above both 38c/35c paper entries.
- Liquidity/practicality notes: event volume about $31.8K. One-decimal HKO settlement makes 30.9C and 32.0C boundary risk material.
- Decision: maintain PT-20260617-199 / PT-20260617-200 only.

### 5. Polymarket Tokyo/Haneda Jun 18 27C YES
- Current price: 27C displayed 7.2%; Buy Yes 10.1c. Market leader: 26C displayed 92%; Buy Yes 95c.
- Implied probability: about 10%.
- Estimated fair value: 8%-16%.
- Estimated edge: roughly -2 to +6 percentage points.
- Confidence: low.
- Classification: weak represented maintenance.
- Key reasoning: Met Office Tokyo Haneda still shows today at 27C and the next-hour forecast at 27C, but RJTT was still only 26C at 07:30 UTC and the public market has moved strongly toward 26C.
- Liquidity/practicality notes: event volume about $117.2K and 27C bucket volume about $9.4K. Existing PT-20260618-209 at 12c is weakened; no add.
- Decision: maintain/watch only.

## Recommended Paper Trades
- No new paper-only position recommended this run.
- Maintain existing simulated positions: PT-20260618-210 Seoul/Incheon Jun 19 30C YES from 25c; PT-20260618-211 Shanghai/ZSPD Jun 19 28C YES from 17c; PT-20260618-212 Shenzhen/ZGSZ Jun 19 32C YES from 22c; PT-20260618-209 Tokyo/Haneda Jun 18 27C YES from 12c; PT-20260617-199 / PT-20260617-200 HKO Jun 19 31C YES from 38c/35c.
- Watch-only: Shanghai/ZSPD Jun 20 29C is forecast-aligned but has very poor target liquidity and a wide public spread; Guangzhou/ZGGG Jun 20 34C is forecast-aligned but newly opened with only about $348 event volume.

## Risks and Invalidation Factors
- Exact-degree weather markets can flip on a single station print, late clearing, rain timing, or Wunderground/HKO source handling.
- Seoul 30C can miss lower if clouds or sea-breeze effects cap RKSI at 28C/29C, or higher if heat overshoots into 31C.
- Shanghai 28C needs rain/cloud persistence; earlier clearing can push ZSPD back to 29C/30C.
- Shenzhen 32C can miss lower if rain persists or higher if afternoon clearing is stronger than the hourly forecast.
- HKO 31C can miss to 30.xC under showers or to 32.0C+ with stronger afternoon sun.
- Public Polymarket pages can show prices that differ from executable order-book depth.

## Sources Used
- Polymarket Seoul Jun 19 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- Polymarket Seoul Jun 20 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-20-2026
- Polymarket Shanghai Jun 19 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- Polymarket Shanghai Jun 20 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-20-2026
- Polymarket Shenzhen Jun 19 event: https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- Polymarket Hong Kong Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket Guangzhou Jun 19 event: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- Polymarket Guangzhou Jun 20 event: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-20-2026
- Polymarket Tokyo Jun 18 event: https://polymarket.com/event/highest-temperature-in-tokyo-on-june-18-2026
- Met Office Incheon and Seoul Incheon forecasts: https://weather.metoffice.gov.uk/forecast/wydj553hq and https://weather.metoffice.gov.uk/forecast/wy9vjmn3q
- Met Office Shanghai International forecast: https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- Met Office Shenzhen and Guangzhou forecasts: https://weather.metoffice.gov.uk/forecast/ws10k3j56 and https://weather.metoffice.gov.uk/forecast/ws0e3x09w
- Met Office Tokyo Haneda forecast: https://weather.metoffice.gov.uk/forecast/xn76hz8ty
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- NOAA/NWS current station summaries: https://tgftp.nws.noaa.gov/weather/current/RJTT.html, https://tgftp.nws.noaa.gov/weather/current/RKSI.html, https://tgftp.nws.noaa.gov/weather/current/ZSPD.html, https://tgftp.nws.noaa.gov/weather/current/ZGSZ.html, and https://tgftp.nws.noaa.gov/weather/current/ZGGG.html

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0812Z.md, alerts/2026-06-18T0812Z.md, data/market_snapshots/2026-06-18T0812Z.json, and paper_trading/maintenance/2026-06-18T0812Z.md.
- Updated rolling memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- No new simulated paper position or ledger append. No real trades or betting actions were executed.