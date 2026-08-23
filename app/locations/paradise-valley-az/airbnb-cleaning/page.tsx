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
  title: "Trusted Airbnb Cleaning in Paradise Valley, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides trusted Airbnb cleaning in Paradise Valley, AZ. Reliable, detail-oriented service designed for exceptional guest experiences. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/paradise-valley-az/airbnb-cleaning",
  },
};

const faqs = [
  {
    question: "What services are included in Airbnb cleaning in Paradise Valley, AZ?",
    answer:
      "Airbnb cleaning in Paradise Valley, AZ includes full property sanitization, linen changes, bathroom and kitchen cleaning, and essential restocking. Sun Valley Cleaners prepares your rental for a spotless, guest-ready experience.",
  },
  {
    question: "Do you handle quick-turn Airbnb cleaning in Paradise Valley, AZ?",
    answer:
      "Yes, Sun Valley Cleaners provides quick-turn Airbnb cleaning in Paradise Valley, AZ. We handle same-day turnovers to keep your rental ready for back-to-back bookings.",
  },
  {
    question: "Why choose Sun Valley Cleaners for Airbnb cleaning in Paradise Valley, AZ?",
    answer:
      "Sun Valley Cleaners is the trusted partner for Airbnb cleaning in Paradise Valley, AZ. With thorough attention to detail, punctual service, and consistent results, we help hosts maintain top ratings and happy guests.",
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
              Trusted Airbnb Cleaning in Paradise Valley, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              offers trusted Airbnb cleaning in Paradise Valley, AZ for homeowners and
              property managers. Our team delivers consistent, top-quality
              results that impress guests and simplify turnovers for every stay.
            </p>

            <Link
              href="/book-appointment"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Book your cleaning today!
            </Link>
          </div>
          <Image
            src={icon}
            height="500"
            width="500"
            alt="Airbnb cleaning Paradise Valley AZ"
          />
        </div>

        {/* BENEFITS SECTION */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Choose Sun Valley Cleaners for Airbnb Cleaning in Paradise Valley, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Reliable, thorough, and locally trusted
              </p>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Tailored Services for Every Rental:</b> Our Paradise Valley Airbnb
                    cleaning adapts to your property type—whether it’s a cozy
                    guest suite or full home—to ensure every surface meets
                    professional hospitality standards.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Consistent Results You Can Rely On:</b> Our cleaning
                    specialists arrive on time, follow precise checklists, and
                    deliver pristine results that consistently exceed host and
                    guest expectations.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Flexible Cleaning Schedules:</b> We accommodate your
                    booking calendar with same-day and scheduled Airbnb cleaning
                    to keep your Paradise Valley property always guest-ready.
                  </p>
                </div>
              </div>

              <Link
                href="/book-appointment"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Schedule a cleaning now!
              </Link>
            </div>

            <Image
              src={femaleCleaner}
              height="750"
              width="500"
              alt="Airbnb cleaning services Paradise Valley AZ"
              className="bg-background"
            />
          </div>
        </div>

        {/* WHY SECTION */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col-reverse lg:flex-row-reverse items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Airbnb Cleaning Matters in Paradise Valley, AZ
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Cleaner homes, happier guests
              </p>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Boosts Guest Ratings:</b> Trusted Airbnb cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Paradise_Valley,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Paradise Valley, AZ
                    </a>{" "}
                    helps ensure spotless, comfortable stays for every visitor,
                    encouraging better reviews and consistent bookings.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Maintains Property Value:</b> Routine professional
                    cleaning preserves flooring, furniture, and fixtures while
                    extending the life of your property investment.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-foreground font-semibold">
                    <b>Creates a Lasting Impression:</b> Guests remember
                    spotless, well-kept spaces. With our Paradise Valley Airbnb cleaning,
                    you’ll leave every visitor impressed and eager to return.
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
              alt="Paradise Valley Airbnb cleaner"
              className="bg-background"
            />
          </div>
        </div>

        {/* FAQ SECTION */}
        <FaqSection faqs={faqs} city="Paradise Valley, AZ" />

        <AlsoAvailableSection
          serviceName="Airbnb Cleaning"
          areas={[
            { name: "Phoenix", href: "/locations/phoenix-az/airbnb-cleaning" },
            { name: "Chandler", href: "/locations/chandler-az/airbnb-cleaning" },
            { name: "Gilbert", href: "/locations/gilbert-az/airbnb-cleaning" },
            { name: "Mesa", href: "/locations/mesa-az/airbnb-cleaning" },
            { name: "Arcadia", href: "/locations/arcadia-az/airbnb-cleaning" },
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
