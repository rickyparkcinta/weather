export type ProviderRunTerminalStatus = "complete" | "stale";

export function getRunFreshness(
  fetchedAt: string,
  staleAfterMinutes: number,
  now: Date = new Date()
): {
  stale: boolean;
  staleAfter: string;
  status: ProviderRunTerminalStatus;
} {
  const staleAfter = new Date(new Date(fetchedAt).getTime() + staleAfterMinutes * 60 * 1000);
  const stale = staleAfter.getTime() < now.getTime();

  return {
    stale,
    staleAfter: staleAfter.toISOString(),
    status: stale ? "stale" : "complete"
  };
}

export function isExpiredRunningRun(staleAfter: string | null | undefined, now: Date = new Date()) {
  if (!staleAfter) return false;
  const timestamp = new Date(staleAfter).getTime();
  return Number.isFinite(timestamp) && timestamp < now.getTime();
}
