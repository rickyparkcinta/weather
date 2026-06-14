# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-14 17:11:32
- HKT: 2026-06-15 01:11:32
- Scheduled invocation: 2026-06-15 01:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket daily temperature markets: Hong Kong/HKO Jun 15, Dallas/KDAL Jun 14 and Jun 15, Austin/KAUS Jun 15, Chicago/KORD Jun 14 and Jun 15, Atlanta/KATL Jun 14 and Jun 15, Houston/KHOU Jun 14, plus maintenance checks on Miami/KMIA, Los Angeles/KLAX, NYC/KLGA, and prior paper positions.
- Official weather cross-checks: Hong Kong Observatory 9-day forecast/current readings; NWS airport observations and point forecasts for KDAL, KAUS, KORD, KATL, and KHOU.
- Quote-quality note: public Polymarket pages can lag executable books or disagree by route. Confidence is capped where order-book depth was not independently executable-verified.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 15 29C YES

- Current price: 29C displayed 43%; Buy Yes 43c. Nearby buckets: 28C 33% / Buy Yes 34c, 30C 20% / Buy Yes 20c, 31C 5.6% / Buy Yes 6.0c. Total market volume about $23.0K.
- Implied probability: about 43%.
- Estimated fair value: 50%-62%.
- Estimated edge: about +7 to +19 percentage points before exact-decimal, rain-timing, and page-staleness penalties.
- Confidence: medium-low.
- Classification: fresh moderate edge; best addable paper-only opportunity this run.
- Key reasoning: HKO's 00:00 HKT forecast for Jun 15 lists a maximum of 29C with cloudy weather, occasional heavy showers, and squally thunderstorms. Current HKO reading at 00:00 HKT was 28C with high humidity and active rain/thunder warnings. That profile makes 29.0-29.9C a better center than the market's 43% price, while 28C remains live if heavy rain prevents a 29.0C print.
- Liquidity/practicality notes: Better practical profile than the thin US forward-day airport buckets, but still exact-temperature and one-decimal sensitive.

### 2. Polymarket Austin/KAUS Jun 15 84-85F YES

- Current price: 84-85F displayed 21%; Buy Yes 21c. Nearby buckets: 82-83F 39% / Buy Yes 39c, 80-81F 30% / Buy Yes 31c, 86-87F 3.8% / Buy Yes 4.6c.
- Implied probability: about 21%.
- Estimated fair value: 28%-40%.
- Estimated edge: about +7 to +19 points before storm, source, and forecast-cycle penalties.
- Confidence: low-to-medium-low.
- Classification: moderate watch-only hedge.
- Key reasoning: NWS Austin/Bergstrom now forecasts Monday high near 84F with showers/thunderstorms likely. That makes 84-85F a cleaner center than the existing 86-87F paper entry, but 80-83F remains very live if rain arrives early and persists.
- Liquidity/practicality notes: Existing PT-20260614-152 on 86-87F is weakened/adverse-watch; no new Austin hedge this run because storm risk and low bucket volume remain material.

### 3. Polymarket Chicago/KORD Jun 14 70-71F YES

- Current price: 70-71F displayed 38%; 68-69F leads at 51%. Polymarket total volume about $27.3K.
- Implied probability: about 38% displayed.
- Estimated fair value: 42%-55%.
- Estimated edge: about +4 to +17 points before late-warming and Wunderground/NWS source penalties.
- Confidence: medium-low.
- Classification: represented moderate edge; no duplicate.
- Key reasoning: NWS O'Hare observations showed a 6-hour max of 70F earlier in the morning and 68F at 11:51 CDT, while the forecast for the afternoon now calls for high near 72F and mostly sunny/breezy conditions. That keeps 70-71F live but less clean than the prior hour because a 72F+ print is a real invalidation path.
- Liquidity/practicality notes: PT-20260613-141 and PT-20260614-153 already cover 70-71F; PT-20260614-149 covers 72-73F as an adjacent hedge.

### 4. Polymarket Dallas/KDAL Jun 15 82-83F YES

- Current price: 82-83F displayed 28%; Buy Yes 29c. Nearby buckets: 80-81F 28% / Buy Yes 30c, 84-85F 27% / Buy Yes 27c, 78-79F 9% / Buy Yes 10c.
- Implied probability: about 29%.
- Estimated fair value: 32%-43%.
- Estimated edge: about +3 to +14 points after forecast-cycle and exact-bucket penalties.
- Confidence: low-to-medium-low.
- Classification: watch-only, near moderate.
- Key reasoning: NWS Dallas/Love Field context lists Monday high near 83F with mostly cloudy conditions and showers/thunderstorms possible before 4pm. The market is already broadly clustered from 80-85F, so the edge is not large enough for a new paper entry.

