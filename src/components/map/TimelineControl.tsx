"use client";

import { Pause, Play } from "lucide-react";

export function TimelineControl({
  value,
  playing,
  onValueChange,
  onPlayingChange
}: {
  value: number;
  playing: boolean;
  onValueChange: (value: number) => void;
  onPlayingChange: (playing: boolean) => void;
}) {
  return (
    <div className="flex w-full items-center gap-3">
      <button
        type="button"
        onClick={() => onPlayingChange(!playing)}
        aria-label={playing ? "Pause timeline" : "Play timeline"}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/15 bg-white/8 text-white hover:bg-white/12"
      >
        {playing ? <Pause size={17} /> : <Play size={17} />}
      </button>
      <input
        type="range"
        min={0}
        max={5}
        step={1}
        value={value}
        onChange={(event) => onValueChange(Number(event.target.value))}
        className="w-full accent-cyan-300"
        aria-label="Forecast timeline"
      />
      <span className="w-16 text-right font-mono text-xs text-slate-300">+{value * 6}h</span>
    </div>
  );
}
