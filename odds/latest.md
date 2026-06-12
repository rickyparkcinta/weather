# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 20:08:19
- HKT: 2026-06-13 04:08:19
- Scheduled invocation: 2026-06-13 04:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: Chicago/O'Hare KORD, Houston/Hobby KHOU, London City Airport/EGLC, NYC/LaGuardia KLGA, Miami/KMIA, Atlanta/KATL, and Hong Kong Observatory.
- Broader Polymarket weather-board context where surfaced during the scan.
- Maintenance checks on open Jun 13 paper positions: PT-20260612-122, PT-20260612-124, PT-20260612-126, and PT-20260612-127.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 13 86-87F YES
- Current market: 84-85F leads at 39%; 86-87F is 25% displayed / Buy Yes 26c / Buy No 77c.
- Implied probability: 26% using Buy Yes.
- Estimated fair value: 38%-48%.
- Estimated edge: +12 to +22 percentage points before exact-bucket and liquidity penalties.
- Confidence: low-to-medium-low.
- Classification: moderate edge / tiny paper hedge.
- Key reasoning: NWS O'Hare now shows Saturday sunny with a high near 86F and southwest wind gusts up to 25 mph. That moves the official-forecast center one bucket warmer than existing PT-20260612-122 on 84-85F. The market still prices 84-85F well ahead of 86-87F, leaving 86-87F underpriced if KORD follows the updated point forecast.
- Liquidity/practicality: target-bucket volume is thin at about $444, and the Yes/No spread is wide. This justifies only a very small simulated hedge.
- Action: opened PT-20260612-128, a $5 simulated YES position at 26c. Mark PT-20260612-122 Chicago 84-85F YES weakened/adverse-watch.

### 2. Polymarket London/EGLC Jun 13 23C YES
- Current market: 22C leads at 38%; 23C is 37% displayed.
- Implied probability: about 37% using displayed probability.
- Estimated fair value: 39%-49%.
- Estimated edge: +2 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport still lists Saturday maximum daytime temperature at 23C, and its hourly table reaches 23C around 5pm. The market continues to make 22C a slight favorite, but 23C has repriced far above the 25c PT-20260612-124 paper entry.
- Liquidity/practicality: event volume is about $39.4K, but exact-Celsius and Wunderground station-history risk keep sizing capped.
- Action: maintain PT-20260612-124 only.

### 3. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 90-91F leads at 43%; 92-93F is 33% displayed / Buy Yes 34c / Buy No 68c.
- Implied probability: 34% using Buy Yes.
- Estimated fair value: 35%-45%.
- Estimated edge: +1 to +11 percentage points.
- Confidence: low.
- Classification: weak-to-moderate represented edge / no duplicate.
- Key reasoning: NWS Houston Hobby still shows Saturday mostly sunny with a high near 93F, while Polymarket remains centered one bucket lower at 90-91F. The fair gap persists but has narrowed sharply from the 28c PT-20260612-127 entry.
- Liquidity/practicality: target-bucket volume is about $396 and the spread is wide, so duplicate exposure is not justified at the worse current price.
- Action: maintain PT-20260612-127 only.

### 4. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 90-91F leads near 38%-39%; 88-89F is about 36% displayed on current Polymarket surfaces.
- Implied probability: about 36%.
- Estimated fair value: 36%-46%.
- Estimated edge: 0 to +10 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak represented edge / no duplicate.
- Key reasoning: NWS LaGuardia shows Saturday sunny with a high near 89F, which keeps the 88-89F thesis alive. The problem is that market leadership has moved back toward 90-91F and the edge is now marginal after exact-bucket risk.
- Liquidity/practicality: event volume is workable at about $8.8K on the NYC predictions page, but the price is close to the existing 37c entry.
- Action: maintain PT-20260612-126 only; do not add.

