// src/components/RelatedArticleCard.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Jika ingin setiap item bisa diklik

export default function RelatedArticleCard({ image, title, href }) {
  return (
    <Link href={href || "#"} legacyBehavior>
      <a className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-700/50 transition-colors duration-150 cursor-pointer group">
        <div className="relative w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <h3 className="text-sm font-medium text-gray-200 group-hover:text-white leading-snug line-clamp-3">
          {title}
        </h3>
      </a>
    </Link>
  );
}