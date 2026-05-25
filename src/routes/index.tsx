import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/phantomix/Navbar";
import { Hero } from "@/components/phantomix/Hero";
import { Features } from "@/components/phantomix/Features";
import { AISection } from "@/components/phantomix/AISection";
import { Security } from "@/components/phantomix/Security";
import { Download } from "@/components/phantomix/Download";
import { Community } from "@/components/phantomix/Community";
import { Footer } from "@/components/phantomix/Footer";
import { ScrollProgress } from "@/components/phantomix/ScrollProgress";
import { AnimatedBackground } from "@/components/phantomix/AnimatedBackground";
import { ScrollToTop } from "@/components/phantomix/ScrollToTop";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Phantomix — Privacy-first AI Browser" },
      {
        name: "description",
        content:
          "Phantomix is the privacy-first AI browser built for speed, security, and the future. Download for desktop and mobile.",
      },
      { property: "og:title", content: "Phantomix — Privacy-first AI Browser" },
      {
        property: "og:description",
        content: "Browse smarter with Phantomix. AI Copilot, built-in VPN, encrypted sync.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
        <Features />
      </motion.div>
      <AISection />
      <Security />
      <Download />
      <Community />
      <Footer />
      <ScrollToTop />
      <Toaster position="bottom-right" theme="dark" />
    </main>
  );
}
