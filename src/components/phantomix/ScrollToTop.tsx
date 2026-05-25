import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => setShow(v > 0.15));
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent glow-purple flex items-center justify-center text-primary-foreground"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
