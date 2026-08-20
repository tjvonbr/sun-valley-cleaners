import Image from "next/image";
import locationImg from "/public/vacuum-woman.svg";
import ServiceCard from "@/components/service-card";
import ServiceAreasSection from "@/components/service-areas-section";
import Link from "next/link";
import { IconBox, IconBoxOpen, IconOven } from "@/components/ui/icons";

export const metadata = {
  title:
    "Move-In Cleaning Service in Scottsdale, AZ | Sun Valley Cleaners",
  description:
    "Professional move-in cleaning in Scottsdale, AZ. Inside cabinets, appliances, baseboards and baths cleaned before day one. Free estimate, no surprises.",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/services/move-in-cleaning",
  },
};

export default function MoveInCleanPage() {
  return (
    <div className="min-h-screen w-full my-16 px-5 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl text-center text-primary font-black">
          Move-In Cleaning Service in Scottsdale, AZ
        </h1>
        <p className="max-w-[750px] text-center">
          We clean your new Scottsdale home while it&apos;s still empty — every cabinet interior, every appliance, every baseboard — so the first thing you move in is furniture, not someone else&apos;s mess.
        </p>
      </div>
      <div className="my-12">
        <Image src={locationImg} height="500" width="500" alt="hello" />
      </div>
      <div className="mx-auto grid justify-center gap-12 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
        <ServiceCard
          title="Move-in Cleaning"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
        >
          <IconBoxOpen className="size-12 text-secondary" />
        </ServiceCard>
        <ServiceCard
          title="Move-out Cleaning"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
        >
          <IconBox className="size-12 text-secondary" />
        </ServiceCard>
      </div>

      <div className="max-w-2xl mt-8 text-center text-slate-500">
        <p>
          Once you&apos;re settled in, keep your new home fresh with our{" "}
          <Link href="/services/house-cleaning" className="underline text-secondary">
            standard cleaning service
          </Link>
          . Need a thorough top-to-bottom clean? Try our{" "}
          <Link href="/services/deep-cleaning" className="underline text-secondary">
            deep cleaning service
          </Link>
          . See exactly what&apos;s included in our{" "}
          <Link href="/cleaning-checklist" className="underline text-secondary">
            cleaning checklist
          </Link>
          .
        </p>
      </div>

      <ServiceAreasSection
        serviceName="Move-in cleaning"
        areas={[
          { name: "Phoenix", href: "/locations/phoenix-az/move-in-cleaning" },
          { name: "Chandler", href: "/locations/chandler-az/move-in-cleaning" },
          { name: "Gilbert", href: "/locations/gilbert-az/move-in-cleaning" },
          { name: "Mesa", href: "/locations/mesa-az/move-in-cleaning" },
          { name: "Arcadia", href: "/locations/arcadia-az/move-in-move-out-cleaning" },
          { name: "Paradise Valley", href: "/locations/paradise-valley-az/move-in-move-out-cleaning" },
          { name: "Scottsdale", href: "/locations/scottsdale-az" },
          { name: "Tempe", href: "/locations/tempe-az" },
          { name: "Queen Creek", href: "/locations/queen-creek-az" },
        ]}
      />
    </div>
  );
}
