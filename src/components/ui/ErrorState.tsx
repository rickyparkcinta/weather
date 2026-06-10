import type { ReactNode } from "react";
import { TriangleAlert } from "lucide-react";

export function ErrorState({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="rounded-md border border-red-300/20 bg-red-500/10 p-4 text-sm text-red-100">
      <div className="flex min-h-16 items-center gap-3">
        <TriangleAlert size={18} className="shrink-0" />
        {title}
      </div>
      {children ? <div className="mt-2">{children}</div> : null}
    </div>
  );
}
