# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-14 21:11:03
- HKT: 2026-06-15 05:11:03
- Scheduled invocation: 2026-06-15 05:07:00 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket daily temperature markets: Dallas/KDAL Jun 15, Hong Kong/HKO Jun 15, Houston/KHOU Jun 15, Atlanta/KATL Jun 15, Austin/KAUS Jun 15, and Chicago/KORD Jun 15.
- Cross-market check: Kalshi/Robinhood-style U.S. weather markets were searched, but current public search results were mainly same-day Jun 14 contracts rather than clean Jun 15 comparables.
- Official weather cross-checks: NWS point forecasts for KDAL, KHOU, KATL, KAUS, and KORD; HKO 9-day forecast and current-weather bulletins.
- Quote-quality note: public Polymarket pages can lag executable order books or disagree by localized route. Confidence is capped where order-book depth was not independently executable-verified.

## Top Edges

### 1. Polymarket Dallas/KDAL Jun 15 82-83F YES

- Current price: displayed about 29%; Buy Yes about 29c on the latest readable Polymarket Dallas Jun 15 page context. Nearby buckets: 84-85F about 27%, 80-81F about 22%, 78-79F about 8%.
- Implied probability: about 29%.
- Estimated fair value: 38%-50%.
- Estimated edge: about +9 to +21 percentage points before storm, exact-bucket, source, and quote-quality penalties.
- Confidence: low-to-medium-low.
- Classification: fresh moderate edge.
- Key reasoning: NWS Dallas/Love Field now centers Monday near 83F, with a 40% chance of showers and thunderstorms mainly before 1pm and mostly cloudy conditions. That is a cooler center than the prior 84-85F paper entry and makes 82-83F the better current hedge if the early rain/cloud deck caps heating.
- Liquidity/practicality notes: target-bucket volume is modest and the quote was public-page verified rather than executable-book verified, so simulated size stays tiny.

### 2. Polymarket Hong Kong/HKO Jun 15 29C YES

- Current price: displayed 43%; Buy Yes 43c. Nearby buckets: 28C 24% / Buy Yes 25c, 30C 24% / Buy Yes 25c, 31C 5% / Buy Yes 5.5c.
- Implied probability: about 43%.
- Estimated fair value: 50%-60%.
- Estimated edge: about +7 to +17 points.
- Confidence: medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: HKO's 9-day forecast for Jun 15 lists 26-29C with cloudy weather, showers, squally thunderstorms, and heavy showers at times. The 04:02 HKT current-weather bulletin reported 28C at the Observatory with Heavy Rain. That keeps 29C as the cleanest single bucket if the station rises modestly after daybreak, but the 28.9/29.0/30.0C boundaries remain severe.
- Liquidity/practicality notes: good relative volume, but PT-20260614-155 already holds 29C from 43c.

### 3. Polymarket Houston/KHOU Jun 15 88-89F YES

- Current price: displayed 9%; Buy Yes 10c. Nearby buckets: 84-85F 32% / Buy Yes 32c, 86-87F 25% / Buy Yes 25c, 82-83F 20% / Buy Yes 21c.
- Implied probability: about 10%.
- Estimated fair value: 18%-30%.
- Estimated edge: about +8 to +20 points after reducing fair value for rain/source disagreement.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS Houston-area guidance still supports a high near 86F to 88F with showers and thunderstorms likely, while the public market is clustered in 84-87F. The 88-89F bucket remains live, but a Houston flood/heavy-rain setup and Polymarket's own summary leaning mid-to-upper 80s cap confidence.
- Liquidity/practicality notes: PT-20260614-156 and PT-20260614-158 already represent this thesis, including a 9c add-on. No duplicate at 10c.

### 4. Polymarket Atlanta/KATL Jun 15 84-85F YES

- Current price: displayed 35%; Buy Yes 36c. Nearby buckets: 82-83F 30% / Buy Yes 31c, 86-87F 22% / Buy Yes 22c, 80-81F 8% / Buy Yes 8.9c.
- Implied probability: about 36%.
- Estimated fair value: 40%-50%.
- Estimated edge: about +4 to +14 points.
- Confidence: medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS KATL forecasts Monday near 83-84F with only slight afternoon thunderstorm risk, keeping 84-85F live. The edge is now smaller because the quote is worse than the 31c paper entry and 82-83F is a credible adjacent miss.
- Liquidity/practicality notes: no duplicate at a worse price than PT-20260614-157.

### 5. Polymarket Austin/KAUS Jun 15 84-85F YES

