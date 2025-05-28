import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ActivityCard({
  title,
  location,
  desc,
  bullets,
  image,
  reverse,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-6`}
    >
      <div className="w-full md:w-1/2 h-84 relative rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between md:w-1/2">
        <div>
          <h3 className="text-xl font-bold text-[#1A1A1A]">{title}</h3>
          <div className="flex items-center text-sm text-[#1A1A1A] mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <p className="text-sm text-[#1A1A1A] mb-3">{desc}</p>
          <ul className="text-sm list-disc list-inside space-y-1 text-gray-800">
            {bullets.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <Link
          href="#"
          className="mt-4 w-max bg-[#1D3F11] text-white px-4 py-2 rounded hover:brightness-110 text-sm cursor-pointer"
        >
          Read more »
        </Link>
      </div>
    </div>
  );
}
