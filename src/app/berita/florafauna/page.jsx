// src/pages/FloraFaunaPage.jsx (atau app/berita/florafauna/page.jsx)
"use client";
import React from 'react';
import SearchNavbar from '@/components/SearchNavbar'; // Sesuaikan path jika perlu
import FloraFaunaCard from '@/components/FloraFaunaCard'; // Sesuaikan path jika perlu
import FilterPanel from '@/components/FilterPanel'; // Sesuaikan path jika perlu
import Link from 'next/link'; // Untuk navigasi tab

// Contoh data untuk Flora & Fauna (ganti dengan data asli Anda)
const itemsData = [
  { id: 1, image: '/images/ff/dusky_shark.jpg', name: 'Dusky Shark', line1: 'Friend of people', line2: 'Always scared' },
  { id: 2, image: '/images/ff/capybara.jpg', name: 'Capybara', line1: 'Friend of people', line2: 'Always scared' },
  { id: 3, image: '/images/ff/capuchin_monkey.jpg', name: 'Capuchin Monkey', line1: 'Friend of people', line2: 'Always scared' },
  { id: 4, image: '/images/ff/coyote.jpg', name: 'Coyote', line1: 'Friend of people', line2: 'Always scared' },
  { id: 5, image: '/images/ff/aardwolf.jpg', name: 'Aardwolf', line1: 'Friend of people', line2: 'Always scared' },
  { id: 6, image: '/images/ff/elk.jpg', name: 'Elk', line1: 'Friend of people', line2: 'Always scared' },
  { id: 7, image: '/images/ff/alpaca.jpg', name: 'Alpaca', line1: 'Friend of people', line2: 'Always scared' },
  { id: 8, image: '/images/ff/cow.jpg', name: 'Cow', line1: 'Friend of people', line2: 'Always scared' },
  { id: 9, image: '/images/ff/chimpanzee.jpg', name: 'Chimpanzee', line1: 'Friend of people', line2: 'Always scared' },
  { id: 10, image: '/images/ff/gibbon.jpg', name: 'Gibbon', line1: 'Friend of people', line2: 'Always scared' },
  { id: 11, image: '/images/ff/deer.jpg', name: 'Deer', line1: 'Friend of people', line2: 'Always scared' },
  { id: 12, image: '/images/ff/bandicoot.jpg', name: 'Bandicoot', line1: 'Friend of people', line2: 'Always scared' },
  { id: 13, image: '/images/ff/fresh_water_crocodile.jpg', name: 'Fresh Water Crocodile', line1: 'Friend of people', line2: 'Always scared' },
  { id: 14, image: '/images/ff/black_bear.jpg', name: 'Black Bear', line1: 'Friend of people', line2: 'Always scared' },
  { id: 15, image: '/images/ff/antelope.jpg', name: 'Antelope', line1: 'Friend of people', line2: 'Always scared' },
];


export default function FloraFaunaPage() {
  const handleCardClick = (itemName) => {
    // Logika ketika kartu di klik, misalnya navigasi ke detail item
    console.log("Clicked on:", itemName);
    // router.push(`/berita/florafauna/${itemName.toLowerCase().replace(/\s+/g, '-')}`);
    alert(`Menuju detail ${itemName} (simulasi)`);
  };
  
  return (
    // Latar belakang utama halaman
    <div 
        className="min-h-screen bg-[#1A202C] bg-bottom bg-no-repeat bg-contain" // bg-contain untuk siluet
        style={{ backgroundImage: "url('/siluet-hutan.png')" }} // Ganti dengan path gambar siluet hutan Anda
    >
      <SearchNavbar /> {/* Navbar Anda, pastikan stylingnya cocok dengan tema gelap */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigasi */}
        <div className="mb-8 flex justify-center space-x-2 border-b border-gray-300">
            <Link href="/berita/florafauna" className="py-3 px-6 text-gray-600 hover:text-green-700 hover:border-green-600 border-b-2 border-transparent">
                Flora & Fauna
            </Link>
            <Link href="/berita/dokumenter" className="py-3 px-6 text-green-700 border-green-600 border-b-2 font-semibold">
                Documentary
            </Link>
        </div>

        {/* Konten Utama: Filter Panel (Kiri) dan Grid Kartu (Kanan) */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Panel Filter Kiri */}
          <div className="w-full lg:w-auto lg:sticky lg:top-20 self-start"> {/* Sticky untuk panel filter di layar besar */}
            <FilterPanel />
          </div>

          {/* Grid Kartu Kanan */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
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
            {/* Tambahkan pagination di sini jika perlu */}
          </div>
        </div>
      </div>
      {/* <Footer />  Jika ada footer, pastikan stylingnya cocok */}
    </div>
  );
}