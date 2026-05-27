import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { RecentTable } from "@/components/dashboard/RecentTable";
import { DashboardShell, PageHeader } from "@/components/dashboard/DashboardShell";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Phantomix" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <DashboardShell>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <PageHeader title="Welcome back" subtitle="Here's what your phantom browser has been doing." />
      </motion.div>
      <StatsCards />
      <DashboardCharts />
      <RecentTable />
    </DashboardShell>
  );
}
