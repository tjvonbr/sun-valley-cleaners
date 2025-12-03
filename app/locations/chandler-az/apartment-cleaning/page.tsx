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
  title: "Reliable Apartment Cleaning in Chandler, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners offers reliable apartment cleaning in Chandler, AZ with consistent quality and trusted professionals. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/chandler-az/apartment-cleaning",
  },
};

const faqs = [
  {
    question: "What's included in reliable apartment cleaning in Chandler, AZ?",
    answer:
      "Reliable apartment cleaning in Chandler, AZ covers kitchens, bathrooms, bedrooms, and living spaces with consistent, high-quality results. <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> ensures every surface is sanitized, floors are spotless, and your apartment feels fresh after every visit.",
  },
  {
    question:
      "How often should I schedule apartment cleaning in Chandler, AZ?",
    answer:
      "For most Chandler apartments, we recommend bi-weekly or monthly cleaning to maintain a healthy, dust-free environment. Sun Valley Cleaners offers flexible scheduling to match your lifestyle and keep your space consistently clean.",
  },
  {
    question:
      "Do you bring your own supplies for apartment cleaning in Chandler, AZ?",
    answer:
      "Yes, Sun Valley Cleaners provides all cleaning supplies and equipment for apartment cleaning in Chandler, AZ. We use eco-friendly, professional-grade products that are safe for families and pets.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Reliable Apartment Cleaning in Chandler, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              Sun Valley Cleaners provides reliable apartment cleaning in
              Chandler, AZ that you can count on every time. From busy
              professionals to growing families, we deliver consistent,
              thorough cleaning that keeps your apartment spotless, comfortable,
              and welcoming using safe, eco-friendly products.
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
            alt="reliable apartment cleaning in Chandler, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Apartment Cleaning in
                Chandler, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Consistent. Dependable. Spotless.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Trusted Service in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Chandler,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Chandler, AZ
                    </a>:</b> Our apartment cleaning team in Chandler is known
                    for reliability and attention to detail. We show up on time,
                    every time, and deliver results that exceed expectations
                    with professional care.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Customized Cleaning Plans:</b> Whether you need weekly
                    maintenance or a one-time deep clean, we tailor our
                    apartment cleaning services to fit your schedule and
                    preferences. Our flexible options work around your busy
                    Chandler lifestyle.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Safe and Eco-Friendly Products:</b> We use non-toxic,
                    environmentally responsible cleaning solutions during every
                    apartment cleaning visit. Your family and pets stay safe
                    while enjoying a fresh, chemical-free living space.
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
              alt="apartment cleaning in Chandler home"
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
                Why Apartment Cleaning Matters in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Clean apartments, peaceful living
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Reduces Allergens and Dust:</b> Chandler's desert climate
                    brings fine dust and allergens into apartments regularly.
                    Professional apartment cleaning removes these particles,
                    improving air quality and reducing allergy symptoms for
                    residents.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Maximizes Small Space Comfort:</b> Apartments require
                    smart cleaning approaches to feel open and inviting. Our
                    reliable cleaning ensures every corner is addressed,
                    creating a more organized and comfortable living environment.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Protects Your Security Deposit:</b> Regular apartment
                    cleaning prevents buildup and staining that can cost you
                    when moving out. Maintaining a clean space helps preserve
                    surfaces and ensures you get your full deposit back.
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
              alt="apartment cleaning in Chandler AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Chandler, AZ" />
        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
