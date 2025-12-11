import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-3 rounded-xl bg-[#1A1B1F] border border-[#2A2A2F]
                 text-white hover:bg-[#25252B] transition"
    >
      {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
