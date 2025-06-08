// app/berita/[id]/page.jsx

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import SearchNavbar from "@/components/SearchNavbar";
import RelatedArticleCard from "@/components/KartuBerita";
import Footer from "@/components/Footer";
import { beritaData } from "@/data/berita";
import { notFound, useParams } from "next/navigation";

export default function ArticleDetailPage() {
  const params = useParams();
  const articleId = parseInt(params.id, 10);
  const article = beritaData.find((doc) => doc.id === articleId);

  if (!article) {
    notFound();
  }

  const relatedArticles = beritaData
    .filter((doc) => doc.id !== articleId)
    .slice(0, 5);

  return (
    // 1. Wrapper utama diberi 'relative' untuk menjadi acuan background
    <div className="relative flex flex-col min-h-screen bg-white font-inter">
      {/* 2. Latar belakang dibuat 'fixed' agar selalu di bawah & tidak ikut scroll */}
      <div
        className="absolute left-0 right-0 -top-10 bottom-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/images/bg-detail-berita.svg')",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

      {/* 3. Konten diletakkan di wrapper dengan z-index agar di atas background */}
      <div className="relative z-10 flex flex-col flex-grow">
        <SearchNavbar />

        {/* 4. Konten utama diberi max-w-7xl */}
        <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs dengan warna teks yang diperbaiki */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex items-center space-x-1.5 text-black font-medium">
              <li className="flex items-center">
                <Link href="/berita" className="hover:underline">
                  Berita
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight size={14} className="mx-1.5" />
                <span className="text-black font-medium">{article.title}</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            {/* Kolom Kiri: Konten Artikel Utama */}
            <div className="w-full lg:w-2/3 xl:w-3/4">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-xl mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                {article.title}
              </h1>
              {/* Menghapus 'prose-invert' karena background sudah terang */}
              <div className="prose prose-sm sm:prose-base max-w-none space-y-4 text-gray-800 leading-relaxed">
                {article.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {article.blockquote && (
                  <blockquote className="border-l-4 border-[#135449] pl-4 italic text-gray-600">
                    <p>"{article.blockquote}"</p>
                  </blockquote>
                )}
              </div>
            </div>

            {/* Kolom Kanan: Sidebar Artikel Terkait */}
            <aside className="w-full lg:w-1/3 xl:w-1/4">
              <div className="top-24 space-y-4">
                <h2 className="text-xl font-semibold text-black mb-4">
                  Artikel Lainnya
                </h2>
                {relatedArticles.map((related) => (
                  <RelatedArticleCard
                    key={related.id}
                    image={related.image}
                    title={related.title}
                    href={`/berita/${related.id}`}
                  />
                ))}
              </div>
            </aside>
          </div>
        </main>
      </div>

      {/* Footer juga diberi z-index agar posisinya benar */}
      <Footer className="relative z-10" />
    </div>
  );
}
