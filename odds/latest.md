# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 18:08:14
- HKT: 2026-06-14 02:08:14
- Scheduled invocation: 2026-06-14 02:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Primary watchlist scope: Polymarket station-resolved highest-temperature markets for Houston/KHOU Jun 13 and Jun 14, Los Angeles/KLAX Jun 13 and Jun 14, Dallas/KDAL Jun 13 and Jun 14, NYC/KLGA Jun 14, Chicago/KORD Jun 13, and London/EGLC Jun 13.
- Cross-checks: Kalshi Houston Jun 13 and Los Angeles Jun 13 where readable.
- Official/weather evidence: NWS point forecasts and public observations for KHOU, KDAL, KLAX, and KLGA.
- Broader high-temperature category scan: Polymarket high-temperature category page and current event pages for liquid/new weather markets.

## Top Edges

### 1. Polymarket Houston/KHOU Jun 14 92-93F YES

- Current price: 11% displayed; Buy Yes 12c; Buy No 91c.
- Implied probability: about 12%.
- Estimated fair value: 18%-30%.
- Estimated edge: roughly +6 to +18 percentage points before source, exact-bucket, storm, and liquidity penalties.
- Confidence: low.
- Classification: moderate edge, tiny paper-only add.
- Key reasoning: NWS Hobby continues to show Sunday high near 93F, with mostly sunny conditions before showers and thunderstorms become likely mainly between 3pm and 4pm. Polymarket instead centers the Jun 14 Houston board on 88-89F at 37%, 90-91F at 28%, and 86-87F at 22%, leaving the 92-93F bucket at only 12c.
- Liquidity/practicality notes: target-bucket volume is only about $841 and the market is newly created. This cleared only for a tiny paper position because the quote is clean and lower than the prior watch-only 15c area.

### 2. Polymarket Houston/KHOU Jun 13 92-93F YES

- Current price: quote-conflicted. Polymarket high-temperature page shows 92-93F at 28%, while a Polymarket related/current surface references the same Jun 13 bucket around 65%; Kalshi Houston Jun 13 shows 92-93F at 93% / Yes 92c.
- Implied probability: 28%-65% on Polymarket public surfaces; 92%-93% on Kalshi.
- Estimated fair value: 55%-80% for the same-day Houston high cluster, with a major source/rules haircut.
- Estimated edge: strong only if the low Polymarket 28% surface is live; thinner if the 65% surface is the actionable quote.
- Confidence: low due public quote disagreement and platform source mismatch.
- Classification: strong raw but represented/quote-conflicted.
- Key reasoning: NWS Hobby shows today's high near 93F and KHOU had already reached 89.1F by 10:53am CDT. Kalshi's NWS-based Houston market has largely converged to the 92-93F bucket. Polymarket's public pages still disagree, so this is not a clean add despite the apparent cross-market spread.
- Liquidity/practicality notes: existing paper entries already cover the Jun 13 Houston 92-93F thesis. No duplicate.

### 3. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: 17% displayed; Buy Yes 19c; Buy No 85c.
- Implied probability: about 19%.
- Estimated fair value: 22%-34%.
- Estimated edge: roughly +3 to +15 percentage points.
- Confidence: low.
- Classification: represented moderate watch edge.
- Key reasoning: NWS KLAX continues to show Sunday high near 70F, while Polymarket favors 72-73F at 43% and 74-75F at 32%. The gap is directionally supportive of the existing 70-71F paper entry, but the event page's own context also leans toward 72-75F under June Gloom/marine-layer uncertainty.
- Liquidity/practicality notes: PT-20260613-138 already holds this thesis from 18c; current 19c is not a better add price.

### 4. Polymarket Los Angeles/KLAX Jun 13 74-75F YES

