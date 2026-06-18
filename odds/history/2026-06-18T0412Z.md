# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 04:12:30
- HKT: 2026-06-18 12:12:30
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Seoul/Incheon Jun 18; Shanghai/Pudong Jun 18 and Jun 19; Tokyo/Haneda Jun 18 and Jun 19; Shenzhen/ZGSZ Jun 18 and Jun 19; Guangzhou/ZGGG Jun 18 and Jun 19; Hong Kong/HKO Jun 19.
- Station and weather evidence: Polymarket public market pages and resolution rules; Allmetsat METAR/TAF snippets for RKSI, ZSPD, ZGSZ, ZGGG, and RJTT; Met Office station/city forecasts for Tokyo Haneda, Shanghai, and Shenzhen; HKO 9-day forecast.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes/Buy No quotes. Confidence is capped where displayed probabilities, executable depth, and final Wunderground station history may diverge.

## Top Edges

### 1. Polymarket Seoul/Incheon Jun 18 29C BUY_NO
- Current price: 29C displayed 67%; Buy Yes 68c / Buy No 35c. Nearby outcomes: 28C displayed 27% / Buy Yes 27c; 30C displayed 13% / Buy Yes 14.6c; 31C or higher displayed 2% / Buy Yes 2.5c.
- Implied probability: about 35% for the No side at the visible quote.
- Estimated fair value: 42%-52% for NOT 29C.
- Estimated edge: roughly +7 to +17 percentage points versus Buy No 35c.
- Confidence: low-to-medium-low.
- Classification: moderate paper-only edge.
- Key reasoning: RKSI was still 28C at the 03:30 UTC METAR, and the active TAF calls TX28/1806Z for Jun 18. That makes the market's 67%-68% 29C price look too confident. The risk is real: clear weather, whole-degree Wunderground settlement, and a single later 29C airport print would defeat the No side.
- Liquidity/practicality notes: event volume is about $141.8K, making this cleaner than most Asia weather tails. Still exact-bucket weather risk keeps size tiny.
- Decision: open PT-20260618-207, a $5 simulated BUY_NO at 35c.

### 2. Polymarket Shanghai/ZSPD Jun 19 29C YES
- Current price: 29C displayed 14%; Buy Yes 14c. Nearby outcomes: 28C displayed 13% / Buy Yes 14c; 30C displayed 30% / Buy Yes 30c; 31C displayed 26% / Buy Yes 26c; 32C displayed 13% / Buy Yes 14c.
- Implied probability: about 14%.
- Estimated fair value: 24%-36%.
- Estimated edge: roughly +10 to +22 percentage points.
- Confidence: low.
- Classification: moderate paper-only edge, limited by thin target liquidity.
- Key reasoning: ZSPD's TAF shows TX29/1906Z for Jun 19, while Met Office Shanghai shows Friday max 28C with heavy rain early and showers/thunderstorm risk through the day. The market is still centered hotter at 30C/31C, leaving 29C underweighted if Pudong stays rain-cooled.
- Liquidity/practicality notes: event volume is about $17.6K and target-bucket volume about $1.6K. This is thin, so paper size stays at the $5 default.
- Decision: open PT-20260618-208, a $5 simulated BUY_YES at 14c.

### 3. Polymarket Tokyo/Haneda Jun 18 26C YES
- Current price: 26C displayed 15%; Buy Yes 18c. Nearby outcomes: 25C displayed 43% / Buy Yes 44c; 24C displayed 29% / Buy Yes 32.3c; 23C displayed 4% / Buy Yes 7.1c; 28C displayed 3% / Buy Yes 5.6c.
- Implied probability: about 15%-18%.
- Estimated fair value: 22%-32%.
- Estimated edge: roughly +4 to +14 percentage points versus the 18c quote.
- Confidence: low.
- Classification: represented maintenance.
- Key reasoning: RJTT was only 23C at the 03:30 UTC METAR, but Met Office Tokyo Haneda still lists today's maximum at 26C and hourly temperatures reaching 26C from mid-afternoon into early evening. The quote has recovered from the 11c add-on, so no new paper exposure is justified.
- Decision: maintain PT-20260618-204 and PT-20260618-206 only; no duplicate.

### 4. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 37%; Buy Yes 37c. Nearby outcomes: 30C displayed 29% / Buy Yes 29c; 32C displayed 18% / Buy Yes 19c; 29C displayed 16% / Buy Yes 16c.
- Implied probability: about 37%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: medium-low.
- Classification: moderate represented maintenance.
- Key reasoning: HKO's 11:30 HKT 9-day forecast keeps Jun 19 at 27-31C with showers/thunderstorms at first and sunny periods in the afternoon. The official range still makes 31C the best single bucket, but 30.9C and 32.0C remain live exact-boundary losses.
- Decision: maintain PT-20260617-199 and PT-20260617-200 only; no duplicate above the 35c add-on.

