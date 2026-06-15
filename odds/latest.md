# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 22:13:42
- HKT: 2026-06-16 06:13:42
- Scheduled invocation: 2026-06-16 06:07:02 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Austin/KAUS Jun 16, Atlanta/KATL Jun 16, Hong Kong/HKO Jun 16, Chicago/KORD Jun 16, Houston/KHOU Jun 16, and Dallas/KDAL Jun 16 highest-temperature buckets.
- Broader Polymarket high-temperature page for cross-checks on newly active weather markets.
- Maintenance checks on open Jun 16 Austin, Atlanta, and HKO paper positions.
- Official cross-checks: NWS point forecasts/current conditions for KAUS, KATL, KORD, KHOU, and Dallas-area guidance; HKO 9-day forecast and current weather bulletin.
- Quote-quality note: direct container API access to Polymarket/NWS was blocked by network policy, so this run relies on web-indexed Polymarket event pages plus official forecast pages/search snippets. Public pages can be rounded, stale, or inconsistent across event/category surfaces, so sizing thresholds stay conservative.

## Top Edges

### 1. Polymarket Austin/KAUS Jun 16 84-85F YES

- Current price: 84-85F displayed 16%; Buy Yes 18c. Nearby buckets: 86-87F 32%, 88-89F 30%, 82-83F 6% / Buy Yes 7c.
- Implied probability: about 18% using the buy quote.
- Estimated fair value: 30%-42%.
- Estimated edge: roughly +12 to +24 percentage points before exact-bucket and quote-quality haircuts.
- Confidence: low-to-medium-low.
- Classification: strongest raw represented edge; no new add.
- Key reasoning: NWS Austin-Bergstrom keeps Tuesday centered near 85F with showers likely before early afternoon, while Polymarket still concentrates probability in 86-89F and leaves 84-85F at the same 18c quote as the open PT-20260615-173 entry.
- Liquidity/practicality notes: target bucket public volume is about $649; no duplicate at the same entry price.

### 2. Polymarket Atlanta/KATL Jun 16 76-77F YES

- Current price: 76-77F displayed 30%; Buy Yes 30c. Nearby buckets: 74-75F 36% / Buy Yes 37c, 78-79F 14% / Buy Yes 14c, 80-81F 4% / Buy Yes 3.9c.
- Implied probability: about 30%.
- Estimated fair value: 38%-50%.
- Estimated edge: roughly +8 to +20 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate hedge edge; no new add.
- Key reasoning: NWS KATL/Pleasant Valley point guidance shows Tuesday high near 76F with an 80% shower/thunderstorm setup. That keeps 76-77F better centered than the market leader 74-75F, but PT-20260615-174 already holds a small 76-77F hedge from 32c.
- Liquidity/practicality notes: total market volume is about $13.9K and target bucket public volume is about $802. Current price is only 2c below the hedge entry, below the duplicate-add threshold.

### 3. Polymarket Houston/KHOU Jun 16 82-83F YES

- Current price: 82-83F displayed 36%; Buy Yes 36c. Nearby buckets: 80-81F 33% / Buy Yes 34c, 84-85F 16% / Buy Yes 17c, 78-79F 10% / Buy Yes 11c.
- Implied probability: about 36%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +6 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate watch-only.
- Key reasoning: NWS Hobby forecasts Tuesday high near 82F with showers/thunderstorms and 1-2 inches of rain possible, making 82-83F the cleaner center than 80-81F. Heavy rainfall still leaves 80-81F live enough to block a fresh paper entry at 36c.
- Liquidity/practicality notes: target bucket public volume is about $786; no entry this run.

### 4. Polymarket Dallas/KDAL Jun 16 90-91F YES

- Current price: 90-91F displayed 38%; Buy Yes 39c. Nearby buckets: 88-89F 38% / Buy Yes 38c, 92-93F 13% / Buy Yes 13c, 86-87F 10% / Buy Yes 11c.
- Implied probability: about 39%.
- Estimated fair value: 44%-54%.
- Estimated edge: roughly +5 to +15 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: Dallas-area NWS guidance shows Tuesday high near 91F and mostly sunny conditions, which supports 90-91F over the near-tied 88-89F bucket. The quote is a touch worse than last run and target liquidity is thin, so this remains watch-only.
- Liquidity/practicality notes: target bucket public volume is about $710; no paper entry.

### 5. Polymarket HKO Jun 16 29C YES

