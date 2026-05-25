import { motion } from "framer-motion";
import { Lock, Sparkles, Search, Plus, Shield, Zap, BarChart3, MessageSquare } from "lucide-react";

export function BrowserMockup() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ rotateX: 4, rotateY: -6, scale: 1.02 }}
      style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
      className="relative"
    >
      {/* glow */}
      <div className="absolute -inset-8 bg-gradient-to-tr from-primary/40 via-accent/30 to-neon-cyan/30 blur-3xl rounded-[3rem] opacity-70" />

      <div className="relative glass-strong rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_oklch(0.05_0_0/0.8)]">
        {/* Browser top bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-background/40">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-destructive/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
          </div>
          {/* tabs */}
          <div className="flex-1 flex items-center gap-1.5 ml-3 overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-t-lg bg-card text-xs">
              <Sparkles className="h-3 w-3 text-accent" />
              <span>Phantomix · Home</span>
            </div>
            <div className="px-3 py-1.5 rounded-t-lg text-xs text-muted-foreground hidden sm:block">
              Research · Web3
            </div>
            <div className="px-3 py-1.5 rounded-t-lg text-xs text-muted-foreground hidden md:block">
              AI Copilot
            </div>
            <Plus className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        </div>

        {/* address bar */}
        <div className="px-4 py-2.5 border-b border-border flex items-center gap-2">
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-background/60 border border-border">
            <Lock className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs text-muted-foreground">phantomix://dashboard</span>
            <div className="ml-auto flex items-center gap-1 text-[10px] text-accent">
              <Shield className="h-3 w-3" /> 28 trackers blocked
            </div>
          </div>
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* body */}
        <div className="grid grid-cols-12 min-h-[340px]">
          {/* sidebar */}
          <div className="col-span-2 border-r border-border p-3 space-y-3 bg-background/30">
            {[Sparkles, MessageSquare, Shield, BarChart3, Zap].map((Icon, i) => (
              <div
                key={i}
                className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                  i === 0
                    ? "bg-gradient-to-tr from-primary to-accent glow-purple"
                    : "bg-muted/40"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>

          {/* main */}
          <div className="col-span-7 p-5 space-y-3">
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl glass border border-accent/40 glow-cyan">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-xs text-muted-foreground">Ask Phantomix anything…</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["Markets today", "Summarize tabs", "Plan my week", "Find papers"].map((t) => (
                <div key={t} className="px-3 py-3 rounded-xl bg-card/60 border border-border text-xs hover:border-primary/50 transition">
                  {t}
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent border border-border p-3">
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Performance</div>
              <div className="mt-1 flex items-end gap-1 h-12">
                {[40, 65, 50, 80, 95, 70, 85, 90, 60, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-primary to-accent"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* AI panel */}
          <div className="col-span-3 border-l border-border p-3 bg-background/40 space-y-2">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Copilot</div>
            <div className="rounded-lg bg-card/60 p-2.5 text-[11px]">
              <span className="text-accent">▸</span> Summarize this page
            </div>
            <div className="rounded-lg bg-gradient-to-r from-primary/30 to-accent/20 p-2.5 text-[11px]">
              <div className="text-foreground">Phantomix is built for…</div>
            </div>
            <div className="rounded-lg bg-card/60 p-2.5 text-[11px] text-muted-foreground">
              Suggest 3 follow-ups
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
