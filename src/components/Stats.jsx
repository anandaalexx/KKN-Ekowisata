"use client";

import Image from "next/image";

const stats = [
  {
    number: "800",
    label: "Animals",
  },
  {
    number: "800",
    label: "Fauna",
  },
  {
    number: "100",
    label: "Species",
  },
  {
    number: "1Mil",
    label: "Visitor/Year",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-[#135449] py-20 flex justify-center overflow-hidden">
      {/* Claw besar di sisi kanan, tinggi penuh section */}
      <Image
        src="/images/claw.svg"
        alt="Claw Scratch"
        fill
        className="absolute ml-255 mt-3 h-full w-auto max-w-[369px] z-0 pointer-events-none"
        style={{ objectFit: "cover" }}
      />

      {/* Grass di bagian bawah */}
      <Image
        src="/images/grass.svg"
        alt="Grass Vector"
        width={1920}
        height={200}
        className="absolute -bottom-10 left-0 w-full z-0 pointer-events-none"
      />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-lg px-8 py-6 text-center min-w-[180px]"
          >
            <p className="text-4xl font-bold text-[#135449]">{stat.number}</p>
            <p className="text-black">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
