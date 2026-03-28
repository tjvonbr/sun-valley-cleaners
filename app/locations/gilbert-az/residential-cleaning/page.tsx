import Image from "next/image";
import FaqSection from "@/components/faq-section";
import AlsoAvailableSection from "@/components/also-available-section";
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
  title: "Comprehensive Residential Cleaning in Gilbert, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides comprehensive residential cleaning in Gilbert, AZ for a spotless, healthy home. Eco-friendly products used. Book today!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/gilbert-az/residential-cleaning",
  },
};

const faqs = [
  {
    question: "What is included in comprehensive residential cleaning in Gilbert, AZ?",
    answer:
      "Comprehensive residential cleaning in Gilbert, AZ includes full dusting, vacuuming, mopping, kitchen and bathroom sanitization, surface polishing, and attention to detail in every room. <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> ensures your entire home receives thorough professional care.",
  },
  {
    question:
      "Can I adjust my residential cleaning plan in Gilbert, AZ?",
    answer:
      "Absolutely! Sun Valley Cleaners offers fully customizable residential cleaning in Gilbert, AZ. You can modify the frequency, focus areas, and specific requests to fit your household&apos;s evolving needs.",
  },
  {
    question:
      "Is residential cleaning in Gilbert, AZ safe for families with allergies?",
    answer:
      "Yes, Sun Valley Cleaners uses hypoallergenic, eco-friendly products for residential cleaning in Gilbert, AZ. Our methods help reduce allergens, dust mites, and airborne particles for healthier indoor living.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Comprehensive Residential Cleaning in Gilbert, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides comprehensive residential cleaning in Gilbert, AZ that
              covers every room and surface in your home. From deep kitchen
              scrubs to bathroom sanitization, we deliver a complete clean using
              safe, eco-friendly products.
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
            alt="comprehensive residential cleaning in Gilbert, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Residential Cleaning in
                Gilbert, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Comprehensive. Careful. Completely Clean.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Complete Home Coverage:</b> Our comprehensive residential
                    cleaning in Gilbert, AZ spans every room from floor to
                    ceiling. We tackle baseboards, ceiling fans, fixtures, and
                    all the details that elevate your home&apos;s cleanliness.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Family-Safe Cleaning Methods:</b> We use only eco-friendly,
                    non-toxic products that are safe for children, pets, and
                    sensitive surfaces. Gilbert families can trust our approach
                    to protect what matters most.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Reliable and Consistent:</b> Our Gilbert cleaning team
                    delivers the same high standard every visit. We follow
                    thorough checklists and quality processes to ensure nothing
                    is ever overlooked.
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
              alt="residential cleaning in Gilbert home"
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
                Why Residential Cleaning Matters in Gilbert, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Comprehensive care for every home
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Healthier Living in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Gilbert, AZ
                    </a>:</b> Gilbert&apos;s desert
                    environment means dust and allergens accumulate rapidly.
                    Comprehensive residential cleaning removes these irritants
                    to promote cleaner air and better respiratory health.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>More Time with Family:</b> Professional residential
                    cleaning frees up hours each week for Gilbert parents and
                    families. Let our team handle the deep cleaning while you
                    focus on what matters most.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Maintain Property Value:</b> Regular residential cleaning
                    prevents wear, staining, and grime buildup on surfaces.
                    Consistent care protects your Gilbert home&apos;s condition
                    and helps preserve its long-term value.
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
              alt="residential cleaning in Gilbert AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Gilbert, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Residential Cleaning"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/residential-cleaning" },
            { name: "Chandler, AZ", href: "/locations/chandler-az/residential-cleaning" },
            { name: "Mesa, AZ", href: "/locations/mesa-az/residential-cleaning" },
          ]}
          relatedServices={[
            { name: "standard cleaning", href: "/services/house-cleaning" },
            { name: "deep cleaning", href: "/services/deep-cleaning" },
            { name: "move-in/move-out cleaning", href: "/services/move-cleaning" },
            { name: "Airbnb cleaning", href: "/services/airbnb-cleaning" },
          ]}
        />
      </main>
    </>
  );
}
