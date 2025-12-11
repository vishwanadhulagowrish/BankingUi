const keys = [1,2,3,4,5,6,7,8,9,"CLR",0,"OK"];

export default function ATMKeypad() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {keys.map((k, i) => (
        <button
          key={i}
          className="neon-card py-3 text-xl neon-glow rounded-lg"
        >
          {k}
        </button>
      ))}
    </div>
  );
}
