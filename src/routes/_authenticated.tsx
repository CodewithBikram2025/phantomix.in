import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth?.loading && !context.auth?.session) {
      throw redirect({ to: "/login", search: { redirect: location.href } as any });
    }
  },
  component: () => <Outlet />,
});
