import { AnimatePresence, motion } from "framer-motion";
import { Ghost, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "AI Tools", href: "#ai" },
  { label: "Download", href: "#download" },
  { label: "Community", href: "#community" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full group-hover:bg-primary/60 transition" />
              <Ghost className="relative h-7 w-7 text-primary" strokeWidth={2.5} />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Phantom<span className="text-gradient">ix</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://your-webapp-link.com"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Sign in
            </a>
            <a
              href="#download"
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-primary via-neon-purple to-accent text-primary-foreground glow-purple hover:scale-105 transition-transform"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden glass-strong mt-2 rounded-2xl p-4 flex flex-col gap-3 overflow-hidden"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm py-2"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#download"
                className="mt-2 text-center px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Get Started
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
