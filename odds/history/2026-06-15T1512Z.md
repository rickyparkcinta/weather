# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 15:12:31
- HKT: 2026-06-15 23:12:31
- Scheduled invocation: 2026-06-15 23:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Hong Kong/HKO Jun 16, Houston/KHOU Jun 16, Chicago/KORD Jun 16, and maintenance checks on Atlanta/KATL, Dallas/KDAL, Austin/KAUS, Houston/KHOU, Chicago/KORD, and Hong Kong/HKO Jun 15/16 high-temperature buckets.
- Official cross-checks: HKO 9-day forecast and regional readings; NWS point forecasts/current conditions for KATL, KHOU, KORD, KDAL, and KAUS.
- Quote-quality note: Polymarket public pages can disagree across surfaces. This run uses the specific event page where available and treats stale/unrefreshed quotes as lower confidence.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 16 29C YES

- Current price: specific event page shows 29C at 29% displayed / Buy Yes 30c; 28C leads at 31% / Buy Yes 31c, 27C is 19% / Buy Yes 20c, and 30C is 11% / Buy Yes 12c. The broader temperature page showed 29C at 36%, so quote-surface conflict remains.
- Implied probability: about 30% on the specific event-page buy quote.
- Estimated fair value: 40%-52%.
- Estimated edge: roughly +10 to +22 points before settlement and quote-quality haircuts.
- Confidence: medium-low.
- Classification: strongest addable paper-only edge.
- Key reasoning: HKO's 19:50 HKT 9-day forecast keeps Tuesday at 25-29C with cloudy weather, heavy showers, and squally thunderstorms. The same weather regime has capped the Observatory at 29.9C today through 22:40 HKT, which supports the tomorrow cap thesis but does not remove the 28.xC downside.
- Liquidity/practicality notes: event volume is about $26.1K; target-bucket volume is about $2.8K. This is an add-on to PT-20260615-169 only because the current event-page quote is 5c cheaper than the 35c entry. Size remains tiny.

### 2. Polymarket Atlanta/KATL Jun 16 80-81F YES

- Current price: last clean quote from the prior scan was Buy Yes 17c; current quote was not refreshed cleanly this run.
- Implied probability: about 17% on the last clean buy quote.
- Estimated fair value: 24%-36%.
- Estimated edge: stale but still plausible, about +7 to +19 points versus last clean quote.
- Confidence: low-to-medium-low because quote freshness is weaker.
- Classification: represented moderate edge, no duplicate.
- Key reasoning: NWS KATL still forecasts Tuesday high near 80F with mostly cloudy conditions and a 50% shower/thunderstorm chance. The thesis is already represented by PT-20260615-168 from 5c, so there is no reason to chase a worse/unverified quote.
- Liquidity/practicality notes: maintain only.

### 3. Polymarket Chicago/KORD Jun 16 74-75F YES

- Current price: 74-75F 33% displayed / Buy Yes 33c; 72-73F 32% / Buy Yes 33c; 76-77F 16% / Buy Yes 17c.
- Implied probability: about 33%.
- Estimated fair value: 36%-48%.
- Estimated edge: roughly +3 to +15 points.
- Confidence: low-to-medium-low.
- Classification: watch-only moderate edge.
- Key reasoning: NWS O'Hare forecasts Tuesday high near 75F with showers/thunderstorms likely and an 80% precipitation chance. The 74-75F bucket is official-forecast-centered, but 72-73F remains nearly co-live if storm timing/clouds suppress heating.
- Liquidity/practicality notes: target bucket volume is only about $321, and 72-73F is nearly equal. No paper add.

### 4. Polymarket Houston/KHOU Jun 16 82-83F YES

