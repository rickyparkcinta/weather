# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-14 13:16:42
- HKT: 2026-06-14 21:16:42
- Scheduled invocation: 2026-06-14 21:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Primary watchlist scope: Polymarket same-day highest-temperature markets for Dallas/KDAL, Atlanta/KATL, Chicago/KORD, Houston/KHOU, NYC/KLGA, Los Angeles/KLAX, Miami/KMIA, Austin/KAUS, Hong Kong/HKO, plus forward-day Jun 15 checks for Austin/KAUS, Dallas/KDAL, Atlanta/KATL, and Chicago/KORD.
- Cross-checks: official NWS point forecasts/current conditions, Hong Kong/HKO market convergence, previous paper-position state, and visible market volume/price movement on public Polymarket pages.
- Quote-quality note: public prediction-market pages can lag executable order books and sometimes disagree by route. Confidence is capped where target-bucket depth was not fully visible.

## Top Edges

### 1. Polymarket Austin/KAUS Jun 15 86-87F YES

- Current price: 86-87F displayed around 6%; Buy Yes 6c. Nearby buckets: 82-83F 37% / Buy Yes 38c, 84-85F 26% / Buy Yes 27c, 80-81F 20% / Buy Yes 21c, 88-89F 2% / Buy Yes 2.1c. Total market volume about $10.1K.
- Implied probability: about 6%.
- Estimated fair value: 18%-30%.
- Estimated edge: about +12 to +24 percentage points before exact-bucket, storm, source, and overnight-forecast penalties.
- Confidence: low-to-medium-low.
- Classification: strongest fresh paper-only edge.
- Key reasoning: NWS Austin/Bergstrom forecasts Monday high near 86F with showers/thunderstorms likely. The market is centered lower at 82-85F, leaving the 86-87F bucket priced as a small tail.
- Liquidity/practicality notes: opened PT-20260614-152 as a $5 simulated YES only. This is a forward-day exact-bucket market, so the edge is fragile even though the quoted price is low.

### 2. Polymarket Dallas/KDAL Jun 14 84-85F YES

- Current price: 84-85F displayed around 4%; Buy Yes 5c. Nearby buckets: 86-87F 29% / Buy Yes 30c, 88-89F 24% / Buy Yes 25c, 90-91F 17% / Buy Yes 18.5c, 82-83F 1% / Buy Yes 2c. Total market volume about $26.3K.
- Implied probability: about 5% at the ask.
- Estimated fair value: 18%-30%.
- Estimated edge: about +13 to +25 points before penalties.
- Confidence: low-to-medium-low.
- Classification: represented strong hedge; no duplicate add.
- Key reasoning: NWS Dallas/Love Field still shows showers/thunderstorms and a high near 85F, while the market remains centered warmer around 86-89F.
- Liquidity/practicality notes: PT-20260614-151 already holds this exact bucket from 5c. Do not duplicate because the current price is not materially better and the book already has Dallas exposure.

### 3. Polymarket Atlanta/KATL Jun 14 90-91F YES

- Current price: 90-91F displayed around 13%; Buy Yes 14c. 88-89F leads at 59% / Buy Yes 60c, 86-87F is 8% / Buy Yes 9.6c, and 92-93F is near 0% / Buy Yes 1.2c. Total market volume about $17.7K.
- Implied probability: about 14%.
- Estimated fair value: 22%-34%.
- Estimated edge: about +8 to +20 points before storm and exact-bucket penalties.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate add.
- Key reasoning: NWS KATL shows light rain and 74F in the morning but still forecasts high near 91F with storms mainly after 2pm. The market continues to heavily favor 88-89F.
- Liquidity/practicality notes: PT-20260614-150 already holds 90-91F from a cheaper 12c context. No duplicate at a worse current quote.

### 4. Polymarket Chicago/KORD Jun 14 72-73F YES

- Current price: 72-73F displayed around 26%; Buy Yes 27c. Nearby buckets: 70-71F 35% / Buy Yes 36c, 68-69F 29% / Buy Yes 30c, 66-67F 7% / Buy Yes 8c, 74-75F near 0% / Buy Yes 1.3c. Total market volume about $7.3K.
- Implied probability: about 27%.
- Estimated fair value: 32%-42%.
- Estimated edge: about +5 to +15 points before boundary penalties.
- Confidence: low.
- Classification: represented moderate edge; no duplicate add.
- Key reasoning: NWS/O'Hare context remains cool, wet, and cloud-sensitive, with the live cluster now spanning 68-73F. The 72-73F bucket is still under market center in my fair estimate, but less clean than earlier in the day.
- Liquidity/practicality notes: PT-20260614-149 already holds 72-73F from 35c, and PT-20260613-141 holds 70-71F. Do not add while the exact boundary is split across three adjacent buckets.

