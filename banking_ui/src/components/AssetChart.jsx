import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip
);

export default function AssetChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Assets",
        data: [2000, 2200, 2100, 2500, 2700, 2600],
        borderColor: "#9B6BFF",
        backgroundColor: "rgba(155,107,255,0.3)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div
      className="
        p-5 rounded-2xl shadow-xl
        bg-white dark:bg-[#1A1B1F]
        border border-gray-300 dark:border-[#2A2A2F]
      "
    >
      <h2 className="text-lg font-bold mb-3 text-black dark:text-white">
        Your Assets
      </h2>

      {/* Chart.js automatically respects background */}
      <Line
        data={data}
        height={120}
        options={{
          plugins: {
            legend: { labels: { color: "#999" } },
          },
          scales: {
            x: {
              ticks: { color: "gray" },
              grid: { color: "rgba(255,255,255,0.05)" },
            },
            y: {
              ticks: { color: "gray" },
              grid: { color: "rgba(255,255,255,0.05)" },
            },
          },
        }}
      />
    </div>
  );
}
