# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-14 04:07:00
- HKT: 2026-06-14 12:07:00
- Scheduled invocation: 2026-06-14 12:07:00 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Primary watchlist scope: Polymarket station-resolved highest-temperature markets for Hong Kong/HKO Jun 14, Dallas/KDAL Jun 14, Los Angeles/KLAX Jun 14, Austin/KAUS Jun 14, Houston/KHOU Jun 14, Miami/KMIA Jun 14, Chicago/KORD Jun 14, and NYC/KLGA Jun 14.
- Evidence cross-checks: Polymarket public event/search pages; Bitget/Polymarket mirror pages; official NWS point forecasts for US airport stations; HKO regional readings and 9-day/local forecast text.
- Quote-quality note: public prediction-market pages and mirrors can lag executable order books. Where localized Polymarket pages disagree, confidence is capped.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 14 29C YES

- Current price: Polymarket public page shows 29C leading at about 48%, with 30C close behind at about 47%. Total market volume is about $126.2K.
- Implied probability: about 48%.
- Estimated fair value: 55%-65%.
- Estimated edge: roughly +7 to +17 percentage points before boundary and late-heating penalties.
- Confidence: low-to-medium-low.
- Classification: moderate fresh paper edge.
- Key reasoning: HKO regional readings at 11:50 HKT show HK Observatory at 28.9C with a maximum of 29.5C since midnight, while the official forecast keeps heavy rain/showers and squally thunderstorms in the setup. That makes 29C the better-centered live bucket than the market's near-even 29C/30C split.
- Liquidity/practicality notes: Better volume than the US station buckets, but the 29.9C/30.0C boundary is decisive and official readings are provisional until settled.

### 2. Polymarket Dallas/KDAL Jun 14 90-91F YES

- Current price: Bitget/Polymarket mirror shows 90-91F around 17%; 88-89F leads near 32%, 86-87F near 25%, 84-85F near 12%, and 92-93F near 7%.
- Implied probability: about 17%.
- Estimated fair value: 30%-42%.
- Estimated edge: roughly +13 to +25 percentage points before storm, exact-bucket, and mirror-quality penalties.
- Confidence: low.
- Classification: moderate add-on paper edge.
- Key reasoning: NWS point guidance near Dallas/Love Field still shows Sunday high near 91F with showers/storms most likely later in the day, while the market has shifted strongly toward 86-89F. This clears the prior below-18c duplicate trigger, but only barely.
- Liquidity/practicality notes: Existing PT-20260614-144 already covers 90-91F from 21c, so the add-on size stays tiny.

### 3. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: Bitget/Polymarket mirror shows 70-71F around 24%-25%; 72-73F leads near 49%-50%, and 74-75F is around 18%-19%.
- Implied probability: about 25%.
- Estimated fair value: 31%-42%.
- Estimated edge: roughly +6 to +17 points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate add.
- Key reasoning: NWS KLAX still forecasts patchy fog before 11am, gradual clearing, and high near 70F, supporting the 70-71F bucket over the market's 72-73F center.
- Liquidity/practicality notes: PT-20260613-138 already holds 70-71F from 18c; current price is materially worse than entry.

### 4. Polymarket Austin/KAUS Jun 14 92-93F YES

- Current price: last clean context was around 20%-21%; a current direct quote was not cleanly exposed in search results this run.
- Implied probability: quote-quality capped; use about 20%-21% as a partial reference.
- Estimated fair value: 28%-38%.
- Estimated edge: plausible +7 to +18 points if the earlier quote remains live.
- Confidence: low.
- Classification: represented moderate edge; no duplicate add.
- Key reasoning: NWS KAUS still forecasts high near 92F with a 50% chance of showers/thunderstorms after 1pm.
- Liquidity/practicality notes: PT-20260614-146 already holds 92-93F from 21c. No add without a fresh verified sub-18c quote or stronger station evidence.

### 5. Polymarket Miami/KMIA Jun 14 92-93F YES

- Current price: Polymarket page/search context is mixed: one page shows 92-93F around 23%-33%, while Bitget shows 92-93F around 27% and 90-91F as the clear leader near 67%.
- Implied probability: about 27% using the cleaner mirror context, with disagreement noted.
- Estimated fair value: 29%-40%.
- Estimated edge: small-to-moderate but quote-quality capped.
- Confidence: low.
- Classification: represented edge; no duplicate add.
- Key reasoning: NWS KMIA point guidance shows high near 92F with afternoon thunderstorms possible after 2pm. This supports the existing 92-93F paper thesis but no longer screams misprice.
- Liquidity/practicality notes: PT-20260614-145 already holds 92-93F from 24c.

### 6. Polymarket Houston/KHOU Jun 14 92-93F YES / 94-95F YES

- Current price: public Polymarket surfaces disagree. English FAQ context shows 88-89F and 90-91F tied around 35%; a localized Polymarket surface shows 92-93F near 8%-9% and 94-95F near 1.8%.
- Implied probability: about 9% for 92-93F and about 1.8% for 94-95F on the localized surface.
- Estimated fair value: 14%-24% for 92-93F; 3%-7% for 94-95F.
- Estimated edge: raw positive but heavily storm-risk-adjusted.
- Confidence: low.
- Classification: represented warm-tail cluster; no fresh add.
- Key reasoning: NWS Houston/Hobby shows high near 93F but also 80% chance of showers/thunderstorms, including likely storms before and during peak heating. The cheaper 92-93F price is tempting but the weather evidence worsened.
- Liquidity/practicality notes: PT-20260613-140 covers 92-93F and PT-20260613-143 covers 94-95F. No duplicate while source pages disagree and storm risk is central.

