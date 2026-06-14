# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-14 19:10:57
- HKT: 2026-06-15 03:10:57
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket daily temperature markets: Houston/KHOU Jun 15, Austin/KAUS Jun 15, Atlanta/KATL Jun 15, Hong Kong/HKO Jun 15, Dallas/KDAL Jun 15, Chicago/KORD Jun 15.
- Official cross-checks: NWS point forecasts for KHOU, KAUS, KATL, KDAL, KORD; HKO 9-day forecast and current readings/warnings.
- Quote-quality note: public Polymarket pages may lag executable books, so confidence is capped where depth was not independently verified.

## Top Edges

### 1. Houston/KHOU Jun 15 88-89F YES

- Current price: Buy Yes 9c; displayed probability 8%.
- Implied probability: about 9%.
- Estimated fair value: 24%-36%.
- Estimated edge: about +15 to +27 percentage points.
- Confidence: low-to-medium-low.
- Classification: strongest fresh moderate edge; add-on only.
- Key reasoning: NWS Houston Hobby still forecasts a high near 88F with showers and thunderstorms likely mainly before 2pm. The bucket repriced below the prior 14c paper entry while official guidance still leaves 88-89F live.
- Liquidity/practicality: target-bucket volume is thin, so simulated size remains tiny.

### 2. Austin/KAUS Jun 15 84-85F YES

- Current price: Buy Yes 22c; displayed probability 22%.
- Implied probability: about 22%.
- Estimated fair value: 30%-42%.
- Estimated edge: about +8 to +20 points.
- Confidence: low-to-medium-low.
- Classification: fresh moderate hedge.
- Key reasoning: NWS Austin/Bergstrom now centers Monday near 84F with showers and thunderstorms, making 84-85F a better-centered hedge against older Austin 86-87F exposure.
- Liquidity/practicality: precipitation and low-volume risk keep size tiny.

### 3. Atlanta/KATL Jun 15 84-85F YES

- Current price: Buy Yes 37c; displayed probability 36%.
- Estimated fair value: 42%-52%.
- Estimated edge: about +5 to +15 points.
- Confidence: medium-low.
- Action: represented by PT-20260614-157 from 31c; no duplicate.

### 4. Hong Kong/HKO Jun 15 29C YES

- Current price: Buy Yes 44c; displayed probability 44%.
- Estimated fair value: 48%-60%.
- Estimated edge: about +4 to +16 points.
- Confidence: medium-low.
- Action: represented by PT-20260614-155 from 43c; no duplicate.

### 5. Dallas/KDAL Jun 15 82-83F YES

- Current price: Buy Yes 29c; displayed probability 29%.
- Estimated fair value: 34%-44%.
- Estimated edge: about +5 to +15 points.
- Confidence: low-to-medium-low.
- Action: watch-only.

### 6. Chicago/KORD Jun 15 76-77F YES

- Current price: Buy Yes 39c; displayed probability 38%.
- Estimated fair value: 42%-52%.
- Estimated edge: about +3 to +13 points.
- Confidence: low-to-medium-low.
- Action: watch-only.

## Recommended Paper Trades

### PT-20260614-158

- Stance: BUY_YES on Polymarket Houston/KHOU Jun 15 highest temperature 88-89F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 9c / displayed 8%.
- Thesis: NWS high-near-88F forecast remains intact while the target bucket repriced sharply below the prior 14c paper entry.
- Confidence: low-to-medium-low.
- Invalidation risks: persistent rain caps KHOU at 82-87F; late sun reaches 90F+; Wunderground settlement differs from NWS guidance; public quote is stale or thin.

### PT-20260614-159

- Stance: BUY_YES on Polymarket Austin/KAUS Jun 15 highest temperature 84-85F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 22c / displayed 22%.
- Thesis: NWS KAUS now centers Monday near 84F, making 84-85F the better hedge against older 86-87F Austin exposure.
- Confidence: low-to-medium-low.
- Invalidation risks: widespread rain caps KAUS at 80-83F; clearing pushes 86F+; Wunderground settlement differs from NWS guidance; public quote is stale.

## Risks and Invalidation Factors

- Exact-bucket misses by one degree or one decimal dominate all markets.
- Public Polymarket pages may lag executable order books.
- Storm timing in Houston, Austin, Dallas, and Atlanta can move the winning bucket quickly.
- HKO Jun 15 is rain-capped, with 28C and 30C still live.
- US airport markets resolve from Wunderground station histories; NWS is a proxy, not the settlement source.

## Sources Used

- Polymarket market pages for Houston, Austin, Atlanta, Hong Kong, Dallas, and Chicago Jun 15 highest-temperature contracts.
- NWS point forecasts for KHOU, KAUS, KATL, KDAL, and KORD.
- HKO forecast and current-reading APIs.

## Repo Log Update

- Updated `odds/latest.md`.
- Created timestamped history, alert, structured snapshot, paper-trading entries, ledger append, and maintenance note for 2026-06-14T1910Z.
- No real trades or betting actions were executed.
