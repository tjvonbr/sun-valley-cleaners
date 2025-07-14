"use client";

import Image from "next/image";
import icon from "../public/hero.svg";
import femaleCleaner from "../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  IconBed,
  IconBox,
  IconBoxOpen,
  IconCheck,
  IconCircleCheck,
  IconEvent,
  IconOven,
  IconRibbon,
  IconSprayBottle,
} from "@/components/ui/icons";
import CommitmentCard from "@/components/feature-card";
import ServiceCard from "@/components/service-card";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          #1 House Cleaning Services in Scottsdale, AZ | Sun Valley Cleaners
        </title>
        <meta
          name="description"
          content="Sun Valley Cleaners offers #1 house cleaning services in Scottsdale, AZ. Reliable, detailed, and satisfaction-guaranteed for your home. Call now!"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              #1 House Cleaning Services in Scottsdale, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              We stand by the quality of our work at Sun Valley Cleaners. If for
              any reason you&apos;re not satisfied with our cleaning service,
              we&apos;ll return and make it right at no cost to you!
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
        <div className="px-16 py-12 w-full flex flex-col md:flex-row justify-center items-center  bg-secondary text-white">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row justify-between  w-full">
            <CommitmentCard
              title="100% Guarantee"
              description="We stand by our work with a 100% guarantee, ensuring that every clean meets your highest expectations."
            >
              <IconCheck className="size-16" />
            </CommitmentCard>
            <CommitmentCard
              title="Best In Class Service"
              description="Our commitment to best-in-class service means we deliver meticulous, top-tier cleaning with a personal touch."
            >
              <IconRibbon className="size-16" />
            </CommitmentCard>
            <CommitmentCard
              title="Competitive Pricing"
              description="Competitive pricing that ensures you receive outstanding value and quality, making a pristine home accessible to everyone."
            >
              <IconCheck className="size-16" />
            </CommitmentCard>
          </div>
        </div>
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Commited to quality and customer satisfaction
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                We provide a range of services to meet each of your house
                cleaning needs. Whatever problem you&apos;re facing, we have a
                solution!
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center">
                  <IconCircleCheck className="size-10 mr-2 text-secondary" />
                  <p className="text-lg text-black font-semibold">
                    100% Satisfaction Guarantee
                  </p>
                </div>
                <div className="flex items-center">
                  <IconCircleCheck className="size-10 mr-2 text-secondary" />
                  <p className="text-lg text-black font-semibold">
                    Highly professional staff
                  </p>
                </div>
                <div className="flex items-center">
                  <IconCircleCheck className="size-10 mr-2 text-secondary" />
                  <p className="text-lg text-black font-semibold">
                    Eco-friendly cleaning products
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
              alt="hello"
              className="bg-background"
            />
          </div>
        </div>

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

        {/* FAQ SECTION - Start */}
        <div className="px-8 py-12 w-full bg-white">
          <section
            id="faq"
            className="bg-white"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="max-w-md px-6 mx-auto pb-28 sm:max-w-3xl lg:max-w-7xl lg:px-8">
              <div className="flex flex-col justify-center text-center">
                <p className="text-lg font-semibold text-custom">FAQs</p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-black">
                  Frequently Asked Questions
                </h2>
                <p className="pb-10 mx-auto mt-5 text-xl text-gray-900 max-w-prose">
                  Answering your questions about house cleaning in Scottsdale.
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/20">
                  {[
                    {
                      question:
                        "What does a standard house cleaning service in Scottsdale, AZ include?",
                      answer:
                        "A standard house cleaning in Scottsdale, AZ typically includes dusting, sweeping, vacuuming, mopping, sanitizing kitchen and bathroom surfaces, and cleaning common areas to keep your home fresh and well-maintained.",
                    },
                    {
                      question:
                        "Why hire professional house cleaning services in Scottsdale, AZ?",
                      answer:
                        "Hiring professional house cleaning services in Scottsdale, AZ ensures a healthier home environment, saves time, and guarantees thorough cleaning using proper tools and products tailored to your specific needs.",
                    },
                    {
                      question:
                        "How do I choose the #1 house cleaning service in Scottsdale, AZ?",
                      answer:
                        "To find the #1 house cleaning service in Scottsdale, AZ, look for proven experience, client reviews, flexible scheduling, eco-friendly options, and a satisfaction guarantee for reliable and high-quality results.",
                    },
                  ].map((faq, idx) => (
                    <div className="pt-6" key={idx} data-frequent-question>
                      <dt>
                        <button
                          type="button"
                          className="flex items-start justify-between w-full text-left text-black"
                          onClick={(e) => {
                            const dd =
                              e.currentTarget.parentElement!
                                .nextElementSibling!;
                            dd.classList.toggle("hidden");
                          }}
                        >
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            <Image
                              src="/dropdown-icon.svg"
                              className="w-6"
                              alt="Dropdown Icon."
                              width={24}
                              height={24}
                            />
                          </span>
                        </button>
                      </dt>
                      <dd className="hidden pr-12 mt-2">
                        <p className="text-base leading-7 text-gray-700">
                          {faq.answer}
                        </p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
