import Image from "next/image";
import locationImg from "/public/vacuum-woman.svg";
import ServiceCard from "@/components/service-card";
import { IconBox, IconBoxOpen, IconOven } from "@/components/ui/icons";

export default function MoveCleanPage() {
  return (
    <div className="min-h-screen w-full my-16 px-5 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl text-center text-primary font-black">
          Move-in/Move-out Cleaning
        </h1>
        <p className="max-w-[750px] text-center">
          Ensure a seamless transition with Sun Valley Cleaners&apos;
          Move-In/Move-Out Cleaning Service, tailored to make your moving
          experience stress-free. Our professional team in Chandler, AZ,
          provides a comprehensive clean, leaving your old home immaculate and
          your new one spotless and ready for you to settle in.
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
    </div>
  );
}
