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
    "Top-Rated House Cleaning Services in Paradise Valley, AZ | Sun Valley Cleaners",
  description:
    "Top-rated house cleaning services in Paradise Valley, AZ by Sun Valley Cleaners. Spotless results, reliable service, and guaranteed satisfaction. Call now!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/locations/paradise-valley-az",
  },
};

const faqs = [
  {
    question:
      "What does a standard house cleaning service in Paradise Valley, AZ include?",
    answer:
      "It typically includes dusting, sweeping, mopping, vacuuming, and sanitizing common areas, kitchens, and bathrooms.",
  },
  {
    question: "Why hire a professional house cleaning service in Paradise Valley, AZ?",
    answer:
      "Professionals save you time, use better products, and ensure a healthier environment with expert-level cleaning.",
  },
  {
    question: "How do I choose the #1 house cleaning service in Paradise Valley, AZ?",
    answer:
      "Look for experience, satisfaction guarantees, great reviews, and flexible scheduling to ensure top service.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Top-Rated House Cleaning Services in Paradise Valley, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              At{" "}
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>
              , we provide Paradise Valley homeowners with spotless results and
              dependable service. Not happy? We’ll fix it free—your satisfaction
              is guaranteed!
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
                Why Choose Sun Valley Cleaners for House Cleaning Services in
                Paradise Valley, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Premium solutions for busy homes
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 mr-3 text-secondary" />
                  </div>

                  <p className="text-lg text-black font-semibold">
                    <b>Flexible Appointments:</b> We offer adjustable scheduling
                    options for homeowners across{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Paradise_Valley,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Paradise Valley, AZ
                    </a>
                    , ensuring convenience without compromising quality in our
                    house cleaning services.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 mr-3 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Professional and Respectful Staff:</b> Our trained
                    cleaners handle your Paradise Valley home with care, ensuring every
                    visit is courteous, efficient, and up to standard.
                  </p>
                </div>
                <div className="flex items-start w-full">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 mr-3 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Tailored Cleaning for Paradise Valley Homes:</b> We tackle dust
                    and debris common in desert climates with localized methods
                    that make our house cleaning services in Paradise Valley, AZ extra
                    effective.
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
              alt="female cleaner in Paradise Valley house"
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
                Why House Cleaning Services Matter in Paradise Valley, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Clean homes, healthy lives
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Combating Desert Dust:</b> Paradise Valley homes are regularly
                    exposed to dust storms and dry air. Routine house cleaning
                    helps reduce allergens and maintain better air quality
                    indoors.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Healthier Living Conditions:</b> Regular house cleaning
                    in Paradise Valley, AZ minimizes the spread of germs, pollen, and
                    pet dander—especially important during allergy season and
                    extreme heat months.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Boosting Home Value:</b> A clean, well-maintained
                    interior adds long-term value to your home, especially in a
                    competitive real estate market like Paradise Valley, AZ.
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
              alt="female cleaner with supplies in Paradise Valley"
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
              link="/locations/paradise-valley-az/deep-cleaning"
            >
              <IconOven className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Move In/Out Cleaning"
              description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/paradise-valley-az/move-in-move-out-cleaning"
            >
              <IconBoxOpen className="size-12 text-secondary" />
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
              link="/locations/paradise-valley-az/commercial-cleaning"
            >
              <IconBed className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Airbnb Cleaning Service"
              description="Our airbnb cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/paradise-valley-az/airbnb-cleaning"
            >
              <IconBed className="size-12 text-secondary" />
            </ServiceCard>
          </div>
        </div>
        {/* Services Section - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Paradise Valley, AZ" />

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
                  Looking for top-rated house cleaning services in Paradise Valley, AZ?
                  Our team is proud to serve local residents with thorough,
                  reliable cleaning solutions. Whether you are near downtown or
                  in the suburbs, we’re ready to help you enjoy a spotless home
                  with unmatched care and professionalism.
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425348.8291985406!2d-111.982!3d33.531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0a4bfe69d7cf%3A0x9cfdcfbb85e07b3a!2sParadise%20Valley%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sus!4v1752503704975!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  house cleaning services in paradise valley, house cleaning near
                  paradise valley
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
