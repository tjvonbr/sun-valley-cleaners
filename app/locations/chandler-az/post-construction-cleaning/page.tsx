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
  title: "Detailed Post Construction Cleaning in Chandler, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides detailed post construction cleaning in Chandler, AZ with meticulous attention to every surface and corner. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/chandler-az/post-construction-cleaning",
  },
};

const faqs = [
  {
    question: "What surfaces are cleaned during detailed post construction cleaning in Chandler, AZ?",
    answer:
      "Detailed post construction cleaning in Chandler, AZ covers all surfaces including floors, walls, windows, countertops, cabinets, fixtures, and appliances. Sun Valley Cleaners ensures every visible surface is free of dust, debris, and construction residue.",
  },
  {
    question:
      "Do you remove stickers and labels during post construction cleaning in Chandler, AZ?",
    answer:
      "Yes, <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> removes all stickers, labels, and protective films from windows, appliances, and fixtures during detailed post construction cleaning in Chandler, AZ.",
  },
  {
    question:
      "Can you handle large renovation projects for post construction cleaning in Chandler, AZ?",
    answer:
      "Absolutely. Sun Valley Cleaners handles projects of all sizes, from single-room renovations to entire home builds. Our detailed post construction cleaning in Chandler, AZ scales to meet your specific project needs.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Detailed Post Construction Cleaning in Chandler, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              Sun Valley Cleaners delivers detailed post construction cleaning
              in Chandler, AZ that addresses every inch of your newly built or
              renovated space. Our meticulous approach removes all traces of
              construction work, leaving behind a spotless environment ready
              for immediate occupancy.
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
            alt="detailed post construction cleaning in Chandler, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Post Construction Cleaning in
                Chandler, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Meticulous. Thorough. Precise.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Inch-by-Inch Inspection:</b> Our detailed post
                    construction cleaning in Chandler, AZ includes systematic
                    inspection and cleaning of every surface. We check and clean
                    areas that others overlook, ensuring nothing is missed.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Specialized Residue Removal:</b> Construction leaves
                    behind adhesives, paint splatters, and grout haze. Our
                    Chandler team uses specialized techniques to remove these
                    stubborn residues without damaging new surfaces.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Final Walk-Through Ready:</b> We prepare your Chandler
                    property for final inspections and walk-throughs. Our
                    detailed cleaning ensures every surface meets the highest
                    standards for presentation and cleanliness.
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
              alt="post construction cleaning in Chandler home"
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
                Why Post Construction Cleaning Matters in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Details define the finished product
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Showcases Quality Construction:</b> Detailed post
                    construction cleaning in Chandler, AZ reveals the true
                    beauty of new construction work. Clean surfaces and
                    sparkling fixtures highlight craftsmanship and attention to
                    detail.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Creates Healthy Indoor Environment in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Chandler,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Chandler, AZ
                    </a>:</b> Construction dust contains silica and other harmful
                    particles. Detailed cleaning removes these health hazards,
                    creating a safe environment for families moving into new
                    Chandler homes.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Preserves New Finishes:</b> Leaving construction residue
                    on surfaces can cause permanent damage over time. Prompt,
                    detailed cleaning protects your investment and maintains the
                    pristine condition of new installations.
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
              alt="post construction cleaning in Chandler AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Chandler, AZ" />
        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
