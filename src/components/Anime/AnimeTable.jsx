// src/components/Anime/AnimeTable.jsx
import { Pencil, Trash2 } from "lucide-react";

export default function AnimeTable({ animeList, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            {["ID", "Judul", "Studio", "Tahun Rilis", "Genre", "Tipe", "Action"].map((head, i) => (
              <th key={i} className="border p-2">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {animeList.length > 0 ? (
            animeList.map((anime) => (
              <tr key={anime.id} className="text-center">
                <td className="border p-2">{anime.id}</td>
                <td className="border p-2">{anime.judul}</td>
                <td className="border p-2">{anime.studio}</td>
                <td className="border p-2">{anime.tahun_rilis}</td>
                <td className="border p-2">{anime.genre}</td>
                <td className="border p-2 capitalize">{anime.tipe}</td>
                <td className="border p-2 space-x-2">
                  <button onClick={() => onEdit(anime)} className="bg-teal-400 text-white px-3 py-1 rounded inline-flex items-center gap-1">
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => onDelete(anime.id)} className="bg-red-500 text-white px-3 py-1 rounded inline-flex items-center gap-1">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-4">Tidak ada anime yang ditemukan.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
