import Image from "next/image";
import locationImg from "/public/deep-clean.svg";
import ServiceCard from "@/components/service-card";
import { IconOven } from "@/components/ui/icons";

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
          className="bg-white border rounded-md"
          title="Deep Cleaning"
          description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
        >
          <IconOven className="size-12 text-secondary" />
        </ServiceCard>
      </div>
    </div>
  );
}
