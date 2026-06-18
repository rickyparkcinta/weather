# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 03:18:51
- HKT: 2026-06-18 11:18:51
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Shenzhen/ZGSZ Jun 18; Tokyo/Haneda Jun 18; Seoul/Incheon Jun 18; Hong Kong/HKO Jun 19; Shanghai/ZSPD Jun 18; Guangzhou/ZGGG Jun 18; London/EGLC Jun 18; Taipei Jun 18 and Wuhan Jun 18 as quote-quality checks.
- Station and weather evidence: Polymarket public market pages and resolution rules; Allmetsat/METAR/TAF snippets for ZGSZ, RJTT, RKSI, ZSPD, and ZGGG; Met Office station forecasts for Tokyo Haneda and London City; HKO 9-day forecast.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes quotes. Confidence is capped where displayed probabilities, Buy Yes quotes, and executable depth may diverge.

## Top Edges

### 1. Polymarket Shenzhen/ZGSZ Jun 18 29C YES
- Current price: 29C displayed 4%; Buy Yes 4.0c. Nearby outcomes: 27C displayed 52% / Buy Yes 54c; 28C displayed 32% / Buy Yes 35c; 26C displayed 20% / Buy Yes 22.6c; 30C displayed 4% / Buy Yes 5.9c.
- Implied probability: about 4%.
- Estimated fair value: 10%-22%.
- Estimated edge: roughly +6 to +18 percentage points versus the 4.0c buy quote.
- Confidence: low.
- Classification: moderate paper-only edge, high raw discrepancy but storm-capped.
- Key reasoning: Polymarket centers 27C/28C, and recent ZGSZ weather is wet and stormy. However, the aviation-weather cross-check still shows a maximum-temperature signal around 29C for the airport, making 29C look underpriced at only 4c if storms break or the station recovers later in the local day.
- Liquidity/practicality notes: about $58.3K event volume and about $5.6K target-bucket volume. Thunderstorms, heavy rain, and cloud cover make this a tiny paper-only position.
- Decision: open PT-20260618-205, a $5 simulated BUY_YES at 4.0c.

### 2. Polymarket Tokyo/Haneda Jun 18 26C YES
- Current price: 26C displayed 10%; Buy Yes 11c. Nearby outcomes: 25C displayed 39% / Buy Yes 40c; 24C displayed 30% / Buy Yes 33.7c; 23C displayed 17% / Buy Yes 19.3c; 27C displayed 3% / Buy Yes 6.0c.
- Implied probability: about 10%-11%.
- Estimated fair value: 18%-30%.
- Estimated edge: roughly +7 to +19 percentage points versus the 11c buy quote.
- Confidence: low.
- Classification: moderate paper-only add-on, source-conflicted.
- Key reasoning: Polymarket's context and JMA references favor 24C/25C, and the prior 26C paper entry moved against the thesis. The counter-signal is that the Met Office Tokyo Haneda station page still lists Thursday at 26C and the hourly table reaches 26C from mid-afternoon into early evening. That keeps 26C more alive than the 10%-11% market price implies.
- Liquidity/practicality notes: about $60.0K event volume and about $5.5K target-bucket volume. This is an add-on at a much lower quote than PT-20260618-204, not a high-conviction defense.
- Decision: open PT-20260618-206, a $5 simulated BUY_YES at 11c.

### 3. Polymarket Seoul/Incheon Jun 18 28C YES
- Current price: 28C displayed 50%; Buy Yes 50c. Nearby outcomes: 29C displayed 27% / Buy Yes 28c; 27C displayed 15% / Buy Yes 15.9c; 30C displayed 8% / Buy Yes 9.7c.
- Implied probability: about 50%.
- Estimated fair value: 54%-64%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: medium-low.
- Classification: weak-to-moderate hedge/watch-only.
- Key reasoning: RKSI TAF context supports TX28/1806Z, while Polymarket also references 28C/29C as the main range. This weakens the older PT-20260618-202 27C paper thesis. The 28C quote is not cheap enough for a fresh hedge after spread and exact-bucket risk.
- Liquidity/practicality notes: about $128.8K event volume, good enough for monitoring. No fresh paper entry.
- Decision: maintain PT-20260618-202 as weakened/adverse-watch; no new Seoul position.

### 4. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 37%; Buy Yes 37c. Nearby outcomes: 30C displayed 29% / Buy Yes 29c; 32C displayed 18% / Buy Yes 19c; 29C displayed 16% / Buy Yes 16c.
- Implied probability: about 37%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: medium-low.
- Classification: moderate represented maintenance.
- Key reasoning: HKO's 07:50 HKT 9-day forecast lists Jun 19 at 27-31C, with showers/thunderstorms at first and hot sunny periods in the afternoon. That keeps 31C the best single official-forecast bucket, but one-decimal HKO settlement leaves 30.9C and 32.0C miss paths live.
- Liquidity/practicality notes: about $15.0K event volume and about $2.9K target-bucket volume. Existing paper entries PT-20260617-199 at 38c and PT-20260617-200 at 35c already represent this thesis.
- Decision: maintain only; no duplicate above the 35c add-on.

