"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#06080b", color: "#e2e8f0", fontFamily: "system-ui, sans-serif" }}>
        <main style={{ minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
          <div style={{ maxWidth: 480, border: "1px solid rgba(252,165,165,0.2)", borderRadius: 6, padding: 24 }}>
            <h1 style={{ fontSize: 18, margin: 0 }}>Something went wrong</h1>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "#94a3b8" }}>
              The application hit an unexpected error. Reloading usually resolves it.
            </p>
            {error.digest ? (
              <p style={{ fontSize: 12, fontFamily: "monospace", color: "#64748b" }}>Error reference: {error.digest}</p>
            ) : null}
            <button
              type="button"
              onClick={reset}
              style={{
                marginTop: 12,
                padding: "8px 16px",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
