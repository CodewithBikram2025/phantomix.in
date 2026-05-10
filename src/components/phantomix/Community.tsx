import { motion } from "framer-motion";
import { MessagesSquare, Github, Twitter, Code2 } from "lucide-react";

const items = [
  { icon: MessagesSquare, title: "Discord", desc: "Join 80k+ users and devs", href: "#" },
  { icon: Github, title: "GitHub", desc: "Open source · star us", href: "#" },
  { icon: Twitter, title: "Twitter / X", desc: "Product updates & demos", href: "#" },
  { icon: Code2, title: "Developer API", desc: "Build on Phantomix", href: "#" },
];

export function Community() {
  return (
    <section id="community" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display font-bold"
        >
          Join the <span className="text-gradient">Phantomix</span> community
        </motion.h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          A global community of builders, hackers, and privacy advocates shaping the next era of
          the web.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href={it.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 text-left hover:border-primary/50 hover:-translate-y-1 transition-all group"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 border border-border flex items-center justify-center group-hover:glow-purple transition">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display font-semibold">{it.title}</div>
              <div className="text-sm text-muted-foreground">{it.desc}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
