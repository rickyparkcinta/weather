# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-12 21:13:34
- HKT: 2026-06-13 05:13:34
- Scheduled invocation: 2026-06-13 05:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket Jun 13 highest-temperature markets: Houston/Hobby KHOU, Chicago/O'Hare KORD, London City Airport/EGLC, NYC/LaGuardia KLGA, Miami/KMIA, Atlanta/KATL, and Hong Kong Observatory.
- Broader Polymarket weather-board context where surfaced during the scan.
- Maintenance checks on open Jun 13 paper positions: PT-20260612-122, PT-20260612-124, PT-20260612-126, PT-20260612-127, and PT-20260612-128.

## Top Edges

### 1. Polymarket Houston/KHOU Jun 13 92-93F YES
- Current market: 90-91F leads at 41%; 92-93F is 25% displayed / Buy Yes 26c / Buy No 76c.
- Implied probability: 26% using Buy Yes.
- Estimated fair value: 38%-48%.
- Estimated edge: +12 to +22 percentage points before exact-bucket and liquidity penalties.
- Confidence: low.
- Classification: moderate paper-only edge, but thin and source-disagreed.
- Key reasoning: NWS Houston Hobby still shows Saturday mostly sunny with a high near 93F, while Polymarket has repriced 92-93F down from the prior 34c area to 26c and still centers the board on 90-91F. This is a better price than the existing PT-20260612-127 28c entry, but the thesis remains fragile because official forecast wording, market context, and storm/cloud timing disagree by a bucket.
- Liquidity/practicality: event volume is about $5.6K and the target bucket has about $817 volume. The Yes/No spread and low bucket depth justify only a tiny paper add-on.
- Action: opened PT-20260612-129, a $5 simulated YES add-on at 26c. No real trade or bet was executed.

### 2. Polymarket Chicago/KORD Jun 13 86-87F YES
- Current market: 84-85F leads at 42%; 86-87F is 25% displayed / Buy Yes 26c / Buy No 77c.
- Implied probability: 26% using Buy Yes.
- Estimated fair value: 38%-48%.
- Estimated edge: +12 to +22 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge / no duplicate.
- Key reasoning: NWS O'Hare continues to show Saturday sunny with a high near 86F and southwest gusts up to 25 mph, while the market still prefers 84-85F. The same setup supported PT-20260612-128 last hour; the price has not improved enough for another paper add.
- Liquidity/practicality: target-bucket volume is thin at about $459.
- Action: maintain PT-20260612-128 only. Keep PT-20260612-122 Chicago 84-85F YES weakened/adverse-watch.

### 3. Polymarket London/EGLC Jun 13 23C YES
- Current market: 22C leads at 38%; 23C is 36% displayed / Buy Yes 37c / Buy No 66c.
- Implied probability: 37% using Buy Yes.
- Estimated fair value: 38%-48%.
- Estimated edge: +1 to +11 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak-to-moderate represented edge / no duplicate.
- Key reasoning: Met Office London City Airport still lists Saturday maximum daytime temperature at 23C, but the hourly table is tight around 22C/23C and Wunderground exact-Celsius settlement risk remains material. The market has largely caught up from the 25c PT-20260612-124 entry.
- Liquidity/practicality: event volume is about $39.9K, but exact-Celsius risk caps sizing.
- Action: maintain PT-20260612-124 only.

### 4. Polymarket NYC/KLGA Jun 13 88-89F YES
- Current market: 88-89F leads at 39%; Buy Yes 40c / Buy No 63c. 90-91F is close behind at 36%.
- Implied probability: 40% using Buy Yes.
- Estimated fair value: 40%-50%.
- Estimated edge: 0 to +10 percentage points.
- Confidence: low-to-medium-low.
- Classification: weak represented edge / no duplicate.
- Key reasoning: NWS LaGuardia shows Saturday sunny with a high near 89F, supporting the 88-89F bucket. The problem is that the market is now close to fair after repricing above the 37c PT-20260612-126 entry.
- Liquidity/practicality: event volume is about $9.0K.
- Action: maintain PT-20260612-126 only.

