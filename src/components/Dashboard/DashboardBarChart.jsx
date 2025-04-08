import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 2, // opsional, biar jeda antar nilai lebih rapi
      },
    },
  },
};

export default function DashboardBarChart({ data, label }) {
  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <h2 className="text-lg font-semibold mb-2">{label}</h2>
      <Bar data={data} options={options} height={300} />
    </div>
  );
}
