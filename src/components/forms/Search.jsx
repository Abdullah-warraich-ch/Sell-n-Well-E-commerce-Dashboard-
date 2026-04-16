import { SearchIcon } from "lucide-react";
import React from "react";

function Search({ placeholder }) {
  return (
    <div className="relative w-full group">
      <div className="text-secondary-text absolute left-4 top-1/2 -translate-y-1/2 group-focus-within:text-info transition-colors">
        <SearchIcon size={18} />
      </div>
      <input
        type="text"
        className="bg-secondary text-primary-text placeholder:text-secondary-text/70 py-3 rounded-xl text-[14px] font-medium border border-border pl-11 pr-4 w-full focus:border-button focus:ring-2 focus:ring-button/20 outline-none transition-all hover:border-[color-mix(in_srgb,var(--bg-button)_40%,transparent)] h-[46px]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