- Current price: 11% displayed; Buy Yes 12.9c; Buy No 90.1c. Kalshi LA Jun 13 shows 74-75F at 22% / Yes 24c.
- Implied probability: about 13% on Polymarket, about 24% on Kalshi.
- Estimated fair value: 12%-25%.
- Estimated edge: near fair to +12 percentage points, depending on whether KLAX can still reach 74F+ after the slow morning.
- Confidence: low.
- Classification: represented, source-sensitive edge.
- Key reasoning: NWS KLAX still lists a high near 75F, but KLAX was only 70.0F at 09:53 PDT / 10:20 PDT after a marine-layer morning. The Polymarket price has fallen back below Kalshi's NWS-based market, but the current quote is above the most recent 12c paper entry and far above the 5c add-on.
- Liquidity/practicality notes: existing paper entries PT-20260613-134, PT-20260613-136, and PT-20260613-139 already represent this thesis. No duplicate.

### 5. Polymarket Dallas/KDAL Jun 14 92-93F YES

- Current price: 12% displayed; Buy Yes 13.0c; Buy No 90.0c.
- Implied probability: about 13%.
- Estimated fair value: 10%-18%.
- Estimated edge: roughly -3 to +5 percentage points after storm and model-consensus haircuts.
- Confidence: low.
- Classification: weak watch-only edge.
- Key reasoning: NWS Dallas shows Sunday high near 92F, but also a 50% chance of showers and thunderstorms mainly after 10am. Polymarket's own context and market center have shifted cooler, with 88-89F at 29% and 90-91F at 26%.
- Liquidity/practicality notes: no fresh paper entry; this remains too storm-sensitive.

## Recommended Paper Trades

### PT-20260613-140

- Stance: BUY_YES on Polymarket Houston/KHOU Jun 14 92-93F.
- Simulated size: $5 notional.
- Entry price: 12c.
- Thesis: NWS Hobby still centers Sunday near 93F, and the highest-probability thunderstorm window appears late enough that a 92-93F print remains plausible before convection caps the station. Polymarket's 12c quote looks modestly underpriced versus a conservative 18%-30% fair estimate.
- Confidence: low.
- Invalidation risks: thunderstorms/clouds arrive early, KHOU stalls in 88-91F, Wunderground station history differs from NWS point guidance, the quote is stale/thin, or market makers are correctly discounting the 93F NWS high for local storm timing.

## Risks and Invalidation Factors

- Exact-bucket risk dominates; one degree Fahrenheit or Celsius can flip these markets.
- Houston Jun 14 and Dallas Jun 14 are storm-timing markets as much as temperature markets.
- Public Polymarket surfaces still disagree materially for Houston Jun 13.
- Polymarket weather markets resolve to Wunderground station histories, while Kalshi and NWS evidence use different official-source framing.
- Several open paper entries are already concentrated in Houston and Los Angeles, so add-on sizing remains tiny.
- Current-day LA and Dallas positions are vulnerable to live observations tracking below the forecast high.

## Sources Used

- Polymarket high-temperature page: https://polymarket.com/weather/high-temperature
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- Polymarket Los Angeles Jun 13: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-13-2026
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket Dallas Jun 13: https://polymarket.com/event/highest-temperature-in-dallas-on-june-13-2026
- Polymarket Dallas Jun 14: https://polymarket.com/event/highest-temperature-in-dallas-on-june-14-2026
- Polymarket NYC page: https://polymarket.com/predictions/new-york-city
- Kalshi Houston Jun 13: https://kalshi.com/markets/kxhighthou/daily-high-temperature-houston/kxhighthou-26jun13
- Kalshi Los Angeles Jun 13: https://kalshi.com/markets/kxhighlax/highest-temperature-in-los-angeles/kxhighlax-26jun13
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
- Created `odds/history/2026-06-13T1808Z.md`.
- Created `alerts/2026-06-13T1808Z.md`.
- Created `data/market_snapshots/2026-06-13T1808Z.json`.
- Created `paper_trading/entries/PT-20260613-140.md`.
- Created `paper_trading/ledger_appends/2026-06-13T1808Z.csv`.
- Created `paper_trading/maintenance/2026-06-13T1808Z.md`.
- Updated rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- No real bets or trades were executed.