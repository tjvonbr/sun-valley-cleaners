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
import ServiceCard from "@/components/service-card";
import AlsoAvailableSection from "@/components/also-available-section";

export const metadata = {
  title: "Detailed Deep Cleaning Services in Phoenix, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners offers detailed deep cleaning services in Phoenix, AZ. Perfect for seasonal resets, move-ins, or heavy buildup. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/phoenix-az/deep-cleaning", // relative self URL
  },
};

const faqs = [
  {
    question: "What is included in your deep cleaning services in Phoenix, AZ?",
    answer:
      "Our deep cleaning in Phoenix includes baseboard scrubbing, interior appliances, hard-to-reach surfaces, grout detailing, and full kitchen and bath sanitation.",
  },
  {
    question: "When should I schedule deep cleaning for my Phoenix home?",
    answer:
      "Deep cleaning is ideal for move-ins, seasonal resets, or when it's been more than three months since your last detailed clean in your Phoenix property.",
  },
  {
    question:
      "Is there a difference between standard and deep cleaning in Phoenix, AZ?",
    answer:
      "Yes, deep cleaning goes beyond surface cleaning and targets buildup in overlooked areas like vents, behind furniture, inside appliances, and grout lines.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Detailed Deep Cleaning Services in Phoenix, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides detailed deep cleaning services throughout Phoenix,
              AZ—ideal for move-ins, post-renovation resets, or homes needing
              extra attention to detail.
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
                Phoenix, AZ?
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
                    <b>Appliance & Detail Cleaning:</b> Our deep cleaning in
                    Phoenix includes cleaning inside ovens, refrigerators, and
                    other appliances to remove hidden grime and buildup.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Perfect for Seasonal Resets:</b> Whether its spring
                    cleaning or prepping for guests, our deep cleaning is ideal
                    for refreshing your Phoenix home thoroughly.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Move-In/Move-Out Ready:</b> Deep cleaning services ensure
                    your Phoenix property is spotless whether you are moving in
                    or preparing to sell or rent.
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
              alt="deep cleaning in Phoenix home"
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
                Why Deep Cleaning Services Matter in Phoenix, AZ
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
                    <b>Post-Summer Refresh:</b> After the intense Phoenix
                    summer, deep cleaning removes dust, buildup, and allergens,
                    restoring your homes cleanliness and air quality.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Healthier Indoor Environment:</b> Deep cleaning in
                    <a
                      href="https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      {" "}
                      Phoenix, AZ
                    </a>{" "}
                    helps eliminate bacteria and dust mites in overlooked areas,
                    promoting a healthier home for your family year-round.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Essential Before Major Life Events:</b> Whether you are
                    moving, renovating, or expecting guests, deep cleaning
                    prepares your Phoenix home for every transition.
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
              alt="deep house cleaning in Phoenix AZ"
              className="bg-background"
            />
          </div>
        </div>

        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />

        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Deep Cleaning"
          areas={[
            { name: "Chandler", href: "/locations/chandler-az/deep-cleaning" },
            { name: "Gilbert", href: "/locations/gilbert-az/deep-cleaning" },
            { name: "Mesa", href: "/locations/mesa-az/deep-cleaning" },
            { name: "Arcadia", href: "/locations/arcadia-az/deep-cleaning" },
            { name: "Paradise Valley", href: "/locations/paradise-valley-az/deep-cleaning" },
          ]}
          relatedServices={[
            { name: "standard cleaning", href: "/services/house-cleaning" },
            { name: "move-in/move-out cleaning", href: "/services/move-cleaning" },
            { name: "Airbnb cleaning", href: "/services/airbnb-cleaning" },
          ]}
        />
      </main>
    </>
  );
}
