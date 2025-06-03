// src/pages/Tiket.jsx
import React from 'react';
import SearchNavbar from '@/components/SearchNavbar';  // Sesuaikan path jika perlu
import TicketCard from '@/components/TicketCard';// Pastikan ini mengarah ke file TicketCard.jsx yang sudah dimodifikasi

// Contoh data tiket, termasuk deskripsi untuk props
const ticketsData = [
  {
    image: "/images/gtiket1.png",
    name: "Penguin",
    price: "200.000",
    descriptionParagraph: "Jelajahi dunia penguin yang menggemaskan dan pelajari kehidupan mereka di habitat kutub yang dingin.",
    descriptionList: [
      "Sesi foto bersama penguin (jadwal tertentu)",
      "Area observasi bawah air",
      "Edukasi tentang konservasi penguin",
    ]
  },
  {
    image: "/images/gtiket2.png",
    name: "Bear",
    price: "200.000",
    descriptionParagraph: "Saksikan kegagahan beruang grizzly di habitat alaminya yang luas dan pelajari fakta menarik tentang mereka.",
    descriptionList: [
      "Area beruang yang aman", // "Pertunjukan" atau "Display"
      "Informasi tentang jenis-jenis beruang",
      "Program adopsi simbolis beruang",
    ]
  },
  {
    image: "/images/gtiket3.png",
    name: "Goat",
    price: "200.000",
    descriptionParagraph: "Interaksi langsung dengan kambing-kambing jinak di area peternakan anak yang menyenangkan.",
    descriptionList: [
      "Memberi makan kambing (pakan tersedia)",
      "Area bermain anak dekat kandang",
      "Belajar tentang produk olahan susu kambing",
    ]
  }
];

export default function Tiket() {
  return (
    <div className="relative min-h-screen">
      {/* Base putih di paling belakang */}
      <div className="absolute inset-0 w-full h-full bg-white z-0" />
      {/* Lapisan background gambar */}
      <div
        className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover z-10"
        style={{ backgroundImage: "url('/tiketbg.png')" }}
      />
      {/* Konten utama */}
      <div className="relative z-20">
        <SearchNavbar />
        <main className="px-2 sm:px-8 py-8 flex flex-col items-center">
          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#6CAC5C] mb-16 text-center"
            style={{
              fontFamily: 'inherit',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Ticket Pricelist
          </h1>
          {/* Wadah untuk kartu tiket */}
          <div className="flex flex-wrap justify-center items-stretch gap-x-8 gap-y-10 w-full max-w-6xl xl:max-w-7xl">
            {ticketsData.map((ticket) => (
              <TicketCard
                key={ticket.name}
                image={ticket.image}
                name={ticket.name}
                price={ticket.price}
                descriptionParagraph={ticket.descriptionParagraph}
                descriptionList={ticket.descriptionList}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}