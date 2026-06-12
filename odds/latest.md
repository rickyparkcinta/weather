# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-12 02:13:37
- HKT: 2026-06-12 10:13:37
- Scheduled invocation: 2026-06-12 10:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket Jun 12, 2026 highest-temperature markets: London City Airport/EGLC, Houston Hobby/KHOU, NYC LaGuardia/KLGA, Hong Kong Observatory, Atlanta/KATL, Chicago O'Hare/KORD, Miami/KMIA.
- Forward spot checks: NYC Jun 13 and Chicago Jun 13 highest-temperature markets.
- Existing open paper exposures from Jun 11 and Jun 12 runs.

## Sources Used

- Polymarket high-temperature board: https://polymarket.com/weather/high-temperature
- Polymarket London Jun 12 event: https://polymarket.com/event/highest-temperature-in-london-on-june-12-2026
- Polymarket Houston Jun 12 event: https://polymarket.com/event/highest-temperature-in-houston-on-june-12-2026
- Polymarket Atlanta Jun 12 event: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-12-2026
- Polymarket NYC Jun 13 event: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?lat=29.6443&lon=-95.2833
- NWS LaGuardia/KLGA area: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Atlanta/KATL: https://forecast.weather.gov/MapClick.php?lat=33.64028&lon=-84.42694
- NWS Chicago O'Hare/KORD: https://forecast.weather.gov/MapClick.php?lat=41.96&lon=-87.92
- NWS Miami/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.78805&lon=-80.31694
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- Hong Kong Observatory latest readings: https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm

## Top Edges

### 1. NYC/KLGA Jun 12 92-93F YES

- Current market: displayed 16%; buy Yes 17c.
- Implied probability: 17%.
- Estimated fair value: 27%-37%.
- Estimated edge: +10 to +20 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate add-on.
- Key reasoning: the direct 92-93F bucket fell sharply while NWS/nearby LaGuardia guidance still centers around a hot day near the 93-94F boundary. The market now prices a heavy hot-tail: 94-95F around 42c and 96-97F around 32c, so this is not a clean high-conviction edge, but 17c looks too low for a still-live bucket.
- Liquidity/practicality: NYC Jun 12 board showed roughly $17.7k visible volume, acceptable for small simulated sizing.
- Action: opened PT-20260612-121, a $5 simulated YES add-on at 17c.

### 2. London/EGLC Jun 12 23C YES

- Current market: displayed 15%; buy Yes 15c.
- Implied probability: 15%.
- Estimated fair value: 22%-32%.
- Estimated edge: +7 to +17 percentage points.
- Confidence: low.
- Classification: moderate watch / already represented.
- Key reasoning: Met Office London City Airport still showed a 23C forecast, while Polymarket/Wunderground-linked context continued to imply a cooler settlement risk. The source disagreement keeps confidence capped.
- Liquidity/practicality: visible volume about $42.2k, good for paper tracking.
- Action: no new duplicate; existing London 23C YES exposure remains open.

### 3. NYC/KLGA Jun 13 88-89F YES

- Current market: displayed 33%; buy Yes 35c.
- Implied probability: 35%.
- Estimated fair value: 42%-54%.
- Estimated edge: +7 to +19 percentage points.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Saturday guidance was near 88F, making the 88-89F bucket plausible, but the market is young and bucket distribution is fragile.
- Liquidity/practicality: visible volume only about $142; watch-only, no paper entry.

### 4. Chicago/KORD Jun 13 84-85F YES

- Current market: displayed 30%; buy Yes 36c.
- Implied probability: 36%.
- Estimated fair value: 40%-52%.
- Estimated edge: +4 to +16 percentage points.
- Confidence: low.
- Classification: weak watch-only.
- Key reasoning: NWS Saturday guidance for O'Hare was near 84F. The 84-85F bucket is plausible, but the quote is thin and potentially stale.
- Liquidity/practicality: visible volume only about $128; no paper entry.

