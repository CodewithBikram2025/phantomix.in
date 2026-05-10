import { motion } from "framer-motion";
import { Brain, Mic, Sparkles, Workflow, Wand2 } from "lucide-react";

const aiFeatures = [
  { icon: Sparkles, title: "AI Search Assistant", desc: "Natural-language search across the web, your tabs, and your history." },
  { icon: Wand2, title: "Smart Summarization", desc: "One-click TL;DRs of articles, papers, and entire video transcripts." },
  { icon: Mic, title: "Voice Browsing", desc: "Talk to your browser. Open sites, draft emails, run actions hands-free." },
  { icon: Workflow, title: "AI Tab Organization", desc: "Auto-group related tabs into projects and workspaces as you browse." },
  { icon: Brain, title: "Productivity Tools", desc: "Inline writing, code, and research helpers wherever the cursor lives." },
];

export function AISection() {
  return (
    <section id="ai" className="relative py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
            <Sparkles className="h-3 w-3 text-accent" /> AI Tools
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
            An <span className="text-gradient">intelligent layer</span> over the web
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Phantomix Copilot lives in every page. It reads, writes, and reasons — so you can
            stay in flow.
          </p>

          <div className="mt-8 space-y-3">
            {aiFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 glass rounded-xl p-4 hover:border-accent/40 transition"
              >
                <div className="shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center border border-accent/30">
                  <f.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-sm text-muted-foreground">{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI chat preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-accent/30 to-primary/30 blur-3xl rounded-[3rem]" />
          <div className="relative glass-strong rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">Phantomix Copilot</div>
                <div className="text-[10px] text-emerald-400">● Online · GPT-class model</div>
              </div>
            </div>

            <div className="rounded-xl bg-muted/40 p-3 text-sm">
              Summarize this 38-tab research session into a brief I can send to my team.
            </div>
            <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 border border-primary/30 p-3 text-sm space-y-2">
              <p>Done. Across your tabs I found 4 themes:</p>
              <ul className="list-disc list-inside text-muted-foreground text-xs space-y-1">
                <li>Edge inference outpacing centralized clouds (12 sources)</li>
                <li>Privacy-preserving ML adoption in EU fintech</li>
                <li>WebGPU benchmarks beating native by 18%</li>
                <li>Open-source Chromium forks gaining share</li>
              </ul>
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl glass border border-accent/30">
              <Sparkles className="h-4 w-4 text-accent" />
              <input
                placeholder="Ask anything…"
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
              />
              <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-muted">⌘K</kbd>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
