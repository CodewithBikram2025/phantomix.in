import { motion } from "framer-motion";
import { Apple, Download as DownloadIcon, Globe } from "lucide-react";

const platforms = [
  { name: "Windows", sub: "Win 10, 11", icon: "windows" },
  { name: "macOS", sub: "Apple Silicon · Intel", icon: "apple" },
  { name: "Linux", sub: ".deb · .rpm · AppImage", icon: "linux" },
  { name: "Android", sub: "12+", icon: "android" },
  { name: "iOS", sub: "16+", icon: "ios" },
];

function PlatformIcon({ kind }: { kind: string }) {
  if (kind === "apple" || kind === "ios") return <Apple className="h-7 w-7" />;
  // simple stylized squares
  return (
    <div className="grid grid-cols-2 gap-0.5 h-7 w-7">
      <span className="bg-foreground rounded-sm" />
      <span className="bg-foreground rounded-sm" />
      <span className="bg-foreground rounded-sm" />
      <span className="bg-foreground rounded-sm" />
    </div>
  );
}

export function Download() {
  return (
    <section id="download" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
            Available <span className="text-gradient">everywhere</span> you browse
          </h2>
          <p className="mt-4 text-muted-foreground">
            Download Phantomix for your favorite platform — or launch the web app instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href="https://your-browser-link.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass rounded-2xl p-6 text-center hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <div className="mx-auto h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center mb-3 group-hover:glow-purple transition">
                <PlatformIcon kind={p.icon} />
              </div>
              <div className="font-display font-semibold">{p.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{p.sub}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition">
                <DownloadIcon className="h-3 w-3" /> Download
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-neon-cyan/20 opacity-50" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              Don't want to install? Use Phantomix on the web.
            </h3>
            <p className="mt-2 text-muted-foreground">All the features. Zero footprint.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="https://your-webapp-link.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground glow-purple hover:scale-105 transition"
              >
                <Globe className="h-4 w-4" /> Open Web App
              </a>
              <a
                href="https://your-browser-link.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium glass-strong hover:border-accent/50 transition"
              >
                Visit Website
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
