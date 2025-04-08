// src/pages/DashboardPage.jsx
import { useEffect, useState } from "react";
import { getAnimeList } from "../services/animeService";
import DashboardCard from "../components/Dashboard/DashboardCard";
import DashboardBarChart from "../components/Dashboard/DashboardBarChart";
import DashboardPieChart from "../components/Dashboard/DashboardPieChart";

export default function DashboardPage() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getAnimeList();
      setAnimeList(data);
    };
    fetchAnime();
  }, []);

  const totalAnime = animeList.length;

  const uniqueStudios = [...new Set(animeList.map((anime) => anime.studio))];
  const uniqueGenres = [...new Set(animeList.map((anime) => anime.genre))];

  const totalStudios = uniqueStudios.length;
  const totalGenres = uniqueGenres.length;

  const totalSeries = animeList.filter((a) => a.tipe === "series").length;
  const totalMovie = animeList.filter((a) => a.tipe === "movie").length;

  const animePerStudio = animeList.reduce((acc, anime) => {
    acc[anime.studio] = (acc[anime.studio] || 0) + 1;
    return acc;
  }, {});

  const barChartData = {
    labels: Object.keys(animePerStudio),
    datasets: [
      {
        label: "Jumlah Anime per Studio",
        data: Object.values(animePerStudio),
        backgroundColor: "#60A5FA",
      },
    ],
  };

  const pieChartData = {
    labels: ["Series", "Movie"],
    datasets: [
      {
        label: "Tipe Anime",
        data: [totalSeries, totalMovie],
        backgroundColor: ["#60A5FA", "#F87171"],
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard title="Total Anime" value={totalAnime} />
        <DashboardCard title="Total Studio" value={totalStudios} />
        <DashboardCard title="Total Genre" value={totalGenres} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DashboardBarChart data={barChartData} label={"Jumlah Anime per Studio"} />
        <DashboardPieChart data={pieChartData} label={"Persentase Tipe Anime"} />
      </div>
    </div>
  );
}
