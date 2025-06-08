"use client";
import React, { useState, useEffect } from "react";
import SearchNavbar from "@/components/SearchNavbar";
import DokumenterCard from "@/components/DocumentaryCard";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import TabNavigation from "@/components/TabNavigation";
import { beritaData } from "@/data/berita";

export default function DokumenterPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleReadMore = (id) => {
    router.push(`/berita/${id}`);
  };

  return (
    <>
      <div className="min-h-screen relative bg-white">
        <SearchNavbar />
        <main className="max-w-7xl mx-auto py-8 relative z-10">
          <TabNavigation />
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
            {/* 2. Gunakan 'beritaData' yang sudah diimpor */}
            {beritaData.map((doc) => (
              <DokumenterCard
                key={doc.id}
                {...doc} // Cara singkat untuk passing semua properti
                onReadMore={() => handleReadMore(doc.id)}
              />
            ))}
          </div>
        </main>
        {/* ... sisa kode Anda ... */}
        <div
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-contain z-0"
          style={{ backgroundImage: "url('/images/bg-documenter.svg')" }}
        />
      </div>
      <Footer />
    </>
  );
}
