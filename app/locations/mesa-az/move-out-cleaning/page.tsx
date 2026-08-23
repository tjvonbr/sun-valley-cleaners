import Image from "next/image";
import FaqSection from "@/components/faq-section";
import AlsoAvailableSection from "@/components/also-available-section";
import icon from "../../../../public/hero.svg";
import femaleCleaner from "../../../../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconCircleCheck } from "@/components/ui/icons";

export const metadata = {
  title: "Trusted Move Out Cleaning in Mesa, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers trusted move out cleaning in Mesa, AZ with detailed service, timely results, and stress-free property transitions. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/mesa-az/move-out-cleaning",
  },
};

const faqs = [
  {
    question: "What does trusted move out cleaning in Mesa, AZ cover?",
    answer:
      "Trusted move out cleaning in Mesa, AZ covers all rooms including kitchens, baths, and high-traffic areas. Sun Valley Cleaners ensures every surface is deep cleaned to pass inspection.",
  },
  {
    question: "Why hire a professional for move out cleaning in Mesa, AZ?",
    answer:
      "Hiring professionals ensures your home is thoroughly cleaned, meeting landlord or buyer expectations. Sun Valley Cleaners provides reliable service tailored to Mesa properties.",
  },
  {
    question: "When should I schedule move out cleaning in Mesa, AZ?",
    answer:
      "It’s best to schedule trusted move out cleaning in Mesa, AZ a few days before your move date. Sun Valley Cleaners offers flexible booking to make the process stress-free.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Trusted Move Out Cleaning in Mesa, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides trusted move out cleaning in Mesa, AZ. Our team works
              efficiently to deep clean every space, ensuring a smooth property
              transition and peace of mind for tenants and landlords alike.
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
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Choose Sun Valley Cleaners for Move Out Cleaning in Mesa, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Detailed cleaning, reliable results
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Complete Property Coverage:</b> Our cleaning checklist
                    addresses kitchens, bathrooms, bedrooms, and storage areas.
                    Every detail is handled with care, ensuring your Mesa
                    property is spotless for inspections or listings.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Improved Indoor Air Quality:</b> Our trusted move out
                    cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Mesa,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Mesa, AZ
                    </a>{" "}
                    targets dust, allergens, and odors from vents and hidden
                    corners. This creates a fresh, healthy environment for new
                    residents while boosting property appeal.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Attention to Detail:</b> We focus on high-impact areas
                    like grout, fixtures, and appliances, leaving the property
                    polished and ready without delays or re-cleaning.
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
              alt="move out cleaning in Mesa home"
              className="bg-background"
            />
          </div>
        </div>
        {/* Benefits SECTION - End */}

        {/* Why SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col-reverse lg:flex-row-reverse items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Move Out Cleaning Matters in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Fresh start, better impressions
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Helps Protect Deposits:</b> Trusted move out cleaning in
                    Mesa, AZ ensures landlords’ cleanliness standards are met,
                    preventing disputes and securing deposits for tenants.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Healthier Living Conditions:</b> Deep cleaning removes
                    dirt, bacteria, and allergens from overlooked areas,
                    ensuring a safe, welcoming home for new occupants.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Boosts Property Marketability:</b> Clean and
                    fresh-smelling homes attract buyers and renters more
                    quickly, helping properties in Mesa stand out in a
                    competitive market.
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
              alt="move out cleaning in Mesa AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Mesa, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Move-out Cleaning"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/move-out-cleaning" },
            { name: "Chandler, AZ", href: "/locations/chandler-az/move-out-cleaning" },
            { name: "Gilbert, AZ", href: "/locations/gilbert-az/move-out-cleaning" },
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
