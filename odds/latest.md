# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-14 09:08:22
- HKT: 2026-06-14 17:08:22
- Scheduled invocation: 2026-06-14 17:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Primary watchlist scope: Polymarket same-day highest-temperature markets for Hong Kong/HKO Jun 14, Los Angeles/KLAX Jun 14, Chicago/KORD Jun 14, Miami/KMIA Jun 14, Houston/KHOU Jun 14, NYC/KLGA Jun 14, Austin/KAUS Jun 14, and Dallas/KDAL Jun 14.
- Opportunistic cross-checks: Polymarket/Kalshi-linked search context for Denver, Atlanta, and Houston daily temperature markets. No off-watchlist market cleared confidence and quote-quality filters.
- Evidence cross-checks: Polymarket public event/search pages; official HKO regional readings; official NWS point forecasts and current-condition pages for relevant airport stations; Kalshi public weather-market context where available.
- Quote-quality note: public prediction-market pages can lag executable order books. Confidence is capped where a target bucket did not load cleanly or market surfaces disagreed.

## Top Edges

### 1. Polymarket Los Angeles/KLAX Jun 14 70-71F YES

- Current price: 70-71F about 37%; 72-73F leads around 56%. Total market volume about $14.6K.
- Implied probability: about 37%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +5 to +15 percentage points before spread and exact-bucket penalties.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate add.
- Key reasoning: NWS KLAX still forecasts patchy fog before 11am, then gradual clearing, with a high near 70F. Current conditions showed KLAX overcast at 63F at 01:00 PDT, keeping the marine-layer/cool-bucket thesis alive.
- Liquidity/practicality notes: PT-20260613-138 already holds 70-71F from 18c. The current quote is much worse than the paper entry, so no duplicate.

### 2. Polymarket Chicago/KORD Jun 14 72-73F YES

- Current price: 72-73F about 33%; 70-71F about 36%. Total market volume about $23K.
- Implied probability: about 33%.
- Estimated fair value: 38%-48% for 72-73F; 30%-40% for 70-71F.
- Estimated edge: roughly +5 to +15 points on 72-73F, but partly offset by adjacent-bucket risk.
- Confidence: low-to-medium-low.
- Classification: represented cluster; no duplicate add.
- Key reasoning: NWS O'Hare-area guidance now centers around a high near 72F after morning showers, with cloudy conditions gradually becoming mostly sunny and breezy northwest flow. That shifts the center of gravity toward the 72-73F hedge rather than the older 70-71F leg.
- Liquidity/practicality notes: PT-20260614-149 already holds 72-73F from 35c and PT-20260613-141 holds 70-71F from 30c. A 33c quote is only slightly better than the existing 35c hedge and does not clear the duplicate threshold.

### 3. Polymarket Dallas/KDAL Jun 14 88-89F YES

- Current price: 88-89F about 35% on the readable Bitget/Polymarket mirror; 86-87F about 29%; 90-91F about 18%; 92-93F about 7%. Total mirrored volume about $20.8K.
- Implied probability: about 35%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +3 to +13 points, low quality.
- Confidence: low.
- Classification: weak-to-moderate unrepresented hedge; watch only.
- Key reasoning: NWS Dallas Love Field shows overcast 81F at 03:53 CDT and a high near 89F with showers/thunderstorms becoming more likely through the day. That weakens the open 90-91F paper entries and makes 88-89F better centered.
- Liquidity/practicality notes: no new hedge because storms can cap 86-87F or lower, while late clearing can still allow 90-91F. The edge is not strong enough to add more Dallas exposure.

### 4. Polymarket Miami/KMIA Jun 14 92-93F YES

- Current price: 92-93F about 33%; 90-91F leads around 56%.
- Implied probability: about 33%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly +3 to +13 points.
- Confidence: low.
- Classification: represented moderate edge; no duplicate add.
- Key reasoning: NWS KMIA forecasts a high near 92F with a 40% chance of showers and thunderstorms after 2pm. The 92-93F bucket remains live, but the 90-91F miss path is still substantial if sea breeze or storms arrive early.
- Liquidity/practicality notes: PT-20260614-145 already holds 92-93F from 24c; no add at a higher current quote.

### 5. Polymarket Houston/KHOU Jun 14 92-93F / warm-tail cluster

- Current price: Houston market leader is 90-91F around 49%, with 88-89F around 31%; target 92-93F quote quality was not clean in the fresh search-rendered page, but prior readable context had it in the high-teens. Kalshi's comparable Houston today page shows 91-92F around 46% and 89-90F around 42%.
- Implied probability: quote-quality capped; use high-teens as stale target context only.
- Estimated fair value: 20%-30% for Polymarket 92-93F; 3%-7% for 94-95F.
- Estimated edge: potentially positive but not clean enough for a fresh add.
- Confidence: low.
- Classification: represented warm-tail cluster; no duplicate add.
- Key reasoning: NWS Hobby-area guidance still shows a high near 93F, but showers and thunderstorms are likely mainly after 1pm with a 70% precipitation probability. This is a storm-timing market as much as a temperature market.
- Liquidity/practicality notes: PT-20260613-140 covers 92-93F from 12c and PT-20260613-143 covers 94-95F from 1.9c. No duplicate while target quote quality is capped and current market context has shifted toward 90-91F.

### 6. Polymarket NYC/KLGA Jun 14 88-89F YES

