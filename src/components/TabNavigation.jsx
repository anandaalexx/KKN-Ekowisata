"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Definisikan item tab di sini agar konsisten
const tabItems = [
  {
    name: "Documentary",
    href: "/berita",
    activeClassName: "bg-[#13564C] text-white shadow-md",
    inactiveClassName: "text-gray-400 hover:text-gray-100 hover:bg-[#13564C]",
  },
  {
    name: "Flora & Fauna",
    href: "/florafauna",
    activeClassName: "bg-gray-100 text-[#13564C] shadow-md",
    inactiveClassName: "text-gray-400 hover:text-[#13564C] hover:bg-gray-100",
  },
];

export default function TabNavigation() {
  const pathname = usePathname();

  return (
    <div className="mb-8 flex justify-center items-center py-2 space-x-0 md:space-x-1">
      {tabItems.map((tab) => {
        // Logika `isActive` lebih sederhana: cek jika pathname sama persis dengan href tab
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`
              py-2.5 px-4 sm:px-6 focus:outline-none rounded-md
              text-sm font-medium transition-all duration-200 ease-in-out
              ${isActive ? tab.activeClassName : tab.inactiveClassName}
            `}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
}
