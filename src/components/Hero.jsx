// components/Hero.jsx
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Ticket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[89vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/Hero.jpg"
        alt="Zoo Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center ml-10 md:px-16 max-w-4xl text-white">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
          Where Wildlife <br /> Comes Alive
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-lg">
          Engage with fascinating animals, interactive exhibits, and exciting
          shows at our zoo
        </p>
        <Link
          href="/tiket"
          className="w-fit inline-flex items-center gap-2 mt-6 bg-[#538048] hover:brightness-90 text-white text-md font-semibold px-2 py-1 rounded shadow-lg transition"
          legacyBehavior>
          <Ticket size={16} /> Buy Ticket
        </Link>
      </div>
      {/* Left Arrow */}
      <button className="absolute left-0 top-1/2 transform px-4 py-4 -translate-y-1/2 z-30 bg-[#135449] hover:brightness-110 text-white p-3 cursor-pointer">
        <ChevronLeft size={30} />
      </button>
      {/* Right Arrow */}
      <button className="absolute right-0 top-1/2 transform px-4 py-4 -translate-y-1/2 z-30 bg-[#135449] hover:brightness-110 text-white p-3 cursor-pointer">
        <ChevronRight size={30} />
      </button>
      {/* Dots Indicator */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === 0 ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}
