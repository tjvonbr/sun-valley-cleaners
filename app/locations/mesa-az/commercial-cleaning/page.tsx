import Image from "next/image";
import FaqSection from "@/components/faq-section";
import icon from "../../../../public/hero.svg";
import femaleCleaner from "../../../../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconCircleCheck } from "@/components/ui/icons";

export const metadata = {
  title: "Affordable Commercial Cleaning in Mesa, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides affordable commercial cleaning in Mesa, AZ with flexible packages, reliable service, and spotless results. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/mesa-az/commercial-cleaning",
  },
};

const faqs = [
  {
    question: "What does affordable commercial cleaning in Mesa, AZ include?",
    answer:
      "Affordable commercial cleaning in Mesa, AZ includes offices, retail stores, and medical facilities. Sun Valley Cleaners offers services tailored to your schedule and budget.",
  },
  {
    question:
      "Why choose Sun Valley Cleaners for commercial cleaning in Mesa, AZ?",
    answer:
      "We combine affordability with high-quality cleaning standards. Sun Valley Cleaners ensures clean, healthy spaces that support employee well-being and customer confidence.",
  },
  {
    question:
      "Do you provide eco-friendly cleaning for commercial spaces in Mesa, AZ?",
    answer:
      "Yes, Sun Valley Cleaners uses eco-friendly products and safe practices in Mesa, AZ to deliver effective results while protecting the environment.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Affordable Commercial Cleaning in Mesa, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides affordable commercial cleaning in Mesa, AZ. We offer
              flexible packages designed to keep your property clean and
              professional without stretching your budget.
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
            alt="commercial cleaning"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Commercial Cleaning in Mesa,
                AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Cost-effective cleaning, professional results
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Tailored Cleaning Packages:</b> We design service plans
                    to match your property size and cleaning needs, helping you
                    maintain cleanliness without overspending.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Reliable Service Standards:</b> Our affordable commercial
                    cleaning in Mesa, AZ ensures consistency across every visit.
                    We keep offices, lobbies, and shared spaces clean, helping
                    your business maintain professionalism.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Attention to Detail:</b> From floors to fixtures, we
                    ensure no detail is overlooked, giving your property a
                    polished appearance that employees and clients notice.
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
              alt="commercial cleaning in Mesa, AZ office"
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
                Why Commercial Cleaning Matters in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Cleaner spaces, lasting impressions
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Improved Workplace Hygiene:</b> Affordable commercial
                    cleaning in Mesa, AZ reduces dust, bacteria, and allergens
                    in shared spaces. This helps create healthier environments
                    and improves employee satisfaction.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Positive Client Impressions:</b> Clean offices and
                    facilities send a strong message of professionalism. In{" "}
                    <a
                      href="https://www.mesaaz.gov/Home"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Mesa, AZ
                    </a>
                    , maintaining spotless workspaces enhances credibility and
                    customer trust.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Protecting Business Assets:</b> Regular commercial
                    cleaning extends the life of flooring, furniture, and
                    fixtures, reducing replacement costs and preserving property
                    value.
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
              alt="commercial cleaning Mesa, AZ"
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
