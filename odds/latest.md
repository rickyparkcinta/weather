# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 15:13:31
- HKT: 2026-06-12 23:13:31
- Scheduled invocation: 2026-06-12 23:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: NYC/LaGuardia KLGA, Chicago/O'Hare KORD, Houston/Hobby KHOU, London City Airport/EGLC, Atlanta/KATL, Miami/KMIA, and Hong Kong Observatory.
- Kalshi Jun 12 daily high-temperature market for NYC/Central Park.
- Maintenance checks on open Jun 12 and Jun 13 paper positions.

## Top Edges

### 1. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 92-93F displayed about 32%; 90-91F led around 43%.
- Implied probability: about 32% from displayed market probability; clean current depth was not verified.
- Estimated fair value: 40%-50%.
- Estimated edge: +8 to +18 percentage points before quote-quality and liquidity penalties.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Hobby forecasts Saturday mostly sunny with a high near 93F, keeping 92-93F better centered than the market's 90-91F leader. This is the best unrepresented raw gap, but prior visible depth was very thin/wide and the current refresh did not provide clean executable bid/ask.
- Liquidity/practicality: low practical quality; treat as watch-only until a clean buy quote and spread confirm the displayed probability.
- Action: no paper entry.

### 2. Polymarket London/EGLC Jun 13 23C YES
- Current market: 22C still led around 44%, 21C around 27%; 23C remained last clean 23c context.
- Implied probability: about 23% from last clean Buy Yes quote.
- Estimated fair value: 30%-40%.
- Estimated edge: +7 to +17 percentage points before exact-Celsius penalty.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport continues to list Saturday max 23C with low rain risk, while Polymarket remains centered on 22C/21C. Existing PT-20260612-124 already represents the thesis.
- Liquidity/practicality: event liquidity is practical enough for tiny monitoring, but exact-Celsius settlement and station-history noise cap sizing.
- Action: maintain PT-20260612-124 only.

### 3. Polymarket Chicago/KORD Jun 13 84-85F YES
- Current market: 84-85F displayed about 40%; 86-87F about 26%.
- Implied probability: about 40%.
- Estimated fair value: 43%-54%.
- Estimated edge: +3 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare forecasts Saturday increasing clouds with a high near 85F. The market now makes 84-85F the leader, and the current level is above PT-20260612-122's 36c paper entry.
- Liquidity/practicality: monitor only; no fresh add above entry.
- Action: maintain PT-20260612-122 only.

### 4. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: exact 88-89F depth did not refresh cleanly; related Polymarket surface showed 90-91F around 38%. Last clean 88-89F context was 36c.
- Implied probability: quote-quality-capped at about 36%.
- Estimated fair value: 40%-50%.
- Estimated edge: +4 to +14 percentage points before quote-quality penalty.
- Confidence: low.
- Classification: represented edge / quote-quality capped.
- Key reasoning: NWS LaGuardia forecasts Saturday sunny with a high near 89F, but the market appears to have shifted more weight toward 90-91F. Existing PT-20260612-126 already covers the 88-89F thesis and no current clean quote justifies a duplicate.
- Liquidity/practicality: no add without clean current depth.
- Action: maintain PT-20260612-126 only.

## Watchlist / No Fresh Edge
- Kalshi NYC/Central Park Jun 12 94-95F YES: current market fell to 9% displayed / Yes 10c, while 90-91F led at 51% and 92-93F was 37%. Central Park was only 80.1F at 10:51 EDT after morning rain. Mark PT-20260612-123 open/adverse-watch rather than a current positive edge.
- Polymarket Atlanta/KATL Jun 13 92-93F YES: displayed 45% / Buy Yes 46c; NWS KATL Saturday high near 92F supports the bucket, but price is near fair after spread and adjacent 90-91F/94-95F risk.
- Polymarket Miami/KMIA Jun 13 90-91F YES: displayed 38% / Buy Yes about 39c while 88-89F led near 53%; NWS KMIA high near 91F is supportive, but sea-breeze and 30% thunderstorm risk keep the edge too thin.
- Polymarket HKO Jun 13 30C/31C cluster: HKO's 9-day forecast keeps Hong Kong in a 27-31C, showers/thunderstorms regime, leaving no single bucket clearly mispriced.
- Polymarket HKO Jun 12 29C YES: adverse maintenance only after prior HKO readings exceeded 30C.

## Recommended Paper Trades
No new paper trade this run.

Maintain or monitor existing represented positions only:
- PT-20260612-126: NYC/KLGA Jun 13 88-89F YES.
- PT-20260612-122: Chicago/KORD Jun 13 84-85F YES.
- PT-20260612-124: London/EGLC Jun 13 23C YES.
- PT-20260612-123: Kalshi NYC/Central Park Jun 12 94-95F YES, now adverse-watch.

No real bet or trade was executed.

## Risks and Invalidation Factors
- Exact weather buckets can flip on a one-degree station move.
- Several Polymarket pages remain search/browser-readable rather than API-verifiable from this runtime, so quote-quality penalties are material.
- Polymarket depth is thin in Houston and several target buckets.
- Wunderground settlement histories can differ from NWS point forecasts and provisional observations.
- Kalshi NYC uses Central Park/NWS climate rules, while Polymarket NYC uses LaGuardia/Wunderground.
- London City Airport may verify 22C even if the daily Met Office max remains 23C.
- Storm timing, cloud cover, lake breeze, sea breeze, and late-day clearing can shift exact buckets by one adjacent band.

## Sources Used
- Polymarket weather directory: https://polymarket.com/weather
- Polymarket Houston Jun 13: https://polymarket.com/es/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket Chicago Jun 13: https://polymarket.com/es/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket Atlanta Jun 13: https://polymarket.com/zh/event/highest-temperature-in-atlanta-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/zh/event/highest-temperature-in-miami-on-june-13-2026
- Kalshi NYC Jun 12: https://kalshi.com/markets/kxhighny/highest-temperature-in-nyc/kxhighny-26jun12
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS O'Hare/KORD: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Atlanta/KATL: https://forecast.weather.gov/zipcity.php?inputstring=KATL
- NWS Miami/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- NWS Central Park observations: https://forecast.weather.gov/data/obhistory/KNYC.html
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update
- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T1513Z.md`.
- Created `alerts/2026-06-12T1513Z.md`.
- Created `data/market_snapshots/2026-06-12T1513Z.json`.
- Created `paper_trading/maintenance/2026-06-12T1513Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, the Kalshi NYC paper entry maintenance note, and repo working notes.
