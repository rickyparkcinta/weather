# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-18 02:13:10
- HKT: 2026-06-18 10:13:10
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Shanghai/ZSPD Jun 18; Tokyo/Haneda Jun 18; Seoul/Incheon Jun 18; Hong Kong/HKO Jun 18 and Jun 19; London/EGLC Jun 18; Guangzhou/ZGGG Jun 18; Shenzhen/ZGSZ Jun 18 context.
- Official and station signal checks: Polymarket market pages and resolution rules; Allmetsat METAR/TAF for ZSPD, RJTT, and RKSI; Windy/airport TAF cross-check for RKSI; HKO 9-day and current weather text pages; Met Office London City, Incheon, and Tokyo Haneda forecasts.
- Source-quality note: public Polymarket pages were used for displayed odds and Buy Yes quotes. Confidence is capped where displayed probabilities, Buy Yes quotes, and executable depth may diverge.

## Top Edges

### 1. Polymarket Shanghai/ZSPD Jun 18 30C YES
- Current price: 30C displayed 4%; Buy Yes 4.0c. Nearby outcomes: 27C displayed 39% / Buy Yes 39c; 28C displayed 37% / Buy Yes 37c; 29C displayed 14% / Buy Yes 15c.
- Implied probability: about 4%.
- Estimated fair value: 12%-24%.
- Estimated edge: roughly +8 to +20 percentage points versus the 4.0c buy quote.
- Confidence: low.
- Classification: moderate paper-only edge, strong raw but source-conflicted.
- Key reasoning: the market is clustered around 27C/28C, but ZSPD's 01:30 UTC METAR showed 26C and the airport TAF carried TX30/1806Z, a maximum temperature of 30C around 14:00 local. That gives the 30C bucket more live probability than the market's 4c quote implies.
- Liquidity/practicality notes: about $53.5K event volume and roughly $4.2K target-bucket volume. Heavy cloud/rain and Polymarket's own market context still lean 27C-29C, so size stays tiny.
- Decision: open PT-20260618-203, a $5 simulated BUY_YES at 4.0c.

### 2. Polymarket Tokyo/Haneda Jun 18 26C YES
- Current price: 26C displayed 32%; Buy Yes 33c. Nearby outcomes: 25C displayed 42% / Buy Yes 43c; 24C displayed 20.5% / Buy Yes 22.0c; 27C displayed 4.0% / Buy Yes 5.0c.
- Implied probability: about 33%.
- Estimated fair value: 38%-48%.
- Estimated edge: roughly +5 to +15 percentage points versus the 33c buy quote.
- Confidence: low-to-medium-low.
- Classification: moderate paper-only edge.
- Key reasoning: Met Office Tokyo Haneda's station-specific forecast lists Thursday maximum temperature at 26C and its hourly table peaks at 26C from mid-afternoon into early evening. RJTT was 22C with light rain around 01:30 UTC, so the setup still has a 25C rain-cap miss path, but the market's 25C leadership looks somewhat too cool.
- Liquidity/practicality notes: about $54.0K event volume and roughly $4.4K target-bucket volume. Whole-degree Wunderground settlement keeps sizing small.
- Decision: open PT-20260618-204, a $5 simulated BUY_YES at 33c.

### 3. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: displayed 37%; Buy Yes 37c. Nearby outcomes: 30C displayed 28% / Buy Yes 29c; 32C displayed 18% / Buy Yes 19c; 29C displayed 16% / Buy Yes 16c.
- Implied probability: about 37%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +5 to +15 percentage points versus the 37c buy quote.
- Confidence: medium-low.
- Classification: moderate represented maintenance.
- Key reasoning: HKO's 07:50 HKT 9-day forecast still lists Jun 19 at 27-31C, with a few showers, isolated thunderstorms at first, and hot sunny periods in the afternoon. That keeps 31C the best single official-forecast bucket, but exact one-decimal settlement leaves 30.9C and 32.0C miss paths live.
- Liquidity/practicality notes: about $14.6K event volume and roughly $2.8K target-bucket volume. Existing paper entries PT-20260617-199 at 38c and PT-20260617-200 at 35c already represent this thesis.
- Decision: maintain only; no duplicate above the 35c add-on.

### 4. Polymarket Guangzhou/ZGGG Jun 18 30C YES
- Current price: 30C displayed 18%; Buy Yes 19c. Nearby outcomes: 28C displayed 37% / Buy Yes 39c; 29C displayed 31% / Buy Yes 32c; 31C displayed 11% / Buy Yes 12c.
- Implied probability: about 19%.
- Estimated fair value: 22%-34%.
- Estimated edge: roughly +3 to +15 percentage points.
- Confidence: low.
- Classification: weak-to-moderate watch-only.
- Key reasoning: Guangzhou's airport TAF and third-party airport forecast context point to a possible 30C max, while Polymarket prices 30C behind 28C/29C. However, heavy rain/thunderstorm risk is explicit in the market context and station weather, so the edge is less clean than Shanghai or Tokyo.
- Liquidity/practicality notes: about $50.5K event volume and roughly $7.2K target-bucket volume.
- Decision: watch only; no fresh paper entry.

