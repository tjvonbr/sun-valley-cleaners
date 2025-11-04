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
  title: "Professional Move In Cleaning in Phoenix, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides professional move in cleaning in Phoenix, AZ for spotless homes and fresh beginnings. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/phoenix-az/move-in-cleaning",
  },
};

const faqs = [
  {
    question: "What does professional move in cleaning in Phoenix, AZ include?",
    answer:
      "Professional move in cleaning in Phoenix, AZ includes deep sanitization of kitchens, bathrooms, and living areas before you settle in. Sun Valley Cleaners ensures every surface, corner, and appliance is ready for immediate use.",
  },
  {
    question: "When should I schedule my move in cleaning in Phoenix, AZ?",
    answer:
      "It’s best to book move in cleaning in Phoenix, AZ a few days before your belongings arrive. Sun Valley Cleaners offers flexible scheduling to ensure your new home is perfectly prepared for your move.",
  },
  {
    question:
      "Are eco-friendly products used during move in cleaning in Phoenix, AZ?",
    answer:
      "Yes, Sun Valley Cleaners uses eco-friendly cleaning products during move in cleaning in Phoenix, AZ to ensure safe, chemical-free results for families, children, and pets.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Professional Move In Cleaning in Phoenix, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              offers professional move in cleaning in Phoenix, AZ designed to
              make your home feel truly new. From disinfecting kitchens and
              bathrooms to detailed dusting and floor treatments, we handle
              every space so you can unpack with confidence and comfort.
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
            alt="professional move in cleaning in Phoenix, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Move In Cleaning in Phoenix,
                AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Fresh. Detailed. Reliable.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Deep Sanitization for Safe Living:</b> Our move in
                    cleaning in Phoenix, AZ includes detailed disinfection of
                    all touchpoints, counters, fixtures, and appliances. We make
                    sure your new space is hygienically clean and ready for your
                    family’s arrival.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Attention to Every Corner:</b> From light switches to
                    baseboards, we clean areas often missed by standard
                    cleaning. Our Phoenix team takes pride in precision to make
                    your move in cleaning feel effortless and complete.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Stress-Free Service Experience:</b> We coordinate
                    directly with property owners or realtors when needed,
                    ensuring everything is spotless before you move in. Our
                    reliable process saves you time and gives you total peace of
                    mind.
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
              alt="move in cleaning in Phoenix home"
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
                Why Move In Cleaning Matters in Phoenix, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Begin clean, live better
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Health and Hygiene:</b> Move in cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Phoenix, AZ
                    </a>{" "}
                    ensures dust, allergens, and bacteria from prior occupants
                    are completely removed. A clean start helps reduce allergy
                    triggers and improves indoor air quality immediately.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Ready-to-Unpack Confidence:</b> A freshly cleaned home
                    gives peace of mind during your move. Our professional move
                    in cleaning makes every surface shine, so unpacking feels
                    organized and pleasant from the first moment.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Long-Term Maintenance Benefits:</b> A deep clean before
                    settling in protects finishes and fixtures. It also helps
                    identify maintenance needs early, preserving property value
                    and ensuring comfort for years to come.
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
              alt="move in cleaning in Phoenix AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />
        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