### 5. Same-Day Dallas/KDAL Jun 14 82-83F YES

- Current price: 82-83F displayed 3%; Buy Yes 3.9c.
- Implied probability: about 3.9%.
- Estimated fair value: 4%-10%, down from the prior run.
- Estimated edge: thin and deteriorating.
- Confidence: low.
- Classification: existing paper position downgraded to weak/maintenance.
- Key reasoning: KDAL did print about 82.9F shortly after midnight, but the latest NWS point page showed 78F at 11:53 CDT and updated the same-day high toward 88F. A late rebound into 84F+ is now more plausible, so PT-20260614-154 remains open but weaker.

## Recommended Paper Trades

### PT-20260614-155

- Stance: BUY_YES on Polymarket Hong Kong/HKO Jun 15 highest temperature 29C.
- Simulated size: $5 notional.
- Entry price: Buy Yes 43c / displayed 43%.
- Thesis: The official HKO forecast is capped at 29C under heavy showers and squally thunderstorms, and the station was already 28C at midnight HKT. The 29.0-29.9C bucket looks modestly underpriced relative to that official center.
- Confidence: medium-low.
- Invalidation risks: heavy rain prevents any 29.0C print and the day tops at 28.xC; a dry break allows 30.0C+; final Daily Extract differs from provisional intraday readings; public Polymarket price is stale; one-decimal boundary risk.

Maintenance actions:

- Maintain PT-20260613-141 and PT-20260614-153 Chicago/KORD Jun 14 70-71F YES; no duplicate at the current 38% displayed context.
- Maintain PT-20260614-149 Chicago/KORD Jun 14 72-73F YES as adjacent hedge.
- Downgrade PT-20260614-154 Dallas/KDAL Jun 14 82-83F YES to weak/maintenance after NWS Dallas warmed same-day context toward 88F.
- Keep PT-20260614-151 Dallas/KDAL Jun 14 84-85F as secondary maintenance only.
- Keep PT-20260614-152 Austin/KAUS Jun 15 86-87F on adverse-watch; 84-85F is the better current bucket, but no new hedge was added.
- Keep Atlanta/KATL Jun 14 90-91F adverse-watch after NWS centered 89F and Polymarket favored 88-89F.

## Risks and Invalidation Factors

- Exact-bucket misses by one degree or one decimal dominate every listed market.
- Public Polymarket pages may lag executable books, and some localized pages have disagreed in prior runs.
- HKO Jun 15 is a rain-capped market: more rain favors 28C, while a brief break in cloud/rain can push 30C.
- Austin and Dallas Jun 15 are forecast-cycle-sensitive and can reprice sharply on the next NWS update.
- US airport temperature markets generally resolve from Wunderground station histories; NWS pages are strong proxies but not the final settlement source.

## Sources Used

- Polymarket Hong Kong Jun 15: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-15-2026
- HKO 9-day forecast API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en
- HKO current readings API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en
- Polymarket Austin Jun 15: https://polymarket.com/event/highest-temperature-in-austin-on-june-15-2026
- NWS Austin/Bergstrom forecast: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=30.1831&lg=english&lon=-97.6799
- Polymarket Chicago Jun 14: https://polymarket.com/event/highest-temperature-in-chicago-on-june-14-2026
- NWS O'Hare observation history: https://forecast.weather.gov/data/obhistory/KORD.html
- NWS O'Hare forecast context: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Dallas Jun 14: https://polymarket.com/zh-hant/event/highest-temperature-in-dallas-on-june-14-2026
- Polymarket Dallas Jun 15: https://polymarket.com/es/event/highest-temperature-in-dallas-on-june-15-2026
- NWS Dallas/Love Field observation history: https://forecast.weather.gov/data/obhistory/KDAL.html
- NWS Dallas/Love Field forecast context: https://forecast.weather.gov/MapClick.php?textField1=32.7942&textField2=-96.7652
- Polymarket Atlanta Jun 14: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-14-2026
- NWS Atlanta/KATL observation history: https://forecast.weather.gov/data/obhistory/KATL.html
- NWS Atlanta/KATL forecast context: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- NWS KHOU observation history: https://forecast.weather.gov/data/obhistory/KHOU.html

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-14T1711Z.md`.
- Created `alerts/2026-06-14T1711Z.md`.
- Created `data/market_snapshots/2026-06-14T1711Z.json`.
- Created `paper_trading/entries/PT-20260614-155.md`.
- Created `paper_trading/maintenance/2026-06-14T1711Z.md`.
- Created `paper_trading/ledger_appends/2026-06-14T1711Z.csv`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No real trades or betting actions were executed.
