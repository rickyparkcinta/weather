# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 09:11:59
- HKT: 2026-06-18 17:11:59
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Shanghai/Pudong Jun 19; Chongqing/ZUCK Jun 19; Seoul/Incheon Jun 19; Shenzhen/ZGSZ Jun 19; Hong Kong/HKO Jun 19; Guangzhou/ZGGG Jun 19; Tokyo/Haneda Jun 18; NYC/KLGA Jun 19.
- Forecast and station evidence: Polymarket public market pages and resolution rules; Met Office forecasts for Shanghai International, Chongqing, Seoul Incheon, Incheon, Shenzhen, Guangzhou, and Tokyo Haneda; HKO 9-day forecast; NOAA/NWS current station summaries for ZSPD, ZUCK, RKSI, ZGSZ, ZGGG, RJTT, and KLGA; NWS point forecast for KLGA.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes / Buy No quotes. Confidence is capped where displayed probabilities, executable depth, final Wunderground station history, or source timing may diverge. Seoul Jun 19 price was not freshly retrievable this run, so it is treated as last-verified/maintenance rather than addable.

## Top Edges

### 1. Polymarket Shanghai/ZSPD Jun 19 28C YES
- Current price: 28C displayed 11%; Buy Yes 12c. Nearby outcomes: 30C displayed 33% / Buy Yes 33c; 29C displayed 24% / Buy Yes 24c; 31C displayed 23% / Buy Yes 23c.
- Implied probability: about 12%.
- Estimated fair value: 24%-34%.
- Estimated edge: roughly +12 to +22 percentage points.
- Confidence: low.
- Classification: moderate-to-strong raw edge, moderate practical edge.
- Key reasoning: Met Office Shanghai International still lists Jun 19 maximum temperature at 28C with heavy showers and 90% heavy-rain risk around 6am, while Polymarket has moved the board toward 29C/30C/31C and discounted 28C to 12c. ZSPD's Jun 18 station path reached 28C earlier, then cooled back to 26C by 09:00 UTC, which keeps the rain/cloud suppression thesis plausible for Jun 19 but not clean.
- Liquidity/practicality notes: event volume about $26.8K and 28C bucket volume about $4.6K. This is a duplicate/add-on to PT-20260618-211 from 17c, but the 5c price improvement is material enough for a tiny paper-only add.
- Decision: open PT-20260618-213, $5 simulated BUY_YES at 12c.

### 2. Polymarket Chongqing/ZUCK Jun 19 31C YES
- Current price: 31C displayed 22%; Buy Yes 23c. Nearby outcomes: 30C displayed 32% / Buy Yes 32c; 29C displayed 24% / Buy Yes 24c; 28C displayed 14% / Buy Yes 15c.
- Implied probability: about 23%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +11 to +21 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate fresh edge.
- Key reasoning: Met Office Chongqing lists Jun 19 maximum temperature at 31C with sunny intervals and only low rain risk; the hourly table shows 31C from roughly 4pm through 7pm. The market still leads with 30C and prices 31C at only 23c. ZUCK was still rain-cooled/overcast at 23C on Jun 18 09:00 UTC, so the thesis depends on the Jun 19 forecast clearing and is not station-confirmed yet.
- Liquidity/practicality notes: bucket-level volume is about $1.4K on 31C and total visible bucket volume is modest. Size stays tiny because the Met Office page may not map perfectly to the airport station and 30C/32C adjacent misses are live.
- Decision: open PT-20260618-214, $5 simulated BUY_YES at 23c.

### 3. Polymarket Seoul/Incheon Jun 19 30C YES
- Current price: last verified 30C Buy Yes 23c at 08:12 UTC. Fresh Polymarket page retrieval was blocked this run.
- Implied probability: about 23% on last verified quote.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly +9 to +19 percentage points if the last quote remains live.
- Confidence: low-to-medium-low, reduced for stale quote.
- Classification: represented maintenance edge.
- Key reasoning: Met Office Seoul Incheon still shows Jun 19 maximum temperature at 30C with sunny conditions, and the station-specific Incheon context supports a warm, clear Friday. RKSI reached 28C on Jun 18, but Seoul Jun 19 market pricing could not be refreshed directly in this scan.
- Liquidity/practicality notes: PT-20260618-210 already holds 30C from 25c. No duplicate without a fresh executable quote.
- Decision: maintain PT-20260618-210 only.

