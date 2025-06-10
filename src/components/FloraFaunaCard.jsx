import React from "react";
import Image from "next/image";

export default function FloraFaunaCard({ image, name, line1, line2, onClick }) {
  return (
    <div
      className="flex items-start p-1 rounded-xl text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        {" "}
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className="rounded-lg object-cover aspect-square"
        />
      </div>

      <div className="ml-4 text-left flex-grow">
        {" "}
        <h3 className="font-medium text-lg mb-1 break-words" title={name}>
          {name}
        </h3>
        <p className="text-sm text-gray-100/70 break-words" title={line1}>
          {" "}
          {line1}
        </p>
        <p className="text-sm text-gray-100/70 break-words" title={line2}>
          {" "}
          {line2}
        </p>
      </div>
    </div>
  );
}
