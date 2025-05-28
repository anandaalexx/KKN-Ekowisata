import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpenHours from "@/components/OpenHours";
import About from "@/components/About";
import TicketList from "@/components/TicketList";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TicketList />
    </>
  );
}
