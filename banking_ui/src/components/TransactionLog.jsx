export default function TransactionLog({ transactions }) {
  return (
    <div
      className="
        p-6 rounded-2xl shadow-xl 
        bg-white dark:bg-[#1A1B1F]
        border border-gray-300 dark:border-[#2A2A2F] 
        h-full
      "
    >
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Recent Activity
      </h2>

      {transactions.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">
          No transactions yet.
        </p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((txn, i) => (
            <li
              key={i}
              className="
                flex justify-between items-center p-3 rounded-xl transition
                bg-gray-100 dark:bg-[#222328]
                hover:bg-gray-200 dark:hover:bg-[#2A2A2F]
              "
            >
              {/* LEFT SIDE */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 capitalize">
                  {txn.type}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {txn.time}
                </p>
              </div>

              {/* RIGHT SIDE */}
              <div className="text-right">
                <p
                  className={`font-bold ${
                    txn.status === "SUCCESS"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {txn.type === "deposit" ? "+" : "-"}${txn.amount}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
