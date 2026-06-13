# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 14:12:43
- HKT: 2026-06-13 22:12:43
- Scheduled invocation: 2026-06-13 22:07:02 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket highest-temperature markets: Los Angeles/KLAX Jun 13 and Jun 14, Houston/KHOU Jun 13 and Jun 14, Dallas/KDAL Jun 13 and Jun 14, Chicago/KORD Jun 13, London/EGLC Jun 13, and NYC/KLGA Jun 13 and Jun 14.
- Cross-market checks: Kalshi Houston Jun 13 NWS daily-high buckets; Robinhood/ForecastEx threshold pages for Houston and Los Angeles where readable.
- Official/weather evidence: NWS point forecasts and current observations for KHOU, KDAL, KLAX, KORD, and KLGA; Wunderground KLAX current/forecast page.

## Top Edges

### 1. Polymarket Houston/KHOU Jun 13 92-93F YES

- Current price: Polymarket 33% displayed / Buy Yes 34c; 90-91F leads at 57%.
- Implied probability: about 33%-34%.
- Estimated fair value: 40%-52%.
- Estimated edge: about +6 to +18 percentage points.
- Confidence: low.
- Classification: moderate represented edge; strongest raw cross-market disagreement.
- Key reasoning: NWS Hobby still shows today's high near 93F with only a 20% shower/thunderstorm chance after 11am. Kalshi's NWS-settled Houston 92-93F bucket is much higher at 63% / Yes 70c, reinforcing that the hotter exact bucket is not a fringe outcome. The major caveats are source mismatch, because Polymarket resolves to Wunderground/KHOU while Kalshi resolves from NWS climate reporting, and Polymarket's own market still strongly favors 90-91F.
- Liquidity/practicality: Polymarket target-bucket volume about $4.5K; the paper book already has multiple Houston Jun 13 entries, including cheaper entries.
- Action: maintain only; no duplicate paper add.

### 2. Polymarket Dallas/KDAL Jun 13 96-97F YES

- Current price: 7% displayed / Buy Yes 7.0c.
- Implied probability: about 7%.
- Estimated fair value: 16%-28%.
- Estimated edge: about +9 to +21 percentage points.
- Confidence: low.
- Classification: moderate represented edge.
- Key reasoning: NWS Dallas Love Field shows today's high near 97F and current KDAL conditions were already 80F at 7:53am CDT. Polymarket remains concentrated in 92-93F and 94-95F, with 96-97F far below the official point forecast center. The offset is that exact-bucket risk is high, and the market/context text still frames Dallas as low-to-mid 90s with cloud/storm timing able to cap heating.
- Liquidity/practicality: target-bucket volume about $2.8K. PT-20260613-133 already represents this thesis from 4.9c; current price is higher than entry and does not clear the strict duplicate trigger.
- Action: maintain only.

### 3. Polymarket Los Angeles/KLAX Jun 13 74-75F YES

- Current price: 4% displayed / Buy Yes 5.0c.
- Implied probability: about 4%-5%.
- Estimated fair value: 8%-18%.
- Estimated edge: about +3 to +13 percentage points.
- Confidence: low.
- Classification: weak-to-moderate represented edge; source-conflicted.
- Key reasoning: NWS KLAX still shows today's high near 75F, but Wunderground/KLAX forecasts 73F, current KLAX was only 64F at 6:38am PDT, and Polymarket's AI/context summary explicitly supports 72-73F as the likely station peak. This is no longer a clean add despite the low price.
- Liquidity/practicality: target-bucket volume about $6.8K. LA Jun 13 exposure is already represented by PT-20260613-134, PT-20260613-136, and PT-20260613-139.
- Action: maintain only; no further LA Jun 13 duplicate without stronger live station evidence.

### 4. Polymarket Dallas/KDAL Jun 14 92-93F YES

- Current price: 11% displayed / Buy Yes 11.9c.
- Implied probability: about 12%.
- Estimated fair value: 16%-28%.
- Estimated edge: about +4 to +16 percentage points.
- Confidence: low.
- Classification: watch-only, possible forward-day edge.
- Key reasoning: NWS KDAL shows Sunday high near 92F, while Polymarket centers the Jun 14 board on 88-89F and 90-91F. The edge is capped because the same NWS period carries a 50% chance of showers and thunderstorms mainly after 10am, which can easily pull the station into a lower bucket.
- Liquidity/practicality: target-bucket volume about $1.3K with a wide exact-bucket risk profile.
- Action: watch only; no fresh paper entry this run.

