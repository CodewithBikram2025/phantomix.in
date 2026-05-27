import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DashboardShell, PageHeader } from "@/components/dashboard/DashboardShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export const Route = createFileRoute("/_authenticated/members")({
  head: () => ({ meta: [{ title: "Members — Phantomix" }] }),
  component: MembersPage,
});

const members = [
  { name: "Aria Chen", email: "aria@phantomix.app", role: "Owner", status: "Active" },
  { name: "Leo Martens", email: "leo@phantomix.app", role: "Admin", status: "Active" },
  { name: "Mira Patel", email: "mira@phantomix.app", role: "Member", status: "Active" },
  { name: "Kai Nakamura", email: "kai@phantomix.app", role: "Member", status: "Invited" },
  { name: "Sofia Rossi", email: "sofia@phantomix.app", role: "Viewer", status: "Active" },
];

function MembersPage() {
  return (
    <DashboardShell>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between gap-4 flex-wrap">
        <PageHeader title="Members" subtitle="People with access to your Phantomix workspace." />
        <Button className="gap-2"><UserPlus className="h-4 w-4" /> Invite member</Button>
      </motion.div>
      <Card className="glass-strong border-border/40">
        <CardHeader><CardTitle>Team ({members.length})</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border/40 hover:bg-transparent">
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((m) => (
                <TableRow key={m.email} className="border-border/40">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-primary/40">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-xs">
                          {m.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{m.name}</p>
                        <p className="text-xs text-muted-foreground">{m.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-primary/40 text-primary">{m.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={m.status === "Active"
                      ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                      : "border-amber-500/40 text-amber-400 bg-amber-500/10"}>
                      {m.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Manage</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
