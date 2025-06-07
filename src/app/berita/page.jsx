"use client";
import React, { useState, useEffect } from "react"; // 1. Impor useState dan useEffect
import Image from "next/image";
import SearchNavbar from "@/components/SearchNavbar";
import DokumenterCard from "@/components/DocumentaryCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import TabNavigation from "@/components/TabNavigation";

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
];

export default function DokumenterPage() {
  const router = useRouter();

  // 2. Buat state untuk mengontrol animasi
  const [isMounted, setIsMounted] = useState(false);

  // 3. Gunakan useEffect untuk mengubah state setelah komponen dimuat
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100); // jeda 100ms

    return () => clearTimeout(timer); // Membersihkan timer
  }, []); // Hanya berjalan sekali saat komponen dimuat

  const handleReadMore = (id) => {
    console.log("Navigating to details for ID:", id);
    router.push(`/berita/${id}`);
  };

  return (
    <>
      <div className="min-h-screen relative bg-white">
        <SearchNavbar />

        <main className="max-w-7xl mx-auto py-8 relative z-10">
          <TabNavigation />

          {/* 4. Terapkan kelas animasi pada Konten Daftar Dokumenter */}
          <div
            className={`
              space-y-10 flex flex-col items-center
              transition-all duration-1000 ease-out
              ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }
            `}
          >
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
        <div
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-contain z-0"
          style={{ backgroundImage: "url('/images/bg-documenter.svg')" }}
        />
      </div>
      <Footer />
    </>
  );
}
