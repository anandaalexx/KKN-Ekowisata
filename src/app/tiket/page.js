import Navbar from '../SearchNavbar';
import TicketCard from '../TiketPage';

export default function Tiket() {
  return (
    <div
      className="min-h-screen bg-bottom bg-no-repeat bg-cover bg-transparent bg-white"
      style={{ backgroundImage: "url('/tiketbg.png')" }}
    >
      <Navbar />
      <main className="px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-12 drop-shadow-md">Tiket Pricelist</h1>
        <div className="flex flex-wrap justify-center gap-12">
          <TicketCard image="/penguin.jpg" name="Penguin" price="200.000" />
          <TicketCard image="/bear.jpg" name="Bear" price="200.000" />
          <TicketCard image="/goat.jpg" name="Goat" price="200.000" />
        </div>
      </main>
    </div>
  );
}
