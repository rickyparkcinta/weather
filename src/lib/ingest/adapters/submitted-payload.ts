import type { IngestRunPayload } from "@/lib/validation/schemas";
import type { ProviderAdapter, RawProviderPayload } from "@/lib/ingest/types";

export function createSubmittedPayloadAdapter(payload: IngestRunPayload, fetchedAt: string): ProviderAdapter {
  return {
    id: payload.providerId,
    type: payload.providerType,
    version: payload.adapterVersion,
    fetch: async () => ({
      providerId: payload.providerId,
      fetchedAt,
      payload: payload.records,
      metadata: payload.metadata
    }),
    normalize: async (raw: RawProviderPayload) => {
      if (raw.providerId !== payload.providerId) {
        throw new Error(`Adapter payload provider mismatch: expected ${payload.providerId}, received ${raw.providerId}`);
      }

      return payload.records;
    }
  };
}
