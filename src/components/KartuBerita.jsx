// src/components/KartuBerita.jsx (atau RelatedArticleCard.jsx)

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RelatedArticleCard({ href, image, title }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 hover:bg-[#0E4A40]/30 p-3 rounded-lg transition-colors duration-200"
    >
      {/* Gambar */}
      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 relative rounded-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Judul */}
      <div className="flex-1">
        <h3 className="text-xl font-medium text-[#0E4A40] group-hover:text-white leading-tight">
          {title}
        </h3>
      </div>
    </Link>
  );
}
