# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-16 17:15:38
- HKT: 2026-06-17 01:15:38
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution occurred.

## Markets Monitored

- Polymarket weather markets: Atlanta/KATL Jun 16 72-73F/74-75F/76-77F; Houston/KHOU Jun 16 78-79F/80-81F/82-83F/84-85F; Chicago/KORD Jun 16 70-71F/72-73F/74-75F/76-77F; Austin/KAUS Jun 17 88-89F/90-91F/92-93F/94-95F; Dallas/KDAL Jun 17 90-91F/92-93F/94-95F/96-97F; Hong Kong/HKO Jun 17 27C/28C/29C/30C.
- Evidence checks: Polymarket pages, a Bitget mirrored Polymarket page for Atlanta, NWS point forecasts and current-condition pages for KORD/KHOU/KATL/KAUS/KDAL, Weather Underground city context for Houston/Atlanta, and HKO current weather/9-day forecast.
- Settlement note: U.S. Polymarket weather markets resolve using Wunderground station history. NWS/METAR and WU pages are supporting evidence; public quote pages can be rounded, stale, thin, or internally inconsistent.

## Top Edges

### 1. Atlanta/KATL Jun 16 72-73F YES

- Current price: 72-73F displayed 51%; 74-75F displayed 38%.
- Implied probability: about 51%.
- Estimated fair value: 58%-68%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: fresh moderate edge.
- Key reasoning: KATL had already printed 73F, then was back near 71F at 12:52 EDT under light rain/overcast conditions. NWS still allowed a high near 75F, so 74-75F stayed a real failure path, but live rain-cooled station evidence made 72-73F look underpriced.
- Liquidity/practicality: same-day market with partial station evidence, so the paper entry is intentionally tiny.

### 2. Dallas/KDAL Jun 17 94-95F YES

- Current price: roughly 24%-27%; 92-93F leading near 41%-42%.
- Implied probability: about 24%-27%.
- Estimated fair value: 33%-43%.
- Estimated edge: roughly +6 to +19 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS Dallas Love Field guidance has Wednesday high near 95F with heat index up to 105F. That supports 94-95F more than the 92-93F-led board, but cloud timing and exact-bucket risk keep sizing small.

### 3. Austin/KAUS Jun 17 90-91F YES

- Current price: 90-91F displayed 32%; 92-93F displayed 41%.
- Implied probability: about 32%.
- Estimated fair value: 39%-49%.
- Estimated edge: roughly +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS Austin-Bergstrom has Wednesday high near 91F, mostly cloudy then gradually sunny, with heat index values up to 103F. That keeps 90-91F live against the market leader, while 92F+ remains the main miss path.

### 4. Hong Kong/HKO Jun 17 28C YES

- Current price: quote surfaces conflicted around 33%-38%.
- Implied probability: about 33%-38%.
- Estimated fair value: 40%-50%.
- Estimated edge: roughly +2 to +17 percentage points depending on actionable quote.
- Confidence: medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: HKO forecast Jun 17 at 25-28C with cloudy weather, occasional showers, squally thunderstorms, heavy showers at times, and high significant-rain probability. Midnight HKO current weather was 26C with light rain, supporting a rain-capped 28C path while 27.xC remains a major downside.

### 5. Chicago/KORD Jun 16 72-73F YES

- Current price: about 37c; 74-75F leading near 55%.
- Implied probability: about 37%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +1 to +11 percentage points.
- Confidence: low.
- Classification: represented weak-to-moderate edge; no duplicate.
- Key reasoning: KORD was 70F at 10:51 CDT and NWS described a steady temperature around 72F, but the edge narrowed materially after the quote moved up from earlier levels.

### 6. Houston/KHOU Jun 16 78-79F / 80-81F

- Current price: 80-81F displayed around 48% / Buy Yes 54c; 78-79F around 37.5%; 82-83F around 26%.
- Estimated fair value: 78-79F roughly 36%-48%; 80-81F roughly 30%-42%; 82-83F roughly 16%-26%.
- Estimated edge: no clean fresh edge after spread and source-risk haircut.
- Confidence: low.
- Classification: represented maintenance / watch-only.
- Key reasoning: KHOU was 79F at 11:53 CDT with light rain and overcast skies. NWS high near 81F and WU city context near 79F support the 78-81F cluster but not a clean fresh target.

## Recommended Paper Trades

### Opened

- Paper trade ID: PT-20260616-189
- Stance: BUY_YES
- Market: Polymarket Atlanta/KATL Jun 16 highest temperature 72-73F YES
- Simulated size: $5 paper notional
- Entry price: 51c
- Thesis: KATL already printed 73F and was back to 71F in light rain/overcast conditions at 12:52 EDT. The market priced 72-73F as only a narrow favorite despite rain-suppressed station evidence. This is a tiny hedge against the older 74-75F paper position, not an aggressive build.
- Confidence: low-to-medium-low
- Invalidation risks: KATL prints 74F or 75F later; Wunderground final station history differs from NWS/METAR evidence; displayed quote is stale or shallow.

### Maintained / No Duplicate

- Maintain Dallas/KDAL Jun 17 94-95F YES from 25c.
- Maintain Austin/KAUS Jun 17 90-91F YES from 32c.
- Maintain HKO Jun 17 28C YES from 32%; keep HKO Jun 17 29C weakened/adverse-watch.
- Maintain existing Chicago/KORD Jun 16 72-73F YES paper entries; no fifth duplicate.
- Maintain Houston/KHOU Jun 16 80-81F YES as weakened/maintenance.
- Mark Atlanta/KATL Jun 16 74-75F YES as weakened/maintenance after live evidence shifted toward 72-73F.

## Risks and Invalidation Factors

- Exact weather buckets can lose by one degree even when the broad forecast thesis is right.
- U.S. weather markets resolve to Wunderground station history; NWS/METAR evidence is supportive, not controlling.
- Same-day quote pages can be stale, rounded, or spread-distorted.
- Atlanta 72-73F fails on any later 74F+ KATL/Wunderground print.
- Dallas and Austin Jun 17 are thin forward-day markets with large adjacent-bucket miss paths.
- HKO has one-decimal Celsius boundary risk; 27.xC rain cap and 29C warming both remain live.

## Repo Log Update

- Updated latest snapshot, timestamped history, timestamped alert, machine-readable market snapshot, paper-trade entry, ledger append, maintenance note, rolling paper-trading log/summary, watchlist, and edge notes in the durable record.
- GitHub mirror target: rickyparkcinta/weather.
