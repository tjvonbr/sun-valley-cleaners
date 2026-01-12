import Image from "next/image";
import FaqSection from "@/components/faq-section";
import icon from "/public/hero.svg";
import femaleCleaner from "../../../../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  IconBed,
  IconBox,
  IconBoxOpen,
  IconCircleCheck,
  IconEvent,
  IconOven,
  IconSprayBottle,
} from "@/components/ui/icons";

export const metadata = {
  title: "Reliable Housekeeping Services in Phoenix, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers reliable housekeeping services in Phoenix, AZ to keep your home spotless and fresh. Flexible scheduling available. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/phoenix-az/housekeeping-services",
  },
};

const faqs = [
  {
    question: "What do reliable housekeeping services in Phoenix, AZ include?",
    answer:
      "Reliable housekeeping services in Phoenix, AZ include regular dusting, vacuuming, mopping, bathroom sanitization, kitchen cleaning, and surface polishing. Sun Valley Cleaners customizes each visit to match your home's specific needs.",
  },
  {
    question:
      "How often should I schedule housekeeping services in Phoenix, AZ?",
    answer:
      "The frequency of housekeeping services in Phoenix, AZ depends on your lifestyle and household size. Sun Valley Cleaners offers weekly, biweekly, and monthly options to maintain a consistently clean home.",
  },
  {
    question:
      "Do you offer eco-friendly housekeeping services in Phoenix, AZ?",
    answer:
      "Yes, <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> uses eco-friendly products for housekeeping services in Phoenix, AZ to protect your family, pets, and the environment while delivering exceptional cleaning results.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Reliable Housekeeping Services in Phoenix, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              delivers reliable housekeeping services in Phoenix, AZ designed to
              maintain your home&apos;s cleanliness and comfort. From routine tidying
              to thorough deep cleans, we provide consistent, dependable service
              using safe products and proven techniques.
            </p>

            <Link
              href="/book-appointment"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Book an appointment today!
            </Link>
          </div>
          <Image
            src={icon}
            height="500"
            width="500"
            alt="reliable housekeeping services in Phoenix, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Housekeeping Services in
                Phoenix, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Reliable. Consistent. Always Fresh.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Customized Cleaning Plans:</b> Our reliable housekeeping
                    services in Phoenix, AZ are tailored to your home&apos;s layout
                    and your family&apos;s preferences. We adapt our approach to
                    deliver exactly what you need every visit.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Dependable Scheduling:</b> We understand busy Phoenix
                    lifestyles require flexibility. Our housekeeping team arrives
                    on time and works efficiently to minimize disruption while
                    maximizing cleanliness.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Trained and Trusted Staff in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Phoenix, AZ
                    </a>:</b> Our housekeepers are
                    thoroughly vetted, professionally trained, and committed to
                    treating your home with care and respect during every service.
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
              alt="housekeeping services in Phoenix home"
              className="bg-background"
            />
          </div>
        </div>
        {/* Benefits SECTION - End */}

        {/* Why SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col-reverse lg:flex-row-reverse items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Housekeeping Services Matter in Phoenix, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                A clean home, a peaceful life
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Combat Desert Dust:</b> Phoenix&apos;s desert climate brings
                    constant dust into homes. Regular housekeeping services keep
                    surfaces clean and reduce allergens for healthier indoor
                    living throughout the year.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>More Time for What Matters:</b> Outsourcing housekeeping
                    frees up valuable hours for family, hobbies, and relaxation.
                    Let our reliable team handle the cleaning while you enjoy
                    your Phoenix lifestyle.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Maintain Home Value:</b> Consistent housekeeping prevents
                    buildup and wear on surfaces, flooring, and fixtures.
                    Regular care preserves your home&apos;s condition and protects
                    your investment over time.
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
              alt="housekeeping services in Phoenix AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />
        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