### 7. Polymarket Chicago/KORD Jun 14 72-73F YES

- Current price: Bitget/Polymarket mirror shows 72-73F around 37%, 70-71F around 24%, and 74-75F around 18%.
- Implied probability: about 37%.
- Estimated fair value: 40%-49%.
- Estimated edge: roughly +3 to +12 points.
- Confidence: low-to-medium-low.
- Classification: mild watch-only hedge.
- Key reasoning: NWS O'Hare forecasts a 20% early shower chance, then gradual clearing and high near 72F. That favors 72-73F over the existing 70-71F paper entry.
- Liquidity/practicality notes: No hedge because the edge is small after exact-boundary risk.

### 8. Polymarket NYC/KLGA Jun 14 88-89F YES

- Current price: related Polymarket context shows 88-89F around 47%.
- Implied probability: about 47%.
- Estimated fair value: 43%-53%.
- Estimated edge: near fair to small positive.
- Confidence: low.
- Classification: represented/no-add.
- Key reasoning: NWS LaGuardia forecasts high near 88-89F with increasing clouds and gusty south winds.
- Liquidity/practicality notes: PT-20260613-130 already holds 88-89F from 18c; current price is far worse than entry.

## Recommended Paper Trades

Opened two paper-only simulated positions:

- PT-20260614-147: BUY_YES on Polymarket Hong Kong/HKO Jun 14 29C at 48c displayed context, $5 simulated notional. Thesis: live HKO max was only 29.5C at 11:50 HKT under a heavy-rain/thunderstorm setup, while market price was still nearly tied with 30C. Confidence low-to-medium-low. Invalidation: any 30.0C+ official HKO print, late bright breaks, provisional data revision, or settlement interpretation risk.
- PT-20260614-148: BUY_YES on Polymarket Dallas/KDAL Jun 14 90-91F at 17c mirror context, $5 simulated notional. Thesis: NWS point guidance remains near 91F while the market shifted toward 86-89F. Confidence low. Invalidation: storms/clouds cap the station below 90F, late heating reaches 92F+, mirror quote is stale, or Wunderground differs from NWS guidance.

Maintenance actions:

- Maintain PT-20260613-138 LA/KLAX Jun 14 70-71F YES at 18c entry.
- Maintain PT-20260614-146 Austin/KAUS Jun 14 92-93F YES at 21c entry.
- Maintain PT-20260614-145 Miami/KMIA Jun 14 92-93F YES at 24c entry.
- Maintain PT-20260613-140 Houston/KHOU Jun 14 92-93F YES at 12c entry and PT-20260613-143 Houston/KHOU Jun 14 94-95F YES at 1.9c entry.
- Maintain PT-20260614-144 Dallas/KDAL Jun 14 90-91F YES at 21c entry and PT-20260613-142 Dallas/KDAL Jun 14 92-93F YES at 10c entry, now partially hedged by PT-20260614-148.
- Maintain/weaken PT-20260613-141 Chicago/KORD Jun 14 70-71F YES because 72-73F is now better centered.
- Maintain PT-20260613-130 NYC/KLGA Jun 14 88-89F YES at 18c entry.

## Risks and Invalidation Factors

- Exact-bucket misses by one degree dominate every listed weather market.
- Public prediction-market pages and mirrors can lag or disagree with executable order books.
- Polymarket US airport temperature markets resolve using Wunderground station histories; NWS forecasts are proxies, not settlement sources.
- HKO readings are provisional and the 29.9C/30.0C boundary is decisive.
- Dallas, Austin, Houston, and Miami are storm-timing markets as much as temperature markets.
- LA depends on marine-layer depth and clearing timing.
- Chicago's prior 70-71F thesis has weakened because 72-73F is closer to the official forecast center.

## Sources Used

- Polymarket Hong Kong Jun 14: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-14-2026
- HKO regional readings: https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm
- HKO 9-day forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- Bitget/Polymarket Dallas Jun 14 mirror: https://web3.bitget.com/pt/predictions/event/highest-temperature-in-dallas-on-june-14-2026
- NWS Dallas forecast context: https://forecast.weather.gov/MapClick.php?lat=32.850084&lon=-96.79310799999996
- Bitget/Polymarket LA Jun 14 mirror: https://web3.bitget.com/zh/predictions/event/highest-temperature-in-los-angeles-on-june-14-2026
- NWS KLAX forecast: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409
- NWS KAUS forecast: https://forecast.weather.gov/MapClick.php?lat=30.2&lon=-97.68
- Polymarket/Bitget Miami Jun 14: https://polymarket.com/event/highest-temperature-in-miami-on-june-14-2026 and https://web3.bitget.com/ar/predictions/event/highest-temperature-in-miami-on-june-14-2026
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- NWS Houston/Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.7687&textField2=-95.3867
- Bitget/Polymarket Chicago Jun 14 mirror: https://web3.bitget.com/predictions/event/highest-temperature-in-chicago-on-june-14-2026
- NWS O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- NWS LaGuardia forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88

## Repo Log Update

- Updated latest odds snapshot.
- Created the 2026-06-14T0407Z history entry, alert, JSON market snapshot, two paper-trading entries, ledger append, and maintenance note.
- Updated rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes in the memory folder for continuity.
- No real bets or trades were executed.