- Current price: 82-83F 37% displayed / Buy Yes 38c; 80-81F leads at 38% / Buy Yes 39c; 84-85F is 13% / Buy Yes 13c.
- Implied probability: about 37%-38%.
- Estimated fair value: 36%-48%.
- Estimated edge: near fair to modest positive.
- Confidence: medium-low.
- Classification: watch-only / near fair.
- Key reasoning: NWS Houston Hobby forecasts Tuesday high near 82F with showers and thunderstorms, 90% precipitation chance, and possible rainfall of 2-3 inches. That supports 82-83F, but the same evidence keeps 80-81F live.
- Liquidity/practicality notes: no paper entry; market is already concentrated in the correct 80-83F cluster.

### 5. Polymarket Dallas/KDAL Jun 16 90-91F YES

- Current price: last clean quote from the prior scan was Buy Yes 39c; current quote was not refreshed cleanly this run.
- Implied probability: about 39% on the last clean buy quote.
- Estimated fair value: 40%-52%.
- Estimated edge: stale, small to moderate.
- Confidence: low-to-medium-low.
- Classification: watch-only / near fair.
- Key reasoning: NWS Dallas Love Field forecasts Tuesday high near 91F and mostly sunny conditions. The market had already priced the 88-91F cluster as the core outcome, so the remaining edge is not strong enough without a fresh cheaper quote.
- Liquidity/practicality notes: no paper entry.

## Recommended Paper Trades

Open one tiny paper-only add-on:

- Trade ID: PT-20260615-170
- Stance: BUY_YES on Polymarket Hong Kong/HKO Jun 16 highest temperature 29C.
- Simulated size: $5 notional.
- Entry price: Buy Yes 30c.
- Thesis: The specific Polymarket event page repriced 29C down to a 30c buy quote while HKO's official 19:50 HKT forecast still caps Tuesday at 29C under heavy showers and squally thunderstorms. This is a small add-on to the existing 35c entry, not a broad build.
- Confidence: medium-low.
- Invalidation risks: HKO final daily max stays 28.xC due heavier rain; a dry/heating window reaches 30.0C or higher; HKO updates Tuesday's max away from 29C; public quote surfaces remain inconsistent.

Maintenance actions:

- Maintain PT-20260615-169 HKO Jun 16 29C YES from 35c alongside the new add-on.
- Maintain PT-20260615-168 Atlanta/KATL Jun 16 80-81F from 5c; no duplicate at an unverified/worse quote.
- Maintain same-day Austin/KAUS 80-81F, Houston/KHOU 86-87F and greater-than-85F, Chicago/KORD 76-77F, Dallas/KDAL 82-83F/84-85F cluster, Atlanta/KATL 84-85F, and HKO Jun 15 29C YES / 30C NO.

## Risks and Invalidation Factors

- Public Polymarket pages can be stale, rounded, or internally inconsistent; HKO's event page and broad temperature page disagreed this run.
- Exact-bucket weather markets can lose even when the broad forecast is directionally right.
- HKO markets resolve by one-decimal Celsius daily maximum; 28.9C, 29.9C, and 30.0C are materially different outcomes.
- U.S. station markets resolve against Wunderground histories, which can differ from NWS point forecasts and provisional observations.
- Heavy-rain/storm timing can move Austin, Houston, Dallas, and Chicago one or more buckets.

## Sources Used

- Polymarket Hong Kong Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- Polymarket temperature overview: https://polymarket.com/weather/temperature
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO regional readings: https://www.weather.gov.hk/textonly/v2/forecast/text_readings_v2_e.htm
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- NWS KATL forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS KHOU forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=29.6375&lon=-95.2825
- NWS KORD forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS KDAL forecast/current conditions: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=32.8929&lg=english&lon=-96.8641
- NWS KAUS forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=30.18304&lon=-97.67987
- NWS KAUS observation history: https://www.weather.gov/data/obhistory/KAUS.html

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T1512Z.md`.
- Created `alerts/2026-06-15T1512Z.md`.
- Created `data/market_snapshots/2026-06-15T1512Z.json`.
- Created `paper_trading/entries/PT-20260615-170.md`.
- Created `paper_trading/ledger_appends/2026-06-15T1512Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T1512Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- GitHub connector mirror target: `rickyparkcinta/weather`.
- No real trades or betting actions were executed.