- Current price: 29C displayed 28%; Buy Yes 29c. Nearby buckets: 27C 32% / Buy Yes 33c, 28C 25% / Buy Yes 26c, 30C 16% / Buy Yes 17c.
- Implied probability: about 29%.
- Estimated fair value: 24%-36%.
- Estimated edge: roughly -5 to +7 percentage points.
- Confidence: low.
- Classification: weakened represented/no fresh edge.
- Key reasoning: HKO's 00:00 HKT 9-day forecast still caps Jun 16 at 29C under heavy showers and squally thunderstorms, but the 05:31 HKT current bulletin showed 25C and active rain/thunderstorm conditions. That broadens the 27C/28C miss paths enough that 29C is not addable despite the official cap.
- Liquidity/practicality notes: HKO market volume is about $67.9K. Maintain PT-20260615-169/PT-20260615-170 as weakened/open.

### 6. Polymarket Chicago/KORD Jun 16 74-75F YES

- Current price: 74-75F displayed 48%; Buy Yes 48c. Nearby buckets: 72-73F 33% / Buy Yes 34c, 76-77F 11% / Buy Yes 12c, 70-71F 7% / Buy Yes 8c.
- Implied probability: about 48%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly -6 to +4 percentage points.
- Confidence: low-to-medium-low.
- Classification: no edge / close to fair.
- Key reasoning: O'Hare NWS guidance now shows Tuesday high near 74F with a 40% shower/thunderstorm chance. The market has repriced 74-75F to the clear leader, leaving no fresh edge.
- Liquidity/practicality notes: target bucket public volume is about $1.1K; no paper entry.

## Downgraded / No-Edge Markets

- Atlanta/KATL Jun 16 80-81F YES: PT-20260615-168/PT-20260615-171/PT-20260615-172 remain adverse-watch. Current 3.9c is no longer a true edge while official guidance is near 76F.
- HKO Jun 16 27C/28C hedges: interesting, but current 27C 33c and 28C 26c are not clear discounts once one-decimal settlement and early-day rain timing are considered.
- Broader high-temperature page: Miami, Denver, NYC, Los Angeles, San Francisco, Toronto, and other visible Jun 16 markets did not obviously beat the core watchlist signals after quick forecast-context screening.

## Recommended Paper Trades

No new paper trade this run.

Maintenance actions:

- Maintain PT-20260615-173 Austin/KAUS Jun 16 84-85F YES at 18c; strongest raw represented edge, but no duplicate at the same price.
- Maintain PT-20260615-174 Atlanta/KATL Jun 16 76-77F YES at 32c as a small hedge; current 30c is not enough of an improvement for an add-on.
- Maintain PT-20260615-169 and PT-20260615-170 HKO Jun 16 29C YES as weakened/open.
- Maintain PT-20260615-168/PT-20260615-171/PT-20260615-172 Atlanta 80-81F as adverse-watch.
- Keep Houston 82-83F and Dallas 90-91F on watch; both need either a cheaper quote or cleaner station/forecast confirmation before a paper entry.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- Public Polymarket pages may be stale, rounded, localized, or inconsistent across event and category views.
- U.S. station markets resolve against Wunderground histories, not directly against NWS point forecasts.
- HKO markets resolve to one-decimal Celsius daily maxima, so 27.xC, 28.xC, 29.xC, and 30.0C are materially different outcomes.
- Rain/thunderstorm timing is the main swing factor for Austin, Atlanta, Houston, Chicago, and Hong Kong.
- Duplicate exposure discipline blocks adding more Austin at 18c and blocks another Atlanta hedge on only a 2c price improvement.

## Sources Used

- Polymarket Austin Jun 16: https://polymarket.com/event/highest-temperature-in-austin-on-june-16-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket HKO Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- Polymarket high-temperature category: https://polymarket.com/weather/high-temperature
- NWS KAUS forecast/current conditions: https://forecast.weather.gov/zipcity.php?inputstring=KAUS
- NWS KATL/Pleasant Valley forecast/current conditions: https://forecast.weather.gov/MapClick.php?CityName=Pleasant+Valley&site=FFC&state=GA&textField1=33.6183&textField2=-84.4469
- NWS KORD forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS KHOU forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Dallas-area forecast: https://forecast.weather.gov/MapClick.php?textField1=32.7942&textField2=-96.7652
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather bulletin: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T2213Z.md`.
- Created `alerts/2026-06-15T2213Z.md`.
- Created `data/market_snapshots/2026-06-15T2213Z.json`.
- Created `paper_trading/maintenance/2026-06-15T2213Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in durable memory.
- GitHub connector mirror target: `rickyparkcinta/weather`.
- No real trades or betting actions were executed.
