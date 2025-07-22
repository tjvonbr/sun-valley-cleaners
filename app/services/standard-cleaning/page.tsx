import Image from "next/image";
import locationImg from "/public/female-cleaner.svg";
import ServiceCard from "@/components/service-card";
import { IconSprayBottle } from "@/components/ui/icons";

export const metadata = {
  title:
    "#1 Standard Cleaning Services in Scottsdale, AZ | Sun Valley Cleaners",
  description:
    "#1 Standard cleaning services in Scottsdale, AZ by Sun Valley Cleaners. Prompt, spotless results backed by a satisfaction guarantee. Call now!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/services/standard-cleaning",
  },
};

export default function StandardCleanPage() {
  return (
    <div className="min-h-screen w-full my-16 px-5 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl text-center text-primary font-black">
          Standard Cleaning
        </h1>
        <p className="max-w-[750px] text-center">
          Maintain a consistently clean and comfortable home with Sun Valley
          Cleaners&apos; Standard Cleaning Service, perfect for recurring
          visits. Our professional team in Chandler, AZ, ensures your home stays
          fresh and tidy with regular, high-quality cleaning tailored to your
          schedule and needs.
        </p>
      </div>
      <div className="my-12">
        <Image src={locationImg} height="500" width="500" alt="hello" />
      </div>
      <div className="max-w-[500px]">
        <ServiceCard
          title="Standard Cleaning"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
        >
          <IconSprayBottle className="size-12 text-secondary" />
        </ServiceCard>
      </div>
    </div>
  );
}
