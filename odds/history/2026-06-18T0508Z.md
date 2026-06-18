# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 05:08:31
- HKT: 2026-06-18 13:08:31
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Seoul/Incheon Jun 18 and Jun 19; Shanghai/Pudong Jun 18 and Jun 19; Tokyo/Haneda Jun 18; Shenzhen/ZGSZ Jun 18 and Jun 19; Guangzhou/ZGGG Jun 18 and Jun 19; Hong Kong/HKO Jun 18 and Jun 19.
- Station and weather evidence: Polymarket public market pages and resolution rules; Allmetsat / METAR-TAF / CheckWX snippets for RKSI, ZSPD, ZGSZ, ZGGG, and RJTT; Met Office forecasts for Tokyo Haneda, Shanghai, Shenzhen, and Guangzhou; HKO 9-day forecast.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes / Buy No quotes. Confidence is capped where displayed probabilities, executable depth, final Wunderground station history, or source timing may diverge.

## Top Edges

### 1. Polymarket Shanghai/ZSPD Jun 19 29C YES
- Current price: 29C displayed 14%; Buy Yes 14c. Nearby outcomes: 28C displayed 13% / Buy Yes 14c; 30C displayed 30% / Buy Yes 30c; 31C displayed 26% / Buy Yes 26c; 32C displayed 13% / Buy Yes 14c.
- Implied probability: about 14%.
- Estimated fair value: 22%-34%.
- Estimated edge: roughly +8 to +20 percentage points.
- Confidence: low.
- Classification: moderate represented paper-only edge.
- Key reasoning: ZSPD's Friday TAF context still supports a 29C-ish airport high, while Met Office Shanghai remains cooler at 28C with rain/showery conditions. The market remains centered hotter at 30C/31C, so 29C is still underweighted after exact-degree and source-quality haircuts.
- Liquidity/practicality notes: event volume is about $17.6K and the 29C bucket has about $1.6K volume. Thin target liquidity and one-hour-old paper exposure block a duplicate.
- Decision: maintain PT-20260618-208 only; no new paper add at the same 14c entry price.

### 2. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 37%; Buy Yes 37c. Nearby outcomes: 30C displayed 28% / Buy Yes 28c; 32C displayed 21% / Buy Yes 21c; 29C displayed 11% / Buy Yes 11c.
- Implied probability: about 37%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: medium-low.
- Classification: moderate represented maintenance.
- Key reasoning: HKO's 11:30 HKT forecast for Jun 19 gives 27-31C with mainly cloudy weather, a few showers, isolated thunderstorms at first, and sunny periods in the afternoon. That keeps 31C the best official single bucket, but the 32C price has firmed and a brief sunny/urban heat push can move the result above 31.9C.
- Liquidity/practicality notes: event volume is about $16.1K. Existing PT-20260617-199 at 38c and PT-20260617-200 at 35c already represent the thesis.
- Decision: maintain existing 31C paper exposure only; no duplicate above the 35c add-on.

### 3. Polymarket Tokyo/Haneda Jun 18 26C YES
- Current price: 26C displayed 19%; Buy Yes 22c. Nearby outcomes: 25C displayed 61% / Buy Yes 63c; 24C displayed 8% / Buy Yes 9.2c; 27C displayed 8% / Buy Yes 12c; 28C displayed 4% / Buy Yes 7.2c.
- Implied probability: about 19%-22%.
- Estimated fair value: 22%-32%.
- Estimated edge: roughly 0 to +10 percentage points.
- Confidence: low.
- Classification: weak-to-moderate represented maintenance.
- Key reasoning: Met Office Tokyo Haneda still lists Thursday max at 26C, but the market has repriced toward the 25C bucket and the current 26C quote is double the latest 11c paper add-on. This is still alive, but not clean enough for a fresh position at 22c.
- Liquidity/practicality notes: event volume is about $80.2K, but same-day exact-degree risk is high.
- Decision: maintain PT-20260618-204 and PT-20260618-206 only.

