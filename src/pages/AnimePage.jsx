import { useEffect, useState } from "react";
import {
  getAnimeList,
  addAnime,
  updateAnime,
  deleteAnime
} from "../services/animeService";
import AnimeFormModal from "../components/Anime/AnimeFormModal";
import AnimeTable from "../components/Anime/AnimeTable";
import SearchBar from "../components/Anime/SearchBar";
import Pagination from "../components/Anime/Pagination";
import { Plus } from "lucide-react";


export default function AnimePage() {
  const [animeList, setAnimeList] = useState([]);
  const [newAnime, setNewAnime] = useState({
    judul: "", studio: "", tahun_rilis: "", genre: "", tipe: "series"
  });
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchData = async () => {
    const data = await getAnimeList();
    setAnimeList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddOrUpdate = async () => {
    if (!newAnime.judul || !newAnime.studio || !newAnime.tahun_rilis || !newAnime.genre || !newAnime.tipe) {
      setMessage("Semua kolom harus diisi!");
      return;
    }

    if (editId) {
      await updateAnime(editId, newAnime);
      setMessage("Berhasil diperbarui!");
    } else {
      await addAnime(newAnime);
      setMessage("Berhasil ditambahkan!");
    }

    setNewAnime({ judul: "", studio: "", tahun_rilis: "", genre: "", tipe: "series" });
    setEditId(null);
    setIsModalOpen(false);
    fetchData();
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Yakin ingin menghapus anime ini?");
    if (!confirmed) return;

    await deleteAnime(id);
    setMessage("Berhasil dihapus!");
    fetchData();
  };

  const handleEdit = (anime) => {
    setNewAnime({
      judul: anime.judul,
      studio: anime.studio,
      tahun_rilis: anime.tahun_rilis,
      genre: anime.genre,
      tipe: anime.tipe,
    });
    setEditId(anime.id);
    setIsModalOpen(true);
  };

  const filteredAnime = animeList.filter((anime) =>
    anime.judul.toLowerCase().includes(search.toLowerCase()) ||
    anime.studio.toLowerCase().includes(search.toLowerCase()) ||
    anime.genre.toLowerCase().includes(search.toLowerCase()) ||
    anime.tipe.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAnime.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAnime.length / itemsPerPage);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Anime List</h1>

      {message && <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded">{message}</div>}

      <div className="flex justify-between items-center flex-wrap gap-2">
      <SearchBar search={search} setSearch={setSearch} />
        <button
          onClick={() => {
            setEditId(null); // reset edit mode
            setNewAnime({ judul: "", studio: "", tahun_rilis: "", genre: "", tipe: "series" }); // reset form
            setIsModalOpen(true);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-1"
        >
          <Plus size={16} /> Tambah
        </button>
      </div>

      <AnimeTable animeList={currentItems} onEdit={handleEdit} onDelete={handleDelete} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      <AnimeFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditId(null);
        }}
        animeData={newAnime}
        setAnimeData={setNewAnime}
        onSubmit={handleAddOrUpdate}
        isEditing={!!editId}
      />

    </div>
  );
}
