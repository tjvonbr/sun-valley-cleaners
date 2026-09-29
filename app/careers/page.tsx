import Link from "next/link";

export const metadata = {
  title: "Careers | Sun Valley Cleaners Scottsdale, AZ",
  description:
    "Join the Sun Valley Cleaners team. We're hiring reliable, detail-focused house cleaners in Scottsdale and the greater Phoenix area.",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/careers",
  },
};

const reasons = [
  {
    title: "Consistent work",
    description:
      "Recurring residential clients and Airbnb turnovers across the Phoenix metro keep your schedule steady.",
  },
  {
    title: "Supplies provided",
    description:
      "We supply the products and equipment so you can focus on doing great work.",
  },
  {
    title: "A respectful team",
    description:
      "We're locally owned, we value your time, and we treat every teammate with respect.",
  },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-primary">
      <div className="w-full max-w-4xl px-8 py-10 lg:py-20 flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl text-primary-foreground font-black">
          Join Our Team
        </h1>
        <p className="text-background max-w-2xl">
          Sun Valley Cleaners is a locally owned cleaning company serving
          Scottsdale and the greater Phoenix area. We&apos;re always looking for
          reliable, detail-focused people who take pride in leaving a home
          spotless.
        </p>
      </div>

      <div className="w-full max-w-5xl px-8 py-12 flex flex-col items-center space-y-8">
        <h2 className="text-3xl lg:text-5xl text-background font-bold text-center">
          Why Work With Us
        </h2>
        <div className="grid w-full gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg bg-background p-6 text-primary"
            >
              <h3 className="text-xl font-bold">{reason.title}</h3>
              <p className="mt-2 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-3xl px-8 py-12 flex flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl lg:text-5xl text-background font-bold">
          How to Apply
        </h2>
        <p className="text-background/80 max-w-2xl">
          Send us a short note about yourself and your cleaning experience at{" "}
          <a
            href="mailto:hello@sunvalleycleaners.com?subject=Careers%20Application"
            className="underline text-background"
          >
            hello@sunvalleycleaners.com
          </a>
          , or call us at{" "}
          <a href="tel:623-295-0506" className="underline text-background">
            (623) 295-0506
          </a>
          . Want to know more about who we are first? Visit our{" "}
          <Link href="/about" className="underline text-background">
            about page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