### 4. Polymarket Seoul/Incheon Jun 18 29C BUY_NO
- Current price: 29C displayed 8%; Buy Yes 8c / Buy No 93c. Market leader: 28C displayed 92% / Buy Yes 92c.
- Implied probability: about 93% for the No side at the visible quote.
- Estimated fair value: 88%-95% for NOT 29C.
- Estimated edge: roughly -5 to +2 percentage points at the current No quote.
- Confidence: medium-low as maintenance, low for fresh entry.
- Classification: prior paper edge now mostly closed.
- Key reasoning: The prior No entry has moved sharply in favor as the board flipped from 29C to 28C. Current public evidence still supports 28C as the likely station high, but at 93c the No side no longer offers a meaningful fresh discount.
- Liquidity/practicality notes: event volume is about $157.7K. The move is favorable for PT-20260618-207, but it is now too late/expensive to add.
- Decision: maintain PT-20260618-207; no new trade.

### 5. Other Watchlist Notes
- Shanghai/ZSPD Jun 18 30C YES remains adverse/no-add: the board now centers 27C at 62% and 28C at 32%, while 30C is near 1%.
- Shenzhen/ZGSZ Jun 18 29C YES remains adverse/no-add: 26C now dominates, and 29C is only about 1% displayed / Buy Yes 2.2c after heavy-rain/thunderstorm evidence.
- Shenzhen/ZGSZ Jun 19 30C at Buy Yes 23c is watch-only: market spread across 30C/31C/32C is plausible, and weather guidance keeps storm-driven adjacent outcomes live.
- Guangzhou/ZGGG Jun 19 32C is near fair at Buy Yes 30c against Met Office 32C guidance; low bucket volumes and 31C/33C adjacency block any paper entry.
- Seoul/Incheon Jun 19 29C is near fair at Buy Yes 35c against a 28C/29C/30C cluster; no fresh edge.

## Recommended Paper Trades
- No new paper trade is recommended this run.
- Maintain PT-20260618-208 Shanghai/ZSPD Jun 19 29C YES from 14c, PT-20260617-199 / PT-20260617-200 HKO Jun 19 31C YES from 38c/35c, PT-20260618-204 / PT-20260618-206 Tokyo/Haneda Jun 18 26C YES from 33c/11c, and PT-20260618-207 Seoul/Incheon Jun 18 29C BUY_NO from 35c.

## Risks and Invalidation Factors
- Whole-degree Wunderground settlement can flip Tokyo, Seoul, Shanghai, Shenzhen, and Guangzhou on a single rounded station print.
- Shanghai Jun 19 is a young, thin market; visible 14c quotes may not reflect practical executable depth.
- HKO Jun 19 31C can lose either to a 30.9C cap or to a 32.0C+ sunny-break overshoot.
- Tokyo 26C depends on late-day warming at Haneda; a 25C cap is now the market's dominant path.
- TAF maximum-temperature groups are useful station-specific signals but are not the final resolution source.
- Public Polymarket pages can show display probabilities that differ from live depth.

## Sources Used
- Polymarket Seoul Jun 18 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-18-2026
- Polymarket Seoul Jun 19 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- Allmetsat / METAR-TAF / airport weather snippets for RKSI.
- Polymarket Shanghai Jun 18 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-18-2026
- Polymarket Shanghai Jun 19 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- CheckWX / Allmetsat / Windy snippets for ZSPD.
- Met Office Shanghai forecast: https://weather.metoffice.gov.uk/forecast/wtw3u0gu2
- Polymarket Tokyo Jun 18 event: https://polymarket.com/event/highest-temperature-in-tokyo-on-june-18-2026
- Met Office Tokyo Haneda forecast: https://weather.metoffice.gov.uk/forecast/xn76hz8ty
- Polymarket Hong Kong Jun 18 and Jun 19 events: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026 and https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- Polymarket Shenzhen Jun 18 and Jun 19 events: https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-18-2026 and https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- Polymarket Guangzhou Jun 18 and Jun 19 events: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-18-2026 and https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- Met Office Guangzhou forecast: https://weather.metoffice.gov.uk/forecast/ws0e3x09w

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0508Z.md, alerts/2026-06-18T0508Z.md, data/market_snapshots/2026-06-18T0508Z.json, and paper_trading/maintenance/2026-06-18T0508Z.md.
- Updated rolling memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only positions: none. No real trades or betting actions were executed.