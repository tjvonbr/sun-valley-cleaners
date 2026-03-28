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
  title: "Premium Residential Cleaning in Phoenix, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers premium residential cleaning in Phoenix, AZ with meticulous attention to detail and eco-friendly methods. Call today!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/phoenix-az/residential-cleaning",
  },
};

const faqs = [
  {
    question: "What does premium residential cleaning in Phoenix, AZ cover?",
    answer:
      "Premium residential cleaning in Phoenix, AZ covers all living areas including kitchens, bathrooms, bedrooms, and common spaces. Sun Valley Cleaners provides thorough dusting, vacuuming, mopping, surface sanitization, and detailed finishing touches.",
  },
  {
    question:
      "Can I customize my residential cleaning service in Phoenix, AZ?",
    answer:
      "Yes, <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> offers fully customizable residential cleaning in Phoenix, AZ. We tailor each visit to your specific preferences, priorities, and household requirements.",
  },
  {
    question:
      "How do you ensure quality in residential cleaning in Phoenix, AZ?",
    answer:
      "Sun Valley Cleaners maintains premium quality for residential cleaning in Phoenix, AZ through trained professionals, eco-friendly products, detailed checklists, and a satisfaction guarantee on every service.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Premium Residential Cleaning in Phoenix, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              delivers premium residential cleaning in Phoenix, AZ that
              elevates the cleanliness and comfort of your home. From detailed
              surface care to deep sanitization, we bring professional-grade
              results using safe, eco-friendly products.
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
            alt="premium residential cleaning in Phoenix, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Residential Cleaning in
                Phoenix, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Premium. Precise. Perfectly Clean.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Whole-Home Cleaning Excellence:</b> Our premium residential
                    cleaning in Phoenix, AZ addresses every room with meticulous
                    care. We focus on high-touch surfaces, hidden corners, and
                    detailed finishes for a truly spotless home.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Eco-Friendly Products in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Phoenix, AZ
                    </a>:</b> We use only non-toxic,
                    environmentally responsible cleaning solutions that are safe
                    for your family, pets, and home surfaces while delivering
                    exceptional results.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Satisfaction Guaranteed:</b> Every residential cleaning
                    visit comes backed by our quality guarantee. If any area
                    doesn&apos;t meet your expectations, we return to make it
                    right at no additional cost.
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
              alt="residential cleaning in Phoenix home"
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
                Why Residential Cleaning Matters in Phoenix, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Premium care for your home
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Healthier Indoor Environment:</b> Phoenix&apos;s desert
                    conditions push dust, pollen, and allergens indoors. Premium
                    residential cleaning removes these contaminants to promote
                    better air quality and respiratory health.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Elevated Living Standards:</b> A professionally cleaned
                    home looks better, feels more inviting, and creates a
                    calmer atmosphere. Our premium service transforms your
                    Phoenix residence into a truly comfortable retreat.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Long-Term Property Protection:</b> Regular residential
                    cleaning prevents surface deterioration, staining, and
                    buildup. Consistent professional care protects your Phoenix
                    home&apos;s value and keeps it looking its best.
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
              alt="residential cleaning in Phoenix AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Residential Cleaning"
          areas={[
            { name: "Chandler, AZ", href: "/locations/chandler-az/residential-cleaning" },
            { name: "Gilbert, AZ", href: "/locations/gilbert-az/residential-cleaning" },
            { name: "Mesa, AZ", href: "/locations/mesa-az/residential-cleaning" },
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
