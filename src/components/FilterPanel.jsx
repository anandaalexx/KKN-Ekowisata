// src/components/FilterPanel.jsx
"use client"; // Pastikan ini ada di bagian atas file jika menggunakan Next.js
import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function FilterPanel() {
  const [activeToggle, setActiveToggle] = useState('fauna'); // 'fauna' or 'flora'
  const tags = ['Obat', 'Langka', 'Endemik', 'Berbunga', 'Mamalia', 'Friendly']; // Contoh tags
  // Jika ingin lebih banyak tags, bisa implementasikan 'More Tags'
  const [showAllTags, setShowAllTags] = useState(false);
  const displayedTags = showAllTags ? tags : tags.slice(0, 6); // Tampilkan 6 tag awal

  return (
    <div className="w-full lg:w-72 bg-[#26303E] p-5 rounded-xl shadow-lg h-fit sticky top-24"> {/* Warna gelap untuk panel filter, sticky top */}
      {/* Search in Animals */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        <input 
          type="text" 
          placeholder="Search in Animals" 
          className="input input-sm w-full pl-10 pr-4 bg-[#1E2633] border-gray-600/50 text-gray-200 focus:border-blue-500 rounded-md" 
        />
      </div>

      {/* Flora/Fauna Toggle */}
      <div className="btn-group mb-6 w-full">
        <button 
          onClick={() => setActiveToggle('flora')}
          className={`btn btn-sm flex-1 normal-case font-medium ${activeToggle === 'flora' ? 'btn-active bg-gray-300 text-black hover:bg-gray-400' : 'btn-outline border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500'}`}
        >
          Flora
        </button>
        <button 
          onClick={() => setActiveToggle('fauna')}
          className={`btn btn-sm flex-1 normal-case font-medium ${activeToggle === 'fauna' ? 'btn-active bg-gray-300 text-black hover:bg-gray-400' : 'btn-outline border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500'}`}
        >
          Fauna
        </button>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {displayedTags.map(tag => (
            <button key={tag} className="btn btn-xs bg-gray-600/50 hover:bg-gray-500/50 text-gray-300 border-none normal-case font-normal rounded-md">
              {tag}
            </button>
          ))}
        </div>
        {tags.length > 6 && (
            <button 
                onClick={() => setShowAllTags(!showAllTags)} 
                className="text-xs text-gray-400 hover:text-white mt-2 flex items-center"
            >
                {showAllTags ? 'Less Tags' : 'More Tags'} <ChevronDown size={14} className={`inline ml-1 transform transition-transform ${showAllTags ? 'rotate-180' : ''}`} />
            </button>
        )}
      </div>

      {/* Area Filter */}
      <div>
        <label htmlFor="area-filter" className="block text-sm font-medium text-gray-300 mb-1">Area:</label>
        <select id="area-filter" className="select select-sm w-full bg-[#1E2633] border-gray-600/50 text-gray-200 focus:border-blue-500 rounded-md">
          <option>Kalimantan</option>
          <option>Sumatra</option>
          <option>Jawa</option>
          <option>Papua</option>
          <option>Sulawesi</option>
        </select>
      </div>
    </div>
  );
}