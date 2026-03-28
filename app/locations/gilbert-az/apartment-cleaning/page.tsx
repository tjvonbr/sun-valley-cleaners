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
  title: "Thorough Apartment Cleaning in Gilbert, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers thorough apartment cleaning in Gilbert, AZ with meticulous attention to every detail. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/gilbert-az/apartment-cleaning",
  },
};

const faqs = [
  {
    question: "What areas are covered in thorough apartment cleaning in Gilbert, AZ?",
    answer:
      "Thorough apartment cleaning in Gilbert, AZ covers every room including kitchens, bathrooms, bedrooms, and living areas. Sun Valley Cleaners ensures all surfaces, appliances, and floors are meticulously cleaned and sanitized.",
  },
  {
    question:
      "How detailed is your apartment cleaning service in Gilbert, AZ?",
    answer:
      "Our apartment cleaning in Gilbert, AZ goes beyond surface cleaning. <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> addresses baseboards, light fixtures, vents, and hidden corners that standard cleaning often misses.",
  },
  {
    question:
      "Can I customize my apartment cleaning in Gilbert, AZ?",
    answer:
      "Yes, Sun Valley Cleaners offers customizable apartment cleaning in Gilbert, AZ. You can request focus areas, add-on services, or adjust the cleaning checklist to match your specific needs and preferences.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Thorough Apartment Cleaning in Gilbert, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              Sun Valley Cleaners provides thorough apartment cleaning in
              Gilbert, AZ that leaves no corner untouched. Our dedicated team
              meticulously cleans every surface, ensuring your apartment is
              spotless, fresh, and perfectly maintained using eco-friendly
              products and professional techniques.
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
            alt="thorough apartment cleaning in Gilbert, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Apartment Cleaning in
                Gilbert, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Detailed. Meticulous. Complete.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Comprehensive Room-by-Room Cleaning:</b> Our thorough
                    apartment cleaning in Gilbert, AZ systematically addresses
                    every room. From kitchen grease to bathroom grime, we ensure
                    each space receives dedicated attention and care.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Attention to Overlooked Areas in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Gilbert, AZ
                    </a>:</b> We clean spots most services miss—behind
                    appliances, inside cabinets, under furniture, and along
                    baseboards. Our Gilbert team ensures a truly thorough clean
                    every visit.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Professional-Grade Equipment:</b> We use advanced
                    cleaning tools and eco-safe products to deliver superior
                    results. Our thorough approach removes dirt, dust, and
                    allergens that regular cleaning leaves behind.
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
              alt="apartment cleaning in Gilbert home"
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
                Why Apartment Cleaning Matters in Gilbert, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Every detail counts
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Eliminates Hidden Dirt and Bacteria:</b> Gilbert
                    apartments accumulate dust and germs in hidden spots.
                    Thorough cleaning reaches these areas, creating a healthier
                    living environment and reducing illness-causing bacteria.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Extends the Life of Fixtures:</b> Regular thorough
                    cleaning prevents buildup that damages surfaces, flooring,
                    and appliances. Protecting these elements saves money on
                    repairs and maintains your apartment&apos;s appearance.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Creates a Refreshing Living Space:</b> A thoroughly
                    cleaned apartment feels more spacious, organized, and
                    inviting. Coming home to a spotless space reduces stress and
                    improves your overall quality of life in Gilbert.
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
              alt="apartment cleaning in Gilbert AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Gilbert, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Apartment Cleaning"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/apartment-cleaning" },
            { name: "Chandler, AZ", href: "/locations/chandler-az/apartment-cleaning" },
            { name: "Mesa, AZ", href: "/locations/mesa-az/apartment-cleaning" },
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
