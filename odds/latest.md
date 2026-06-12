# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 18:13:01
- HKT: 2026-06-13 02:13:01
- Scheduled invocation: 2026-06-13 02:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: Houston/Hobby KHOU, London City Airport/EGLC, NYC/LaGuardia KLGA, Chicago/O'Hare KORD, Miami/KMIA, Atlanta/KATL, and Hong Kong Observatory.
- Broader Polymarket temperature board was checked for context; only evidence-supported watchlist markets were ranked.
- Maintenance checks on open Jun 13 paper positions: PT-20260612-122, PT-20260612-124, PT-20260612-126, and PT-20260612-127.

## Top Edges

### 1. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 90-91F led at 37%; 92-93F was 28% displayed / Buy Yes 29c / Buy No 74c.
- Implied probability: about 29% using Buy Yes.
- Estimated fair value: 34%-44%.
- Estimated edge: +5 to +15 percentage points before exact-bucket and source-conflict penalties.
- Confidence: low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS Houston Hobby still shows Saturday high near 93F, while the market remains centered at 90-91F. That leaves 92-93F modestly underpriced, but PT-20260612-127 already entered at 28c and the live quote is now slightly worse.
- Liquidity/practicality: target-bucket volume remains thin, near $529, and the displayed Yes/No spread is wide. This is a maintenance edge only.
- Action: maintain PT-20260612-127 only.

### 2. Polymarket London/EGLC Jun 13 23C YES
- Current market: 22C led at 41%; 23C was 33% displayed / Buy Yes 33c / Buy No 68c.
- Implied probability: about 33% using Buy Yes.
- Estimated fair value: 35%-45%.
- Estimated edge: +2 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport still lists Saturday maximum daytime temperature at 23C and hourly guidance reaches 23C around late afternoon, while the market still favors 22C. The edge is much narrower than earlier after 23C repriced from the high-20s to 33c.
- Liquidity/practicality: current price is above PT-20260612-124's 25c entry. Exact-Celsius and Wunderground station-history risk cap sizing.
- Action: maintain PT-20260612-124 only.

### 3. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 88-89F led at 36%; 90-91F was 28%; 88-89F Buy Yes was 37c / Buy No 66c.
- Implied probability: about 37% using Buy Yes.
- Estimated fair value: 39%-49%.
- Estimated edge: +2 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate represented edge / no duplicate.
- Key reasoning: NWS LaGuardia still shows Saturday high near 89F, aligning with the 88-89F bucket, and the market has moved that bucket into the lead. The remaining gap is plausible but not fresh.
- Liquidity/practicality: 88-89F target-bucket volume remains low, around $384, and current price is at the PT-20260612-126 entry. No add.
- Action: maintain PT-20260612-126 only.

### 4. Polymarket Chicago/KORD Jun 13 84-85F YES
- Current market: 84-85F led at 42%; Buy Yes 42c / Buy No 59c.
- Implied probability: about 42%.
- Estimated fair value: 42%-52%.
- Estimated edge: 0 to +10 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak represented edge / no duplicate.
- Key reasoning: NWS O'Hare shows Saturday high near 85F, but the market has mostly caught up and the 84-85F bucket is now the clear leader.
- Liquidity/practicality: current price is above PT-20260612-122's 36c entry; no reason to add.
- Action: maintain PT-20260612-122 only.

## Watchlist / No Fresh Edge
- Polymarket Miami/KMIA Jun 13 90-91F YES: 90-91F was 39% / Buy Yes 39c while NWS Miami International is near 91F with 30% storm risk. Sea-breeze and 88-89F risk keep this close to fair.
- Polymarket Atlanta/KATL Jun 13 92-93F YES: 92-93F led at 47% / Buy Yes 47c while NWS KATL is near 92F. Fair estimate 45%-55%; no clear edge after spread and 90-91F/94-95F adjacent risks.
- Polymarket Hong Kong Observatory Jun 13: 30C and 31C were tied at 37% / Buy Yes 37c; HKO forecasts 27-31C with showers and thunderstorms. No single bucket is clearly mispriced.
- Broader Polymarket temperature board: no stronger evidence-supported watchlist add surfaced during this pass.

## Recommended Paper Trades

No new paper-only position is recommended this run.

Maintain existing open paper positions:
- PT-20260612-127: Houston/KHOU Jun 13 92-93F YES at 28c, $5 simulated notional.
- PT-20260612-124: London/EGLC Jun 13 23C YES at 25c, $5 simulated notional.
- PT-20260612-126: NYC/KLGA Jun 13 88-89F YES at 37c, $5 simulated notional.
- PT-20260612-122: Chicago/KORD Jun 13 84-85F YES at 36c, $5 simulated notional.

No real bet or trade was executed.

## Risks and Invalidation Factors
- Exact weather buckets can flip on a one-degree station move.
- Houston still has source disagreement: NWS supports near 93F, while the market and generated context cluster closer to 90-91F.
- London can verify 22C despite a 23C daily max if Wunderground's station history differs from Met Office guidance or rounds lower.
- NYC has largely repriced into the 88-89F bucket, reducing the edge.
- Chicago has mostly converged with official 85F guidance.
- Miami, Atlanta, and Hong Kong are now close to fair after spread and adjacent-bucket risk.
- Low target-bucket volume and wide Yes/No spreads make most apparent edges impractical beyond tiny paper sizing.

## Sources Used
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- Polymarket Atlanta Jun 13: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-13-2026
- Polymarket Hong Kong Jun 13: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-13-2026
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Chicago O'Hare/KORD: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Miami International/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- NWS Atlanta/KATL: https://forecast.weather.gov/MapClick.php?lat=33.66000&lon=-84.42
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update
- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T1813Z.md`.
- Created `alerts/2026-06-12T1813Z.md`.
- Created `data/market_snapshots/2026-06-12T1813Z.json`.
- Created `paper_trading/maintenance/2026-06-12T1813Z.md`.
- Updated the paper-trading record with `paper_trading/maintenance/2026-06-12T1813Z.md`.
- Saved rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- No new paper-trade entry or ledger append was created because no new simulated position was opened.
