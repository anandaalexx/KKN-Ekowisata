// src/components/FloraFaunaCard.jsx
import React from "react";
import Image from "next/image"; // Menggunakan Next.js Image component

export default function FloraFaunaCard({ image, name, line1, line2, onClick }) {
  return (
    // Mengubah layout utama menjadi flex row, background hitam, dan padding
    <div
      className="flex items-center p-3 rounded-xl text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
      onClick={onClick} // Tetap ada onClick handler jika kartu bisa diklik
    >
      {/* Gambar di sisi kiri */}
      <div className="flex-shrink-0">
        {" "}
        {/* Pastikan gambar tidak menyusut */}
        <Image
          src={image}
          alt={name}
          width={120} // Sesuaikan ukuran gambar agar lebih kecil sesuai gambar (misal 80px)
          height={120} // Sesuaikan ukuran gambar
          className="rounded-lg object-cover aspect-square" // Sudut membulat pada gambar
        />
      </div>

      {/* Konten teks di sisi kanan */}
      <div className="ml-4 text-left flex-grow">
        {" "}
        {/* Margin kiri untuk jarak, dan flex-grow agar mengisi sisa ruang */}
        <h3 className="font-semibold text-lg mb-0.5 truncate" title={name}>
          {name}
        </h3>
        <p className="text-sm text-white truncate" title={line1}>
          {" "}
          {/* Warna teks putih */}
          {line1}
        </p>
        <p className="text-sm text-white truncate" title={line2}>
          {" "}
          {/* Warna teks putih */}
          {line2}
        </p>
      </div>
    </div>
  );
}
