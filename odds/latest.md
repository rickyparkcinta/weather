# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 07:12:00
- HKT: 2026-06-13 15:12:00
- Scheduled invocation: 2026-06-13 15:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket highest-temperature markets: Houston/Hobby KHOU Jun 13 and Jun 14, Chicago/O'Hare KORD Jun 13, NYC/LaGuardia KLGA Jun 14, London City Airport/EGLC Jun 13, Miami/KMIA Jun 13, Atlanta/KATL Jun 13, and Hong Kong Observatory Jun 13.
- Cross-market checks: Kalshi Houston daily-high market and Robinhood Atlanta daily-high thresholds.
- Official weather evidence: NWS Houston Hobby/KHOU, NWS Chicago O'Hare/KORD, and NWS LaGuardia/KLGA point forecasts and observations.

## Top Edges

1. Polymarket Houston/KHOU Jun 13 92-93F YES
   - Current price: Polymarket 28% / Buy Yes 28c; Kalshi comparable Houston 92-93F 65% / Yes 62c.
   - Estimated fair value: 45%-55%.
   - Estimated edge: +17 to +27 percentage points before penalties.
   - Confidence: low-to-medium-low.
   - Classification: strong raw source-disagreement edge; moderate practical edge.
   - Key reasoning: direct NWS KHOU guidance shows a high near 93F while Polymarket still favors 90-91F.
   - Action: opened PT-20260613-131, $5 simulated YES at 28c.

2. Polymarket Chicago/KORD Jun 13 86-87F YES
   - Current price: 29% / Buy Yes near 30c.
   - Estimated fair value: 35%-43%.
   - Estimated edge: +5 to +13 percentage points.
   - Confidence: low-to-medium-low.
   - Action: maintain PT-20260612-128 only; keep PT-20260612-122 weakened/adverse-watch.

3. Polymarket NYC/KLGA Jun 14 88-89F YES
   - Current price: about 28% / Buy Yes 28c.
   - Estimated fair value: 32%-42%.
   - Estimated edge: +4 to +14 percentage points.
   - Confidence: low-to-medium-low.
   - Action: maintain PT-20260613-130 only.

4. Polymarket Houston/KHOU Jun 14 92-93F YES
   - Current price: 15% / Buy Yes 15c.
   - Estimated fair value: 20%-30%.
   - Estimated edge: +5 to +15 percentage points.
   - Confidence: low.
   - Action: watch only due thin target volume and Sunday storm risk.

5. Polymarket London/EGLC Jun 13 23C YES
   - Current price: about 30%; 22C leads around 44%.
   - Estimated fair value: 32%-40%.
   - Estimated edge: +2 to +10 percentage points.
   - Confidence: low.
   - Action: maintain PT-20260612-124 only.

## Recommended Paper Trades

Opened one new simulated paper trade:

- PT-20260613-131: YES on Polymarket Houston/KHOU Jun 13 highest temperature 92-93F at 28c, $5 simulated notional, low-to-medium-low confidence.

No real bets or trades were executed.

## Risks and Invalidation Factors

- Exact-bucket risk dominates.
- Houston source/rule mismatch is substantial: Kalshi uses NWS climate data while Polymarket uses Wunderground/KHOU.
- Polymarket public pages can lag or disagree; direct API access from the workspace was blocked.
- Chicago forecast pages conflict around 84F versus 86F.
- Houston Jun 14 can miss low if storms develop earlier.
- NYC Jun 14 can miss low under thicker cloud or showers.
- London exact-Celsius settlement remains fragile.

## Sources Used

- https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- https://kalshi.com/markets/kxhighthou/daily-high-temperature-houston/kxhighthou-26jun13
- https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- https://tgftp.nws.noaa.gov/weather/current/KHOU.html
- https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- https://polymarket.com/event/highest-temperature-in-nyc-on-june-14-2026
- https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- https://polymarket.com/event/highest-temperature-in-atlanta-on-june-13-2026
- https://robinhood.com/us/en/prediction-markets/climate/events/atlanta-daily-temperature-high-june-13-2026-jun-13-2026/

## Repo Log Update

- Updated odds/latest.md.
- Created odds/history/2026-06-13T0712Z.md.
- Created alerts/2026-06-13T0712Z.md.
- Created data/market_snapshots/2026-06-13T0712Z.json.
- Created paper_trading/entries/PT-20260613-131.md.
- Created paper_trading/ledger_appends/2026-06-13T0712Z.csv.
- Created paper_trading/maintenance/2026-06-13T0712Z.md.
- Updated rolling paper-trading summaries and logs.
- No real bets or trades were executed.
