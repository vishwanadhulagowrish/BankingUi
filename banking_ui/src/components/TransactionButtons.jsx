import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function TransactionButtons({
  user,
  balance,
  setBalance,
  addTransaction,
  addFraudAlert,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [txnType, setTxnType] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [targetAcc, setTargetAcc] = useState("");
  const [error, setError] = useState("");

  const resetFields = () => {
    setAmount("");
    setPin("");
    setTargetAcc("");
    setError("");
  };

  const openModal = (type) => {
    setTxnType(type);
    resetFields();
    setModalOpen(true);
  };

  const handleTransaction = () => {
    if (pin !== user.pin) {
      setError("❌ Invalid PIN. Transaction denied.");
      return;
    }

    const amt = Number(amount);
    if (!amt || amt <= 0) {
      setError("Enter a valid amount.");
      return;
    }

    let newBalance = balance;

    if (txnType === "withdraw") {
      if (amt > balance) {
        setError("Insufficient funds.");
        return;
      }
      newBalance -= amt;
    }

    if (txnType === "deposit") newBalance += amt;

    if (txnType === "transfer") {
      if (!targetAcc) {
        setError("Enter target account ID.");
        return;
      }
      if (amt > balance) {
        setError("Insufficient funds for transfer.");
        return;
      }
      newBalance -= amt;

      if (amt > 5000) {
        addFraudAlert({
          message: `⚠️ Suspicious transfer of $${amt} to ${targetAcc}`,
          time: new Date().toLocaleTimeString(),
        });
      }
    }

    setBalance(newBalance);

    addTransaction({
      type: txnType,
      amount: amt,
      target: targetAcc || null,
      status: "SUCCESS",
      message:
        txnType === "transfer"
          ? `Transferred $${amt} to account ${targetAcc}`
          : `${txnType} of $${amt} successful`,
      time: new Date().toLocaleTimeString(),
    });

    setModalOpen(false);
  };

  const btnBase =
    "w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all shadow-md text-white";

  const headerColors = {
    withdraw: "from-red-500 to-red-600",
    deposit: "from-green-500 to-green-600",
    transfer: "from-blue-500 to-blue-600",
  };

  const headerIcon = {
    withdraw: "💸",
    deposit: "💰",
    transfer: "🔄",
  };

  return (
    <div className="space-y-4 p-5 
                    bg-white dark:bg-[#1A1B1F] 
                    border border-gray-300 dark:border-[#2A2A2F] 
                    rounded-2xl shadow-xl">

      <h3 className="text-lg font-bold mb-2 text-black dark:text-white">
        Quick Actions
      </h3>

      {/* Buttons */}
      <button
        className={`${btnBase} bg-red-500 hover:bg-red-600 hover:scale-[1.02]`}
        onClick={() => openModal("withdraw")}
      >
        💸 Withdraw
      </button>

      <button
        className={`${btnBase} bg-green-500 hover:bg-green-600 hover:scale-[1.02]`}
        onClick={() => openModal("deposit")}
      >
        💰 Deposit
      </button>

      <button
        className={`${btnBase} bg-blue-500 hover:bg-blue-600 hover:scale-[1.02]`}
        onClick={() => openModal("transfer")}
      >
        🔄 Transfer
      </button>

      <button
        className={`
          w-full flex items-center justify-center gap-2 py-3 rounded-xl 
          font-semibold bg-gray-700 hover:bg-gray-800 hover:scale-[1.02]
          text-white shadow-md
        `}
        onClick={() => alert(`Current Balance: $${balance.toLocaleString()}`)}
      >
        📊 Check Balance
      </button>

      {/* ====================== MODAL ====================== */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="
          bg-white dark:bg-gray-800 
          text-black dark:text-white
          rounded-2xl p-6 w-96 mx-auto mt-24 
          shadow-2xl border border-gray-300 dark:border-[#2A2A2F]
          outline-none
        "
        overlayClassName="
          fixed inset-0 bg-black/40 backdrop-blur-sm 
          flex justify-center 
        "
      >
        {/* Header */}
        <div
          className={`bg-gradient-to-r ${headerColors[txnType]} 
                     text-white p-4 rounded-xl shadow 
                     flex items-center gap-3 mb-4`}
        >
          <div className="text-3xl animate-bounce">{headerIcon[txnType]}</div>
          <h2 className="text-xl font-bold capitalize">{txnType} Money</h2>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 bg-red-100 dark:bg-red-900/40 
                        dark:text-red-300 p-2 mb-3 rounded-md text-sm 
                        border border-red-300 dark:border-red-700">
            {error}
          </p>
        )}

        {/* Balance Box */}
        <div className="
          p-3 mb-4 rounded-xl 
          bg-gray-100 dark:bg-gray-700 
          border border-gray-300 dark:border-[#2A2A2F]
          flex justify-between items-center
        ">
          <span className="text-gray-700 dark:text-gray-300">
            Available Balance:
          </span>
          <span className="font-bold text-green-600 dark:text-green-400 text-lg">
            ${balance.toLocaleString()}
          </span>
        </div>

        {/* Transfer Target Input */}
        {txnType === "transfer" && (
          <input
            className="
              w-full p-3 border-2 rounded-xl mb-4 
              bg-gray-50 dark:bg-gray-700 
              text-black dark:text-white 
              border-gray-300 dark:border-[#2A2A2F]
            "
            placeholder="Target Account ID"
            value={targetAcc}
            onChange={(e) => setTargetAcc(e.target.value)}
          />
        )}

        {/* Amount Input */}
        <input
          className="
            w-full p-3 border-2 rounded-xl mb-4
            bg-gray-50 dark:bg-gray-700 
            text-black dark:text-white
            border-gray-300 dark:border-[#2A2A2F]
          "
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* PIN Input */}
        <input
          className="
            w-full p-3 border-2 rounded-xl mb-4
            bg-gray-50 dark:bg-gray-700 
            text-black dark:text-white
            border-gray-300 dark:border-[#2A2A2F]
          "
          placeholder="Enter PIN"
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className="
              px-4 py-2 rounded-xl 
              bg-gray-300 hover:bg-gray-400 
              dark:bg-gray-600 dark:hover:bg-gray-500 
              text-black dark:text-white
            "
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>

          <button
            className={`
              px-4 py-2 rounded-xl text-white 
              bg-gradient-to-r ${headerColors[txnType]}
              hover:scale-105 transition
            `}
            onClick={handleTransaction}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
}
