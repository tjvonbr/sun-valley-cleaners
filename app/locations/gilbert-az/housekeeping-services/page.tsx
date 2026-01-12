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
  title: "Expert Housekeeping Services in Gilbert, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides expert housekeeping services in Gilbert, AZ to maintain a clean, healthy home environment. Schedule your service today!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/gilbert-az/housekeeping-services",
  },
};

const faqs = [
  {
    question: "What do expert housekeeping services in Gilbert, AZ cover?",
    answer:
      "Expert housekeeping services in Gilbert, AZ encompass thorough dusting, vacuuming, mopping, bathroom disinfection, kitchen cleaning, and detailed surface care. Sun Valley Cleaners adapts each visit to your home's particular needs.",
  },
  {
    question:
      "What scheduling options exist for housekeeping services in Gilbert, AZ?",
    answer:
      "For housekeeping services in Gilbert, AZ, <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> offers flexible weekly, biweekly, and monthly appointments. We work around your schedule to provide convenient, consistent service.",
  },
  {
    question:
      "Do you use safe products for housekeeping services in Gilbert, AZ?",
    answer:
      "Yes! Sun Valley Cleaners exclusively uses eco-friendly, non-toxic products for housekeeping services in Gilbert, AZ. Our green cleaning approach protects your family, pets, and home environment.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Expert Housekeeping Services in Gilbert, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides expert housekeeping services in Gilbert, AZ tailored to
              maintain your home&apos;s cleanliness and comfort. From weekly maintenance
              to comprehensive deep cleans, we bring skilled care and eco-friendly
              products to every visit.
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
            alt="expert housekeeping services in Gilbert, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Housekeeping Services in
                Gilbert, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Expert. Efficient. Exceptional Results.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Tailored Cleaning Approach:</b> Our expert housekeeping
                    services in Gilbert, AZ are customized to your home&apos;s layout
                    and your preferences. We create a cleaning plan that
                    addresses your specific priorities.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Flexible Appointment Times:</b> We accommodate busy Gilbert
                    schedules with convenient booking options. Our team arrives
                    promptly and completes work efficiently without sacrificing
                    quality.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Skilled Professional Team:</b> Our housekeepers undergo
                    extensive training and background checks. Gilbert families
                    can trust our experts to deliver consistent, high-quality
                    results every time.
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
              alt="housekeeping services in Gilbert home"
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
                Why Housekeeping Services Matter in Gilbert, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Expert care for family homes
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Control Desert Allergens:</b> Gilbert&apos;s arid environment
                    means dust and allergens are constant concerns. Expert
                    housekeeping removes these particles regularly for cleaner
                    air and healthier living.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Support Family Life in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Gilbert, AZ
                    </a>:</b> Gilbert is known for
                    its family-friendly community. Professional housekeeping
                    gives parents more quality time with children while
                    maintaining a clean, organized home.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Protect Your Investment:</b> Regular housekeeping
                    prevents dirt buildup and premature wear on surfaces.
                    Consistent professional care helps maintain your Gilbert
                    home&apos;s condition and resale value.
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
              alt="housekeeping services in Gilbert AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Gilbert, AZ" />
        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