### 4. Polymarket Shenzhen/ZGSZ Jun 19 32C YES
- Current price: 32C displayed 22%; Buy Yes 22c. Nearby outcomes: 31C displayed 30% / Buy Yes 31c; 30C displayed 22% / Buy Yes 24c; 29C displayed 14% / Buy Yes 14c.
- Implied probability: about 22%.
- Estimated fair value: 28%-38%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low.
- Classification: moderate represented edge.
- Key reasoning: Met Office Shenzhen continues to show Jun 19 daily max near 32C, while Polymarket still prices 32C below 31C and close to the 30C quote. ZGSZ's current station summary remains storm/rain affected, so this is still a forecast-driven signal.
- Liquidity/practicality notes: event volume about $19.4K and 32C bucket volume about $2.8K. PT-20260618-212 already holds 32C from 22c; no same-price duplicate.
- Decision: maintain PT-20260618-212 only.

### 5. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed 44%; Buy Yes 45c. Nearby outcomes: 30C displayed 33% / Buy Yes 34c; 32C displayed 16% / Buy Yes 16c; 29C displayed 6% / Buy Yes 7c.
- Implied probability: about 45%.
- Estimated fair value: 45%-55%.
- Estimated edge: roughly 0 to +10 percentage points.
- Confidence: medium-low.
- Classification: represented maintenance / near fair.
- Key reasoning: HKO's 16:30 HKT 9-day forecast lists Jun 19 at 26-31C with showers easing and sunny periods in the afternoon. The market has moved close to the official upper-bound forecast and is now above both 38c/35c paper entries.
- Liquidity/practicality notes: event volume about $32.9K. One-decimal HKO settlement makes 30.9C and 32.0C boundary risk material.
- Decision: maintain PT-20260617-199 / PT-20260617-200 only.

### 6. Polymarket NYC/KLGA Jun 19 82-83F YES
- Current price: 82-83F displayed 38%; Buy Yes 39c. Nearby outcomes: 84-85F displayed 30% / Buy Yes 30c; 80-81F displayed 23% / Buy Yes 23c.
- Implied probability: about 39%.
- Estimated fair value: 40%-50%.
- Estimated edge: roughly +1 to +11 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: the NWS LaGuardia point forecast shows Juneteenth mostly cloudy then becoming sunny, high near 83F. This supports 82-83F, but nearby NWS pages range 82F-84F and the exact two-degree bucket has thin depth.
- Liquidity/practicality notes: newly opened market, about $8K volume, with only about $817 in the 82-83F bucket. No paper entry because the edge is not large enough after spread and adjacent 84F risk.
- Decision: watch only.

### 7. Polymarket Tokyo/Haneda Jun 18 27C YES
- Current price: 27C displayed under 1%; Buy Yes 0.6c. Market leader: 26C displayed 99%-100%; Buy Yes about 99.8c.
- Implied probability: about 0.6%.
- Estimated fair value: 0%-2%.
- Estimated edge: no positive edge.
- Confidence: medium-low.
- Classification: adverse maintenance for existing 27C paper position.
- Key reasoning: RJTT had only reached 26C by the latest accessible station summary, and Polymarket has mostly resolved toward 26C. The earlier 27C paper thesis is now effectively weakened.
- Liquidity/practicality notes: event volume about $126K-$129K. No new exposure.
- Decision: mark PT-20260618-209 adverse-watch / maintain only.

## Recommended Paper Trades

### PT-20260618-213
- Stance: BUY_YES on Polymarket Shanghai/ZSPD Jun 19 highest temperature 28C.
- Simulated size: $5 notional.
- Entry price: Buy Yes 12c.
- Thesis: official Met Office guidance still centers Shanghai International at 28C under heavy showers, while Polymarket has moved the board to 29C/30C/31C and left 28C at 12c.
- Confidence: low.
- Invalidation risks: rain clears earlier than forecast and ZSPD reaches 29C/30C; Wunderground final history differs from Met Office; the displayed quote is stale or thin; the existing Shanghai cluster already carries duplicate exposure.

