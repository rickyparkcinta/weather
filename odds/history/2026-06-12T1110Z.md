# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 11:10:36
- HKT: 2026-06-12 19:10:36
- Scheduled invocation: 2026-06-12 19:07:00 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: Chicago/O'Hare KORD, NYC/LaGuardia KLGA, Houston/Hobby KHOU, London City Airport/EGLC, Atlanta/KATL, Miami/KMIA, and Hong Kong Observatory.
- Kalshi Jun 12 daily high-temperature market for NYC/Central Park.
- Maintenance checks on open Jun 12 and Jun 13 paper positions.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 13 84-85F YES
- Current market: 84-85F displayed 38%; Buy Yes 39c / Buy No 63c. Nearby buckets: 86-87F displayed 26% with Buy Yes 28c; 82-83F displayed 21% with Buy Yes 21c.
- Implied probability: 39%.
- Estimated fair value: 43%-54%.
- Estimated edge: +4 to +15 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare still forecasts Saturday increasing clouds with a high near 85F, keeping 84-85F the best-centered bucket. The market has moved above PT-20260612-122's 36c entry, so the edge is now maintenance rather than fresh exposure.
- Liquidity/practicality: Event volume is about $2.9K, with the target bucket showing about $201 of bucket volume. Exact-bucket risk and above-entry price block a duplicate.
- Action: maintain PT-20260612-122 only.

### 2. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 88-89F displayed 36%; Buy Yes 38c / Buy No 66c. Nearby buckets: 90-91F displayed 29% with Buy Yes 30c; 86-87F displayed 13% with Buy Yes 14c.
- Implied probability: 38%.
- Estimated fair value: 42%-52%.
- Estimated edge: +4 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS LaGuardia keeps Saturday sunny with a high near 89F. That supports 88-89F, but the current quote is 1c above PT-20260612-126's 37c entry and the 90-91F adjacent bucket remains live.
- Liquidity/practicality: Event volume is about $3.9K, but exact-weather spreads remain wide.
- Action: maintain PT-20260612-126 only.

### 3. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 92-93F displayed 34%; Buy Yes 35c / Buy No 68c. 90-91F leads on the detailed event page at 43% with Buy Yes 44c.
- Implied probability: 35%.
- Estimated fair value: 42%-52%.
- Estimated edge: +7 to +17 percentage points before liquidity penalty.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Hobby forecasts Saturday mostly sunny with a high near 93F and heat index near 102F, supporting 92-93F more than the detailed event-page leader. However, visible depth remains very thin and public Polymarket surfaces showed some inconsistent card-level ordering, so confidence stays capped.
- Liquidity/practicality: Buy Yes 35c versus Buy No 68c is too wide for a fresh paper entry.
- Action: watch only; consider a tiny paper entry only if depth tightens or price improves while NWS still centers near 93F.

### 4. Polymarket London/EGLC Jun 13 23C YES
- Current market: 23C displayed 23%; Buy Yes 23c / Buy No 78c. 22C leads at 42% with Buy Yes 43c; 21C is 23% with Buy Yes 23c.
- Implied probability: 23%.
- Estimated fair value: 28%-38%.
- Estimated edge: +5 to +15 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport lists Saturday maximum daytime temperature at 23C, but the hourly station table peaks repeatedly at 22C. That keeps 23C positive but exact-Celsius/source-risk capped.
- Liquidity/practicality: Event volume is about $24.4K, the best liquidity in the current watchlist, but exact-Celsius settlement risk is still material.
- Action: maintain PT-20260612-124 only.

### 5. Kalshi NYC/Central Park Jun 12 94-95F YES
- Current market: 94-95F chance 42%; Yes 41c / No 61c. 92-93F leads at 49% with Yes 49c.
- Implied probability: 41%.
- Estimated fair value: 40%-50%.
- Estimated edge: -1 to +9 percentage points.
- Confidence: low-to-medium-low.
- Classification: near-fair represented edge / no duplicate.
- Key reasoning: NWS Central Park still forecasts today's high near 95F under a Heat Advisory, but Kalshi has moved materially toward the prior paper thesis since the 28c entry.
- Liquidity/practicality: This is now mostly a favorable mark on PT-20260612-123 rather than a fresh edge.
- Action: maintain only.

## Watchlist / No Fresh Edge
- Polymarket Atlanta/KATL Jun 13 92-93F YES: displayed 43%; Buy Yes 44c / Buy No 59c. NWS KATL has Saturday high near 92F with only a 10% late-day storm chance. Fair roughly 42%-52%, so it is near fair after spread and 90-91F/94-95F adjacent risk.
- Polymarket Miami/KMIA Jun 13 90-91F YES: displayed 39%; Buy Yes 39c / Buy No 62c, with 88-89F leading at 51%. NWS KMIA has Saturday high near 91F and 30% afternoon storm risk. This is interesting but not clean enough after sea-breeze and 88-89F risk.
- Polymarket HKO Jun 13 30C/29C cluster: broad board shows 30C around 35% and 29C around 26%; HKO forecasts Jun 13 range 27-31C with showers and thunderstorms. No single bucket is clearly underpriced.
- Polymarket HKO Jun 12 29C YES: adverse maintenance only after prior HKO Observatory readings exceeded 30C.

## Recommended Paper Trades
No new paper trade this run.

Maintain existing represented positions only:
- PT-20260612-122: Chicago/KORD Jun 13 84-85F YES.
- PT-20260612-126: NYC/KLGA Jun 13 88-89F YES.
- PT-20260612-124: London/EGLC Jun 13 23C YES.
- PT-20260612-123: Kalshi NYC/Central Park Jun 12 94-95F YES.

No real bet or trade was executed.

## Risks and Invalidation Factors
- Exact weather buckets can flip on a one-degree station move.
- Polymarket depth remains thin and wide in several US station buckets, especially Houston.
- Wunderground settlement histories can differ from NWS point forecasts and provisional observations.
- Kalshi NYC uses Central Park/NWS climate rules, while Polymarket NYC uses LaGuardia/Wunderground.
- London City Airport may verify cooler than broader London forecasts, and the hourly table still leans 22C rather than 23C.
- Storm timing, cloud cover, lake breeze, sea breeze, and late-day clearing can shift exact buckets by one adjacent band.

## Sources Used
- Polymarket high-temperature board: https://polymarket.com/weather/high-temperature
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket Atlanta Jun 13: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- Kalshi NYC Jun 12: https://kalshi.com/markets/kxhighny/highest-temperature-in-nyc/kxhighny-26jun12
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS O'Hare/KORD: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Central Park/KNYC: https://forecast.weather.gov/MapClick.php?textField1=40.78&textField2=-73.97
- NWS Hartsfield-Jackson/KATL: https://forecast.weather.gov/MapClick.php?lat=33.64028&lon=-84.42694
- NWS Miami/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update
- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T1110Z.md`.
- Created `alerts/2026-06-12T1110Z.md`.
- Created `data/market_snapshots/2026-06-12T1110Z.json`.
- Created `paper_trading/maintenance/2026-06-12T1110Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
