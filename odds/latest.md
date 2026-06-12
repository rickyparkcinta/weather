# Odds Market Snapshot - 2026-06-12 01:08 UTC

Paper trading only. No real bets, trades, wallet actions, or order execution were performed.

## Time Checked

- 2026-06-12 01:08:21 UTC
- 2026-06-12 09:08:21 HKT
- Scheduled invocation: 2026-06-12 09:07:01 HKT

## Markets Monitored

- Polymarket Jun 12 highest-temperature buckets: London/EGLC, Houston/KHOU, NYC/KLGA, Hong Kong Observatory, Atlanta/KATL, Chicago/KORD, and Miami/KMIA.
- Open Jun 12 paper exposures: PT-20260611-113 through PT-20260611-120.
- Sources: Polymarket event/high-temp pages, NWS station forecasts, Met Office London City Airport, HKO current/9-day forecasts.

## Top Edges

1. London EGLC Jun 12 23C YES
   - Current market: 15% displayed; Buy Yes 15c. 21C and 22C both show 37%.
   - Estimated fair value: 25-37%.
   - Estimated edge: +10 to +22 points.
   - Confidence: low-to-medium-low.
   - Classification: moderate represented edge.
   - Reasoning: Met Office London City Airport lists Friday at 23C, while Polymarket remains centered on 21C/22C. Exact-Celsius settlement and Wunderground EGLC history risk cap confidence.
   - Paper action: maintain PT-20260611-115 and PT-20260611-118 only; no duplicate above sub-12c or stronger-hourly trigger.

2. Houston KHOU Jun 12 92-93F YES
   - Current market: 26% displayed; Buy Yes 26c. 90-91F leads at 51%.
   - Estimated fair value: 36-46%.
   - Estimated edge: +10 to +20 points.
   - Confidence: medium-low.
   - Classification: moderate represented edge.
   - Reasoning: NWS Hobby lists Friday high near 92F with a 20% early-afternoon storm chance, keeping 92-93F live while the market favors 90-91F.
   - Paper action: maintain PT-20260611-114/PT-20260611-116 only; no duplicate because the quote matches the 26c add-on.

3. NYC KLGA Jun 12 92-93F YES
   - Current market: last clean context about 20c; direct depth did not refresh cleanly.
   - Estimated fair value: 28-38%.
   - Estimated edge: +8 to +18 points.
   - Confidence: low, quote-quality capped.
   - Classification: weak-to-moderate represented edge.
   - Reasoning: NWS LaGuardia lists Friday high near 93F, but 94-97F hot-tail risk remains credible.
   - Paper action: maintain PT-20260611-119 only.

4. Houston KHOU 90-91F NO / 92-93F relative lean
   - Current market: 90-91F is 51% with Buy Yes 51c / Buy No 50c.
   - Fair value: 90-91F YES roughly 40-50%.
   - Classification: watch-only relative-value signal.
   - Paper action: no new exposure; 91F remains live and spreads are wide.

5. Miami KMIA Jun 12 90-91F YES
   - Current market: 41% displayed; Buy Yes 41c. 88-89F leads at 46%.
   - Estimated fair value: 40-50%.
   - Classification: weak/watch-only.
   - Paper action: no new exposure.

6. Chicago KORD Jun 12 80-81F YES
   - Current market: 45% displayed; Buy Yes 45c.
   - Estimated fair value: 44-54%.
   - Classification: weak/no fresh edge.
   - Paper action: maintain PT-20260611-120; keep PT-20260611-113 weakened/adverse-watch.

## Watch / No Edge

- HKO Jun 12 29C is downgraded to near-fair/adverse-watch after HKO updated the forecast range to 26-30C; Polymarket has 30C leading at 35% and 29C at 32%.
- Atlanta KATL Jun 12 92-93F has largely converged after repricing to 51c against NWS high near 93F.
- Broader high-temperature board was spot-checked; no newer market displaced the Jun 12 watchlist on evidence quality and actionable edge.

## Recommended Paper Trades

No new paper-only position is recommended this run.

## Risks and Invalidation Factors

- Exact-bucket settlement can flip on one degree.
- Some prices are displayed Polymarket probabilities rather than verified executable depth.
- NWS/Met Office forecasts may differ from final Wunderground station histories.
- HKO one-decimal daily max makes 29.9C versus 30.0C decisive.
- Jun 12 paper exposure is already concentrated, so duplicate adds remain capped.

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-12T0108Z.md`.
- Created `alerts/2026-06-12T0108Z.md`.
- Created `data/market_snapshots/2026-06-12T0108Z.json`.
- Created `paper_trading/maintenance/2026-06-12T0108Z.md`.
- Updated rolling memory-backed paper-trading log, summaries, watchlist, edge notes, and working notes.
- No new paper-trading entry file or ledger append was created because no new paper-only position was opened.
