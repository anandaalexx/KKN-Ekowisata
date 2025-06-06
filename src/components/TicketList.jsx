import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const tickets = [
  {
    name: "Penguin",
    price: "Rp 200.000",
    image: "/images/penguin.jpg",
  },
  {
    name: "Bear",
    price: "Rp 200.000",
    image: "/images/bear.jpg",
  },
  {
    name: "Goat",
    price: "Rp 200.000",
    image: "/images/goat.jpg",
  },
];

export default function TicketList() {
  return (
    <section className="w-full h-screen bg-white flex items-center justify-center pt-2 py-24">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className=" text-black font-medium text-4xl mb-1">
              <span className="inline-block w-25 h-1 bg-[#0f4b41] -ml-25 mr-2 align-middle" />
              Tiket{" "}
              <span className="font-medium text-4xl text-[#9C9C9C]">List</span>
            </p>
            <h2 className="text-5xl mt-4 font-bold leading-tight text-[#6CAC5C]">
              DISCOVER YOUR <br />
              <span className="text-[#135449] text-8xl">WILD SIDE</span>
            </h2>
          </div>
          <Link
            href="/tiket"
            className="text-md text-black font-medium flex items-center gap-1 relative top-47"
            legacyBehavior>
            View all{" "}
            <span className="text-md">
              <MoveRight size={20} />
            </span>
          </Link>
        </div>

        {/* Grid tiket */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tickets.map((ticket, index) => (
            <div key={index} className="relative">
              <Image
                src={ticket.image}
                alt={ticket.name}
                width={400}
                height={256}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-52 left-12 bg-[#6CAC5C] text-white pl-6 pr-24 py-4 shadow-2xl">
                <p className="font-medium text-xl">{ticket.name}</p>
                <p className="font-bold text-4xl">{ticket.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
