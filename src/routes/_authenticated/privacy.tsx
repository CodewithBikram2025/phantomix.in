import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardShell, PageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, EyeOff, Lock, Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/privacy")({
  head: () => ({ meta: [{ title: "Privacy — Phantomix" }] }),
  component: PrivacyPage,
});

const stats = [
  { label: "Trackers blocked", value: "128,492", icon: Shield },
  { label: "Ads hidden", value: "84,210", icon: EyeOff },
  { label: "HTTPS upgrades", value: "12,884", icon: Lock },
  { label: "Phantom sessions", value: "342", icon: Ghost },
];

function PrivacyPage() {
  return (
    <DashboardShell>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <PageHeader title="Privacy" subtitle="Your shield against the open web." />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
            <Card className="glass-strong border-border/40">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-xs text-muted-foreground font-normal">{s.label}</CardTitle>
                <s.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-display font-bold">{s.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <Card className="glass-strong border-border/40">
        <CardHeader>
          <CardTitle>Privacy preferences</CardTitle>
          <CardDescription>Toggle blockers, HTTPS-only mode and telemetry in your profile settings.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild><Link to="/settings">Open settings</Link></Button>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