- Current price: last readable same-day context was around 51%-52%; no cleaner fresh target quote was exposed during this pass.
- Implied probability: about 52% on the latest readable quote context.
- Estimated fair value: 55%-63%.
- Estimated edge: roughly +3 to +11 points, but now mostly priced.
- Confidence: low-to-medium-low.
- Classification: represented/no-add.
- Key reasoning: NWS LaGuardia forecasts a high near 89F with strengthening south wind. This still supports 88-89F, but the market has largely caught up.
- Liquidity/practicality notes: PT-20260613-130 already holds 88-89F from 18c; no duplicate at current levels.

### 7. Polymarket Austin/KAUS Jun 14 92-93F YES

- Current price: 92-93F about 49%; 90-91F about 39%. Total volume about $16.6K.
- Implied probability: about 49%.
- Estimated fair value: 45%-55%.
- Estimated edge: near fair.
- Confidence: low.
- Classification: represented/no-add.
- Key reasoning: NWS KAUS forecasts a high near 92F with showers and thunderstorms likely from 1pm onward. The market now prices that center well.
- Liquidity/practicality notes: PT-20260614-146 remains open from 21c; no duplicate at 49c.

### 8. Polymarket Hong Kong/HKO Jun 14 29C YES

- Current price: 29C 98.8%-99%; Buy Yes 99.5c; 30C about 1%; Buy Yes 1.8c. Total volume about $168.6K.
- Implied probability: about 99.5% at the readable Buy Yes.
- Estimated fair value: 99.0%-99.7%.
- Estimated edge: no add at the offer.
- Confidence: low-to-medium-low.
- Classification: represented/no-add after convergence.
- Key reasoning: HKO regional readings at 17:00 HKT show HK Observatory current 29.1C and max/min since midnight of 29.5C / 28.3C. The market has converged close to the observed path, with only final Daily Extract and 30.0C boundary risk remaining.
- Liquidity/practicality notes: maintain PT-20260614-147 from 48c. No duplicate near 99.5c.

## Recommended Paper Trades

No new paper trade is recommended this hour. The best raw signals are already represented in the paper book at better entries, and the one fresh hedge candidate, Dallas/KDAL 88-89F, is too thin after storm, exact-bucket, quote-quality, and concentration haircuts.

Maintenance actions:

- Maintain PT-20260613-138 LA/KLAX Jun 14 70-71F YES at 18c.
- Maintain PT-20260614-149 Chicago/KORD Jun 14 72-73F YES at 35c and PT-20260613-141 Chicago/KORD Jun 14 70-71F YES at 30c as a narrow 70-73F cluster.
- Maintain but weaken PT-20260614-144 and PT-20260614-148 Dallas/KDAL Jun 14 90-91F YES because updated guidance centers closer to 88-89F.
- Maintain PT-20260614-145 Miami/KMIA Jun 14 92-93F YES at 24c.
- Maintain PT-20260613-140/PT-20260613-143 Houston/KHOU Jun 14 92-93F and 94-95F warm-tail entries.
- Maintain PT-20260613-130 NYC/KLGA Jun 14 88-89F YES at 18c.
- Maintain PT-20260614-146 Austin/KAUS Jun 14 92-93F YES at 21c.
- Maintain PT-20260614-147 HKO Jun 14 29C YES at 48c; no add near 99.5c.

## Risks and Invalidation Factors

- Exact-bucket misses by one degree dominate every listed weather market.
- Public Polymarket pages can lag or disagree with executable order books.
- Polymarket US airport temperature markets resolve using Wunderground station histories; NWS forecasts are proxies, not settlement sources.
- HKO readings are provisional and the final Daily Extract has not yet posted.
- Dallas, Austin, Houston, and Miami are storm-timing markets as much as temperature markets.
- LA depends on marine-layer depth and clearing timing.
- Chicago is a two-bucket cluster thesis, not confidence in a single exact bucket.

## Sources Used

- Polymarket Hong Kong Jun 14: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-14-2026
- HKO regional readings: https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- NWS KLAX forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409
- Polymarket Chicago Jun 14: https://polymarket.com/event/highest-temperature-in-chicago-on-june-14-2026
- NWS O'Hare forecast: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Dallas Jun 14 mirror context: https://web3.bitget.com/zh/predictions/event/highest-temperature-in-dallas-on-june-14-2026
- NWS Dallas/Love Field forecast: https://forecast.weather.gov/MapClick.php?lat=32.7782&lon=-96.7951
- Polymarket Miami Jun 14: https://polymarket.com/event/highest-temperature-in-miami-on-june-14-2026
- NWS KMIA forecast: https://forecast.weather.gov/MapClick.php?lat=25.79056&lon=-80.31639
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- Kalshi Houston daily high context: https://kalshi.com/markets/kxhighthou/daily-high-temperature-houston/kxhighthou-26jun14
- NWS Houston/Hobby forecast: https://forecast.weather.gov/MapClick.php?textField1=29.7687&textField2=-95.3867
- Polymarket NYC Jun 14: https://polymarket.com/event/highest-temperature-in-nyc-on-june-14-2026
- NWS LaGuardia forecast: https://forecast.weather.gov/MapClick.php?lat=40.77917&lon=-73.88
- Polymarket Austin Jun 14: https://polymarket.com/event/highest-temperature-in-austin-on-june-14-2026
- NWS KAUS forecast: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=30.1831&lg=english&lon=-97.6799

## Repo Log Update

- Updated latest odds snapshot.
- Created the 2026-06-14T0908Z history entry, alert, JSON market snapshot, and paper-trading maintenance note.
- Updated rolling paper-trade log, paper-trade summaries, watchlist, edge notes, and repo working notes.
- No new paper-only position was opened and no ledger append was created.
- No real bets or trades were executed.