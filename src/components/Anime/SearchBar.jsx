import PropTypes from "prop-types";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="w-full max-w-sm">
      <input
        type="text"
        placeholder="Cari anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded w-full"
      />
    </div>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
