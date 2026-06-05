create extension if not exists pgcrypto;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table public.cities (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  country text not null,
  country_code text,
  region text,
  lat double precision not null,
  lon double precision not null,
  timezone text,
  population bigint,
  importance_score numeric default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.forecast_runs (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  model text not null,
  run_time timestamptz not null,
  source_url text,
  status text default 'complete',
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

create unique index forecast_runs_provider_model_run_time_uidx
on public.forecast_runs (provider, model, run_time);

create table public.forecast_points (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references public.cities(id) on delete cascade,
  forecast_run_id uuid references public.forecast_runs(id) on delete cascade,
  provider text not null,
  model text not null,
  run_time timestamptz not null,
  forecast_time timestamptz not null,
  variable text not null,
  value numeric not null,
  unit text not null,
  lat double precision,
  lon double precision,
  confidence numeric,
  raw jsonb default '{}',
  created_at timestamptz default now()
);

create unique index forecast_points_city_provider_model_time_variable_uidx
on public.forecast_points (city_id, provider, model, run_time, forecast_time, variable);

create table public.market_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_event_id text not null,
  title text not null,
  description text,
  category text,
  tags text[] default '{}',
  city_ids uuid[] default '{}',
  country_codes text[] default '{}',
  probability numeric,
  bid numeric,
  ask numeric,
  volume numeric,
  liquidity numeric,
  open_interest numeric,
  close_time timestamptz,
  resolution_source text,
  url text,
  status text,
  raw jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index market_events_provider_event_uidx
on public.market_events (provider, provider_event_id);

create index market_events_city_ids_gin_idx on public.market_events using gin (city_ids);
create index market_events_tags_gin_idx on public.market_events using gin (tags);

create table public.market_timeseries (
  id uuid primary key default gen_random_uuid(),
  market_event_id uuid references public.market_events(id) on delete cascade,
  provider text not null,
  timestamp timestamptz not null,
  probability numeric,
  bid numeric,
  ask numeric,
  volume numeric,
  liquidity numeric,
  raw jsonb default '{}'
);

create unique index market_timeseries_event_timestamp_uidx
on public.market_timeseries (market_event_id, timestamp);

create table public.city_market_links (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references public.cities(id) on delete cascade,
  market_event_id uuid references public.market_events(id) on delete cascade,
  relevance_score numeric default 0,
  link_reason text,
  created_at timestamptz default now()
);

create unique index city_market_links_city_event_uidx
on public.city_market_links (city_id, market_event_id);

create table public.combined_signals (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references public.cities(id) on delete cascade,
  market_event_id uuid references public.market_events(id) on delete set null,
  forecast_variable text,
  signal_type text,
  model_probability numeric,
  market_probability numeric,
  disagreement numeric,
  status text,
  explanation text,
  computed_at timestamptz default now(),
  raw jsonb default '{}'
);

create index combined_signals_city_computed_idx on public.combined_signals (city_id, computed_at desc);

create table public.ingestion_runs (
  id uuid primary key default gen_random_uuid(),
  source text not null,
  started_at timestamptz default now(),
  finished_at timestamptz,
  status text default 'running',
  records_seen integer default 0,
  records_inserted integer default 0,
  records_updated integer default 0,
  error text,
  metadata jsonb default '{}'
);

create trigger cities_touch_updated_at
before update on public.cities
for each row execute function public.touch_updated_at();

create trigger market_events_touch_updated_at
before update on public.market_events
for each row execute function public.touch_updated_at();

alter table public.cities enable row level security;
alter table public.forecast_runs enable row level security;
alter table public.forecast_points enable row level security;
alter table public.market_events enable row level security;
alter table public.market_timeseries enable row level security;
alter table public.city_market_links enable row level security;
alter table public.combined_signals enable row level security;
alter table public.ingestion_runs enable row level security;

create policy "Public read cities" on public.cities for select to anon, authenticated using (true);
create policy "Public read forecast_runs" on public.forecast_runs for select to anon, authenticated using (true);
create policy "Public read forecast_points" on public.forecast_points for select to anon, authenticated using (true);
create policy "Public read market_events" on public.market_events for select to anon, authenticated using (true);
create policy "Public read market_timeseries" on public.market_timeseries for select to anon, authenticated using (true);
create policy "Public read city_market_links" on public.city_market_links for select to anon, authenticated using (true);
create policy "Public read combined_signals" on public.combined_signals for select to anon, authenticated using (true);

-- No anon/authenticated write policies are created. Server-side ingestion uses
-- SUPABASE_SERVICE_ROLE_KEY, which bypasses RLS and must never be exposed.
