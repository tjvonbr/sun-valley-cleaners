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
  title: "Comprehensive Deep Cleaning in Mesa, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners offers comprehensive deep cleaning in Mesa, AZ—detailed care for kitchens, baths, and living areas. Perfect for overhauls. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/mesa-az/deep-cleaning", // relative self URL
  },
};

const faqs = [
  {
    question: "Is deep cleaning in Mesa, AZ suitable for large homes?",
    answer:
      "Yes, deep cleaning in Mesa, AZ can be scaled for large homes, ensuring every level and room receives the same detailed attention. Sun Valley Cleaners organizes tasks for efficiency while maintaining consistent quality from top to bottom.",
  },
  {
    question: "When should I plan deep cleaning in Mesa, AZ around the holidays?",
    answer:
      "Scheduling deep cleaning in Mesa, AZ a week or two before holidays helps prepare your home for guests, décor, and gatherings. Sun Valley Cleaners coordinates flexible timing to ensure your space is pristine when it matters most.",
  },
  {
    question: "Can deep cleaning in Mesa, AZ help maintain new renovations?",
    answer:
      "Absolutely, deep cleaning in Mesa, AZ removes leftover construction dust, adhesive residue, and fine debris from new renovations. Sun Valley Cleaners completes the post-project polish so your upgrades look flawless from the start.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Comprehensive Deep Cleaning in Mesa, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              delivers comprehensive deep cleaning in Mesa, AZ—covering every
              surface from crown molding to baseboards. Our process is designed
              for whole-home resets, whether after a busy season, before a big
              event, or as part of an annual maintenance plan.
            </p>

            <Link
              href="/book-appointment"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Book an appointment today!
            </Link>
          </div>
          <Image src={icon} height="500" width="500" alt="hello" />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Deep Cleaning Services in
                Mesa, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Complete care, every corner
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Full-Room Detailing:</b> Our deep cleaning in Mesa covers
                    walls, trim, vents, blinds, and fixtures, along with the
                    interiors of ovens, refrigerators, and cabinets. Each room
                    receives focused attention for a consistent, refreshed
                    finish throughout your home.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Seasonal Deep Reset:</b> Mesa’s desert dust can build up
                    quickly in fabrics, vents, and on flat surfaces. Our
                    comprehensive service clears these particles, improving air
                    quality and making your home easier to maintain in between
                    standard cleanings.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Event & Transition Ready:</b> Whether preparing for a
                    major gathering or a move, deep cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Mesa,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      {" "}
                      Mesa, AZ
                    </a>{" "}
                    ensures every surface is polished and guest-ready. This
                    level of detailing creates lasting impressions and reduces
                    prep stress before important milestones.
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
              alt="deep cleaning in Mesa home"
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
                Why Deep Cleaning Services Matter in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                More than a surface shine
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Post-Construction Polish:</b> After renovations, deep
                    cleaning in Mesa removes sawdust, adhesive residue, and fine
                    debris from ledges, fixtures, and flooring to help new
                    finishes look their best from day one.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Preserving Long-Term Value:</b> Regular deep cleaning in
                    Mesa slows wear on tile, grout, and high-use surfaces,
                    helping your property maintain its appearance and condition
                    for years to come.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Comfort and Well-Being:</b> By removing allergens, dust
                    mites, and hidden buildup, deep cleaning in Mesa supports a
                    healthier home atmosphere and a more comfortable living
                    experience for you and your guests.
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
              alt="deep house cleaning in Mesa AZ"
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

