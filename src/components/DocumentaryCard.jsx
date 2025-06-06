// src/components/DokumenterCard.jsx
import React from 'react';
import Image from 'next/image';
import { MapPin, Play, ChevronRight } from 'lucide-react';

export default function DokumenterCard({
  image = "/images/gambarberita.png", // Gambar default
  title = "Judul Dokumenter",
  location = "Lokasi Dokumenter",
  summary = "Ringkasan dokumenter tidak tersedia.",
  listItems = [],
  onReadMore = () => console.log("Tombol Read More diklik."),
}) {
  return (
    // Wadah utama sekarang hanya untuk layout flex, tanpa styling kartu.
    // Styling seperti background putih dan shadow akan datang dari parent di halaman.
    <div className="flex flex-col md:flex-row w-full overflow-hidden p-4 sm:p-6"> {/* Padding ditambahkan di sini untuk konten internal */}
      {/* Bagian Gambar */}
      {/* aspect-video untuk mobile, md:aspect-auto agar bisa menyesuaikan tinggi di desktop */}
      {/* md:h-full bisa ditambahkan jika ingin gambar mengisi tinggi penuh di desktop jika teks lebih panjang */}
      <div className="w-full md:w-[35%] lg:w-[30%] relative h-48 md:h-auto aspect-video md:aspect-auto rounded-lg overflow-hidden bg-gray-200"> {/* rounded-lg untuk gambar, bg-gray-200 sbg placeholder */}
        <Image 
          src={image}
          alt={title || "Dokumenter Image"}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      {/* Bagian Info Teks */}
      <div className="w-full md:w-[65%] lg:w-[70%] md:pl-6 mt-4 md:mt-0 flex flex-col justify-between">
        <div>
          <div className="mb-2">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title || "Judul Dokumenter"}</h2>
            {location && (
              <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-1">
                <MapPin size={14} className="mr-1.5 text-gray-400 flex-shrink-0" />
                <span className="italic">{location}</span>
              </div>
            )}
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-3 sm:line-clamp-2 md:line-clamp-3"> {/* line-clamp disesuaikan */}
            {summary || "Ringkasan dokumenter tidak tersedia."}
          </p>

          <div className="space-y-1 text-sm text-gray-700 mb-4">
            {(listItems && listItems.length > 0) ? (
              listItems.slice(0, 3).map((item, index) => ( // Tampilkan maks 3 item
                (<div key={index} className="flex items-start">
                  <Play size={15} className="w-3.5 h-3.5 mr-2 mt-[3px] text-green-600 flex-shrink-0" fill="currentColor" />
                  <span className="flex-1">{item}</span>
                </div>)
              ))
            ) : (
            <p className="text-xs text-gray-400 italic">Tidak ada detail tambahan.</p>
          )}
        </div>
        
        <button
          onClick={onReadMore}
          className="w-[170px] rounded-lg btn btn-sm bg-[#13564C] hover:bg-green-700 text-white self-start normal-case font-medium px-4 py-2 group mt-16 flex justify-center items-center transition-all duration-200"
        >
          Read more
          <div className="flex items-center ml-1.5 sm:ml-2">
            <ChevronRight size={16} className="transition-transform duration-200 ease-in-out group-hover:translate-x-0.5" />
            <ChevronRight size={16} className="-ml-2 sm:-ml-2.5 transition-transform duration-200 ease-in-out group-hover:translate-x-0.5" />
          </div>
        </button>
        </div>
      </div>
    </div>
  );
}

// Props default
DokumenterCard.defaultProps = {
  image: "/placeholder-image.jpg",
  title: "Judul Dokumenter Default",
  location: "Lokasi Default",
  summary: "Ini adalah ringkasan default untuk dokumenter. Informasi lebih lanjut akan tersedia.",
  listItems: [
    "Detail penting pertama.",
    "Detail penting kedua.",
    "Detail penting ketiga.",
  ],
  onReadMore: () => console.log("Tombol Read More default diklik."),
};