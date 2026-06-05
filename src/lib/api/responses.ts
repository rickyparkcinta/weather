export function jsonOk<T>(data: T, init?: ResponseInit) {
  return Response.json(data, init);
}

export function jsonError(message: string, status = 500, details?: unknown) {
  return Response.json({ error: message, details }, { status });
}
