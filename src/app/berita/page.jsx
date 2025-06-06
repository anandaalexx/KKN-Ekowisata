// src/pages/DokumenterPage.jsx (atau path yang sesuai, misal app/berita/page.jsx atau app/florafauna/page.jsx jika ini adalah halaman listnya)
"use client";
import React from "react";
import Image from "next/image";
import SearchNavbar from "@/components/SearchNavbar"; // Sesuaikan path jika perlu
import DokumenterCard from "@/components/DocumentaryCard"; // Pastikan nama komponen dan path ini benar
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // 1. Impor useRouter dan usePathname

// Contoh data untuk halaman dokumenter
const dokumenterData = [
  {
    id: 1,
    image: "/images/gambarberita.png",
    title: "Animal Feeding",
    location: "Lorem Ipsum",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    id: 2,
    image: "/images/gambarberita.png",
    title: "Another Animal Story",
    location: "Somewhere Else",
    summary:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    listItems: [
      "Sed ut perspiciatis unde omnis iste natus error.",
      "Nemo enim ipsam voluptatem quia voluptas sit.",
      "Neque porro quisquam est, qui dolorem ipsum.",
    ],
  },
  // Tambahkan data dokumenter lainnya di sini
];

export default function DokumenterPage() {
  const pathname = usePathname();
  const router = useRouter(); // 2. Inisialisasi router

  // 3. Modifikasi handleReadMore untuk navigasi
  const handleReadMore = (id) => {
    console.log("Navigating to details for ID:", id);
    // Tentukan path halaman detail Anda. Sesuaikan '/berita/dokumenter/' jika perlu.
    // Misalnya, jika tab "Documentary" aktif, mungkin Anda ingin '/berita/dokumenter/[id]'
    // Jika tab "Flora & Fauna" aktif dan dokumenter ada di sana, path-nya bisa berbeda.
    // Untuk contoh ini, saya asumsikan semua detail dokumenter ada di bawah '/berita/dokumenter/'
    router.push(`/berita/${id}`);
  };

  const tabItems = [
    { name: "Flora & Fauna", href: "/florafauna" },
    { name: "Documentary", href: "/berita" },
  ];

  return (
    <>
      <div className="min-h-screen relative bg-white">
        <SearchNavbar />

        <main className="max-w-7xl mx-auto py-8 relative z-10">
          {/* BAGIAN NAVIGASI TAB */}
          <div className="mb-8 flex justify-center items-center py-2 space-x-0 md:space-x-1">
            {tabItems.map((tab) => {
              // Logika isActive mungkin perlu disesuaikan jika halaman detail memiliki path yang sama
              // Misalnya, jika /berita/dokumenter/1 aktif, tab "Documentary" (/berita) juga akan aktif.
              // Jika Anda ingin tab hanya aktif di halaman listnya, Anda bisa menggunakan:
              // const isActive = pathname === tab.href;
              // Jika Anda ingin tab tetap aktif saat di halaman detail yang bersangkutan:
              const isActive = pathname.startsWith(tab.href);

              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={`
                  py-2.5 px-4 sm:px-6 focus:outline-none rounded-md
                  text-sm font-medium transition-all duration-200 ease-in-out
                  ${
                    isActive
                      ? "bg-[#13564C] text-white shadow-md"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }
                `}
                >
                  {tab.name}
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
                onReadMore={() => handleReadMore(doc.id)} // Pastikan ini memanggil fungsi yang sudah diupdate
              />
            ))}
          </div>
        </main>

        <div
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-contain z-10"
          style={{ backgroundImage: "url('/images/bg-documenter.svg')" }}
        />
      </div>
      <Footer />
    </>
  );
}
