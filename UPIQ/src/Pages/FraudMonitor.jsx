export default function FraudMonitor() {
  return (
    <div className="p-8 text-cyan-300 bg-[#0A0F1F] min-h-screen">
      <h1 className="text-4xl neon-text">Fraud Detection Monitor</h1>

      <div className="neon-card mt-6 p-6 border-red-500 shadow-red-500/50">
        <h2 className="text-red-400 neon-text text-2xl">⚠ FRAUD ALERT</h2>
        <p>Unusual transfer detected. Monitoring...</p>
      </div>
    </div>
  );
}
