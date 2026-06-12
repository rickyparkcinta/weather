# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-12 03:07:58
- HKT: 2026-06-12 11:07:58
- Scheduled invocation: 2026-06-12 11:07:00 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket Jun 12, 2026 highest-temperature markets: NYC/LaGuardia KLGA, London City Airport/EGLC, Houston Hobby/KHOU, Chicago O'Hare/KORD, Hong Kong Observatory, Atlanta/KATL, and Miami/KMIA.
- Forward spot checks: Chicago Jun 13, NYC Jun 13, Houston Jun 13, Atlanta Jun 13, Miami Jun 13, London Jun 13, and Hong Kong Jun 13 highest-temperature markets.
- Existing open paper exposures from Jun 11 and Jun 12 runs.

## Sources Used

- Polymarket high-temperature board: https://polymarket.com/weather/high-temperature
- Polymarket London Jun 12 event: https://polymarket.com/event/highest-temperature-in-london-on-june-12-2026
- Polymarket Chicago Jun 12 event: https://polymarket.com/event/highest-temperature-in-chicago-on-june-12-2026
- Polymarket Hong Kong Jun 12 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-12-2026
- Polymarket Chicago predictions page: https://polymarket.com/predictions/chicago
- Polymarket NYC related-market context: https://polymarket.com/event/highest-temperature-in-nyc-on-june-11-2026
- NWS LaGuardia/KLGA forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Chicago O'Hare/KORD forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston Hobby/KHOU forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Atlanta/KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.64028&lon=-84.42694
- NWS Miami/KMIA forecast: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO regional readings: https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Top Edges

### 1. Chicago/KORD Jun 13 84-85F YES

- Current market: displayed around 30%-35%; marked paper entry at 36c using last clean buy context.
- Implied probability: 36%.
- Estimated fair value: 42%-54%.
- Estimated edge: +6 to +18 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate fresh paper edge.
- Key reasoning: NWS O'Hare guidance centers Saturday near 84F while the market still prices 84-85F in the mid-30s. The setup is cleaner than most forward-day candidates because the official forecast center sits directly inside the bucket and the visible Chicago Jun 13 page showed improving volume/liquidity versus the prior run.
- Liquidity/practicality: Polymarket Chicago page showed roughly $466 volume and about $15.7K liquidity for the Jun 13 event; adequate only for tiny paper sizing.
- Action: opened PT-20260612-122, a $5 simulated YES position at 36c.

### 2. NYC/KLGA Jun 12 92-93F YES

- Current market: last clean 92-93F buy Yes context 17c; related Polymarket context still showed 94-95F as the leading Jun 12 hot-tail bucket around the high-30s/low-40s.
- Implied probability: about 17% if the last clean 92-93F quote is still live.
- Estimated fair value: 27%-37%.
- Estimated edge: +10 to +20 percentage points, quote-quality capped.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no add.
- Key reasoning: NWS LaGuardia still forecasts Friday high near 93F and current conditions were already 91F at 9:51pm EDT on Jun 11. The 92-93F bucket remains live, but 94-95F and 96-97F remain the main miss path and direct 92-93F depth did not refresh cleanly this run.
- Liquidity/practicality: prior visible NYC Jun 12 board volume was acceptable, but current exact-depth quality is capped.
- Action: no new duplicate; maintain PT-20260611-119 and PT-20260612-121 only.

### 3. London/EGLC Jun 12 23C YES

- Current market: displayed 15%; buy Yes 15c.
- Implied probability: 15%.
- Estimated fair value: 22%-32%.
- Estimated edge: +7 to +17 percentage points.
- Confidence: low.
- Classification: moderate represented edge / no add.
- Key reasoning: Polymarket still centers London Jun 12 on 21C at 39% and 22C at 38%, while Met Office London City Airport context still supports a daily high/feels-like high around 23C. The edge is real enough to monitor, but exact-Celsius settlement and daily/hourly source disagreement keep confidence capped.
- Liquidity/practicality: visible London Jun 12 volume about $42.6K.
- Action: no new duplicate above the sub-12c/additional-evidence trigger; maintain existing London 23C/22C paper exposure.

### 4. Houston/KHOU Jun 12 92-93F YES

- Current market: last clean context around 26c.
- Implied probability: about 26%.
- Estimated fair value: 34%-44%.
- Estimated edge: +8 to +18 percentage points, quote-quality capped.
- Confidence: low-to-medium-low.
- Classification: represented edge / no add.
- Key reasoning: NWS Hobby guidance now reads high near 92F, keeping 92-93F live, but this is already represented by PT-20260611-114 and PT-20260611-116. The current quote is not materially below the existing 26c add-on entry.
- Liquidity/practicality: thin exact-bucket depth; no third duplicate.
- Action: maintain only.

