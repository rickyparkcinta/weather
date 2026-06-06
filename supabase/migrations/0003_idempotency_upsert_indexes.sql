drop index if exists public.provider_run_logs_idempotency_key_uidx;

create unique index provider_run_logs_idempotency_key_uidx
on public.provider_run_logs (idempotency_key);

drop index if exists public.ingestion_runs_idempotency_key_uidx;

create unique index ingestion_runs_idempotency_key_uidx
on public.ingestion_runs (idempotency_key);
