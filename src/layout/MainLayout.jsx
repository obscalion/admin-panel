import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Hamburger Button */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-full p-2 shadow"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Content Area */}
      <main className="flex-1 p-4 pt-10 md:pt-4 md:px-10 md:mx-auto w-full overflow-x-hidden relative">
        {/* Push content down on small screens to avoid overlap */}
        <div className="md:hidden h-8" /> {/* Spacer to prevent overlap */}
        <Outlet />
      </main>
    </div>
  );
}
