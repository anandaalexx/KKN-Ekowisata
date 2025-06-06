import SidebarFilter from "@/components/SidebarFilter";
import AnimalGallery from "@/components/AnimalGallery";
import SearchNavbar from "@/components/SearchNavbar";

export default function FloraFaunaPage() {
  return (
    <div className="max-w-7xl bg-black text-white">
      {/* Navbar di atas */}
      <SearchNavbar />

      <main className="max-w-7xl mx-auto px-6 py-10 flex gap-10">
        {/* Sidebar filter */}
        <div className="w-72 shrink-0">
          <SidebarFilter />
        </div>

        {/* Galeri fauna/flora */}
        <div className="flex-1">
          <AnimalGallery />
        </div>
      </main>
    </div>
  );
}
