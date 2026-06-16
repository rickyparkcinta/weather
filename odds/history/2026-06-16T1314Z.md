# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-16 13:14:15
- HKT: 2026-06-16 21:14:15
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket weather markets: Austin/KAUS Jun 17 88-89F/90-91F/92-93F/94-95F; Chicago/KORD Jun 16 70-71F/72-73F/74-75F/76-77F; Dallas/KDAL Jun 17 90-91F/92-93F/94-95F/96-97F; Hong Kong/HKO Jun 17 27C/28C/29C/30C; Atlanta/KATL Jun 16 72-73F/74-75F/76-77F; Houston/KHOU Jun 16 80-81F/82-83F/84-85F.
- Official cross-checks: NWS point forecasts for Austin-Bergstrom, Chicago O'Hare, Dallas Love Field, Atlanta/Hartsfield-Jackson, and Houston Hobby; HKO 9-day forecast.
- Settlement/source note: U.S. Polymarket weather markets resolve using Wunderground station history, not NWS forecasts. NWS is supporting evidence. Public Polymarket pages can be rounded, stale, thin, or internally inconsistent.

## Top Edges

1. Austin/KAUS Jun 17 90-91F YES - current 32% / Buy Yes 32c, fair 38%-48%, confidence low-to-medium-low, new tiny paper position.
2. Chicago/KORD Jun 16 72-73F YES - current 20% / Buy Yes 20c, fair 32%-42%, confidence low-to-medium-low, represented/no duplicate after three existing same-bucket entries.
3. Dallas/KDAL Jun 17 94-95F YES - current 25% / Buy Yes 25c, fair 31%-41%, confidence low-to-medium-low, represented/no duplicate because price equals PT-20260616-185 entry and target volume is thin.
4. HKO Jun 17 28C YES - current 36% / Buy Yes 36c, fair 40%-50%, confidence medium-low, represented/no duplicate above the 32% entry.
5. Atlanta/KATL Jun 16 74-75F YES - current 43% / Buy Yes 43c, fair 40%-50%, confidence low-to-medium-low, mostly fair/maintenance only.
6. Houston/KHOU Jun 16 82-83F / 80-81F - mostly fair/maintenance only after the market moved toward NWS high near 82F.

## Recommended Paper Trades

- New: PT-20260616-187 Austin/KAUS Jun 17 90-91F YES, BUY_YES at 32c, $5 simulated notional, fair 38%-48%, confidence low-to-medium-low, status open.
- Maintained: PT-20260616-180/PT-20260616-184/PT-20260616-186 Chicago/KORD Jun 16 72-73F YES; PT-20260616-185 Dallas/KDAL Jun 17 94-95F YES; PT-20260616-183 HKO Jun 17 28C YES; PT-20260616-182 Atlanta/KATL Jun 16 74-75F YES; PT-20260616-181 Houston/KHOU Jun 16 80-81F YES.
- No real bets, trades, wallet actions, or order execution occurred.

## Risks and Invalidation Factors

- Austin can miss warmer if clouds clear faster and KAUS prints 92F+; it can also miss cooler if clouds or storms suppress heating into 88-89F.
- Austin target-bucket volume is only about $317, so this is a small paper-only first entry rather than a large-conviction signal.
- Chicago already has three same-bucket paper entries; no fourth add at the same price.
- U.S. markets resolve to Wunderground station history; NWS is supporting evidence only.
- HKO Jun 17 remains sensitive to one-decimal Celsius boundaries under heavy showers.

## Sources Used

- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket Chicago Jun 16: https://polymarket.com/event/highest-temperature-in-chicago-on-june-16-2026
- Polymarket Dallas Jun 17: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket HKO Jun 17: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-17-2026
- Polymarket Atlanta Jun 16: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-16-2026
- Polymarket Houston Jun 16: https://polymarket.com/event/highest-temperature-in-houston-on-june-16-2026
- NWS Austin-Bergstrom forecast: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- NWS Chicago O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Dallas forecast: https://forecast.weather.gov/zipcity.php?inputstring=dallas%2CTX
- NWS Atlanta/Hartsfield-Jackson forecast: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- NWS Houston Hobby forecast: https://forecast.weather.gov/MapClick.php?lat=29.6913&lon=-95.2988
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update

- Saved durable records locally: odds/latest.md, odds/history/2026-06-16T1314Z.md, alerts/2026-06-16T1314Z.md, data/market_snapshots/2026-06-16T1314Z.json, paper_trading/entries/PT-20260616-187.md, paper_trading/ledger_appends/2026-06-16T1314Z.csv, and paper_trading/maintenance/2026-06-16T1314Z.md.
- Updated rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- GitHub connector mirror target: rickyparkcinta/weather.