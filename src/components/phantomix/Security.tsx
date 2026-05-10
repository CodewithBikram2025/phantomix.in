import { motion } from "framer-motion";
import { Shield, Lock, Eye, BarChart3, KeyRound } from "lucide-react";

const items = [
  { icon: Shield, title: "End-to-end Encryption", desc: "Your data, your keys. We literally can't read it." },
  { icon: Eye, title: "Tracker Blocking", desc: "Network-level blocking of 250k+ known trackers." },
  { icon: Lock, title: "Secure Browsing", desc: "Site isolation, HTTPS upgrades, sandboxed renderers." },
  { icon: KeyRound, title: "Encrypted Sync", desc: "Zero-knowledge sync with passphrase-derived keys." },
];

export function Security() {
  return (
    <section id="security" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-400/20 via-primary/20 to-accent/20 blur-3xl rounded-[3rem]" />
            <div className="relative glass-strong rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Privacy Dashboard</div>
                  <div className="text-2xl font-display font-bold mt-1">Last 7 days</div>
                </div>
                <BarChart3 className="h-5 w-5 text-accent" />
              </div>

              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { v: "12,438", l: "Trackers blocked", c: "from-primary to-accent" },
                  { v: "894", l: "Ads removed", c: "from-accent to-neon-cyan" },
                  { v: "2.7s", l: "Time saved", c: "from-neon-cyan to-primary" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-muted/30 border border-border p-3">
                    <div className={`text-lg font-bold bg-gradient-to-r ${s.c} bg-clip-text text-transparent`}>
                      {s.v}
                    </div>
                    <div className="text-[11px] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-muted/20 border border-border p-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-muted-foreground">Network shield</span>
                  <span className="text-emerald-400">Active · routed via Frankfurt</span>
                </div>
                <div className="h-24 flex items-end gap-1">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const h = 30 + Math.abs(Math.sin(i * 0.6)) * 70;
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-primary/40 to-accent"
                        style={{ height: `${h}%` }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
              <Shield className="h-3 w-3 text-emerald-400" /> Security & Privacy
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
              Your data is <span className="text-gradient">yours</span>. Period.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Phantomix is private by default. No accounts, no profiles, no behavioral ads — ever.
              Open-source, audited, and verifiable.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {items.map((it) => (
                <div key={it.title} className="glass rounded-xl p-4">
                  <it.icon className="h-5 w-5 text-emerald-400" />
                  <div className="mt-2 font-semibold">{it.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{it.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
