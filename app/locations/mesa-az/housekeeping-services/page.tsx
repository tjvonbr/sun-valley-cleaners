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
  title: "Dependable Housekeeping Services in Mesa, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides dependable housekeeping services in Mesa, AZ for a consistently clean and comfortable home. Book your visit today!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/mesa-az/housekeeping-services",
  },
};

const faqs = [
  {
    question: "What do dependable housekeeping services in Mesa, AZ include?",
    answer:
      "Dependable housekeeping services in Mesa, AZ include thorough dusting, vacuuming, mopping, bathroom disinfection, kitchen cleaning, and detailed surface care. <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> customizes each session to fit your household&apos;s specific needs.",
  },
  {
    question:
      "How often should I schedule housekeeping services in Mesa, AZ?",
    answer:
      "The ideal frequency for housekeeping services in Mesa, AZ depends on your household size and activity level. Sun Valley Cleaners offers weekly, biweekly, and monthly plans to keep your home consistently clean.",
  },
  {
    question:
      "Are your housekeeping products safe for children and pets in Mesa, AZ?",
    answer:
      "Absolutely! Sun Valley Cleaners uses eco-friendly, non-toxic products for all housekeeping services in Mesa, AZ. Our green cleaning approach ensures a safe environment for your entire family and pets.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Dependable Housekeeping Services in Mesa, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides dependable housekeeping services in Mesa, AZ designed to
              keep your home fresh, organized, and welcoming. From routine
              maintenance to detailed refreshes, we deliver consistent results
              with eco-friendly products and professional care.
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
            alt="dependable housekeeping services in Mesa, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Housekeeping Services in
                Mesa, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Dependable. Detailed. Always Consistent.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Personalized Cleaning Routines in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Mesa,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Mesa, AZ
                    </a>:</b> Our dependable housekeeping
                    services are tailored to your home&apos;s layout and your
                    family&apos;s preferences. We build a cleaning plan that
                    addresses your priorities every visit.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Convenient Scheduling Options:</b> We work around busy Mesa
                    lifestyles with flexible booking times. Our team arrives
                    punctually and completes every task efficiently without
                    cutting corners.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Vetted and Trained Professionals:</b> Our housekeepers
                    undergo thorough background checks and professional training.
                    Mesa families can count on our team for reliable, high-quality
                    results with every appointment.
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
              alt="housekeeping services in Mesa home"
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
                Why Housekeeping Services Matter in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Consistent care for comfortable living
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Manage Desert Dust Buildup:</b> Mesa&apos;s arid climate
                    means dust settles quickly on every surface. Dependable
                    housekeeping removes particles regularly to maintain cleaner
                    air and fresher living spaces.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Free Up Your Weekends:</b> Professional housekeeping
                    gives Mesa residents more time for family activities and
                    relaxation. Let our dependable team handle the cleaning while
                    you enjoy your free time.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Preserve Home Condition:</b> Regular housekeeping prevents
                    grime buildup and premature wear on surfaces. Consistent care
                    helps maintain your Mesa home&apos;s appearance and long-term
                    value.
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
              alt="housekeeping services in Mesa AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Mesa, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Housekeeping Services"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/housekeeping-services" },
            { name: "Chandler, AZ", href: "/locations/chandler-az/housekeeping-services" },
            { name: "Gilbert, AZ", href: "/locations/gilbert-az/housekeeping-services" },
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
