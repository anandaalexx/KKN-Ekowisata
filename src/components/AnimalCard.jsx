import Image from "next/image";

export default function AnimalCard({ name, image }) {
  return (
    <div className="flex space-x-4 items-center text-white">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-lg object-cover"
      />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">Friend of people</p>
        <p className="text-sm text-gray-400">Always scared</p>
      </div>
    </div>
  );
}
