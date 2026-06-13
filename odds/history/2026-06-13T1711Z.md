# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 17:11:10
- HKT: 2026-06-14 01:11:10
- Scheduled invocation: 2026-06-14 01:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket highest-temperature markets from the active watchlist: Houston/KHOU Jun 13 and Jun 14, Dallas/KDAL Jun 13 and Jun 14, Los Angeles/KLAX Jun 13 and Jun 14, NYC/KLGA Jun 14, Chicago/KORD Jun 13 carried context, and London/EGLC Jun 13 carried context.
- Current market-price surfaces: Polymarket high-temperature category page, Polymarket event pages where readable, and NYC Polymarket city page.
- Official/weather evidence: NWS point forecasts and public observations for KHOU, KDAL, KLAX, and KLGA.
- Cross-market context: Kalshi Houston Jun 13 rules page was readable, but current executable Kalshi prices did not refresh cleanly enough to use as a primary quote in this run.

## Top Edges

### 1. Polymarket Houston/KHOU Jun 13 92-93F YES

- Current price: quote-conflicted. Polymarket high-temperature page shows Houston Jun 13 90-91F at 45% and 92-93F at 28%; the Houston event page says 92-93F is the frontrunner at 57% with 90-91F at 35%.
- Implied probability: 28%-57%, depending on public surface.
- Estimated fair value: 42%-60%.
- Estimated edge: strongly positive only if the 28% surface is live; near fair if the 57% event-page quote is live.
- Confidence: low.
- Classification: represented, quote-conflicted possible edge.
- Key reasoning: NWS Hobby still shows a high near 93F, and the KHOU observation was 89.1F at 10:53am CDT, so 92-93F remains plausible but not locked. The public Polymarket surfaces now disagree enough that this cannot be treated as a clean entry signal.
- Liquidity/practicality notes: the event page reports about $18.2K traded, but multiple existing paper entries already cover the Houston Jun 13 92-93F thesis. Do not duplicate while quote surfaces disagree.

### 2. Polymarket NYC/KLGA Jun 14 88-89F YES

- Current price: 38% on the NYC Polymarket city page.
- Implied probability: about 38%.
- Estimated fair value: 36%-47%.
- Estimated edge: about -2 to +9 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented, mild edge.
- Key reasoning: NWS LaGuardia shows Sunday high near 88F with shower risk mainly late in the day. The market is now centered on the same 88-89F bucket, so the original 18c paper entry has moved in favor but the current quote is close to fair.
- Liquidity/practicality notes: Polymarket city page shows about $6.3K volume and $45.9K liquidity for the Jun 14 NYC high-temp market. Maintain PT-20260613-130 only.

### 3. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: target bucket not cleanly exposed in this run; prior clean buy price was 18c. The LA Jun 14 event page currently shows 72-73F at 44% and 74-75F at 33%.
- Implied probability: unclear for 70-71F; last clean observed quote was about 18%.
- Estimated fair value: 22%-34%.
- Estimated edge: positive only if 70-71F remains near or below the prior 18c area.
- Confidence: low.
- Classification: represented forward-day edge, quote-limited.
- Key reasoning: NWS KLAX continues to show Sunday high near 70F, while the visible Polymarket event page favors warmer 72-75F outcomes. That is directionally supportive of the existing 70-71F paper entry, but the target quote was not current enough for an add.
- Liquidity/practicality notes: PT-20260613-138 already holds this thesis at 18c. No duplicate without a clean current quote and stronger source alignment.

### 4. Polymarket Dallas/KDAL Jun 14 92-93F YES

- Current price: no clean current target quote captured; prior clean buy price was 11.7c at 16:11 UTC.
- Implied probability: stale prior quote about 11.7%.
- Estimated fair value: 14%-24%.
- Estimated edge: potentially +2 to +12 percentage points if the prior quote is still live.
- Confidence: low.
- Classification: watch-only possible forward-day edge.
- Key reasoning: NWS Dallas shows Sunday high near 92F, but also a 50% chance of showers and thunderstorms mainly after 10am. That makes the market a storm-timing call rather than a simple forecast-vs-price gap.
- Liquidity/practicality notes: no fresh paper entry because the current quote did not refresh cleanly and storm timing can move the station several buckets lower.

