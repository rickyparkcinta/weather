# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-17 17:11:26
- HKT: 2026-06-18 01:11:26
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Austin/KAUS Jun 17; Dallas/KDAL Jun 17; Chicago/KORD Jun 17; Los Angeles/KLAX Jun 17; Houston/KHOU Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; Hong Kong/HKO Jun 18 and Jun 19.
- Cross-checks: Polymarket public pages/search renderings for prices and liquidity; NWS point forecasts and observation history for KAUS, KDAL, KORD, KLAX, KHOU, KATL, and KMIA; HKO official forecast/current feeds.
- Source-quality note: local curl/API access remained unavailable, so Polymarket prices rely on browser-rendered public pages/search snippets. Confidence is haircut where direct event pages and outcome-specific pages disagree.

## Top Edges

### 1. Polymarket Austin/KAUS Jun 17 92-93F YES
- Current price: displayed 31%; Buy Yes 34c.
- Implied probability: about 34% at executable displayed buy context.
- Estimated fair value: 40%-50%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no fresh add.
- Key reasoning: NWS Austin-Bergstrom shows current 82F at 10:53 CDT and forecasts today's high near 92F with mostly sunny conditions. That keeps the 92-93F bucket centered, but the market moved above the 32c add-on opened at 15:14 UTC.
- Liquidity/practicality notes: maintain PT-20260617-193 at 40c and PT-20260617-198 at 32c only. Do not duplicate at 34c unless station evidence tightens materially.

### 2. Polymarket Dallas/KDAL Jun 17 94-95F YES
- Current price: direct event page displayed 29% / Buy Yes 29c; one outcome-specific rendering showed 32%-33c.
- Implied probability: about 29%-33%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +1 to +15 percentage points, quote-quality capped.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no fresh add.
- Key reasoning: NWS Love Field shows 83F at 10:53 CDT and forecasts sunny conditions with a high near 94F. The target bucket remains plausible, but public Polymarket renderings conflict and the current quote is above the 25c and 20c paper entries.
- Liquidity/practicality notes: maintain PT-20260616-185 and PT-20260617-194 only. No add above existing entries.

### 3. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: displayed 38% on the Polymarket Hong Kong predictions page.
- Implied probability: about 38%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: medium-low.
- Classification: represented moderate edge; no fresh add.
- Key reasoning: HKO's official forecast update continues to list Jun 19 maximum temperature at 31C, with mainly cloudy weather, a few showers, isolated thunderstorms at first, and hot sunny periods in the afternoon. This supports the 31C bucket but does not improve on the prior 38% paper entry.
- Liquidity/practicality notes: maintain PT-20260617-199 only; no same-price duplicate.

### 4. Polymarket Hong Kong/HKO Jun 18 29C YES
- Current price: displayed 34%; Buy Yes 35c.
- Implied probability: about 34%-35%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +1 to +12 percentage points.
- Confidence: medium-low.
- Classification: represented maintenance; no fresh add.
- Key reasoning: HKO's Jun 18 official forecast still caps the maximum at 29C, but the forecast also calls for mainly cloudy weather, showers, and a few squally thunderstorms with heavy showers at first. The 28C path remains live and the current buy quote is above the 30c paper hedge.
- Liquidity/practicality notes: maintain PT-20260617-197 only.

### 5. Polymarket Chicago/KORD Jun 17 68-69F YES
- Current price: displayed 24%; Buy Yes 28c.
- Implied probability: about 24%-28%.
- Estimated fair value: 25%-35%.
- Estimated edge: roughly -3 to +11 percentage points, low-confidence.
- Confidence: low.
- Classification: represented weak-to-moderate maintenance; no fresh add.
- Key reasoning: NWS O'Hare forecast still implies a high near 68F, but KORD was only 58F with rain/fog at 10:51 CDT and heavy-rain/severe-storm timing keeps lower buckets live. The current quote is worse than the 21c add-on.
- Liquidity/practicality notes: maintain PT-20260616-190 and PT-20260617-196 only.

## Near-Fair / Weakened Monitors
- Los Angeles/KLAX Jun 17 70-71F: Polymarket shows 67% / Buy Yes 69c while NWS forecasts high near 70F and KLAX was mid-60s/overcast in the morning. Near fair; maintain existing LA hedge only.
- Houston/KHOU Jun 17 86-87F and 88-89F: market shows 86-87F at 42% / Buy Yes 44c and 88-89F at 31% / Buy Yes 32c. NWS point context has high near 88F with morning rain-cooling. No clean add after spread.
- Atlanta/KATL Jun 17 84-85F and 86-87F: market split 46% / 41%; NWS station-adjacent forecast high near 85-86F and KATL was 79F late morning. Near fair.
- Miami/KMIA Jun 17 92-93F: Polymarket Miami page shows 62% with strong liquidity; NWS forecasts high near 93F and KMIA was already 91F at 11:53 EDT. Near fair after heat/thunderstorm risk.

## Recommended Paper Trades

No new paper trade is recommended this run. The best apparent gaps are already represented, and current prices do not improve enough versus existing entries to justify another simulated add-on.

## Risks and Invalidation Factors
- Exact weather buckets can lose by one degree or one decimal even when the broader forecast thesis is directionally right.
- U.S. Polymarket weather markets resolve to Wunderground station history, not directly to NWS point forecasts.
- HKO Celsius markets resolve to the official HKO Daily Extract absolute max, measured to one decimal place.
- Public Polymarket renderings can lag or disagree with executable order books; confidence is reduced where direct depth was unavailable.
- Same-day U.S. markets remain sensitive to storm timing, cloud breaks, and late-afternoon recovery.

## Sources Used
- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket Dallas Jun 17: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket Chicago Jun 17: https://polymarket.com/event/highest-temperature-in-chicago-on-june-17-2026
- Polymarket Los Angeles Jun 17: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-17-2026
- Polymarket Houston Jun 17: https://polymarket.com/event/highest-temperature-in-houston-on-june-17-2026
- Polymarket Atlanta Jun 17: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-17-2026
- Polymarket Miami predictions page: https://polymarket.com/predictions/miami
- Polymarket Hong Kong predictions and Jun 18 pages: https://polymarket.com/predictions/hong-kong and https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026
- NWS observation history and point forecasts: KAUS, KDAL, KORD, KLAX, KHOU, KATL, KMIA via weather.gov / forecast.weather.gov
- HKO official open-data forecast/current feeds: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en and https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-17T1711Z.md, alerts/2026-06-17T1711Z.md, data/market_snapshots/2026-06-17T1711Z.json, and paper_trading/maintenance/2026-06-17T1711Z.md.
- Updated rolling local records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- No new simulated paper-only position; no ledger append.
- No real trades or betting actions were executed.
