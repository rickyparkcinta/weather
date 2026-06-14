# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-14 15:10:00
- HKT: 2026-06-14 23:10:00
- Scheduled invocation: 2026-06-14 23:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Chicago/KORD, Dallas/KDAL, Atlanta/KATL, Miami/KMIA, Houston/KHOU, NYC/KLGA, Los Angeles/KLAX, Austin/KAUS, and Hong Kong/HKO Jun 14 highest-temperature markets.
- Austin/KAUS, Dallas/KDAL, Atlanta/KATL, and Chicago/KORD Jun 15 highest-temperature markets.
- Sources: public Polymarket market pages, NWS forecasts/current conditions/observation history, HKO regional readings, and prior paper-position state.

## Top Edges

1. Chicago/KORD Jun 14 70-71F YES - Buy Yes 40c, fair 52%-64%, edge +12 to +24 points, confidence medium-low. Strong represented edge; no duplicate because PT-20260613-141/PT-20260614-153 already cover it.
2. Dallas/KDAL Jun 14 84-85F YES - Buy Yes 5c, fair 14%-25%, edge +9 to +20 points, confidence low-to-medium-low. Represented cooler hedge; no duplicate at same price.
3. Austin/KAUS Jun 15 86-87F YES - Buy Yes 6c, fair 16%-28%, edge +10 to +22 points, confidence low-to-medium-low. Represented forward-day edge; no duplicate at same price.
4. Miami/KMIA Jun 14 90-91F YES - Buy Yes 40c, fair 43%-55%, edge +3 to +15 points, confidence low. Watch-only hedge; no paper add.

## Recommended Paper Trades

No new paper-only trade is recommended this run.

Maintenance actions:

- Maintain Chicago/KORD 70-71F and 72-73F paper cluster.
- Maintain Dallas/KDAL 84-85F YES.
- Maintain Austin/KAUS Jun 15 86-87F YES.
- Downgrade Atlanta/KATL Jun 14 90-91F YES to adverse-watch after NWS guidance cooled toward 89F.
- Keep Miami, Houston, NYC, LA, same-day Austin, and HKO represented positions in maintenance only.

## Risks and Invalidation Factors

- Exact-bucket misses by one or two degrees dominate every listed weather market.
- Public Polymarket pages may lag executable order books or disagree by route.
- Wunderground final station histories can differ from NWS observations.
- Chicago fails if KORD warms to 72F+ or Wunderground does not record the NWS 70F six-hour maximum.
- Dallas/Austin outcomes depend heavily on storm and cloud timing.
- Miami 90-91F can miss high if KMIA reaches 92F+ before storms arrive.

## Repo Log Update

- Updated latest snapshot and rolling notes.
- Created history entry, alert, JSON snapshot, and paper-trading maintenance note.
- No ledger append and no new paper entry were created.
- No real trades or betting actions were executed.
