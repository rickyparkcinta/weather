# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 13:11:19
- HKT: 2026-06-13 21:11:19
- Scheduled invocation: 2026-06-13 21:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket highest-temperature markets: Los Angeles/KLAX Jun 13 and Jun 14, Houston/KHOU Jun 13 and Jun 14, Dallas/KDAL Jun 13 and Jun 14, Chicago/KORD Jun 13 and Jun 14, NYC/KLGA Jun 13 and Jun 14, and London/EGLC Jun 13.
- Cross-market checks: Kalshi Houston Jun 13 NWS daily-high bucket; Robinhood/ForecastEx threshold context for Houston, Dallas, Los Angeles, NYC, and Chicago where readable.
- Official/weather evidence: NWS point forecasts and current observations for KHOU, KDAL, KLAX, KORD, and KLGA; Wunderground KLAX/KHOU/KORD station pages and KLAX public forecast context.

## Top Edges

### 1. Polymarket Los Angeles/KLAX Jun 13 74-75F YES

- Current price: direct Polymarket event page shows 4% displayed / Buy Yes 5.0c; 72-73F leads at 59% and 70-71F is 28%.
- Implied probability: about 4%-5%.
- Estimated fair value: 12%-24%.
- Estimated edge: about +7 to +19 percentage points.
- Confidence: low.
- Classification: moderate addable edge, source-conflicted.
- Key reasoning: NWS KLAX still shows today's high near 75F after morning fog, while Polymarket's direct market price has sharply discounted 74-75F. The major offset is that Wunderground/KLAX shows a 72F forecast, current KLAX conditions were still overcast/cloudy around 63-64F near 5:35-5:56 PDT, and the Polymarket category card/search context conflicts with the direct event page.
- Liquidity/practicality: target-bucket volume about $6.8K; existing paper entries PT-20260613-134 and PT-20260613-136 already represent the thesis, so size stays tiny.
- Action: opened one small paper-only add-on, PT-20260613-139, at 5c.

### 2. Polymarket Houston/KHOU Jun 13 92-93F YES

- Current price: Polymarket 34% displayed / Buy Yes 36c; 90-91F leads at 56%.
- Implied probability: about 34%-36%.
- Estimated fair value: 42%-54%.
- Estimated edge: about +6 to +18 percentage points.
- Confidence: low.
- Classification: moderate represented edge; strong cross-market disagreement.
- Key reasoning: NWS KHOU still shows today's high near 93F, and Kalshi's NWS-settled Houston 92-93F bucket is much higher at 67% / Yes 66c. The comparison is imperfect because Kalshi resolves from NWS daily climate data while Polymarket resolves from Wunderground/KHOU, and Polymarket's own market still strongly favors 90-91F.
- Liquidity/practicality: Polymarket target-bucket volume about $4.4K. Existing Houston entries already represent this exact thesis.
- Action: maintain only; no duplicate.

### 3. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: 16% displayed / Buy Yes 18c.
- Implied probability: about 16%-18%.
- Estimated fair value: 24%-36%.
- Estimated edge: about +6 to +18 percentage points.
- Confidence: low.
- Classification: moderate represented forward-day edge.
- Key reasoning: NWS KLAX shows Sunday high near 70F, while Polymarket centers Sunday on 72-73F and 74-75F. Wunderground/KLAX forecasts 73F for Sunday, so the fair estimate is reduced and source-sensitive.
- Liquidity/practicality: target-bucket volume about $473; PT-20260613-138 already holds the thesis from 18c.
- Action: maintain only.

### 4. Polymarket Dallas/KDAL Jun 13 hotter-bucket thesis

