import Image from "next/image";
import FaqSection from "@/components/faq-section";
import icon from "../../../public/hero.svg";
import femaleCleaner from "../../../public/female-cleaner.svg";
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

export const metadata = {
  title: "Reliable House Cleaning Services in Mesa, AZ | Sun Valley Cleaners",
  description:
    "Reliable house cleaning services in Mesa, AZ by Sun Valley Cleaners. Consistent results, flexible scheduling, and trusted service. Call now!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/locations/mesa-az",
  },
};

const faqs = [
  {
    question: "What areas do your house cleaning services in Mesa, AZ cover?",
    answer:
      "We clean all major living areas including kitchens, bathrooms, bedrooms, and high-traffic zones in Mesa homes, using detailed checklists to ensure consistency.",
  },
  {
    question:
      "Are your cleaning professionals trained and insured in Mesa, AZ?",
    answer:
      "Yes, all our Mesa-based house cleaners are professionally trained, background-checked, and fully insured for your peace of mind.",
  },
  {
    question: "Can I schedule recurring house cleaning services in Mesa, AZ?",
    answer:
      "Absolutely. We offer weekly, biweekly, and monthly plans so Mesa residents can keep their homes clean and comfortable year-round.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Reliable House Cleaning Services in Mesa, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides reliable house cleaning services across Mesa, AZ. Our
              consistent quality and attention to detail make it easy to keep
              your home fresh, safe, and comfortable.
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
                Sun Valley Cleaners: House Cleaning Services in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Trusted cleaning, tailored for you
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Reliable Scheduling:</b> Our Mesa cleaning services run
                    on-time, every time. Whether you are home or away, you can
                    count on punctuality and consistency with every visit.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Complete Room Coverage:</b> We clean top-to-bottom,
                    including under furniture, behind fixtures, and in
                    often-missed areas—ensuring every inch of your Mesa home
                    shines.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Transparent, Flat-Rate Pricing:</b> Our Mesa clients
                    enjoy clear, flat-rate pricing without surprise charges—just
                    reliable service you can trust on any budget.
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
              alt="female cleaner in Mesa home"
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
                Why House Cleaning Services Matter in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Clean living, every season
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Dry Climate Challenges:</b> Mesas dry, dusty environment
                    demands frequent interior cleaning. Regular service helps
                    control allergens and dust buildup across
                    <a
                      href="https://en.wikipedia.org/wiki/Mesa,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      {" "}
                      Mesa, AZ
                    </a>{" "}
                    homes.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Improved Indoor Air Quality:</b> House cleaning in Mesa
                    helps reduce airborne particles from dust and pollen,
                    supporting respiratory health and home hygiene.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Maintaining Clean Spaces Year-Round:</b> From summer heat
                    to monsoon season, keeping your Mesa home clean and
                    guest-ready is easier with a regular cleaning plan.
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
              alt="house cleaning service in Mesa"
              className="bg-background"
            />
          </div>
        </div>

        {/* Why SECTION - End */}

        {/* Services Section - Start */}
        <div className="py-12 px-5 w-full flex flex-col justify-between items-center space-y-8 text-center bg-white">
          <h2 className="text-3xl text-black font-bold">Services Provided</h2>
          <div className="mx-auto grid justify-center gap-12 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-3">
            <ServiceCard
              title="Standard Cleaning"
              description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
            >
              <IconSprayBottle className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Deep Cleaning"
              description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
            >
              <IconOven className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Move-in Cleaning"
              description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
            >
              <IconBoxOpen className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Move-out Cleaning"
              description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
            >
              <IconBox className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Event Cleaning"
              description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
            >
              <IconEvent className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Linen Service"
              description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
            >
              <IconBed className="size-12 text-secondary" />
            </ServiceCard>
          </div>
        </div>
        {/* Services Section - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />

        {/* FAQ SECTION - End */}

        {/* Map SECTION - Start*/}
        <div className="px-8 py-12 w-full bg-white">
          <section id="map" className="bg-white">
            <div className="max-w-md px-6 mx-auto pb-28 sm:max-w-3xl lg:max-w-7xl lg:px-8">
              <div className="flex flex-col justify-center text-center">
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-black">
                  Find Us
                </h2>
                <p className="pb-10 mx-auto mt-5 text-xl text-gray-900 max-w-prose">
                  Sun Valley Cleaners delivers reliable house cleaning services
                  in Mesa, AZ. Our local team proudly serves homes across the
                  city, offering flexible schedules and dependable service
                  designed to keep your home spotless no matter the season.
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425209.90144216334!2d-111.876183!3d33.41777765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba699bc03cc9d%3A0xceb9b7a49f2f7c7d!2sMesa%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1752588561791!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  house cleaning services in mesa, house cleaning near mesa
                </iframe>
              </div>
            </div>
          </section>
        </div>

        {/* Map SECTION - End*/}
      </main>
    </>
  );
}
