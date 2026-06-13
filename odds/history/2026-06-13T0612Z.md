# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-13 06:12:50
- HKT: 2026-06-13 14:12:50
- Scheduled invocation: 2026-06-13 14:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Polymarket highest-temperature markets: Chicago/O'Hare KORD Jun 13, Houston/Hobby KHOU Jun 13 and Jun 14, London City Airport/EGLC Jun 13, NYC/LaGuardia KLGA Jun 13 and Jun 14, Miami/KMIA, Atlanta/KATL, and Hong Kong Observatory.
- Cross-market check: Kalshi Houston daily-high market for source disagreement against Polymarket Houston Jun 13.
- Official weather evidence: NWS point forecasts for O'Hare, Houston Hobby, and LaGuardia; Met Office London City Airport page; HKO open-data forecast.
- Open paper-trade maintenance: PT-20260612-122, PT-20260612-124, PT-20260612-126, PT-20260612-127, PT-20260612-128, PT-20260612-129, and PT-20260613-130.

## Top Edges

### 1. Polymarket Houston/KHOU Jun 13 92-93F YES

- Current market: Polymarket public pages disagreed, with 92-93F roughly 27%-34%; Kalshi Houston "today" showed the 92-93F bucket much stronger at about 54%-55%.
- Implied probability: quote-quality range about 27%-34% on Polymarket.
- Estimated fair value: 36%-46%.
- Estimated edge: about +2 to +19 percentage points depending on which Polymarket page is live/actionable.
- Confidence: low.
- Classification: moderate represented/source-disagreement edge; no duplicate.
- Key reasoning: NWS Hobby keeps the official high near 92F, which keeps 92-93F live. Kalshi's much higher 92-93F pricing reinforces that the lower Polymarket public surfaces may be underpricing the bucket, but platform/rule/source differences and page conflict make this fragile.
- Liquidity/practicality: Polymarket public quote quality is inconsistent; existing paper entries already represent the thesis.
- Action: maintain PT-20260612-127 and PT-20260612-129 only. No duplicate unless a verified Polymarket quote falls below 24c or KHOU-specific evidence strengthens materially.

### 2. Polymarket Chicago/KORD Jun 13 86-87F YES

- Current market: 84-85F around 41%, 86-87F around 27% with Buy Yes near 28c on the cleaner board; some public snippets showed 86-87F closer to 32%.
- Implied probability: about 27%-32%.
- Estimated fair value: 34%-44%.
- Estimated edge: about +2 to +17 percentage points before exact-bucket and liquidity penalties.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge; no duplicate.
- Key reasoning: NWS O'Hare point pages conflict between highs near 84F and 86F, so the fair value is lower than earlier scans, but 86-87F still screens positive against the cleaner 27%-28c market.
- Liquidity/practicality: exact-bucket risk and public-page disagreement are material.
- Action: maintain PT-20260612-128 only. Keep PT-20260612-122 Chicago/KORD 84-85F YES weakened/adverse-watch.

### 3. Polymarket NYC/KLGA Jun 14 88-89F YES

- Current market: 86-87F leads around 32%-35%; 88-89F around 28%; 84-85F around 18%-19%; 90-91F around 14%-15%.
- Implied probability: about 28%.
- Estimated fair value: 32%-42%.
- Estimated edge: about +4 to +14 percentage points before penalties.
- Confidence: low-to-medium-low.
- Classification: moderate represented edge; no duplicate.
- Key reasoning: NWS LaGuardia shows Sunday high near 88F, keeping 88-89F live. The bucket has moved well above the 18c paper entry, so the fresh-entry edge has narrowed.
- Liquidity/practicality: young forward board, exact-bucket risk, and shower/cloud timing risk.
- Action: maintain PT-20260613-130 only.

### 4. Polymarket Houston/KHOU Jun 14 92-93F YES

- Current market: 90-91F around 28%; 88-89F around 22%; 86-87F around 19%; 92-93F around 14% with Buy Yes near 15c.
- Implied probability: about 14%-15%.
- Estimated fair value: 20%-30%.
- Estimated edge: about +5 to +16 percentage points before penalties.
- Confidence: low.
- Classification: weak-to-moderate watch-only edge.
- Key reasoning: NWS Hobby shows Sunday high near 92F, but likely showers/thunderstorms are a real cap path into 88-91F.
- Liquidity/practicality: target-bucket volume was only about $428 on the readable page and spread quality is poor.
- Action: no paper entry. Recheck only if volume improves or KHOU-specific evidence strengthens while the quote remains in the mid-teens.

