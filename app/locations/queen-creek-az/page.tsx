import Image from "next/image";
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
  title: "#1 House Cleaning Service in Queen Creek, AZ | Sun Valley Cleaners",
  description:
    "Looking for reliable house cleaning in Queen Creek? Sun Valley Cleaners offers professional house cleaning services. Get a free quote today!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com",
  },
};

export default function QueenCreekPage() {
  return (
    <div className="min-h-screen w-full my-16 px-5 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl text-center text-primary font-black">
          #1 Cleaning Service in Queen Creek
        </h1>
        <p className="max-w-[750px] text-center">
          Welcome to Sun Valley Cleaners, your trusted partner for exceptional
          house cleaning service in Queen Creek, AZ. Whether you need a
          one-time deep clean or move-related clean, or regular maintenance, Sun
          Valley Cleaners is here to make your home shine.
        </p>
      </div>
      <div className="my-12 px-12">
        <Image src={locationImg} height="500" width="500" alt="hello" />
      </div>
      <div className="mx-auto grid justify-center gap-12 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <ServiceCard
          title="Standard Cleaning"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
        >
          <IconSprayBottle className="size-12 text-secondary" />
        </ServiceCard>
        <ServiceCard
          title="Deep Cleaning"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
        >
          <IconOven className="size-12 text-secondary" />
        </ServiceCard>
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
        <ServiceCard
          title="Event Cleaning"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
        >
          <IconEvent className="size-12 text-secondary" />
        </ServiceCard>
        <ServiceCard
          title="Linen Service"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
        >
          <IconBed className="size-12 text-secondary" />
        </ServiceCard>
      </div>
    </div>
  );
}
