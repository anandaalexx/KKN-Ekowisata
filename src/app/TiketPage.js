export default function TicketCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-md shadow-md w-[300px]">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-md" />
      <div className="p-4 bg-green-600 text-white font-bold text-xl shadow-lg -mt-4 mx-4 z-10 relative text-left rounded-md">
        {name} <br /> <span className="text-2xl">Rp. {price}</span>
      </div>
      <div className="p-4 text-sm text-gray-800 text-left">
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Consectetur adipiscing elit</li>
          <li>Elit et minim veniam</li>
        </ul>
      </div>
    </div>
  );
}
