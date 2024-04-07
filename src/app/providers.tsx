"use client";

import { Suspense } from "react";
import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense>
        <QueryParamProvider adapter={NextAdapterApp}>
          {children}
        </QueryParamProvider>
      </Suspense>
    </>
  );
}
