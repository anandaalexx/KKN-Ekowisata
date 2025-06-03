import Image from "next/image";
import { Clock } from "lucide-react";

export default function OpenHours() {
  return (
    <div className="absolute w-full z-30 px-6 py-4 text-white top-[700px]">
      {/* SVG Rumput */}
      <div className="absolute -top-8 left-235 -translate-x-1/2 z-10 w-screen overflow-hidden pointer-events-none">
        <Image
          src="/images/VectorTime.svg"
          alt="Grass vector"
          width={1920}
          height={100}
          className="w-[78%] h-auto"
        />
      </div>

      {/* Container utama */}
      <div className="mx-auto max-w-6xl relative px-6 py-8">
        {/* Background gradient diperbarui */}
        <div
          className="absolute inset-0 rounded-3xl z-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #135449 50%, #3C9989 103%)",
          }}
        />

        {/* Konten waktu */}
        <div className="relative z-20 rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row justify-around text-center gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i}>
                <div className="flex justify-center">
                  <Clock strokeWidth={3} className="w-8 h-8" />
                </div>
                <p className="mt-2 text-lg font-medium">Senin - Kamis</p>
                <p className="mt-1 text-2xl font-extrabold tracking-wide">
                  09.00–16.30
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