- Current price: Polymarket category/third-party readable context is conflicted; 94-95F and 92-93F are the visible leaders, while the direct 96-97F quote did not refresh cleanly this run.
- Implied probability: not cleanly verified for 96-97F this run; last clean context was about 8%-10%.
- Estimated fair value: 14%-26% for 96-97F if the latest NWS KDAL high near 97F verifies.
- Estimated edge: potentially positive, but quote-quality capped.
- Confidence: low.
- Classification: represented/monitor only.
- Key reasoning: NWS Dallas Love Field still shows today's high near 97F, but market surfaces now cluster more visibly around 92-95F and readable prices disagree.
- Liquidity/practicality: PT-20260613-133 already represents the 96-97F thesis from 4.9c; no clean below-entry quote was captured.
- Action: maintain only.

## Watchlist / No Fresh Edge

- Chicago/KORD Jun 13 86-87F YES: Polymarket 41% / Buy Yes 42c; NWS O'Hare high near 87F. Fair estimate 42%-52%, so this is close to fair and above PT-20260612-128's 26c entry.
- NYC/KLGA Jun 13 88-89F YES: NWS LaGuardia high near 89F, but prior market context has largely priced this in. Maintain represented exposure only.
- Houston/KHOU Jun 14 92-93F YES: still watch-only because NWS shows high near 93F but Sunday has 60% thunderstorm risk and existing Houston exposure is already concentrated.
- London/EGLC Jun 13 23C YES: edge remains quote/source conflicted after the market repriced toward 22C/23C; maintain existing entries only.

## Recommended Paper Trades

### PT-20260613-139

- Stance: BUY_YES on Polymarket Los Angeles/KLAX Jun 13 highest temperature 74-75F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 5.0c.
- Thesis: NWS KLAX still centers today's station high near 75F, while the direct Polymarket page discounts 74-75F to about 5c after shifting strongly toward 72-73F. The entry is only a tiny add-on because Wunderground's forecast is cooler and current morning conditions still favor a marine-layer cap.
- Confidence: low.
- Invalidation risks: Wunderground/KLAX daily high resolves around 70-73F; marine layer persists; sea-breeze timing caps the station; direct Polymarket page is stale or category-card odds are more reliable; or final Wunderground station history differs from NWS point guidance.

## Risks and Invalidation Factors

- Exact-bucket risk dominates; one degree Fahrenheit or Celsius can flip the result.
- Polymarket public surfaces disagree materially for Los Angeles Jun 13 and Dallas Jun 13.
- NWS point forecasts are supportive for several buckets, but Polymarket and Robinhood weather markets generally resolve against Wunderground station history.
- Houston cross-market comparison is imperfect because Kalshi uses NWS daily climate data while Polymarket uses Wunderground/KHOU.
- LA and Chicago outcomes depend heavily on marine-layer/lake-breeze timing and station-specific observations.
- Houston Jun 14 and Dallas Jun 14 remain storm-risked.

## Sources Used

- Polymarket High Temp page: https://polymarket.com/weather/high-temperature
- Polymarket Los Angeles Jun 13: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-13-2026
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Kalshi Houston Jun 13: https://kalshi.com/markets/kxhighthou/daily-high-temperature-houston/kxhighthou-26jun13
- Robinhood daily high overview: https://robinhood.com/us/en/prediction-markets/climate/daily-high-temperature/
- NWS KHOU forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KDAL forecast: https://forecast.weather.gov/MapClick.php?lat=32.85416&lon=-96.85506
- NWS KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9435&lon=-118.4086
- NWS KORD forecast: https://forecast.weather.gov/MapClick.php?lat=41.9796&lon=-87.9045
- NWS KLGA forecast: https://forecast.weather.gov/MapClick.php?lat=40.77406000000008&lon=-73.87227999999999
- Wunderground KLAX: https://www.wunderground.com/weather/us/ca/los-angeles-international/KLAX

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T1311Z.md`.
- Created `alerts/2026-06-13T1311Z.md`.
- Created `data/market_snapshots/2026-06-13T1311Z.json`.
- Created `paper_trading/entries/PT-20260613-139.md`.
- Created `paper_trading/maintenance/2026-06-13T1311Z.md`.
- Created `paper_trading/ledger_appends/2026-06-13T1311Z.csv`.
- Saved rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- No real bets or trades were executed.
