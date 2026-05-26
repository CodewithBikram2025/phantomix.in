import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

const rows = [
  { site: "github.com", visits: 142, blocked: 28, ai: 12, status: "Secure" },
  { site: "openai.com", visits: 98, blocked: 14, ai: 41, status: "Secure" },
  { site: "news.ycombinator.com", visits: 76, blocked: 9, ai: 3, status: "Secure" },
  { site: "ads.tracker-net.io", visits: 0, blocked: 64, ai: 0, status: "Blocked" },
  { site: "figma.com", visits: 53, blocked: 6, ai: 8, status: "Secure" },
  { site: "youtube.com", visits: 89, blocked: 32, ai: 4, status: "Secure" },
  { site: "malware-host.bad", visits: 0, blocked: 12, ai: 0, status: "Blocked" },
];

export function RecentTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      className="glass-strong rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold">Recent Sites</h3>
          <p className="text-xs text-muted-foreground">Your private browsing history (encrypted)</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border/40 hover:bg-transparent">
              <TableHead>Site</TableHead>
              <TableHead className="text-right">Visits</TableHead>
              <TableHead className="text-right">Blocked</TableHead>
              <TableHead className="text-right">AI Uses</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.site} className="border-border/40">
                <TableCell className="font-medium flex items-center gap-2">
                  <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                  {r.site}
                </TableCell>
                <TableCell className="text-right tabular-nums">{r.visits}</TableCell>
                <TableCell className="text-right tabular-nums text-accent">{r.blocked}</TableCell>
                <TableCell className="text-right tabular-nums">{r.ai}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant="outline"
                    className={r.status === "Secure"
                      ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                      : "border-destructive/40 text-destructive bg-destructive/10"}
                  >
                    {r.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
}
