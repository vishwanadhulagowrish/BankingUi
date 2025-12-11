import { motion } from "framer-motion";

export default function ParallelVisualizer() {
  const threads = [1,2,3,4];

  return (
    <div className="mt-10">
      <h2 className="text-2xl neon-text mb-4">Parallel Transactions</h2>

      <div className="flex gap-4">
        {threads.map(t => (
          <motion.div
            key={t}
            className="w-32 h-32 neon-card rounded-xl flex items-center justify-center neon-text"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Thread {t}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
