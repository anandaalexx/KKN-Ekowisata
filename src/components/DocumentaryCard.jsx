// src/components/DokumenterCard.jsx (atau path yang sesuai)
import React from 'react';
import { MapPin, Play } from 'lucide-react'; // MapPin untuk lokasi, Play untuk list item

export default function DokumenterCard({
  image,
  title,
  location, // Contoh: "Lorem Ipsum" atau nama lokasi spesifik
  summary,
  listItems,
  onReadMore, // Fungsi untuk tombol "Read more"
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl hover:shadow-xl transition-shadow duration-300">
      {/* Gambar */}
      <div className="w-full md:w-2/5">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Konten Teks */}
      <div className="w-full md:w-3/5 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{title}</h2>
          {location && ( // Tampilkan lokasi jika ada
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <MapPin size={16} className="mr-1.5" />
              <span>{location}</span>
            </div>
          )}
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {summary}
          </p>
          <ul className="space-y-1.5 text-sm text-gray-600 mb-4">
            {(listItems || []).map((item, index) => (
              <li key={index} className="flex items-start">
                <Play size={16} className="w-4 h-4 mr-2 mt-[3px] text-green-600 flex-shrink-0" fill="currentColor" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={onReadMore}
          className="btn btn-sm bg-green-600 hover:bg-green-700 text-white self-start normal-case px-5" // self-start agar tidak full width
        >
          Read more »
        </button>
      </div>
    </div>
  );
}