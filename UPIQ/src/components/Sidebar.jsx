import { Home, CreditCard, Shield, Activity, BarChart3 } from "lucide-react";

export default function Sidebar() {
  const menu = [
    { icon: Home, label: "Dashboard" },
    { icon: CreditCard, label: "ATM" },
    { icon: Activity, label: "Transfers" },
    { icon: Shield, label: "Fraud Monitor" },
    { icon: BarChart3, label: "Reports" },
  ];

  return (
    <div className="h-screen w-64 bg-[#0A0F1F] border-r border-cyan-500/30">
      <h1 className="text-3xl font-bold text-cyan-400 p-6 neon-text">
        BANK-X
      </h1>

      <nav className="mt-8">
        {menu.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 text-cyan-300 hover:bg-cyan-500/10 cursor-pointer neon-glow"
          >
            <item.icon className="text-cyan-400" size={22} />
            <span className="text-lg">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}
