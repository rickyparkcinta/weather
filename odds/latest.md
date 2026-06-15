# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 23:10:04
- HKT: 2026-06-16 07:10:04
- Scheduled invocation: 2026-06-16 07:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket Jun 16 high-temperature markets: Austin/KAUS, Atlanta/KATL, Hong Kong/HKO, Houston/KHOU, Dallas/KDAL, and Chicago/KORD.
- Broader Polymarket high-temperature page for active Jun 16 cross-checks.
- Official forecasts: NWS KAUS, KATL-area, KHOU, Dallas-area, KORD; HKO 9-day forecast and current weather bulletin.

## Top Edges

1. Austin/KAUS Jun 16 84-85F YES
   - Current price: 14% displayed; Buy Yes 15c.
   - Implied probability: about 15%.
   - Estimated fair value: 30%-42%.
   - Estimated edge: +15 to +27 percentage points.
   - Confidence: low-to-medium-low.
   - Reasoning: NWS Austin-Bergstrom still shows Tuesday high near 85F with showers likely, while Polymarket favors warmer 86-89F buckets.
   - Action: Opened PT-20260615-175, $5 simulated BUY_YES at 15c.

2. HKO Jun 16 28C YES
   - Current price: 32% displayed; Buy Yes 33c.
   - Implied probability: about 33%.
   - Estimated fair value: 38%-50%.
   - Estimated edge: +5 to +17 percentage points.
   - Confidence: low-to-medium-low.
   - Reasoning: HKO's 06:05 HKT forecast moved Tuesday to 25-28C with heavy showers and squally thunderstorms; 06:02 HKT current bulletin showed 25C/rain.
   - Action: Opened PT-20260615-176, $5 simulated BUY_YES at 33c. Existing HKO 29C entries moved to adverse-watch.

3. Atlanta/KATL Jun 16 76-77F YES
   - Current price: 30% displayed; Buy Yes 30c.
   - Estimated fair value: 38%-50%.
   - Confidence: low-to-medium-low.
   - Reasoning: KATL-area NWS forecast remains near 76F, but PT-20260615-174 already holds 32c and 74-75F remains live.
   - Action: Maintain only; no duplicate.

4. Houston/KHOU Jun 16 82-83F YES
   - Current price: 40% displayed; Buy Yes 40c.
   - Estimated fair value: 42%-52%.
   - Action: Watch-only; market mostly repriced toward the NWS 82F high.

5. Dallas/KDAL Jun 16 90-91F YES
   - Current price: 39% displayed; Buy Yes 40c.
   - Estimated fair value: 44%-54%.
   - Action: Watch-only; NWS high near 91F but 88-89F is co-favored.

6. Chicago/KORD Jun 16 74-75F YES
   - Current price: 51% displayed; Buy Yes 51c.
   - Estimated fair value: 44%-54%.
   - Action: Near fair / no edge.

## Recommended Paper Trades

- PT-20260615-175: BUY_YES Austin/KAUS Jun 16 84-85F, $5 simulated notional, entry 15c, confidence low-to-medium-low.
- PT-20260615-176: BUY_YES HKO Jun 16 28C, $5 simulated notional, entry 33c, confidence low-to-medium-low.

## Risks and Invalidation Factors

- Exact-bucket weather markets can miss even when the broad forecast is right.
- Public Polymarket prices may be rounded, stale, or inconsistent across pages.
- U.S. station markets resolve against Wunderground histories, not NWS point forecasts.
- HKO markets resolve to one-decimal Celsius daily maxima.
- Rain timing is the main swing factor for Austin, Atlanta, Houston, Chicago, and Hong Kong.

## Repo Log Update

- Updated `odds/latest.md`.
- Created/updated local durable records for history, alert, JSON snapshot, paper entries, ledger append, and maintenance notes.
- No real trades or betting actions were executed.
