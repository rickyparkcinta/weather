# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 12:11:27
- HKT: 2026-06-13 20:11:27
- Scheduled invocation: 2026-06-13 20:07:00 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket highest-temperature markets: Houston/KHOU Jun 13 and Jun 14, Dallas/KDAL Jun 13 and Jun 14, Los Angeles/KLAX Jun 13 and Jun 14, Chicago/KORD Jun 13, NYC/KLGA Jun 13 and Jun 14, and London/EGLC Jun 13.
- Cross-market checks: Kalshi Houston Jun 13 daily-high bucket; Robinhood/ForecastEx threshold markets for Houston, Dallas, Los Angeles, NYC, and Chicago where available.
- Official/weather evidence: NWS point forecasts and current observations for KHOU, KDAL, KLAX, KORD, and KLGA; Met Office London City Airport forecast; Wunderground KLAX public forecast context.

## Top Edges

1. Houston/KHOU Jun 13 92-93F YES: Polymarket 22% / Buy Yes 23c versus fair 30%-42%, confidence low. NWS and Kalshi remain supportive, but Robinhood/Wunderground threshold context is less supportive and the thesis is already represented.
2. Dallas/KDAL Jun 13 96-97F YES: Polymarket 8% / Buy Yes 9.8c versus fair 16%-28%, confidence low. NWS still shows 97F, but market context centers lower; maintain PT-20260613-133 only.
3. Houston/KHOU Jun 14 92-93F YES: Polymarket 14% / Buy Yes 15c versus fair 22%-34%, confidence low. Fresh watch-only edge because NWS shows Sunday high near 93F, but 60% thunderstorm risk and thin target volume block a paper entry.
4. Los Angeles/KLAX Jun 14 70-71F YES: Polymarket 18% / Buy Yes 19c versus fair 26%-38%, confidence low. NWS supports high near 70F, but Wunderground context is warmer; maintain PT-20260613-138 only.
5. Los Angeles/KLAX Jun 13 74-75F YES: direct Polymarket page 8% / Buy Yes 9c versus fair 16%-28%, confidence low. NWS supports 75F, but Wunderground and market movement favor 72-73F; maintain existing entries only.

## Recommended Paper Trades

No new paper trade is recommended this run. The highest-ranked current discrepancies are already represented, and the only fresh unrepresented candidate, Houston/KHOU Jun 14 92-93F YES, is blocked by thunderstorm risk, thin target-bucket volume, and existing Houston exposure.

## Risks and Invalidation Factors

- Exact-bucket risk dominates.
- Public market surfaces disagree for LA Jun 13 and London Jun 13.
- Houston cross-market comparisons are source-sensitive because Kalshi uses NWS climate data while Polymarket uses Wunderground/KHOU.
- Houston Jun 14 and Dallas Jun 14 carry material thunderstorm timing risk.
- KLAX depends on marine-layer clearing and sea-breeze timing.

## Sources Used

- Polymarket High Temp page: https://polymarket.com/weather/high-temperature
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- Polymarket Dallas Jun 13: https://polymarket.com/event/highest-temperature-in-dallas-on-june-13-2026
- Polymarket Dallas Jun 14: https://polymarket.com/event/highest-temperature-in-dallas-on-june-14-2026
- Polymarket Los Angeles Jun 13: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-13-2026
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket NYC context: https://polymarket.com/predictions/new-york-city
- Kalshi Houston Jun 13: https://kalshi.com/markets/kxhighthou/daily-high-temperature-houston/kxhighthou-26jun13
- Robinhood Houston Jun 13: https://robinhood.com/us/en/prediction-markets/climate/events/houston-daily-temperature-high-june-13-2026-jun-13-2026/
- Robinhood Dallas Jun 13: https://robinhood.com/us/en/prediction-markets/climate/events/dallas-daily-temperature-high-june-13-2026-jun-13-2026/
- NWS KDAL forecast: https://forecast.weather.gov/MapClick.php?lat=32.85416&lon=-96.85506
- NWS KDAL observations: https://tgftp.nws.noaa.gov/weather/current/KDAL.html
- NWS KHOU forecast: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9435&lon=-118.4086
- Wunderground KLAX: https://www.wunderground.com/weather/us/ca/los-angeles-international/KLAX
- NWS KORD forecast: https://forecast.weather.gov/MapClick.php?lat=41.9796&lon=-87.9045
- NWS KLGA forecast: https://forecast.weather.gov/MapClick.php?lat=40.77406000000008&lon=-73.87227999999999
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T1211Z.md`.
- Created `alerts/2026-06-13T1211Z.md`.
- Created `data/market_snapshots/2026-06-13T1211Z.json`.
- Created `paper_trading/maintenance/2026-06-13T1211Z.md`.
- Appended a maintenance row to `paper_trading/paper_trade_log.md` in the memory folder.
- No new paper-trade entry or ledger append was created because no fresh simulated position was opened.
- No real bets or trades were executed.