import { motion } from "framer-motion";
import { Shield, Zap, Globe, Sparkles } from "lucide-react";

const stats = [
  { label: "Trackers Blocked", value: "128,492", change: "+12.4%", icon: Shield, color: "from-primary to-neon-purple" },
  { label: "Pages Loaded", value: "9,213", change: "+3.1%", icon: Zap, color: "from-accent to-neon-cyan" },
  { label: "Sessions", value: "1,284", change: "+8.7%", icon: Globe, color: "from-neon-blue to-accent" },
  { label: "AI Queries", value: "542", change: "+24.5%", icon: Sparkles, color: "from-neon-purple to-primary" },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          className="glass-strong rounded-2xl p-5 relative overflow-hidden group"
        >
          <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-2xl group-hover:opacity-40 transition`} />
          <div className="relative">
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} mb-3`}>
              <s.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-display font-bold mt-1">{s.value}</p>
            <p className="text-xs text-emerald-400 mt-1">{s.change} this week</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
