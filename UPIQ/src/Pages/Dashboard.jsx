import { Users, Shield, Activity, AlertTriangle } from "lucide-react";
import NeonCard from "../components/NeonCard";

export default function Dashboard() {
  return (
    <div className="p-8 bg-[#0A0F1F] min-h-screen text-cyan-200">
      <h1 className="text-4xl neon-text mb-6">System Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <NeonCard label="Accounts" value="128" icon={Users} />
        <NeonCard label="Active Threads" value="7" icon={Activity} />
        <NeonCard label="Security Alerts" value="2" icon={AlertTriangle} />
        <NeonCard label="Fraud Score" value="Low" icon={Shield} />
      </div>

      <div className="mt-10 neon-card p-6 rounded-xl glow-pulse">
        <h2 className="text-2xl neon-text mb-3">Thread Activity</h2>
        <p className="text-cyan-300">Simulated multi-thread interactions...</p>
      </div>
    </div>
  );
}
