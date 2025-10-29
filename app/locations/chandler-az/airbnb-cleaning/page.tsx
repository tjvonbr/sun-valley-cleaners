import Image from "next/image";
import FaqSection from "@/components/faq-section";
import icon from "../../../../public/hero.svg";
import femaleCleaner from "../../../../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconCircleCheck } from "@/components/ui/icons";

export const metadata = {
  title: "Reliable Airbnb Cleaning in Chandler, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides reliable Airbnb cleaning in Chandler, AZ. Fast turnovers, spotless results, and trusted service for local hosts. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/chandler-az/airbnb-cleaning",
  },
};

const faqs = [
  {
    question: "What’s included in Airbnb cleaning in Chandler, AZ?",
    answer:
      "Airbnb cleaning in Chandler, AZ includes bedroom, bathroom, and kitchen sanitizing, linen replacement, restocking essentials, and full surface disinfection. Sun Valley Cleaners ensures your property is guest-ready every time.",
  },
  {
    question: "Do you provide same-day Airbnb cleaning in Chandler, AZ?",
    answer:
      "Yes, Sun Valley Cleaners offers same-day and emergency Airbnb cleaning in Chandler, AZ. Our rapid-response crews keep your turnover schedule on track without sacrificing quality.",
  },
  {
    question:
      "Why choose Sun Valley Cleaners for Airbnb cleaning in Chandler, AZ?",
    answer:
      "With reliable communication, trained professionals, and consistent results, Sun Valley Cleaners is the trusted partner for Airbnb cleaning in Chandler, AZ. We help hosts maintain five-star standards year-round.",
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
              Reliable Airbnb Cleaning in Chandler, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides reliable Airbnb cleaning in Chandler, AZ. From deep
              sanitizing to quick turnovers, our experienced cleaners deliver
              spotless spaces that keep your guests happy and your ratings high.
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
            alt="Airbnb cleaning Chandler AZ"
          />
        </div>

        {/* BENEFITS SECTION */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Airbnb Cleaning in Chandler,
                AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Trusted service, spotless stays
              </p>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-black font-semibold">
                    <b>Dependable Scheduling:</b> We coordinate cleanings around
                    your guest calendar to ensure timely turnovers and seamless
                    transitions between bookings—no delays, no stress.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-black font-semibold">
                    <b>Trained Local Professionals:</b> Each of our
                    Chandler-based cleaners is vetted and trained to follow
                    detailed Airbnb protocols for hygiene, presentation, and
                    consistency.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-black font-semibold">
                    <b>Flexible Cleaning Packages:</b> Choose from one-time,
                    weekly, or after-checkout cleaning options tailored to your
                    property’s schedule and guest turnover frequency.
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
              alt="Airbnb cleaning services Chandler AZ"
              className="bg-background"
            />
          </div>
        </div>

        {/* WHY SECTION */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col-reverse lg:flex-row-reverse items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Airbnb Cleaning Matters in Chandler, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Cleaner spaces, better reviews
              </p>

              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-black font-semibold">
                    <b>Improves Guest Experience:</b> Reliable Airbnb cleaning
                    in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Chandler,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Chandler, AZ
                    </a>{" "}
                    ensures a consistently positive first impression. Clean,
                    inviting environments encourage repeat bookings and
                    five-star feedback.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-black font-semibold">
                    <b>Supports Faster Turnovers:</b> Our process streamlines
                    check-out to check-in transitions, allowing you to accept
                    more bookings while maintaining top cleanliness standards.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <IconCircleCheck className="w-5 h-5 text-secondary mt-1" />
                  <p className="text-lg text-black font-semibold">
                    <b>Prevents Wear and Tear:</b> Regular professional cleaning
                    preserves furniture, flooring, and fixtures, extending your
                    property’s lifespan and maintaining long-term value.
                  </p>
                </div>
              </div>

              <Link
                href="/book-appointment"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Book your next cleaning!
              </Link>
            </div>

            <Image
              src={femaleCleaner}
              height="750"
              width="500"
              alt="Chandler Airbnb cleaner"
              className="bg-background"
            />
          </div>
        </div>

        {/* FAQ SECTION */}
        <FaqSection faqs={faqs} city="Chandler, AZ" />
      </main>
    </>
  );
}
