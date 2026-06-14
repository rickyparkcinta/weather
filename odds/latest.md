# Odds Market Snapshot

## Time Checked

- UTC: 2026-06-14 12:12:25
- HKT: 2026-06-14 20:12:25
- Scheduled invocation: 2026-06-14 20:07:01 HKT
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored

- Primary watchlist scope: Polymarket same-day highest-temperature markets for Dallas/KDAL, Atlanta/KATL, Chicago/KORD, Houston/KHOU, NYC/KLGA, Los Angeles/KLAX, Miami/KMIA, Austin/KAUS, Hong Kong/HKO, plus light checks on San Francisco/KSFO, Denver/KBKF, and Seattle/KSEA where visible.
- Cross-checks: official NWS point forecasts/current conditions, HKO current readings/search context, prior logged Kalshi/Polymarket Houston context, and previous paper-position state.
- Quote-quality note: public prediction-market pages can lag executable order books and sometimes disagree by route. Confidence is capped where target-bucket depth was not fully visible.

## Top Edges

### 1. Polymarket Dallas/KDAL Jun 14 84-85F YES

- Current price: 84-85F displayed around 3%; Buy Yes 5.0c. Nearby buckets: 88-89F 32% / Buy Yes 33.0c, 86-87F 27% / Buy Yes 27.0c, 90-91F 19% / Buy Yes 20.0c, 92-93F 5% / Buy Yes 6.6c. Total market volume about $23.3K.
- Implied probability: about 5% at the ask.
- Estimated fair value: 18%-30%.
- Estimated edge: about +13 to +25 percentage points before exact-bucket, storm, source, and quote-quality penalties.
- Confidence: low-to-medium-low.
- Classification: strongest fresh paper-only hedge.
- Key reasoning: NWS Dallas Love Field shows mostly cloudy 79F at 05:53 CDT and forecasts showers/thunderstorms with a high near 85F. The market is still centered much warmer around 88-89F and 86-87F.
- Liquidity/practicality notes: opened PT-20260614-151 as a $5 simulated YES only. This offsets weakened existing Dallas warm entries; it is not a real trade.

### 2. Polymarket Atlanta/KATL Jun 14 90-91F YES

- Current price: 90-91F displayed around 10%; Buy Yes 11.0c. 88-89F leads at 55%.
- Implied probability: about 11%.
- Estimated fair value: 25%-37%.
- Estimated edge: about +14 to +26 points before penalties.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate add.
- Key reasoning: NWS KATL shows 78F at 06:52 EDT and high near 91F with storms mainly after 2pm, supporting 90-91F more than the market leader.
- Liquidity/practicality notes: PT-20260614-150 already holds 90-91F from 12c; the 1c improvement is not enough for another add.

### 3. Polymarket Chicago/KORD Jun 14 72-73F YES

- Current price: 72-73F about 31%; Buy Yes 32.0c. 70-71F leads at 38% / Buy Yes 39.0c.
- Implied probability: about 32%.
- Estimated fair value: 38%-48%.
- Estimated edge: about +6 to +16 points before boundary penalties.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no duplicate add.
- Key reasoning: NWS O'Hare shows light rain and 65F at 05:51 CDT with showers ending, gradual clearing, and high near 72F. The 70-73F cluster remains live.
- Liquidity/practicality notes: PT-20260614-149 already holds 72-73F from 35c and PT-20260613-141 holds 70-71F from 30c. No duplicate while exact boundary risk remains high.

### 4. Polymarket Houston/KHOU Jun 14 92-93F YES / Warm Cluster

- Current price: Polymarket visible leader remains 90-91F around 51% / Buy Yes 52c, with 88-89F around 29% / Buy Yes 30c and 92-93F previously around the mid-teens.
- Implied probability: roughly mid-teens for 92-93F on the monitored pages.
- Estimated fair value: 20%-30% for 92-93F; 3%-7% for 94-95F.
- Estimated edge: modest but source- and storm-capped.
- Confidence: low.
- Classification: represented warm-tail cluster; no duplicate add.
- Key reasoning: NWS Hobby shows partly cloudy 81F at 05:53 CDT and forecasts high near 93F, but showers/thunderstorms likely mainly after 1pm.
- Liquidity/practicality notes: PT-20260613-140 covers 92-93F from 12c and PT-20260613-143 covers 94-95F from 1.9c. No duplicate.

### 5. Other Maintained / Near-Fair Markets

