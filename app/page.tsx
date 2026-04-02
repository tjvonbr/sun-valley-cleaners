import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
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
import FaqSection from "@/components/faq-section";

export const metadata = {
  title: "#1 House Cleaning Service in Scottsdale, AZ | Sun Valley Cleaners",
  description:
    "Looking for reliable house cleaning in Scottsdale? Sun Valley Cleaners offers professional house cleaning services. Get a free quote today!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com",
  },
};

const faqs = [
  {
    question:
      "What is included in your house cleaning service in Scottsdale, AZ?",
    answer:
      "Our house cleaning service in Scottsdale, AZ includes dusting, vacuuming, mopping, bathroom and kitchen sanitization, and full surface wipe-downs in all main areas.",
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
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              #1 House Cleaning Service in Scottsdale, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              We stand by the quality of our work at Sun Valley Cleaners. If for
              any reason you&apos;re not satisfied with our cleaning service,
              we&apos;ll return and make it right at no cost to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book-appointment"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Book an appointment today!
              </Link>
              <a
                href="tel:623-295-0506"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Call 623-295-0506
              </a>
            </div>
          </div>
          <Image src="/hero.svg" height="500" width="500" alt="Professional house cleaning service in Scottsdale, AZ" />
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
              src="/female-cleaner.svg"
              height="750"
              width="500"
              alt="Professional cleaner committed to quality and customer satisfaction"
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
              description="Make your move stress-free with our comprehensive move-in and move-out cleaning service. We leave every room spotless so you can focus on settling in or getting your deposit back."
              link="/services/move-cleaning"
            >
              <IconBoxOpen className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Airbnb Cleaning"
              description="Keep your short-term rental guest-ready with our reliable Airbnb cleaning service. We handle quick turnovers, linen changes, and thorough sanitization for every booking."
              link="/services/airbnb-cleaning"
            >
              <IconEvent className="size-12 text-secondary" />
            </ServiceCard>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="py-12 px-5 w-full flex flex-col items-center space-y-6 text-center bg-background">
          <h2 className="text-3xl text-black font-bold">Service Areas</h2>
          <p className="max-w-2xl text-slate-500">
            Sun Valley Cleaners proudly serves homeowners across the Phoenix
            metro area. Visit our{" "}
            <Link href="/locations" className="underline text-secondary">
              service areas page
            </Link>{" "}
            to find cleaning services near you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations/phoenix-az" className="underline text-secondary font-semibold">Phoenix</Link>
            <Link href="/locations/scottsdale-az" className="underline text-secondary font-semibold">Scottsdale</Link>
            <Link href="/locations/chandler-az" className="underline text-secondary font-semibold">Chandler</Link>
            <Link href="/locations/gilbert-az" className="underline text-secondary font-semibold">Gilbert</Link>
            <Link href="/locations/mesa-az" className="underline text-secondary font-semibold">Mesa</Link>
            <Link href="/locations/tempe-az" className="underline text-secondary font-semibold">Tempe</Link>
            <Link href="/locations/arcadia-az" className="underline text-secondary font-semibold">Arcadia</Link>
            <Link href="/locations/paradise-valley-az" className="underline text-secondary font-semibold">Paradise Valley</Link>
            <Link href="/locations/queen-creek-az" className="underline text-secondary font-semibold">Queen Creek</Link>
          </div>
        </div>

        {/* About & Checklist Links */}
        <div className="py-12 px-5 w-full flex flex-col items-center space-y-6 text-center bg-white">
          <h2 className="text-3xl text-black font-bold">Why Sun Valley Cleaners?</h2>
          <p className="max-w-2xl text-slate-500">
            We are committed to delivering the highest quality cleaning
            services in the Scottsdale and Phoenix metro area.{" "}
            <Link href="/about" className="underline text-secondary">
              Learn more about our team
            </Link>{" "}
            and our dedication to customer satisfaction. Want to know exactly
            what we clean?{" "}
            <Link href="/cleaning-checklist" className="underline text-secondary">
              View our detailed cleaning checklist
            </Link>{" "}
            to see what each service includes. Ready to get started?{" "}
            <Link href="/contact" className="underline text-secondary">
              Contact us
            </Link>{" "}
            for a free quote.
          </p>
        </div>

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Scottsdale, AZ" />

        {/* FAQ SECTION - End */}
      </main>
  );
}