## Watchlist / No Fresh Edge
- Polymarket Miami/KMIA Jun 13: 88-89F leads at 52% / Buy Yes 53c, while 90-91F is 41% / Buy Yes 42c. NWS Miami International shows Saturday high near 91F with 40% afternoon showers/thunderstorms. The 90-91F bucket is plausible but not clearly cheap after storm timing and exact-bucket risk.
- Polymarket Atlanta/KATL Jun 13: the Atlanta category page shows 92-93F around 45% with about $3.9K volume and $29.2K liquidity; NWS KATL point forecasts range from high near 92F to 93F with a small afternoon storm chance. Without a clean full event page/depth refresh, this stays no-entry.
- Polymarket Hong Kong Observatory Jun 13: 31C leads at 39% / Buy Yes 40c, with 30C at 32% / Buy Yes 33c and 29C at 15% / Buy Yes 16c. HKO's 00:00 HKT forecast gives 27-31C with morning/night showers and thunderstorms; the 04:00 HKT live reading at the Observatory was only 27C with a Thunderstorm Warning active. No single bucket is clearly mispriced.
- Broader Polymarket temperature board: no stronger evidence-supported add surfaced during this pass.

## Recommended Paper Trades

Opened one new paper-only position:
- PT-20260612-129: BUY_YES on Polymarket Houston/KHOU Jun 13 92-93F.
- Simulated size: $5 notional.
- Entry price: 26c.
- Thesis: NWS Hobby remains near 93F while the market repriced 92-93F down to 26c and keeps 90-91F as the leader.
- Confidence: low.
- Invalidation risks: KHOU settles 90-91F because clouds/showers cap heating, the station reaches only 91F despite the point forecast, convection timing shifts earlier, Wunderground history differs from the NWS point forecast, or the visible quote is stale.

Maintained or updated existing open paper positions:
- PT-20260612-127: Houston/KHOU Jun 13 92-93F YES at 28c; still open, now joined by tiny add-on PT-20260612-129.
- PT-20260612-128: Chicago/KORD Jun 13 86-87F YES at 26c; maintain, no duplicate.
- PT-20260612-122: Chicago/KORD Jun 13 84-85F YES at 36c; keep weakened/adverse-watch.
- PT-20260612-124: London/EGLC Jun 13 23C YES at 25c; maintain.
- PT-20260612-126: NYC/KLGA Jun 13 88-89F YES at 37c; maintain, now close to fair.

No real bet or trade was executed.

## Risks and Invalidation Factors
- Exact weather buckets can flip on a one-degree station move.
- Houston's edge depends on KHOU landing 92F or 93F; 90-91F remains very live if clouds or showers cap the high.
- Chicago 86-87F is still a live adjacent-bucket hedge, but 84-85F remains the market leader and could still settle.
- London can verify 22C even when the Met Office daily card says 23C if the settlement station history rounds lower.
- NYC is now near fair after 88-89F moved to the lead.
- Miami and Atlanta both have official-forecast support near the main bucket, but market pricing is close enough to fair after spread and weather uncertainty.
- HKO's 30C/31C/32C split is sensitive to morning showers, later clearing, and one-decimal daily-max resolution.
- Low target-bucket volume and wide Yes/No spreads make most apparent edges impractical beyond tiny paper sizing.

## Sources Used
- Polymarket Houston Jun 13: https://polymarket.com/event/highest-temperature-in-houston-on-june-13-2026
- Polymarket Chicago Jun 13: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026
- Polymarket London Jun 13: https://polymarket.com/event/highest-temperature-in-london-on-june-13-2026
- Polymarket NYC Jun 13: https://polymarket.com/event/highest-temperature-in-nyc-on-june-13-2026
- Polymarket Miami Jun 13: https://polymarket.com/event/highest-temperature-in-miami-on-june-13-2026
- Polymarket Atlanta category page: https://polymarket.com/predictions/atlanta
- Polymarket Hong Kong Jun 13: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-13-2026
- NWS Chicago O'Hare/KORD: https://forecast.weather.gov/MapClick.php?lat=41.97959000000003&lon=-87.90445999999997
- NWS Houston Hobby/KHOU: https://forecast.weather.gov/MapClick.php?textField1=29.65&textField2=-95.28
- NWS LaGuardia/KLGA: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Miami International/KMIA: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- NWS Hartsfield-Jackson/KATL: https://forecast.weather.gov/zipcity.php?inputstring=KATL
- Met Office London City Airport: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-12T2113Z.md.
- Created alerts/2026-06-12T2113Z.md.
- Created data/market_snapshots/2026-06-12T2113Z.json.
- Created paper_trading/entries/PT-20260612-129.md.
- Created paper_trading/ledger_appends/2026-06-12T2113Z.csv.
- Created paper_trading/maintenance/2026-06-12T2113Z.md.
- Updated the rolling paper-trading log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- No real-money execution files, wallet connections, orders, or betting actions were created.
