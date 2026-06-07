create table if not exists public.weather_agent_reports (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references public.cities(id),
  market_event_id uuid references public.market_events(id),
  report_type text not null default 'weather_impact',
  score numeric,
  confidence text,
  status text not null default 'computed',
  weather_snapshot jsonb not null default '{}'::jsonb,
  recommendations jsonb not null default '[]'::jsonb,
  rationale jsonb not null default '[]'::jsonb,
  risk_notes jsonb not null default '[]'::jsonb,
  disclaimer text not null,
  model_version text not null default 'weatherbot-v1-ts',
  computed_at timestamptz default now(),
  raw jsonb not null default '{}'::jsonb
);

create index if not exists weather_agent_reports_city_idx
on public.weather_agent_reports (city_id);

create index if not exists weather_agent_reports_market_event_idx
on public.weather_agent_reports (market_event_id);

create index if not exists weather_agent_reports_computed_at_idx
on public.weather_agent_reports (computed_at desc);

create unique index if not exists weather_agent_reports_latest_uidx
on public.weather_agent_reports (city_id, market_event_id, report_type, model_version);

alter table public.weather_agent_reports enable row level security;

create policy "Public read weather_agent_reports"
on public.weather_agent_reports
for select
to anon, authenticated
using (true);

-- No anon/authenticated write policies are created. The weather impact agent
-- writes with SUPABASE_SERVICE_ROLE_KEY, which bypasses RLS and stays server-only.
