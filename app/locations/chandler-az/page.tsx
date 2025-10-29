import Image from "next/image";
import FaqSection from "@/components/faq-section";
import icon from "../../../public/hero.svg";
import femaleCleaner from "../../../public/female-cleaner.svg";
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
import ServiceCard from "@/components/service-card";

export const metadata = {
  title:
    "Affordable House Cleaning Services in Chandler, AZ | Sun Valley Cleaners",
  description:
    "Affordable house cleaning services in Chandler, AZ by Sun Valley Cleaners. Prompt, spotless results backed by a satisfaction guarantee. Call now!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/locations/chandler-az",
  },
};

const faqs = [
  {
    question:
      "What is included in your house cleaning services in Chandler, AZ?",
    answer:
      "Our house cleaning in Chandler, AZ includes dusting, vacuuming, mopping, bathroom and kitchen sanitization, and full surface wipe-downs in all main areas.",
  },
  {
    question:
      "How often should Chandler homeowners schedule professional cleaning?",
    answer:
      "We recommend biweekly cleaning for most homes in Chandler. However, busy households or allergy-prone residents may benefit from weekly service.",
  },
  {
    question:
      "Are eco-friendly products used for house cleaning in Chandler, AZ?",
    answer:
      "Yes, we use eco-friendly and non-toxic products for all Chandler homes to ensure safe, effective cleaning for families, pets, and the environment.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Affordable House Cleaning Services in Chandler, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              proudly delivers affordable and reliable house cleaning services
              across Chandler, AZ. Whether you need routine upkeep or a one-time
              refresh, we guarantee results youll love.
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

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Sun Valley Cleaners: House Cleaning Services in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Clean homes made simple
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Budget-Friendly Options:</b> We offer affordable packages
                    tailored to different home sizes and cleaning needs, making
                    quality house cleaning in Chandler, AZ accessible for all.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Locally Focused Service:</b> As a local provider, we
                    understand the specific cleaning challenges in
                    <a
                      href="https://en.wikipedia.org/wiki/Chandler,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      {" "}
                      Chandler, AZ
                    </a>{" "}
                    and bring neighborhood-friendly reliability with every
                    visit.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Quick Turnaround Time:</b> Our responsive scheduling and
                    efficient team ensure your home gets cleaned quickly without
                    compromising on thoroughness or care.
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
              alt="female cleaner in Chandler home"
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
                Why House Cleaning Services Matter in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Comfort starts with cleanliness
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Warm Weather Dust Accumulation:</b> Chandlers dry and
                    sunny climate leads to frequent indoor dust buildup. Regular
                    house cleaning keeps air quality higher and surfaces fresh.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Time-Saving for Families:</b> With Chandlers growing
                    neighborhoods and busy households, having a trusted cleaning
                    service lets residents focus more on family and work life.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Improved Hygiene Year-Round:</b> House cleaning services
                    in Chandler, AZ help reduce allergens and bacteria in the
                    home, especially during seasonal transitions and flu season.
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
              alt="house cleaning in Chandler AZ"
              className="bg-background"
            />
          </div>
        </div>

        {/* Why SECTION - End */}

        {/* Services Section - Start */}
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
              link="/locations/chandler-az/deep-cleaning"
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
              link="/locations/chandler-az/move-out-cleaning"
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
              title="Commercial Service"
              description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/chandler-az/commercial-cleaning"
            >
              <IconBed className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Airbnb Cleaning Service"
              description="Our airbnb cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/chandler-az/airbnb-cleaning"
            >
              <IconBed className="size-12 text-secondary" />
            </ServiceCard>
          </div>
        </div>
        {/* Services Section - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />

        {/* FAQ SECTION - End */}

        {/* Map SECTION - Start*/}
        <div className="px-8 py-12 w-full bg-white">
          <section id="map" className="bg-white">
            <div className="max-w-md px-6 mx-auto pb-28 sm:max-w-3xl lg:max-w-7xl lg:px-8">
              <div className="flex flex-col justify-center text-center">
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-black">
                  Find Us
                </h2>
                <p className="pb-10 mx-auto mt-5 text-xl text-gray-900 max-w-prose">
                  Sun Valley Cleaners is proud to offer affordable house
                  cleaning services in Chandler, AZ. Centrally based, we
                  efficiently serve Chandler neighborhoods with flexible
                  scheduling and expert cleaning for all home sizes and needs.
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425297.2113749595!2d-111.9761252!3d33.306214849999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba926f86e199d%3A0x1b088a1c40f3e74c!2sChandler%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1752578918592!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  house cleaning services in chandler, house cleaning near
                  chandler
                </iframe>
              </div>
            </div>
          </section>
        </div>

        {/* Map SECTION - End*/}
      </main>
    </>
  );
}
