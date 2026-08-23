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
  title: "Premium Airbnb Cleaning in Phoenix, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides premium Airbnb cleaning in Phoenix, AZ with expert care, fast turnaround, and spotless results for hosts. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/phoenix-az/airbnb-cleaning",
  },
};

const faqs = [
  {
    question: "What does Airbnb cleaning in Phoenix, AZ include?",
    answer:
      "Airbnb cleaning in Phoenix, AZ includes bedroom, bathroom, and kitchen sanitization, linen changes, restocking essentials, and detailed inspection to prepare your space for new guests. Sun Valley Cleaners ensures every property looks flawless between stays.",
  },
  {
    question: "Do you offer same-day Airbnb cleaning in Phoenix, AZ?",
    answer:
      "Yes, Sun Valley Cleaners provides same-day and quick-turn Airbnb cleaning in Phoenix, AZ. Our responsive team ensures your property is cleaned and ready on schedule for guest check-ins.",
  },
  {
    question:
      "Why choose Sun Valley Cleaners for Airbnb cleaning in Phoenix, AZ?",
    answer:
      "Sun Valley Cleaners is trusted by local hosts for reliable, top-quality Airbnb cleaning in Phoenix, AZ. We handle everything from deep cleans to quick turnovers—saving you time and ensuring glowing guest reviews.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Premium Airbnb Cleaning in Phoenix, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              offers premium Airbnb cleaning in Phoenix, AZ for hosts who demand
              perfection. From linens to bathrooms, we prepare your property for
              the next guest with hotel-level quality, reliability, and shine.
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
            alt="Airbnb cleaning Phoenix AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-card flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-foreground font-bold">
                Why Choose Sun Valley Cleaners for Airbnb Cleaning in Phoenix,
                AZ?
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Reliable, detailed, and host-approved
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Quick Turnaround Between Guests:</b> Our Phoenix Airbnb
                    cleaning service ensures your property is spotless and
                    photo-ready between bookings. We manage last-minute
                    cleanings efficiently without compromising quality.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Trained & Trustworthy Cleaners:</b> Every member of our
                    cleaning team is background-checked and trained to follow
                    strict Airbnb cleaning standards, ensuring consistent
                    excellence and safety.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Attention to Every Detail:</b> From folded towels to
                    spotless counters, we focus on the details that make guests
                    feel welcome and comfortable in your Airbnb.
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
              alt="Airbnb cleaning services Phoenix AZ"
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
                Why Airbnb Cleaning Matters in Phoenix, AZ
              </h2>
              <p className="text-sm lg:text-lg text-muted-foreground">
                Cleaner stays, happier guests
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Boosts Guest Ratings:</b> Premium Airbnb cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Phoenix, AZ
                    </a>{" "}
                    helps you earn better reviews by creating an immaculate,
                    welcoming space every time. Clean properties attract repeat
                    bookings and more five-star feedback.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Maintains Hygiene & Safety:</b> With disinfection and
                    sanitization protocols, we ensure every guest enjoys a safe,
                    healthy stay free of dust, germs, and allergens.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-foreground font-semibold">
                    <b>Preserves Property Value:</b> Regular professional
                    cleanings prevent wear and tear, protecting surfaces,
                    fixtures, and linens for long-term savings and appeal.
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
              alt="Phoenix Airbnb cleaner"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Airbnb Cleaning"
          areas={[
            { name: "Chandler", href: "/locations/chandler-az/airbnb-cleaning" },
            { name: "Gilbert", href: "/locations/gilbert-az/airbnb-cleaning" },
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
