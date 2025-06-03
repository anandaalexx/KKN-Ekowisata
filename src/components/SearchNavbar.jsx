"use client"; // <- penting untuk hook ini

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ScanLine, ListFilter } from "lucide-react";
import Image from "next/image";

export default function SearchNavbar() {
  const pathname = usePathname();

  // Logika ganti warna background berdasarkan halaman
  const backgroundColor =
    pathname === "/tiket"
      ? "#13564C"
      : pathname === "/berita"
      ? "#13564C"
      : "#FFFFFF";

  // Logika menu berdasarkan halaman
  const menuItems =
    pathname === "/tiket"
      ? [
          { label: "Home", href: "/" },
          { label: "Berita", href: "/berita" },
          { label: "Flora & Fauna", href: "/flora-fauna" },
        ]
      : pathname === "/berita"
      ? [
          { label: "Home", href: "/" },
          { label: "Tiket", href: "/tiket" },
          { label: "Flora & Fauna", href: "/flora-fauna" },
        ]
      : [
          { label: "Home", href: "/" },
          { label: "Tiket", href: "/tiket" },
          { label: "Berita", href: "/berita" },
        ];

  return (
    <nav className="shadow-sm sticky top-0 z-50" style={{ backgroundColor }}>
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="w-34 h-auto">
          <Image
            src="/images/whitelogo.png"
            alt="Logo Mini Zoo"
            width={192}
            height={72}
            className="h-auto w-full"
            priority
          />
        </Link>

        {/* Search bar */}
        <div className="flex flex-1 max-w-lg -ml-8">
          <div className="flex items-center bg-[#211F26] text-white rounded-xl w-full overflow-hidden">
            <span className="p-3">
              <Search className="w-5 h-5 text-gray-300 cursor-pointer hover:brightness-90" />
            </span>
            <input
              type="text"
              placeholder="Search animals"
              className="bg-transparent text-sm w-full focus:outline-none placeholder:text-gray-400"
            />
            <span className="p-3">
              <ScanLine className="w-5 h-5 text-gray-300 cursor-pointer hover:brightness-90" />
            </span>
          </div>
        </div>

        {/* Menu icon */}
        <button className="bg-[#211F26] p-3 rounded-xl -ml-38">
          <ListFilter className="w-5 h-5 text-gray-300 cursor-pointer hover:brightness-90" />
        </button>

        {/* Menu dinamis */}
        <ul className="flex space-x-8 text-white font-semibold text-lg ml-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
