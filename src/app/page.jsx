import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OpenHours from "@/components/OpenHours";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}
