import Image from "next/image";
import FaqSection from "@/components/faq-section";
import icon from "../../../../public/hero.svg";
import femaleCleaner from "../../../../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconCircleCheck } from "@/components/ui/icons";
import AlsoAvailableSection from "@/components/also-available-section";

export const metadata = {
  title: "Professional Airbnb Cleaning in Gilbert, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers professional Airbnb cleaning in Gilbert, AZ. Reliable service, spotless turnovers, and trusted local cleaners. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/gilbert-az/airbnb-cleaning",
  },
};

const faqs = [
  {
    question: "What’s included in Airbnb cleaning in Gilbert, AZ?",
    answer:
      "Professional Airbnb cleaning in Gilbert, AZ includes deep sanitizing of bedrooms, bathrooms, and kitchens, linen changes, and essential restocking. Sun Valley Cleaners ensures your guests walk into a clean and welcoming home.",
  },
  {
    question:
      "Do you offer flexible scheduling for Airbnb cleaning in Gilbert, AZ?",
    answer:
      "Yes, Sun Valley Cleaners provides flexible scheduling for Airbnb cleaning in Gilbert, AZ. We accommodate same-day turnovers and recurring services to match your booking calendar.",
  },
  {
    question:
      "Why should I choose Sun Valley Cleaners for Airbnb cleaning in Gilbert, AZ?",
    answer:
      "Sun Valley Cleaners is the preferred choice for professional Airbnb cleaning in Gilbert, AZ. We combine local expertise with consistent quality, ensuring spotless results and guest satisfaction after every stay.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        {/* HERO */}
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Professional Airbnb Cleaning in Gilbert, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides professional Airbnb cleaning in Gilbert, AZ. From single
              suites to entire vacation homes, we deliver a seamless cleaning
              experience that ensures every guest enjoys a spotless, refreshing
              stay.
            </p>

            <Link
              href="/book-appointment"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Book a cleaning today!
            </Link>
          </div>
          <Image
            src={icon}
            height="500"
            width="500"
            alt="Airbnb cleaning Gilbert AZ"
          />
        </div>

        {/* BENEFITS SECTION */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Choose Sun Valley Cleaners for Airbnb Cleaning in Gilbert,
                AZ?
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Local experts, spotless stays
              </p>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Comprehensive Cleaning for Every Space:</b> Whether you
                    manage a studio apartment or a luxury vacation home, our
                    Gilbert Airbnb cleaning service ensures spotless kitchens,
                    bathrooms, and living areas after every checkout.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Professional & Dependable Staff:</b> Our trained team is
                    punctual, respectful, and detail-oriented, treating your
                    Airbnb property with the same care as their own home.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>High Guest Satisfaction Rates:</b> Our consistent service
                    quality leads to better reviews and repeat bookings for
                    Gilbert hosts who rely on clean, welcoming environments.
                  </p>
                </div>
              </div>

              <Link
                href="/book-appointment"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Schedule your clean now!
              </Link>
            </div>

            <Image
              src={femaleCleaner}
              height="750"
              width="500"
              alt="Airbnb cleaning services Gilbert AZ"
              className="bg-background"
            />
          </div>
        </div>

        {/* WHY SECTION */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col-reverse lg:flex-row-reverse items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Airbnb Cleaning Matters in Gilbert, AZ
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Consistency, comfort, confidence
              </p>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Enhances Guest Comfort:</b> Professional Airbnb cleaning
                    in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Gilbert, AZ
                    </a>{" "}
                    keeps your rental fresh and hygienic. Guests appreciate the
                    clean presentation, helping you earn glowing reviews and
                    repeat stays.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Prevents Maintenance Issues:</b> Regular professional
                    cleaning prevents damage from spills, dust, and neglected
                    areas—protecting your furniture, flooring, and investment.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Builds Host Credibility:</b> Guests trust consistently
                    clean spaces. With our Airbnb cleaning service, Gilbert
                    hosts maintain five-star reputations and long-term booking
                    success.
                  </p>
                </div>
              </div>

              <Link
                href="/book-appointment"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Book your next cleaning now!
              </Link>
            </div>

            <Image
              src={femaleCleaner}
              height="750"
              width="500"
              alt="Gilbert Airbnb cleaner"
              className="bg-background"
            />
          </div>
        </div>

        {/* FAQ SECTION */}
        <FaqSection faqs={faqs} city="Gilbert, AZ" />

        <AlsoAvailableSection
          serviceName="Airbnb Cleaning"
          areas={[
            { name: "Phoenix", href: "/locations/phoenix-az/airbnb-cleaning" },
            { name: "Chandler", href: "/locations/chandler-az/airbnb-cleaning" },
            { name: "Mesa", href: "/locations/mesa-az/airbnb-cleaning" },
            { name: "Arcadia", href: "/locations/arcadia-az/airbnb-cleaning" },
            { name: "Paradise Valley", href: "/locations/paradise-valley-az/airbnb-cleaning" },
          ]}
          relatedServices={[
            { name: "standard cleaning", href: "/services/house-cleaning" },
            { name: "deep cleaning", href: "/services/deep-cleaning" },
            { name: "move-in/move-out cleaning", href: "/services/move-cleaning" },
          ]}
        />
      </main>
    </>
  );
}