### 5. NYC/KLGA Jun 13 88-89F YES

- Current market: board context ranged from 31% display on the high-temp page to 38% in related Polymarket snippets.
- Implied probability: roughly 31%-38%.
- Estimated fair value: 38%-50%.
- Estimated edge: +0 to +19 percentage points depending on which quote is live.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS LaGuardia forecasts Saturday high near 88F, which puts 88-89F squarely in play. The problem is quote disagreement and a young market; the edge is attractive only if the low-30s quote is real and executable.
- Liquidity/practicality: forward-day depth appears thin and quote quality is mixed.
- Action: watch only; no paper entry this run.

## Watchlist / No Fresh Edge

- Chicago/KORD Jun 12 80-81F YES: market 45c with NWS Friday high near 80F; fair roughly 47%-57%, so the remaining edge is small and already represented by PT-20260611-120. Keep PT-20260611-113 on 78-79F weakened/adverse-watch.
- Hong Kong Observatory Jun 12 29C YES: market context around the mid-30s while HKO 11:00 HKT showed HK Observatory max since midnight only 27.7C and the 9-day forecast range 26-30C. Maintain PT-20260611-117 as near-fair/adverse-watch; 30C is very live.
- Atlanta/KATL Jun 12 92-93F YES: NWS high near 93F, but market was already near fair in the low/mid-50s. No fresh edge.
- Miami/KMIA Jun 12 90-91F YES: NWS high near 91F with a 20% afternoon storm chance; market around the low-40s is only a weak watch.
- Houston/Atlanta/Miami Jun 13: forward buckets mostly align with NWS centers but do not clear the evidence/liquidity bar for new paper exposure.

## Recommended Paper Trades

### PT-20260612-122

- Market: Polymarket Chicago / O'Hare Jun 13, 2026 highest temperature 84-85F.
- Simulated stance: YES.
- Simulated size: $5 notional.
- Entry price: 36c.
- Implied probability: 36%.
- Estimated fair value: 42%-54%.
- Sizing rationale: tiny first forward-day position; official forecast center is supportive, but the market is young and exact-bucket miss risk is high.
- Thesis: the market is underpricing the 84-85F bucket while NWS O'Hare Saturday guidance centers near 84F.
- Confidence: low-to-medium-low.
- Invalidation risks: forecast shifts cooler to 82-83F or warmer to 86-87F, stronger southwest flow raises the high, pre-frontal cloud/showers cap heating, or Wunderground settlement differs from NWS point guidance.
- Status: open.

## Existing Paper Positions Maintained

- PT-20260611-113: Chicago Jun 12 78-79F YES; open, weakened/adverse-watch.
- PT-20260611-114: Houston Jun 12 92-93F YES; open, live but no-add.
- PT-20260611-115: London Jun 12 23C YES; open, still live but source-conflict capped.
- PT-20260611-116: Houston Jun 12 92-93F YES; open, live but no-add.
- PT-20260611-117: Hong Kong Observatory Jun 12 29C YES; open, near-fair/adverse-watch.
- PT-20260611-118: London Jun 12 22C YES hedge; open.
- PT-20260611-119: NYC Jun 12 92-93F YES; open.
- PT-20260611-120: Chicago Jun 12 80-81F YES; open.
- PT-20260612-121: NYC Jun 12 92-93F YES add-on; open.

## Risks and Invalidation Factors

- Weather bucket markets can flip on a one-degree official station move.
- Direct market quote quality is uneven across some Polymarket pages; apparent edges with stale or conflicting quotes are confidence-capped.
- Wunderground/official-station settlement may differ from nearby NWS point forecasts or preliminary observations.
- London exact-Celsius markets remain sensitive to daily-card versus hourly-table disagreement.
- Forward-day markets can reprice abruptly on a forecast model update, especially with low visible volume.
- Convective storms can cap heating, but late storm timing can leave highs intact.

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T0307Z.md`.
- Created `alerts/2026-06-12T0307Z.md`.
- Created `data/market_snapshots/2026-06-12T0307Z.json`.
- Created `paper_trading/entries/PT-20260612-122.md`.
- Created `paper_trading/ledger_appends/2026-06-12T0307Z.csv`.
- Created `paper_trading/maintenance/2026-06-12T0307Z.md`.
- Updated rolling paper-trading log, summaries, watchlist, edge notes, and repo working notes.
