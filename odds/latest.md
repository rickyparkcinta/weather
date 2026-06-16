# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-16 05:07:54
- HKT: 2026-06-16 13:07:54
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Hong Kong/HKO Jun 16 and Jun 17, Austin/KAUS Jun 16 and Jun 17, Atlanta/KATL Jun 16, Dallas/KDAL Jun 16, Houston/KHOU Jun 16, and Chicago/KORD Jun 16 highest-temperature buckets.
- Official cross-checks: HKO current weather, HKO thunderstorm warning, HKO 9-day forecast, and NWS point forecasts/current conditions for KAUS, KATL, KDAL, KHOU, and KORD.
- Settlement/source note: U.S. Polymarket weather markets resolve using Wunderground station history, not the NWS forecast page. Public Polymarket pages can be rounded, stale, localized, or inconsistent, so sizing remains tiny and paper-only.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 17 29C YES

- Current price: 29C displayed near 22%; 28C leads near 36%.
- Implied probability: about 22%.
- Estimated fair value: 30%-40%.
- Estimated edge: roughly +8 to +18 percentage points.
- Confidence: medium-low.
- Classification: moderate edge; fresh paper-only entry.
- Key reasoning: HKO's 11:30 HKT 9-day forecast keeps Jun 17 at 25-29C, with cloudy weather, occasional showers, squally thunderstorms, and showers heavy at times. The market moved 29C down from the prior 26c watch level to about 22% while the official maximum forecast still supports 29C as a live upper bucket.
- Liquidity/practicality notes: Polymarket shows about $16K volume on the HKO Jun 17 market. The edge is not large enough for anything beyond a tiny paper entry because 28C remains the market leader and exact one-decimal HKO settlement risk is severe.

### 2. Polymarket Chicago/KORD Jun 16 72-73F YES

- Current price: 72-73F displayed near 30%; 74-75F leads near 52%.
- Implied probability: about 30%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate edge; fresh paper-only entry.
- Key reasoning: NWS O'Hare current conditions showed 69F late Monday evening, and the Tuesday forecast is high near 73F with a 40% chance of showers/thunderstorms and breezy conditions. That centers the 72-73F bucket better than the market's 74-75F lead.
- Liquidity/practicality notes: Use tiny size only. This is a Wunderground-settled station bucket, public Polymarket prices are rounded, and one degree of extra afternoon warming could still land 74-75F.

### 3. Polymarket Austin/KAUS Jun 16 84-85F YES

- Current price: cross-locale public Polymarket pages show 84-85F around 17%-18%, with 86-87F and 88-89F leading.
- Implied probability: about 17%-18%.
- Estimated fair value: 25%-35%.
- Estimated edge: roughly +7 to +18 percentage points before duplicate and quote-quality haircuts.
- Confidence: low-to-medium-low.
- Classification: represented moderate raw edge; no new add.
- Key reasoning: NWS KAUS still shows Tuesday high near 85F with showers likely before 1 p.m. and a 70% precipitation chance. The market has moved warmer, leaving the NWS-centered bucket underpriced on raw forecast evidence.
- Liquidity/practicality notes: Already represented by PT-20260615-173 at 18c and PT-20260615-175 at 15c. No duplicate because the current quote is not better than the 15c add-on and public price surfaces disagree.

### 4. Polymarket Houston/KHOU Jun 16 80-81F YES

- Current price: 80-81F displayed near 31%; 82-83F leads near 39%.
- Implied probability: about 31%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS KHOU now shows a Flood Watch, heavy rain, and Tuesday high near 81F. That makes 80-81F plausible, but the public page gives only rounded context and a storm-driven day can miss lower or still reach 82-83F.
- Liquidity/practicality notes: Watch only unless a cleaner quote below the high-20s appears or live station evidence after local midnight narrows the bucket.

### 5. Polymarket Dallas/KDAL Jun 16 90-91F YES

- Current price: 90-91F displayed near 40%; 88-89F also near 40%.
- Implied probability: about 40%.
- Estimated fair value: 43%-53%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS KDAL shows Tuesday high near 91F with clouds giving way to afternoon sun and heat index up to 97F. The 90-91F bucket is reasonable, but 88-89F is co-favored and a 92F warm miss remains live.
- Liquidity/practicality notes: No fresh paper entry at 40c. Reconsider only with a cleaner quote in the high-30s or tighter live station evidence.

