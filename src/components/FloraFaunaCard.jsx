// src/components/FloraFaunaCard.jsx
import React from 'react';
import Image from 'next/image'; // Menggunakan Next.js Image component

export default function FloraFaunaCard({ image, name, line1, line2, onClick }) {
  return (
    <div 
      className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer h-52 sm:h-60 w-full transition-all duration-300 ease-in-out hover:scale-105"
      onClick={onClick} // Tambahkan onClick handler jika kartu bisa diklik
    >
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      {/* Overlay gradient gelap dari bawah untuk keterbacaan teks */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      {/* Konten teks di atas overlay */}
      <div className="absolute bottom-0 left-0 p-3 sm:p-4 text-white w-full">
        <h3 className="text-base sm:text-lg font-semibold mb-0.5 truncate" title={name}>{name}</h3>
        <p className="text-xs sm:text-sm opacity-90 truncate" title={line1}>{line1}</p>
        <p className="text-xs sm:text-sm opacity-90 truncate" title={line2}>{line2}</p>
      </div>
    </div>
  );
}