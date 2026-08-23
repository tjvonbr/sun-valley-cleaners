import Image from "next/image";
import locationImg from "/public/deep-clean.svg";
import ServiceCard from "@/components/service-card";
import ServiceAreasSection from "@/components/service-areas-section";
import Link from "next/link";
import { IconOven } from "@/components/ui/icons";

export const metadata = {
  title:
    "Top Rated Deep Cleaning Services in Scottsdale, AZ | Sun Valley Cleaners",
  description:
    "Top Rated Deep cleaning services in Scottsdale, AZ by Sun Valley Cleaners. Prompt, spotless results backed by a satisfaction guarantee. Call now!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/services/deep-cleaning",
  },
};

export default function DeepCleanPage() {
  return (
    <div className="min-h-screen w-full my-16 px-5 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl text-center text-primary font-black">
          Deep Cleaning
        </h1>
        <p className="max-w-[750px] text-center">
          Transform your home with Sun Valley Cleaners&apos; Deep Cleaning
          Service, designed to provide a thorough and meticulous clean for every
          inch of your space. Our expert team in Chandler, AZ, tackles the
          toughest dirt and grime, ensuring a spotless and hygienic environment.
        </p>
      </div>
      <div className="my-12">
        <Image src={locationImg} height="500" width="500" alt="hello" />
      </div>
      <div className="max-w-[500px]">
        <ServiceCard
          className="bg-card border rounded-md"
          title="Deep Cleaning"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
        >
          <IconOven className="size-12 text-secondary" />
        </ServiceCard>
      </div>

      <div className="max-w-2xl mt-8 text-center text-muted-foreground">
        <p>
          Need regular upkeep instead? Our{" "}
          <Link href="/services/house-cleaning" className="underline text-secondary">
            standard cleaning service
          </Link>{" "}
          keeps your home fresh between deep cleans. Planning a move? Check out our{" "}
          <Link href="/services/move-cleaning" className="underline text-secondary">
            move-in/move-out cleaning
          </Link>
          . See exactly what&apos;s included in our{" "}
          <Link href="/cleaning-checklist" className="underline text-secondary">
            cleaning checklist
          </Link>
          .
        </p>
      </div>

      <ServiceAreasSection
        serviceName="Deep Cleaning"
        areas={[
          { name: "Phoenix", href: "/locations/phoenix-az/deep-cleaning" },
          { name: "Chandler", href: "/locations/chandler-az/deep-cleaning" },
          { name: "Gilbert", href: "/locations/gilbert-az/deep-cleaning" },
          { name: "Mesa", href: "/locations/mesa-az/deep-cleaning" },
          { name: "Arcadia", href: "/locations/arcadia-az/deep-cleaning" },
          { name: "Paradise Valley", href: "/locations/paradise-valley-az/deep-cleaning" },
          { name: "Scottsdale", href: "/locations/scottsdale-az" },
          { name: "Tempe", href: "/locations/tempe-az" },
          { name: "Queen Creek", href: "/locations/queen-creek-az" },
        ]}
      />
    </div>
  );
}
