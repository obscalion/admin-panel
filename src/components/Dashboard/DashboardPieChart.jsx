import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function DashboardPieChart({ data, label }) {
  return (
    <div className="bg-white p-4 rounded shadow w-full">
      <h2 className="text-lg font-semibold mb-2">{label}</h2>
      <Pie data={data} />
    </div>
  );
}
