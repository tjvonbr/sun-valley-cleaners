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
  title: "#1 House Cleaning Service in Gilbert, AZ | Sun Valley Cleaners",
  description:
    "Looking for reliable house cleaning in Gilbert? Sun Valley Cleaners offers professional house cleaning services. Get a free quote today!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/locations/gilbert-az",
  },
};

const faqs = [
  {
    question:
      "What makes your house cleaning service in Gilbert, AZ stand out?",
    answer:
      "Our Gilbert, AZ house cleaning service stand out through consistent attention to detail, eco-friendly products, and a satisfaction guarantee backed by trained professionals.",
  },
  {
    question: "How can regular house cleaning benefit my Gilbert home?",
    answer:
      "Routine house cleaning in Gilbert improves air quality, reduces allergens, and protects surfaces from dust and buildup—especially in high-traffic areas and dry conditions.",
  },
  {
    question:
      "Do you offer flexible scheduling for house cleaning in Gilbert, AZ?",
    answer:
      "Yes, we offer weekly, biweekly, monthly, and one-time options for all Gilbert homeowners to fit every lifestyle and cleaning need.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Trusted House Cleaning Service in Gilbert, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              proudly delivers trusted house cleaning service throughout
              Gilbert, AZ. We provide thorough, on-time cleanings designed to
              keep your home fresh, healthy, and stress-free.
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
                Why choose Sun Valley Cleaners for House Cleaning Service in
                Gilbert, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Reliable care for every home
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Custom Cleaning Plans:</b> We offer personalized services
                    tailored to the layout and needs of your home in Gilbert,
                    AZ. Whether its weekly or monthly, we adapt to you.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Respectful, Trained Staff:</b> Our friendly professionals
                    arrive on time and respect your space while delivering a
                    clean that exceeds expectations every visit.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Locally Rooted Knowledge:</b> Our team understands the
                    cleaning needs specific to
                    <a
                      href="https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      {" "}
                      Gilbert, AZ
                    </a>
                    , from seasonal dust to family-oriented homes—giving you
                    top-tier local service.
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
              alt="female cleaner in Gilbert home"
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
                Why House Cleaning Service Matter in Gilbert, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Clean space, clear peace
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Dust Control for Desert Living:</b> Gilberts dry air and
                    desert environment mean more dust indoors. Regular house
                    cleaning keeps surfaces clean and indoor air healthier.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Protecting Busy Family Homes:</b> With many family
                    households in Gilbert, regular cleaning keeps high-traffic
                    areas sanitary and organized, reducing stress and clutter.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Long-Term Home Care:</b> Routine house cleaning in
                    Gilbert, AZ protects your homes value by preventing grime,
                    mildew, and wear on floors, counters, and fixtures.
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
              alt="house cleaner working in Gilbert home"
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
              title="Apartment Cleaning"
              description="Our apartment cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/gilbert-az/apartment-cleaning"
            >
              <IconSprayBottle className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Deep Cleaning"
              description="Our standard cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/gilbert-az/deep-cleaning"
            >
              <IconOven className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Move-in Cleaning"
              description="Our move in cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/gilbert-az/move-in-cleaning"
            >
              <IconBoxOpen className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Move-out Cleaning"
              description="Our move out cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/gilbert-az/move-out-cleaning"
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
              title="Commercial Service"
              description="Our standard cleaning package includes dusting,vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/gilbert-az/commercial-cleaning"
            >
              <IconBed className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Airbnb Cleaning Service"
              description="Our airbnb cleaning package includes dusting, vacuuming, sweeping, and mopping of common areas, plus a thorough cleaning and sanitizing of your kitchen and bathrooms. Keep your home fresh and tidy with our regular maintenance service!"
              link="/locations/gilbert-az/airbnb-cleaning"
            >
              <IconBed className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Post Construction Cleaning"
              description="Our post construction cleaning package removes debris, dust, and residue from your newly built or renovated space. We ensure every surface is spotless and move-in ready!"
              link="/locations/gilbert-az/post-construction-cleaning"
            >
              <IconSprayBottle className="size-12 text-secondary" />
            </ServiceCard>
            <ServiceCard
              title="Housekeeping Services"
              description="Our housekeeping services provide regular cleaning to maintain your home's cleanliness and comfort. Flexible scheduling and dependable results every visit!"
              link="/locations/gilbert-az/housekeeping-services"
            >
              <IconSprayBottle className="size-12 text-secondary" />
            </ServiceCard>
          </div>
        </div>
        {/* Services Section - End */}

        {/* Service Links */}
        <div className="py-8 px-5 w-full flex flex-col items-center text-center bg-white">
          <h2 className="text-3xl text-black font-bold mb-4">Learn More About Our Services</h2>
          <p className="max-w-2xl text-slate-500">
            Explore our full range of cleaning services:{" "}
            <Link href="/services/house-cleaning" className="underline text-secondary">Standard Cleaning</Link>,{" "}
            <Link href="/services/deep-cleaning" className="underline text-secondary">Deep Cleaning</Link>,{" "}
            <Link href="/services/move-cleaning" className="underline text-secondary">Move-in/Move-out Cleaning</Link>, and{" "}
            <Link href="/services/airbnb-cleaning" className="underline text-secondary">Airbnb Cleaning</Link>.{" "}
            View our <Link href="/cleaning-checklist" className="underline text-secondary">cleaning checklist</Link> to see what each service includes.
          </p>
        </div>
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
                  Sun Valley Cleaners is proud to offer trusted house cleaning
                  services in Gilbert, AZ. Centrally located, we efficiently
                  serve neighborhoods across Gilbert with personalized,
                  professional service and flexible scheduling for homes of all
                  sizes.
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425279.17426632756!2d-111.86322675!3d33.337930449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872baebb9f383b63%3A0x19dffb61e3ea078d!2sGilbert%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1752584141783!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                  house cleaning service in gilbert, house cleaning near
                  gilbert
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
