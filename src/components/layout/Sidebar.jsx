import { NavLink } from "react-router-dom";
import { LayoutDashboard, Film, LogOut, X } from "lucide-react";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 min-h-screen bg-gray-800 text-white p-4 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-48 w-64`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Admin Panel</h2>
          {/* Tombol close hanya di mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-white md:hidden"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>
          <NavLink
            to="/anime"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            <Film size={18} /> Anime
          </NavLink>
          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center mt-32 gap-2 px-3 py-2 rounded hover:bg-gray-700"
          >
            <LogOut size={18} /> Logout
          </NavLink>
        </nav>
      </div>
    </>
  );
}
