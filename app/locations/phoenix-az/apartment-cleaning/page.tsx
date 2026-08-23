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
  title: "Efficient Apartment Cleaning in Phoenix, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides efficient apartment cleaning in Phoenix, AZ with attention to detail and eco-friendly methods. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/phoenix-az/apartment-cleaning",
  },
};

const faqs = [
  {
    question: "What’s included in efficient apartment cleaning in Phoenix, AZ?",
    answer:
      "Efficient apartment cleaning in Phoenix, AZ covers kitchens, bathrooms, bedrooms, and living areas. Sun Valley Cleaners ensures every surface is sanitized, floors are spotless, and appliances are gleaming before or after your lease period.",
  },
  {
    question:
      "Can I book apartment cleaning in Phoenix, AZ for same-day service?",
    answer:
      "Yes, Sun Valley Cleaners offers flexible scheduling and often same-day availability for apartment cleaning in Phoenix, AZ, helping busy tenants maintain spotless living spaces without interrupting their routines.",
  },
  {
    question:
      "Do you use green products for apartment cleaning in Phoenix, AZ?",
    answer:
      "Absolutely! Sun Valley Cleaners uses eco-friendly products during apartment cleaning in Phoenix, AZ to promote a healthier environment for residents and reduce chemical exposure in smaller spaces.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Efficient Apartment Cleaning in Phoenix, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides efficient apartment cleaning in Phoenix, AZ designed for
              comfort, hygiene, and convenience. From quick turnarounds for
              tenants to detailed refreshes for landlords, we make every corner
              shine using safe, eco-friendly products and meticulous techniques.
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
            alt="efficient apartment cleaning in Phoenix, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Choose Sun Valley Cleaners for Apartment Cleaning in
                Phoenix, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Fast. Spotless. Dependable.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Tailored Cleaning for Small Spaces:</b> Our apartment
                    cleaning in Phoenix, AZ is designed for compact living
                    spaces. We maximize efficiency with a targeted approach,
                    ensuring kitchens, bathrooms, and shared areas stay fresh
                    without wasting time or products.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Flexible Scheduling for Tenants:</b> Whether you need a
                    one-time deep clean or routine maintenance, we offer
                    weekend, evening, and same-day appointments. Our efficient
                    cleaning service in Phoenix adapts to your apartment
                    lifestyle and schedule seamlessly.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Landlord & Lease Support:</b> Moving out or preparing for
                    new tenants? We offer pre-move and post-lease apartment
                    cleaning that meets inspection standards and enhances
                    property presentation for faster occupancy.
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
              alt="apartment cleaning in Phoenix home"
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
                Why Apartment Cleaning Matters in Phoenix, AZ
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Clean space, calm living
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Healthier Indoor Air:</b> Apartment cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Phoenix, AZ
                    </a>{" "}
                    helps remove built-up dust, allergens, and residue in small
                    living areas. Regular cleaning promotes better breathing
                    quality and reduces the risk of mold in humid corners.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Enhanced Comfort and Aesthetics:</b> Clean apartments
                    feel more open, peaceful, and inviting. Our efficient
                    cleaning ensures polished surfaces, streak-free windows, and
                    fresh-smelling rooms for a relaxing atmosphere every day.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Improved Property Longevity:</b> Regular apartment
                    cleaning prevents buildup on surfaces, reducing long-term
                    wear on flooring, countertops, and appliances. Maintaining a
                    clean space supports both tenant comfort and property value.
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
              alt="apartment cleaning in Phoenix AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Apartment Cleaning"
          areas={[
            { name: "Chandler, AZ", href: "/locations/chandler-az/apartment-cleaning" },
            { name: "Gilbert, AZ", href: "/locations/gilbert-az/apartment-cleaning" },
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