### 5. Polymarket Shenzhen/ZGSZ Jun 18 29C YES
- Current price: 29C displayed 2%; Buy Yes 3.6c. Nearby outcomes: 26C displayed 62.5% / Buy Yes 63.0c; 27C displayed 23% / Buy Yes 24c; 28C displayed 7% / Buy Yes 8c.
- Estimated fair value: 6%-14% after the live thunderstorm update.
- Confidence: low.
- Classification: represented adverse-watch.
- Key reasoning: ZGSZ was 25C with thunderstorm/heavy rain at the 03:00 UTC METAR, and the market has correctly repriced much cooler. The TAF still includes TX29/1807Z, so the 29C tail is not dead, but evidence weakened from the prior run.
- Decision: maintain PT-20260618-205 only; no add.

### 6. Other Watchlist Notes
- Shanghai/ZSPD Jun 18 30C is now adverse/no-add after the public board moved to 27C at 67% and 30C near 1%, despite the older TAF TX30/1806Z signal.
- Shenzhen/ZGSZ Jun 19 30C is interesting at Buy Yes 23c against the TAF TX30/1906Z, but Met Office Shenzhen and market pricing both keep 31C/32C highly live, so it is watch-only.
- Guangzhou/ZGGG Jun 19 31C is near fair at Buy Yes 31c against TAF TX31/1906Z; no edge after spread and low volume.
- Seoul/Incheon Jun 19 29C is near fair at Buy Yes 34c against TAF TX29/1906Z; no fresh paper position.

## Recommended Paper Trades
- PT-20260618-207: simulated BUY_NO on Polymarket Seoul/Incheon Jun 18 29C at Buy No 35c, $5 notional. Thesis: RKSI current/TAF evidence caps the day around 28C more often than the market implies. Confidence low-to-medium-low.
- PT-20260618-208: simulated BUY_YES on Polymarket Shanghai/ZSPD Jun 19 29C at Buy Yes 14c, $5 notional. Thesis: station TAF plus rain-cooled public forecast evidence makes 29C more live than the 14c quote. Confidence low.

## Risks and Invalidation Factors
- Whole-degree Wunderground settlement can flip Seoul and Shanghai on a single rounded station print.
- Seoul 29C No loses if RKSI prints 29C at any point later today, even if most guidance centers 28C.
- Shanghai Jun 19 is a young, thin market; visible quotes may not reflect practical executable depth.
- TAF maximum-temperature groups are helpful station-specific signals but are not the final resolution source.
- Rain/thunderstorm timing can cut either way: it can cap Shanghai/Shenzhen, but a sunny break can lift the station by 1-2C.
- Public Polymarket pages can show display probabilities that differ from live depth.

## Sources Used
- Polymarket Seoul Jun 18 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-18-2026
- Allmetsat RKSI METAR/TAF: https://en.allmetsat.com/metar-taf/asia.php?icao=RKSI
- Polymarket Shanghai Jun 19 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- Allmetsat ZSPD METAR/TAF: https://en.allmetsat.com/metar-taf/asia.php?icao=ZSPD
- Met Office Shanghai forecast: https://weather.metoffice.gov.uk/forecast/wtw3u0gu2
- Polymarket Tokyo Jun 18 event: https://polymarket.com/event/highest-temperature-in-tokyo-on-june-18-2026
- Allmetsat RJTT METAR/TAF: https://en.allmetsat.com/metar-taf/asia.php?icao=RJTT
- Met Office Tokyo Haneda forecast: https://weather.metoffice.gov.uk/forecast/xn76hz8ty
- Polymarket Hong Kong Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- Polymarket Shenzhen Jun 18 and Jun 19 events: https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-18-2026 and https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- Allmetsat ZGSZ METAR/TAF: https://en.allmetsat.com/metar-taf/east-china.php?icao=ZGSZ
- Met Office Shenzhen forecast: https://weather.metoffice.gov.uk/forecast/ws10k3j56
- Polymarket Guangzhou Jun 18 and Jun 19 events: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-18-2026 and https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- Allmetsat ZGGG METAR/TAF: https://en.allmetsat.com/metar-taf/china.php?icao=ZGGG

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0412Z.md, alerts/2026-06-18T0412Z.md, data/market_snapshots/2026-06-18T0412Z.json, paper_trading/entries/PT-20260618-207.md, paper_trading/entries/PT-20260618-208.md, paper_trading/ledger_appends/2026-06-18T0412Z.csv, and paper_trading/maintenance/2026-06-18T0412Z.md.
- Updated rolling memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only positions: PT-20260618-207 Seoul/Incheon Jun 18 29C BUY_NO and PT-20260618-208 Shanghai/ZSPD Jun 19 29C BUY_YES. No real trades or betting actions were executed.
