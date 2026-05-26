import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import type { Session } from "@supabase/supabase-js";

export type RouterAuth = {
  session: Session | null;
  loading: boolean;
};

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: {
      queryClient,
      auth: { session: null, loading: true } as RouterAuth,
    },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
