import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardShell, PageHeader } from "@/components/dashboard/DashboardShell";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Activity, Globe2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/analytics")({
  head: () => ({ meta: [{ title: "Analytics — Phantomix" }] }),
  component: AnalyticsPage,
});

const kpis = [
  { label: "Avg. page load", value: "412ms", icon: Clock, delta: "−18%" },
  { label: "Bandwidth saved", value: "2.4 GB", icon: TrendingUp, delta: "+11%" },
  { label: "Requests / hr", value: "8,219", icon: Activity, delta: "+4.2%" },
  { label: "Top region", value: "EU-West", icon: Globe2, delta: "42%" },
];

function AnalyticsPage() {
  return (
    <DashboardShell>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <PageHeader title="Analytics" subtitle="Performance and usage insights across your phantom sessions." />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k, i) => (
          <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <Card className="glass-strong border-border/40">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-xs text-muted-foreground font-normal">{k.label}</CardTitle>
                <k.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-display font-bold">{k.value}</p>
                <p className="text-xs text-emerald-400 mt-1">{k.delta}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <DashboardCharts />
    </DashboardShell>
  );
}
