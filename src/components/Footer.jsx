import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Footer({ className }) {
  return (
    <footer
      className={`bg-[#135449] text-white px-6 md:px-12 py-12 ${className}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Brand Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">XYZ Minizoo</h3>
          <ul className="space-y-2 text-md">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              anandaalex573@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              +62 82312136060
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Jl. Sei Wain, Karang Joang, Balikpapan
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Youtube className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 - Resources */}
        <div>
          <h4 className="text-xl font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-md">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tiket
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Flora & Fauna
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h4 className="text-xl font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-md">
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Get Involved
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Plan
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h4 className="text-xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h4>
          <p className="text-md mb-4">
            Get the latest discounts, promotions, & exclusive benefits
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-black bg-white"
            />
            <button
              type="submit"
              className="bg-[#F97316] hover:brightness-110 text-white px-4 py-2 rounded border border-white text-sm cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
