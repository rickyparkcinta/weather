# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-15 19:11:01
- HKT: 2026-06-16 03:11:01
- Scheduled invocation: 2026-06-16 03:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Austin/KAUS Jun 16, Atlanta/KATL Jun 16, Hong Kong/HKO Jun 16 and Jun 17, Chicago/KORD Jun 16, Houston/KHOU Jun 16, and Dallas/KDAL Jun 16 highest-temperature buckets.
- Maintenance checks on open Jun 16 Atlanta/HKO paper positions and recent Jun 15 weather paper exposure.
- Official cross-checks: NWS point forecasts/current conditions for KATL, KAUS, KORD, KHOU, and KDAL; HKO 9-day forecast and regional readings.
- Quote-quality note: public Polymarket pages can be rounded, stale, or inconsistent across category/event surfaces. This run uses direct event pages when available, with official weather sources as the fair-value anchor.

## Top Edges

### 1. Polymarket Austin/KAUS Jun 16 84-85F YES

- Current price: 84-85F displayed 16%; Buy Yes 18c. Nearby buckets: 86-87F 43% / Buy Yes 44c, 88-89F 29% / Buy Yes 30c, 82-83F 5% / Buy Yes 6c.
- Implied probability: about 18%.
- Estimated fair value: 32%-44%.
- Estimated edge: roughly +14 to +26 percentage points before exact-bucket and quote-quality haircuts.
- Confidence: low-to-medium-low.
- Classification: strongest fresh paper-only edge; liquidity-capped.
- Key reasoning: NWS Austin-Bergstrom still forecasts Tuesday high near 85F with showers likely and possible thunderstorms before early afternoon, while the market has moved the NWS-centered 84-85F bucket down to an 18c buy quote and now favors 86-89F.
- Liquidity/practicality notes: total event volume is only about $1.8K and the target bucket is about $520, so this is a tiny paper entry only.

### 2. Polymarket Atlanta/KATL Jun 16 80-81F YES

- Current price: 80-81F displayed 3%; Buy Yes 3.9c. Nearby buckets: 74-75F 38% / Buy Yes 40c, 76-77F 35% / Buy Yes 36c, 78-79F 12% / Buy Yes 12c.
- Implied probability: about 3.9%.
- Estimated fair value: 18%-30%.
- Estimated edge: roughly +14 to +26 percentage points.
- Confidence: low-to-medium-low.
- Classification: strong raw edge, represented/no-add.
- Key reasoning: NWS KATL still forecasts Tuesday high near 80F with showers and possibly thunderstorms, but Polymarket prices 80-81F as a small tail behind the 74-77F cluster.
- Liquidity/practicality notes: target bucket volume is about $2.1K. Maintain PT-20260615-168, PT-20260615-171, and PT-20260615-172 only; no fourth same-bucket duplicate because the current price is worse than the latest 3.5c add-on.

### 3. Polymarket Hong Kong/HKO Jun 16 29C YES

- Current price: 29C displayed 37%; Buy Yes 38c. Nearby buckets: 28C 30% / Buy Yes 31c, 27C 17% / Buy Yes 17c, 30C 12% / Buy Yes 13c.
- Implied probability: about 38%.
- Estimated fair value: 44%-56%.
- Estimated edge: roughly +6 to +18 percentage points.
- Confidence: medium-low.
- Classification: represented moderate edge, no duplicate.
- Key reasoning: HKO's 00:00 HKT forecast caps Jun 16 at 29C with cloudy weather, occasional heavy showers, and squally thunderstorms. The 01:00 HKT regional table showed HK Observatory at 26.0C with a 26.1C max since midnight.
- Liquidity/practicality notes: event volume is about $50.5K and target 29C volume about $5.2K. Maintain PT-20260615-169 and PT-20260615-170 only; current price is above both entries.

### 4. Polymarket Chicago/KORD Jun 16 74-75F YES

- Current price: 74-75F displayed 35%; Buy Yes 35c. Nearby buckets: 72-73F 37% / Buy Yes 39c, 76-77F 16% / Buy Yes 16c, 70-71F 8% / Buy Yes 8c.
- Implied probability: about 35%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: low-to-medium-low.
- Classification: watch-only moderate edge.
- Key reasoning: NWS O'Hare forecasts Tuesday high near 74F with showers/thunderstorms possible and breezy southwest winds, which keeps 74-75F live, but the 72-73F bucket remains nearly co-favored.
- Liquidity/practicality notes: target bucket volume is only about $340 and adjacent-bucket risk is material.

