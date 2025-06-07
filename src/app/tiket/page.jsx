// src/pages/Tiket.jsx
"use client"; // Diperlukan untuk menggunakan hooks

import React, { useState, useEffect } from "react"; // 1. Impor useState dan useEffect
import SearchNavbar from "@/components/SearchNavbar";
import TicketCard from "@/components/TicketCard";
import Footer from "@/components/Footer";

const ticketsData = [
  {
    image: "/images/gtiket1.png",
    name: "Penguin",
    price: "200.000",
    descriptionParagraph:
      "Jelajahi dunia penguin yang menggemaskan dan pelajari kehidupan mereka di habitat kutub yang dingin.",
    descriptionList: [
      "Sesi foto bersama penguin (jadwal tertentu)",
      "Area observasi bawah air",
      "Edukasi tentang konservasi penguin",
    ],
  },
  {
    image: "/images/gtiket2.png",
    name: "Bear",
    price: "200.000",
    descriptionParagraph:
      "Saksikan kegagahan beruang grizzly di habitat alaminya yang luas dan pelajari fakta menarik tentang mereka.",
    descriptionList: [
      "Area beruang yang aman",
      "Informasi tentang jenis-jenis beruang",
      "Program adopsi simbolis beruang",
    ],
  },
  {
    image: "/images/gtiket3.png",
    name: "Goat",
    price: "200.000",
    descriptionParagraph:
      "Interaksi langsung dengan kambing-kambing jinak di area peternakan anak yang menyenangkan.",
    descriptionList: [
      "Memberi makan kambing (pakan tersedia)",
      "Area bermain anak dekat kandang",
      "Belajar tentang produk olahan susu kambing",
    ],
  },
];

export default function Tiket() {
  // 2. Buat state untuk mengontrol animasi
  const [isMounted, setIsMounted] = useState(false);

  // 3. Gunakan useEffect untuk mengubah state setelah komponen dimuat
  useEffect(() => {
    // Memberi sedikit jeda sebelum animasi dimulai agar transisi berjalan mulus
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100); // jeda 100ms

    return () => clearTimeout(timer); // Membersihkan timer saat komponen di-unmount
  }, []); // Array kosong memastikan ini hanya berjalan sekali saat komponen pertama kali dimuat

  return (
    <>
      <div className="relative min-h-[1050px]">
        <div className="absolute inset-0 w-full h-full bg-white z-0" />
        <div
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-contain z-10"
          style={{ backgroundImage: "url('/images/bg-tiket.svg')" }}
        />
        <div className="relative z-20">
          <SearchNavbar />
          <main className="px-2 sm:px-8 py-8 flex flex-col items-center">
            <h1
              className="text-5xl md:text-6xl font-extrabold text-[#6CAC5C] mb-16 text-center"
              style={{
                fontFamily: "inherit",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Ticket Pricelist
            </h1>

            {/* Wadah untuk kartu tiket dengan kelas animasi */}
            <div
              className={`
                flex flex-wrap justify-center items-stretch gap-x-8 gap-y-10 w-full max-w-6xl xl:max-w-7xl
                transition-all duration-1000 ease-out
                ${
                  isMounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
            >
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
      <Footer />
    </>
  );
}
