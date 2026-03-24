"use client";

import Image from "next/image";
import icon from "../../public/hero.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ServiceCard from "@/components/service-card";

export const metadata = {
  title: "#1 House Cleaning Service in Maricopa County, AZ | Sun Valley Cleaners",
  description:
    "Looking for reliable house cleaning in Maricopa County? Sun Valley Cleaners offers professional house cleaning services. Get a free quote today!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/locations",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
          <h1 className="text-4xl lg:text-6xl text-primary font-black">
            Service Areas: House Cleaning Service in Maricopa County, AZ
          </h1>
          <p className="text-muted-foreground lg:text-lg">
            We stand by the quality of our work at Sun Valley Cleaners. If for
            any reason you&apos;re not satisfied with our cleaning service,
            we&apos;ll return and make it right at no cost to you!
          </p>
          <Link
            href="/book-appointment"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Book an appointment today!
          </Link>
        </div>
        <Image src={icon} height="500" width="500" alt="hello" />
      </div>

      <div className="py-12 px-5 w-full flex flex-col justify-between items-center space-y-8 text-center bg-white">
        <h2 className="text-3xl text-black font-bold">Our Service Areas</h2>
        <div className="mx-auto grid justify-center gap-12 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-3">
          <ServiceCard
            title="Phoenix, AZ"
            description=""
            link="/locations/phoenix-az"
          >
            <Image
              src="/images/phoenix-az.jpeg"
              width={400}
              height={450}
              alt="Phoenix, AZ Cleaning Services"
            />
          </ServiceCard>
          <ServiceCard
            title="Chandler, AZ"
            description=""
            link="/locations/chandler-az"
          >
            <Image
              src="/images/chandler-az.jpeg"
              width={400}
              height={450}
              alt="Chandler, AZ Cleaning Services"
            />
          </ServiceCard>
          <ServiceCard
            title="Gilbert, AZ"
            description=""
            link="/locations/gilbert-az"
          >
            <Image
              src="/images/gilbert-az.jpeg"
              width={400}
              height={450}
              alt="Gilbert, AZ Cleaning Services"
            />
          </ServiceCard>
          <ServiceCard
            title="Mesa, AZ"
            description=""
            link="/locations/mesa-az"
          >
            <Image
              src="/images/mesa-az.jpeg"
              width={400}
              height={450}
              alt="Mesa, AZ Cleaning Services"
            />
          </ServiceCard>
        </div>
      </div>
    </main>
  );
}
