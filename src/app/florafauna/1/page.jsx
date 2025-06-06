// src/app/berita/florafauna/rhinoceros/page.jsx (Contoh path untuk App Router)
"use client"; 
import React, { useState, useRef, useEffect } from 'react'; // Tambahkan useRef dan useEffect
import SearchNavbar from '@/components/SearchNavbar'; 
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const rhinoData = {
  title: "Rhinoceros",
  images: [
    "/images/macan.jpg", 
    "/images/monkey.png", 
  ],
  breadcrumb: [
    { name: "Flora & Fauna", href: "/florafauna" }, // Menggunakan path yang lebih konsisten
    { name: "Badak", href: "/florafauna/1" } // Path ke halaman ini
  ],
  tabs: [
    { name: "Info", contentKey: "info" },
    { name: "Taxonomy", contentKey: "taxonomy" },
    { name: "Evolution", contentKey: "evolution" },
    { name: "Biology", contentKey: "biology" },
    { name: "Behavior", contentKey: "behavior" },
    { name: "Ecology", contentKey: "ecology" },
    { name: "Roles with humans", contentKey: "roles" },
    // Tambahkan tab lain jika perlu untuk tes scrolling
    // { name: "Conservation", contentKey: "conservation" },
    // { name: "Gallery", contentKey: "gallery" },
  ],
  content: {
    info: [
      "A rhinoceros /raɪˈnɒsərəs/, from Ancient Greek ῥῑνόκερως (rhinókerōs) 'nose-horned', from ῥῑνός (rhinós) 'nose', and κέρας (kéras) 'horn', commonly abbreviated to rhino, is a member of any of the five extant species (or numerous extinct species) of odd-toed ungulates in the family Rhinocerotidae. (It can also refer to a member of any of the extinct species of the superfamily Rhinocerotoidea.) Two of the extant species are native to Africa, and three to South and Southeast Asia.",
      "Rhinosceroses are some of the largest remaining megafauna: all weigh at least one tonne in adulthood. They have a herbivorous diet, small brains (400–600 g) for mammals of their size, one or two horns, and a thick (1.5–5 cm), protective skin formed from layers of collagen positioned in a lattice structure. They generally eat leafy material, although their ability to ferment food in their hindgut allows them to subsist on more fibrous plant matter when necessary. Unlike other perissodactyls, the two African species of rhinoceros lack teeth at the front of their mouths; they rely instead on their lips to pluck food.[1]",
      "Rhinoceros are killed by poachers for their horns, which are bought and sold on the black market for high prices, leading to most living rhinoceros species being considered endangered. The contemporary market for rhino horn is overwhelmingly driven by China and Vietnam, where it is bought by wealthy consumers to use in traditional Chinese medicine, among other uses. Rhino horns are made of keratin, the same material as hair and fingernails, and there is no good evidence of any health benefits.[2][3][4] A market also exists for rhino horn dagger handles in Yemen, which was the major source of demand for rhino horn in the 1970s and 1980s.[5]"
    ],
    taxonomy: ["Content for Taxonomy tab... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."],
    evolution: ["Content for Evolution tab... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."],
    biology: ["Content for Biology tab... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."],
    behavior: ["Content for Behavior tab... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."],
    ecology: ["Content for Ecology tab... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."],
    roles: ["Content for Roles with humans tab... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."],
    // conservation: ["Content for Conservation tab..."],
    // gallery: ["Content for Gallery tab..."],
  }
};

export default function RhinocerosDetailPage() {
  const [activeTab, setActiveTab] = useState(rhinoData.tabs[0].contentKey);
  const scrollContainerRef = useRef(null); // Ref untuk container tab yang bisa di-scroll

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Jumlah scroll per klik
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };


  return (
    <div 
      className="min-h-screen bg-[#1A202C] text-gray-200 font-inter"
      style={{
        backgroundImage: "url('/images/siluethutan.png')", // Pastikan path ini benar dan gambar ada di /public
        backgroundPosition: 'bottom center', 
        backgroundRepeat: 'repeat-x', 
        backgroundSize: 'contain' 
      }}
    >
      <SearchNavbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex items-center space-x-1.5 text-gray-400">
            {rhinoData.breadcrumb.map((crumb, index) => (
              <li key={crumb.name} className="flex items-center">
                {index > 0 && <ChevronRight size={14} className="mx-1.5" />}
                <Link
                  href={crumb.href}
                  className="hover:text-gray-100 hover:underline"
                  legacyBehavior>
                  {crumb.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/5 space-y-6">
            {rhinoData.images.map((src, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`${rhinoData.title} image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>

          <div className="w-full lg:w-3/5">
            {/* Navigasi Tab Disesuaikan dengan Gambar */}
            <div className="mb-6">
              {/* Wrapper luar untuk tab bar dengan background gelap membulat */}
              <div className="flex items-center bg-[#2D3748] rounded-md p-1 shadow-md"> {/* Warna gelap dari panel filter sebelumnya, rounded-full */}
                <button 
                  onClick={() => handleScroll('left')}
                  className="p-2 text-gray-400 hover:text-white disabled:opacity-30" 
                  aria-label="Previous tabs"
                  // Logika disable bisa ditambahkan jika scroll di paling kiri
                >
                  <ChevronLeft size={20} />
                </button>
                
                {/* Kontainer tab yang bisa di-scroll */}
                <div 
                  ref={scrollContainerRef} // Tambahkan ref di sini
                  className="flex-grow flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide space-x-1 py-1"
                >
                  {rhinoData.tabs.map((tab) => (
                    <button
                      key={tab.contentKey}
                      onClick={() => setActiveTab(tab.contentKey)}
                      // Styling tab agar mirip pill
                      className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 ease-in-out focus:outline-none
                        ${activeTab === tab.contentKey
                          ? 'bg-slate-600 text-white shadow-sm' // Gaya tab aktif
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white' // Gaya tab tidak aktif
                        }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => handleScroll('right')}
                  className="p-2 text-gray-400 hover:text-white disabled:opacity-30" 
                  aria-label="Next tabs"
                  // Logika disable bisa ditambahkan jika scroll di paling kanan
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{rhinoData.title}</h1>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-300 prose prose-sm prose-invert max-w-none"> {/* Styling prose untuk teks */}
              {(rhinoData.content[activeTab] || ["Konten tidak tersedia."]).map((paragraph, index) => (
                // Render paragraf, sitasi akan di-style oleh prose-invert
                (<p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\[(\d+)\]/g, '<sup>[$1]</sup>') }} />)
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}