import { motion } from "framer-motion";
import { Download, ExternalLink, Sparkles } from "lucide-react";
import { BrowserMockup } from "./BrowserMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* grid + blobs */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[140px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-neon-cyan/10 blur-[120px]" />

      {/* floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent/70"
          style={{
            left: `${(i * 73) % 100}%`,
            top: `${(i * 47) % 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-muted-foreground">Now with AI Copilot</span>
              <span className="text-accent">v3.0</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Browse Smarter <br />
              with <span className="text-gradient">Phantomix</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Privacy-first AI browser built for speed, security, and the future. Tabs that think,
              search that understands, a network that protects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium bg-gradient-to-r from-primary via-neon-purple to-accent text-primary-foreground glow-purple hover:scale-105 transition-transform"
              >
                <Download className="h-4 w-4" />
                Download Browser
              </a>
              <a
                href="https://your-webapp-link.com"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium glass-strong hover:border-accent/50 transition-all"
              >
                <ExternalLink className="h-4 w-4 text-accent" />
                Open Web App
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              {[
                { v: "3×", l: "Faster than Chrome" },
                { v: "0", l: "Trackers allowed" },
                { v: "10M+", l: "Active users" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-display font-bold text-foreground">{s.v}</div>
                  <div>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <BrowserMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
