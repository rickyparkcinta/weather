# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 09:12:27
- HKT: 2026-06-13 17:12:27
- Scheduled invocation: 2026-06-13 17:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket highest-temperature markets: Dallas Love Field/KDAL Jun 13, Los Angeles/KLAX Jun 13, Houston/Hobby KHOU Jun 13 and Jun 14, Chicago/O'Hare KORD Jun 13, London City Airport/EGLC Jun 13, Hong Kong Observatory Jun 13, Miami/KMIA Jun 13, Atlanta/KATL Jun 13, and broad Polymarket high-temperature page context.
- Cross-market checks: Kalshi Houston Jun 13 daily-high bucket and Robinhood Miami Jun 13 temperature thresholds.
- Official weather evidence: NWS station point forecasts and current observations for KDAL, KLAX, KHOU, KORD, KMIA, and KATL; Met Office London City Airport; HKO local forecast context.

## Top Edges

1. Polymarket Dallas/KDAL Jun 13 96-97F YES
   - Current price: 5% / Buy Yes 4.9c; 94-95F leads at 45%; 92-93F at 40%.
   - Implied probability: about 4.9%-5%.
   - Estimated fair value: 22%-34%.
   - Estimated edge: +17 to +29 percentage points.
   - Confidence: low.
   - Classification: strong raw edge; moderate practical edge after source and exact-bucket penalties.
   - Key reasoning: NWS Dallas Love Field/KDAL forecast shows high near 97F while the market still prices the direct 96-97F bucket below 5c.
   - Liquidity/practicality: target-bucket volume about $2.4K; tiny paper size only.

2. Polymarket Los Angeles/KLAX Jun 13 74-75F YES
   - Current price: 24% / Buy Yes 25c; 72-73F leads at 53%.
   - Implied probability: about 24%-25%.
   - Estimated fair value: 36%-46%.
   - Estimated edge: +11 to +21 percentage points.
   - Confidence: low-to-medium-low.
   - Classification: moderate addable edge.
   - Key reasoning: NWS KLAX forecast shows high near 75F, while the market still favors 72-73F.
   - Liquidity/practicality: target-bucket volume about $2.9K; small paper size only.

3. Polymarket Houston/KHOU Jun 13 92-93F YES
   - Current price: 28%-33% quote-quality-capped context.
   - Estimated fair value: 42%-52%.
   - Estimated edge: +9 to +24 percentage points depending on live public quote.
   - Confidence: low.
   - Classification: represented/no-add practical edge.
   - Action: maintain PT-20260612-127, PT-20260612-129, and PT-20260613-131 only.

4. Polymarket Chicago/KORD Jun 13 86-87F YES
   - Current price: 34%; 84-85F leads at 40%.
   - Estimated fair value: 38%-48%.
   - Estimated edge: +4 to +14 percentage points.
   - Confidence: low-to-medium-low.
   - Classification: represented/no-add.
   - Action: maintain PT-20260612-128 only.

5. Polymarket London/EGLC Jun 13 23C YES
   - Current price: 23C 34%; 22C 39%.
   - Estimated fair value: 28%-38%.
   - Estimated edge: approximately fair to mildly positive.
   - Confidence: low-to-medium-low.
   - Classification: represented/maintenance only.
   - Action: maintain PT-20260612-124 and PT-20260613-132.

## Recommended Paper Trades

- PT-20260613-133: YES on Polymarket Dallas/KDAL Jun 13 highest temperature 96-97F at 4.9c, $5 simulated notional, fair estimate 22%-34%, low confidence.
- PT-20260613-134: YES on Polymarket Los Angeles/KLAX Jun 13 highest temperature 74-75F at 25c, $5 simulated notional, fair estimate 36%-46%, low-to-medium-low confidence.

No real bets or trades were executed.

## Risks and Invalidation Factors

- Exact-bucket risk dominates; one degree Fahrenheit or Celsius can flip the result.
- Polymarket public pages can disagree across event and category pages; direct API fetches from the workspace were blocked.
- Dallas is a strong station-forecast discrepancy, but consumer/Wunderground context and Polymarket's own summary lean closer to 94-95F.
- Los Angeles depends on marine-layer timing and coastal onshore flow; a slow burn-off makes 72-73F the main miss path.
- Houston remains source/rule sensitive because Polymarket and Kalshi use different settlement stacks.
- London daily max versus hourly guidance remains conflicted between 23C and 22C.
- Hong Kong public market surfaces conflict enough that no actionable bucket cleared the evidence standard.

## Sources Used

- Polymarket High Temp page: https://polymarket.com/weather/high-temperature
- Polymarket Dallas Jun 13 market: https://polymarket.com/event/highest-temperature-in-dallas-on-june-13-2026
- NWS Dallas Love Field/KDAL forecast: https://forecast.weather.gov/MapClick.php?lat=32.85416&lon=-96.85506
- NWS Dallas Love Field/KDAL current observations: https://tgftp.nws.noaa.gov/weather/current/KDAL.html
- Polymarket Los Angeles Jun 13 market: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-13-2026
- NWS Los Angeles/KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409
- NWS Los Angeles/KLAX current observations: https://tgftp.nws.noaa.gov/weather/current/KLAX.html
- NWS Houston Hobby/KHOU forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS Chicago O'Hare/KORD forecast: https://forecast.weather.gov/MapClick.php?lat=41.9796&lon=-87.9045
- Met Office London City Airport forecast: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO local forecast: https://www.hko.gov.hk/textonly/v2/forecast/local.htm
- Robinhood Miami threshold context: https://robinhood.com/us/en/prediction-markets/climate/events/miami-daily-temperature-high-june-13-2026-jun-13-2026/

## Repo Log Update

- Updated latest snapshot, timestamped history, alert, JSON snapshot, two new paper-trade entries, ledger append, maintenance note, rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No real bets or trades were executed.
