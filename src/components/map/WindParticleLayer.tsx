"use client";

export function WindParticleLayer({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {Array.from({ length: 18 }, (_, index) => (
        <span
          key={index}
          className="wind-particle"
          style={{
            left: `${(index * 11) % 100}%`,
            top: `${12 + ((index * 17) % 76)}%`,
            animationDelay: `${index * -0.38}s`,
            animationDuration: `${6 + (index % 5)}s`
          }}
        />
      ))}
    </div>
  );
}
