# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 21:18:12
- HKT: 2026-06-16 05:18:12
- Scheduled invocation: 2026-06-16 05:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Austin/KAUS Jun 16, Atlanta/KATL Jun 16, Hong Kong/HKO Jun 16, Chicago/KORD Jun 16, Houston/KHOU Jun 16, and Dallas/KDAL Jun 16 highest-temperature buckets.
- Maintenance checks on open Jun 16 Austin, Atlanta, and HKO paper positions.
- Official cross-checks: NWS point forecasts/current conditions for KAUS, KATL, KORD, KHOU, and KDAL/Dallas-area guidance; HKO 9-day forecast and current weather bulletin.
- Quote-quality note: public Polymarket pages/search snippets can be rounded, stale, or inconsistent across localized event/category surfaces. This run uses direct event/category pages where available and keeps simulated sizing conservative.

## Top Edges

### 1. Polymarket Austin/KAUS Jun 16 84-85F YES

- Current price: 84-85F displayed 16%; Buy Yes 18c. Nearby buckets: 86-87F 43% / Buy Yes 44c, 88-89F 29% / Buy Yes 30c, 82-83F 5% / Buy Yes 6c.
- Implied probability: about 18% using the buy quote.
- Estimated fair value: 30%-42%.
- Estimated edge: roughly +12 to +24 percentage points before exact-bucket and quote-quality haircuts.
- Confidence: low-to-medium-low.
- Classification: strongest raw represented edge; no new add.
- Key reasoning: NWS Austin-Bergstrom keeps Tuesday centered around 85F with showers likely before early afternoon, while Polymarket still concentrates probability in 86-89F and leaves 84-85F at the same 18c quote as the open paper entry.
- Liquidity/practicality notes: target bucket public volume is about $520 and this is already represented by PT-20260615-173 at the same 18c entry.

### 2. Polymarket Atlanta/KATL Jun 16 76-77F YES

- Current price: 76-77F displayed 32%; Buy Yes 32c. Nearby buckets: 74-75F 37% / Buy Yes 37c, 78-79F 13% / Buy Yes 13c, 72-73F 11% / Buy Yes 11.1c.
- Implied probability: about 32%.
- Estimated fair value: 38%-50%.
- Estimated edge: roughly +6 to +18 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate edge and paper-only hedge.
- Key reasoning: NWS KATL now forecasts Tuesday high near 76F with showers and thunderstorms likely, making 76-77F the cleaner bucket than the older 80-81F paper thesis. The market still gives 74-75F slightly more weight, so 76-77F is underpriced if the official point forecast is right.
- Liquidity/practicality notes: total market volume is about $12.8K and the target bucket shows about $794. Opened one tiny hedge, PT-20260615-174, because existing Atlanta 80-81F entries are adverse-watch.

### 3. Polymarket Dallas/KDAL Jun 16 90-91F YES

- Current price: 90-91F displayed 37%; Buy Yes 38c. Nearby buckets: 88-89F 36% / Buy Yes 36c, 92-93F 14% / Buy Yes 15c, 86-87F 11% / Buy Yes 12c.
- Implied probability: about 38%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Dallas/Love Field guidance shows Tuesday high near 91F and mostly sunny conditions, which centers 90-91F better than the near-tied 88-89F bucket. The edge is not large enough for fresh paper after spread, exact-bucket, and one-degree miss risk.
- Liquidity/practicality notes: target bucket public volume is about $610; no paper entry this run.

### 4. Polymarket Houston/KHOU Jun 16 82-83F YES

- Current price: 82-83F displayed 34%; Buy Yes 34c. Nearby buckets: 80-81F 36% / Buy Yes 36c, 84-85F 18% / Buy Yes 18c, 78-79F 11% / Buy Yes 12c.
- Implied probability: about 34%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: watch-only moderate/near-fair.
- Key reasoning: NWS Hobby forecasts Tuesday high near 82F with widespread showers/thunderstorms and 1-2 inches of rain possible. That supports 82-83F, but heavy rain keeps 80-81F very live.
- Liquidity/practicality notes: target bucket public volume is about $737; no paper entry because 80-81F and 82-83F are both plausible.

### 5. Polymarket Chicago/KORD Jun 16 74-75F YES

