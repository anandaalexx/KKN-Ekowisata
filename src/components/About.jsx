import Image from "next/image";
import { MapPin, Ticket, Map, Calendar } from "lucide-react";

export default function About() {
  return (
    <section className="relative bg-white text-black min-h-[1120px] overflow-hidden">
      {/* Background Vektor */}
      <div className="absolute inset-0 w-full h-full -top-120 z-0">
        <Image
          src="/images/bg-about2.svg"
          alt="Vektor Background"
          width={1440}
          height={1000}
          className="w-full object-cover"
        />
      </div>

      {/* Konten utama + bawah */}
      <div className="relative z-10">
        {/* Konten Utama */}
        <div className="max-w-7xl mx-auto px-6 py-48 grid md:grid-cols-2 gap-12">
          {/* Kiri - Tentang */}
          <div>
            {/* Judul horizontal line */}
            <div className="flex items-center gap-4 mb-4 -ml-30">
              <div className="w-25 h-1 bg-[#538048] rounded" />
              <h2 className="text-4xl font-medium">
                Tentang <span className="text-[#9C9C9C]">MiniZoo</span>
              </h2>
            </div>

            <h3 className="text-4xl font-medium mt-8">Wildlife Mini</h3>
            <p className="text-2xl text-[#3F3F3F] mt-2">Balikpapan Zoo</p>

            <p className="mt-6 font-medium leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mt-4 font-medium leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas
            </p>

            {/* Penghargaan */}
            <div className="grid grid-cols-3 gap-4 mt-8 items-center">
              <div className="aspect-[1/1] relative">
                <Image
                  src="/images/award1.png"
                  alt="Award 1"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
              <div className="aspect-[1/1] relative">
                <Image
                  src="/images/award2.jpg"
                  alt="Award 2"
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
              </div>
              <div className="aspect-[1/1] relative">
                <Image
                  src="/images/award3.png"
                  alt="Award 3"
                  layout="fill"
                  objectFit="contain"
                  className="object-center"
                />
              </div>
            </div>
          </div>

          {/* Kanan - Gambar Harimau */}
          <div className="relative">
            <div className="w-[90%] ml-auto h-[600px] relative overflow-hidden shadow-lg">
              <Image
                src="/images/macan.jpg"
                alt="Harimau"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-sm">Donations</span>
                <h3 className="text-2xl font-bold">HELP US PROTECT</h3>
                <p className="text-lg">MORE ANIMALS</p>
                <span className="text-[#6de36d] font-semibold mt-2">
                  Donate!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Informasi Bawah */}
        <div className="bg-[#0f4b41] text-white py-10 -mt-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-left px-6">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-xl">
                <MapPin size={28} className="text-[#0f4b41]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Location</h4>
                <p className="text-sm text-white">Lorem Ipsum dolor sit amet</p>
              </div>
            </div>

            {/* Admission */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-xl">
                <Ticket size={28} className="text-[#0f4b41]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Admission</h4>
                <p className="text-sm text-white">
                  Open everyday
                  <br />
                  9AM–4PM
                </p>
              </div>
            </div>

            {/* Maps */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-xl">
                <Map size={28} className="text-[#0f4b41]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Maps</h4>
                <p className="text-sm text-white">Lorem Ipsum dolor sit amet</p>
              </div>
            </div>

            {/* Events */}
            <div className="flex items-start gap-4">
              <div className="bg-white p-4 rounded-xl">
                <Calendar size={28} className="text-[#0f4b41]" />
              </div>
              <div>
                <h4 className="font-bold text-white">Events</h4>
                <p className="text-sm text-white">Lorem Ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
