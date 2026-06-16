# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-16 18:07:01
- HKT: 2026-06-17 02:07:01
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather markets: Atlanta/KATL Jun 16 72-73F/74-75F and Jun 17 82-87F cluster; Chicago/KORD Jun 16 72-75F cluster; Houston/KHOU Jun 16 78-83F and Jun 17 84-91F clusters; Dallas/KDAL Jun 17 90-97F cluster; Austin/KAUS Jun 17 88-95F cluster; Hong Kong/HKO Jun 17 27-30C cluster.
- Official/weather context: NWS station forecasts and current observations for KATL, KORD, KHOU, KDAL, and KAUS; HKO current weather and 9-day forecast; Wunderground/settlement-source context where available.
- Settlement/source note: U.S. Polymarket weather markets resolve using Wunderground station history. NWS/METAR/HKO evidence is used to estimate fair value, but browser-visible market prices can be stale, rounded, thin, or internally inconsistent.

## Top Edges

### 1. Polymarket Dallas/KDAL Jun 17 94-95F YES
- Current price: 94-95F displayed 26%; Buy Yes 27c. 92-93F leads near 41c.
- Implied probability: about 27%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +9 to +19 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS/market-page weather context centers Wednesday near 95F with heat index up to 105F, making 94-95F underweighted relative to a 92-93F-led board. Cloud timing and exact one-bucket miss risk still matter.
- Liquidity/practicality notes: Maintain PT-20260616-185 from 25c. Do not duplicate because current price is close to entry and public depth is limited.

### 2. Polymarket Hong Kong/HKO Jun 17 28C YES
- Current price: about 35%-36% in current public pages.
- Implied probability: about 36%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: HKO forecasts Jun 17 at 25-28C with showers/squally thunderstorms and current weather near 26C/light rain after midnight HKT. A rain-capped 28C max remains plausible while 27.xC and 29C are still live.
- Liquidity/practicality notes: Maintain PT-20260616-183 from 32%. No add above entry with one-decimal Celsius boundary risk.

### 3. Polymarket Austin/KAUS Jun 17 90-91F YES
- Current price: 90-91F displayed 30%; Buy Yes 31c. 92-93F leads near 41c.
- Implied probability: about 31%.
- Estimated fair value: 37%-47%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS Austin-Bergstrom guidance remains close enough to the low 90s that 90-91F is underweighted versus a 92-93F-led board, but clearing/heat-index support makes 92F+ the main miss path.
- Liquidity/practicality notes: Maintain PT-20260616-187 from 32c. A 1c improvement is not enough for duplicate exposure.

### 4. Polymarket Houston/KHOU Jun 17 88-89F YES
- Current price: 88-89F displayed 33%; Buy Yes 34c.
- Implied probability: about 34%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS/Houston page context shows high near 88F, but 70% rain and heavy rainfall keep 84-87F live, while clearing could still push 90-91F.
- Liquidity/practicality notes: Very low visible volume, about $1.9K, so no new paper entry.

### 5. Polymarket Atlanta/KATL Jun 17 84-85F YES
- Current price: around 34c with 86-87F close behind.
- Implied probability: about 34%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low.
- Classification: watch-only.
- Key reasoning: Forecast context centers near 85F, but storms and low volume leave 82-83F and 86-87F both plausible.
- Liquidity/practicality notes: No paper entry because the gap is thin and quote quality is modest.

### 6. Polymarket Atlanta/KATL Jun 16 72-73F YES
- Current price: 72-73F displayed near 80%; Buy Yes 82.3c.
- Implied probability: about 82%.
- Estimated fair value: 78%-88%.
- Estimated edge: mostly closed after repricing.
- Confidence: low-to-medium-low.
- Classification: maintain represented edge.
- Key reasoning: KATL was 71F in light rain/overcast at 12:52 EDT and had likely already printed the 72-73F bucket, but any later 74F+ station print invalidates the bucket.
- Liquidity/practicality notes: Maintain PT-20260616-189 from 51c. No add at 82c.

### 7. Polymarket Houston/KHOU Jun 16 80-81F YES
- Current price: 80-81F displayed 47%; Buy Yes 47c; 82-83F about 35c; 78-79F about 24c.
- Implied probability: about 47%.
- Estimated fair value: 40%-50%.
- Estimated edge: no clean fresh edge.
- Confidence: low.
- Classification: maintain represented edge.
- Key reasoning: Forecast/source context still supports an upper-70s to low-80s rain-capped cluster. The visible board no longer offers a clean underpriced contract.
- Liquidity/practicality notes: Maintain PT-20260616-181 from 26c as improved/maintenance.

### 8. Polymarket Chicago/KORD Jun 16 72-73F YES
- Current price: about 17c, with 74-75F leading near the low 60s.
- Implied probability: about 17%.
- Estimated fair value: 10%-20%.
- Estimated edge: none.
- Confidence: low.
- Classification: adverse/maintenance for existing positions.
- Key reasoning: KORD was already near 72F before midday, and updated forecast context centers closer to 75F, moving the best bucket away from 72-73F.
- Liquidity/practicality notes: Maintain PT-20260616-180/PT-20260616-184/PT-20260616-186/PT-20260616-188 as adverse/maintenance. No new hedge without cleaner depth.

## Recommended Paper Trades
No new paper-only trade is recommended this run.

### Maintained / No Duplicate
- Maintain PT-20260616-185 Dallas/KDAL Jun 17 94-95F YES from 25c.
- Maintain PT-20260616-183 HKO Jun 17 28C YES from 32%.
- Maintain PT-20260616-187 Austin/KAUS Jun 17 90-91F YES from 32c.
- Maintain PT-20260616-189 Atlanta/KATL Jun 16 72-73F YES from 51c as improved/no-add.
- Maintain PT-20260616-181 Houston/KHOU Jun 16 80-81F YES from 26c as improved/maintenance.
- Mark PT-20260616-180/PT-20260616-184/PT-20260616-186/PT-20260616-188 Chicago/KORD Jun 16 72-73F YES adverse/maintenance.
- Keep PT-20260616-182 Atlanta/KATL Jun 16 74-75F YES weakened/adverse to the 72-73F hedge.

No real bets, trades, wallet actions, or order execution occurred.

## Risks and Invalidation Factors
- Exact weather buckets can lose by one degree even when the broad forecast thesis is right.
- U.S. Polymarket weather markets resolve to Wunderground station history; NWS/METAR evidence is supportive, not controlling.
- Same-day markets can reflect partial or stale station evidence, and displayed prices may be rounded or shallow.
- Dallas/Austin/Houston/Atlanta Jun 17 positions are forward-day weather buckets with meaningful forecast-cycle risk.
- HKO has one-decimal Celsius boundary risk; 27.xC rain cap and 29C warming are both live.
- Low public volume in Houston and Atlanta Jun 17 makes visible prices less reliable.

## Sources Used
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- Polymarket Dallas Jun 17: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket HKO Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket Houston Jun 17: https://polymarket.com/event/highest-temperature-in-houston-on-june-17-2026
- NWS station forecast/current pages for KATL, KORD, KHOU, KDAL, and KAUS.
- HKO current weather and 9-day forecast.

## Repo Log Update
- Updated latest and timestamped odds snapshots, alert summary, JSON market snapshot, paper-trading maintenance note, rolling paper-trading log/summary, watchlist, edge notes, and paper-trade summary.
- No new paper-trade entry or ledger append was created because this was a no-new-entry maintenance run.
- GitHub connector mirror target: rickyparkcinta/weather.
