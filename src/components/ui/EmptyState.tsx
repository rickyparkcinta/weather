import { CircleSlash } from "lucide-react";

export function EmptyState({ title }: { title: string }) {
  return (
    <div className="flex min-h-24 items-center gap-3 rounded-md border border-dashed border-white/15 bg-black/20 p-4 text-sm text-slate-300">
      <CircleSlash size={18} className="text-slate-400" />
      {title}
    </div>
  );
}
