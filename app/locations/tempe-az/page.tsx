import Image from "next/image";
import Link from "next/link";
import locationImg from "/public/location-female-cleaner.svg";
import ServiceCard from "@/components/service-card";
import {
  IconBed,
  IconBox,
  IconBoxOpen,
  IconEvent,
  IconOven,
  IconSprayBottle,
} from "@/components/ui/icons";

export const metadata = {
  title: "#1 House Cleaning Service in Tempe, AZ | Sun Valley Cleaners",
  description:
    "Looking for reliable house cleaning in Tempe? Sun Valley Cleaners offers professional house cleaning services. Get a free quote today!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/locations/tempe-az",
  },
};

export default function TempePage() {
  return (
    <div className="min-h-screen w-full my-16 px-5 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl text-center text-primary font-black">
          #1 Cleaning Service in Tempe
        </h1>
        <p className="max-w-[750px] text-center">
          Welcome to Sun Valley Cleaners, your trusted partner for exceptional
          house cleaning service in Tempe, AZ. Whether you need a one-time deep
          clean or move-related clean, or regular maintenance, Sun Valley
          Cleaners is here to make your home shine.
        </p>
      </div>
      <div className="my-12 px-12">
        <Image src={locationImg} height="500" width="500" alt="hello" />
      </div>
      <div className="mx-auto grid justify-center gap-12 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <ServiceCard
          title="Standard Cleaning"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
          link="/services/house-cleaning"
        >
          <IconSprayBottle className="size-12 text-secondary" />
        </ServiceCard>
        <ServiceCard
          title="Deep Cleaning"
          description="Our deep cleaning package goes beyond the surface to tackle buildup in hard-to-reach areas, inside appliances, and behind furniture for a thorough, top-to-bottom clean."
          link="/services/deep-cleaning"
        >
          <IconOven className="size-12 text-secondary" />
        </ServiceCard>
        <ServiceCard
          title="Move-in/Move-out Cleaning"
          description="Make your move stress-free with our comprehensive move-in and move-out cleaning service, leaving every room spotless."
          link="/services/move-cleaning"
        >
          <IconBoxOpen className="size-12 text-secondary" />
        </ServiceCard>
        <ServiceCard
          title="Airbnb Cleaning"
          description="Keep your short-term rental guest-ready with our reliable Airbnb cleaning service, including quick turnovers and thorough sanitization."
          link="/services/airbnb-cleaning"
        >
          <IconEvent className="size-12 text-secondary" />
        </ServiceCard>
      </div>

      <div className="max-w-2xl mt-12 text-center text-slate-500">
        <p>
          We also serve nearby areas including{" "}
          <Link href="/locations/phoenix-az" className="underline text-secondary">Phoenix</Link>,{" "}
          <Link href="/locations/scottsdale-az" className="underline text-secondary">Scottsdale</Link>,{" "}
          <Link href="/locations/chandler-az" className="underline text-secondary">Chandler</Link>,{" "}
          <Link href="/locations/mesa-az" className="underline text-secondary">Mesa</Link>,{" "}
          <Link href="/locations/gilbert-az" className="underline text-secondary">Gilbert</Link>, and{" "}
          <Link href="/locations/arcadia-az" className="underline text-secondary">Arcadia</Link>.{" "}
          View our{" "}
          <Link href="/cleaning-checklist" className="underline text-secondary">
            cleaning checklist
          </Link>{" "}
          to see what each service includes.
        </p>
      </div>
    </div>
  );
}
