# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-19 00:09:46 UTC
- HKT: 2026-06-19 08:09:46 HKT
- Mode: analysis, alerting, and paper trading only. No real bets, trades, wallet actions, or order execution performed.

## Markets Monitored
- Polymarket weather watchlist: Guangzhou/ZGGG Jun 19; Shenzhen/ZGSZ Jun 19; Chongqing/ZUCK Jun 19; Shanghai/ZSPD Jun 19; Hong Kong/HKO Jun 19; Seoul/Incheon/RKSI Jun 19.
- Evidence checked: Polymarket public market pages; Met Office city/airport forecasts; HKO 9-day forecast and regional readings; AccuWeather airport pages for Guangzhou, Shenzhen, and Chongqing; aviation METAR/TAF pages for ZGGG, ZGSZ, ZUCK, ZSPD, and RKSI.

## Top Edges

### 1. Shanghai/ZSPD Jun 19 29C YES
- Current price: Buy Yes 25c; implied probability about 25%.
- Estimated fair value: 34%-44%.
- Estimated edge: +9 to +19 percentage points.
- Confidence: low-to-medium-low.
- Classification: strong represented edge.
- Reasoning: ZSPD TAF calls TX29/1906Z, current airport conditions were still 24C/mist early, and Met Office Shanghai International hourly guidance peaks at 29C with shower/thunderstorm risk.
- Decision: maintain PT-20260618-208 only; no add above the 14c entry.

### 2. Shenzhen/ZGSZ Jun 19 30C YES
- Current price: Buy Yes 28c; implied probability about 28%.
- Estimated fair value: 34%-44%.
- Estimated edge: +6 to +16 percentage points.
- Confidence: low.
- Classification: represented moderate-to-strong hedge edge.
- Reasoning: ZGSZ TAF calls TX30/1906Z and AccuWeather airport forecast peaks near 86F/30C, while Met Office city guidance is warmer at 32C.
- Decision: maintain PT-20260618-220 only; no duplicate on a 1c improvement.

### 3. Guangzhou/ZGGG Jun 19 31C YES
- Current price: Buy Yes 24c; implied probability about 22%-24%.
- Estimated fair value: 30%-40%.
- Estimated edge: roughly +6 to +18 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge.
- Reasoning: ZGGG TAF calls TX31/1907Z and AccuWeather peaks near 88F/31C, but Met Office now has several 32C afternoon hours.
- Decision: maintain PT-20260618-218 only; no duplicate above 18c entry.

### 4. Hong Kong/HKO Jun 19 32C YES
- Current price: Buy Yes 18c; implied probability about 18%.
- Estimated fair value: 22%-32%.
- Estimated edge: +4 to +14 percentage points.
- Confidence: low-to-medium-low.
- Classification: moderate fresh hedge edge.
- Reasoning: HKO's 07:50 HKT forecast moved Jun 19 to 27C-32C with sunny periods during the day, while the market still prices 32C at 18c behind 31C and 30C.
- Decision: opened PT-20260619-221, a $5 simulated BUY_YES hedge at 18c. Paper only.

### 5. Chongqing/ZUCK Jun 19 28C YES
- Current price: Buy Yes 8c; implied probability about 8%.
- Estimated fair value: 14%-24%.
- Estimated edge: +6 to +16 percentage points.
- Confidence: low.
- Classification: represented low-confidence hedge edge.
- Reasoning: ZUCK remained cool/foggy early and TAF calls TX28/1907Z, but Met Office and AccuWeather point hotter near 30C/31C.
- Decision: maintain PT-20260618-219 only; no duplicate.

### 6. Seoul/Incheon Jun 19 31C YES
- Current price: Buy Yes 13c; implied probability about 13%.
- Estimated fair value: 10%-18%.
- Estimated edge: -3 to +5 percentage points.
- Confidence: low.
- Classification: weak/no fresh edge.
- Reasoning: Met Office Incheon has a one-hour 31C touch, but RKSI TAF calls TX29/1906Z and the market's 29C/30C center looks broadly reasonable.
- Decision: maintain PT-20260618-216 as weakened/hedged maintenance; no new Seoul paper trade.

## Recommended Paper Trades
- Opened PT-20260619-221: Polymarket Hong Kong/HKO Jun 19 32C YES, Buy Yes 18c, $5 simulated notional, fair 22%-32%, confidence low-to-medium-low, status open.

## Settlements
- No newly settled paper trades recorded. Older Jun 18 and Jun 17 positions remain unresolved until final resolution-source data is explicitly confirmed.

## Risks and Invalidation Factors
- Exact Celsius buckets can lose on one-degree boundaries even when the forecast direction is right.
- HKO uses one-decimal Daily Extract data, making 31.9C versus 32.0C decisive.
- Airport-settled Wunderground histories may differ from METAR/TAF, Met Office, or AccuWeather supporting evidence.
- Public Polymarket display can diverge from executable depth; paper prices use visible public quotes only.

## Repo Log Update
- Updated odds/latest.md.
- Added odds/history/2026-06-19T0009Z.md, alerts/2026-06-19T0009Z.md, data/market_snapshots/2026-06-19T0009Z.json, paper_trading/entries/PT-20260619-221.md, paper_trading/ledger_appends/2026-06-19T0009Z.csv, and paper_trading/maintenance/2026-06-19T0009Z.md.
- Paper trading only; no real bets, trades, wallet actions, or order execution performed.
