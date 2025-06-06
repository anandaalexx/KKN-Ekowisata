// src/components/FilterPanel.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function FilterPanel() {
  const [activeToggle, setActiveToggle] = useState('fauna');
  
  const allTags = ['Obat', 'Langka', 'Endemik', 'Berbunga', 'Mamalia', 'Friendly', 'Reptil', 'Burung', 'Ikan'];
  const [selectedTags, setSelectedTags] = useState([]);
  const [showAllTags, setShowAllTags] = useState(false);
  const displayedTags = showAllTags ? allTags : allTags.slice(0, 7);

  // State untuk dropdown Area
  const [selectedArea, setSelectedArea] = useState('Kalimantan'); // Default bisa area spesifik atau 'Semua Area' / ''
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);
  const areaOptions = ['Semua Area', 'Kalimantan', 'Sumatra', 'Jawa', 'Papua', 'Sulawesi'];
  const areaDropdownRef = useRef(null); // Ref untuk dropdown area

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };
  
  // Efek untuk menutup dropdown area jika diklik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (areaDropdownRef.current && !areaDropdownRef.current.contains(event.target)) {
        setIsAreaDropdownOpen(false);
      }
    }
    if (isAreaDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAreaDropdownOpen]);

  // Handler untuk memilih item dari dropdown area
  const handleAreaSelect = (area) => {
    setSelectedArea(area); // Langsung set area yang dipilih
    setIsAreaDropdownOpen(false); // Tutup dropdown setelah memilih
  };

  // Gaya untuk filter aktif (yang Anda sebut "ghost button")
  const activeFilterStyle = "bg-gray-200 text-gray-800 font-semibold border border-gray-400/50 shadow-sm";
  // Gaya untuk filter tidak aktif (tombol)
  const inactiveFilterButtonStyle = "bg-slate-700/40 text-gray-300 hover:bg-slate-600/60 border border-transparent";
  // Gaya untuk filter tidak aktif (teks toggle Flora)
  const inactiveToggleTextStyle = "text-gray-500 hover:text-gray-300 opacity-70";

  return (
    <div className="w-full lg:w-72 bg-[#26303E] p-5 rounded-xl shadow-lg h-fit sticky top-24 font-inter text-white">
      
      <div className="relative mb-6">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        <input 
          type="text" 
          placeholder="Search in Animals" 
          className="input w-full pl-12 pr-4 py-3 bg-[#374151] border-none text-gray-200 placeholder-gray-400 focus:ring-1 focus:ring-blue-500 rounded-md text-sm transition-colors" 
        />
      </div>

      <div className="flex items-center justify-center mb-5 space-x-1">
        <button 
          onClick={() => setActiveToggle('flora')}
          className={`px-3 py-1.5 text-2xl font-bold transition-colors duration-200 rounded-md w-1/2 ${
            activeToggle === 'flora' ? activeFilterStyle : inactiveToggleTextStyle
          }`}
        >
          Flora
        </button>
        <button 
          onClick={() => setActiveToggle('fauna')}
          className={`px-3 py-1.5 text-2xl font-bold transition-colors duration-200 rounded-md w-1/2 ${
            activeToggle === 'fauna' ? activeFilterStyle : inactiveToggleTextStyle
          }`}
        >
          Fauna
        </button>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {displayedTags.map(tag => (
            <button 
              key={tag} 
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-xs sm:text-sm rounded-md transition-colors duration-150 font-medium ${
                selectedTags.includes(tag) ? activeFilterStyle : inactiveFilterButtonStyle
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        {allTags.length > displayedTags.length && (
            <button 
                onClick={() => setShowAllTags(!showAllTags)} 
                className="text-xs text-gray-400 hover:text-white mt-3 flex items-center mx-auto"
            >
                {showAllTags ? 'Less Tags' : 'More Tags'} 
                <ChevronDown size={16} className={`inline ml-1 transform transition-transform ${showAllTags ? 'rotate-180' : ''}`} />
            </button>
        )}
      </div>
      
      <hr className="border-slate-700 my-5" />

      {/* Filter Area dengan Dropdown Kustom */}
      <div className="flex items-center justify-between gap-3">
        <span className="block text-sm font-medium text-gray-300 flex-shrink-0">
          Area:
        </span>
        <div className="relative flex-grow" ref={areaDropdownRef}> {/* `ref` dipasang di sini */}
          {/* Tombol Pemicu Dropdown */}
          <button
            type="button"
            onClick={() => setIsAreaDropdownOpen(!isAreaDropdownOpen)}
            // Styling tombol pemicu
            className="w-full flex items-center justify-between text-left px-3 py-2 bg-[#374151] border border-slate-600/80 text-gray-200 hover:bg-slate-600/80 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-md text-sm"
          >
            <span className="truncate">{selectedArea || "Semua Area"}</span> {/* Menampilkan "Semua Area" jika selectedArea kosong */}
            <ChevronDown 
              size={16} 
              className={`ml-1 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                isAreaDropdownOpen ? 'transform rotate-180' : ''
              }`} 
            />
          </button>
          
          {/* Menu Dropdown */}
          {isAreaDropdownOpen && (
            <ul 
              // w-full agar lebar menu dropdown sama dengan tombol pemicunya
              className="absolute right-0 mt-1 w-full bg-[#2A3547] border border-slate-700 rounded-md shadow-lg z-50 p-1 max-h-60 overflow-y-auto"
            >
              {areaOptions.map(area => ( // areaOptions sekarang termasuk "Semua Area"
                <li key={area}>
                  <button
                    type="button"
                    className={`w-full text-left text-sm px-3 py-2 rounded-md block ${
                      selectedArea === area // Item aktif di dropdown
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-slate-700/60'
                    }`}
                    onClick={() => handleAreaSelect(area)}
                  >
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}