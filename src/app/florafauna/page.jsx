"use client";
import React from 'react';
import SearchNavbar from '@/components/SearchNavbar';
import FloraFaunaCard from '@/components/FloraFaunaCard';
import FilterPanel from '@/components/FilterPanel';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const itemsData = [
  { id: 1, image: '/images/ff/dusky_shark.jpg', name: 'Dusky Shark', line1: 'Friend of people', line2: 'Always scared' },
  { id: 2, image: '/images/ff/capybara.jpg', name: 'Capybara', line1: 'Friend of people', line2: 'Always scared' },
  { id: 3, image: '/images/ff/capuchin_monkey.jpg', name: 'Capuchin Monkey', line1: 'Friend of people', line2: 'Always scared' },
  { id: 4, image: '/images/ff/coyote.jpg', name: 'Coyote', line1: 'Friend of people', line2: 'Always scared' },
  { id: 5, image: '/images/ff/aardwolf.jpg', name: 'Aardwolf', line1: 'Friend of people', line2: 'Always scared' },
  { id: 6, image: '/images/ff/elk.jpg', name: 'Elk', line1: 'Friend of people', line2: 'Always scared' },
  { id: 7, image: '/images/ff/alpaca.jpg', name: 'Alpaca', line1: 'Friend of people', line2: 'Always scared' },
  { id: 8, image: '/images/ff/cow.jpg', name: 'Cow', line1: 'Friend of people', line2: 'Always scared' },
  { id: 9, image: '/images/ff/chimpanzee.jpg', name: 'Chimpanzee', line1: 'Friend of people', line2: 'Always scared' },
  { id: 10, image: '/images/ff/gibbon.jpg', name: 'Gibbon', line1: 'Friend of people', line2: 'Always scared' },
  { id: 11, image: '/images/ff/deer.jpg', name: 'Deer', line1: 'Friend of people', line2: 'Always scared' },
  { id: 12, image: '/images/ff/bandicoot.jpg', name: 'Bandicoot', line1: 'Friend of people', line2: 'Always scared' },
  { id: 13, image: '/images/ff/fresh_water_crocodile.jpg', name: 'Fresh Water Crocodile', line1: 'Friend of people', line2: 'Always scared' },
  { id: 14, image: '/images/ff/black_bear.jpg', name: 'Black Bear', line1: 'Friend of people', line2: 'Always scared' },
  { id: 15, image: '/images/ff/antelope.jpg', name: 'Antelope', line1: 'Friend of people', line2: 'Always scared' },
];

export default function FloraFaunaPage() {
  const pathname = usePathname();

  const handleCardClick = (itemName) => {
    console.log("Clicked on:", itemName);
    alert(`Menuju detail ${itemName} (simulasi)`);
  };

  const tabItems = [
    { name: "Flora & Fauna", href: "/florafauna" }, 
    { name: "Documentary", href: "/berita" }  
  ];
  
  return (
    <div 
      className="min-h-screen bg-bottom bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/bgflora.png')" }}
    >
      <SearchNavbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-center items-center py-2 space-x-0 md:space-x-1">
          {tabItems.map((tab) => {
            const isActive = pathname === tab.href;
            return (
              <Link key={tab.name} href={tab.href} legacyBehavior>
                <a
                  className={`
                    py-2.5 px-4 sm:px-6 focus:outline-none rounded-md
                    text-sm font-medium transition-all duration-200 ease-in-out
                    ${
                      isActive
                        ? 'bg-[#13564C] text-white shadow-md'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }
                  `}
                >
                  {tab.name}
                </a>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-auto lg:sticky lg:top-20 self-start">
            <FilterPanel />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
              {itemsData.map((item) => (
                <FloraFaunaCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  line1={item.line1}
                  line2={item.line2}
                  onClick={() => handleCardClick(item.name)}
                />
              ))}
            </div>
            {itemsData.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-400">
                Tidak ada item flora & fauna untuk ditampilkan saat ini.
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}