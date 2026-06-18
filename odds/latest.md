# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 10:11:29
- HKT: 2026-06-18 18:11:29
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Shanghai/Pudong Jun 19; Guangzhou/ZGGG Jun 19; Chongqing/ZUCK Jun 19; Seoul/Incheon Jun 19; Shenzhen/ZGSZ Jun 19; Hong Kong/HKO Jun 19; Shanghai Jun 20 young board; Tokyo/Haneda Jun 18 maintenance.
- Forecast and station evidence: Polymarket public market pages; Met Office forecasts for Shanghai International, Guangzhou, Chongqing, Seoul/Incheon, and Shenzhen; HKO 9-day forecast; NOAA/NWS current station summaries for ZSPD and ZGGG, plus prior station watchlist context.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes quotes. Confidence is capped where displayed probabilities, executable depth, final Wunderground station history, or source timing may diverge.

## Top Edges

### 1. Polymarket Shanghai/ZSPD Jun 19 28C YES
- Current price: 28C displayed 11%; Buy Yes 12c. Nearby outcomes: 30C displayed 33% / Buy Yes 34c; 29C displayed 24% / Buy Yes 24c; 31C displayed 23% / Buy Yes 23c.
- Implied probability: about 12%.
- Estimated fair value: 24%-34%.
- Estimated edge: roughly +12 to +22 percentage points.
- Confidence: low.
- Classification: strongest raw edge, but already represented.
- Key reasoning: Met Office Shanghai International still lists Jun 19 maximum temperature at 28C with rain risk, while Polymarket remains centered around hotter 29C/30C/31C buckets. ZSPD's latest station summary showed 26C at 09:00 UTC with a prior 24-hour max of 28C, keeping the rain/cloud suppression thesis plausible but not clean.
- Liquidity/practicality notes: event volume about $29.3K and the 28C bucket showed about $4.6K volume. This is already represented by PT-20260618-211 from 17c and PT-20260618-213 from 12c.
- Decision: maintain existing paper-only exposure; no duplicate at the same 12c price.

### 2. Polymarket Guangzhou/ZGGG Jun 19 32C YES
- Current price: 32C displayed 24%; Buy Yes 25c. Nearby outcomes: 33C displayed 25% / Buy Yes 25c; 31C displayed 21% / Buy Yes 21c; 34C displayed 17% / Buy Yes 18c.
- Implied probability: about 25%.
- Estimated fair value: 30%-40%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: low.
- Classification: moderate fresh edge.
- Key reasoning: Met Office Guangzhou's daily card still lists Jun 19 max temperature at 32C, while Polymarket leaves 32C around 25c in a flat 31C/32C/33C/34C cluster. NOAA/NWS ZGGG showed 27C and light rain showers at 09:00 UTC with a prior 24-hour max of 29C, so the thesis needs Friday clearing or a stronger daytime rebound.
- Liquidity/practicality notes: event volume about $12.1K, but the 32C bucket showed only about $992 volume. Size stays tiny because the Met Office hourly table appears to peak closer to 31C and station mapping to Baiyun/Wunderground final data remains a material risk.
- Decision: open PT-20260618-215, $5 simulated BUY_YES at 25c.

### 3. Polymarket Chongqing/ZUCK Jun 19 31C YES
- Current price: 31C displayed 24%; Buy Yes 24c. Nearby outcomes: 30C displayed 32% / Buy Yes 33c; 29C displayed 23% / Buy Yes 23c; 28C displayed 14% / Buy Yes 15c.
- Implied probability: about 24%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +10 to +20 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge.
- Key reasoning: Met Office Chongqing still lists Jun 19 max temperature at 31C, with a multi-hour afternoon/evening 31C plateau and relatively low rain risk. The market continues to favor 30C, leaving 31C discounted.
- Liquidity/practicality notes: total event volume about $7.3K and 31C bucket volume about $1.4K. PT-20260618-214 already holds a $5 simulated entry from 23c; the current 24c quote is worse than entry.
- Decision: maintain PT-20260618-214 only.

### 4. Polymarket Seoul/Incheon Jun 19 30C YES
- Current price: 30C displayed 22%; Buy Yes 23c. Nearby outcomes: 29C displayed 38% / Buy Yes 38c; 28C displayed 24% / Buy Yes 25c; 31C displayed 11% / Buy Yes 12c.
- Implied probability: about 23%.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly +9 to +19 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented maintenance edge.
- Key reasoning: Met Office Seoul/Incheon context still supports a Jun 19 high around 30C under mostly clear or sunny conditions, while the market remains led by 29C.
- Liquidity/practicality notes: event volume about $12.7K. PT-20260618-210 already holds 30C from 25c; current price is lower but not enough to justify another duplicate after existing Asia-weather concentration.
- Decision: maintain PT-20260618-210 only.