- Current price: 74-75F displayed 39%; Buy Yes 39c. Nearby buckets: 72-73F 33% / Buy Yes 34c, 76-77F 16% / Buy Yes 18c, 70-71F 7% / Buy Yes 7c.
- Implied probability: about 39%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly -1 to +9 percentage points.
- Confidence: low-to-medium-low.
- Classification: watch-only, close to fair.
- Key reasoning: O'Hare-area NWS guidance favors the 72-75F range, and 74-75F is plausible, but the market already prices it as the leader.
- Liquidity/practicality notes: target bucket volume is under $400; no paper entry.

## Downgraded / No-Edge Markets

- Atlanta/KATL Jun 16 80-81F YES: existing PT-20260615-168, PT-20260615-171, and PT-20260615-172 remain adverse-watch. The official forecast has moved toward 76F, so the old 80-81F thesis is no longer the preferred bucket.
- Hong Kong/HKO Jun 16 29C YES: current 29C price fell to 26% / Buy Yes 26c, but the market now leads with 27C at 33% / Buy Yes 34c after HKO's 00:00 HKT forecast gave a 25-29C range and the 05:02 HKT bulletin showed 25C under light rain/thunderstorm warnings. Maintain PT-20260615-169/PT-20260615-170 as weakened/open; no 27C hedge because the price is not clearly discounted after one-decimal and rain-timing risk.

## Recommended Paper Trades

Opened one new paper-only trade:

- Trade ID: PT-20260615-174
- Stance: BUY_YES on Polymarket Atlanta/KATL Jun 16 highest temperature 76-77F.
- Simulated size: $5 notional.
- Entry price: Buy Yes 32c.
- Estimated fair value: 38%-50%.
- Thesis: NWS KATL has cooled Tuesday's high to near 76F, so 76-77F is the better current bucket and a small hedge against the older adverse 80-81F entries.
- Confidence: low-to-medium-low.
- Invalidation risks: heavier clouds/rain cap KATL at 74-75F or lower; afternoon clearing pushes 78F+; Wunderground station history differs from NWS point guidance; public Polymarket quote is stale or shallow.

Maintenance actions:

- Maintain PT-20260615-173 Austin/KAUS Jun 16 84-85F YES at 18c; no duplicate at the same price.
- Maintain PT-20260615-169 and PT-20260615-170 HKO Jun 16 29C YES as weakened/open, not addable.
- Maintain PT-20260615-168/PT-20260615-171/PT-20260615-172 Atlanta 80-81F as adverse-watch, now partially hedged by PT-20260615-174.
- Keep Dallas 90-91F, Houston 82-83F, and Chicago 74-75F watch-only.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- Public Polymarket pages may be stale, rounded, localized, or inconsistent across event and category views.
- U.S. station markets resolve against Wunderground histories, not directly against NWS point forecasts.
- HKO markets resolve to one-decimal Celsius daily maxima, so 27.xC, 28.xC, 29.xC, and 30.0C are materially different outcomes.
- Rain/thunderstorm timing is the main swing factor for Austin, Atlanta, Houston, Chicago, and Hong Kong.
- Duplicate exposure discipline blocks adding more Austin at 18c and blocks further Atlanta 80-81F exposure after the forecast shifted away.

## Sources Used

- Polymarket Austin Jun 16: https://polymarket.com/event/highest-temperature-in-austin-on-june-16-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket HKO Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- Polymarket high-temperature category: https://polymarket.com/weather/high-temperature
- NWS KAUS forecast/current conditions: https://forecast.weather.gov/zipcity.php?inputstring=KAUS
- NWS KATL forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS KORD forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS KHOU forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KDAL/Dallas forecast: https://forecast.weather.gov/MapClick.php?lat=32.7782&lon=-96.7951
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather bulletin: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T2118Z.md`.
- Created `alerts/2026-06-15T2118Z.md`.
- Created `data/market_snapshots/2026-06-15T2118Z.json`.
- Created `paper_trading/entries/PT-20260615-174.md`.
- Created `paper_trading/ledger_appends/2026-06-15T2118Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T2118Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in durable memory.
- GitHub connector mirror target: `rickyparkcinta/weather`.
- No real trades or betting actions were executed.
