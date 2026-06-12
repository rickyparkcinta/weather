# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 08:10:45
- HKT: 2026-06-12 16:10:45
- Scheduled invocation: 2026-06-12 16:07:02 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: NYC/LaGuardia KLGA, Chicago/O'Hare KORD, Houston/Hobby KHOU, London City Airport/EGLC, Atlanta/KATL, Miami/KMIA, and Hong Kong Observatory.
- Polymarket Jun 12 Hong Kong Observatory and NYC/KLGA maintenance checks for open paper exposure.
- Kalshi Jun 12 daily high-temperature market for NYC/Central Park.
- Existing open paper exposure from Jun 11 and Jun 12 runs.

## Top Edges

### 1. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 88-89F displayed 36%; Buy Yes 37c.
- Implied probability: 37%.
- Estimated fair value: 43%-53%.
- Estimated edge: +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate fresh edge.
- Key reasoning: The market softened from the prior hour while NWS LaGuardia shows a sunny Saturday high near 89F. Polymarket's own rules resolve this market to the LaGuardia Airport Station on Wunderground, so the station-specific NWS signal is relevant.
- Liquidity/practicality: Total event volume is about $2.3K and the 88-89F bucket has more visible activity than the thin Houston board, but it is still a young exact-bucket market.
- Action: opened PT-20260612-126, a $5 simulated YES position at 37c.

### 2. Polymarket Chicago/KORD Jun 13 84-85F YES
- Current market: 84-85F displayed 33%; Buy Yes 37c.
- Implied probability: 37%.
- Estimated fair value: 43%-55%.
- Estimated edge: +6 to +18 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare guidance still centers Saturday near 85F, keeping 84-85F the most source-aligned bucket.
- Liquidity/practicality: The bucket is already represented by PT-20260612-122 from 36c; current price is a touch worse than entry.
- Action: maintain PT-20260612-122 only.

### 3. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 92-93F displayed 31%; Buy Yes 35c; 90-91F leads at 44%.
- Implied probability: 35%.
- Estimated fair value: 42%-52%.
- Estimated edge: +7 to +17 percentage points.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Hobby forecasts Saturday mostly sunny with a high near 93F and heat index near 102F, making 92-93F plausible despite market leadership in 90-91F.
- Liquidity/practicality: Visible bucket volume/depth remains thin and wide, so the edge is not clean enough for a fresh paper entry.
- Action: watch only.

### 4. Polymarket London/EGLC Jun 13 23C YES
- Current market: 23C displayed 23%; Buy Yes 23c. 22C leads at 41%.
- Implied probability: 23%.
- Estimated fair value: 30%-40%.
- Estimated edge: +7 to +17 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport regional guidance still lists Saturday maximum temperature at 23C, while the market keeps 22C as the leader.
- Liquidity/practicality: Exact-Celsius and Wunderground settlement risk remain high; existing PT-20260612-124 exposure already represents the thesis.
- Action: maintain PT-20260612-124 only.

### 5. Kalshi NYC/Central Park Jun 12 94-95F YES
- Current market: 94-95F chance 36%; Yes 35c. 92-93F leads at 46% / Yes 48c.
- Implied probability: 35%.
- Estimated fair value: 38%-48%.
- Estimated edge: +3 to +13 percentage points.
- Confidence: low-to-medium-low.
- Classification: mild-to-moderate represented edge / no duplicate.
- Key reasoning: NWS Central Park/Manhattan still shows Friday high near 95F under heat-advisory context, but the market has repriced materially toward the hot bucket since the 28c paper entry.
- Liquidity/practicality: Already represented by PT-20260612-123 from 28c; current price is improved for the existing paper book, not a new add.
- Action: maintain PT-20260612-123 only.

## Watchlist / No Fresh Edge
- Polymarket Atlanta/KATL Jun 13 92-93F YES: displayed 41%; Buy Yes 43c versus fair 42%-52%; close to fair after adjacent 90-91F and 94-95F risk.
- Polymarket Miami/KMIA Jun 13 90-91F YES: displayed 38%; Buy Yes 38c versus fair 35%-45%; station forecast near 91F is supportive but 88-89F still leads and afternoon storms/sea breeze keep risk high.
- Polymarket HKO Jun 13 30C/31C cluster: 30C Buy Yes 37c and 31C Buy Yes 31c against HKO 27-31C forecast; no clean edge after showers/thunderstorm risk.
- Polymarket HKO Jun 12 29C YES: adverse maintenance because HKO regional readings showed HK Observatory max 30.4C since midnight.

## Recommended Paper Trades
- PT-20260612-126: Simulated YES on Polymarket NYC/KLGA Jun 13 88-89F at 37c, $5 notional, low-to-medium-low confidence. Thesis: NWS LaGuardia high near 89F makes 88-89F underpriced at 37c versus fair 43%-53%. Invalidation risks: KLGA reaches only 86-87F, warms into 90-91F, Wunderground station history differs from NWS point guidance, or the young board reprices sharply on thin depth.

No real bet or trade was executed.

## Paper-Book Maintenance
- PT-20260612-126: New paper-only NYC/KLGA Jun 13 88-89F YES at 37c.
- PT-20260612-122: Chicago/KORD Jun 13 84-85F YES; open, still positive but no duplicate above the 36c entry.
- PT-20260612-124: London/EGLC Jun 13 23C YES; open, still positive but settlement-risk capped.
- PT-20260612-123: Kalshi NYC/Central Park Jun 12 94-95F YES; open, mark improved after Kalshi moved to 35c from 28c entry.
- PT-20260612-125 and PT-20260611-117: HKO Jun 12 29C YES; open/adverse-watch after HKO exceeded 30C.
- PT-20260612-121 and prior NYC/KLGA Jun 12 92-93F exposure: open maintenance; same-day warm-tail risk remains.

## Risks and Invalidation Factors
- Exact weather buckets can flip on one station degree or one-tenth-degree Celsius move.
- Young Jun 13 Polymarket boards can move sharply on small orders.
- Wunderground/settlement histories can differ from nearby NWS point forecasts and provisional station observations.
- Kalshi and Polymarket use different station definitions for New York.
- HKO Jun 12 29C is adverse unless final settlement data differs from provisional HKO readings.
- Storm timing, sea breeze, lake breeze, and late-day clearing can shift exact temperature buckets by one adjacent band.

## Sources Used
- Polymarket high-temperature board: https://polymarket.com/weather/high-temperature
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket Atlanta Jun 13: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- Polymarket Hong Kong Jun 13: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-13-2026
- Kalshi NYC Jun 12: https://kalshi.com/markets/kxhighny/highest-temperature-in-nyc/kxhighny-26jun12
- NWS O'Hare/KORD: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Central Park/Manhattan: https://forecast.weather.gov/MapClick.php?lat=40.76514834741937&lon=-73.9849843124752
- NWS Hartsfield-Jackson/KATL: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS Miami/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO regional readings: https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm

## Repo Log Update
- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T0810Z.md`.
- Created `alerts/2026-06-12T0810Z.md`.
- Created `data/market_snapshots/2026-06-12T0810Z.json`.
- Created `paper_trading/entries/PT-20260612-126.md`.
- Created `paper_trading/ledger_appends/2026-06-12T0810Z.csv`.
- Created `paper_trading/maintenance/2026-06-12T0810Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in the durable memory folder.