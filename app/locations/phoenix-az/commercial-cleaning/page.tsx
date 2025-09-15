import Image from "next/image";
import FaqSection from "@/components/faq-section";
import icon from "../../../../public/hero.svg";
import femaleCleaner from "../../../../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconCircleCheck } from "@/components/ui/icons";

export const metadata = {
  title: "Professional Commercial Cleaning in Phoenix, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners delivers professional commercial cleaning in Phoenix, AZ with reliable service, flexible scheduling, and spotless results. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/phoenix-az/commercial-cleaning",
  },
};

const faqs = [
  {
    question: "What does professional commercial cleaning in Phoenix, AZ include?",
    answer:
      "Professional commercial cleaning in Phoenix, AZ covers offices, retail spaces, and industrial facilities. Sun Valley Cleaners customizes services to fit your property’s size and needs.",
  },
  {
    question: "Why choose Sun Valley Cleaners for commercial cleaning in Phoenix, AZ?",
    answer:
      "We provide consistent, high-quality service with flexible scheduling and industry-grade equipment. Sun Valley Cleaners ensures clean, safe, and welcoming environments for your workplace.",
  },
  {
    question: "Do you offer recurring commercial cleaning in Phoenix, AZ?",
    answer:
      "Yes, Sun Valley Cleaners offers recurring and one-time commercial cleaning in Phoenix, AZ. Our flexible packages are designed to support ongoing cleanliness and long-term value.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Professional Commercial Cleaning in Phoenix, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides professional commercial cleaning in Phoenix, AZ. From
              offices to retail spaces, we deliver consistent, reliable service
              that ensures every corner is spotless and ready for business.
            </p>

            <Link
              href="/book-appointment"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Book an appointment today!
            </Link>
          </div>
          <Image src={icon} height="500" width="500" alt="commercial cleaning" />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Commercial Cleaning in Phoenix, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Reliable service, spotless results
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Customizable Cleaning Plans:</b> We tailor our commercial
                    cleaning to fit offices, retail spaces, and medical
                    facilities. Our plans adapt to your business size and
                    schedule, ensuring minimal disruption and maximum impact.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Flexible Scheduling Options:</b> Our team works around your
                    business hours, providing daily, weekly, or monthly cleaning
                    services that keep your property looking its best without
                    interfering with operations.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>High-Standard Practices:</b> Using eco-friendly products
                    and industry-grade equipment, we ensure every cleaning meets
                    health and safety standards while maintaining a spotless
                    environment for staff and visitors.
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
              alt="commercial cleaning in Phoenix office"
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
                Why Commercial Cleaning Matters in Phoenix, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Cleaner workplaces, stronger impressions
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Enhanced Workplace Health:</b> Professional commercial
                    cleaning in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Phoenix, AZ
                    </a>{" "}
                    reduces dust, bacteria, and allergens in high-traffic areas.
                    This creates a healthier environment for employees and
                    visitors, lowering sick days and improving productivity.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Positive First Impressions:</b> A clean, well-maintained
                    property builds trust with clients, customers, and partners,
                    reflecting professionalism and attention to detail.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Long-Term Asset Protection:</b> Regular commercial
                    cleaning prevents buildup that can damage flooring,
                    furniture, and equipment, extending the life of your
                    business assets.
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
              alt="commercial cleaning Phoenix AZ"
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
