import { TimelineControl } from "@/components/map/TimelineControl";

export function BottomTimeline({
  value,
  playing,
  onValueChange,
  onPlayingChange,
  updatedAt
}: {
  value: number;
  playing: boolean;
  onValueChange: (value: number) => void;
  onPlayingChange: (playing: boolean) => void;
  updatedAt: string;
}) {
  return (
    <div className="pointer-events-auto w-full max-w-[760px] rounded-md border border-white/12 bg-[var(--panel)] p-3 shadow-2xl backdrop-blur-xl">
      <TimelineControl value={value} playing={playing} onValueChange={onValueChange} onPlayingChange={onPlayingChange} />
      <div className="mt-2 flex flex-col gap-1 text-[11px] text-slate-500 min-[520px]:flex-row min-[520px]:justify-between">
        <span>Forecast timeline</span>
        <span>Updated {new Date(updatedAt).toLocaleString()}</span>
      </div>
    </div>
  );
}
