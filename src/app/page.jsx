import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpenHours from "@/components/OpenHours";
import About from "@/components/About";
import TicketList from "@/components/TicketList";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Activity from "@/components/Activity";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TicketList />
      <Stats />
      <Gallery />
      <Activity />
      <Footer />
    </>
  );
}
