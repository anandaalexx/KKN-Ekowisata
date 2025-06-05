// src/app/berita/detail/[slug]/page.jsx (Contoh path untuk App Router dengan slug dinamis)
// atau src/pages/ArticleDetailPage.jsx
"use client";
import React from 'react';
import SearchNavbar from '@/components/SearchNavbar'; // Sesuaikan path jika perlu
import RelatedArticleCard from '@/components/KartuBerita';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'; // Untuk breadcrumbs

// Data contoh untuk halaman artikel (idealnya dari CMS atau API)
const articleData = {
  title: "How Frogs Boost Their Appeal",
  featuredImage: "/images/macan.jpg", // Ganti dengan path gambar Anda di /public
  breadcrumb: [
    { name: "Berita", href: "/berita" },
    // Nama artikel bisa dinamis
    { name: "How Frogs Boost Their Appeal", href: "/berita/1" } 
  ],
  paragraphs: [
    "Wild Wolf Brewing Company (Nellysford, VA) is brewing the official beer of this year’s PrideFest, hosted by Virginia Pride, to be held on Saturday, September 12, 2015, at Brown’s Island in Richmond.",
    "Virginia Pride has narrowed the options for the brew down to four varieties, and requests the community’s participation in selecting - and naming - between them: Sessionable Saison, Pilsner, Belgian ale fermented with fresh fruit, or summer spiced Hefeweizen. Voting will take place from March 1-15 on the Virginia Pride website."
  ],
  blockquote: "\"We believe beer unites, and we are privileged to be associated in support of this event.\"\n\"Wild Wolf is stoked to be supporting Virginia Pride through this exciting partnership. This collaboration supports our belief that anyone can come together to produce an amazing union.\""
};

const relatedArticlesData = [
  { id: 1, image: "/images/macan.jpg", title: "Wild wolves and endless pride", href: "/berita/wild-wolves" },
  { id: 2, image: "/images/macan.jpg", title: "Wild wolves and endless pride", href: "/berita/wild-wolves-2" },
  { id: 3, image: "/images/macan.jpg", title: "Wild wolves and endless pride", href: "/berita/wild-wolves-3" },
  { id: 4, image: "/images/macan.jpg", title: "Wild wolves and endless pride", href: "/berita/wild-wolves-4" },
  { id: 5, image: "/images/macan.jpg", title: "Wild wolves and endless pride", href: "/berita/wild-wolves-5" },
];


export default function ArticleDetailPage() {
  // Jika menggunakan App Router dan path dinamis, Anda akan mendapatkan slug dari params
  // const params = useParams();
  // const articleSlug = params.slug;
  // Kemudian fetch data artikel berdasarkan slug tersebut. Untuk sekarang, kita gunakan data statis.

  return (
    <div 
      className="min-h-screen bg-[#1A202C] text-gray-200 font-inter"
      style={{ 
        backgroundImage: "url('/images/bgidberita.png')", // Pastikan gambar ini ada di /public
        backgroundPosition: 'bottom center', 
        backgroundRepeat: 'repeat-x', 
        backgroundSize: 'contain',
        backgroundAttachment: 'fixed' // Agar siluet tetap di bawah saat scroll
      }}
    >
      <SearchNavbar /> {/* Navbar Anda */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex items-center space-x-1.5 text-gray-400">
            {articleData.breadcrumb.map((crumb, index) => (
              <li key={crumb.name} className="flex items-center">
                {index > 0 && <ChevronRight size={14} className="mx-1.5" />}
                <Link href={crumb.href} className="hover:text-gray-100 hover:underline">
                  {crumb.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Konten Utama: Dua Kolom */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          
          {/* Kolom Kiri: Konten Artikel Utama */}
          <div className="w-full lg:w-2/3 xl:w-3/4">
            {/* Gambar Utama Artikel */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/9] rounded-xl overflow-hidden shadow-xl mb-6">
              <Image
                src={articleData.featuredImage}
                alt={articleData.title}
                layout="fill"
                objectFit="cover"
                priority // Tambahkan priority untuk LCP (Largest Contentful Paint)
              />
            </div>

            {/* Judul Artikel */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {articleData.title}
            </h1>

            {/* Isi Artikel */}
            <div className="prose prose-sm sm:prose-base prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
              {articleData.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {articleData.blockquote && (
                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-400">
                  {articleData.blockquote.split('\n').map((line, i) => <p key={i} className="mb-1">{line}</p>)}
                </blockquote>
              )}
            </div>
          </div>

          {/* Kolom Kanan: Sidebar Artikel Terkait */}
          <aside className="w-full lg:w-1/3 xl:w-1/4">
            {/* Anda bisa memberi background pada sidebar ini jika mau, misal bg-slate-800/50 rounded-lg p-4 */}
            <div className="sticky top-24 space-y-4"> {/* top-24 untuk memberi ruang di bawah navbar sticky */}
              {/* Judul Sidebar bisa ditambahkan jika perlu, misal "Artikel Lainnya" */}
              {/* <h2 className="text-xl font-semibold text-white mb-4">Artikel Terkait</h2> */}
              {relatedArticlesData.map((relatedArticle) => (
                <RelatedArticleCard
                  key={relatedArticle.id}
                  image={relatedArticle.image}
                  title={relatedArticle.title}
                  href={relatedArticle.href}
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
      {/* <Footer /> Jika ada */}
    </div>
  );
}