import Image from "next/image";
import FaqSection from "@/components/faq-section";
import AlsoAvailableSection from "@/components/also-available-section";
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
  title: "Trusted Move Out Cleaning in Phoenix, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides trusted move out cleaning in Phoenix, AZ for spotless handovers and stress-free transitions. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/phoenix-az/move-out-cleaning", // relative self URL
  },
};

const faqs = [
  {
    question: "Why is move out cleaning in Phoenix, AZ important for rental returns?",
    answer:
      "Move out cleaning in Phoenix, AZ can help tenants recover full deposits by ensuring kitchens, bathrooms, and floors meet inspection standards. Sun Valley Cleaners focuses on the details that landlords notice most.",
  },
  {
    question: "How far in advance should I schedule move out cleaning in Phoenix, AZ?",
    answer:
      "It’s best to schedule move out cleaning in Phoenix, AZ at least a week before your final walkthrough to avoid last-minute stress. Sun Valley Cleaners offers flexible booking to fit tight moving timelines.",
  },
  {
    question: "Does move out cleaning in Phoenix, AZ include appliance interiors?",
    answer:
      "Yes, most move out cleaning in Phoenix, AZ includes ovens, refrigerators, microwaves, and more. Sun Valley Cleaners ensures these high-use areas look spotless for the next resident.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Trusted Move Out Cleaning in Phoenix, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              offers trusted move out cleaning in Phoenix, AZ to ensure your
              property is spotless for its next occupant. From deep scrubbing to
              detailed finishing touches, we help make your transition smooth
              and stress-free.
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
                Why Choose Sun Valley Cleaners for Move Out Cleaning in Phoenix, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Precision. Reliability. Shine.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Comprehensive Surface Reset:</b> Our move out cleaning in
                    Phoenix, AZ includes kitchens, bathrooms, living areas, and
                    even less obvious zones like behind appliances and along
                    trim. This ensures every part of the property is cleaned to
                    an inspection-ready standard, saving you from rechecks or
                    failed walkthroughs.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Odor & Stain Removal:</b> We address lingering smells
                    from cooking, pets, and daily use by using targeted cleaning
                    solutions that neutralize odors at the source. Stubborn
                    stains on carpets, tile grout, and countertops are lifted
                    effectively, leaving the space fresher and more inviting for
                    the next resident.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Stress-Free Moving Support:</b> By managing the cleaning
                    portion of your move, we allow you to focus on packing,
                    transport, and setting up your new home. Our structured
                    cleaning checklist and flexible scheduling reduce last-minute
                    chaos so you can leave with confidence.
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
              alt="move out cleaning in Phoenix home"
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
                Why Move Out Cleaning Matters in Phoenix, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Fresh starts begin here
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Meeting Landlord & Buyer Expectations:</b> Move out
                    cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Phoenix, AZ
                    </a>{" "}
                    ensures every room meets or exceeds cleanliness
                    requirements. From sparkling countertops to spotless floors,
                    this can help avoid deductions, speed up closings, and
                    create an excellent final impression on those taking over
                    the property.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Time Savings During Busy Moves:</b> Coordinating a move is
                    time-consuming. Our professional move out cleaning service
                    in Phoenix handles every surface, freeing hours in your
                    schedule to focus on logistics, travel, and setting up your
                    new home without the stress of last-minute scrubbing.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Preserving Property Value:</b> Whether selling or renting,
                    presenting a spotless property increases its appeal and can
                    help secure better offers or tenants faster. We focus on
                    detail, from polishing fixtures to cleaning hard-to-reach
                    spots, to show the space at its absolute best.
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
              alt="move out cleaning in Phoenix AZ"
              className="bg-background"
            />
          </div>
        </div>

        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />

        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Move-out Cleaning"
          areas={[
            { name: "Chandler, AZ", href: "/locations/chandler-az/move-out-cleaning" },
            { name: "Gilbert, AZ", href: "/locations/gilbert-az/move-out-cleaning" },
            { name: "Mesa, AZ", href: "/locations/mesa-az/move-out-cleaning" },
            { name: "Arcadia, AZ", href: "/locations/arcadia-az/move-in-move-out-cleaning" },
            { name: "Paradise Valley, AZ", href: "/locations/paradise-valley-az/move-in-move-out-cleaning" },
          ]}
          relatedServices={[
            { name: "standard cleaning", href: "/services/house-cleaning" },
            { name: "deep cleaning", href: "/services/deep-cleaning" },
            { name: "Airbnb cleaning", href: "/services/airbnb-cleaning" },
          ]}
        />
      </main>
    </>
  );
}

