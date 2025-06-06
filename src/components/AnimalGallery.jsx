// src/components/AnimalGallery.jsx
import AnimalCard from "./AnimalCard";

// Pastikan path gambar Anda benar di public folder
const animals = [
  { name: "Dusky Shark", image: "/images/dusky-shark.jpg" },
  { name: "Capybara", image: "/images/capybara.jpg" },
  { name: "Capuchin Monkey", image: "/images/capuchin-monkey.jpg" }, // Pastikan nama file gambar sesuai
  { name: "Coyote", image: "/images/coyote.jpg" },
  { name: "Aardwolf", image: "/images/aardwolf.jpg" },
  { name: "Elk", image: "/images/elk.jpg" },
  { name: "Alpaca", image: "/images/alpaca.jpg" },
  { name: "Cow", image: "/images/cow.jpg" },
  { name: "Chimpanzee", image: "/images/chimpanzee.jpg" },
  { name: "Gibbon", image: "/images/gibbon.jpg" },
  { name: "Deer", image: "/images/deer.jpg" },
  { name: "Bandicoot", image: "/images/bandicoot.jpg" },
  { name: "Fresh Water Crocodile", image: "/images/croc.jpg" },
  { name: "Black Bear", image: "/images/bear.jpg" },
  { name: "Antelope", image: "/images/antelope.jpg" },
];

export default function AnimalGallery() {
  return (
    // Mengubah grid menjadi 3 kolom untuk layar medium ke atas
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {" "}
      {/* Sesuaikan gap */}
      {animals.map((animal) => (
        <AnimalCard key={animal.name} name={animal.name} image={animal.image} />
      ))}
    </div>
  );
}
