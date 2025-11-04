import Image from "next/image";
import FaqSection from "@/components/faq-section";
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
  title: "Affordable Move In Cleaning in Mesa, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides affordable move in cleaning in Mesa, AZ for spotless homes at great value. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/mesa-az/move-in-cleaning",
  },
};

const faqs = [
  {
    question: "What does affordable move in cleaning in Mesa, AZ include?",
    answer:
      "Affordable move in cleaning in Mesa, AZ includes deep cleaning of bathrooms, kitchens, and floors at a cost-effective rate. Sun Valley Cleaners ensures quality results without compromising on thoroughness or detail.",
  },
  {
    question: "How can affordable move in cleaning in Mesa, AZ save me time?",
    answer:
      "Sun Valley Cleaners’ affordable move in cleaning in Mesa, AZ allows you to focus on unpacking and settling in while our professionals handle every inch of cleaning efficiently.",
  },
  {
    question:
      "Are supplies included in affordable move in cleaning in Mesa, AZ?",
    answer:
      "Yes, Sun Valley Cleaners provides all cleaning supplies and equipment for affordable move in cleaning in Mesa, AZ, ensuring professional-grade results and convenience for every client.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Affordable Move In Cleaning in Mesa, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              delivers affordable move in cleaning in Mesa, AZ that combines
              quality, reliability, and value. Our professional cleaners ensure
              your new home feels spotless and refreshed, using proven methods
              to make your transition both easy and cost-efficient.
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
            alt="affordable move in cleaning in Mesa, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Move In Cleaning in Mesa, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Affordable. Reliable. Spotless.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Budget-Friendly Deep Cleaning:</b> Our move in cleaning
                    in Mesa, AZ offers exceptional value without cutting
                    corners. We cover everything from detailed dusting to
                    sanitizing fixtures, ensuring your new home shines for less.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Professional Quality at Fair Rates:</b> Sun Valley
                    Cleaners combines expert training and modern tools to
                    deliver high-quality results for every Mesa homeowner, no
                    matter the budget.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Custom Plans for Every Move:</b> We tailor our services
                    to match your needs—whether you’re moving into a studio or a
                    family home. Our flexible scheduling and transparent pricing
                    make the process stress-free.
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
              alt="move in cleaning in Mesa home"
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
                Why Move In Cleaning Matters in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Affordable cleanliness, lasting comfort
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Ensures a Healthier Start:</b> Move in cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Mesa,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Mesa, AZ
                    </a>{" "}
                    eliminates dust, grime, and bacteria left behind by previous
                    occupants. It provides your family with a safe, sanitized
                    living environment from day one.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Boosts Comfort and Presentation:</b> A spotless home
                    helps you feel more at ease and proud of your new space.
                    Affordable move in cleaning ensures polished floors,
                    gleaming fixtures, and a fresh environment to enjoy
                    immediately.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Prevents Long-Term Buildup:</b> A professional deep clean
                    before moving in prevents dirt from settling in seams and
                    corners, preserving the appearance and longevity of your
                    home’s surfaces.
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
              alt="move in cleaning in Mesa AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Mesa, AZ" />
        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
