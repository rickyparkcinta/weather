"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { City } from "@/types/domain";

export function TopSearch({
  cities,
  selectedCity,
  onSelect
}: {
  cities: City[];
  selectedCity: City;
  onSelect: (city: City) => void;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  function selectCity(city: City) {
    onSelect(city);
    setQuery("");
    setOpen(false);
  }

  const matches = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return cities.slice(0, 8);
    return cities
      .filter((city) => `${city.name} ${city.country} ${city.region ?? ""}`.toLowerCase().includes(value))
      .slice(0, 8);
  }, [cities, query]);

  return (
    <div
      className="pointer-events-auto relative min-w-0 flex-1 rounded-md border border-white/12 bg-[var(--panel-strong)] p-2 shadow-2xl backdrop-blur-xl sm:max-w-[380px]"
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          setOpen(false);
        }
      }}
    >
      <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3">
        <Search size={16} className="text-slate-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              event.currentTarget.blur();
              return;
            }

            if (event.key === "Enter" && matches[0]) {
              selectCity(matches[0]);
            }
          }}
          aria-expanded={open}
          aria-label="Search cities"
          placeholder={`Search ${selectedCity.name}`}
          className="h-10 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
        />
      </div>
      <div className={open ? "absolute left-0 right-0 top-full z-40 mt-2 grid max-h-[52dvh] gap-1 overflow-y-auto rounded-md border border-white/12 bg-[var(--panel-strong)] p-2 shadow-2xl backdrop-blur-xl" : "hidden"}>
        {matches.length ? matches.map((city) => (
          <button
            key={city.id}
            type="button"
            onClick={() => selectCity(city)}
            aria-current={city.id === selectedCity.id ? "true" : undefined}
            className="flex min-h-11 items-center justify-between rounded px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/8 aria-[current=true]:bg-cyan-300/10 aria-[current=true]:text-cyan-100"
          >
            <span>{city.name}</span>
            <span className="text-xs text-slate-500">{city.countryCode}</span>
          </button>
        )) : (
          <div className="px-3 py-3 text-sm text-slate-400">No matching cities</div>
        )}
      </div>
    </div>
  );
}
