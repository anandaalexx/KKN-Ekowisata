"use client";
import React from "react";
import SearchNavbar from "@/components/SearchNavbar";
import FloraFaunaCard from "@/components/FloraFaunaCard";
import FilterPanel from "@/components/FilterPanel";
import TabNavigation from "@/components/TabNavigation";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
// 1. Impor data dari file terpusat
import { floraFaunaData } from "@/data/florafauna";

export default function FloraFaunaPage() {
  const router = useRouter();

  const handleCardClick = (itemId) => {
    // Navigasi menggunakan ID, bukan nama
    router.push(`/florafauna/${itemId}`);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#154540] overflow-x-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('/images/bgflora.png')" }}
      />
      <div className="relative z-10 flex flex-col flex-grow w-full">
        <SearchNavbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl flex-grow">
          <TabNavigation />
          <div className="flex flex-col lg:flex-row gap-10 mt-8">
            <aside className="w-full lg:w-64 lg:sticky lg:top-28 self-start">
              <FilterPanel />
            </aside>
            <div className="flex-1 bg-black/35 rounded-md p-4">
              {/* 2. Gunakan 'floraFaunaData' yang sudah diimpor */}
              {floraFaunaData.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {floraFaunaData.map((item) => (
                    <FloraFaunaCard
                      key={item.id}
                      {...item}
                      // 3. Kirim ID ke fungsi handleCardClick
                      onClick={() => handleCardClick(item.id)}
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
