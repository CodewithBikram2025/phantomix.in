import { motion } from "framer-motion";
import {
  Sparkles, Zap, ShieldOff, Lock, RefreshCw, LayoutGrid, Wallet, Puzzle,
} from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Assistant", desc: "Built-in copilot that summarizes, writes, and answers across every tab." },
  { icon: Zap, title: "Ultra Fast", desc: "Native multi-threaded engine. Pages load up to 3× faster than Chromium." },
  { icon: ShieldOff, title: "Built-in Ad Blocker", desc: "Industry-leading shields strip ads, trackers, and fingerprints by default." },
  { icon: Lock, title: "VPN & Privacy Shield", desc: "One-tap encrypted tunnel with no-logs policy and global edge nodes." },
  { icon: RefreshCw, title: "Cross-Platform Sync", desc: "End-to-end encrypted sync across desktop, mobile, and web." },
  { icon: LayoutGrid, title: "Tab Workspaces", desc: "Group, split, and snapshot tabs into focused workspaces with one click." },
  { icon: Wallet, title: "Crypto Wallet", desc: "Native multi-chain wallet for ETH, SOL, BTC and dApp browsing." },
  { icon: Puzzle, title: "Extension Marketplace", desc: "Curated, sandboxed extensions vetted for privacy and performance." },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
            <span className="text-accent">●</span> Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
            Everything you need, <span className="text-gradient">built in</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A browser engineered from the ground up for the AI era. No add-ons required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all pointer-events-none" />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border border-primary/30 group-hover:glow-purple transition">
                  <f.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
