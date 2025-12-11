import { useState } from "react";
import Sidebar from "../components/Sidebar";
import AccountCard from "../components/AccountCard";
import TransactionButtons from "../components/TransactionButtons";
import TransactionLog from "../components/TransactionLog";
import FraudAlertPanel from "../components/FraudAlertPanel";
import AssetChart from "../components/AssetChart";

export default function DashboardPage({ user, logout, activePage, onNavigate }) {
  const [balance, setBalance] = useState(user.balance);
  const [transactions, setTransactions] = useState([]);
  const [fraudAlerts, setFraudAlerts] = useState([]);

  const addTransaction = (txn) => setTransactions((prev) => [txn, ...prev]);
  const addFraudAlert = (alert) => setFraudAlerts((prev) => [alert, ...prev]);

  // ----------------------------------------------------------
  // PAGE COMPONENTS (Based on Sidebar Navigation)
  // ----------------------------------------------------------

  // 🏠 DASHBOARD PAGE (Your original layout)
  const DashboardSection = () => (
    <>
      {/* HEADER */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold">Welcome, {user.name.split(" ")[0]} 👋</h1>
        <p className="text-gray-400 mt-1">
          Your secure banking dashboard.
        </p>
      </header>

      {/* TOP GRID */}
      <div className="grid grid-cols-3 gap-8">

        {/* BALANCE CARD */}
        <div className="col-span-2 bg-white dark:bg-gradient-to-br dark:from-[#2B2B33] dark:to-[#1A1B1F]
        text-black dark:text-white rounded-2xl p-6 shadow-xl border border-[#2A2A2F]">
          <h2 className="text-lg text-gray-300">Total Balance</h2>
          <h1 className="text-5xl font-bold mt-3">${balance.toLocaleString()}</h1>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-2 rounded-xl bg-[#9B6BFF] text-white font-semibold hover:bg-[#8255d7] transition">
              ➕ New Transfer
            </button>

            <button className="px-5 py-2 rounded-xl border border-[#3A3A41] text-gray-300 hover:bg-[#2A2A2F] transition">
              📜 Full History
            </button>
          </div>
        </div>

        {/* RIGHT PANEL (DEBT + ASSETS + CHART) */}
        <div className="space-y-4">

          <div className="bbg-white dark:bg-[#1A1B1F] text-black dark:text-white
border-gray-300 dark:border-[#2A2A2F]
 p-5 rounded-2xl shadow-md border border-[#2A2A2F]">
            <p className="text-gray-400 text-sm">Credit Bank Debt</p>
            <h2 className="text-2xl font-bold mt-1">$8,445.98</h2>
            <div className="mt-3 w-full bg-[#2A2A2F] rounded-full h-2">
              <div className="bg-[#9B6BFF] h-2 rounded-full w-[54%]"></div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1A1B1F] text-black dark:text-white
border-gray-300 dark:border-[#2A2A2F]
 p-5 rounded-2xl shadow-md border border-[#2A2A2F]">
            <p className="text-gray-400 text-sm">Your Assets</p>
            <h2 className="text-2xl font-bold mt-1">$11,239.00</h2>
            <p className="text-red-500 text-sm">▼ 3% this week</p>
          </div>

          <AssetChart />
        </div>
      </div>

      {/* ACCOUNT & ACTIONS */}
      <div className="grid grid-cols-3 gap-8 mt-8">

        <div className="bg-white dark:bg-[#1A1B1F] text-black dark:text-white
border-gray-300 dark:border-[#2A2A2F]
 rounded-2xl border border-[#2A2A2F] shadow-xl p-5">
          <AccountCard user={{ ...user, balance }} />
        </div>

        <div className="bg-[#1A1B1F] rounded-2xl border border-[#2A2A2F] shadow-xl p-5 col-span-2">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

          <TransactionButtons
            user={user}
            balance={balance}
            setBalance={setBalance}
            addTransaction={addTransaction}
            addFraudAlert={addFraudAlert}
          />
        </div>
      </div>

      {/* LOWER GRID */}
      <div className="grid grid-cols-3 gap-8 mt-8">

        <div className="col-span-2">
          <TransactionLog transactions={transactions} />
        </div>

        <FraudAlertPanel alerts={fraudAlerts} />
      </div>
    </>
  );

  // 📄 ACCOUNTS PAGE
  const AccountsSection = () => (
    <div>
      <h1 className="text-3xl font-bold">Accounts</h1>
      <p className="mt-2 text-gray-400">View and manage all your bank accounts.</p>

      <div className="mt-6">
        <AccountCard user={{ ...user, balance }} />
      </div>
    </div>
  );

  // 🔄 TRANSACTIONS PAGE
  const TransactionsSection = () => (
    <div>
      <h1 className="text-3xl font-bold">Transactions</h1>
      <p className="mt-2 text-gray-400">Your full transaction history.</p>

      <div className="mt-6">
        <TransactionLog transactions={transactions} />
      </div>
    </div>
  );

  // 🔔 ALERTS PAGE
  const AlertsSection = () => (
    <div>
      <h1 className="text-3xl font-bold">Alerts</h1>
      <p className="mt-2 text-gray-400">Fraud alerts and notification messages.</p>

      <div className="mt-6">
        <FraudAlertPanel alerts={fraudAlerts} />
      </div>
    </div>
  );

  // ⚙️ SETTINGS PAGE
  const SettingsSection = () => (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p className="mt-2 text-gray-400">Theme, privacy, and user preferences.</p>

      <div className="mt-6 p-6 bg-[#1A1B1F] rounded-2xl border border-[#2A2A2F]">
        <h2 className="text-xl font-semibold">Appearance</h2>
        <p className="text-gray-400 text-sm mt-1">Switch between light/dark mode in the sidebar settings menu.</p>
      </div>
    </div>
  );

  // CHOOSE ACTIVE PAGE
  const renderPage = () => {
    switch (activePage) {
      case "Accounts": return <AccountsSection />;
      case "Transactions": return <TransactionsSection />;
      case "Alerts": return <AlertsSection />;
      case "Settings": return <SettingsSection />;
      default: return <DashboardSection />;
    }
  };

  return (
    <div className="flex h-screen bg-white dark:bg-[#0F0F11] text-black dark:text-white overflow-hidden">

      {/* Sidebar now controls navigation */}
      <Sidebar user={user} logout={logout} onNavigate={onNavigate} />

      {/* Main Section */}
      <div className="flex-1 p-8 overflow-y-auto">
        {renderPage()}
      </div>
    </div>
  );
}
