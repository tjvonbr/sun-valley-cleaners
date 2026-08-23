import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  MapPin,
  Phone,
  Sparkles,
  Droplets,
  Home as HomeIcon,
  Leaf,
  Smile,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "#1 House Cleaning Service in Scottsdale, AZ | Sun Valley Cleaners",
  description:
    "Looking for reliable house cleaning in Scottsdale? Sun Valley Cleaners offers professional house cleaning services. Get a free quote today!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com",
  },
};

const services = [
  {
    title: "Standard Cleaning",
    icon: ShieldCheck,
    description:
      "A thorough, consistent clean for every room — dusting, vacuuming, mopping, and sanitizing.",
    href: "/services/house-cleaning",
  },
  {
    title: "Deep Cleaning",
    icon: Droplets,
    description:
      "Detailed top-to-bottom cleaning for seasonal refreshes, special occasions, and neglected spaces.",
    href: "/services/deep-cleaning",
  },
  {
    title: "Move-In / Move-Out",
    icon: HomeIcon,
    description:
      "Thorough cleanings that make your move smoother and leave every surface ready for the next chapter.",
    href: "/services/move-cleaning",
  },
  {
    title: "Airbnb Cleaning",
    icon: Sparkles,
    description:
      "Quick, reliable turnovers between guests, with linens changed and every surface sanitized.",
    href: "/services/airbnb-cleaning",
  },
];

const reasons = [
  {
    title: "Locally rooted",
    description:
      "We live and work in the Phoenix metro, so we understand what Scottsdale's desert climate does to a home.",
    icon: MapPin,
  },
  {
    title: "Insured & bonded",
    description: "Peace of mind with every visit. Your home and our team are fully protected.",
    icon: ShieldCheck,
  },
  {
    title: "Eco-friendly supplies",
    description:
      "Effective, family-safe products that are gentle on your home, your pets, and the desert around it.",
    icon: Leaf,
  },
  {
    title: "Satisfaction guaranteed",
    description: "Not happy? We'll return and make it right at no cost to you.",
    icon: Smile,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
            <div className="flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                <MapPin className="h-4 w-4" />
                Serving Scottsdale, AZ
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Top-rated house cleaning in Scottsdale, AZ
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Reliable, detail-oriented cleaning tailored to Scottsdale homes. Let us handle the
                desert dust so you can enjoy your home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book-appointment" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
                  Book Now
                </Link>
                <a
                  href="tel:623-295-0506"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2 hover:bg-background hover:text-foreground"
                  )}
                >
                  <Phone className="h-4 w-4" />
                  (623) 295-0506
                </a>
              </div>
              <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  5-star rated
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Insured & bonded
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Local & trusted
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -rotate-3 rounded-3xl bg-primary/10" />
              <Image
                src="/images/hero-scottsdale-home.jpg"
                height={1000}
                width={1500}
                alt="Bright, clean modern home interior in Scottsdale, AZ"
                className="relative h-[400px] w-full rounded-2xl object-cover shadow-xl lg:h-[500px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Services we offer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Flexible cleaning plans designed for busy Scottsdale households.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="block">
                <Card className="h-full bg-card transition-shadow hover:border-primary/50 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-card-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Scottsdale families choose us
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A cleaning partner you can trust with the details that matter.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex flex-col items-center text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-0 rotate-2 rounded-3xl bg-accent/10" />
              <Image
                src="/images/about-cleaning.jpg"
                height={933}
                width={1400}
                alt="Professional cleaner tidying a bright Scottsdale kitchen"
                className="relative h-[350px] w-full rounded-2xl object-cover shadow-xl lg:h-[450px]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Scottsdale house cleaning, done with care
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We started Sun Valley Cleaners to give Scottsdale neighbors a reliable, friendly
                option for keeping their homes spotless. From dusty desert windows to busy family
                kitchens, we treat every room like it&apos;s our own.
              </p>
              <ul className="mt-8 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  Experienced, background-checked team
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  Transparent, flat-rate pricing
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  Flexible scheduling that fits your life
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)),transparent_40%)] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready for a cleaner home?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Get your free, no-obligation quote today and see why Scottsdale families trust us with
            their homes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-appointment"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              Request a Quote
            </Link>
            <a
              href="tel:623-295-0506"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              )}
            >
              <Phone className="h-4 w-4" />
              (623) 295-0506
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
