import { motion } from "framer-motion";

export default function NeonCard({ label, value, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="neon-card p-6 rounded-xl neon-glow cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <Icon className="text-cyan-400" size={32} />
        <div>
          <p className="text-cyan-300 text-sm">{label}</p>
          <h2 className="text-3xl font-bold neon-text">{value}</h2>
        </div>
      </div>
    </motion.div>
  );
}
