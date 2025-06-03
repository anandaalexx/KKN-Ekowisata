import Image from "next/image";
import Link from "next/link";
import ActivityCard from "./ActivityCard";
import { MoveRight } from "lucide-react";

export default function Activity() {
  return (
    <section className="relative py-16 px-6 md:px-8 bg-white overflow-hidden">
      {/* Background SVGs */}
      <Image
        src="/images/elephant-vector.svg"
        alt="Elephant background"
        width={200}
        height={200}
        className="absolute right-0 top-3 w-100 hidden md:block"
      />
      <Image
        src="/images/paw-vector.svg"
        alt="Paw background"
        width={130}
        height={130}
        className="absolute left-0 top-130 w-100 hidden md:block"
      />
      <Image
        src="/images/lion-vector.svg"
        alt="Wolf background"
        width={160}
        height={160}
        className="absolute right-0 bottom-0 w-109 hidden md:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-1 text-[#1A1A1A]">
              Our Activity
            </h2>
            <p className="text-[#737373] text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <Link
            href="#"
            className="text-black font-medium hover:underline flex items-center gap-1 relative top-4"
          >
            View all{" "}
            <span>
              <MoveRight size={16} />
            </span>
          </Link>
        </div>

        <div className="space-y-16">
          <ActivityCard
            title="Animal Feeding"
            location="Lorem Ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            bullets={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            ]}
            image="/images/feeding.jpg"
          />

          <ActivityCard
            title="Interact With Animals"
            location="Lorem Ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            bullets={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            ]}
            image="/images/interaction.jpg"
            reverse
          />

          <ActivityCard
            title="Animal Talent Showcase"
            location="Lorem Ipsum"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            bullets={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            ]}
            image="/images/showcase.jpg"
          />
        </div>
      </div>
    </section>
  );
}
