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
  title: "Detailed Residential Cleaning in Chandler, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners offers detailed residential cleaning in Chandler, AZ for a spotless, healthy home. Eco-friendly and fully customizable. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/chandler-az/residential-cleaning",
  },
};

const faqs = [
  {
    question: "What does detailed residential cleaning in Chandler, AZ involve?",
    answer:
      "Detailed residential cleaning in Chandler, AZ involves comprehensive dusting, vacuuming, mopping, bathroom and kitchen sanitization, surface polishing, and attention to overlooked areas. Sun Valley Cleaners ensures every inch of your home receives thorough care.",
  },
  {
    question:
      "How often should I book residential cleaning in Chandler, AZ?",
    answer:
      "The recommended frequency for residential cleaning in Chandler, AZ depends on your household needs. Sun Valley Cleaners offers weekly, biweekly, and monthly options to maintain a consistently clean home.",
  },
  {
    question:
      "Do you bring your own supplies for residential cleaning in Chandler, AZ?",
    answer:
      "Yes, <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> brings all necessary eco-friendly supplies and professional equipment for residential cleaning in Chandler, AZ. You don&apos;t need to provide anything for a complete, detailed clean.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Detailed Residential Cleaning in Chandler, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              offers detailed residential cleaning in Chandler, AZ that brings
              precision and care to every corner of your home. From kitchens and
              bathrooms to living spaces and bedrooms, we deliver a thorough
              clean using safe, eco-friendly products.
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
            alt="detailed residential cleaning in Chandler, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Residential Cleaning in
                Chandler, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Detailed. Dependable. Distinctly Clean.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Room-by-Room Precision:</b> Our detailed residential
                    cleaning in Chandler, AZ covers every room with careful
                    attention. We address baseboards, light fixtures, and hidden
                    spots that standard cleaning often misses.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Safe and Effective Products:</b> We use eco-friendly,
                    non-toxic cleaning solutions that protect your Chandler
                    family and surfaces. Our products deliver exceptional cleaning
                    power without harsh chemicals.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Flexible Plans for Every Home in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Chandler,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Chandler, AZ
                    </a>:</b> Whether you need
                    weekly maintenance or a monthly deep refresh, we customize
                    our residential cleaning schedule to match your lifestyle
                    and budget.
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
              alt="residential cleaning in Chandler home"
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
                Why Residential Cleaning Matters in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Detail that makes a difference
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Combat Chandler&apos;s Dust and Heat:</b> Chandler&apos;s
                    warm, dry climate drives dust and allergens into homes year-round.
                    Detailed residential cleaning removes these particles to
                    maintain cleaner indoor air and healthier living.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>A More Comfortable Home:</b> A professionally cleaned
                    residence feels more spacious, organized, and inviting. Our
                    detailed service creates a refreshing atmosphere that
                    enhances your daily living experience.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Protect Surfaces and Finishes:</b> Regular residential
                    cleaning prevents dirt buildup that causes scratches,
                    staining, and wear. Consistent care preserves your Chandler
                    home&apos;s surfaces and overall value.
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
              alt="residential cleaning in Chandler AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Chandler, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Residential Cleaning"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/residential-cleaning" },
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
