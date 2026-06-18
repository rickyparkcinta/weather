# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 05:25:04
- HKT: 2026-06-18 13:25:04
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Tokyo/Haneda Jun 18; Shanghai/Pudong Jun 19; Hong Kong/HKO Jun 19; Seoul/Incheon Jun 18; Shenzhen/ZGSZ Jun 18 and Jun 19; Guangzhou/ZGGG Jun 19; Shanghai/Pudong Jun 18.
- Evidence used: Polymarket public market pages and resolution rules; Met Office forecasts for Tokyo Haneda and Shanghai; HKO 9-day forecast; same-run station context from earlier TAF/METAR checks.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes / Buy No quotes. Confidence is capped where displayed probabilities, executable depth, final Wunderground station history, or source timing may diverge.

## Top Edges

### 1. Polymarket Tokyo/Haneda Jun 18 27C YES
- Current price: 27C displayed about 7.6%-8%; Buy Yes 12.0c. Nearby outcomes: 25C displayed 61% / Buy Yes 63c; 26C displayed 19% / Buy Yes 22c; 24C displayed 8.2% / Buy Yes 9.2c; 28C displayed 4% / Buy Yes 7.2c.
- Implied probability: about 12% at the visible Buy Yes quote.
- Estimated fair value: 20%-32%.
- Estimated edge: roughly +8 to +20 percentage points.
- Confidence: low.
- Classification: moderate fresh paper-only edge.
- Key reasoning: Polymarket still concentrates the board on 25C/26C, but refreshed Met Office Tokyo Haneda guidance now lists today's maximum at 27C. This makes 27C a cheap adjacent-bucket hedge against existing 26C paper exposure after exact-degree and Wunderground-source haircuts.
- Liquidity/practicality notes: event volume is about $80.2K and the 27C bucket shows about $5.6K volume. Same-day exact-Celsius risk keeps sizing tiny.
- Decision: open PT-20260618-209, paper-only BUY_YES at 12.0c.

### 2. Polymarket Shanghai/ZSPD Jun 19 29C YES
- Current price: 29C displayed 16%; Buy Yes 16c. Nearby outcomes: 28C displayed 15% / Buy Yes 15c; 30C displayed 32% / Buy Yes 33c; 31C displayed 25% / Buy Yes 26c; 32C displayed 12% / Buy Yes 13c.
- Implied probability: about 16%.
- Estimated fair value: 22%-34%.
- Estimated edge: roughly +6 to +18 percentage points.
- Confidence: low.
- Classification: moderate represented paper-only edge.
- Key reasoning: Shanghai/Pudong remains a plausible rain-cooled 29C path while the market still centers hotter at 30C/31C. The edge narrowed as the quote moved from 14c to 16c, so this remains represented rather than addable.
- Liquidity/practicality notes: event volume is about $18.9K and the 29C bucket shows about $1.8K volume. Existing PT-20260618-208 exposure blocks a duplicate.
- Decision: maintain PT-20260618-208 only; no new Shanghai add.

### 3. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 37%; Buy Yes 37c. Nearby outcomes: 30C displayed 28% / Buy Yes 28c; 32C displayed 21% / Buy Yes 21c; 29C displayed 11% / Buy Yes 11c.
- Implied probability: about 37%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: medium-low.
- Classification: moderate represented maintenance.
- Key reasoning: HKO's 11:30 HKT forecast for Jun 19 gives 27-31C with mainly cloudy weather, a few showers, isolated thunderstorms at first, and sunny periods in the afternoon. That keeps 31C the best official single bucket, but 30.9C and 32.0C+ miss paths remain live.
- Liquidity/practicality notes: event volume is about $16.1K. Existing PT-20260617-199 at 38c and PT-20260617-200 at 35c already represent the thesis.
- Decision: maintain existing 31C paper exposure only; no duplicate above the 35c add-on.

### 4. Polymarket Seoul/Incheon Jun 18 29C BUY_NO
- Current price: 29C displayed 8%; Buy Yes 8c / Buy No 93c. Market leader: 28C displayed 92% / Buy Yes 92c.
- Implied probability: about 93% for the No side at the visible quote.
- Estimated fair value: 88%-95% for NOT 29C.
- Estimated edge: roughly -5 to +2 percentage points at the current No quote.
- Confidence: medium-low as maintenance, low for fresh entry.
- Classification: prior paper edge now mostly closed.
- Key reasoning: The prior No entry has moved sharply in favor as the board flipped from 29C to 28C. At 93c the No side no longer offers a meaningful fresh discount.
- Liquidity/practicality notes: event volume is about $157.7K. The move is favorable for PT-20260618-207, but it is now too expensive to add.
- Decision: maintain PT-20260618-207; no new trade.

## Recommended Paper Trades
- Open PT-20260618-209: paper-only BUY_YES on Polymarket Tokyo/Haneda Jun 18 highest temperature 27C at Buy Yes 12.0c, $5 simulated notional.
- Thesis: refreshed Met Office Tokyo Haneda guidance now prints a 27C daily maximum while Polymarket still prices 27C as a low-probability adjacent bucket. This is a tiny paper hedge against existing Tokyo 26C exposure, not a high-conviction standalone.
- Confidence: low.
- Invalidation risks: Haneda caps at 25C/26C despite the forecast; final Wunderground/RJTT history differs from Met Office guidance; late cloud, rain, or sea-breeze effects cap the station; public Polymarket quote depth is stale or thin; whole-degree settlement/rounding shifts the result.
- Maintain, no duplicate: PT-20260618-208 Shanghai/ZSPD Jun 19 29C YES from 14c; PT-20260617-199 / PT-20260617-200 HKO Jun 19 31C YES from 38c/35c; PT-20260618-207 Seoul/Incheon Jun 18 29C BUY_NO from 35c; PT-20260618-204 / PT-20260618-206 Tokyo/Haneda Jun 18 26C YES from 33c/11c.

## Risks and Invalidation Factors
- Whole-degree Wunderground settlement can flip Tokyo, Seoul, Shanghai, Shenzhen, and Guangzhou on a single rounded station print.
- Tokyo's best new edge depends on Met Office Haneda matching the eventual Wunderground/RJTT station-history print.
- Shanghai Jun 19 remains a young, thin market; visible 16c quotes may not reflect practical executable depth.
- HKO Jun 19 31C can lose either to a 30.9C cap or to a 32.0C+ sunny-break overshoot.
- Public Polymarket pages can show display probabilities that differ from live depth.

## Sources Used
- Polymarket Tokyo Jun 18 event: https://polymarket.com/event/highest-temperature-in-tokyo-on-june-18-2026
- Met Office Tokyo Haneda forecast: https://weather.metoffice.gov.uk/forecast/xn76hz8ty
- Polymarket Shanghai Jun 19 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- Met Office Shanghai and Shanghai International forecasts: https://weather.metoffice.gov.uk/forecast/wtw3u0gu2 and https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- Polymarket Hong Kong Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- Polymarket Seoul Jun 18 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-18-2026

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0525Z.md, alerts/2026-06-18T0525Z.md, data/market_snapshots/2026-06-18T0525Z.json, paper_trading/entries/PT-20260618-209.md, paper_trading/ledger_appends/2026-06-18T0525Z.csv, and paper_trading/maintenance/2026-06-18T0525Z.md.
- New simulated paper-only position: PT-20260618-209 Tokyo/Haneda Jun 18 27C YES at Buy Yes 12.0c, $5 notional. No real trades or betting actions were executed.