### 6. Maintained / No Fresh Add

- HKO Jun 16 27C YES: current price about 93%; fair 94%-98%; edge now small. Maintain PT-20260616-178 only after HKO's 13:02 HKT bulletin showed 26C, heavy rain, widespread heavy-rain risk, and thunderstorm warning still active.
- Atlanta/KATL Jun 16 76-77F YES: current price about 25%; fair 28%-38%; represented by prior entries. NWS still supports high near 76F, but the market's cooler 74-75F lead and Wunderground-source risk block a duplicate.
- Houston/KHOU Jun 16 82-83F and Chicago/KORD Jun 16 74-75F: no new edge at current prices after the latest NWS checks.

## Recommended Paper Trades

### PT-20260616-179

- Stance: simulated BUY_YES on Polymarket Hong Kong/HKO Jun 17 29C.
- Simulated size: $5 paper notional.
- Entry price: displayed around 22c.
- Thesis: HKO's 11:30 HKT forecast still caps Jun 17 at 29C with heavy showers and squally thunderstorms, while the market lowered 29C to about 22% behind 28C.
- Confidence: medium-low.
- Invalidation risks: 28.xC rain cap, 30.0C+ clearing/warming, one-decimal boundary risk, forecast revision, and rounded/stale public price display.

### PT-20260616-180

- Stance: simulated BUY_YES on Polymarket Chicago/KORD Jun 16 72-73F.
- Simulated size: $5 paper notional.
- Entry price: displayed around 30c.
- Thesis: NWS O'Hare forecast moved/held near 73F with showers and breezy conditions, while the market still favors 74-75F at about 52%.
- Confidence: low-to-medium-low.
- Invalidation risks: afternoon clearing or warmer wind mix pushing 74F+, Wunderground/NWS source differences, rounded public price display, and exact-bucket risk.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- U.S. markets resolve to Wunderground station history; NWS forecasts are evidence, not the settlement source.
- HKO Jun 17 29C loses if the official high remains below 29.0C or reaches 30.0C+.
- Chicago 72-73F loses if KORD prints 74F+ or stays below 72F; one afternoon warming window is enough to invalidate it.
- Austin's represented 84-85F thesis can miss below 84F if rain persists or above 85F if the afternoon clears.
- Houston remains highly rain-path dependent because of flood-watch/heavy-rain setup.
- Public Polymarket pages may be rounded, stale, localized, or inconsistent across event/category views.

## Sources Used

- Polymarket HKO Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- Polymarket HKO Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- Polymarket Austin Jun 16: https://polymarket.com/event/highest-temperature-in-austin-on-june-16-2026
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- NWS KAUS forecast: https://forecast.weather.gov/zipcity.php?inputstring=KAUS
- NWS KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.7483&lon=-84.3911
- NWS KDAL forecast: https://forecast.weather.gov/MapClick.php?lat=32.858386&lon=-96.861368
- NWS KHOU forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KORD forecast: https://forecast.weather.gov/MapClick.php?lat=41.9796&lon=-87.9045
- HKO current weather bulletin: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO warning information: https://www.weather.gov.hk/textonly/v2/warning/detail.htm

## Repo Log Update

- Saved durable records locally: odds/latest.md, odds/history/2026-06-16T0507Z.md, alerts/2026-06-16T0507Z.md, data/market_snapshots/2026-06-16T0507Z.json, paper_trading/entries/PT-20260616-179.md, paper_trading/entries/PT-20260616-180.md, paper_trading/ledger_appends/2026-06-16T0507Z.csv, and paper_trading/maintenance/2026-06-16T0507Z.md.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in durable memory.
- New paper-only positions: PT-20260616-179 HKO Jun 17 29C YES at displayed 22c, $5 simulated notional; PT-20260616-180 Chicago/KORD Jun 16 72-73F YES at displayed 30c, $5 simulated notional.
- GitHub connector mirror target: rickyparkcinta/weather.
