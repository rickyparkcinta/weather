# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 10:12:09
- HKT: 2026-06-13 18:12:10
- Scheduled invocation: 2026-06-13 18:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket highest-temperature markets: Dallas/KDAL Jun 13 and Jun 14, Los Angeles/KLAX Jun 13 and Jun 14, Houston/KHOU Jun 13 and Jun 14, Chicago/KORD Jun 13 and Jun 14, NYC/KLGA Jun 13 and Jun 14, London/EGLC Jun 13 and Jun 14, Hong Kong Observatory Jun 13, Miami/KMIA Jun 13, Atlanta/KATL Jun 13, and broad Polymarket high-temperature page context.
- Cross-market checks: Kalshi Houston Jun 13 daily-high bucket and Robinhood climate daily-high context.
- Official weather evidence: NWS station point forecasts and current observations for KDAL, KLAX, KHOU, KORD, KLGA, KMIA, and KATL; Met Office London City Airport daily forecast; HKO local forecast context.

## Top Edges

1. Dallas/KDAL Jun 13 96-97F YES
   - Current price: 5% / Buy Yes 4.9c; 94-95F leads at 45%; 92-93F at 40%.
   - Fair value: 22%-34%.
   - Edge: +17 to +29 percentage points.
   - Confidence: low.
   - Action: maintain PT-20260613-133 only. Strongest raw edge, but no duplicate because the sub-4c trigger did not clear.

2. Houston/KHOU Jun 13 92-93F YES
   - Current price: 19% / Buy Yes 20c; 90-91F leads at 58%.
   - Fair value: 37%-49%.
   - Edge: +17 to +29 percentage points.
   - Confidence: low.
   - Action: opened PT-20260613-135, $5 simulated YES at 20c.

3. Los Angeles/KLAX Jun 13 74-75F YES
   - Current price: direct event page 11% / Buy Yes 12c; 72-73F leads at 53%.
   - Fair value: 28%-40%.
   - Edge: +16 to +28 percentage points.
   - Confidence: low.
   - Action: opened PT-20260613-136, $5 simulated YES at 12c.

4. Los Angeles/KLAX Jun 14 70-71F YES
   - Current price: 17% / Buy Yes 18c; 72-73F leads at 43%; 74-75F at 30%.
   - Fair value: 32%-44%.
   - Edge: +14 to +26 percentage points.
   - Confidence: low-to-medium-low.
   - Action: opened PT-20260613-138, $5 simulated YES at 18c.

5. London/EGLC Jun 13 23C YES
   - Current price: 8% / Buy Yes 8c; 21C leads at 50%; 22C at 37%.
   - Fair value: 16%-28%.
   - Edge: +8 to +20 percentage points.
   - Confidence: low.
   - Action: opened PT-20260613-137, $5 simulated YES at 8c.

## Recommended Paper Trades

- PT-20260613-135: YES on Houston/KHOU Jun 13 92-93F at 20c, $5 simulated notional.
- PT-20260613-136: YES on Los Angeles/KLAX Jun 13 74-75F at 12c, $5 simulated notional.
- PT-20260613-137: YES on London/EGLC Jun 13 23C at 8c, $5 simulated notional.
- PT-20260613-138: YES on Los Angeles/KLAX Jun 14 70-71F at 18c, $5 simulated notional.

No real bets or trades were executed.

## Risks and Invalidation Factors

- Exact-bucket risk dominates; one degree Fahrenheit or Celsius can flip the result.
- Polymarket event/category pages disagree in several places.
- Houston has cross-platform settlement-source mismatch.
- KLAX depends on marine-layer timing and Wunderground station rounding.
- London 23C may be a live-observation trap if EGLC only reaches 21-22C.
- Current-day entries decay quickly as observations arrive.

## Sources Used

- Polymarket High Temp page: https://polymarket.com/weather/high-temperature
- Polymarket Dallas Jun 13 market: https://polymarket.com/event/highest-temperature-in-dallas-on-june-13-2026
- Polymarket Los Angeles Jun 13 market: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-13-2026
- Polymarket Los Angeles Jun 14 market: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket Houston Jun 13 market: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket London Jun 13 market: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- NWS station forecasts and observations for KDAL, KLAX, KHOU, KORD, KLGA, KMIA, and KATL.
- Met Office London City Airport forecast: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO local forecast: https://www.hko.gov.hk/textonly/v2/forecast/local.htm
- Kalshi Houston Jun 13 search-rendered context: https://kalshi.com/markets/kxhighthou/daily-high-temperature-houston/kxhighthou-26jun13
- Robinhood daily high temperature context: https://robinhood.com/us/en/prediction-markets/climate/daily-high-temperature/

## Repo Log Update

- Updated odds/latest.md.
- Created odds/history/2026-06-13T1012Z.md.
- Created alerts/2026-06-13T1012Z.md.
- Created data/market_snapshots/2026-06-13T1012Z.json.
- Created paper-trading entries PT-20260613-135 through PT-20260613-138.
- Created paper_trading/ledger_appends/2026-06-13T1012Z.csv and paper_trading/maintenance/2026-06-13T1012Z.md.
- No real bets or trades were executed.
