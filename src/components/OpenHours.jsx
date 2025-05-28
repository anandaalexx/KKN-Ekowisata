// components/OpeningHours.jsx
import Image from "next/image";

export default function OpenHours() {
  return (
    <section className="relative rounded-3xl px-6 py-4 text-white -mt-5 mx-24 md:mx-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#135449] to-[#3C9989] rounded-3xl z-0" />

      {/* Rumput SVG (ditempatkan di atas bagian gradient) */}
      <div className="absolute -top-16 left-0 w-full z-10">
        <Image
          src="/images/VectorTime.svg"
          alt="Grass vector"
          width={1440}
          height={100}
        />
      </div>

      {/* Konten waktu */}
      <div className="relative z-20 flex flex-col md:flex-row justify-around text-center gap-8">
        {[1, 2, 3].map((_, i) => (
          <div key={i}>
            <div className="text-2xl">🕒</div>
            <p className="mt-2 text-lg font-medium">Senin – Kamis</p>
            <p className="mt-1 text-2xl font-extrabold tracking-wide">
              09.00–16.30
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
