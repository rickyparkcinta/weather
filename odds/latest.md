# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 14:13:46
- HKT: 2026-06-12 22:13:46
- Scheduled invocation: 2026-06-12 22:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: NYC/LaGuardia KLGA, Chicago/O'Hare KORD, Houston/Hobby KHOU, London City Airport/EGLC, Atlanta/KATL, Miami/KMIA, and Hong Kong Observatory.
- Kalshi Jun 12 daily high-temperature market for NYC/Central Park, using last verified quote context because a clean current quote was not refreshed.
- Maintenance checks on open Jun 12 and Jun 13 paper positions.

## Top Edges

### 1. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 88-89F displayed 36%; Buy Yes 36c / Buy No 65c. Nearby buckets: 90-91F displayed 32% with Buy Yes 33c; 86-87F displayed 12% with Buy Yes 13c.
- Implied probability: 36% from the Buy Yes quote.
- Estimated fair value: 42%-52%.
- Estimated edge: +6 to +16 percentage points before spread and duplicate-exposure penalty.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS LaGuardia forecasts Saturday sunny with a high near 89F, keeping 88-89F the best-centered bucket. The current quote is 1c below PT-20260612-126's 37c paper entry, which is not enough improvement to justify duplicating exact-bucket exposure.
- Liquidity/practicality: Event volume about $4.8K; target bucket volume about $512. 90-91F remains the main adjacent miss.
- Action: maintain PT-20260612-126 only.

### 2. Polymarket London/EGLC Jun 13 23C YES
- Current market: 23C displayed 23%; Buy Yes 23c / Buy No 78c. Nearby buckets: 22C displayed 44% with Buy Yes 45c; 21C displayed 27% with Buy Yes 28c.
- Implied probability: 23% from the Buy Yes quote.
- Estimated fair value: 30%-40%.
- Estimated edge: +7 to +17 percentage points before exact-Celsius penalty.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport lists Saturday maximum temperature at 23C, while Polymarket is centered on 22C and 21C. This remains a real source-vs-price gap, but exact-Celsius settlement and Wunderground station-history noise cap sizing.
- Liquidity/practicality: Event volume about $27.0K; target bucket volume about $2.6K. This is practical enough to monitor, but already represented by PT-20260612-124.
- Action: maintain PT-20260612-124 only.

### 3. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 92-93F displayed 34%; Buy Yes 35c / Buy No 67c. 90-91F leads at 44% with Buy Yes 44c / Buy No 57c.
- Implied probability: 35% from the Buy Yes quote.
- Estimated fair value: 40%-50%.
- Estimated edge: +5 to +15 percentage points before liquidity penalty.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Hobby forecasts Saturday mostly sunny with a high near 93F, but Polymarket's own market context and the adjacent 90-91F pricing reflect a plausible 90-92F outcome band. The 35c/67c spread is still too wide for a clean paper entry.
- Liquidity/practicality: Event volume about $2.0K; target bucket volume about $298. Wide spread and thin depth keep this watch-only.
- Action: watch only; no paper entry.

### 4. Polymarket Chicago/KORD Jun 13 84-85F YES
- Current market: 84-85F displayed 40%; Buy Yes 40c / Buy No 61c. Nearby buckets: 86-87F displayed 26% with Buy Yes 28c; 82-83F displayed 19% with Buy Yes 20c.
- Implied probability: 40% from the Buy Yes quote.
- Estimated fair value: 43%-54%.
- Estimated edge: +3 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare forecasts Saturday increasing clouds with a high near 85F, keeping 84-85F live. The current quote remains above PT-20260612-122's 36c paper entry, so this is maintenance only.
- Liquidity/practicality: Event volume about $3.5K; target bucket volume about $219.
- Action: maintain PT-20260612-122 only.

## Watchlist / No Fresh Edge
- Polymarket Atlanta/KATL Jun 13 92-93F YES: displayed 45%; Buy Yes 47c / Buy No 56c. NWS KATL has Saturday high near 92F with only a 10% late-day storm chance, but the market is near fair after spread and 90-91F/94-95F adjacent risk.
- Polymarket Miami/KMIA Jun 13 90-91F YES: displayed 37%; Buy Yes 37c / Buy No 64c, while 88-89F leads at 55% with Buy Yes 55c. NWS KMIA shows Saturday high near 91F, but sea-breeze and 30% afternoon thunderstorm risk keep 88-89F live. Weak watch only.
- Polymarket HKO Jun 13 30C/31C cluster: 30C displayed 37% with Buy Yes 38c; 31C displayed 35% with Buy Yes 36c. HKO forecasts 27-31C with showers and thunderstorms, leaving no single bucket clearly mispriced.
- Kalshi NYC/Central Park Jun 12 94-95F YES: direct current refresh remained blocked. Last verified quote from 2026-06-12 11:10 UTC was chance 42%; Yes 41c / No 61c. Treat as represented maintenance only, not a fresh signal.
- Polymarket HKO Jun 12 29C YES: adverse maintenance only after prior HKO Observatory readings exceeded 30C.

## Recommended Paper Trades
No new paper trade this run.

Maintain existing represented positions only:
- PT-20260612-126: NYC/KLGA Jun 13 88-89F YES.
- PT-20260612-122: Chicago/KORD Jun 13 84-85F YES.
- PT-20260612-124: London/EGLC Jun 13 23C YES.
- PT-20260612-123: Kalshi NYC/Central Park Jun 12 94-95F YES.

No real bet or trade was executed.

## Risks and Invalidation Factors
- Exact weather buckets can flip on a one-degree station move.
- Polymarket depth remains thin and wide in several station buckets, especially Houston.
- Wunderground settlement histories can differ from NWS point forecasts and provisional observations.
- Kalshi NYC uses Central Park/NWS climate rules, while Polymarket NYC uses LaGuardia/Wunderground.
- London City Airport may verify 22C even if public daily guidance points to 23C.
- Storm timing, cloud cover, lake breeze, sea breeze, and late-day clearing can shift exact buckets by one adjacent band.
- Kalshi quote freshness was weaker this run, so it was not used for fresh paper exposure.

## Sources Used
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Chicago Jun 13: https://polymarket.com/es/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket Atlanta Jun 13: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- Polymarket Hong Kong Jun 13: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-13-2026
- Kalshi NYC Jun 12: https://kalshi.com/markets/kxhighny/highest-temperature-in-nyc/kxhighny-26jun12
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS O'Hare/KORD: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Hartsfield-Jackson/KATL: https://forecast.weather.gov/zipcity.php?inputstring=KATL
- NWS Miami/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update
- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T1413Z.md`.
- Created `alerts/2026-06-12T1413Z.md`.
- Created `data/market_snapshots/2026-06-12T1413Z.json`.
- Created `paper_trading/maintenance/2026-06-12T1413Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
