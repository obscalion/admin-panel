// src/components/Dashboard/DashboardCard.jsx
export default function DashboardCard({ title, value }) {
    return (
      <div className="bg-white shadow rounded p-4 w-full">
        <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    );
  }
  