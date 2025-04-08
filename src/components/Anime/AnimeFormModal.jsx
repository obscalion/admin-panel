import { X, Plus, Pencil } from "lucide-react";

export default function AnimeFormModal({
  isOpen,
  onClose,
  animeData = { judul: "", studio: "", tahun_rilis: "", genre: "", tipe: "series" },
  setAnimeData = () => {},
  onSubmit = () => {},
  isEditing = false
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded p-6 shadow-lg w-full max-w-2xl space-y-4">
        <h2 className="text-xl font-semibold flex justify-between items-center">
          {isEditing ? "Edit Anime" : "Tambah Anime"}
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X />
          </button>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input type="text" placeholder="Judul" className="border px-3 py-1 rounded"
            value={animeData.judul}
            onChange={(e) => setAnimeData({ ...animeData, judul: e.target.value })} />

          <input type="text" placeholder="Studio" className="border px-3 py-1 rounded"
            value={animeData.studio}
            onChange={(e) => setAnimeData({ ...animeData, studio: e.target.value })} />

          <input type="number" placeholder="Tahun Rilis" className="border px-3 py-1 rounded"
            value={animeData.tahun_rilis}
            onChange={(e) => setAnimeData({ ...animeData, tahun_rilis: e.target.value })} />

          <input type="text" placeholder="Genre" className="border px-3 py-1 rounded"
            value={animeData.genre}
            onChange={(e) => setAnimeData({ ...animeData, genre: e.target.value })} />

          <select className="border px-3 py-1 rounded"
            value={animeData.tipe}
            onChange={(e) => setAnimeData({ ...animeData, tipe: e.target.value })}>
            <option value="series">Series</option>
            <option value="movie">Movie</option>
          </select>
        </div>

        <div className="flex justify-end space-x-2">
          <button className="bg-gray-300 px-4 py-1 rounded" onClick={onClose}>Batal</button>
          <button onClick={onSubmit} className="bg-green-500 text-white px-4 py-1 rounded">
            {isEditing ? <Pencil /> : <Plus />}
          </button>
        </div>
      </div>
    </div>
  );
}
