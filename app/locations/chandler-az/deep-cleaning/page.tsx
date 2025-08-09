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
  title: "Expert Deep Cleaning in Chandler, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides expert deep cleaning in Chandler, AZ for seasonal resets, move-ins, & heavy buildup—thorough, reliable, & precise. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/chandler-az/deep-cleaning", // relative self URL
  },
};

const faqs = [
  {
    question: "What does deep cleaning in Chandler, AZ typically include?",
    answer:
      "Deep cleaning in Chandler, AZ usually targets overlooked areas like grout lines, baseboards, vent covers, inside appliances, and high-touch surfaces for a full reset of kitchens and bathrooms. In the latter half of service delivery, Sun Valley Cleaners verifies detailing to ensure every space meets a like‑new standard.",
  },
  {
    question: "How often should I schedule deep cleaning in Chandler, AZ?",
    answer:
      "Most homes benefit from deep cleaning in Chandler, AZ every 3–6 months, and before or after events such as moving, remodeling, or hosting guests. When you’re unsure of the ideal cadence, Sun Valley Cleaners can recommend a schedule based on your home’s size, usage, and goals.",
  },
  {
    question: "What’s the difference between standard and deep cleaning in Chandler, AZ?",
    answer:
      "Standard cleaning maintains frequently used surfaces, while deep cleaning in Chandler, AZ addresses built‑up residue and hard‑to‑reach zones like behind appliances, fixtures, tile grout, and window tracks. For a thorough reset with professional tools and methods, Sun Valley Cleaners provides the added detail regular cleaning misses.",
  },
];


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Expert Deep Cleaning in Chandler, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              delivers expert deep cleaning in Chandler, AZ—removing stubborn
              buildup on grout, trim, fixtures, and inside appliances for a
              like-new feel. Perfect for move-ins, seasonal refreshes, and
              post-renovation dust, with meticulous detailing and dependable
              scheduling tailored to your home.
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
                Chandler, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Comprehensive cleaning, every time
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Appliance & Detail Cleaning:</b> Our expert deep
                    cleaning in{" "}
                    <a
                      href="https://www.chandleraz.gov/"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Chandler, AZ
                    </a>{" "}
                    includes the interiors of ovens and refrigerators, stubborn
                    grout, baseboards, fans, and fixtures. We focus on
                    hard‑to‑reach areas and built‑up residue so your home feels
                    refreshed, sanitized, and truly reset after one detailed
                    visit.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Seasonal & Allergy Relief:</b> Deep cleaning in Chandler
                    clears dust, pollen, and hidden debris from vents, trim, and
                    corners to improve comfort and air quality. It’s ideal
                    before hosting guests or after long, dusty stretches when
                    regular maintenance cleaning isn’t enough.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Move‑In/Move‑Out Ready:</b> Whether you’re settling into
                    a new place or preparing to list or rent, deep cleaning in
                    Chandler restores kitchens, baths, and living areas to a
                    spotless, photo‑ready condition—reducing stress and helping
                    you start or finish strong.
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
              alt="deep cleaning in Chandler home"
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
                Why Deep Cleaning Services Matter in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Deep clean for deep comfort
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Refresh After Busy Seasons:</b> High activity brings
                    extra dust, spills, and scuffs. Deep cleaning in Chandler
                    resets kitchens, baths, and living spaces—especially grout,
                    glass, and trim—so your home looks brighter and stays
                    easier to maintain between standard cleanings.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Healthier Home Surfaces:</b> Grease, soap scum, and
                    allergens build up on overlooked areas. Targeted deep
                    cleaning removes residues from fixtures, grout lines, and
                    appliance interiors to help reduce irritants and keep rooms
                    hygienic for daily living.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Preparation for Life Events:</b> Before moving, hosting,
                    or renovations, deep cleaning in Chandler ensures a
                    show‑ready space. Detailed attention to corners, vents, and
                    appliances creates a confident handoff or a fresh start for
                    your next chapter.
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
              alt="deep house cleaning in Chandler AZ"
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

