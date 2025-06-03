"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Gallery() {
  return (
    <section className="bg-[#DEFFEE] relative py-20 px-4 md:px-16">
      {/* Cakar dekoratif */}
      <Image
        src="/images/claw3.svg"
        alt="Claw Scratch"
        fill
        className="absolute ml-4 opacity-30 -mt-85 h-full w-auto max-w-[390px] z-0 pointer-events-none"
        style={{ objectFit: "contain" }}
      />

      <div className="flex max-w-7xl mx-auto justify-between items-center mb-8 relative z-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium text-black">
            Our Flora and Fauna
          </h2>
          <p className="text-[#737373] text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <Link
          href="#"
          className="text-black font-medium hover:underline flex items-center gap-1 relative top-6"
        >
          View all{" "}
          <span>
            <MoveRight size={16} />
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4 auto-rows-[200px] max-w-7xl mx-auto relative z-10">
        {/* Baris pertama */}
        <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
          <Image
            src="/images/giraffe.png"
            alt="Giraffe"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 relative rounded-lg overflow-hidden">
          <Image
            src="/images/elephant.png"
            alt="Elephant"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden">
          <Image
            src="/images/lion.png"
            alt="Lion"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden">
          <Image
            src="/images/bear2.png"
            alt="Bear"
            fill
            className="object-cover"
          />
        </div>

        {/* Baris kedua */}
        <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden">
          <Image
            src="/images/rafflesia.png"
            alt="Rafflesia"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-1 row-span-2 relative rounded-lg overflow-hidden">
          <Image
            src="/images/deer.png"
            alt="Deer"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
          <Image
            src="/images/flower.png"
            alt="Flower"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 relative rounded-lg overflow-hidden">
          <Image
            src="/images/monkey.png"
            alt="Monkey"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
