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
  title: "Thorough Deep Cleaning in Gilbert, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers thorough deep cleaning in Gilbert, AZ— For kitchens, baths, and hard‑to‑reach areas. Ideal for resets. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/gilbert-az/deep-cleaning", // relative self URL
  },
};

const faqs = [
  {
    question: "Can deep cleaning in Gilbert, AZ help with pet hair and odors?",
    answer:
      "Yes, deep cleaning in Gilbert, AZ can significantly reduce pet hair buildup and lingering odors by addressing carpets, upholstery, baseboards, and hard-to-reach corners where dander accumulates. For pet-friendly homes, Sun Valley Cleaners applies targeted methods to leave spaces fresher and more comfortable.",
  },
  {
    question: "Is deep cleaning in Gilbert, AZ recommended before putting a house on the market?",
    answer:
      "Absolutely, deep cleaning in Gilbert, AZ can make a property more appealing to buyers by restoring shine to kitchens, bathrooms, and floors, and eliminating signs of wear. Sun Valley Cleaners ensures every detail is addressed so your home photographs well and impresses during showings.",
  },
  {
    question: "Does deep cleaning in Gilbert, AZ include sanitizing high-touch surfaces?",
    answer:
      "Deep cleaning in Gilbert, AZ often includes disinfecting high-touch points like light switches, door handles, appliance handles, and banisters to reduce the spread of germs. Sun Valley Cleaners incorporates this sanitizing step into our detailed process for healthier living environments.",
  },
];


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Thorough Deep Cleaning in Gilbert, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides thorough deep cleaning in Gilbert, AZ, focusing on
              grease‑prone kitchens, soap‑scum in baths, stubborn grout, fan
              blades, vents, and appliance interiors. This detail‑first reset is
              perfect for move‑ins, seasonal transitions, or tackling long‑term
              buildup with reliable scheduling.
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
                Gilbert, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Detail-first. Odor-free. Lasting.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Kitchen & Bath Rejuvenation:</b> Our thorough deep
                    cleaning in Gilbert targets grease films on cabinet fronts,
                    mineral residue on fixtures, soap‑scum on glass, and grime
                    along baseboards and tile edges. We also detail inside ovens
                    and refrigerators for a cleaner look, fresher smell, and
                    surfaces that stay easier to maintain.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Seasonal & Allergy Relief:</b> Deep cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      {" "}
                      Gilbert, AZ
                    </a>{" "}
                    clears dust and pollen from fan blades, vents, window
                    tracks, and high‑touch areas. This targeted approach
                    supports more comfortable breathing and reduces irritants,
                    especially during seasonal shifts or after dusty projects.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Move‑In/Move‑Out Precision:</b> Whether you’re preparing
                    to list or settling into a new address, deep cleaning in
                    Gilbert resets kitchens, baths, and living spaces to a
                    photo‑ready condition—reducing stress and helping your home
                    show at its absolute best.
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
              alt="deep cleaning in Gilbert home"
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
                Why Deep Cleaning Services Matter in Gilbert, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Clean foundations, calmer living
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Post‑Project Clarity:</b> Renovations and DIY tasks leave
                    fine dust on trim, glass, and fixtures. Deep cleaning in
                    Gilbert removes leftover particles from vents, corners, and
                    ledges, restoring clear surfaces and a healthier baseline
                    before you resume everyday routines.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Hygiene Where It Counts:</b> Grease, soap residue, and
                    allergens collect in places routine cleaning skips. Deep
                    cleaning in Gilbert tackles grout joints, appliance gaskets,
                    faucet bases, and door hardware to reduce buildup and keep
                    high‑touch zones safer for daily use.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Stress‑Free Transitions:</b> Before moving, hosting, or
                    listing, deep cleaning in Gilbert ensures your property
                    looks crisp in photos and inviting in person. That reset
                    simplifies staging, handoffs, and first impressions for
                    smoother next steps.
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
              alt="deep house cleaning in Gilbert AZ"
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

