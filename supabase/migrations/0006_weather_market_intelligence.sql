create table if not exists public.official_source_providers (
  id text primary key,
  name text not null,
  provider_type text not null check (provider_type in ('weather_agency', 'aviation_weather', 'market_provider', 'manual', 'model')),
  country_code text,
  documentation_url text,
  status text not null default 'unknown' check (status in ('online', 'degraded', 'stale', 'offline', 'unknown')),
  attribution text,
  last_checked_at timestamptz,
  metadata jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.settlement_stations (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  station_type text not null check (station_type in ('airport', 'national_weather_agency', 'local_official', 'fallback')),
  provider_id text references public.official_source_providers(id) on delete set null,
  country_code text,
  lat double precision not null,
  lon double precision not null,
  timezone text not null default 'UTC',
  elevation_m numeric,
  source_confidence numeric not null default 0.5,
  status text not null default 'unknown' check (status in ('online', 'degraded', 'stale', 'offline', 'unknown')),
  metadata_url text,
  raw jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.settlement_station_aliases (
  id uuid primary key default gen_random_uuid(),
  station_id uuid references public.settlement_stations(id) on delete cascade,
  alias text not null,
  provider text,
  created_at timestamptz default now()
);

create unique index if not exists settlement_station_aliases_uidx
on public.settlement_station_aliases (station_id, lower(alias), coalesce(provider, ''));

create table if not exists public.city_station_links (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references public.cities(id) on delete cascade,
  station_id uuid references public.settlement_stations(id) on delete cascade,
  priority integer not null default 1,
  distance_km numeric,
  link_type text not null default 'primary' check (link_type in ('primary', 'market_specific', 'fallback')),
  notes text,
  created_at timestamptz default now()
);

create unique index if not exists city_station_links_uidx
on public.city_station_links (city_id, station_id, link_type);

create table if not exists public.market_settlement_rules (
  id uuid primary key default gen_random_uuid(),
  market_event_id uuid references public.market_events(id) on delete cascade,
  station_id uuid references public.settlement_stations(id) on delete set null,
  provider_id text references public.official_source_providers(id) on delete set null,
  event_window_start timestamptz,
  event_window_end timestamptz,
  timezone text not null default 'UTC',
  variable text not null,
  threshold numeric,
  operator text not null default 'unknown' check (operator in ('>=', '>', '<=', '<', '=', 'range', 'bucket', 'unknown')),
  source_confidence numeric not null default 0.5,
  notes text,
  raw jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists market_settlement_rules_market_idx
on public.market_settlement_rules (market_event_id);

create table if not exists public.weather_observations (
  id uuid primary key default gen_random_uuid(),
  station_id uuid references public.settlement_stations(id) on delete set null,
  observed_at timestamptz not null,
  variable text not null,
  value numeric not null,
  unit text not null,
  provider text not null,
  quality_flag text not null default 'ok' check (quality_flag in ('ok', 'suspect', 'missing', 'corrected')),
  raw jsonb not null default '{}',
  created_at timestamptz default now()
);

create unique index if not exists weather_observations_station_time_var_uidx
on public.weather_observations (station_id, observed_at, variable);

create table if not exists public.model_members (
  id uuid primary key default gen_random_uuid(),
  forecast_run_id uuid references public.forecast_runs(id) on delete cascade,
  provider text not null,
  model text not null,
  member_name text not null,
  run_time timestamptz not null,
  lead_time_hours numeric,
  variable text not null,
  value numeric not null,
  unit text not null,
  recent_error numeric,
  lead_time_skill numeric,
  provider_freshness_minutes numeric,
  run_to_run_delta numeric,
  raw jsonb not null default '{}',
  created_at timestamptz default now()
);

create index if not exists model_members_run_var_idx
on public.model_members (forecast_run_id, variable);

create table if not exists public.provider_health (
  provider_id text primary key,
  name text not null,
  provider_type text not null check (provider_type in ('weather', 'market', 'observation', 'ai', 'payments', 'cache')),
  status text not null default 'unknown' check (status in ('online', 'degraded', 'stale', 'offline', 'unknown')),
  last_success_at timestamptz,
  last_attempt_at timestamptz,
  stale_after timestamptz,
  latency_ms integer,
  error text,
  metadata jsonb not null default '{}',
  updated_at timestamptz default now()
);

create table if not exists public.ingestion_logs (
  id uuid primary key default gen_random_uuid(),
  provider_id text not null,
  job_type text not null,
  status text not null default 'running' check (status in ('running', 'complete', 'stale', 'failed')),
  started_at timestamptz default now(),
  finished_at timestamptz,
  records_seen integer not null default 0,
  records_inserted integer not null default 0,
  records_updated integer not null default 0,
  error text,
  metadata jsonb not null default '{}'
);

create index if not exists ingestion_logs_provider_started_idx
on public.ingestion_logs (provider_id, started_at desc);

create table if not exists public.city_weather_snapshots (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references public.cities(id) on delete cascade,
  station_id uuid references public.settlement_stations(id) on delete set null,
  snapshot_at timestamptz not null,
  temperature_c numeric,
  precipitation_probability numeric,
  wind_speed_kmh numeric,
  source_status text not null default 'unknown',
  stale_after timestamptz,
  raw jsonb not null default '{}',
  created_at timestamptz default now()
);

create index if not exists city_weather_snapshots_city_time_idx
on public.city_weather_snapshots (city_id, snapshot_at desc);

create or replace view public.markets as
select
  id,
  provider,
  provider_event_id,
  title,
  description,
  category,
  tags,
  city_ids,
  country_codes,
  probability,
  bid,
  ask,
  volume,
  liquidity,
  open_interest,
  close_time,
  resolution_source,
  url,
  status,
  raw,
  created_at,
  updated_at
from public.market_events;

create table if not exists public.market_contracts (
  id uuid primary key default gen_random_uuid(),
  market_event_id uuid references public.market_events(id) on delete cascade,
  provider_contract_id text not null,
  outcome text not null,
  price numeric,
  bid numeric,
  ask numeric,
  liquidity numeric,
  raw jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index if not exists market_contracts_provider_contract_uidx
on public.market_contracts (market_event_id, provider_contract_id);

create table if not exists public.market_prices (
  id uuid primary key default gen_random_uuid(),
  market_event_id uuid references public.market_events(id) on delete cascade,
  contract_id uuid references public.market_contracts(id) on delete cascade,
  provider text not null,
  timestamp timestamptz not null,
  probability numeric,
  bid numeric,
  ask numeric,
  spread numeric,
  slippage numeric,
  volume numeric,
  liquidity numeric,
  freshness_status text not null default 'unknown',
  raw jsonb not null default '{}'
);

create index if not exists market_prices_market_time_idx
on public.market_prices (market_event_id, timestamp desc);

create table if not exists public.market_orderbook_snapshots (
  id uuid primary key default gen_random_uuid(),
  market_event_id uuid references public.market_events(id) on delete cascade,
  provider text not null,
  snapshot_at timestamptz not null,
  bids jsonb not null default '[]',
  asks jsonb not null default '[]',
  best_bid numeric,
  best_ask numeric,
  spread numeric,
  depth numeric,
  raw jsonb not null default '{}'
);

create index if not exists market_orderbook_snapshots_market_time_idx
on public.market_orderbook_snapshots (market_event_id, snapshot_at desc);

create table if not exists public.market_bucket_mappings (
  id uuid primary key default gen_random_uuid(),
  market_event_id uuid references public.market_events(id) on delete cascade,
  contract_id uuid references public.market_contracts(id) on delete set null,
  bucket_kind text not null check (bucket_kind in ('exact', 'range', 'above_or_equal', 'below_or_equal')),
  bucket_label text not null,
  min_value numeric,
  max_value numeric,
  unit text not null default 'F',
  parser_version text not null,
  warnings text[] not null default '{}',
  raw jsonb not null default '{}',
  created_at timestamptz default now()
);

create table if not exists public.market_edge_snapshots (
  id uuid primary key default gen_random_uuid(),
  market_event_id uuid references public.market_events(id) on delete cascade,
  computed_at timestamptz default now(),
  model_probability numeric,
  market_probability numeric,
  raw_edge numeric,
  adjusted_edge numeric,
  net_edge numeric,
  confidence numeric,
  label text not null,
  raw jsonb not null default '{}'
);

create index if not exists market_edge_snapshots_market_time_idx
on public.market_edge_snapshots (market_event_id, computed_at desc);

create table if not exists public.calibration_runs (
  id uuid primary key default gen_random_uuid(),
  method text not null check (method in ('legacy_normal', 'recent_bias_correction', 'model_skill_weighting', 'emos_shadow')),
  version text not null,
  started_at timestamptz default now(),
  finished_at timestamptz,
  status text not null default 'running',
  metadata jsonb not null default '{}'
);

create table if not exists public.calibration_parameters (
  id uuid primary key default gen_random_uuid(),
  calibration_run_id uuid references public.calibration_runs(id) on delete cascade,
  provider text,
  model text,
  variable text not null,
  parameter_key text not null,
  parameter_value numeric,
  metadata jsonb not null default '{}'
);

create table if not exists public.verification_results (
  id uuid primary key default gen_random_uuid(),
  market_event_id uuid references public.market_events(id) on delete set null,
  station_id uuid references public.settlement_stations(id) on delete set null,
  provider text,
  model text,
  variable text not null,
  forecast_time timestamptz,
  observed_time timestamptz,
  forecast_value numeric,
  observed_value numeric,
  probability numeric,
  outcome integer check (outcome in (0, 1)),
  absolute_error numeric,
  brier_score numeric,
  crps numeric,
  raw jsonb not null default '{}',
  created_at timestamptz default now()
);

create index if not exists verification_results_market_time_idx
on public.verification_results (market_event_id, observed_time desc);

create table if not exists public.model_skill_scores (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  model text not null,
  variable text not null,
  lead_time_hours numeric,
  recent_error numeric,
  skill_score numeric,
  brier_score numeric,
  sample_size integer not null default 0,
  computed_at timestamptz default now(),
  raw jsonb not null default '{}'
);

create table if not exists public.probability_snapshots (
  id uuid primary key default gen_random_uuid(),
  market_event_id uuid references public.market_events(id) on delete cascade,
  computed_at timestamptz default now(),
  raw_model_probability numeric,
  calibrated_model_probability numeric,
  ensemble_probability numeric,
  bucket_probability numeric,
  event_probability numeric,
  confidence_score numeric,
  confidence_adjusted_probability numeric,
  uncertainty_low numeric,
  uncertainty_high numeric,
  calibration_version text,
  raw jsonb not null default '{}'
);

create table if not exists public.alert_rules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  alert_type text not null,
  label text not null,
  enabled boolean not null default true,
  threshold numeric,
  channels text[] not null default '{}',
  config jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.alert_events (
  id uuid primary key default gen_random_uuid(),
  alert_rule_id uuid references public.alert_rules(id) on delete set null,
  market_event_id uuid references public.market_events(id) on delete set null,
  city_id uuid references public.cities(id) on delete set null,
  severity text not null default 'info',
  message text not null,
  payload jsonb not null default '{}',
  created_at timestamptz default now()
);

create table if not exists public.subscription_plans (
  id text primary key,
  name text not null,
  description text,
  entitlements text[] not null default '{}',
  active boolean not null default true,
  metadata jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.user_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  plan_id text references public.subscription_plans(id) on delete set null,
  status text not null default 'incomplete',
  current_period_end timestamptz,
  metadata jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.payment_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_event_id text not null,
  event_type text not null,
  user_id uuid,
  subscription_id uuid references public.user_subscriptions(id) on delete set null,
  status text not null default 'received',
  payload jsonb not null default '{}',
  received_at timestamptz default now(),
  processed_at timestamptz
);

create unique index if not exists payment_events_provider_event_uidx
on public.payment_events (provider, provider_event_id);

create table if not exists public.payment_status (
  user_id uuid primary key,
  subscription_id uuid references public.user_subscriptions(id) on delete set null,
  plan_id text references public.subscription_plans(id) on delete set null,
  status text not null,
  entitlements text[] not null default '{}',
  updated_at timestamptz default now()
);

create table if not exists public.realtime_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  entity_type text not null,
  entity_id text not null,
  payload jsonb not null default '{}',
  created_at timestamptz default now()
);

create index if not exists realtime_events_type_created_idx
on public.realtime_events (event_type, created_at desc);

alter table public.official_source_providers enable row level security;
alter table public.settlement_stations enable row level security;
alter table public.settlement_station_aliases enable row level security;
alter table public.city_station_links enable row level security;
alter table public.market_settlement_rules enable row level security;
alter table public.weather_observations enable row level security;
alter table public.model_members enable row level security;
alter table public.provider_health enable row level security;
alter table public.ingestion_logs enable row level security;
alter table public.city_weather_snapshots enable row level security;
alter table public.market_contracts enable row level security;
alter table public.market_prices enable row level security;
alter table public.market_orderbook_snapshots enable row level security;
alter table public.market_bucket_mappings enable row level security;
alter table public.market_edge_snapshots enable row level security;
alter table public.calibration_runs enable row level security;
alter table public.calibration_parameters enable row level security;
alter table public.verification_results enable row level security;
alter table public.model_skill_scores enable row level security;
alter table public.probability_snapshots enable row level security;
alter table public.alert_rules enable row level security;
alter table public.alert_events enable row level security;
alter table public.subscription_plans enable row level security;
alter table public.user_subscriptions enable row level security;
alter table public.payment_events enable row level security;
alter table public.payment_status enable row level security;
alter table public.realtime_events enable row level security;

create policy "Public read official_source_providers" on public.official_source_providers for select to anon, authenticated using (true);
create policy "Public read settlement_stations" on public.settlement_stations for select to anon, authenticated using (true);
create policy "Public read settlement_station_aliases" on public.settlement_station_aliases for select to anon, authenticated using (true);
create policy "Public read city_station_links" on public.city_station_links for select to anon, authenticated using (true);
create policy "Public read market_settlement_rules" on public.market_settlement_rules for select to anon, authenticated using (true);
create policy "Public read weather_observations" on public.weather_observations for select to anon, authenticated using (true);
create policy "Public read model_members" on public.model_members for select to anon, authenticated using (true);
create policy "Public read provider_health" on public.provider_health for select to anon, authenticated using (true);
create policy "Public read ingestion_logs" on public.ingestion_logs for select to anon, authenticated using (true);
create policy "Public read city_weather_snapshots" on public.city_weather_snapshots for select to anon, authenticated using (true);
create policy "Public read market_contracts" on public.market_contracts for select to anon, authenticated using (true);
create policy "Public read market_prices" on public.market_prices for select to anon, authenticated using (true);
create policy "Public read market_orderbook_snapshots" on public.market_orderbook_snapshots for select to anon, authenticated using (true);
create policy "Public read market_bucket_mappings" on public.market_bucket_mappings for select to anon, authenticated using (true);
create policy "Public read market_edge_snapshots" on public.market_edge_snapshots for select to anon, authenticated using (true);
create policy "Public read calibration_runs" on public.calibration_runs for select to anon, authenticated using (true);
create policy "Public read calibration_parameters" on public.calibration_parameters for select to anon, authenticated using (true);
create policy "Public read verification_results" on public.verification_results for select to anon, authenticated using (true);
create policy "Public read model_skill_scores" on public.model_skill_scores for select to anon, authenticated using (true);
create policy "Public read probability_snapshots" on public.probability_snapshots for select to anon, authenticated using (true);
create policy "Public read alert_rules" on public.alert_rules for select to authenticated using (true);
create policy "Public read alert_events" on public.alert_events for select to authenticated using (true);
create policy "Public read subscription_plans" on public.subscription_plans for select to anon, authenticated using (true);
create policy "User read own subscriptions" on public.user_subscriptions for select to authenticated using (auth.uid() = user_id);
create policy "User read own payment status" on public.payment_status for select to authenticated using (auth.uid() = user_id);
create policy "Public read realtime_events" on public.realtime_events for select to authenticated using (true);

create trigger official_source_providers_touch_updated_at
before update on public.official_source_providers
for each row execute function public.touch_updated_at();

create trigger settlement_stations_touch_updated_at
before update on public.settlement_stations
for each row execute function public.touch_updated_at();

create trigger market_settlement_rules_touch_updated_at
before update on public.market_settlement_rules
for each row execute function public.touch_updated_at();

create trigger market_contracts_touch_updated_at
before update on public.market_contracts
for each row execute function public.touch_updated_at();

create trigger alert_rules_touch_updated_at
before update on public.alert_rules
for each row execute function public.touch_updated_at();

create trigger subscription_plans_touch_updated_at
before update on public.subscription_plans
for each row execute function public.touch_updated_at();

create trigger user_subscriptions_touch_updated_at
before update on public.user_subscriptions
for each row execute function public.touch_updated_at();
