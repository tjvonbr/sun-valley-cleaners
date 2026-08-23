import Image from "next/image";
import FaqSection from "@/components/faq-section";
import AlsoAvailableSection from "@/components/also-available-section";
import icon from "../../../../public/hero.svg";
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
  title: "Trusted Move In Cleaning in Chandler, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners offers trusted move in cleaning in Chandler, AZ for spotless homes and a smooth fresh start. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/chandler-az/move-in-cleaning",
  },
};

const faqs = [
  {
    question: "What’s included in trusted move in cleaning in Chandler, AZ?",
    answer:
      "Trusted move in cleaning in Chandler, AZ includes disinfecting bathrooms, sanitizing kitchens, dusting, and deep-cleaning floors. Sun Valley Cleaners ensures your new home is safe, fresh, and fully ready to move into.",
  },
  {
    question: "How long does move in cleaning in Chandler, AZ usually take?",
    answer:
      "The time for move in cleaning in Chandler, AZ depends on your home’s size and condition. Sun Valley Cleaners typically completes standard homes within 3–5 hours, delivering spotless, inspection-ready results.",
  },
  {
    question: "Is move in cleaning in Chandler, AZ safe for families and pets?",
    answer:
      "Yes! Sun Valley Cleaners uses non-toxic, eco-friendly cleaning solutions during move in cleaning in Chandler, AZ, ensuring a safe environment for children and pets from day one.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Trusted Move In Cleaning in Chandler, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides trusted move in cleaning in Chandler, AZ to give new
              homeowners and tenants a spotless beginning. Our team focuses on
              disinfecting high-touch surfaces, refreshing floors, and restoring
              cleanliness to make every room shine before you unpack.
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
            alt="trusted move in cleaning in Chandler, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Choose Sun Valley Cleaners for Move In Cleaning in Chandler,
                AZ?
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Reliable. Detail-Oriented. Fresh.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Precision Cleaning for New Residents:</b> Our move in
                    cleaning in Chandler, AZ ensures that every room, from
                    bedrooms to bathrooms, is thoroughly sanitized and ready for
                    use. We focus on spotless finishes and deep disinfection for
                    a truly move-in-ready home.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Flexible Scheduling and Timely Service:</b> We understand
                    moving schedules can change quickly. Sun Valley Cleaners
                    provides adaptable booking options to fit your timeline,
                    ensuring your Chandler home is cleaned when you need it.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Trained Local Cleaning Experts:</b> Our Chandler-based
                    professionals use advanced tools and eco-safe products to
                    clean efficiently. With experience in Arizona homes, we know
                    how to handle desert dust and high-traffic buildup
                    perfectly.
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
              alt="move in cleaning in Chandler home"
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
                Why Move In Cleaning Matters in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Clean start, confident move
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Protects Your Family’s Health:</b> Move in cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Chandler,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Chandler, AZ
                    </a>{" "}
                    removes lingering dust, pet dander, and bacteria left by
                    prior occupants. A thorough clean provides a fresh and
                    allergen-free environment for your family to enjoy.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Enhances Move-In Efficiency:</b> Arriving to a clean home
                    makes unpacking faster and easier. With professional move in
                    cleaning, you can immediately settle in without worrying
                    about hidden messes or unfinished chores.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Preserves Surfaces and Fixtures:</b> Removing dirt and
                    buildup early helps prevent scratches and discoloration on
                    counters, tiles, and floors. Regular deep cleaning also
                    prolongs the life and shine of your interior finishes.
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
              alt="move in cleaning in Chandler AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Chandler, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Move-in Cleaning"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/move-in-cleaning" },
            { name: "Gilbert, AZ", href: "/locations/gilbert-az/move-in-cleaning" },
            { name: "Mesa, AZ", href: "/locations/mesa-az/move-in-cleaning" },
            { name: "Arcadia, AZ", href: "/locations/arcadia-az/move-in-move-out-cleaning" },
            { name: "Paradise Valley, AZ", href: "/locations/paradise-valley-az/move-in-move-out-cleaning" },
          ]}
          relatedServices={[
            { name: "standard cleaning", href: "/services/house-cleaning" },
            { name: "deep cleaning", href: "/services/deep-cleaning" },
            { name: "Airbnb cleaning", href: "/services/airbnb-cleaning" },
          ]}
        />
      </main>
    </>
  );
}
