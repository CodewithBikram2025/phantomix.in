import { motion } from "framer-motion";
import {
  Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid,
} from "recharts";

const traffic = [
  { d: "Mon", a: 240, b: 110 }, { d: "Tue", a: 320, b: 180 },
  { d: "Wed", a: 280, b: 150 }, { d: "Thu", a: 410, b: 220 },
  { d: "Fri", a: 380, b: 260 }, { d: "Sat", a: 510, b: 300 },
  { d: "Sun", a: 460, b: 340 },
];

const trackers = [
  { d: "Mon", v: 1200 }, { d: "Tue", v: 1800 }, { d: "Wed", v: 1500 },
  { d: "Thu", v: 2400 }, { d: "Fri", v: 2100 }, { d: "Sat", v: 2900 }, { d: "Sun", v: 2600 },
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="glass-strong rounded-2xl p-5 lg:col-span-2"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display font-semibold">Browsing Activity</h3>
            <p className="text-xs text-muted-foreground">Pages loaded vs AI queries — last 7 days</p>
          </div>
          <div className="flex gap-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Pages</span>
            <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent" /> AI</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={traffic}>
            <defs>
              <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.7 0.26 305)" stopOpacity={0.6} />
                <stop offset="100%" stopColor="oklch(0.7 0.26 305)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gb" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.18 220)" stopOpacity={0.6} />
                <stop offset="100%" stopColor="oklch(0.78 0.18 220)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" />
            <XAxis dataKey="d" stroke="oklch(0.7 0.04 280)" fontSize={12} />
            <YAxis stroke="oklch(0.7 0.04 280)" fontSize={12} />
            <Tooltip contentStyle={{ background: "oklch(0.16 0.04 280)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
            <Area type="monotone" dataKey="a" stroke="oklch(0.7 0.26 305)" fill="url(#ga)" strokeWidth={2} />
            <Area type="monotone" dataKey="b" stroke="oklch(0.78 0.18 220)" fill="url(#gb)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="glass-strong rounded-2xl p-5"
      >
        <h3 className="font-display font-semibold">Trackers Blocked</h3>
        <p className="text-xs text-muted-foreground mb-4">Daily shield activity</p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={trackers}>
            <defs>
              <linearGradient id="gbar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.88 0.18 195)" />
                <stop offset="100%" stopColor="oklch(0.7 0.26 305)" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" />
            <XAxis dataKey="d" stroke="oklch(0.7 0.04 280)" fontSize={12} />
            <YAxis stroke="oklch(0.7 0.04 280)" fontSize={12} />
            <Tooltip contentStyle={{ background: "oklch(0.16 0.04 280)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
            <Bar dataKey="v" fill="url(#gbar)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
