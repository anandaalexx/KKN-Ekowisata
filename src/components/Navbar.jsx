// components/Navbar.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="w-34 h-auto">
          <Image
            src="/images/logo.png"
            alt="Logo Mini Zoo"
            width={192}
            height={72}
            className="h-auto w-full"
            priority
          />
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex ml-auto space-x-6 font-semibold text-2xl text-[#1D3F11] right-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tiket">Tiket</Link>
          </li>
          <li>
            <Link href="/flora-fauna">Flora & Fauna</Link>
          </li>
          <li>
            <Link href="/berita">Berita</Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div>
          <Link
            href="/pesan-tiket"
            className="bg-[#135449] hover:brightness-110 text-white text-2xl ml-6 font-semibold px-6 py-1.5 rounded-full transition"
          >
            Pesan Tiket
          </Link>
        </div>
      </div>
    </nav>
  );
}
