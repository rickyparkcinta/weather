drop index if exists public.weather_agent_reports_latest_uidx;
drop index if exists weather_agent_reports_latest_uidx;

create index if not exists weather_agent_reports_lookup_idx
on public.weather_agent_reports (city_id, market_event_id, report_type, model_version, computed_at desc);

create or replace view public.weather_agent_reports_latest as
select
  id,
  city_id,
  market_event_id,
  report_type,
  score,
  confidence,
  status,
  weather_snapshot,
  recommendations,
  rationale,
  risk_notes,
  disclaimer,
  model_version,
  computed_at,
  raw
from (
  select
    war.*,
    row_number() over (
      partition by city_id, market_event_id, report_type, model_version
      order by computed_at desc nulls last, id desc
    ) as latest_rank
  from public.weather_agent_reports war
) ranked
where latest_rank = 1;