### 5. Polymarket London/EGLC Jun 13 23C YES

- Current market: 22C leads around 43%; 23C around 32% with Buy Yes near 33c; 21C around 16%; 24C around 7.5%.
- Implied probability: about 32%-33%.
- Estimated fair value: 35%-45%.
- Estimated edge: about +2 to +13 percentage points before penalties.
- Confidence: low.
- Classification: weak-to-moderate represented edge; no duplicate.
- Key reasoning: London City remains close enough to 23C to keep the bucket live, but 22C remains the market favorite and current pricing is above the existing 25c paper entry.
- Liquidity/practicality: exact-Celsius settlement and hourly/daily forecast differences cap confidence.
- Action: maintain PT-20260612-124 only.

## Watchlist / No Fresh Edge

- NYC/KLGA Jun 13 88-89F: current pricing is closer to fair and already represented by PT-20260612-126.
- Chicago/KORD Jun 14: prior setup looked broadly aligned with official guidance and no stronger refreshed edge displaced the current top list.
- Miami/KMIA and Atlanta/KATL Jun 13/14: no clean mispricing after storm/sea-breeze, adjacent-bucket, and spread risk.
- HKO Jun 13/14: no clean edge; Jun 13 30C was heavily favored around 74%, and the official HKO open-data forecast did not isolate a discounted bucket strongly enough.

## Recommended Paper Trades

No new paper trade is recommended this run.

Maintenance only:

- Maintain PT-20260612-127 and PT-20260612-129 Houston/KHOU Jun 13 92-93F YES from 28c and 26c.
- Maintain PT-20260612-128 Chicago/KORD Jun 13 86-87F YES from 26c.
- Maintain PT-20260612-122 Chicago/KORD Jun 13 84-85F YES from 36c as weakened/adverse-watch.
- Maintain PT-20260613-130 NYC/KLGA Jun 14 88-89F YES from 18c.
- Maintain PT-20260612-124 London/EGLC Jun 13 23C YES from 25c.
- Maintain PT-20260612-126 NYC/KLGA Jun 13 88-89F YES from 37c.

## Risks and Invalidation Factors

- Exact-bucket risk dominates; one degree Fahrenheit or one Celsius can flip the result.
- Polymarket public pages conflicted on several outcomes and direct API access from the workspace was blocked, so quote confidence is capped.
- Houston has the biggest source-disagreement signal, but platform/rule/source differences can explain part of the Kalshi/Polymarket spread.
- Chicago confidence fell because official point pages showed both 84F-ish and 86F-ish guidance.
- Houston Jun 14 can miss low if storms cap afternoon heating.
- NYC Jun 14 can miss low under thicker clouds/showers or high if pre-rain mixing is stronger.
- London exact-Celsius markets remain sensitive to station settlement, rounding, and brief heating windows.

## Sources Used

- Polymarket temperature board: https://polymarket.com/weather/temperature
- Polymarket Chicago Jun 13 86-87F page: https://polymarket.com/event/highest-temperature-in-chicago-on-june-13-2026/highest-temperature-in-chicago-on-june-13-2026-86-87f
- Polymarket NYC prediction markets: https://polymarket.com/predictions/new-york-city
- Polymarket Houston Jun 14 market: https://polymarket.com/es/event/highest-temperature-in-houston-on-june-14-2026
- Kalshi Houston high-temperature market: https://kalshi.com/markets/kxhightemphou/high-temp-houston
- NWS LaGuardia forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- NWS Houston Hobby forecast: https://forecast.weather.gov/MapClick.php?lat=29.6454&lon=-95.2789
- NWS O'Hare forecast: https://forecast.weather.gov/MapClick.php?lat=41.98&lon=-87.9
- Met Office London City Airport forecast: https://weather.metoffice.gov.uk/forecast/u10j124jp
- HKO 9-day forecast API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en

## Repo Log Update

- Updated `odds/latest.md`.
- Created `odds/history/2026-06-13T0612Z.md`.
- Created `alerts/2026-06-13T0612Z.md`.
- Created `data/market_snapshots/2026-06-13T0612Z.json`.
- Created `paper_trading/maintenance/2026-06-13T0612Z.md`.
- Appended the maintenance update to `paper_trading/paper_trade_log.md`.
- Updated paper-trading summaries, watchlist, edge notes, and repo working notes.
- No real bets or trades were executed.
