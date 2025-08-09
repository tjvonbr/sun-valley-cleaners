import Image from "next/image";
import FaqSection from "@/components/faq-section";
import icon from "../../../../public/hero.svg";
import femaleCleaner from "../../../../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  IconCircleCheck,
} from "@/components/ui/icons";

export const metadata = {
  title: "Efficient Move Out Cleaning in Chandler, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers efficient move out cleaning in Chandler, AZ to prepare homes for handover with speed and detail. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/chandler-az/move-out-cleaning", // relative self URL
  },
};

const faqs = [
  {
    question: "Can efficient move out cleaning in Chandler, AZ help speed up property sales?",
    answer:
      "Yes, efficient move out cleaning in Chandler, AZ can make a property more appealing to buyers by removing stains, odors, and visible wear. Sun Valley Cleaners ensures the space is ready for photos, showings, and offers.",
  },
  {
    question: "What areas are prioritized during move out cleaning in Chandler, AZ?",
    answer:
      "Efficient move out cleaning in Chandler, AZ focuses on kitchens, bathrooms, high-touch areas, and hidden corners where dust and buildup accumulate. Sun Valley Cleaners tailors the checklist to meet property condition requirements.",
  },
  {
    question: "How soon before moving should I schedule move out cleaning in Chandler, AZ?",
    answer:
      "It’s best to schedule efficient move out cleaning in Chandler, AZ 2–5 days before the final inspection or listing. Sun Valley Cleaners offers flexible slots to ensure a stress-free move.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Efficient Move Out Cleaning in Chandler, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              offers efficient move out cleaning in Chandler, AZ, balancing
              speed and precision. We handle every room thoroughly while keeping
              your timeline in mind, making your property move-in ready for its
              next occupant.
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
                Why Choose Sun Valley Cleaners for Move Out Cleaning in Chandler, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Speed with thorough results
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Streamlined Cleaning Process:</b> Our team uses an
                    efficient checklist covering kitchens, baths, living areas,
                    and storage spaces. Each task is executed methodically to
                    avoid missed spots, ensuring your property passes inspection
                    without requiring repeat visits.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Odor & Allergen Removal:</b> Move out cleaning in
                    Chandler targets pet dander, lingering cooking smells, and
                    dust buildup from vents to baseboards. This process
                    improves freshness and air quality for the next occupant,
                    adding value to the property handover.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Detailing for High-Impact Areas:</b> We focus on spots
                    that matter most during move-out inspections, including
                    grout lines, fixtures, and appliances. This ensures the
                    property looks polished and ready without adding unnecessary
                    delays.
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
              alt="move out cleaning in Chandler home"
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
                Why Move Out Cleaning Matters in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Clean exits, better impressions
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Smoother Landlord & Buyer Approval:</b> Move out cleaning
                    in Chandler, AZ helps meet cleanliness standards that can
                    prevent disputes over deposits or slowdowns in sales. This
                    level of care leaves a positive impression on those taking
                    possession of the property.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Healthier Environment for New Occupants:</b> Deep move out
                    cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Chandler,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Chandler, AZ
                    </a>{" "}
                    reduces allergens, bacteria, and dust from hidden areas.
                    This provides a healthier living space for incoming tenants
                    or buyers, setting a strong standard for property upkeep.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Maximizing Property Appeal:</b> Clean, polished surfaces
                    and fresh-smelling rooms enhance the propertys perceived
                    value. Our thorough approach helps boost listing potential
                    and ensures move-in readiness from day one.
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
              alt="move out cleaning in Chandler AZ"
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


