"use client";

import { StringParam, useQueryParam } from "use-query-params";
import { useDebouncedCallback } from "use-debounce";

export const SearchInput = () => {
  const [query, setQuery] = useQueryParam("query", StringParam);

  const handleChange = useDebouncedCallback((value: string) => {
    if (value === "") {
      setQuery(undefined);
      return;
    }

    setQuery(value);
  }, 500);

  return (
    <input
      className="ring-1 ring-gray-300 rounded-md min-w-full p-2"
      placeholder={`Search "laptop", "phone", "watch"...`}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      defaultValue={query || ""}
    />
  );
};
