import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/phantomix/Navbar";
import { Hero } from "@/components/phantomix/Hero";
import { Features } from "@/components/phantomix/Features";
import { AISection } from "@/components/phantomix/AISection";
import { Security } from "@/components/phantomix/Security";
import { Download } from "@/components/phantomix/Download";
import { Community } from "@/components/phantomix/Community";
import { Footer } from "@/components/phantomix/Footer";

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
      <Navbar />
      <Hero />
      <Features />
      <AISection />
      <Security />
      <Download />
      <Community />
      <Footer />
    </main>
  );
}
