create table if not exists public.provider_run_logs (
  id uuid primary key default gen_random_uuid(),
  provider_id text not null,
  provider_type text not null check (provider_type in ('weather', 'market', 'observation')),
  adapter_version text not null,
  idempotency_key text,
  started_at timestamptz default now(),
  fetched_at timestamptz,
  finished_at timestamptz,
  status text not null default 'running' check (status in ('running', 'complete', 'stale', 'failed')),
  records_seen integer not null default 0,
  records_inserted integer not null default 0,
  records_updated integer not null default 0,
  stale_after timestamptz,
  error text,
  metadata jsonb not null default '{}'
);

create unique index if not exists provider_run_logs_idempotency_key_uidx
on public.provider_run_logs (idempotency_key)
where idempotency_key is not null;

create index if not exists provider_run_logs_provider_started_idx
on public.provider_run_logs (provider_id, started_at desc);

alter table public.provider_run_logs enable row level security;

create policy "Public read provider_run_logs"
on public.provider_run_logs
for select
to anon, authenticated
using (true);

alter table public.ingestion_runs
add column if not exists idempotency_key text;

create unique index if not exists ingestion_runs_idempotency_key_uidx
on public.ingestion_runs (idempotency_key)
where idempotency_key is not null;

alter table public.combined_signals
add column if not exists raw_edge numeric,
add column if not exists adjusted_edge numeric,
add column if not exists confidence numeric,
add column if not exists freshness_status text default 'unknown';

create index if not exists combined_signals_status_computed_idx
on public.combined_signals (status, computed_at desc);
