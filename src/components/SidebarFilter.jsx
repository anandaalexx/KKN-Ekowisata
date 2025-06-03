"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SidebarFilter() {
  const [activeTab, setActiveTab] = useState("Fauna");

  return (
    <aside className="bg-[#1C1B1F] p-4 rounded-xl w-72 text-[#CAC4D0]">
      {/* Search Bar */}
      <div className="flex items-center bg-[#2c2c2e] rounded-lg px-3 py-2 mb-4">
        <Search className="w-4 h-4 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent w-full text-sm focus:outline-none placeholder:text-gray-400"
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-6 space-x-2 font-bold">
        <button
          onClick={() => setActiveTab("Flora")}
          className={`px-3 py-1 rounded-lg text-[#CAC4D0] cursor-pointer ${
            activeTab === "Flora" ? "bg-[#2c2c2e] text-[#D0EAD8]" : ""
          }`}
        >
          Flora
        </button>
        <button
          onClick={() => setActiveTab("Fauna")}
          className={`px-3 py-1 rounded-lg cursor-pointer ${
            activeTab === "Fauna" ? "bg-[#2c2c2e] text-[#D0EAD8]" : ""
          }`}
        >
          Fauna
        </button>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {["Obat", "Langka", "Endemik", "Berbunga"].map((tag) => (
            <span
              key={tag}
              className="bg-[#2c2c2e] px-3 py-1.5 text-sm rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["Mamalia", "Langka", "Friendly"].map((tag) => (
            <span
              key={tag}
              className="bg-[#2c2c2e] px-3 py-1.5 text-sm rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button className="text-sm text-gray-400 mb-4">More Tags</button>

      {/* Area Filter */}
      <div className="mb-2">
        <label className="block font-semibold">Area:</label>
      </div>
      <div className="flex flex-wrap gap-2">
        {["Kalimantan", "Sumatra"].map((area) => (
          <span
            key={area}
            className="bg-[#2c2c2e] px-3 py-1.5 text-sm rounded-lg"
          >
            {area}
          </span>
        ))}
      </div>
    </aside>
  );
}
