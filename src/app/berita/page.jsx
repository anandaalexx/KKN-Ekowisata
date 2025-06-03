// src/pages/DokumenterPage.jsx (atau path yang sesuai, misal app/berita/dokumenter/page.jsx jika menggunakan App Router Next.js)
"use client";
import React from 'react';
import SearchNavbar from '@/components/SearchNavbar'; // Sesuaikan path jika perlu
import DokumenterCard from '@/components/DocumentaryCard';// Pastikan nama komponen dan path ini benar
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 1. Impor usePathname

// Contoh data untuk halaman dokumenter (Sesuai kode Anda)
const dokumenterData = [
  {
    id: 1,
    image: "/images/gambarberita.png", 
    title: "Animal Feeding",
    location: "Lorem Ipsum",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ]
  },
  {
    id: 2,
    image: "/images/gambarberita.png", 
    title: "Another Animal Story",
    location: "Somewhere Else",
    summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    listItems: [
      "Sed ut perspiciatis unde omnis iste natus error.",
      "Nemo enim ipsam voluptatem quia voluptas sit.",
      "Neque porro quisquam est, qui dolorem ipsum.",
    ]
  },
  // Tambahkan data dokumenter lainnya di sini
];

export default function DokumenterPage() {
  const pathname = usePathname(); // 2. Dapatkan path saat ini

  const handleReadMore = (id) => {
    console.log("Read more clicked for ID:", id);
    alert(`Navigasi ke detail dokumenter ID: ${id} (simulasi)`);
  };

  // 3. Definisikan item tab
  const tabItems = [
    // Sesuaikan href ini dengan struktur routing Anda yang sebenarnya
    { name: "Flora & Fauna", href: "/florafauna" }, 
    { name: "Documentary", href: "/berita" } 
  ];

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/images/siluetdokumenter.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundColor: '#f9fafb', // fallback bg-gray-50
      }}
    >
      <SearchNavbar /> 

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* BAGIAN NAVIGASI TAB DENGAN STYLING TEMA GELAP YANG ANDA MINTA */}
        <div className="mb-8 flex justify-center items-center py-2 space-x-0 md:space-x-1">
          {tabItems.map((tab) => {
            const isActive = pathname === tab.href; 

            return (
              <Link key={tab.name} href={tab.href} legacyBehavior>
                <a
                  className={`
                    py-2.5 px-4 sm:px-6 focus:outline-none rounded-md
                    text-sm font-medium transition-all duration-200 ease-in-out
                    ${
                      isActive
                        ? 'bg-[#13564C] text-white shadow-md'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }
                  `}
                >
                  {tab.name}
                </a>
              </Link>
            );
          })}
        </div>

        {/* Konten Daftar Dokumenter */}
        <div className="space-y-10 flex flex-col items-center">
          {dokumenterData.map((doc) => (
            <DokumenterCard
              key={doc.id}
              image={doc.image}
              title={doc.title}
              location={doc.location}
              summary={doc.summary}
              listItems={doc.listItems}
              onReadMore={() => handleReadMore(doc.id)}
            />
          ))}
        </div>
      </main>
      
      {/* Background siluetdokumenter.png di bawah */}
      <div 
        className="absolute bottom-0 left-0 w-full h-64 pointer-events-none z-0"
        style={{ 
            backgroundImage: "url('/siluetdokumenter.png')", 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center',
            opacity: 0.7, 
        }} 
      />
    </div>
  );
}