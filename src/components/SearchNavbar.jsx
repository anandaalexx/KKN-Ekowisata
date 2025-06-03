import Link from "next/link";
import { FiSearch, FiFilter } from "react-icons/fi";
import Image from "next/image";

export default function SearchNavbar() {
  return (
    <nav className="bg-[#13564C] px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/images/whitelogo.png" alt="Logo" width={90} height={40} />
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2 bg-[#2A272F] px-4 py-2 rounded-md w-full max-w-md">
        <FiSearch className="text-white opacity-70" />
        <input
          type="text"
          placeholder="Search Tiket"
          className="bg-transparent text-white placeholder:text-white placeholder:opacity-60 outline-none flex-grow"
        />
        <FiFilter className="text-white opacity-70 cursor-pointer" />
      </div>

      {/* Menu */}
      <ul className="flex space-x-8 text-white font-semibold text-lg ml-6">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/berita/dokumenter" className="hover:underline">Berita</Link>
        </li>
        <li>
          <Link href="/berita/flora-fauna" className="hover:underline">Flora & Fauna</Link>
        </li>
      </ul>
    </nav>
  );
}