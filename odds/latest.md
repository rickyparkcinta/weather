# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 08:16:00
- HKT: 2026-06-13 16:16:00
- Scheduled invocation: 2026-06-13 16:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket highest-temperature markets: London/EGLC Jun 13, Houston/KHOU Jun 13 and Jun 14, Chicago/KORD Jun 13, Miami/KMIA Jun 13, Atlanta/KATL Jun 13, Hong Kong Observatory Jun 13, and NYC/KLGA Jun 14 maintenance context.
- Cross-market checks: Kalshi Houston Jun 13 daily-high buckets.
- Official weather evidence: Met Office London City Airport; NWS Houston Hobby, Chicago O'Hare, LaGuardia, and Miami point forecasts/observations; HKO forecast context.

## Top Edges

1. Polymarket London/EGLC Jun 13 23C YES
   - Current price: 23C 19% / Buy Yes 19c; 22C leads at 44% / Buy Yes 45c.
   - Estimated fair value: 28%-38%.
   - Estimated edge: +9 to +19 percentage points before penalties.
   - Confidence: low-to-medium-low.
   - Classification: moderate addable edge.
   - Key reasoning: Met Office London City Airport still lists Saturday max 23C, but hourly guidance peaks at 22C, keeping sizing tiny.
   - Action: opened PT-20260613-132, $5 simulated YES at 19c.

2. Polymarket Houston/KHOU Jun 13 92-93F YES
   - Current price: Polymarket 32% / Buy Yes 33c; Kalshi comparable Houston 92-93F 65% / Yes 62c.
   - Estimated fair value: 42%-52%.
   - Estimated edge: +9 to +19 percentage points.
   - Confidence: low.
   - Action: maintain PT-20260612-127, PT-20260612-129, and PT-20260613-131 only.

3. Polymarket Chicago/KORD Jun 13 86-87F YES
   - Current price: 32% / Buy Yes 33c.
   - Estimated fair value: 37%-47%.
   - Estimated edge: +4 to +14 percentage points.
   - Confidence: low-to-medium-low.
   - Action: maintain PT-20260612-128 only; keep PT-20260612-122 weakened/adverse-watch.

4. Polymarket Houston/KHOU Jun 14 92-93F YES
   - Current price: 15% / Buy Yes 16c.
   - Estimated fair value: 20%-30%.
   - Estimated edge: +4 to +14 percentage points.
   - Confidence: low.
   - Action: watch only due thin target volume and Sunday storm risk.

## Recommended Paper Trades

Opened one new simulated paper trade:

- PT-20260613-132: YES on Polymarket London/EGLC Jun 13 highest temperature 23C at 19c, $5 simulated notional, low-to-medium-low confidence.

No real bets or trades were executed.

## Risks and Invalidation Factors

- Exact-bucket risk dominates.
- London 23C is supported by the daily Met Office max, but the hourly table peaks at 22C.
- Houston source/rule mismatch is substantial: Kalshi uses NWS climate data while Polymarket uses Wunderground/KHOU.
- Polymarket public pages can lag or disagree; direct API access from the workspace was blocked.
- Houston Jun 14 can miss low if storms develop earlier.
- Chicago can still settle 84-85F if heating underperforms.

## Sources Used

- https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- https://weather.metoffice.gov.uk/forecast/u10j124jp
- https://tgftp.nws.noaa.gov/weather/current/EGLC.html
- https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- https://kalshi.com/markets/kxhighthou/daily-high-temperature-houston/kxhighthou-26jun13
- https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- https://tgftp.nws.noaa.gov/weather/current/KHOU.html
- https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- https://tgftp.nws.noaa.gov/weather/current/KORD.html
- https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- https://forecast.weather.gov/MapClick.php?textField1=25.77&textField2=-80.20
- https://polymarket.com/event/highest-temperature-in-atlanta-on-june-13-2026
- https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update

- Updated odds/latest.md.
- Created odds/history/2026-06-13T0816Z.md.
- Created alerts/2026-06-13T0816Z.md.
- Created data/market_snapshots/2026-06-13T0816Z.json.
- Created paper_trading/entries/PT-20260613-132.md.
- Created paper_trading/ledger_appends/2026-06-13T0816Z.csv.
- Created paper_trading/maintenance/2026-06-13T0816Z.md.
- Updated rolling paper-trading summaries and logs in the durable workspace.
- No real bets or trades were executed.