### 5. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: 16% displayed / Buy Yes 18c.
- Implied probability: about 16%-18%.
- Estimated fair value: 20%-32%.
- Estimated edge: about +2 to +14 percentage points.
- Confidence: low.
- Classification: represented forward-day edge, source-conflicted.
- Key reasoning: NWS KLAX shows Sunday high near 70F, while Polymarket centers on 72-73F and 74-75F. Wunderground/KLAX forecasts 74F for Sunday, so the fair estimate is reduced and no added exposure is justified.
- Liquidity/practicality: target-bucket volume about $473; PT-20260613-138 already holds the thesis at the current 18c price.
- Action: maintain only.

## Watchlist / No Fresh Edge

- Chicago/KORD Jun 13 86-87F YES: Polymarket is now near even between 84-85F and 86-87F, with 86-87F at 43% / Buy Yes 44c. NWS O'Hare high near 87F supports the bucket, but the quote is near fair and well above PT-20260612-128's 26c entry.
- London/EGLC Jun 13 23C YES: repriced down to 9% / Buy Yes 10c while 22C and 21C dominate. Existing 23C paper entries are adverse-watch/maintenance only.
- NYC/KLGA Jun 13 88-89F YES: NWS LaGuardia high near 89F is now largely reflected by market context; no fresh edge.
- Houston/KHOU Jun 14 92-93F YES: still cheap at 15c versus some official high-near-93 context, but Sunday storm risk and existing Houston concentration keep it watch-only.

## Recommended Paper Trades

No new paper trade is recommended this run.

Rationale: the largest apparent edges are already represented by open paper positions, and the only unrepresented forward-day signal, Dallas/KDAL Jun 14 92-93F, is too storm-sensitive and thin to justify a fresh simulated entry at this hour.

## Risks and Invalidation Factors

- Exact-bucket risk dominates; one degree Fahrenheit or Celsius can flip several theses.
- Polymarket weather contracts here resolve to Wunderground station histories, not necessarily NWS point forecasts.
- Houston cross-market comparison is imperfect because Kalshi uses NWS daily climate reports while Polymarket uses Wunderground/KHOU.
- Dallas and Houston Jun 14 are storm-timing markets as much as temperature markets.
- LA depends heavily on marine-layer clearing, and Wunderground is cooler than the NWS point page.
- Several public market pages include AI/context summaries that may lag live order books or blend non-resolution data sources.

## Sources Used

- Polymarket High Temp page: https://polymarket.com/weather/high-temperature
- Polymarket Los Angeles Jun 13: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-13-2026
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- Polymarket Dallas Jun 13: https://polymarket.com/event/highest-temperature-in-dallas-on-june-13-2026
- Polymarket Dallas Jun 14: https://polymarket.com/event/highest-temperature-in-dallas-on-june-14-2026
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Kalshi Houston Jun 13: https://kalshi.com/markets/kxhighthou/daily-high-temperature-houston/kxhighthou-26jun13
- Robinhood Houston Jun 13: https://robinhood.com/us/en/prediction-markets/climate/events/houston-daily-temperature-high-june-13-2026-jun-13-2026/
- Robinhood Los Angeles Jun 13: https://robinhood.com/us/en/prediction-markets/climate/events/los-angeles-daily-temperature-high-june-13-2026-jun-13-2026/
- NWS KHOU forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KDAL forecast: https://forecast.weather.gov/MapClick.php?lat=32.85416&lon=-96.85506
- NWS KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9435&lon=-118.4086
- NWS KORD forecast: https://forecast.weather.gov/MapClick.php?lat=41.9796&lon=-87.9045
- NWS KLGA forecast: https://forecast.weather.gov/MapClick.php?lat=40.77406000000008&lon=-73.87227999999999
- Wunderground KLAX: https://www.wunderground.com/weather/us/ca/los-angeles-international/KLAX

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T1412Z.md`.
- Created `alerts/2026-06-13T1412Z.md`.
- Created `data/market_snapshots/2026-06-13T1412Z.json`.
- Created `paper_trading/maintenance/2026-06-13T1412Z.md`.
- Updated rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- No paper-trading entry or ledger append was created because no new simulated position was opened.
- No real bets or trades were executed.