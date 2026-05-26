import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { RecentTable } from "@/components/dashboard/RecentTable";
import { AnimatedBackground } from "@/components/phantomix/AnimatedBackground";
import { useAuthSession } from "@/hooks/use-auth-session";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Phantomix" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const { session } = useAuthSession();
  const email = session?.user?.email;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full relative">
        <AnimatedBackground />
        <AppSidebar />
        <SidebarInset className="relative z-10 bg-transparent">
          <DashboardNavbar email={email} />
          <main className="p-4 md:p-6 space-y-6">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                Welcome back<span className="text-gradient">.</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Here's what your phantom browser has been doing.
              </p>
            </motion.div>
            <StatsCards />
            <DashboardCharts />
            <RecentTable />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
