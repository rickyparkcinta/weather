# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 01:10:34
- HKT: 2026-06-13 09:10:34
- Scheduled invocation: 2026-06-13 09:07:02 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket Jun 13 highest-temperature markets: Chicago/O'Hare KORD, Houston/Hobby KHOU, London City Airport/EGLC, NYC/LaGuardia KLGA, Miami/KMIA, Atlanta/KATL, and Hong Kong Observatory.
- Official weather evidence: NWS KORD, KHOU, KLGA, and KMIA point forecasts; Met Office London City Airport; HKO 9-day forecast API.
- Open paper-trade maintenance: PT-20260612-122, PT-20260612-124, PT-20260612-126, PT-20260612-127, PT-20260612-128, and PT-20260612-129.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 13 86-87F YES

- Current market: 84-85F leads around 40%-41%; 86-87F around 32% displayed / Buy Yes around 33c; 82-83F around 18%; 88-89F around 8%.
- Implied probability: about 33% using the visible Buy Yes quote.
- Estimated fair value: 38%-48%.
- Estimated edge: +5 to +15 percentage points before exact-bucket and liquidity penalties.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare still shows Saturday sunny with a high near 86F, keeping the 86-87F bucket live while the market continues to favor 84-85F. The quote is now above PT-20260612-128's 26c entry, so this is maintenance rather than fresh exposure.
- Liquidity/practicality: target-bucket depth remains thin and the exact-bucket miss path is large.
- Action: maintain PT-20260612-128 only. Keep PT-20260612-122 Chicago/KORD 84-85F YES weakened/adverse-watch.

### 2. Polymarket Houston/KHOU Jun 13 92-93F YES

- Current market: 90-91F leads around 42%-44%; 92-93F around 33%-35%; 88-89F around 16%-17%; 94-95F around 8%-9%.
- Implied probability: about 33%-35%.
- Estimated fair value: 38%-48%.
- Estimated edge: +3 to +15 percentage points before exact-bucket and liquidity penalties.
- Confidence: low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS Hobby still shows mostly sunny with a high near 93F and heat index values near 102, but the market remains centered on the cooler 90-91F bucket. The current price is above both open paper entries at 28c and 26c.
- Liquidity/practicality: target-bucket depth remains thin and exact-bucket risk is high.
- Action: maintain PT-20260612-127 and PT-20260612-129 only. No duplicate above the below-24c trigger.

### 3. Polymarket London/EGLC Jun 13 23C YES

- Current market: 22C leads around 39%-41%; 23C around 34%-35%.
- Implied probability: about 34%-35%.
- Estimated fair value: 36%-46%.
- Estimated edge: +1 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport daily forecast supports 23C, but the hourly table leaves 22C live depending on settlement source and rounding. Current price is above PT-20260612-124's 25c entry.
- Action: maintain PT-20260612-124 only.

### 4. Polymarket NYC/KLGA Jun 13 88-89F YES

- Current market: 88-89F leads around 44%-50%; 90-91F around 26%-32%; 86-87F around 19%; 92-93F around 6%.
- Implied probability: about 44%-50%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly -8 to +8 percentage points.
- Confidence: low-to-medium-low.
- Classification: near fair / represented no-add.
- Key reasoning: NWS LaGuardia supports a high near 89F, but the market has largely caught up.
- Action: maintain PT-20260612-126 only.

## Watchlist / No Fresh Edge

- Miami/KMIA Jun 13: 90-91F appears around 47%-48% against NWS high near 90F with afternoon shower/thunderstorm risk. No clean edge after sea-breeze and exact-bucket risk.
- Atlanta/KATL Jun 13: 92-93F was around 56%-57% in the public market surface against official context near 92-93F. Close to fair after 94-95F overshoot and storm-timing risk.
- Hong Kong Observatory Jun 13: 29C was around 41% and 30C around 35%; HKO forecast max is 30C with showers and thunderstorms. The 28/29/30C cluster is too live for a single-bucket paper entry.

## Recommended Paper Trades

No new paper trade is recommended this run.

Maintenance only:

- Maintain PT-20260612-128 Chicago/KORD Jun 13 86-87F YES from 26c.
- Maintain PT-20260612-122 Chicago/KORD Jun 13 84-85F YES from 36c as weakened/adverse-watch.
- Maintain PT-20260612-127 and PT-20260612-129 Houston/KHOU Jun 13 92-93F YES from 28c and 26c.
- Maintain PT-20260612-124 London/EGLC Jun 13 23C YES from 25c.
- Maintain PT-20260612-126 NYC/KLGA Jun 13 88-89F YES from 37c.

## Risks and Invalidation Factors

- Exact-bucket risk dominates these weather markets; a one-degree miss can erase the modeled edge.
- Chicago can still settle 84-85F if station heating underperforms the 86F point forecast, or 88F+ if mixing runs hotter.
- Houston can settle 90-91F if the cooler market center is right or if KHOU underperforms the point forecast.
- London can settle 22C despite the daily 23C forecast because the hourly table and exact-Celsius settlement source are tight.
- NYC is now near fair because the market already reflects the 89F forecast.
- Miami, Atlanta, and HKO are vulnerable to showers, sea-breeze/storm timing, and settlement-source rounding.
- Public market pages can lag or disagree across localized surfaces; confidence is reduced where direct depth was not cleanly refreshed.

## Sources Used

- Polymarket public market surfaces and search snippets for Jun 13 weather contracts: Chicago, Houston, London, NYC, Miami, Atlanta, and Hong Kong.
- NWS Chicago/O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS LaGuardia forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Miami forecast: https://forecast.weather.gov/MapClick.php?textField1=25.77&textField2=-80.20
- Met Office London City Airport forecast: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T0110Z.md`.
- Created `alerts/2026-06-13T0110Z.md`.
- Created `data/market_snapshots/2026-06-13T0110Z.json`.
- Created `paper_trading/maintenance/2026-06-13T0110Z.md`.
- Appended maintenance rows to `paper_trading/paper_trade_log.md`.
- Updated paper-trading summary, watchlist, edge notes, and repo working notes.
- No paper-trading ledger append was created because no new paper position was opened.