# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 19:07:50
- HKT: 2026-06-13 03:07:50
- Scheduled invocation: 2026-06-13 03:07:00 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: Houston/Hobby KHOU, Chicago/O'Hare KORD, London City Airport/EGLC, NYC/LaGuardia KLGA, Miami/KMIA, Atlanta/KATL, and Hong Kong Observatory.
- Broader Polymarket temperature board was checked for context.
- Maintenance checks on open Jun 13 paper positions: PT-20260612-122, PT-20260612-124, PT-20260612-126, and PT-20260612-127.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 13 86-87F YES
- Current market: 84-85F led near 39%; 86-87F was about 25% on the current Polymarket surface.
- Implied probability: about 25% using displayed probability; direct buy quote was not cleanly captured.
- Estimated fair value: 34%-44%.
- Estimated edge: +9 to +19 percentage points before quote-quality and exact-bucket penalties.
- Confidence: low.
- Classification: moderate watch-only edge / no paper entry.
- Key reasoning: NWS O'Hare now shows Saturday high near 86F, which shifts the center one bucket warmer than existing PT-20260612-122 on 84-85F. The 86-87F bucket is plausibly underpriced if the official station reaches the NWS forecast.
- Liquidity/practicality: search/current page context showed about $4.3K event volume and about $25.3K liquidity, but without a verified buy quote this stays watch-only.
- Action: do not open a new paper position. Mark PT-20260612-122 as weakened/adverse-watch and require a clean 86-87F buy quote before any simulated hedge.

### 2. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 90-91F led at 43%; 92-93F was 27% displayed / Buy Yes 28c / Buy No 74c.
- Implied probability: about 28% using Buy Yes.
- Estimated fair value: 34%-44%.
- Estimated edge: +6 to +16 percentage points before exact-bucket and source-conflict penalties.
- Confidence: low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS Houston Hobby still shows Saturday high near 93F, while Polymarket remains centered on 90-91F. The thesis is live, but PT-20260612-127 already entered at 28c and current price no longer improves the entry.
- Liquidity/practicality: target-bucket volume remains thin, around $599, and the Yes/No spread is wide.
- Action: maintain PT-20260612-127 only.

### 3. Polymarket London/EGLC Jun 13 23C YES
- Current market: 22C led at 39%; 23C was 34% displayed / Buy Yes 35c / Buy No 67c.
- Implied probability: about 35% using Buy Yes.
- Estimated fair value: 37%-47%.
- Estimated edge: +2 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport still lists Saturday maximum daytime temperature at 23C, and the hourly table reaches 23C late afternoon. The market still makes 22C the favorite, but 23C has repriced sharply above the 25c PT-20260612-124 entry.
- Liquidity/practicality: target-bucket volume is about $3.9K; exact-Celsius and Wunderground station-history risk remain the main caps.
- Action: maintain PT-20260612-124 only.

### 4. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 90-91F led at 39%; 88-89F was 36% displayed / Buy Yes 36c / Buy No 65c.
- Implied probability: about 36% using Buy Yes.
- Estimated fair value: 36%-46%.
- Estimated edge: 0 to +10 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak represented edge / no duplicate.
- Key reasoning: NWS LaGuardia still shows Saturday high near 89F, but the market has moved 90-91F back into the lead. This weakens but does not invalidate the existing 88-89F paper thesis.
- Liquidity/practicality: target-bucket volume is about $1.0K, and the current quote is roughly at/just below PT-20260612-126's 37c entry. No add.
- Action: maintain PT-20260612-126 only.

## Watchlist / No Fresh Edge
- Polymarket Miami/KMIA Jun 13: 88-89F led near 49% on the prediction page while NWS Miami International shows Saturday high near 91F with a 40% afternoon thunderstorm chance. 90-91F remains plausible but not clean enough without a refreshed direct bucket quote.
- Polymarket Atlanta/KATL Jun 13: no fresh direct quote was captured this run; last tracked context had 92-93F near 47% versus guidance near the low 90s. No actionable edge after quote staleness and adjacent-bucket risk.
- Polymarket Hong Kong Observatory Jun 13: 31C led at 38% / Buy Yes 39c, with 30C at 32% / Buy Yes 33c. HKO's 00:00 HKT forecast gives a 27-31C range with showers and thunderstorms, so 30C/31C are both live and no single bucket is clearly cheap.
- Broader Polymarket temperature board: no stronger evidence-supported watchlist add surfaced during this pass.

## Recommended Paper Trades

No new paper-only position is recommended this run.

Maintain or update existing open paper positions:
- PT-20260612-127: Houston/KHOU Jun 13 92-93F YES at 28c, $5 simulated notional; maintain.
- PT-20260612-124: London/EGLC Jun 13 23C YES at 25c, $5 simulated notional; maintain.
- PT-20260612-126: NYC/KLGA Jun 13 88-89F YES at 37c, $5 simulated notional; maintain but edge has narrowed.
- PT-20260612-122: Chicago/KORD Jun 13 84-85F YES at 36c, $5 simulated notional; mark weakened/adverse-watch because NWS now centers closer to 86F.

No real bet or trade was executed.

## Risks and Invalidation Factors
- Exact weather buckets can flip on a one-degree station move.
- Chicago's forecast shift from 85F toward 86F makes the existing 84-85F paper entry fragile; an 86-87F hedge needs a verified buy quote before simulated entry.
- Houston still has source disagreement: NWS supports near 93F, while market consensus is centered closer to 90-91F.
- London can verify 22C despite a 23C daily max if Wunderground's station history differs from Met Office guidance or rounds lower.
- NYC now has market leadership in 90-91F, so the 88-89F thesis is weaker than earlier.
- Hong Kong's showers/thunderstorms and one-decimal Celsius resolution leave 30C/31C/32C live.
- Low target-bucket volume and wide Yes/No spreads make most apparent edges impractical beyond tiny paper sizing.

## Sources Used
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Chicago Jun 13: https://polymarket.com/es/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/predictions/miami
- Polymarket Hong Kong Jun 13: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-13-2026
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Chicago O'Hare/KORD: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Miami International/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-12T1907Z.md.
- Created alerts/2026-06-12T1907Z.md.
- Created data/market_snapshots/2026-06-12T1907Z.json.
- Created paper_trading/maintenance/2026-06-12T1907Z.md.
- Updated the rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No new paper-trade entry or ledger append was created because no new simulated position was opened.
