// src/components/AnimalCard.jsx
import Image from "next/image";

export default function AnimalCard({ name, image }) {
  return (
    // Mengubah flex menjadi block dan menambahkan padding serta background
    <div className="flex flex-col items-start p-4 bg-[#26303E] rounded-xl shadow-lg text-white">
      <div className="mb-4 w-full flex justify-center">
        {" "}
        {/* Container untuk gambar agar bisa di-center */}
        <Image
          src={image}
          alt={name}
          width={120} // Sesuaikan ukuran gambar, mungkin 120px atau lebih
          height={120} // Sesuaikan ukuran gambar
          className="rounded-xl object-cover aspect-square" // Sudut lebih membulat dan pastikan rasio aspek square
        />
      </div>
      <div className="text-left w-full">
        {" "}
        <h3 className="font-medium text-black text-lg mb-1">{name}</h3>{" "}
        <p className="text-sm font-medium text-gray-100">Friend of people</p>
        <p className="text-sm font-medium text-gray-100">Always scared</p>
      </div>
    </div>
  );
}
