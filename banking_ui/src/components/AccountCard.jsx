import { motion } from "framer-motion";

export default function AccountCard({ user }) {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}

      className="
        p-6 rounded-2xl shadow-xl border 
        bg-white dark:bg-gradient-to-br 
        dark:from-[#2B2B33] dark:to-[#1A1B1F] 
        border-gray-300 dark:border-[#2A2A2F]
        text-black dark:text-white 
        relative overflow-hidden
      "
    >
      {/* TITLE */}
      <h2 className="text-xl font-bold">Debit Card</h2>

      {/* CARD NUMBER */}
      <div className="mt-5 text-2xl tracking-widest text-gray-800 dark:text-gray-200">
        **** **** **** {user.accountId.slice(-4)}
      </div>

      {/* USER NAME */}
      <p className="mt-3 text-gray-600 dark:text-gray-400">{user.name}</p>

      {/* BALANCE */}
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Balance: ${user.balance}
      </p>

      {/* SHINE EFFECT */}
      <motion.div
        animate={{ x: ["-150%", "150%"] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-0 left-0 w-32 h-full 
                   bg-white/40 dark:bg-white/10 
                   blur-2xl rotate-12"
      />
    </motion.div>
  );
}