### 5. Polymarket Shenzhen/ZGSZ Jun 19 32C YES
- Current price: 32C displayed 26%; Buy Yes 27c. Nearby outcomes: 31C displayed 30% / Buy Yes 31c; 30C displayed 22% / Buy Yes 23c; 33C displayed 12% / Buy Yes 13c.
- Implied probability: about 27%.
- Estimated fair value: 30%-40%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: low.
- Classification: weak-to-moderate represented edge.
- Key reasoning: Met Office Shenzhen still lists Jun 19 max temperature at 32C, but the price has moved above the 22c PT-20260618-212 entry and the adjacent 31C miss remains the market leader.
- Liquidity/practicality notes: event volume about $20.4K and 32C bucket volume about $3.2K. No add above the existing entry.
- Decision: maintain PT-20260618-212 only.

### 6. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 41%; Buy Yes 42c. Nearby outcomes: 30C displayed 33% / Buy Yes 33c; 32C displayed 18% / Buy Yes 18c; 29C displayed 6% / Buy Yes 7c.
- Implied probability: about 42%.
- Estimated fair value: 45%-55%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: medium-low.
- Classification: represented maintenance / near fair.
- Key reasoning: HKO's Jun 19 forecast range remains 26-31C with showers easing and sunny periods in the afternoon, which supports 31C but leaves exact-boundary risk around 30.9C/31.0C/32.0C.
- Liquidity/practicality notes: event volume about $34.1K. Existing PT-20260617-199 and PT-20260617-200 hold 31C from 38c and 35c, so current 42c is not addable.
- Decision: maintain existing paper-only exposure only.

### Watch Only
- Polymarket Shanghai Jun 20 29C YES: Buy Yes about 22c versus rough fair value 24%-34%, but the event and bucket depth are too thin for a new paper entry.

## Recommended Paper Trades

### New Paper Trade
- Trade ID: PT-20260618-215.
- Stance: simulated BUY_YES on Polymarket Guangzhou/ZGGG Jun 19 highest temperature 32C.
- Simulated size: $5 notional.
- Entry price: Buy Yes 25c.
- Thesis: Met Office Guangzhou's daily max remains 32C while the market prices 32C near 25c in a broad adjacent-bucket cluster.
- Confidence: low.
- Invalidation risks: hourly guidance may peak at 31C; rain/showers may cap the station; stronger clearing can overshoot to 33C/34C; Met Office city guidance may not map cleanly to Baiyun airport or the final Wunderground station history; available target-bucket depth is thin.
- Status: open, unresolved.

### Maintained Paper Positions
- Maintain PT-20260618-211 and PT-20260618-213 on Shanghai/ZSPD Jun 19 28C YES.
- Maintain PT-20260618-214 on Chongqing/ZUCK Jun 19 31C YES.
- Maintain PT-20260618-210 on Seoul/Incheon Jun 19 30C YES.
- Maintain PT-20260618-212 on Shenzhen/ZGSZ Jun 19 32C YES.
- Maintain PT-20260617-199 and PT-20260617-200 on Hong Kong/HKO Jun 19 31C YES.

## Risks and Invalidation Factors
- Exact-weather buckets can lose on a one-degree or one-tenth-degree boundary, even when the general forecast thesis is directionally right.
- Public Polymarket display, indexed snippets, and executable depth can diverge; all paper entries use the visible public quote only.
- Forecast-city pages may not map perfectly to the resolution station.
- Asia weather exposure is concentrated across correlated rain/cloud and forecast-model errors.
- Several edges are already represented, so the main risk is over-adding rather than missing one signal.

## Sources Used
- Polymarket Shanghai Jun 19: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- Polymarket Guangzhou Jun 19: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- Polymarket Chongqing Jun 19: https://polymarket.com/event/highest-temperature-in-chongqing-on-june-19-2026
- Polymarket Seoul Jun 19: https://polymarket.com/event/highest-temperature-in-seoul-on-june-19-2026
- Polymarket Shenzhen Jun 19: https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- Polymarket Hong Kong Jun 19: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket Shanghai Jun 20: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-20-2026
- Met Office Shanghai International: https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- Met Office Guangzhou: https://weather.metoffice.gov.uk/forecast/ws0e3x09w
- Met Office Chongqing: https://weather.metoffice.gov.uk/forecast/wm78q9qxj
- Met Office Shenzhen: https://weather.metoffice.gov.uk/forecast/ws10k3j56
- Met Office Seoul/Incheon context: https://weather.metoffice.gov.uk/forecast/wydj553hq
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- NOAA/NWS ZSPD station summary: https://tgftp.nws.noaa.gov/weather/current/ZSPD.html
- NOAA/NWS ZGGG station summary: https://tgftp.nws.noaa.gov/weather/current/ZGGG.html

## Repo Log Update
- Updated latest snapshot target: odds/latest.md.
- Added history snapshot target: odds/history/2026-06-18T1011Z.md.
- Added alert target: alerts/2026-06-18T1011Z.md.
- Added structured data target: data/market_snapshots/2026-06-18T1011Z.json.
- Added paper-trade entry target: paper_trading/entries/PT-20260618-215.md.
- Added ledger append target: paper_trading/ledger_appends/2026-06-18T1011Z.csv.
- Added maintenance target: paper_trading/maintenance/2026-06-18T1011Z.md.
- Updated rolling local memory notes and summaries.