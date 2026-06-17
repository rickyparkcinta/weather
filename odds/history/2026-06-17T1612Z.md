# Odds Market Snapshot

## Time Checked
- UTC: 2026-06-17 16:12:14
- HKT: 2026-06-18 00:12:14
- Mode: analysis, alerting, and paper trading only. No real bets or trades executed.

## Markets Monitored
- Polymarket weather watchlist: Chicago/KORD Jun 17; Austin/KAUS Jun 17; Dallas/KDAL Jun 17; Los Angeles/KLAX Jun 17; Houston/KHOU Jun 17; Atlanta/KATL Jun 17; Miami/KMIA Jun 17; Hong Kong/HKO Jun 18 and Jun 19.
- Cross-checks: official NWS airport observations and point forecasts for KORD, KAUS, KDAL, KLAX, KHOU, KATL, and KMIA; HKO official open-data forecast/current feed for Jun 18-19; Polymarket public pages/search renderings for market prices and liquidity.
- Source-quality note: local curl/API access to Polymarket remained blocked by network 403. Market prices come from web-rendered Polymarket pages/search snippets, so confidence is haircut where direct executable depth was not visible.

## Top Edges

### 1. Polymarket Hong Kong/HKO Jun 19 31C YES
- Current price: 31C displayed about 38% on the Polymarket Hong Kong page.
- Implied probability: about 38%.
- Estimated fair value: 42%-52%.
- Estimated edge: roughly +4 to +14 percentage points.
- Confidence: medium-low.
- Classification: moderate fresh paper-only edge; tiny entry opened.
- Key reasoning: HKO's 16:30 HKT official 9-day forecast lists Jun 19 maximum temperature at 31C, with mainly cloudy weather, a few showers, isolated thunderstorms at first, and hot sunny periods in the afternoon. This centers the 31C bucket more cleanly than the market's sub-40% top price, but exact-Celsius and two-day forecast risk keep conviction capped.
- Liquidity/practicality notes: Polymarket Hong Kong page showed about $8.2K volume and $37.2K liquidity for Jun 19. Entry uses the displayed 38% because direct Buy Yes depth was not cleanly rendered.

### 2. Polymarket Austin/KAUS Jun 17 92-93F YES
- Current price: 92-93F displayed about 41%; next closest 90-91F about 33%.
- Implied probability: about 41%.
- Estimated fair value: 43%-53%.
- Estimated edge: roughly +2 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented moderate edge; no fresh add.
- Key reasoning: NWS Austin-Bergstrom still forecasts a high near 92F, and KAUS was 81F at 09:53 CDT with mostly cloudy conditions improving toward mostly sunny. The market has repriced up from the 32c add-on, so the existing paper book already captures the better entry.
- Liquidity/practicality notes: maintain PT-20260617-193 at 40c and PT-20260617-198 at 32c only.

### 3. Polymarket Chicago/KORD Jun 17 68-69F YES
- Current price: 68-69F displayed about 20%; Buy Yes about 21c. Nearby buckets were tightly clustered around 64-71F.
- Implied probability: about 20%-21%.
- Estimated fair value: 23%-33%.
- Estimated edge: roughly +2 to +13 percentage points.
- Confidence: low.
- Classification: represented edge; no fresh add.
- Key reasoning: NWS still shows today's O'Hare high near 68F, but KORD was only 58F in rain/fog at 10:51 CDT with flood watch, wind advisory, severe thunderstorm, and heavy-rain risk still active. That keeps 62-67F and 70-71F miss paths live.
- Liquidity/practicality notes: maintain PT-20260616-190 and PT-20260617-196 only; current quote is not better than the 21c add-on.

### 4. Polymarket Dallas/KDAL Jun 17 94-95F YES
- Current price: 94-95F displayed about 32%; Buy Yes about 33c. 92-93F leads near 52%.
- Implied probability: about 32%-33%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly +1 to +12 percentage points.
- Confidence: low-to-medium-low.
- Classification: represented weak-to-moderate edge; no fresh add.
- Key reasoning: NWS Love Field forecasts sunny conditions with a high near 94F, but KDAL was only 81F at 09:53 CDT and the market has already repriced above the 25c and 20c paper entries.
- Liquidity/practicality notes: maintain existing Dallas 94-95F paper positions only.