- Current price: displayed 26%; Buy Yes 29c. Nearby buckets: 82-83F 36% / Buy Yes 36c, 80-81F 25% / Buy Yes 25c, 86-87F 4% / Buy Yes 5.7c.
- Implied probability: about 29% at the ask.
- Estimated fair value: 31%-41%.
- Estimated edge: about +2 to +12 points at the ask.
- Confidence: low-to-medium-low.
- Classification: represented weak-to-moderate hedge; no duplicate.
- Key reasoning: NWS Austin/Bergstrom still supports 84-85F with Monday showers/thunderstorms and high precipitation probability, but all-day rain can cap 80-83F and the 29c ask is worse than the 22c paper entry.
- Liquidity/practicality notes: existing Austin exposure is already hedged; no add.

### 6. Polymarket Chicago/KORD Jun 15 76-77F YES

- Current price: high-temperature category page shows 76-77F around 38% and 74-75F around 36%; previous direct page context had Buy Yes near 40c.
- Implied probability: about 38%-40%.
- Estimated fair value: 41%-51%.
- Estimated edge: thin, about +1 to +13 points.
- Confidence: low-to-medium-low.
- Classification: watch-only.
- Key reasoning: NWS O'Hare guidance supports a high near 76F, but the market already makes 76-77F the leader and 74-75F is nearly co-favored.
- Liquidity/practicality notes: not cheap enough for a new paper entry.

## Recommended Paper Trades

### PT-20260614-161

- Stance: BUY_YES on Polymarket Dallas/KDAL Jun 15 highest temperature 82-83F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 29c / displayed about 29%.
- Thesis: The updated NWS KDAL forecast centers Monday near 83F, cooler than the previous Dallas 84-85F thesis. If rain and cloud cover keep afternoon heating muted but do not cap KDAL below 82F, 82-83F is underpriced relative to the official forecast center.
- Confidence: low-to-medium-low.
- Invalidation risks: rain persists and caps KDAL at 80-81F or lower; afternoon clearing pushes the high into 84-85F or warmer; Wunderground final station history differs from NWS point guidance; public Polymarket quote is stale or thin.

Maintenance actions:

- Maintain PT-20260614-160 Dallas/KDAL Jun 15 84-85F YES as an adjacent warmer hedge, but downgrade it below the new 82-83F center.
- Maintain PT-20260614-155 Hong Kong/HKO Jun 15 29C YES from 43c; no duplicate at the same quote.
- Maintain PT-20260614-156 and PT-20260614-158 Houston/KHOU Jun 15 88-89F YES; no duplicate at 10c after the 9c add-on.
- Maintain PT-20260614-157 Atlanta/KATL Jun 15 84-85F YES from 31c; no duplicate at 36c.
- Maintain PT-20260614-159 Austin/KAUS Jun 15 84-85F YES from 22c; no duplicate at 29c ask.
- Keep Chicago/KORD Jun 15 76-77F watch-only.

## Risks and Invalidation Factors

- Exact one-degree or one-decimal bucket misses dominate every listed market.
- Public Polymarket pages may lag executable order books, and localized pages have disagreed in prior runs.
- Houston, Austin, Dallas, and Atlanta are storm-timing markets; a few hours of earlier or later rain can shift the winning bucket.
- HKO Jun 15 is rain-capped: persistent heavy rain favors 28C, while a dry break can push 30C.
- US airport temperature markets resolve from Wunderground station histories; NWS pages are strong proxies but not the final settlement source.

## Sources Used

- Polymarket Dallas Jun 15: https://polymarket.com/event/highest-temperature-in-dallas-on-june-15-2026
- NWS Dallas/Love Field forecast: https://forecast.weather.gov/MapClick.php?lat=32.85416&lon=-96.85506
- Polymarket Hong Kong Jun 15: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-15-2026
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- Polymarket Houston Jun 15: https://polymarket.com/event/highest-temperature-in-houston-on-june-15-2026
- NWS Houston-area forecast: https://forecast.weather.gov/MapClick.php?textField1=29.7687&textField2=-95.3867
- Houston Chronicle flood/heavy-rain context: https://www.houstonchronicle.com/news/houston-weather/forecast/article/houston-flood-watch-heavy-rain-flooding-this-week-22304772.php
- Polymarket Atlanta Jun 15: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-15-2026
- NWS Atlanta/KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Polymarket Austin Jun 15: https://polymarket.com/event/highest-temperature-in-austin-on-june-15-2026
- NWS Austin/Bergstrom forecast: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- Polymarket high-temperature category / Chicago context: https://polymarket.com/weather/high-temperature
- NWS O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Kalshi search context for U.S. temperature markets: https://kalshi.com/markets/kxhightdal/dallas-maximum-temperature/kxhightdal-26jun14

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-14T2111Z.md`.
- Created `alerts/2026-06-14T2111Z.md`.
- Created `data/market_snapshots/2026-06-14T2111Z.json`.
- Created `paper_trading/entries/PT-20260614-161.md`.
- Created `paper_trading/maintenance/2026-06-14T2111Z.md`.
- Created `paper_trading/ledger_appends/2026-06-14T2111Z.csv`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No real trades or betting actions were executed.