### 5. Chicago/KORD Jun 12 80-81F YES

- Current market: displayed 44%; buy Yes 45c.
- Implied probability: 45%.
- Estimated fair value: 46%-56%.
- Estimated edge: +1 to +11 percentage points.
- Confidence: low-to-medium-low.
- Classification: small edge / already represented.
- Key reasoning: NWS O'Hare guidance remained near 80F, leaving the 80-81F bucket live, but the price has converged enough that the remaining edge is modest.
- Liquidity/practicality: visible volume about $7.3k.
- Action: no add; existing PT-20260611-120 remains open.

## Watchlist / No Fresh Edge

- Houston/KHOU Jun 12 92-93F YES: market still around 26c, but NWS guidance cooled toward a high near 91F. Existing PT-20260611-114 and PT-20260611-116 are downgraded to near-fair/adverse-watch. No add.
- Atlanta/KATL Jun 12 92-93F YES: market around 53c with NWS high near 93F. Fair value roughly 50%-60%; no meaningful edge.
- Miami/KMIA Jun 12 90-91F YES: market around 43c with NWS high near 91F and afternoon thunderstorm risk. Fair value roughly 43%-53%; weak watch-only.
- Hong Kong Observatory Jun 12 29C YES: market around 35c while 30C leads around 46c. HKO 09:50 reading was 27.4C with forecast range around 28-30C. Existing 29C YES remains near-fair/adverse-watch.

## Recommended Paper Trades

### PT-20260612-121

- Market: Polymarket NYC / LaGuardia Jun 12, 2026 highest temperature 92-93F.
- Simulated stance: YES.
- Simulated size: $5 notional.
- Entry price: 17c.
- Implied probability: 17%.
- Estimated fair value: 27%-37%.
- Sizing rationale: small add-on only; the bucket is live but has meaningful hot-tail and source/boundary risk.
- Thesis: market may have over-rotated into hotter buckets while a 92-93F official-settlement outcome remains plausible.
- Confidence: low-to-medium-low.
- Invalidation risks: official station runs 94F+, forecast model mix shifts hotter, afternoon convection/timing changes the high, or final Wunderground settlement differs from nearby NWS guidance.
- Status: open.

## Existing Paper Positions Maintained

- PT-20260611-113: Chicago Jun 12 78-79F YES; open, weakened/adverse-watch.
- PT-20260611-114: Houston Jun 12 92-93F YES; open, downgraded to near-fair/adverse-watch.
- PT-20260611-115: London Jun 12 23C YES; open, still live but source-conflict capped.
- PT-20260611-116: Houston Jun 12 92-93F YES; open, downgraded to near-fair/adverse-watch.
- PT-20260611-117: Hong Kong Observatory Jun 12 29C YES; open, near-fair/adverse-watch.
- PT-20260611-118: London Jun 12 22C YES hedge; open.
- PT-20260611-119: NYC Jun 12 92-93F YES; open.
- PT-20260611-120: Chicago Jun 12 80-81F YES; open.

## Risks and Invalidation Factors

- Weather bucket markets are highly sensitive to official station choice and rounding/settlement conventions.
- Several markets have visible source disagreement between settlement-linked Polymarket/Wunderground context and official meteorological forecasts.
- Exact-temperature buckets can flip on a one-degree move; high-tail or low-tail skew matters more than headline forecast.
- Forward-day markets showed very thin visible volume, so apparent edges may be stale or impractical.
- Convective storms can either cap daytime heating or arrive late enough to leave highs intact.

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T0213Z.md`.
- Created `alerts/2026-06-12T0213Z.md`.
- Created `data/market_snapshots/2026-06-12T0213Z.json`.
- Created `paper_trading/entries/PT-20260612-121.md`.
- Created `paper_trading/ledger_appends/2026-06-12T0213Z.csv`.
- Created `paper_trading/maintenance/2026-06-12T0213Z.md`.
- Updated rolling paper-trading and memory notes.
