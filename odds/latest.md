# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 12:11:53
- HKT: 2026-06-12 20:11:53
- Scheduled invocation: 2026-06-12 20:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: Chicago/O'Hare KORD, NYC/LaGuardia KLGA, Houston/Hobby KHOU, London City Airport/EGLC, Atlanta/KATL, Miami/KMIA, and Hong Kong Observatory.
- Kalshi Jun 12 daily high-temperature market for NYC/Central Park, using last verified quote context because the public text/API refresh was blocked.
- Maintenance checks on open Jun 12 and Jun 13 paper positions.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 13 84-85F YES
- Current market: 84-85F displayed 38%; Buy Yes 40c / Buy No 64c. Nearby buckets: 86-87F displayed 26% with Buy Yes 28c; 82-83F displayed 18% with Buy Yes 19c.
- Implied probability: 40%.
- Estimated fair value: 43%-54%.
- Estimated edge: +3 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare forecasts Saturday increasing clouds with a high near 85F, keeping 84-85F the best-centered bucket. The quote is above PT-20260612-122's 36c paper entry, so this remains maintenance rather than a fresh add.
- Liquidity/practicality: Event volume is about $3.2K, but the target bucket volume is only about $214 and exact-bucket risk remains high.
- Action: maintain PT-20260612-122 only.

### 2. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 92-93F displayed 34%; Buy Yes 35c / Buy No 68c. 90-91F leads at 44% with Buy Yes 47c.
- Implied probability: 35%.
- Estimated fair value: 42%-52%.
- Estimated edge: +7 to +17 percentage points before liquidity penalty.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Hobby forecasts Saturday mostly sunny with a high near 93F and heat index near 102F, which supports the 92-93F bucket more than the market leader. The problem is still practical: the 35c/68c spread is wide and visible bucket liquidity is thin.
- Liquidity/practicality: Target bucket volume is only about $298; no paper entry unless the quote tightens or improves while the 93F forecast remains intact.
- Action: watch only.

### 3. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 88-89F displayed 37%; Buy Yes 39c / Buy No 66c. Nearby buckets: 90-91F displayed 31% with Buy Yes 31c; 86-87F displayed 11% with Buy Yes 12c.
- Implied probability: 39%.
- Estimated fair value: 42%-52%.
- Estimated edge: +3 to +13 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS LaGuardia forecasts Saturday sunny with a high near 89F. That keeps 88-89F live, but the market price is now 2c above PT-20260612-126's 37c paper entry and 90-91F remains a credible adjacent miss.
- Liquidity/practicality: Target bucket volume is about $428; no duplicate above entry.
- Action: maintain PT-20260612-126 only.

### 4. Polymarket London/EGLC Jun 13 23C YES
- Current market: 23C displayed 24%; Buy Yes 25c / Buy No 78c. 22C leads at 43% with Buy Yes 44c; 21C is 23% with Buy Yes 23c.
- Implied probability: 25%.
- Estimated fair value: 28%-38%.
- Estimated edge: +3 to +13 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport lists Saturday maximum daytime temperature at 23C, but the hourly station table peaks at 22C. That keeps 23C positive but exact-Celsius and settlement-source risk capped.
- Liquidity/practicality: Event volume is about $24.6K, but the current quote matches PT-20260612-124's 25c entry, so there is no add-on.
- Action: maintain PT-20260612-124 only.

### 5. Kalshi NYC/Central Park Jun 12 94-95F YES
- Current market: direct text/API refresh was blocked this run. Last verified quote from 2026-06-12 11:10 UTC was chance 42%; Yes 41c / No 61c.
- Implied probability: 41% on the last verified quote.
- Estimated fair value: 40%-50%, quote-quality capped.
- Estimated edge: near fair on last verified quote.
- Confidence: low, because quote freshness is weaker.
- Classification: represented maintenance only.
- Key reasoning: NWS Central Park still shows a Heat Advisory and today's high near 95F, but without a clean current Kalshi quote this is only a maintenance mark for PT-20260612-123, not a fresh edge.
- Liquidity/practicality: No new paper position from a stale quote.
- Action: maintain PT-20260612-123 only.

## Watchlist / No Fresh Edge
- Polymarket Atlanta/KATL Jun 13 92-93F YES: displayed 43%; Buy Yes 44c / Buy No 59c. NWS KATL has Saturday high near 92F with a slight late-day thunderstorm chance. Fair roughly 42%-52%, so this is near fair after spread and 90-91F/94-95F adjacent risk.
- Polymarket Miami/KMIA Jun 13 90-91F YES: displayed 37%; Buy Yes 38c / Buy No 65c, while 88-89F leads at 54% / Buy Yes 55c. NWS KMIA has Saturday high near 91F, but sea-breeze and 30% afternoon thunderstorm risk keep 88-89F very live. No edge after spread.
- Polymarket HKO Jun 13 30C/31C cluster: 30C displayed 37% / Buy Yes 38c and 31C displayed 35% / Buy Yes 36c. HKO forecasts a 27-31C range with more showers and thunderstorms. No single bucket is clearly underpriced.
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
- London City Airport may verify 22C even though the daily Met Office maximum shows 23C.
- Storm timing, cloud cover, lake breeze, sea breeze, and late-day clearing can shift exact buckets by one adjacent band.
- Kalshi quote freshness was weaker this run, so it was not used for fresh paper exposure.

## Sources Used
- Polymarket high-temperature board: https://polymarket.com/weather/high-temperature
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket Atlanta Jun 13: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- Polymarket Hong Kong Jun 13: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-13-2026
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
- Created `odds/history/2026-06-12T1211Z.md`.
- Created `alerts/2026-06-12T1211Z.md`.
- Created `data/market_snapshots/2026-06-12T1211Z.json`.
- Created `paper_trading/maintenance/2026-06-12T1211Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
