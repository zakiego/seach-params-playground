# Search Params Playground with Next.js APP Router

See live demo at
[seach-params-playground.vercel.app/search](https://seach-params-playground.vercel.app/search).

Playground for playing `searchParams` from
[Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/page) with
[next-query-params](https://www.npmjs.com/package/next-query-params) and
[useDebounce](https://www.npmjs.com/package/use-debounce).

See [client.tsx](/src/app/search/client.tsx) for the main logic.

```tsx copy
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
      placeholder={`Search "laptop", "phone", "watch"...`}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      defaultValue={query || ""}
    />
  );
};
```

Reference:

- https://nextjs.org/docs/app/api-reference/file-conventions/page
- https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
- https://www.npmjs.com/package/next-query-params
- https://www.npmjs.com/package/use-debounce
