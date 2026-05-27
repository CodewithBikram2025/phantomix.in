import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardShell, PageHeader } from "@/components/dashboard/DashboardShell";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Laptop } from "lucide-react";

export const Route = createFileRoute("/_authenticated/sessions")({
  head: () => ({ meta: [{ title: "Sessions — Phantomix" }] }),
  component: SessionsPage,
});

const sessions = [
  { device: "MacBook Pro", icon: Laptop, location: "Berlin, DE", ip: "82.14.•••.21", last: "Active now", current: true },
  { device: "iPhone 15", icon: Smartphone, location: "Berlin, DE", ip: "82.14.•••.21", last: "12 min ago", current: false },
  { device: "Windows Desktop", icon: Monitor, location: "Amsterdam, NL", ip: "145.7.•••.93", last: "2 hours ago", current: false },
  { device: "iPad Air", icon: Smartphone, location: "Paris, FR", ip: "91.22.•••.10", last: "Yesterday", current: false },
];

function SessionsPage() {
  return (
    <DashboardShell>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <PageHeader title="Sessions" subtitle="Devices currently signed in to your Phantomix account." />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-strong rounded-2xl p-5">
        <Table>
          <TableHeader>
            <TableRow className="border-border/40 hover:bg-transparent">
              <TableHead>Device</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>IP</TableHead>
              <TableHead>Last active</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions.map((s) => (
              <TableRow key={s.device} className="border-border/40">
                <TableCell className="font-medium flex items-center gap-2">
                  <s.icon className="h-4 w-4 text-primary" /> {s.device}
                  {s.current && <Badge className="ml-2 bg-primary/20 text-primary border-primary/40">This device</Badge>}
                </TableCell>
                <TableCell>{s.location}</TableCell>
                <TableCell className="tabular-nums text-muted-foreground">{s.ip}</TableCell>
                <TableCell>{s.last}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" disabled={s.current}>Revoke</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </DashboardShell>
  );
}
