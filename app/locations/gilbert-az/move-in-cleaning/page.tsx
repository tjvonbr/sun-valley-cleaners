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
  title: "Premium Move In Cleaning in Gilbert, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers premium move in cleaning in Gilbert, AZ with meticulous attention and eco-safe methods. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/gilbert-az/move-in-cleaning",
  },
};

const faqs = [
  {
    question: "What makes premium move in cleaning in Gilbert, AZ different?",
    answer:
      "Premium move in cleaning in Gilbert, AZ goes beyond standard cleaning — it includes deep sanitization, detailed dusting, and eco-friendly finishes. Sun Valley Cleaners ensures every inch of your new home sparkles from top to bottom.",
  },
  {
    question: "Do you offer same-day move in cleaning in Gilbert, AZ?",
    answer:
      "Yes! Sun Valley Cleaners offers same-day and next-day scheduling for move in cleaning in Gilbert, AZ, so your new home is ready when you need it most.",
  },
  {
    question:
      "Are your cleaning products safe for kids and pets during move in cleaning in Gilbert, AZ?",
    answer:
      "Absolutely. Sun Valley Cleaners uses eco-friendly and hypoallergenic cleaning solutions during move in cleaning in Gilbert, AZ, ensuring your family and pets are safe in a freshly sanitized environment.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Premium Move In Cleaning in Gilbert, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides premium move in cleaning in Gilbert, AZ for homeowners
              who expect spotless perfection. We meticulously sanitize kitchens,
              bathrooms, and living spaces, ensuring every inch feels fresh,
              safe, and ready for your family’s arrival.
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
            alt="premium move in cleaning in Gilbert, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Move In Cleaning in Gilbert,
                AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Thorough. Safe. Immaculate.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Deep Disinfection for Health Protection:</b> Our move in
                    cleaning in Gilbert, AZ removes unseen contaminants and
                    allergens. Every surface is cleaned and sanitized with
                    professional-grade, eco-safe products to ensure your home
                    feels fresh and healthy.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Luxury-Level Detailing:</b> We treat your new Gilbert
                    home with the care of a premium service. From baseboards to
                    ceiling fans, every inch is handled with precision and
                    attention to visual appeal.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Eco-Friendly and Odor-Free Results:</b> Our cleaning
                    methods prioritize health and sustainability. You’ll enjoy a
                    sparkling, chemical-free environment with air that smells
                    clean—not harsh.
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
              alt="move in cleaning in Gilbert home"
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
                Why Move In Cleaning Matters in Gilbert, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Clean homes start fresh lives
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Eliminates Hidden Germs and Allergens:</b> Move in
                    cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Gilbert, AZ
                    </a>{" "}
                    removes dust and residues that accumulate during property
                    turnover. This creates a cleaner environment for families
                    and reduces allergy and respiratory concerns.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Improves Property Longevity:</b> Professional cleaning
                    prevents buildup and staining on fixtures and floors,
                    helping maintain the home’s appearance and extending the
                    lifespan of finishes.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Sets the Tone for New Beginnings:</b> A clean home
                    creates a positive emotional start. Professional move in
                    cleaning helps new residents feel settled, comfortable, and
                    proud from day one.
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
              alt="move in cleaning in Gilbert AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Gilbert, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Move-in Cleaning"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/move-in-cleaning" },
            { name: "Chandler, AZ", href: "/locations/chandler-az/move-in-cleaning" },
            { name: "Mesa, AZ", href: "/locations/mesa-az/move-in-cleaning" },
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