### 5. Polymarket HKO Jun 18 29C YES
- Current price: 29C displayed about 34%, effectively co-led with 28C around 34%-35%.
- Implied probability: about 34%.
- Estimated fair value: 34%-44%.
- Estimated edge: roughly 0 to +10 percentage points.
- Confidence: medium-low.
- Classification: represented maintenance; no fresh add.
- Key reasoning: HKO's official forecast still caps Jun 18 at 29C, but it also calls for mainly cloudy weather, showers, and a few squally thunderstorms with heavy showers at first. The 28C cap path is very live and the 29C paper hedge is already open from 30c.
- Liquidity/practicality notes: maintain PT-20260617-197 only.

## Near-Fair / Weakened Monitors
- LA/KLAX Jun 17 70-71F: market about 60% versus NWS high near 70F and KLAX 65F/overcast at 08:53 PDT. Fair estimate 55%-65%; no add.
- Houston/KHOU Jun 17 86-87F / 88-89F: market cluster around 32%-38% on 86-87F and 31%-32% on 88-89F. NWS high near 89F, but KHOU was rain-cooled at 77F with flood watch and heavy-rain context. No clean edge.
- Atlanta/KATL Jun 17 84-85F: about 46% versus NWS high near 85F and KATL 77F at 10:52 EDT. Fair/near-fair.
- Miami/KMIA Jun 17 92-93F: about 61% / Buy Yes 62c versus NWS high near 93F and KMIA 89F at 10:53 EDT. Fair/near-fair after heat and thunderstorm risk.

## Recommended Paper Trades

### Opened PT-20260617-199
- Stance: BUY_YES on Polymarket Hong Kong/HKO Jun 19 highest temperature 31C.
- Simulated size: $5 notional.
- Entry price: represented/displayed 38%.
- Thesis: HKO's official Jun 19 forecast centers the maximum at 31C while Polymarket displays 31C below 40%, leaving a modest fresh unrepresented edge.
- Confidence: medium-low.
- Invalidation risks: HKO lowers the Jun 19 forecast to 30C; showers/clouds cap the Observatory at 30.9C or below; stronger sunny-period heating pushes 32.0C or above; exact one-decimal settlement risk; public Polymarket display may differ from executable depth.

## Risks and Invalidation Factors
- Exact weather buckets can lose by one degree or one decimal even when the broader forecast thesis is directionally right.
- U.S. Polymarket weather markets resolve to Wunderground station history, not directly to NWS point forecasts.
- HKO Celsius markets resolve to the official HKO Daily Extract absolute max, measured to one decimal place.
- Public Polymarket renderings can lag or disagree with executable order books; confidence is reduced where direct depth was unavailable.
- Same-day U.S. markets are highly sensitive to storm timing, cloud breaks, and late-afternoon recovery.

## Sources Used
- Polymarket Austin Jun 17: https://polymarket.com/event/highest-temperature-in-austin-on-june-17-2026
- Polymarket Chicago Jun 17: https://polymarket.com/event/highest-temperature-in-chicago-on-june-17-2026
- Polymarket Dallas Jun 17: https://polymarket.com/event/highest-temperature-in-dallas-on-june-17-2026
- Polymarket Los Angeles Jun 17: https://polymarket.com/event/highest-temperature-in-los-angeles-on-june-17-2026
- Polymarket Houston Jun 17: https://polymarket.com/event/highest-temperature-in-houston-on-june-17-2026
- Polymarket Atlanta Jun 17: https://polymarket.com/event/highest-temperature-in-atlanta-on-june-17-2026
- Polymarket Miami Jun 17: https://polymarket.com/event/highest-temperature-in-miami-on-june-17-2026
- Polymarket Hong Kong Jun 18 / Jun 19 pages: https://polymarket.com/event/highest-temperature-in-hong-kong-on-june-18-2026 and https://polymarket.com/predictions/hong-kong
- NWS station observations and forecasts: KORD, KAUS, KDAL, KLAX, KHOU, KATL, KMIA via weather.gov observation history and MapClick pages.
- HKO official open-data forecast/current feeds: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en and https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en

## Repo Log Update
- Updated odds/latest.md.
- Created odds/history/2026-06-17T1612Z.md, alerts/2026-06-17T1612Z.md, data/market_snapshots/2026-06-17T1612Z.json, paper_trading/entries/PT-20260617-199.md, paper_trading/ledger_appends/2026-06-17T1612Z.csv, and paper_trading/maintenance/2026-06-17T1612Z.md.
- Updated rolling local records: paper_trading/paper_trade_log.md, paper_trading/paper_trade_summary.md, paper-trade-summary.md, market-watchlist.md, edge-notes.md, and repo-working-notes.md.
- New simulated paper-only position opened: PT-20260617-199 HKO Jun 19 31C YES at represented/displayed 38%, $5 simulated notional.
- No real trades or betting actions were executed.
