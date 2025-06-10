"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SearchNavbar from "@/components/SearchNavbar";
import { floraFaunaData } from "@/data/florafauna";
import { notFound, useParams } from "next/navigation";
import Footer from "@/components/Footer";

export default function FloraFaunaDetailPage() {
  const params = useParams();
  const animalId = parseInt(params.id, 10);
  const animal = floraFaunaData.find((item) => item.id === animalId);

  if (!animal) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState(animal.tabs[0].contentKey);
  const [isTabsExpanded, setIsTabsExpanded] = useState(false);

  const handleExpandTabs = () => setIsTabsExpanded(true);

  const handleCollapseAndReset = () => {
    setIsTabsExpanded(false);
    setActiveTab(animal.tabs[0].contentKey);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-[#1A202C] font-inter">
      <div
        className="absolute left-0 right-0 -top-70 bottom-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/siluethutan.png')",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      <div className="relative z-10 flex flex-col flex-grow">
        <SearchNavbar />

        <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex items-center space-x-1.5 text-gray-400">
              <li className="flex items-center">
                <Link
                  href="/florafauna"
                  className="hover:text-gray-100 hover:underline"
                >
                  Flora & Fauna
                </Link>
              </li>
              <li className="flex items-center text-white">
                <ChevronRight size={14} className="mx-1.5" />
                <span>{animal.name}</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/5 space-y-6">
              {animal.images.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`${animal.title} image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>

            <div className="w-full lg:w-3/5">
              {/* --- MODIFIKASI DIMULAI DI SINI --- */}
              <div className="mb-6">
                <div
                  className={`
                    bg-[#2D3748] rounded-md shadow-md
                    p-1 flex items-center
                    transition-[width] duration-500 ease-in-out
                    ${isTabsExpanded ? "w-full" : "w-auto"}
                  `}
                >
                  <div className="flex items-center w-full overflow-hidden">
                    {isTabsExpanded ? (
                      // Tampilan saat menu terbuka (expanded)
                      <div className="flex items-center w-full min-w-0">
                        <button
                          onClick={handleCollapseAndReset} // Gunakan fungsi baru di sini
                          className="p-2 text-gray-400 hover:text-white flex-shrink-0"
                          aria-label="Collapse tabs"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <div className="flex-grow flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide space-x-1 py-1">
                          {animal.tabs.map((tab) => (
                            <button
                              key={tab.contentKey}
                              onClick={() => {
                                setActiveTab(tab.contentKey);
                                setIsTabsExpanded(false); // Tetap tutup setelah memilih
                              }}
                              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 ease-in-out focus:outline-none ${
                                activeTab === tab.contentKey
                                  ? "bg-slate-600 text-white shadow-sm"
                                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
                              }`}
                            >
                              {tab.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Tampilan saat menu tertutup (collapsed)
                      <div className="flex items-center justify-between">
                        <span className="px-4 py-1.5 text-xs sm:text-sm font-medium text-white whitespace-nowrap">
                          {/* Selalu tampilkan nama tab yang sedang aktif */}
                          {
                            animal.tabs.find((t) => t.contentKey === activeTab)
                              ?.name
                          }
                        </span>
                        <button
                          onClick={handleExpandTabs} // Gunakan fungsi untuk expand
                          className="p-2 text-gray-400 hover:text-white"
                          aria-label="Expand tabs"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-medium text-[#B9CE87] mb-4">
                {animal.title}
              </h1>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-300 prose prose-sm prose-invert max-w-none">
                {(animal.content[activeTab] || ["Konten tidak tersedia."]).map(
                  (paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  )
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer className="relative z-10" />
    </div>
  );
}
