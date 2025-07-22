import Image from "next/image";
import icon from "../public/hero.svg";
import femaleCleaner from "../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  IconBed,
  IconBox,
  IconBoxOpen,
  IconCheck,
  IconCircleCheck,
  IconEvent,
  IconOven,
  IconRibbon,
  IconSprayBottle,
} from "@/components/ui/icons";
import CommitmentCard from "@/components/feature-card";
import ServiceCard from "@/components/service-card";
import Head from "next/head";
import FaqSection from "@/components/faq-section";

export const metadata = {
  title: "#1 House Cleaning Services in Scottsdale, AZ | Sun Valley Cleaners",
  description:
    "#1 House cleaning services in Scottsdale, AZ by Sun Valley Cleaners. Prompt, spotless results backed by a satisfaction guarantee. Call now!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com",
  },
};

const faqs = [
  {
    question:
      "What is included in your house cleaning services in Scottsdale, AZ?",
    answer:
      "Our house cleaning in Scottsdale, AZ includes dusting, vacuuming, mopping, bathroom and kitchen sanitization, and full surface wipe-downs in all main areas.",
  },
  {
    question:
      "How often should Scottsdale, AZ homeowners schedule professional cleaning?",
    answer:
      "We recommend biweekly cleaning for most homes in Scottsdale, AZ. However, busy households or allergy-prone residents may benefit from weekly service.",
  },
  {
    question:
      "Are eco-friendly products used for house cleaning in Scottsdale, AZ?",
    answer:
      "Yes, we use eco-friendly and non-toxic products for all Scottsdale, AZ homes to ensure safe, effective cleaning for families, pets, and the environment.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>
          #1 House Cleaning Services in Scottsdale, AZ | Sun Valley Cleaners
        </title>
        <meta
          name="description"
          content="Sun Valley Cleaners offers #1 house cleaning services in Scottsdale, AZ. Reliable, detailed, and satisfaction-guaranteed for your home. Call now!"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              #1 House Cleaning Services in Scottsdale, AZ
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
        <div className="px-16 py-12 w-full flex flex-col md:flex-row justify-center items-center  bg-secondary text-white">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row justify-between  w-full">
            <CommitmentCard
              title="100% Guarantee"
              description="We stand by our work with a 100% guarantee, ensuring that every clean meets your highest expectations."
            >
              <IconCheck className="size-16" />
            </CommitmentCard>
            <CommitmentCard
              title="Best In Class Service"
              description="Our commitment to best-in-class service means we deliver meticulous, top-tier cleaning with a personal touch."
            >
              <IconRibbon className="size-16" />
            </CommitmentCard>
            <CommitmentCard
              title="Competitive Pricing"
              description="Competitive pricing that ensures you receive outstanding value and quality, making a pristine home accessible to everyone."
            >
              <IconCheck className="size-16" />
            </CommitmentCard>
          </div>
        </div>
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Commited to quality and customer satisfaction
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                We provide a range of services to meet each of your house
                cleaning needs. Whatever problem you&apos;re facing, we have a
                solution!
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center">
                  <IconCircleCheck className="size-10 mr-2 text-secondary" />
                  <p className="text-lg text-black font-semibold">
                    100% Satisfaction Guarantee
                  </p>
                </div>
                <div className="flex items-center">
                  <IconCircleCheck className="size-10 mr-2 text-secondary" />
                  <p className="text-lg text-black font-semibold">
                    Highly professional staff
                  </p>
                </div>
                <div className="flex items-center">
                  <IconCircleCheck className="size-10 mr-2 text-secondary" />
                  <p className="text-lg text-black font-semibold">
                    Eco-friendly cleaning products
                  </p>
                </div>
              </div>
              <Link
                href="/book-appointment"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Book an appointment now!
              </Link>
            </div>

            <Image
              src={femaleCleaner}
              height="750"
              width="500"
              alt="hello"
              className="bg-background"
            />
          </div>
        </div>

        <div className="py-12 px-5 w-full flex flex-col justify-between items-center space-y-8 text-center bg-white">
          <h2 className="text-3xl text-black font-bold">Services Provided</h2>
          <div className="mx-auto grid justify-center gap-12 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-3">
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

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Scottsdale, AZ" />

        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
