import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

// Mock accounts (no backend)
const SAMPLE_ACCOUNTS = [
  { accountId: "1001", pin: "1234", name: "Alice Johnson", balance: 5000 },
  { accountId: "1002", pin: "5678", name: "Bob Smith", balance: 3000 },
  { accountId: "1003", pin: "9012", name: "Charlie Brown", balance: 7500 },
  { accountId: "2001", pin: "3456", name: "Diana Prince", balance: 2000 },
  { accountId: "2002", pin: "7890", name: "Edward Norton", balance: 4500 },
];

export default function LoginPage({ onLoginSuccess }) {
  const [accountId, setAccountId] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      const user = SAMPLE_ACCOUNTS.find(
        (acc) => acc.accountId === accountId && acc.pin === pin
      );

      if (!user) {
        setError("❌ Invalid Account ID or PIN");
        setLoading(false);
        return;
      }

      onLoginSuccess(user);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">

      {/* 🔥 Banking background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://videos.openai.com/az/vg-assets/assets%2Ftask_01jnqxdwdxe7takhv5mz9s0qxa%2Ftask_01jnqxdwdxe7takhv5mz9s0qxa_genid_f92dd17a-ac09-4324-8eb9-65c6610ba732_25_03_07_09_02_178233%2Fvideos%2F00000_251188589%2Fsource.mp4?se=2025-12-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-12-11T01%3A09%3A29Z&ske=2025-12-18T01%3A14%3A29Z&sks=b&skv=2024-08-04&sig=wsM33chd5lbXM6m83IUmLw6NzSgdfRIvV0oq/MKXK7o%3D&ac=oaivgprodscus" type="video/mp4" />
      </video>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

      {/* LOGIN CARD */}
      <div className="relative w-96 p-8 rounded-2xl shadow-2xl 
                      bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl 
                      border border-gray-200 dark:border-gray-700
                      animate-fadeIn hover:scale-[1.02] transition-transform duration-300">

        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="text-4xl mb-2 animate-bounce">🏦</div>
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">
            Secure Banking Login
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Access your financial dashboard
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-600 bg-red-100 border border-red-300 p-2 rounded-md text-sm text-center mb-4 animate-shake">
            {error}
          </p>
        )}

        <label className="text-gray-700 dark:text-gray-300 font-semibold">Account ID</label>
        <input
          className="w-full p-3 border-2 rounded-xl mt-1 mb-4 bg-gray-50 dark:bg-gray-900 dark:text-white 
                     focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Enter Account ID"
          onChange={(e) => setAccountId(e.target.value)}
        />

        <label className="text-gray-700 dark:text-gray-300 font-semibold">PIN</label>
        <input
          className="w-full p-3 border-2 rounded-xl mt-1 bg-gray-50 dark:bg-gray-900 dark:text-white 
                     focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Enter PIN"
          type="password"
          onChange={(e) => setPin(e.target.value)}
        />

        <button
          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 
                     text-white font-bold shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform"
          onClick={login}
        >
          {loading ? <LoadingSpinner /> : "Login"}
        </button>
      </div>
    </div>
  );
}
