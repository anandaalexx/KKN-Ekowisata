"use client"; // <- penting untuk hook ini

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ScanLine, ListFilter } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export default function SearchNavbar() {
  const pathname = usePathname();

  // Logika ganti warna background berdasarkan halaman
  const backgroundColor =
    pathname === "/tiket"
      ? "#13564C"
      : pathname === "/berita"
      ? "#13564C"
      : "#FFFFFF";

  const useWhiteLogo = backgroundColor !== "#FFFFFF";
  const logoSrc = useWhiteLogo ? "/images/whitelogo.png" : "/images/logo.png";

  const textColor = useWhiteLogo ? "text-white" : "text-[#1D3F11]";

  // Logika menu berdasarkan halaman
  const menuItems =
    pathname === "/tiket"
      ? [
          { label: "Home", href: "/" },
          { label: "Berita", href: "/berita" },
          { label: "Flora & Fauna", href: "/florafauna" },
        ]
      : pathname === "/berita"
      ? [
          { label: "Home", href: "/" },
          { label: "Tiket", href: "/tiket" },
          { label: "Flora & Fauna", href: "/florafauna" },
        ]
      : [
          { label: "Home", href: "/" },
          { label: "Tiket", href: "/tiket" },
          { label: "Berita", href: "/berita" },
        ];

  return (
    <nav className="shadow-sm sticky top-0 z-50" style={{ backgroundColor }}>
      {/* Ganti padding horizontal (px) di container utama */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-x-4 md:gap-x-12">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logoSrc}
            alt="Logo Mini Zoo"
            width={192}
            height={72}
            className="h-auto w-32 md:w-48" // Lebar logo responsif
            priority
          />
        </Link>

        {/* Kelompok Tengah: Search Bar dan Filter Icon */}
        <div className="flex flex-1 justify-center items-center gap-x-3">
          {/* Search bar */}
          <div className="flex flex-1 max-w-lg">
            <div className="flex items-center bg-[#1C1B1F] text-white rounded-xl w-full overflow-hidden">
              <span className="p-3">
                <Search className="w-5 h-5 text-[#CAC4D0] cursor-pointer hover:brightness-90" />
              </span>
              <input
                type="text"
                placeholder="Search animals"
                className="bg-transparent text-sm w-full focus:outline-none placeholder:text-[#49454F]"
              />
              <span className="p-3">
                <ScanLine className="w-5 h-5 text-[#CAC4D0] cursor-pointer hover:brightness-90" />
              </span>
            </div>
          </div>

          {/* Menu icon (Filter) */}
          <button className="bg-[#211F26] p-3 rounded-xl">
            <ListFilter className="w-5 h-5 text-[#CAC4D0] cursor-pointer hover:brightness-90" />
          </button>
        </div>

        {/* Menu dinamis (Navigasi Kanan) */}
        <ul
          className={clsx(
            "hidden md:flex items-center space-x-8 font-semibold text-2xl",
            textColor
          )}
          style={{ textColor }}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:brightness-110">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
