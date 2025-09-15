import Image from "next/image";
import FaqSection from "@/components/faq-section";
import icon from "../../../../public/hero.svg";
import femaleCleaner from "../../../../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconCircleCheck } from "@/components/ui/icons";

export const metadata = {
  title: "Reliable Move Out Cleaning in Gilbert, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides reliable move out cleaning in Gilbert, AZ. Detailed service, fresh results, and stress-free property handovers. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/gilbert-az/move-out-cleaning",
  },
};

const faqs = [
  {
    question: "What does reliable move out cleaning in Gilbert, AZ include?",
    answer:
      "Reliable move out cleaning in Gilbert, AZ covers kitchens, bathrooms, bedrooms, and all living areas with deep cleaning methods. Sun Valley Cleaners ensures every surface is spotless and ready for inspection.",
  },
  {
    question: "Why should I hire a professional for move out cleaning in Gilbert, AZ?",
    answer:
      "Hiring a professional ensures your home meets landlord or buyer expectations, saving time and reducing stress. Sun Valley Cleaners delivers efficient, reliable results for every client.",
  },
  {
    question: "How soon before moving should I book move out cleaning in Gilbert, AZ?",
    answer:
      "It’s best to schedule reliable move out cleaning in Gilbert, AZ a few days before your move-out date. Sun Valley Cleaners offers flexible scheduling to ensure a smooth transition.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Reliable Move Out Cleaning in Gilbert, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              offers reliable move out cleaning in Gilbert, AZ, ensuring a
              stress-free moving experience. Our team deep cleans every corner,
              leaving your property move-in ready for its next occupants.
            </p>

            <Link
              href="/book-appointment"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Book an appointment today!
            </Link>
          </div>
          <Image src={icon} height="500" width="500" alt="move out cleaning" />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Move Out Cleaning in Gilbert, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Thorough cleaning, peace of mind
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Comprehensive Cleaning Checklist:</b> Our reliable move out
                    cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Gilbert, AZ
                    </a>{" "}
                    covers kitchens, bathrooms, living areas, and storage
                    spaces. Each step ensures your property is spotless and
                    ready for inspection, reducing the risk of delays or
                    disputes.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Improved Freshness & Hygiene:</b> We eliminate odors, dust,
                    and buildup from high-traffic areas to create a healthier
                    space that makes a strong impression on new occupants.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Attention to High-Impact Details:</b> Our team deep cleans
                    grout, fixtures, and appliances—ensuring every detail
                    reflects care and readiness for a smooth handover.
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
              alt="move out cleaning in Gilbert home"
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
                Why Move Out Cleaning Matters in Gilbert, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Cleaner exits, stronger impressions
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Protect Your Deposit:</b> Professional move out cleaning
                    in Gilbert, AZ ensures you meet landlord expectations and
                    avoid disputes, helping you recover your full security
                    deposit with confidence.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Healthier Space for New Residents:</b> Deep cleaning
                    reduces allergens, bacteria, and hidden dirt, ensuring a
                    healthier and more welcoming environment for the next
                    occupants.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Boost Property Appeal:</b> Sparkling clean surfaces and
                    fresh-smelling rooms enhance your property’s value and help
                    it stand out in the rental or sales market.
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
              alt="move out cleaning in Gilbert AZ"
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
