"use client";
import React from "react";
import SearchNavbar from "@/components/SearchNavbar";
import FloraFaunaCard from "@/components/FloraFaunaCard";
import FilterPanel from "@/components/FilterPanel";
import TabNavigation from "@/components/TabNavigation";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const itemsData = [
  // ... (data Anda tidak diubah) ...
  {
    id: 1,
    image: "/images/gambarflooora.png",
    name: "Dusky Shark",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 2,
    image: "/images/gambarflooora.png",
    name: "Capybara",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 3,
    image: "/images/gambarflooora.png",
    name: "Capuchin Monkey",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 4,
    image: "/images/gambarflooora.png",
    name: "Coyote",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 5,
    image: "/images/gambarflooora.png",
    name: "Aardwolf",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 6,
    image: "/images/gambarflooora.png",
    name: "Elk",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 7,
    image: "/images/gambarflooora.png",
    name: "Alpaca",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 8,
    image: "/images/gambarflooora.png",
    name: "Cow",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 9,
    image: "/images/gambarflooora.png",
    name: "Chimpanzee",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 10,
    image: "/images/gambarflooora.png",
    name: "Gibbon",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 11,
    image: "/images/gambarflooora.png",
    name: "Deer",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 12,
    image: "/images/gambarflooora.png",
    name: "Bandicoot",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 13,
    image: "/images/gambarflooora.png",
    name: "Fresh Water Crocodile",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 14,
    image: "/images/gambarflooora.png",
    name: "Black Bear",
    line1: "Friend of people",
    line2: "Always scared",
  },
  {
    id: 15,
    image: "/images/gambarflooora.png",
    name: "Antelope",
    line1: "Friend of people",
    line2: "Always scared",
  },
];

export default function FloraFaunaPage() {
  const router = useRouter();

  const handleCardClick = (itemName) => {
    const selectedItem = itemsData.find((item) => item.name === itemName);
    if (selectedItem) {
      router.push(`/florafauna/${selectedItem.id}`);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#154540] overflow-x-hidden">
      {/* Latar belakang 'fixed' untuk selalu menempel di viewport */}
      <div
        // Hapus 'top-40' dan 'h-screen'
        className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('/images/bgflora.png')" }}
      />

      {/* Konten halaman dengan z-index di atas background */}
      <div className="relative z-10 flex flex-col flex-grow w-full">
        <SearchNavbar />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl flex-grow">
          <TabNavigation />

          <div className="flex flex-col lg:flex-row gap-10 mt-8">
            <aside className="w-full lg:w-64 lg:sticky lg:top-28 self-start">
              <FilterPanel />
            </aside>

            <div className="flex-1 bg-black/35 rounded-md">
              {itemsData.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {itemsData.map((item) => (
                    <FloraFaunaCard
                      key={item.id}
                      {...item} // Menggunakan spread operator untuk passing props
                      onClick={() => handleCardClick(item.name)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-gray-300">
                  Tidak ada item flora & fauna untuk ditampilkan saat ini.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <Footer className="relative z-10" />
    </div>
  );
}
