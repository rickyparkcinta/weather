# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 02:12:38
- HKT: 2026-06-13 10:12:38
- Scheduled invocation: 2026-06-13 10:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket Jun 13 highest-temperature markets: Chicago/O'Hare KORD, Houston/Hobby KHOU, London City Airport/EGLC, NYC/LaGuardia KLGA, Miami/KMIA, Atlanta/KATL, and Hong Kong Observatory.
- Cross-market check: Robinhood Houston Daily Temperature High Jun 13 threshold contracts.
- Official weather evidence: NWS KORD, KHOU, KLGA, KMIA, and KATL point forecasts; Met Office London City Airport; HKO 9-day forecast API.
- Open paper-trade maintenance: PT-20260612-122, PT-20260612-124, PT-20260612-126, PT-20260612-127, PT-20260612-128, and PT-20260612-129.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 13 86-87F YES

- Current market: 84-85F leads around 41%; 86-87F around 31% / Buy Yes around 31c; 82-83F around 19%; 88-89F around 7%.
- Implied probability: about 31%.
- Estimated fair value: 39%-49%.
- Estimated edge: +8 to +18 percentage points before exact-bucket and liquidity penalties.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare still shows Saturday sunny with a high near 86F, while the market continues to favor 84-85F. This keeps 86-87F as the cleanest raw gap, but the current quote is above PT-20260612-128's 26c entry.
- Liquidity/practicality: target-bucket volume remains thin; exact-bucket risk is still the main drag.
- Action: maintain PT-20260612-128 only. Keep PT-20260612-122 Chicago/KORD 84-85F YES weakened/adverse-watch.

### 2. Polymarket London/EGLC Jun 13 23C YES

- Current market: 22C remains visible around 39%-41%; 23C was last cleanly visible around 34%-35%, with current exact-depth refresh incomplete.
- Implied probability: about 35% using the last clean target-bucket context; quote-quality capped.
- Estimated fair value: 42%-52%.
- Estimated edge: about +7 to +17 percentage points if the 23C quote remains in the mid-30s.
- Confidence: low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: The Met Office London City Airport page now lists Today at 23C and the hourly table reaches 23C for multiple afternoon/evening slots, improving the 23C thesis versus the prior run. The market still visibly shows 22C as heavily live, so this is not clean enough for a duplicate without fresh executable 23C depth.
- Liquidity/practicality: exact-Celsius settlement and Wunderground/Met Office source differences remain meaningful.
- Action: maintain PT-20260612-124 only.

### 3. Polymarket Houston/KHOU Jun 13 92-93F YES

- Current market: Polymarket context still shows 90-91F as the leader around 43%; exact 92-93F refresh was incomplete. Cross-market Robinhood thresholds show Greater than 91 at 47c, Greater than 92 at 31c, and Greater than 94 at 19c.
- Implied probability: about 31%-35% using cross-market and last clean Polymarket context.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly 0 to +13 percentage points before penalties.
- Confidence: low.
- Classification: weak-to-moderate represented edge / no duplicate.
- Key reasoning: NWS Hobby still shows Saturday high near 93F, but a broader Houston point forecast and cross-market threshold pricing lean cooler, keeping 90-91F very live. Existing paper entries at 28c and 26c already represent the thesis.
- Liquidity/practicality: target-bucket depth is thin, exact-bucket risk is high, and station/source disagreement is larger than Chicago or London.
- Action: maintain PT-20260612-127 and PT-20260612-129 only. No duplicate above the below-24c trigger or without stronger KHOU-specific evidence.

### 4. Polymarket NYC/KLGA Jun 13 88-89F YES

- Current market: 88-89F around 50%; related 90-91F context around 38%.
- Implied probability: about 50%.
- Estimated fair value: 43%-53%.
- Estimated edge: roughly -7 to +3 percentage points.
- Confidence: low-to-medium-low.
- Classification: near fair / represented no-add.
- Key reasoning: NWS LaGuardia still shows Saturday high near 89F, but the market has largely caught up. This is now maintenance rather than an edge.
- Action: maintain PT-20260612-126 only.

## Watchlist / No Fresh Edge

- Miami/KMIA Jun 13: Polymarket shows 90-91F around 47% and 88-89F around 44%; NWS Miami high near 90F with afternoon thunderstorm risk. No clean edge after sea-breeze, storm, and one-bucket miss risk.
- Atlanta/KATL Jun 13: NWS Hartsfield-Jackson high near 93F with slight afternoon storm risk; prior market context already priced 92-93F in the mid-to-high 50s. Near fair and not addable.
- Hong Kong Observatory Jun 13: HKO forecast max remains 30C with showers and thunderstorms; Polymarket context shows 29C/30C both live, with 29C around the low 30s and 30C also heavily represented. No single-bucket edge.
- Robinhood Houston Jun 13 thresholds: Greater than 91 at 47c and Greater than 92 at 31c support caution on Polymarket 92-93F rather than a new add.

## Recommended Paper Trades

No new paper trade is recommended this run.

Maintenance only:

- Maintain PT-20260612-128 Chicago/KORD Jun 13 86-87F YES from 26c.
- Maintain PT-20260612-122 Chicago/KORD Jun 13 84-85F YES from 36c as weakened/adverse-watch.
- Maintain PT-20260612-127 and PT-20260612-129 Houston/KHOU Jun 13 92-93F YES from 28c and 26c.
- Maintain PT-20260612-124 London/EGLC Jun 13 23C YES from 25c.
- Maintain PT-20260612-126 NYC/KLGA Jun 13 88-89F YES from 37c.

## Risks and Invalidation Factors

- Exact-bucket risk dominates: a one-degree miss can erase the modeled edge.
- Polymarket structured API access was unavailable from the workspace, so price confidence relies on public pages/search snippets and cross-market checks; confidence is reduced where exact target-bucket depth did not refresh.
- Chicago can still settle 84-85F if station heating underperforms the 86F point forecast, or 88F+ if mixing runs hotter.
- London can still settle 22C if the Wunderground final high differs from the Met Office hourly signal or rounds lower.
- Houston can settle 90-91F if the broader Houston guidance is better than the KHOU point forecast, or 94F+ if heat overperforms.
- NYC is now close to fair because the market already prices the 89F forecast.
- Miami, Atlanta, and HKO are vulnerable to showers, sea-breeze/storm timing, and settlement-source rounding.

## Sources Used

- Polymarket public market surfaces and indexed snippets for Jun 13 weather contracts: Chicago, Houston, London, NYC, Miami, Atlanta, and Hong Kong.
- Robinhood Houston Daily Temperature High Jun 13 threshold market: https://robinhood.com/us/en/prediction-markets/climate/events/houston-daily-temperature-high-june-13-2026-jun-13-2026/
- NWS Chicago/O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS LaGuardia forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Miami forecast: https://forecast.weather.gov/MapClick.php?textField1=25.77&textField2=-80.20
- NWS Atlanta/KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Met Office London City Airport forecast: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T0212Z.md`.
- Created `alerts/2026-06-13T0212Z.md`.
- Created `data/market_snapshots/2026-06-13T0212Z.json`.
- Created `paper_trading/maintenance/2026-06-13T0212Z.md`.
- Appended maintenance rows to `paper_trading/paper_trade_log.md`.
- Updated paper-trading summary, watchlist, edge notes, and repo working notes.
- No paper-trading ledger append was created because no new paper position was opened.
