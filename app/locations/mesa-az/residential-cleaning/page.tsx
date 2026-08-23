import Image from "next/image";
import FaqSection from "@/components/faq-section";
import AlsoAvailableSection from "@/components/also-available-section";
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
  title: "Quality Residential Cleaning in Mesa, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers quality residential cleaning in Mesa, AZ with eco-friendly products and professional care for every room. Book your visit now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/mesa-az/residential-cleaning",
  },
};

const faqs = [
  {
    question: "What does quality residential cleaning in Mesa, AZ include?",
    answer:
      "Quality residential cleaning in Mesa, AZ includes thorough dusting, vacuuming, mopping, kitchen and bathroom sanitization, surface care, and detailed attention to every room. Sun Valley Cleaners ensures your entire home is refreshed and spotless.",
  },
  {
    question:
      "Do you offer recurring residential cleaning plans in Mesa, AZ?",
    answer:
      "Yes, <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> provides weekly, biweekly, and monthly residential cleaning plans in Mesa, AZ. Recurring service ensures your home stays consistently clean at a schedule that works for you.",
  },
  {
    question:
      "What makes your residential cleaning in Mesa, AZ stand out?",
    answer:
      "Sun Valley Cleaners stands out for quality residential cleaning in Mesa, AZ through trained professionals, eco-friendly products, detailed checklists, and a satisfaction guarantee that ensures every visit exceeds expectations.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Quality Residential Cleaning in Mesa, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              delivers quality residential cleaning in Mesa, AZ that transforms
              your home into a spotless, comfortable living space. From routine
              maintenance to deep refreshes, we bring professional expertise
              and eco-friendly products to every visit.
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
            alt="quality residential cleaning in Mesa, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Choose Sun Valley Cleaners for Residential Cleaning in
                Mesa, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Quality. Care. Consistent Results.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Thorough Cleaning in Every Room:</b> Our quality residential
                    cleaning in Mesa, AZ covers kitchens, bathrooms, bedrooms,
                    and living areas with equal attention. We focus on details
                    like baseboards, fixtures, and hidden corners.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Green Cleaning Products:</b> We use eco-friendly,
                    non-toxic solutions that deliver powerful cleaning without
                    harsh chemicals. Safe for Mesa families, children, pets,
                    and all home surfaces.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Dependable and On-Time:</b> Our Mesa team respects your
                    schedule with punctual arrivals and efficient service. We
                    complete every job thoroughly without disrupting your daily
                    routine.
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
              alt="residential cleaning in Mesa home"
              className="bg-background"
            />
          </div>
        </div>
        {/* Benefits SECTION - End */}

        {/* Why SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col-reverse lg:flex-row-reverse items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Residential Cleaning Matters in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Quality care for Mesa homes
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Reduce Dust and Allergens:</b> Mesa&apos;s dry desert
                    climate causes constant dust accumulation indoors. Quality
                    residential cleaning removes these particles to improve
                    indoor air quality and overall wellness.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Enjoy a Refreshed Home in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Mesa,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Mesa, AZ
                    </a>:</b> A professionally cleaned
                    residence feels more organized, inviting, and relaxing. Our
                    quality service creates a comfortable living environment
                    you look forward to coming home to.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Extend Surface Lifespan:</b> Regular residential cleaning
                    prevents grime, mineral deposits, and wear on flooring,
                    countertops, and fixtures. Consistent care keeps your Mesa
                    home looking newer for longer.
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
              alt="residential cleaning in Mesa AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Mesa, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Residential Cleaning"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/residential-cleaning" },
            { name: "Chandler, AZ", href: "/locations/chandler-az/residential-cleaning" },
            { name: "Gilbert, AZ", href: "/locations/gilbert-az/residential-cleaning" },
          ]}
          relatedServices={[
            { name: "standard cleaning", href: "/services/house-cleaning" },
            { name: "deep cleaning", href: "/services/deep-cleaning" },
            { name: "move-in/move-out cleaning", href: "/services/move-cleaning" },
            { name: "Airbnb cleaning", href: "/services/airbnb-cleaning" },
          ]}
        />
      </main>
    </>
  );
}
