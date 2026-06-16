# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-16 04:13:32
- HKT: 2026-06-16 12:13:32
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Austin/KAUS Jun 16, Atlanta/KATL Jun 16, Dallas/KDAL Jun 16, Houston/KHOU Jun 16, Chicago/KORD Jun 16, and Hong Kong/HKO Jun 16 highest-temperature buckets.
- Forward checks: Austin Jun 17, Atlanta Jun 17, Houston Jun 17, and Hong Kong/HKO Jun 17 highest-temperature buckets.
- Official cross-checks: NWS point forecasts for KAUS, KATL, KDAL, KHOU, and KORD; HKO current weather bulletin and 9-day forecast.
- Settlement/source note: U.S. Polymarket weather markets resolve using Wunderground station history, not the NWS forecast page. Public Polymarket pages can be rounded, stale, or inconsistent, so sizing remains tiny and paper-only.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 16 27C YES

- Current price: 27C displayed near 70%; Buy Yes 74c. Nearby buckets: 28C about 24%-26c, 29C low single digits.
- Implied probability: about 74%.
- Estimated fair value: 78%-88%.
- Estimated edge: +4 to +14 percentage points.
- Confidence: medium-low.
- Classification: moderate edge; fresh paper-only hedge.
- Key reasoning: HKO's noon bulletin showed the Observatory at 27C, 90% relative humidity, heavy rain, 36.9 mm of rain since midnight, and a thunderstorm warning. The local forecast still calls for mainly cloudy weather with heavy showers and squally thunderstorms this afternoon and tonight. That makes a 27C finish more plausible than the prior 28C hedge, though any 28.0C+ print invalidates the 27C bucket.
- Liquidity/practicality notes: HKO market volume is much deeper than the U.S. station markets, but the page spread is still meaningful and the market already moved sharply toward 27C. Open only a tiny paper hedge.

### 2. Polymarket Austin/KAUS Jun 16 84-85F YES

- Current price: last clean target quote Buy Yes 18c; broader page still centers warmer buckets around 86-89F.
- Implied probability: about 18%.
- Estimated fair value: 28%-38%.
- Estimated edge: +10 to +20 percentage points before exact-bucket and quote-quality risk.
- Confidence: low-to-medium-low.
- Classification: represented moderate raw edge; no new add.
- Key reasoning: NWS Austin-Bergstrom continues to show Tuesday high near 85F with showers and thunderstorms likely, mainly before 1pm, and 70% precipitation probability. No duplicate add because the paper book already has 18c and 15c entries.

### 3. Polymarket Hong Kong/HKO Jun 17 29C YES

- Current price: Buy Yes 26c. Nearby buckets: 28C 35c, 30C 21c, 27C 14c.
- Implied probability: about 26%.
- Estimated fair value: 30%-42%.
- Estimated edge: +4 to +16 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: HKO's 9-day forecast for Jun 17 is 25-29C with cloudy weather, showers, squally thunderstorms at first, and sunny intervals during the day. The official maximum supports 29C as a live upper bucket, but 28C remains a strong co-center and exact one-decimal settlement risk is high.

### 4. Polymarket Dallas/KDAL Jun 16 90-91F YES

- Current price: last clean quote Buy Yes 40c.
- Implied probability: about 40%.
- Estimated fair value: 43%-53%.
- Estimated edge: +3 to +13 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Dallas/Love Field shows Tuesday high near 91F with mostly sunny conditions and heat index values as high as 98F. The 90-91F bucket is reasonable, but 88-89F remains co-favored and 92F is a live warm miss.

### 5. Polymarket Atlanta/KATL Jun 16 76-77F YES

- Current price: Buy Yes 24c. Nearby buckets: 74-75F 35c, 72-73F 23c, 78-79F 12c.
- Implied probability: about 24%.
- Estimated fair value: 26%-36%.
- Estimated edge: +2 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate add.
- Key reasoning: NWS KATL still supports a high near 76F with showers and thunderstorms likely, but the market and Wunderground-facing context lean cooler toward 72-75F. The current quote is worse than the 22c add-on, so maintain rather than add.

## Recommended Paper Trades

### PT-20260616-178

- Stance: simulated BUY_YES on Polymarket Hong Kong/HKO Jun 16 27C.
- Simulated size: $5 paper notional.
- Entry price: Buy Yes 74c.
- Thesis: HKO's noon bulletin showed 27C at the Observatory under heavy rain, 36.9 mm rain since midnight, low UV, and active thunderstorm/heavy-shower guidance. The live evidence now favors 27C more than the earlier 28C hedge.
- Confidence: medium-low.
- Invalidation risks: any 28.0C+ print, clearing or warming later in the day, one-decimal boundary risk, and stale/rounded public quote display.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- U.S. markets resolve to Wunderground station history; NWS forecasts are evidence, not the settlement source.
- HKO 27C loses on any 28.0C+ official high, and the market has already repriced sharply toward 27C.
- Austin can miss below 84F if rain is heavier/longer, or above 85F if afternoon clearing arrives.
- Atlanta can land cooler at 72-75F if the wetter/cooler path verifies, or warmer at 78F+ with clearing.
- Dallas can miss one bucket lower or higher even under a correct high-near-91F forecast.
- Public Polymarket pages may be rounded, stale, localized, or inconsistent across event/category views.

## Sources Used

- Polymarket HKO Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- Polymarket HKO Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- Polymarket Austin Jun 16: https://polymarket.com/event/highest-temperature-in-austin-on-june-16-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- NWS KAUS forecast: https://forecast.weather.gov/zipcity.php?inputstring=KAUS
- NWS KATL forecast: https://forecast.weather.gov/MapClick.php?lat=33.7483&lon=-84.3911
- NWS KDAL forecast: https://forecast.weather.gov/MapClick.php?lat=32.7782&lon=-96.7951
- NWS KHOU forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KORD forecast: https://forecast.weather.gov/MapClick.php?lat=41.9796&lon=-87.9045
- HKO current weather bulletin: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update

- Updated odds/latest.md.
- Added timestamped history, alert, structured snapshot, paper-trade entry, ledger append, and maintenance files for 2026-06-16T0413Z.
- New paper-only position: PT-20260616-178 HKO Jun 16 27C YES at Buy Yes 74c, $5 simulated notional.
