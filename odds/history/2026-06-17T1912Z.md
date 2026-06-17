# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-17 19:12:02
- HKT: 2026-06-18 03:12:02
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Hong Kong/HKO Jun 18 and Jun 19; Chicago/KORD Jun 17; Dallas/KDAL Jun 17; Austin/KAUS Jun 17; Los Angeles/KLAX Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; Houston/KHOU Jun 17.
- Exploratory cross-check: San Francisco/KSFO Jun 17 because public Polymarket pages surfaced it as a liquid adjacent weather market.
- Evidence used: public Polymarket rendered pages/search snippets; HKO official 9-day forecast and current weather APIs; NWS station observation histories; NWS point/current pages for KAUS and KLAX; NWS forecast discussions for Chicago and San Francisco.
- Source-quality note: direct workspace curl/API access to Polymarket, HKO, and NWS remained blocked by the 403 connector tunnel, so market-price confidence is capped where public display prices may differ from executable order-book depth.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: displayed 35% on Polymarket Hong Kong predictions page.
- Implied probability: about 35%.
- Estimated fair value: 43%-53%.
- Estimated edge: roughly +8 to +18 percentage points.
- Confidence: medium-low.
- Classification: moderate edge; small paper add-on.
- Key reasoning: HKO's 00:00 HKT forecast still lists Jun 19 maximum temperature at 31C, with mainly cloudy weather, a few showers, isolated thunderstorms at first, and hot sunny periods in the afternoon. Polymarket shows 31C leading but only at 35%, down from the existing 38c paper entry and the prior 36c check.
- Liquidity/practicality notes: Polymarket Hong Kong page shows about $12.3K volume and $36.9K liquidity for the Jun 19 high-temperature market. Exact-Celsius and one-decimal HKO settlement risk remain material, so sizing stays tiny.
- Decision: opened PT-20260617-200, a $5 simulated BUY_YES add-on at 35c. No real trade or bet executed.

### 2. Polymarket Los Angeles/KLAX Jun 17 70-71F YES
- Current price: displayed 62%.
- Implied probability: about 62%.
- Estimated fair value: 60%-72%.
- Estimated edge: roughly -2 to +10 percentage points.
- Confidence: medium-low.
- Classification: represented weak-to-moderate late-stage maintenance.
- Key reasoning: KLAX was 70F at 11:53 PDT and the NWS point forecast listed this afternoon's high near 70F, which keeps 70-71F favored. The price has already moved sharply in favor of PT-20260617-195 from 26c, so this is no-add maintenance rather than a fresh paper buy.
- Liquidity/practicality notes: about $45.6K Polymarket event volume. Main risk is a later 72F+ print or a Wunderground/official-history mismatch.

### 3. Polymarket Hong Kong/HKO Jun 18 29C YES
- Current price: 29C is the second outcome at about 34%; 28C leads around 37%.
- Implied probability: about 34%.
- Estimated fair value: 33%-43%.
- Estimated edge: roughly -1 to +9 percentage points.
- Confidence: medium-low.
- Classification: represented weak maintenance.
- Key reasoning: HKO's 00:00 HKT forecast lists Jun 18 maximum temperature at 29C with heavy showers at first. The 28C market lead is defensible because HKO current readings are still rain-cooled, but the official max forecast keeps 29C live.
- Liquidity/practicality notes: Polymarket shows about $85.8K volume and $70.3K liquidity. Maintain PT-20260617-197 only; no duplicate because 28.xC cap risk is high.

### 4. Polymarket San Francisco/KSFO Jun 17 68-69F YES
- Current price: 70-71F leads at 36%; 68-69F is the next closest at 32%.
- Implied probability: about 32% for 68-69F.
- Estimated fair value: 32%-42%.
- Estimated edge: roughly 0 to +10 percentage points.
- Confidence: low.
- Classification: weak watch-only.
- Key reasoning: KSFO had reached 68F at 11:56 PDT while the San Francisco forecast discussion noted persistent marine stratus and below-normal/cooler conditions. Local reporting also described a lingering marine-layer pattern with SFO/bayside Peninsula highs in the upper 60s to low 70s.
- Liquidity/practicality notes: about $58.4K event volume. No paper entry because the 70-71F outcome remains live and the public page quote does not show a large enough gap.