### PT-20260618-214
- Stance: BUY_YES on Polymarket Chongqing/ZUCK Jun 19 highest temperature 31C.
- Simulated size: $5 notional.
- Entry price: Buy Yes 23c.
- Thesis: Met Office Chongqing centers Jun 19 at 31C with a multi-hour 31C afternoon plateau, while the market still leads with 30C and prices 31C at 23c.
- Confidence: low-to-medium-low.
- Invalidation risks: ZUCK remains rain/cloud capped at 29C/30C; stronger clearing overshoots to 32C; Met Office city forecast mismaps the airport station; displayed Polymarket depth is stale or thin.

## Risks and Invalidation Factors
- Exact-degree weather markets can flip on one station print, late clearing, rain timing, or Wunderground/HKO source handling.
- Shanghai 28C needs rain/cloud persistence; earlier clearing can push ZSPD back to 29C/30C.
- Chongqing 31C depends on Jun 19 clearing after Jun 18 rain/fog; 30C and 32C are live adjacent outcomes.
- Seoul 30C remains positive only if the last 23c quote is still live; direct current price retrieval failed this run.
- Shenzhen 32C can miss lower if rain persists or higher if afternoon clearing is stronger than hourly guidance.
- HKO 31C can miss to 30.xC under showers or to 32.0C+ with stronger afternoon sun.
- Public Polymarket pages can show prices that differ from executable order-book depth.

## Sources Used
- Polymarket Shanghai Jun 19 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-19-2026
- Polymarket Chongqing Jun 19 event: https://polymarket.com/event/highest-temperature-in-chongqing-on-june-19-2026
- Polymarket Shenzhen Jun 19 event: https://polymarket.com/event/highest-temperature-in-shenzhen-on-june-19-2026
- Polymarket Hong Kong Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- Polymarket Guangzhou Jun 19 event: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-19-2026
- Polymarket Tokyo Jun 18 event: https://polymarket.com/event/highest-temperature-in-tokyo-on-june-18-2026
- Polymarket NYC Jun 19 event: https://polymarket.com/event/highest-temperature-in-nyc-on-june-19-2026
- Met Office Shanghai International forecast: https://weather.metoffice.gov.uk/forecast/wtw6sh1q7
- Met Office Chongqing forecast: https://weather.metoffice.gov.uk/forecast/wm78q9qxj
- Met Office Incheon and Seoul Incheon forecasts: https://weather.metoffice.gov.uk/forecast/wydj553hq and https://weather.metoffice.gov.uk/forecast/wy9vjmn3q
- Met Office Shenzhen, Guangzhou, and Tokyo Haneda forecasts: https://weather.metoffice.gov.uk/forecast/ws10k3j56, https://weather.metoffice.gov.uk/forecast/ws0e3x09w, and https://weather.metoffice.gov.uk/forecast/xn76hz8ty
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- NOAA/NWS station summaries: https://tgftp.nws.noaa.gov/weather/current/ZSPD.html, https://tgftp.nws.noaa.gov/weather/current/ZUCK.html, https://tgftp.nws.noaa.gov/weather/current/RKSI.html, https://tgftp.nws.noaa.gov/weather/current/ZGSZ.html, https://tgftp.nws.noaa.gov/weather/current/ZGGG.html, https://tgftp.nws.noaa.gov/weather/current/RJTT.html, and https://tgftp.nws.noaa.gov/weather/current/KLGA.html
- NWS KLGA point forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0911Z.md, alerts/2026-06-18T0911Z.md, data/market_snapshots/2026-06-18T0911Z.json, paper_trading/entries/PT-20260618-213.md, paper_trading/entries/PT-20260618-214.md, paper_trading/ledger_appends/2026-06-18T0911Z.csv, and paper_trading/maintenance/2026-06-18T0911Z.md.
- Updated rolling memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- Two new simulated paper positions were recorded. No real trades or betting actions were executed.