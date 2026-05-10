import { Ghost } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Ghost className="h-6 w-6 text-primary" strokeWidth={2.5} />
            <span className="font-display font-bold text-lg">
              Phantom<span className="text-gradient">ix</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The privacy-first AI browser. Built for the people who build the future.
          </p>
        </div>

        {[
          { title: "Product", links: ["Features", "Security", "AI Tools", "Download"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
        ].map((c) => (
          <div key={c.title}>
            <div className="font-display font-semibold mb-3">{c.title}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-foreground transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>
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
    </footer>
  );
}
