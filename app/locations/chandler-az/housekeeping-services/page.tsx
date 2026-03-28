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
  title: "Trusted Housekeeping Services in Chandler, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners offers trusted housekeeping services in Chandler, AZ for consistent home cleanliness and comfort. Book your cleaning today!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/chandler-az/housekeeping-services",
  },
};

const faqs = [
  {
    question: "What are trusted housekeeping services in Chandler, AZ?",
    answer:
      "Trusted housekeeping services in Chandler, AZ include comprehensive dusting, vacuuming, mopping, bathroom cleaning, kitchen maintenance, and surface care. <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> tailors each service to your home's unique requirements.",
  },
  {
    question:
      "How frequently should I use housekeeping services in Chandler, AZ?",
    answer:
      "The ideal frequency for housekeeping services in Chandler, AZ varies based on household activity and family size. Sun Valley Cleaners provides weekly, biweekly, and monthly scheduling to suit your needs.",
  },
  {
    question:
      "Are your housekeeping services in Chandler, AZ pet-friendly?",
    answer:
      "Absolutely! Sun Valley Cleaners uses pet-safe, eco-friendly products for housekeeping services in Chandler, AZ to ensure your furry family members stay safe while your home stays spotless.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Trusted Housekeeping Services in Chandler, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              offers trusted housekeeping services in Chandler, AZ crafted to
              keep your home consistently clean and welcoming. From everyday
              upkeep to detailed refreshes, we deliver dependable care using
              safe, effective cleaning methods.
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
            alt="trusted housekeeping services in Chandler, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Housekeeping Services in
                Chandler, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Trusted. Thorough. Always Dependable.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Personalized Service Plans:</b> Our trusted housekeeping
                    services in Chandler, AZ are designed around your home&apos;s
                    specific needs and your schedule. We create cleaning routines
                    that work perfectly for your lifestyle.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Punctual and Professional:</b> We respect your time with
                    reliable arrivals and efficient service. Our Chandler
                    housekeeping team works thoroughly without disrupting your
                    daily routine.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Background-Checked Team:</b> Our housekeepers are carefully
                    screened, fully trained, and dedicated to delivering
                    trustworthy service that Chandler families can rely on.
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
              alt="housekeeping services in Chandler home"
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
                Why Housekeeping Services Matter in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Clean spaces, stress-free living
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Beat the Arizona Dust in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Chandler,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Chandler, AZ
                    </a>:</b> Chandler&apos;s dry climate means
                    dust accumulates quickly indoors. Regular housekeeping keeps
                    your home fresh and reduces airborne particles for better
                    respiratory health.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Reclaim Your Free Time:</b> Professional housekeeping
                    gives you back precious hours each week. Focus on family,
                    work, and recreation while we handle the cleaning tasks
                    you&apos;d rather skip.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Preserve Your Home:</b> Routine housekeeping prevents
                    grime accumulation and surface wear. Consistent care extends
                    the life of your floors, counters, and fixtures while
                    maintaining your home&apos;s value.
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
              alt="housekeeping services in Chandler AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Chandler, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Housekeeping Services"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/housekeeping-services" },
            { name: "Gilbert, AZ", href: "/locations/gilbert-az/housekeeping-services" },
            { name: "Mesa, AZ", href: "/locations/mesa-az/housekeeping-services" },
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
