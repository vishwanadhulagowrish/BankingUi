import { motion } from "framer-motion";

export default function FraudAlertPanel({ alerts }) {
  return (
    <div
      className="
        p-6 rounded-2xl shadow-xl h-full 
        bg-white dark:bg-[#1A1B1F]
        border border-gray-300 dark:border-[#2A2A2F]
      "
    >
      <h2 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">
        Fraud Alerts
      </h2>

      {alerts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No fraud detected.
        </p>
      ) : (
        <ul className="space-y-3">
          {alerts.map((alert, i) => (
            <motion.li
              key={i}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="
                p-3 rounded-xl shadow 
                border border-red-300 dark:border-red-500
                bg-red-100 dark:bg-[#3A1F2F]
                text-red-700 dark:text-red-300
              "
            >
              ⚠️ {alert.message}

              <p className="text-xs mt-1 text-red-600 dark:text-red-200">
                {alert.time}
              </p>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}
