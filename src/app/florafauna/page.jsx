// src/pages/FloraFaunaPage.jsx (atau app/berita/florafauna/page.jsx)
"use client";
import React from "react";
import SearchNavbar from "@/components/SearchNavbar";
import FloraFaunaCard from "@/components/FloraFaunaCard";
import FilterPanel from "@/components/FilterPanel";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const itemsData = [
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
  const pathname = usePathname();
  const router = useRouter();

  const handleCardClick = (itemName) => {
    console.log("Navigating to details for:", itemName);
    router.push(`/florafauna/1`);
  };

  const tabItems = [
    { name: "Flora & Fauna", href: "/florafauna" },
    { name: "Documentary", href: "/berita" },
  ];

  return (
    <div
      className="min-h-screen bg-bottom bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/bgflora.png')" }}
    >
      <SearchNavbar />

      {/* Konten utama dengan lebar maksimal 7xl dan responsif */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="mb-8 flex justify-center items-center py-2 space-x-0 md:space-x-1">
          {tabItems.map((tab) => {
            const isActive =
              pathname === tab.href ||
              (tab.href === "/florafauna" &&
                pathname.startsWith("/berita/florafauna"));

            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={`
                  py-2.5 px-4 sm:px-6 focus:outline-none rounded-md
                  text-sm font-medium transition-all duration-200 ease-in-out
                  ${
                    isActive
                      ? "bg-white text-[#13564C] shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }
                `}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-auto lg:sticky lg:top-20 self-start">
            <FilterPanel />
          </div>

          <div className="flex-1">
            {/* Grid untuk 3 kartu per baris */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 -mr-3 bg-black/20">
              {itemsData.map((item) => (
                <FloraFaunaCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  line1={item.line1}
                  line2={item.line2}
                  onClick={() => handleCardClick(item.name)}
                />
              ))}
            </div>
            {itemsData.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-400">
                Tidak ada item flora & fauna untuk ditampilkan saat ini.
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