- NYC/KLGA Jun 14 88-89F YES: represented by PT-20260613-130; current price near mid-50s, roughly fair-to-slightly-positive versus NWS high near 89F.
- LA/KLAX Jun 14 70-71F YES: represented by PT-20260613-138; current price near 49%-50% after repricing, close to fair versus NWS high near 71F.
- Miami/KMIA Jun 14 92-93F YES: represented by PT-20260614-145; current Buy Yes around 30c versus fair 35%-45%, but no add above the 24c entry.
- Austin/KAUS Jun 14 92-93F YES: PT-20260614-146 is weakened after NWS moved to high near 91F. 90-91F is now better centered but near fair around the low-40s, so no hedge add.
- Hong Kong/HKO Jun 14 29C YES: converged near Buy Yes 99.5c after the observed max remained around 29.5C; maintain PT-20260614-147 only.
- San Francisco/Denver/Seattle checks: no paper entry because station evidence, source freshness, or pricing quality was not strong enough.

## Recommended Paper Trades

Opened one new paper-only position:

- PT-20260614-151: BUY_YES on Polymarket Dallas/KDAL Jun 14 highest temperature 84-85F at Buy Yes 5.0c.
- Simulated size: $5 notional.
- Thesis: the NWS forecast now centers near 85F while Polymarket still prices 84-85F as a tail outcome.
- Confidence: low-to-medium-low.
- Invalidation risks: storms/clouds cap KDAL at 82-83F or lower; clearing allows 86-87F or warmer; Wunderground final station history differs from the NWS point forecast; or the public quote is stale.

Maintenance actions:

- Maintain PT-20260614-150 Atlanta/KATL 90-91F YES; no duplicate.
- Maintain PT-20260614-149 and PT-20260613-141 Chicago 72-73F/70-71F cluster.
- Mark PT-20260614-144/PT-20260614-148 Dallas 90-91F and PT-20260613-142 Dallas 92-93F as weakened/adverse-watch after the cooler forecast shift.
- Maintain PT-20260613-140/PT-20260613-143 Houston warm-tail entries.
- Maintain PT-20260613-130 NYC, PT-20260613-138 LA, PT-20260614-145 Miami, PT-20260614-146 Austin, and PT-20260614-147 HKO.

## Risks and Invalidation Factors

- Exact-bucket misses by one or two degrees dominate every listed weather market.
- Public Polymarket pages may lag executable order books or disagree by route.
- Polymarket airport temperature markets resolve using Wunderground station histories; NWS forecasts/current conditions are proxies.
- Dallas, Atlanta, Houston, Austin, and Miami are storm-timing markets as much as temperature markets.
- Chicago and LA depend on cloud/fog/rain clearing timing.
- HKO provisional readings can differ from final validated observations.

## Sources Used

- Polymarket Dallas Jun 14: https://polymarket.com/event/highest-temperature-in-dallas-on-june-14-2026
- NWS Dallas/Love Field forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=32.7782&lon=-96.7951
- Polymarket Atlanta Jun 14: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-14-2026
- NWS KATL forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.6367&lon=-84.4281
- Polymarket Chicago Jun 14: https://polymarket.com/event/highest-temperature-in-chicago-on-june-14-2026
- NWS O'Hare forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=41.98&textField2=-87.9
- Polymarket Houston Jun 14: https://polymarket.com/event/highest-temperature-in-houston-on-june-14-2026
- NWS Houston/Hobby forecast/current conditions: https://forecast.weather.gov/MapClick.php?textField1=29.7687&textField2=-95.3867
- Polymarket Los Angeles Jun 14: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-14-2026
- NWS KLAX forecast/current conditions: https://forecast.weather.gov/MapClick.php?lat=33.9425&lon=-118.409
- Polymarket Austin Jun 14: https://polymarket.com/event/highest-temperature-in-austin-on-june-14-2026
- NWS KAUS forecast/current conditions: https://forecast.weather.gov/MapClick.php?FcstType=text&lat=30.1831&lg=english&lon=-97.6799
- Polymarket Hong Kong Jun 14: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-14-2026
- Polymarket Miami Jun 14: https://polymarket.com/event/highest-temperature-in-miami-on-june-14-2026

## Repo Log Update

- Updated latest odds snapshot.
- Created the 2026-06-14T1212Z history entry, alert, JSON market snapshot, paper-trading entry, ledger append, and maintenance note.
- Updated rolling paper-trade log, paper-trading summaries, watchlist, edge notes, and repo working notes.
- Opened one new paper-only position: PT-20260614-151 Dallas/KDAL Jun 14 84-85F YES at Buy Yes 5.0c, $5 simulated notional.
- No real bets or trades were executed.