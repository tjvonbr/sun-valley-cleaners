import Image from "next/image";
import FaqSection from "@/components/faq-section";
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
  title: "Expert Apartment Cleaning in Mesa, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides expert apartment cleaning in Mesa, AZ with skilled professionals and proven techniques. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/mesa-az/apartment-cleaning",
  },
};

const faqs = [
  {
    question: "What makes expert apartment cleaning in Mesa, AZ different?",
    answer:
      "Expert apartment cleaning in Mesa, AZ combines skilled professionals, advanced techniques, and premium products. Sun Valley Cleaners brings years of experience to deliver results that exceed standard cleaning services.",
  },
  {
    question:
      "How experienced is your team for apartment cleaning in Mesa, AZ?",
    answer:
      "Our Mesa apartment cleaning team is highly trained and experienced in handling all types of apartments. Sun Valley Cleaners ensures every cleaner follows professional protocols for consistent, expert-level results.",
  },
  {
    question:
      "Do you offer specialized treatments during apartment cleaning in Mesa, AZ?",
    answer:
      "Yes, <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> offers specialized treatments including stain removal, grout cleaning, and appliance detailing as part of our expert apartment cleaning in Mesa, AZ.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Expert Apartment Cleaning in Mesa, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              Sun Valley Cleaners delivers expert apartment cleaning in Mesa, AZ
              backed by years of professional experience. Our skilled team uses
              proven methods and high-quality products to transform your
              apartment into a pristine, healthy living space you can be proud
              of.
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
            alt="expert apartment cleaning in Mesa, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Apartment Cleaning in
                Mesa, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Skilled. Experienced. Professional.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Trained Cleaning Specialists:</b> Our expert apartment
                    cleaning in Mesa, AZ is performed by professionally trained
                    specialists. Each team member understands the best
                    techniques for different surfaces, materials, and cleaning
                    challenges.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Proven Cleaning Methods:</b> We use industry-tested
                    techniques refined over years of apartment cleaning in Mesa.
                    Our systematic approach ensures consistent, high-quality
                    results that you can depend on every time.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Premium Products for{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Mesa,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Mesa, AZ
                    </a>{" "}Homes:</b> We select professional-grade, eco-friendly
                    cleaning products that are tough on dirt but safe for your
                    family. Our expert knowledge ensures the right product for
                    every surface.
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
              alt="apartment cleaning in Mesa home"
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
                Why Apartment Cleaning Matters in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Expertise makes the difference
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Desert Climate Demands Expertise:</b> Mesa&apos;s unique
                    desert environment creates specific cleaning challenges.
                    Expert apartment cleaning addresses fine dust, hard water
                    stains, and sun damage that require specialized knowledge.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Protects Your Investment:</b> Professional cleaning
                    preserves your apartment&apos;s condition and your belongings.
                    Expert care prevents damage from improper cleaning methods
                    and extends the life of surfaces and fixtures.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Healthier Living Environment:</b> Expert cleaning
                    eliminates allergens, bacteria, and pollutants more
                    effectively than DIY methods. Our professional approach
                    creates a genuinely healthier home for Mesa residents.
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
              alt="apartment cleaning in Mesa AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Mesa, AZ" />
        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
