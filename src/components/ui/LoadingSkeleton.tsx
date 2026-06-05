export function LoadingSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }, (_, index) => (
        <div key={index} className="h-4 animate-pulse rounded bg-white/10" style={{ width: `${92 - index * 12}%` }} />
      ))}
    </div>
  );
}