### 5. Forward-Day Watch-Only Markets

- Dallas/KDAL Jun 15 82-83F YES: Buy Yes about 28c versus fair 30%-42%; low volume around $1.3K and NWS high near 82F make this watch-only.
- Atlanta/KATL Jun 15 84-85F YES: Buy Yes about 39c versus fair 40%-52%; roughly fair, no paper entry.
- Chicago/KORD Jun 15 76-77F YES: Buy Yes about 39c versus fair 40%-52%; modest positive but not enough to add.

### 6. Other Maintained / Near-Fair Markets

- Houston/KHOU Jun 14 warm cluster: represented by PT-20260613-140/PT-20260613-143; no duplicate because the market still prices the 90-91F bucket as the leader and storm timing remains decisive.
- NYC/KLGA Jun 14 88-89F YES: represented by PT-20260613-130; current pricing is much higher than the 18c entry and close enough to fair.
- LA/KLAX Jun 14 70-71F YES: represented by PT-20260613-138; repriced near fair.
- Miami/KMIA Jun 14 92-93F YES: represented by PT-20260614-145; no add above the 24c paper entry.
- Austin/KAUS Jun 14 92-93F YES: PT-20260614-146 remains weakened/near fair after the same-day forecast shifted lower.
- Hong Kong/HKO Jun 14 29C YES: converged around 99% / Buy Yes 99.8c; maintain PT-20260614-147 only.

## Recommended Paper Trades

Opened one new paper-only position:

- PT-20260614-152: BUY_YES on Polymarket Austin/KAUS Jun 15 highest temperature 86-87F at Buy Yes 6c.
- Simulated size: $5 notional.
- Thesis: the NWS forecast centers near 86F for Monday while the market centers on lower 82-85F buckets.
- Confidence: low-to-medium-low.
- Invalidation risks: overnight forecast shifts cooler; storms/clouds cap KAUS at 82-85F; late sun overshoots into 88-89F; Wunderground final station history differs from NWS point guidance; public quote is stale.

Maintenance actions:

- Maintain PT-20260614-151 Dallas/KDAL Jun 14 84-85F YES; no duplicate.
- Maintain PT-20260614-150 Atlanta/KATL Jun 14 90-91F YES; no duplicate at a worse quote.
- Maintain PT-20260614-149/PT-20260613-141 Chicago Jun 14 72-73F/70-71F cluster.
- Maintain PT-20260613-140/PT-20260613-143 Houston warm-tail entries.
- Maintain PT-20260613-130 NYC, PT-20260613-138 LA, PT-20260614-145 Miami, PT-20260614-146 Austin same-day, and PT-20260614-147 HKO.
- Keep existing Dallas warm-side entries PT-20260614-144/PT-20260614-148/PT-20260613-142 on adverse-watch for outcome tracking.

## Risks and Invalidation Factors

- Exact-bucket misses by one or two degrees dominate every listed weather market.
- Public Polymarket pages may lag executable order books or disagree by route.
- Polymarket airport temperature markets resolve using Wunderground station histories; NWS forecasts/current conditions are proxies.
- Dallas, Atlanta, Houston, Austin, and Miami are storm-timing markets as much as temperature markets.
- Forward-day Austin can reprice sharply on one forecast cycle.
- Chicago and LA depend on cloud/fog/rain clearing timing.
- HKO provisional readings can differ from final validated observations.

## Sources Used

- Polymarket Austin Jun 15: https://polymarket.com/event/highest-temperature-in-austin-on-june-15-2026
- NWS Austin/Bergstrom forecast/current conditions: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=30.1831&lg=english&lon=-97.6799
- Polymarket Dallas Jun 14: https://polymarket.com/event/highest-temperature-in-dallas-on-june-14-2026
- NWS Dallas/Love Field forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=32.7782&lon=-96.7951
- Polymarket Atlanta Jun 14: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-14-2026
- NWS KATL forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.6367&lon=-84.4281
- Polymarket Chicago Jun 14: https://polymarket.com/event/highest-temperature-in-chicago-on-june-14-2026
- NWS O'Hare forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Austin Jun 14: https://polymarket.com/event/highest-temperature-in-austin-on-june-14-2026
- Polymarket Hong Kong Jun 14: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-14-2026

## Repo Log Update

- Updated latest odds snapshot.
- Created the 2026-06-14T1316Z history entry, alert, JSON market snapshot, paper-trading entry, ledger append, and maintenance note.
- Updated rolling paper-trade log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- Opened one new paper-only position: PT-20260614-152 Austin/KAUS Jun 15 86-87F YES at Buy Yes 6c, $5 simulated notional.
- No real bets or trades were executed.