### 5. Polymarket London/EGLC Jun 18 28C YES
- Current price: 28C displayed 38%; Buy Yes 38c. Nearby outcomes: 27C displayed 34% / Buy Yes 34c; 29C displayed 15% / Buy Yes 16c; 26C displayed 14% / Buy Yes 14c.
- Implied probability: about 38%.
- Estimated fair value: 36%-46%.
- Estimated edge: roughly -2 to +8 percentage points.
- Confidence: low-to-medium-low.
- Classification: near fair / watch-only.
- Key reasoning: Met Office London City Airport still supports a warm day, but the visible hourly detail and the live 27C adjacent bucket keep this from being a clean 28C edge after spread.
- Liquidity/practicality notes: about $43.3K event volume and roughly $4.4K in the 28C bucket.
- Decision: no paper trade.

### 6. Polymarket Seoul/Incheon Jun 18 27C YES
- Current price: 27C displayed 13%; Buy Yes 14.5c. Nearby outcomes: 29C displayed 41% / Buy Yes 42c; 28C displayed 35% / Buy Yes 36c; 30C displayed 12% / Buy Yes 12.7c.
- Implied probability: about 14.5%.
- Estimated fair value: 10%-22%, revised down from the prior scan.
- Estimated edge: no clear fresh edge after live-station update.
- Confidence: low.
- Classification: weakened represented maintenance.
- Key reasoning: the Met Office Incheon forecast still shows 27C, but RKSI was already 26C at 01:30 UTC and the airport TAF calls for TX28/1806Z. That materially weakens the PT-20260618-202 27C paper thesis.
- Liquidity/practicality notes: about $105.1K event volume and roughly $10.5K target-bucket volume.
- Decision: maintain as weakened/adverse-watch; no duplicate.

## Recommended Paper Trades
- PT-20260618-203: simulated BUY_YES on Polymarket Shanghai/ZSPD Jun 18 30C at Buy Yes 4.0c, $5 notional. Thesis: ZSPD airport TAF indicates a possible 30C max while the market still leaves 30C at only 4c. Confidence low.
- PT-20260618-204: simulated BUY_YES on Polymarket Tokyo/Haneda Jun 18 26C at Buy Yes 33c, $5 notional. Thesis: station-specific Met Office forecast centers 26C while Polymarket still leads with 25C. Confidence low-to-medium-low.

## Risks and Invalidation Factors
- Shanghai and Guangzhou are rain/cloud-cover markets: persistent low cloud or showers can cap heating below the TAF maximum.
- TAF maximum-temperature groups are useful but not the final resolution source; Wunderground station history controls the Polymarket outcome.
- Tokyo can still cap at 25C if light rain and onshore/northerly flow persist longer than forecast.
- Seoul/Incheon 27C is now weaker after live airport observations and TAF moved toward 28C.
- HKO exact-Celsius markets resolve using one-decimal Absolute Daily Max, so 30.9C/31.0C and 31.9C/32.0C boundaries are decisive.
- Public Polymarket pages can show display probabilities that diverge from executable depth.

## Sources Used
- Polymarket Shanghai Jun 18 event: https://polymarket.com/event/highest-temperature-in-shanghai-on-june-18-2026
- Allmetsat ZSPD METAR/TAF: https://en.allmetsat.com/metar-taf/asia.php?icao=ZSPD
- Polymarket Tokyo Jun 18 event: https://polymarket.com/event/highest-temperature-in-tokyo-on-june-18-2026
- Met Office Tokyo Haneda forecast: https://weather.metoffice.gov.uk/forecast/xn76hz8ty
- Allmetsat RJTT METAR/TAF: https://en.allmetsat.com/metar-taf/asia.php?icao=RJTT
- Polymarket HKO Jun 19 event: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-19-2026
- HKO 9-day text forecast: https://www.hko.gov.hk/textonly/v2/forecast/nday_v2.htm
- HKO current weather text page: https://www.hko.gov.hk/textonly/v2/forecast/englishwx2.htm
- Polymarket Guangzhou Jun 18 event: https://polymarket.com/event/highest-temperature-in-guangzhou-on-june-18-2026
- Polymarket London Jun 18 event: https://polymarket.com/event/highest-temperature-in-london-on-june-18-2026
- Met Office London City Airport forecast: https://weather.metoffice.gov.uk/forecast/u10j124jp
- Polymarket Seoul Jun 18 event: https://polymarket.com/event/highest-temperature-in-seoul-on-june-18-2026
- Met Office Incheon forecast: https://weather.metoffice.gov.uk/forecast/wydj553hq
- Allmetsat RKSI METAR/TAF: https://en.allmetsat.com/metar-taf/asia.php?icao=RKSI

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-18T0213Z.md, alerts/2026-06-18T0213Z.md, data/market_snapshots/2026-06-18T0213Z.json, paper_trading/entries/PT-20260618-203.md, paper_trading/entries/PT-20260618-204.md, paper_trading/ledger_appends/2026-06-18T0213Z.csv, and paper_trading/maintenance/2026-06-18T0213Z.md.
- Updated rolling memory records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only positions: PT-20260618-203 Shanghai/ZSPD Jun 18 30C YES and PT-20260618-204 Tokyo/Haneda Jun 18 26C YES. No real trades or betting actions were executed.