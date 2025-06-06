// src/components/FilterPanel.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronDown } from "lucide-react";

export default function FilterPanel() {
  const [activeToggle, setActiveToggle] = useState("fauna"); // Default 'fauna' sesuai gambar

  const allTags = [
    "Obat",
    "Langka",
    "Endemik",
    "Berbunga",
    "Mamalia",
    "Friendly",
    "Reptil",
    "Burung",
    "Ikan",
  ];
  // Sesuaikan selectedTags dengan gambar (Kalimantan dan Sumatra aktif di bagian area, bukan tags umum)
  const [selectedTags, setSelectedTags] = useState([]);
  const [showAllTags, setShowAllTags] = useState(false);
  // Di gambar hanya menampilkan 6 tags di awal, kita sesuaikan slice-nya
  const displayedTags = showAllTags ? allTags : allTags.slice(0, 6);

  // State untuk dropdown Area
  // Sesuaikan default selectedArea agar sesuai dengan gambar
  const [selectedArea, setSelectedArea] = useState("Kalimantan");
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);
  const areaOptions = [
    "Kalimantan",
    "Sumatra",
    "Jawa",
    "Papua",
    "Sulawesi",
    "Semua Area",
  ]; // Sesuaikan urutan sesuai gambar
  const areaDropdownRef = useRef(null); // Ref untuk dropdown area

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Efek untuk menutup dropdown area jika diklik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        areaDropdownRef.current &&
        !areaDropdownRef.current.contains(event.target)
      ) {
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
    setSelectedArea(area);
    setIsAreaDropdownOpen(false);
  };

  // --- Penyesuaian Gaya Sesuai Gambar ---

  // Gaya untuk toggle Flora/Fauna
  const toggleActiveStyle = "bg-[#2E3C4D] text-[#86E49D] font-bold"; // Warna hijau terang untuk teks dan background abu-abu gelap
  const toggleInactiveStyle = "text-gray-500 font-bold opacity-70"; // Warna abu-abu untuk teks Flora

  // Gaya untuk tag aktif (yang dipilih)
  const tagActiveStyle = "bg-[#374151] text-white border border-[#4B5563]"; // Background abu-abu gelap dengan border

  // Gaya untuk tag tidak aktif
  const tagInactiveStyle =
    "bg-transparent text-gray-300 hover:bg-[#374151] border border-transparent";

  // Gaya untuk dropdown area
  const areaDropdownButtonStyle =
    "w-full flex items-center justify-between text-left px-3 py-2 bg-[#374151] border border-[#4B5563] text-gray-200 hover:bg-[#4B5563] focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-md text-sm";
  const areaDropdownMenuStyle =
    "absolute right-0 mt-1 w-full bg-[#2A3547] border border-[#4B5563] rounded-md shadow-lg z-50 p-1 max-h-60 overflow-y-auto";

  return (
    <div className="w-full lg:w-72 bg-[#26303E] p-5 pb-70 rounded-xl shadow-lg h-full sticky top-24 font-inter text-white">
      {/* Search Input */}
      <div className="relative mb-6">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search in Animals"
          className="input w-full pl-12 pr-4 py-3 bg-[#374151] border-none text-gray-200 placeholder-gray-400 focus:ring-1 focus:ring-blue-500 rounded-md text-sm transition-colors"
        />
      </div>

      {/* Flora/Fauna Toggle */}
      <div className="flex items-center justify-center mb-5 space-x-1">
        <button
          onClick={() => setActiveToggle("flora")}
          className={`px-3 py-1.5 text-xl font-bold transition-colors duration-200 rounded-lg w-1/2 ${
            // Rounded-lg for more roundness
            activeToggle === "flora" ? toggleActiveStyle : toggleInactiveStyle
          }`}
        >
          Flora
        </button>
        <button
          onClick={() => setActiveToggle("fauna")}
          className={`px-3 py-1.5 text-xl font-bold transition-colors duration-200 rounded-lg w-1/2 ${
            // Rounded-lg for more roundness
            activeToggle === "fauna" ? toggleActiveStyle : toggleInactiveStyle
          }`}
        >
          Fauna
        </button>
      </div>

      {/* Tags Section */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {displayedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 text-xs sm:text-sm rounded-md transition-colors duration-150 font-medium ${
                selectedTags.includes(tag) ? tagActiveStyle : tagInactiveStyle
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        {/* Only show "More Tags" if there are more tags to display */}
        {allTags.length > 6 && ( // Sesuaikan ini menjadi 6 karena displayedTags.slice(0, 6)
          <button
            onClick={() => setShowAllTags(!showAllTags)}
            className="text-xs text-gray-400 hover:text-white mt-3 flex items-center mx-auto"
          >
            {showAllTags ? "Less Tags" : "More Tags"}
            <ChevronDown
              size={16}
              className={`inline ml-1 transform transition-transform ${
                showAllTags ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      <hr className="border-slate-700 my-5" />

      {/* Filter Area with Custom Dropdown */}
      <div className="flex items-center justify-between gap-3 border border-slate-700 p-2 rounded-md">
        <span className="block text-sm font-medium text-gray-300 flex-shrink-0">
          Area:
        </span>
        <div className="relative flex-grow" ref={areaDropdownRef}>
          {/* Dropdown Trigger Button */}
          <button
            type="button"
            onClick={() => setIsAreaDropdownOpen(!isAreaDropdownOpen)}
            className={areaDropdownButtonStyle}
          >
            {/* Tampilkan selectedArea, jika null/kosong bisa diset ke default 'Semua Area' */}
            <span className="truncate">{selectedArea || "Semua Area"}</span>
            <ChevronDown
              size={16}
              className={`ml-1 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                isAreaDropdownOpen ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isAreaDropdownOpen && (
            <ul className={areaDropdownMenuStyle}>
              {areaOptions.map((area) => (
                <li key={area}>
                  <button
                    type="button"
                    className={`w-full text-left text-sm px-3 py-2 rounded-md block ${
                      selectedArea === area
                        ? "bg-blue-600 text-white" // Gaya untuk item yang aktif
                        : "text-gray-300 hover:bg-[#374151]" // Warna hover untuk item tidak aktif
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