## Near-Fair / Weakened Monitors
- Chicago/KORD Jun 17: Polymarket now leads with 66-67F at 25% and 64-65F at 24%. KORD had only reached a 6-hour max around 61F by 12:51 CDT amid rain, wind, and storm uncertainty, weakening older 68-69F paper exposure. Maintain PT-20260616-190/PT-20260617-196 only.
- Dallas/KDAL Jun 17: Polymarket leads 92-93F at 57% with 90-91F near 28%. KDAL was 89.1F at 13:53 CDT after a slow warm-up, so the older 94-95F paper thesis is weakened/adverse-watch.
- Austin/KAUS Jun 17: Polymarket leads 90-91F at 60% and 92-93F at 32%. KAUS was 87.1F at 13:53 CDT and NWS now lists this afternoon's high near 91F, so 92-93F paper entries are weakened but not dead.
- Atlanta/KATL Jun 17: Polymarket shows 84-85F around 46% and 86-87F around 38%. KATL printed 84F at 13:52 EDT; market appears broadly fair after 86F+ overshoot risk.
- Miami/KMIA Jun 17: Polymarket-related snippets show 92-93F around the mid-60s. KMIA printed 93F by 14:53 EDT, so the market is mostly fair unless late 94F+ risk is underpriced.
- Houston/KHOU Jun 17: KHOU printed 86F at 12:53 CDT after heavy rain. Prior Polymarket snippets placed 88-89F around 39%, but current direct outcome depth was not cleanly available; watch-only.

## Recommended Paper Trades

Opened one new paper-only position:

- Stance: BUY_YES on Polymarket Hong Kong/HKO Jun 19 31C.
- Simulated size: $5 notional.
- Entry price: 35c displayed.
- Thesis: HKO official 00:00 HKT forecast centers Jun 19 at 31C while Polymarket prices 31C at only about 35%.
- Confidence: medium-low.
- Invalidation risks: HKO forecast shifts to 30C or 32C; showers/clouds cap the Observatory at 30.9C or below; stronger sunny-period heating prints 32.0C or higher; public Polymarket display differs from executable depth.
- Real-money status: no real bet, trade, order, wallet connection, or automated execution.

## Risks and Invalidation Factors
- Exact weather buckets can lose by one degree or one decimal even when the broad forecast direction is right.
- HKO high-temperature markets resolve to the official Daily Extract absolute max to one decimal place.
- U.S. Polymarket weather markets resolve against Wunderground station history, not directly against NWS point forecasts.
- Public Polymarket pages can lag or disagree with executable order books; confidence is reduced where only displayed odds were available.
- Same-day U.S. markets are late-session and sensitive to one final station print, clearing after clouds, storm timing, and settlement-source differences.

## Sources Used
- Polymarket Hong Kong predictions: https://polymarket.com/predictions/hong-kong
- Polymarket HKO Jun 18 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026
- HKO 9-day forecast API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en
- HKO current readings API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en
- HKO since-midnight max/min API: https://data.weather.gov.hk/weatherAPI/hko_data/regional-weather/latest_since_midnight_maxmin.csv
- Polymarket Chicago Jun 17: https://polymarket.com/event/highest-temperature-in-chicago-on-june-17-2026
- Polymarket Dallas Jun 17: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket Los Angeles Jun 17: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-17-2026
- Polymarket San Francisco Jun 17: https://polymarket.com/event/highest-temperature-in-san-francisco-on-june-17-2026
- Polymarket Atlanta Jun 17: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-17-2026
- NWS observation histories: KORD, KDAL, KAUS, KLAX, KHOU, KATL, KMIA, KSFO via https://forecast.weather.gov/data/obhistory/
- NWS Austin point forecast: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- NWS Los Angeles/KLAX point forecast: https://www.weather.gov/90045
- NWS Chicago forecast discussion: https://forecast.weather.gov/product.php?format=CI&glossary=1&issuedby=LOT&product=AFD&site=LOT&version=1
- NWS San Francisco forecast discussion: https://forecast.weather.gov/product.php?format=CI&glossary=1&issuedby=MTR&product=AFD&site=NWS&version=1
- San Francisco Chronicle weather context: https://www.sfchronicle.com/weather-forecast/article/san-francisco-marine-layer-fog-22308091.php

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-17T1912Z.md, alerts/2026-06-17T1912Z.md, data/market_snapshots/2026-06-17T1912Z.json, paper_trading/entries/PT-20260617-200.md, paper_trading/ledger_appends/2026-06-17T1912Z.csv, and paper_trading/maintenance/2026-06-17T1912Z.md.
- Updated rolling local records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only position: PT-20260617-200. No real trades or betting actions were executed.
