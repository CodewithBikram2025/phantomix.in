import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Mic, Sparkles, Workflow, Wand2, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";

const aiFeatures = [
  { icon: Sparkles, title: "AI Search Assistant", desc: "Natural-language search across the web, your tabs, and your history." },
  { icon: Wand2, title: "Smart Summarization", desc: "One-click TL;DRs of articles, papers, and entire video transcripts." },
  { icon: Mic, title: "Voice Browsing", desc: "Talk to your browser. Open sites, draft emails, run actions hands-free." },
  { icon: Workflow, title: "AI Tab Organization", desc: "Auto-group related tabs into projects and workspaces as you browse." },
  { icon: Brain, title: "Productivity Tools", desc: "Inline writing, code, and research helpers wherever the cursor lives." },
];

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What makes Phantomix different?",
  "Summarize the latest in AI browsers",
  "How does the built-in VPN work?",
];

export function AISection() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hey, I'm **Phantomix Copilot** ✨ — your in-browser AI. Ask me anything about the web, your tabs, or Phantomix itself.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || isLoading) return;

    const userMsg: Msg = { role: "user", content };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setIsLoading(true);

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!resp.ok || !resp.body) {
        if (resp.status === 429) toast.error("Rate limit hit. Try again shortly.");
        else if (resp.status === 402) toast.error("AI credits exhausted.");
        else toast.error("Copilot failed to respond.");
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistant = "";
      let done = false;

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buffer += decoder.decode(value, { stream: true });

        let nl: number;
        while ((nl = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, nl);
          buffer = buffer.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line || line.startsWith(":")) continue;
          if (!line.startsWith("data: ")) continue;

          const json = line.slice(6).trim();
          if (json === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(json);
            const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (delta) {
              assistant += delta;
              setMessages((prev) =>
                prev.map((m, i) =>
                  i === prev.length - 1 ? { ...m, content: assistant } : m,
                ),
              );
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Network error talking to Copilot.");
    } finally {
      setIsLoading(false);
    }
  }

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
            Phantomix Copilot lives in every page. It reads, writes, and reasons — so you can stay in flow.
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

        {/* Live Copilot chat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-accent/30 to-primary/30 blur-3xl rounded-[3rem]" />
          <div className="relative glass-strong rounded-2xl p-5 flex flex-col h-[540px]">
            <div className="flex items-center gap-2 pb-3 border-b border-border">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">Phantomix Copilot</div>
                <div className="text-[10px] text-emerald-400">● Online · Live AI</div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === "user"
                      ? "ml-auto max-w-[85%] rounded-xl bg-muted/50 px-3 py-2 text-sm"
                      : "max-w-[90%] rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 border border-primary/30 px-3 py-2 text-sm"
                  }
                >
                  <div className="prose prose-sm prose-invert max-w-none break-words [&>*]:my-1">
                    <ReactMarkdown>{m.content || "…"}</ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="max-w-[90%] rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 border border-primary/30 px-3 py-2 text-sm flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="h-3 w-3 animate-spin" /> Thinking…
                </div>
              )}
            </div>

            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 pb-3">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[11px] px-2.5 py-1 rounded-full glass border border-border hover:border-accent/40 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl glass border border-accent/30"
            >
              <Sparkles className="h-4 w-4 text-accent shrink-0" />
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Phantomix anything…"
                className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-7 w-7 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center disabled:opacity-40"
              >
                {isLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