### 5. Polymarket Los Angeles/KLAX Jun 13 74-75F YES

- Current price: Polymarket high-temperature page shows 74-75F at 33% and 72-73F at 40%; the LA event-page FAQ separately references 72-73F at 55%, so quote surfaces remain inconsistent.
- Implied probability: about 33% on the target bucket where visible.
- Estimated fair value: 24%-38%.
- Estimated edge: about -9 to +5 percentage points.
- Confidence: low.
- Classification: represented, near fair after repricing.
- Key reasoning: NWS KLAX shows today's high near 75F, but the NWS public observation feed had KLAX at only 69.1F at 08:53am PDT and the forecast page showed 70F at 09:20am PDT. The path to 74-75F is still live, but the market has repriced far above the earlier 5c-12c paper entries.
- Liquidity/practicality notes: existing paper entries PT-20260613-134, PT-20260613-136, and PT-20260613-139 already represent this thesis. No duplicate.

## Watchlist / No Fresh Edge

- Dallas/KDAL Jun 13 96-97F YES: NWS Dallas still shows today's high near 97F, but KDAL was only 88F at 11:53am CDT and Polymarket's visible board favors 94-95F at 35% and 92-93F at 27%. Maintain PT-20260613-133 only; no add.
- Houston/KHOU Jun 14 92-93F YES: NWS Hobby shows Sunday high near 93F, but Sunday has 60% thunderstorm risk and the target quote did not refresh cleanly. Watch only.
- Chicago/KORD Jun 13 86-87F YES: broad Polymarket page shows 84-85F at 40% and 86-87F at 34%; the existing Chicago paper thesis is maintenance-only.
- London/EGLC Jun 13 23C YES: visible Polymarket page now shows London 22C at 39% and 23C at 34%; maintain existing entries only.

## Recommended Paper Trades

No new paper trade is recommended this run.

Rationale: the only potentially meaningful gaps are either already represented in the paper book, quote-conflicted across public Polymarket surfaces, or missing a clean current target quote. The best unrepresented forward-day setup remains Dallas/KDAL Jun 14 92-93F, but storm risk and stale target pricing keep it watch-only.

## Risks and Invalidation Factors

- Exact-bucket risk dominates; one degree Fahrenheit or Celsius can flip most theses.
- Public Polymarket pages disagree materially this run, especially Houston Jun 13 and Los Angeles Jun 13.
- Polymarket weather markets resolve to Weather Underground station histories, while NWS forecasts and some Kalshi markets use different official-source framing.
- Dallas Jun 14 and Houston Jun 14 are storm-timing markets as much as temperature markets.
- Current-day positions can decay quickly once live observations reveal the station is tracking below the official high forecast.
- Several open paper entries are already concentrated in Houston and Los Angeles, so duplicate-add thresholds should remain strict.

## Sources Used

- Polymarket high-temperature page: https://polymarket.com/weather/high-temperature
- Polymarket Los Angeles Jun 13: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-13-2026
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket NYC page: https://polymarket.com/predictions/new-york-city
- Kalshi Houston Jun 13: https://kalshi.com/markets/kxhighthou/daily-high-temperature-houston/kxhighthou-26jun13
- NWS Houston/Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KHOU observations: https://tgftp.nws.noaa.gov/weather/current/KHOU.html
- NWS Dallas/KDAL forecast: https://forecast.weather.gov/zipcity.php?inputstring=dallas%2CTX
- NWS KDAL observations: https://tgftp.nws.noaa.gov/weather/current/KDAL.html
- NWS KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409
- NWS KLAX observations: https://tgftp.nws.noaa.gov/weather/current/KLAX.html
- NWS KLGA forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS KLGA observations: https://tgftp.nws.noaa.gov/weather/current/KLGA.html

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T1711Z.md`.
- Created `alerts/2026-06-13T1711Z.md`.
- Created `data/market_snapshots/2026-06-13T1711Z.json`.
- Created `paper_trading/maintenance/2026-06-13T1711Z.md`.
- Updated rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- No paper-trading entry or ledger append was created because no new simulated position was opened.
- No real bets or trades were executed.