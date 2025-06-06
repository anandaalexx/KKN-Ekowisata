// src/components/TicketCard.jsx (atau TiketPage.jsx sesuai nama file Anda)
import React from "react";
import { Play } from "lucide-react"; // Impor ikon Play

export default function TicketCard({
  image,
  name,
  price,
  descriptionParagraph, // Prop baru
  descriptionList, // Prop baru
}) {
  // Data fallback jika props tidak diberikan (opsional)
  const defaultDescP = "Deskripsi default jika tidak ada yang diberikan.";
  const defaultDescList = ["Item list default 1", "Item list default 2"];

  return (
    <div className="w-[405px] flex flex-col">
      <img src={image} alt={name} className="w-full h-76 object-cover" />
      {/* Overlay untuk nama dan harga */}
      <div className="px-3 py-2 bg-[#6CAC5C] text-white  text-xl shadow-lg -mt-4 mx-3 z-10 relative text-left">
        {name} <br />{" "}
        <span className="text-3xl text-shadow-lg font-bold">Rp. {price}</span>
      </div>
      {/* Deskripsi dan List Item */}
      <div className="px-3 pt-4 pb-2 text-base font-regular text-black text-left flex-1">
        <p className="mb-2 leading-relaxed">
          {descriptionParagraph || defaultDescP}
        </p>
        <ul className="space-y-0.5">
          {(descriptionList || defaultDescList).map((item, index) => (
            <li key={index} className="flex items-start">
              <Play
                size={16}
                className="w-4 h-4 mr-2 mt-[3px] text-black flex-shrink-0"
                fill="#6CAC5C"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Tambahkan defaultProps jika diperlukan, atau pastikan parent selalu mengirim props
TicketCard.defaultProps = {
  descriptionParagraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  descriptionList: [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Elit et minim veniam",
  ],
};
