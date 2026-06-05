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
  const matches = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return cities.slice(0, 6);
    return cities
      .filter((city) => `${city.name} ${city.country} ${city.region}`.toLowerCase().includes(value))
      .slice(0, 6);
  }, [cities, query]);

  return (
    <div className="pointer-events-auto w-[min(92vw,380px)] rounded-md border border-white/12 bg-[var(--panel-strong)] p-2 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-2 rounded-md border border-white/10 bg-black/30 px-3">
        <Search size={16} className="text-slate-400" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={selectedCity.name}
          className="h-10 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
        />
      </div>
      <div className="mt-2 grid gap-1">
        {matches.map((city) => (
          <button
            key={city.id}
            type="button"
            onClick={() => {
              onSelect(city);
              setQuery("");
            }}
            className="flex items-center justify-between rounded px-2 py-2 text-left text-sm text-slate-200 hover:bg-white/8"
          >
            <span>{city.name}</span>
            <span className="text-xs text-slate-500">{city.countryCode}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
