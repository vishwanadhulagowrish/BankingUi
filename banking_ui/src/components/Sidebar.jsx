import { useState, useEffect } from "react";
import {
  FiHome,
  FiCreditCard,
  FiActivity,
  FiBell,
  FiSettings,
  FiLogOut,
  FiSun,
  FiMoon,
} from "react-icons/fi";

export default function Sidebar({ user, logout, onNavigate }) {
  // THEME STATE
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  // APPLY THEME WHENEVER STATE CHANGES
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const menuItems = [
    { icon: <FiHome size={22} />, label: "Dashboard" },
    { icon: <FiCreditCard size={22} />, label: "Accounts" },
    { icon: <FiActivity size={22} />, label: "Transactions" },
    { icon: <FiBell size={22} />, label: "Alerts" },
    { icon: <FiSettings size={22} />, label: "Settings" },
  ];

  return (
    <div className="w-20 h-screen bg-gray-100 dark:bg-[#131315] border-r border-[#2A2A2F] flex flex-col justify-between py-6">

      {/* MENU ICONS */}
      <div className="flex flex-col items-center gap-8">
        <div className="bg-[#9B6BFF] p-3 rounded-xl shadow-md hover:scale-105 transition">
          <FiCreditCard size={26} className="text-white" />
        </div>

        <div className="flex flex-col gap-6 mt-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate(item.label)}
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#1F1F26] p-3 rounded-xl transition flex justify-center"
            >
              {item.icon}
            </button>
          ))}

          {/* THEME BUTTON */}
          <button
            onClick={() => setDark(!dark)}
            className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#1F1F26] p-3 rounded-xl transition flex justify-center"
          >
            {dark ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>
      </div>

      {/* USER + LOGOUT */}
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-[#2A2A33] flex items-center justify-center text-black dark:text-white text-lg font-bold">
          {user.name.charAt(0)}
        </div>

        <button
          onClick={logout}
          className="text-gray-500 dark:text-gray-400 hover:text-red-400 transition"
        >
          <FiLogOut size={24} />
        </button>
      </div>
    </div>
  );
}
