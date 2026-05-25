import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[140px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[160px]"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-neon-cyan/10 blur-[140px]"
      />
      {Array.from({ length: 22 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent/40"
          style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
          animate={{ y: [0, -40, 0], opacity: [0.1, 0.8, 0.1] }}
          transition={{ duration: 5 + (i % 5), repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}
