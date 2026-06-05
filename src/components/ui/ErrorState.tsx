import { TriangleAlert } from "lucide-react";

export function ErrorState({ title }: { title: string }) {
  return (
    <div className="flex min-h-24 items-center gap-3 rounded-md border border-red-300/20 bg-red-500/10 p-4 text-sm text-red-100">
      <TriangleAlert size={18} />
      {title}
    </div>
  );
}
