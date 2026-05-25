import { motion } from "framer-motion";
import { Ghost } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Security", "AI Tools", "Download"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="relative border-t border-border mt-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="flex items-center gap-2">
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }}>
              <Ghost className="h-6 w-6 text-primary" strokeWidth={2.5} />
            </motion.div>
            <span className="font-display font-bold text-lg">
              Phantom<span className="text-gradient">ix</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The privacy-first AI browser. Built for the people who build the future.
          </p>
        </motion.div>

        {cols.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
          >
            <div className="font-display font-semibold mb-3">{c.title}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all">{l}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Phantomix Labs. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Security</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
