// src/pages/DokumenterPage.jsx (atau path yang sesuai, misal app/berita/dokumenter/page.jsx jika menggunakan App Router Next.js)
"use client";
import React from 'react';
import SearchNavbar from '@/components/SearchNavbar'; // Sesuaikan path jika perlu
import DokumenterCard from '@/components/DocumentaryCard';// Sesuaikan path jika perlu
import Link from 'next/link'; // Jika menggunakan Next.js untuk navigasi tab

// Contoh data untuk halaman dokumenter
const dokumenterData = [
  {
    id: 1,
    image: "/images/deer-feeding.jpg", // Ganti dengan path gambar Anda yang relevan
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
    image: "/images/deer-feeding-2.jpg", // Ganti dengan path gambar Anda yang relevan
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
  const handleReadMore = (id) => {
    // Logika untuk navigasi ke halaman detail dokumenter
    // Misalnya: router.push(`/berita/dokumenter/${id}`);
    console.log("Read more clicked for ID:", id);
    alert(`Navigasi ke detail dokumenter ID: ${id} (simulasi)`);
  };

  return (
    // Latar belakang utama halaman (sesuaikan dengan kebutuhan Anda, bisa juga putih polos)
    // Gambar menunjukkan latar putih bersih untuk konten dokumenter
    <div className="min-h-screen bg-gray-50"> {/* bg-gray-50 atau bg-white */}
      <SearchNavbar /> {/* Navbar Anda */}

      <main className="container mx-auto px-4 py-8">
        {/* Tab Navigasi (Flora & Fauna, Documentary) */}
        <div className="mb-8 flex justify-center space-x-2 border-b border-gray-300">
            <Link href="/berita/florafauna" className="py-3 px-6 text-gray-600 hover:text-green-700 hover:border-green-600 border-b-2 border-transparent">
                Flora & Fauna
            </Link>
            <Link href="/berita/dokumenter" className="py-3 px-6 text-green-700 border-green-600 border-b-2 font-semibold">
                Documentary
            </Link>
          {/* Tambahkan tab lain jika ada */}
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
      {/* Footer bisa ditambahkan di sini jika perlu, atau di layout utama */}
       {/* <Footer /> */}
       {/* Overlay efek siluet bawah seperti di halaman tiket, jika desainnya sama */}
       <div 
        className="fixed bottom-0 left-0 w-full h-64 pointer-events-none z-0" // z-0 agar di belakang konten
        style={{ 
            backgroundImage: "url('/siluet-pohon.png')", // Ganti dengan path gambar siluet Anda
            backgroundSize: 'contain', // atau 'cover'
            backgroundRepeat: 'repeat-x', // atau 'no-repeat'
            backgroundPosition: 'bottom center',
            opacity: 0.5, // Sesuaikan opasitas
        }} 
      />
    </div>
  );
}