### 5. Polymarket Dallas/KDAL Jun 16 90-91F YES

- Current price: 90-91F displayed 35%; Buy Yes 37c. Nearby buckets: 88-89F 36% / Buy Yes 37c, 92-93F 13% / Buy Yes 14c, 86-87F 11% / Buy Yes 11c.
- Implied probability: about 37%.
- Estimated fair value: 40%-50%.
- Estimated edge: roughly +3 to +13 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: NWS Dallas/Love Field guidance centers Tuesday near 91F with mostly sunny weather, but one-bucket miss risk remains high and the market is already co-led by 88-89F and 90-91F.
- Liquidity/practicality notes: target bucket volume is about $556; not enough edge to add after exact-bucket risk.

## Near-Fair / No-Add Markets

- Houston/KHOU Jun 16: Polymarket remains centered on 80-81F and 82-83F at 39c and 34c. NWS Hobby forecasts Tuesday high near 82F with showers/thunderstorms and heavy rainfall risk, so the market is broadly aligned; Weather Underground public context also leans rain-cooled.
- HKO Jun 17: 28C leads around 31% / Buy Yes 34c, with 29C at 24c and 30C at 14c. HKO forecasts a 26-30C range with showers and squally thunderstorms, leaving too many adjacent paths live for a fresh entry.

## Recommended Paper Trades

Opened one new paper-only position:

- Trade ID: PT-20260615-173
- Stance: BUY_YES Austin/KAUS Jun 16 84-85F
- Simulated size: $5 notional
- Entry price: Buy Yes 18c
- Thesis: the NWS station forecast still centers Tuesday near 85F while Polymarket has discounted 84-85F to 18c and shifted probability toward warmer 86-89F outcomes.
- Confidence: low-to-medium-low
- Invalidation risks: KAUS warms into 86-89F after rain clears; heavier rain caps below 84F; NWS forecast shifts warmer/cooler; Wunderground station history differs from the NWS point forecast; visible quote/depth is stale or shallow.

Maintenance actions:

- Maintain PT-20260615-168, PT-20260615-171, and PT-20260615-172 on Atlanta/KATL Jun 16 80-81F.
- Maintain PT-20260615-169 and PT-20260615-170 on HKO Jun 16 29C.
- Keep Chicago/KORD Jun 16 74-75F and Dallas/KDAL Jun 16 90-91F as watch-only.
- Keep Houston/KHOU Jun 16 near fair.

## Risks and Invalidation Factors

- Exact-bucket weather markets can lose even when the broad forecast direction is right.
- Public Polymarket pages may be stale, rounded, or inconsistent across event and category surfaces.
- U.S. station markets resolve against Wunderground histories, not directly against NWS point forecasts.
- HKO markets resolve to one-decimal Celsius daily maxima, so 28.9C, 29.9C, and 30.0C are materially different outcomes.
- Rain and thunderstorm timing is the main swing factor for Austin, Atlanta, Houston, Chicago, and Hong Kong.
- Duplicate exposure discipline matters: Atlanta remains the largest raw gap but already has three same-bucket paper entries.

## Sources Used

- Polymarket Austin Jun 16: https://polymarket.com/event/highest-temperature-in-austin-on-june-16-2026
- NWS KAUS forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- NWS KATL forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Polymarket HKO Jun 16: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-16-2026
- Polymarket HKO Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO regional readings: https://www.weather.gov.hk/textonly/v2/forecast/text_readings_v2_e.htm
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- NWS KORD forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- NWS KHOU forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- Polymarket Dallas Jun 16: https://polymarket.com/event/highest-temperature-in-dallas-on-june-16-2026
- NWS Dallas/Love Field forecast: https://forecast.weather.gov/MapClick.php?lat=32.7782&lon=-96.7951

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-15T1911Z.md`.
- Created `alerts/2026-06-15T1911Z.md`.
- Created `data/market_snapshots/2026-06-15T1911Z.json`.
- Created `paper_trading/entries/PT-20260615-173.md`.
- Created `paper_trading/ledger_appends/2026-06-15T1911Z.csv`.
- Created `paper_trading/maintenance/2026-06-15T1911Z.md`.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes in durable memory.
- GitHub connector mirror target: `rickyparkcinta/weather`.
- New paper-only position opened: PT-20260615-173, Austin/KAUS Jun 16 84-85F YES at Buy Yes 18c, $5 simulated notional.
- No real trades or betting actions were executed.
