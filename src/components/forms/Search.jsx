import { SearchIcon } from "lucide-react";
import React from "react";

function Search({ placeholder }) {
  return (
    <div className="relative w-full ">
      <div className="text-secondary-text absolute left-4 top-3">
        <SearchIcon size={15} />
      </div>
      <input
        type="text"
        className="bg-input text-primary-text placeholder:text-secondary-text/90 p-2 rounded-lg text-[14px] leading-5 font-medium border border-transparent pl-10 w-full focus:border-button focus:outline-0"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Search;
