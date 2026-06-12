# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 17:17:22
- HKT: 2026-06-13 01:17:23
- Scheduled invocation: 2026-06-13 01:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: Houston/Hobby KHOU, London City Airport/EGLC, NYC/LaGuardia KLGA, Chicago/O'Hare KORD, Miami/KMIA, Atlanta/KATL, and Hong Kong Observatory.
- Maintenance checks on open Jun 12 and Jun 13 paper positions.
- Kalshi NYC/Central Park Jun 12 was treated as maintenance/adverse-watch only after the prior scan's Central Park observation and market move.

## Top Edges

### 1. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 90-91F led around 37%; 92-93F was 27% / Buy Yes 28c / Buy No 75c.
- Implied probability: about 28% using Buy Yes.
- Estimated fair value: 34%-44%.
- Estimated edge: +6 to +16 percentage points before exact-bucket and source-conflict penalties.
- Confidence: low.
- Classification: moderate fresh paper edge.
- Key reasoning: NWS Houston Hobby still indicates a Saturday high near 93F, while Polymarket's embedded public forecast context and market center cluster closer to 90F. The price fell materially from the prior 35c watch-only level, making the 92-93F bucket cheap enough for a tiny simulated position.
- Liquidity/practicality: target bucket volume was only about $442, and exact-bucket weather outcomes remain fragile. Treat this as a small paper-only test, not a high-conviction build.
- Action: opened PT-20260612-127, $5 simulated YES at 28c.

### 2. Polymarket London/EGLC Jun 13 23C YES
- Current market: 22C led around 43%; 23C was about 28% / Buy Yes 29c.
- Implied probability: about 29% using Buy Yes.
- Estimated fair value: 35%-45%.
- Estimated edge: +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport shows Saturday reaching 23C, while the market still makes 22C the leading bucket. This remains positive, but it is already represented by PT-20260612-124.
- Liquidity/practicality: exact-Celsius settlement and Wunderground station-history risk cap sizing; current price is above the 25c paper entry.
- Action: maintain PT-20260612-124 only.

### 3. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 90-91F led around 38%; 88-89F was about 35% / Buy Yes 35c.
- Implied probability: about 35%.
- Estimated fair value: 39%-49%.
- Estimated edge: +4 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: public forecast context still straddles the 89-90F boundary, while the market leader is one bucket warmer at 90-91F. The thesis is still live but already represented by PT-20260612-126.
- Liquidity/practicality: no duplicate because the move is only modestly below the 37c entry and exact-bucket NYC exposure is already open.
- Action: maintain PT-20260612-126 only.

### 4. Polymarket Chicago/KORD Jun 13 84-85F YES
- Current market: 84-85F led around 39% / Buy Yes 40c; 86-87F was around 26% / Buy Yes 28c.
- Implied probability: about 40% using Buy Yes.
- Estimated fair value: 40%-50%.
- Estimated edge: roughly 0 to +10 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate represented edge / no duplicate.
- Key reasoning: current forecast context remains close to 84-86F, so the 84-85F bucket is reasonable but no longer clearly underpriced.
- Liquidity/practicality: existing PT-20260612-122 entered at 36c; current price is above entry.
- Action: maintain PT-20260612-122 only.

## Watchlist / No Fresh Edge
- Polymarket Miami/KMIA Jun 13 90-91F YES: 88-89F led near 55%; 90-91F was around 37% / Buy Yes 38c. Forecast context near 90F keeps this live, but sea-breeze/thunderstorm and adjacent-bucket risk make the edge too thin after spread.
- Polymarket Atlanta/KATL Jun 13 92-93F YES: 92-93F led near 45% / Buy Yes 47c. NWS KATL is near 92F, but price is close to fair after 90-91F and 94-95F adjacent risks.
- Polymarket Hong Kong Observatory Jun 13: 30C led near 39% / Buy Yes 40c; 31C was around 35% / Buy Yes 36c. HKO forecasts 27-31C with showers and thunderstorms, so no single bucket is clearly mispriced.
- Kalshi NYC/Central Park Jun 12 94-95F YES: maintenance/adverse-watch only from the prior run; not a fresh edge.

## Recommended Paper Trades

### PT-20260612-127
- Stance: YES on Polymarket Houston/Hobby Jun 13 92-93F highest temperature.
- Simulated size: $5 notional.
- Entry price: 28c.
- Implied probability: 28%.
- Estimated fair value: 34%-44%.
- Thesis: if KHOU follows the NWS point forecast near 93F rather than the market's 90-91F center, the 92-93F bucket is underpriced.
- Confidence: low.
- Invalidation risks: KHOU settles 90-91F or 88-89F due cloud, sea-breeze, or shower timing; the NWS forecast is high relative to other sources; the station overshoots into 94-95F; the browser-readable quote is stale; or thin liquidity distorts the displayed edge.

No real bet or trade was executed.

## Risks and Invalidation Factors
- Exact weather buckets can flip on a one-degree station move.
- Several current opportunities rely on disagreement between official point forecasts and the market's embedded public forecast context.
- Polymarket resolves most watched weather markets to Wunderground station histories, which can differ from NWS point forecasts and provisional observations.
- London City Airport may verify 22C even if the Met Office hourly table touches 23C.
- Sea breeze, lake breeze, storm timing, cloud cover, and late-day clearing can move final highs into adjacent buckets.
- Low target-bucket volume makes several apparent edges impractical beyond tiny paper sizing.

## Sources Used
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- Polymarket Atlanta Jun 13: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-13-2026
- Polymarket Hong Kong Jun 13: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-13-2026
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Atlanta/KATL: https://forecast.weather.gov/zipcity.php?inputstring=KATL
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update
- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T1717Z.md`.
- Created `alerts/2026-06-12T1717Z.md`.
- Created `data/market_snapshots/2026-06-12T1717Z.json`.
- Created `paper_trading/entries/PT-20260612-127.md`.
- Created `paper_trading/ledger_appends/2026-06-12T1717Z.csv`.
- Created `paper_trading/maintenance/2026-06-12T1717Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.