## Watchlist / No Fresh Edge
- Polymarket Miami/KMIA Jun 13: 88-89F leads at 52%, with 90-91F second at 41%. NWS Miami International shows Saturday high near 91F, but 40% afternoon shower/thunderstorm risk and no clean No/Yes depth on the exact bucket keep this no-entry.
- Polymarket Atlanta/KATL Jun 13: 92-93F is 48% displayed / Buy Yes 49c, with 90-91F at 29% and 94-95F at 20%. NWS Hartsfield-Jackson guidance is high near 92F to 93F with a 20% afternoon storm chance, so the main bucket is close to fair after spread.
- Polymarket Hong Kong Observatory Jun 13: 31C leads at 39% / Buy Yes 39c, with 30C at 31% / Buy Yes 32c. HKO's 00:00 HKT forecast gives a 27-31C range with showers and thunderstorms, leaving 30C and 31C both live and no single bucket clearly cheap.
- Broader Polymarket temperature board: no stronger evidence-supported add surfaced during this pass.

## Recommended Paper Trades

Opened one new paper-only position:
- PT-20260612-128: BUY_YES on Polymarket Chicago/KORD Jun 13 86-87F.
- Simulated size: $5 notional.
- Entry price: 26c.
- Thesis: NWS O'Hare has shifted Saturday guidance to high near 86F, while the market still prices the 86-87F bucket at 26c behind 84-85F.
- Confidence: low-to-medium-low.
- Invalidation risks: KORD settles 84-85F despite the forecast, stronger heating pushes 88F+, wind/cloud timing shifts the station high, Wunderground history differs from NWS point guidance, or current Polymarket depth is stale.

Maintained or updated existing open paper positions:
- PT-20260612-122: Chicago/KORD Jun 13 84-85F YES at 36c; mark weakened/adverse-watch after the official forecast moved toward 86F.
- PT-20260612-127: Houston/KHOU Jun 13 92-93F YES at 28c; maintain, no duplicate at 34c.
- PT-20260612-124: London/EGLC Jun 13 23C YES at 25c; maintain, no duplicate after repricing.
- PT-20260612-126: NYC/KLGA Jun 13 88-89F YES at 37c; maintain but classify as weak.

No real bet or trade was executed.

## Risks and Invalidation Factors
- Exact weather buckets can flip on a one-degree station move.
- Chicago's new 86F-centered forecast supports the hedge but can still miss into 84-85F or 88-89F.
- Houston remains source-disagreed between market consensus near 90-91F and NWS Hobby guidance near 93F.
- London can verify 22C even when the Met Office daily card says 23C if the settlement station history rounds lower.
- NYC market leadership has moved back to 90-91F, weakening the 88-89F paper thesis.
- Miami's 90-91F forecast support is offset by storm timing and a 52% market price on 88-89F without clean executable No depth.
- HKO's 30C/31C split is sensitive to morning showers and one-decimal daily-max resolution.
- Low target-bucket volume and wide Yes/No spreads make most apparent edges impractical beyond tiny paper sizing.

## Sources Used
- Polymarket Chicago Jun 13: https://polymarket.com/de/event/highest-temperature-in-chicago-on-june-13-2026?marketSlug=highest-temperature-in-chicago-on-june-13-2026-84-85f&outcomeIndex=1
- Polymarket Houston Jun 13: https://polymarket.com/zh/event/highest-temperature-in-houston-on-june-13-2026/highest-temperature-in-houston-on-june-13-2026-80-81f
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket NYC Jun 13: https://polymarket.com/predictions/new-york-city
- Polymarket Miami Jun 13: https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- Polymarket Atlanta Jun 13: https://polymarket.com/zh/event/highest-temperature-in-atlanta-on-june-13-2026
- Polymarket Hong Kong Jun 13: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-13-2026
- NWS Chicago O'Hare/KORD: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Miami International/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- NWS Hartsfield-Jackson/KATL: https://forecast.weather.gov/MapClick.php?lat=33.6421&lon=-84.4213
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-12T2008Z.md.
- Created alerts/2026-06-12T2008Z.md.
- Created data/market_snapshots/2026-06-12T2008Z.json.
- Created paper_trading/entries/PT-20260612-128.md.
- Created paper_trading/ledger_appends/2026-06-12T2008Z.csv.
- Created paper_trading/maintenance/2026-06-12T2008Z.md.
- Updated the rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No real-money execution files, wallet connections, orders, or betting actions were created.