### 5. Polymarket Shanghai/ZSPD Jun 18 higher-temperature tail
- Current market context: latest public search rendering showed 27C as the leader around 46%, followed by 26C around 26%, while earlier direct page context had 30C priced as a small tail.
- Estimated fair value: 30C remains non-zero because ZSPD TAF context includes TX30/1806Z, but live cloud and public market movement cut confidence.
- Confidence: low.
- Classification: represented/no-add.
- Key reasoning: PT-20260618-203 already holds a tiny 30C YES from 4.0c. The market has not produced enough fresh confirmation to add to a thesis that moved against the entry.
- Decision: maintain PT-20260618-203 only; no duplicate.

### 6. Polymarket Guangzhou/ZGGG Jun 18 30C YES
- Current price: public rendering showed 30C around 38%-39% in one surface, with 29C around 27%-31% and 28C around 37% on another surface.
- Estimated fair value: roughly 36%-46% for 30C after TAF TX30/1807Z, but quote surfaces conflict and rain/thunderstorm risk is high.
- Confidence: low.
- Classification: near fair / watch-only.
- Decision: no paper trade.

### 7. Polymarket London/EGLC Jun 18 28C YES
- Current price: 28C displayed 37%, followed by 27C at 34%.
- Estimated fair value: 36%-46%.
- Confidence: low-to-medium-low.
- Classification: near fair / watch-only.
- Key reasoning: Met Office London City lists Thursday maximum 28C, but the hourly table peaks at 27C; the market already prices the 27C/28C split tightly.
- Decision: no paper trade.

## Recommended Paper Trades
- PT-20260618-205: simulated BUY_YES on Polymarket Shenzhen/ZGSZ Jun 18 29C at Buy Yes 4.0c, $5 notional. Thesis: airport maximum-temperature guidance keeps 29C more alive than the 4c tail price, despite rain and thunderstorm suppression. Confidence low.
- PT-20260618-206: simulated BUY_YES add-on on Polymarket Tokyo/Haneda Jun 18 26C at Buy Yes 11c, $5 notional. Thesis: Met Office Tokyo Haneda still reaches 26C while the market repriced 26C down to roughly 10%-11%; source conflict keeps size tiny. Confidence low.

## Risks and Invalidation Factors
- Shenzhen and Guangzhou are storm/rain markets: persistent cloud, heavy showers, or thunderstorm outflow can cap airport highs below the TAF maximum.
- Tokyo 26C can fail if JMA/Wunderground station history settles closer to 24C/25C and the late-day Met Office warming path is too warm.
- TAF maximum-temperature groups are useful but not final resolution sources; Wunderground station history controls the same-day airport Polymarket contracts.
- Seoul 27C is now weakened because RKSI evidence and market pricing shifted toward 28C/29C.
- HKO Jun 19 remains one-decimal exact-boundary risk: 30.9C loses 31C, and 32.0C also loses it.
- Public Polymarket pages can show display probabilities that differ from live executable depth.

## Sources Used
- Polymarket Shenzhen Jun 18 event: https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-18-2026
- Allmetsat ZGSZ METAR/TAF search result and aviation-weather cross-check: https://en.allmetsat.com/metar-taf/east-china.php?icao=ZGSZ
- Polymarket Tokyo Jun 18 event: https://polymarket.com/event/highest-temperature-in-tokyo-on-june-18-2026
- Met Office Tokyo Haneda forecast: https://weather.metoffice.gov.uk/forecast/xn76hz8ty
- Allmetsat RJTT METAR/TAF: https://en.allmetsat.com/metar-taf/asia.php?icao=RJTT
- Polymarket Seoul Jun 18 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-18-2026
- Allmetsat RKSI METAR/TAF: https://en.allmetsat.com/metar-taf/asia.php?icao=RKSI
- Polymarket HKO Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- Polymarket Shanghai Jun 18 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-18-2026
- Allmetsat ZSPD METAR/TAF: https://en.allmetsat.com/metar-taf/asia.php?icao=ZSPD
- Polymarket Guangzhou Jun 18 event: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-18-2026
- Allmetsat ZGGG METAR/TAF: https://en.allmetsat.com/metar-taf/china.php?icao=ZGGG
- Polymarket London Jun 18 event: https://polymarket.com/event/highest-temperature-in-london-on-june-18-2026
- Met Office London City Airport forecast: https://weather.metoffice.gov.uk/forecast/u10j124jp

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0318Z.md, alerts/2026-06-18T0318Z.md, data/market_snapshots/2026-06-18T0318Z.json, paper_trading/entries/PT-20260618-205.md, paper_trading/entries/PT-20260618-206.md, paper_trading/ledger_appends/2026-06-18T0318Z.csv, and paper_trading/maintenance/2026-06-18T0318Z.md.
- Updated rolling memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only positions: PT-20260618-205 Shenzhen/ZGSZ Jun 18 29C YES and PT-20260618-206 Tokyo/Haneda Jun 18 26C YES add-on. No real trades or betting actions were executed.