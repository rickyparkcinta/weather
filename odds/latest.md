# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 22:08:07
- HKT: 2026-06-13 06:08:07
- Scheduled invocation: 2026-06-13 06:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: Chicago/O'Hare KORD, Houston/Hobby KHOU, London City Airport/EGLC, NYC/LaGuardia KLGA, Miami/KMIA, Atlanta/KATL, and Hong Kong Observatory.
- Broader Polymarket weather-board context where surfaced during the scan.
- Official forecast/current-weather evidence: NWS KORD, KHOU, KLGA, KMIA, KATL; Met Office London City Airport; HKO 9-day forecast and current weather API.
- Maintenance checks on open Jun 13 paper positions: PT-20260612-122, PT-20260612-124, PT-20260612-126, PT-20260612-127, PT-20260612-128, and PT-20260612-129.

## Top Edges

### 1. Polymarket Chicago/KORD Jun 13 86-87F YES
- Current market: 84-85F leads at 45%; 86-87F is 29% displayed / Buy Yes 30c / Buy No 72c.
- Implied probability: 30% using Buy Yes.
- Estimated fair value: 40%-50%.
- Estimated edge: +10 to +20 percentage points before exact-bucket and liquidity penalties.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare shows Saturday sunny with a high near 86F and southwest gusts up to 25 mph. That keeps the 86-87F bucket live despite the market still making 84-85F the favorite. The price has moved against the 26c PT-20260612-128 entry, so this is maintenance rather than a fresh add.
- Liquidity/practicality: target-bucket volume is thin at about $619; exact-bucket risk remains high.
- Action: maintain PT-20260612-128 only. Keep PT-20260612-122 Chicago 84-85F YES weakened/adverse-watch.

### 2. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 90-91F leads at 47%; 92-93F is 27% displayed / Buy Yes 28c / Buy No 75c.
- Implied probability: 28% using Buy Yes.
- Estimated fair value: 34%-44%.
- Estimated edge: +6 to +16 percentage points before exact-bucket and liquidity penalties.
- Confidence: low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS Houston Hobby still shows Saturday mostly sunny with a high near 93F, while Polymarket remains centered one bucket lower at 90-91F. The market also notes model/forecast disagreement around 91-92F and elevated 88-89F downside, so confidence stays capped.
- Liquidity/practicality: event volume is about $6.1K and target-bucket volume is about $896; Yes/No spread remains wide.
- Action: maintain PT-20260612-127 and PT-20260612-129 only. No add because the quote is worse than the 26c add-on and does not meet the below-24c duplicate threshold.

### 3. Polymarket London/EGLC Jun 13 23C YES
- Current market: 22C leads at 39%; 23C is 35% displayed / Buy Yes 36c / Buy No 67c.
- Implied probability: 36% using Buy Yes.
- Estimated fair value: 38%-48%.
- Estimated edge: +2 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport still lists Saturday maximum daytime temperature at 23C, and Polymarket's own market context clusters the outcome tightly around 22C/23C. The market has mostly caught up from the 25c PT-20260612-124 entry.
- Liquidity/practicality: event volume is about $42.5K, but exact-Celsius and Wunderground station-history risk cap sizing.
- Action: maintain PT-20260612-124 only.

### 4. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 88-89F leads at 40%; Buy Yes 41c / Buy No 62c. 90-91F is second at 34% / Buy Yes 35c.
- Implied probability: 41% using Buy Yes.
- Estimated fair value: 42%-50%.
- Estimated edge: +1 to +9 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak represented edge / no duplicate.
- Key reasoning: NWS LaGuardia shows Saturday sunny with a high near 89F, supporting the 88-89F bucket. Current pricing is now close to fair and above the 37c PT-20260612-126 entry.
- Liquidity/practicality: event volume is modest, and exact-bucket risk around 90F remains meaningful.
- Action: maintain PT-20260612-126 only.

## Watchlist / No Fresh Edge
- Polymarket Miami/KMIA Jun 13: 88-89F leads at 50% / Buy Yes 51c, while 90-91F is 40% / Buy Yes 41c. NWS Miami International shows Saturday high near 91F with 40% afternoon showers/thunderstorms. The 90-91F bucket is plausible but not clearly cheap after storm timing and exact-bucket risk.
- Polymarket Atlanta/KATL Jun 13: 92-93F leads at 55% / Buy Yes 57c, while NWS Hartsfield-Jackson shows Saturday high near 93F with only a 20% afternoon storm chance. The main bucket looks close to fair after spread, with 94-95F overshoot still live.
- Polymarket Hong Kong Observatory Jun 13: 29C leads at 33% / Buy Yes 34c, followed by 30C at 29% / Buy Yes 30c and 31C at 25% / Buy Yes 25c. HKO forecasts 26-30C with heavy showers/thunderstorms early, and the 06:00 HKT live table showed 27C at the Observatory plus Amber Rainstorm and Thunderstorm warnings. No single bucket is clearly mispriced.
- Broader Polymarket temperature board: no stronger evidence-supported add surfaced during this pass.

## Recommended Paper Trades

No new paper trade is recommended this run.

Maintained or updated existing open paper positions:
- PT-20260612-128: Chicago/KORD Jun 13 86-87F YES at 26c; maintain, no duplicate at 30c.
- PT-20260612-122: Chicago/KORD Jun 13 84-85F YES at 36c; keep weakened/adverse-watch.
- PT-20260612-127: Houston/KHOU Jun 13 92-93F YES at 28c; maintain.
- PT-20260612-129: Houston/KHOU Jun 13 92-93F YES at 26c; maintain, no duplicate above the below-24c trigger.
- PT-20260612-124: London/EGLC Jun 13 23C YES at 25c; maintain.
- PT-20260612-126: NYC/KLGA Jun 13 88-89F YES at 37c; maintain, now near fair.

No real bet or trade was executed.

## Risks and Invalidation Factors
- Exact weather buckets can flip on a one-degree station move.
- Chicago's 86F-centered forecast can still settle 84-85F if the station underheats, or 88F+ if southwest flow overperforms.
- Houston remains source-disagreed between market consensus near 90-91F and NWS Hobby guidance near 93F.
- London can verify 22C even when the Met Office daily card says 23C if the settlement station history rounds lower.
- NYC is close to fair and can miss into 90-91F with slightly stronger heating.
- Miami and Atlanta have official-forecast support near the main bucket, but market prices already reflect most of it.
- HKO is highly sensitive to early heavy showers, later clearing, and one-decimal daily-max resolution.
- Low target-bucket volume and wide Yes/No spreads make most apparent edges impractical beyond tiny paper sizing.

## Sources Used
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- Polymarket Atlanta Jun 13: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-13-2026
- Polymarket Hong Kong Jun 13: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-13-2026
- NWS Chicago O'Hare/KORD: https://forecast.weather.gov/MapClick.php?lat=41.97959000000003&lon=-87.90445999999997
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Miami International/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- NWS Hartsfield-Jackson/KATL: https://forecast.weather.gov/MapClick.php?lat=33.64028&lon=-84.42694
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-12T2208Z.md.
- Created alerts/2026-06-12T2208Z.md.
- Created data/market_snapshots/2026-06-12T2208Z.json.
- Created paper_trading/maintenance/2026-06-12T2208Z.md.
- Updated the rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No ledger append or new paper-trading entry was created because no fresh paper position cleared the entry threshold.
- No real-money execution files, wallet connections, orders, or betting actions were created.
