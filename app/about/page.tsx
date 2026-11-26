import FrequentlyAskedQuestions from "@/components/frequently-asked";
import Link from "next/link";

export const metadata = {
  title: "About Sun Valley Cleaners | Scottsdale House Cleaning",
  description:
    "Sun Valley Cleaners is Scottsdale's trusted home cleaning company, specializing in residential cleaning and Airbnb turnover services. Reliable, detail-focused, and locally owned.",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="mx-auto w-full max-w-[44rem] px-5 py-12 lg:py-20">
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
            Our Commitment To Our Customers
          </h1>
          <p className="font-serif text-xl leading-[1.7] text-muted-foreground">
            At Sun Valley Cleaners, we are dedicated to delivering a sparkling
            clean home for you. Our mission is to provide best in class service
            at a competitive rate and ensure customer satisfaction every step of
            the way. As your trusted partner in home cleaning, we strive to
            offer exceptional cleaning services that make a noticeable
            difference in your home. We are passionate about maintaining the
            highest standards and creating a pristine living environment for our
            clients. Experience the Sun Valley Cleaners difference today!
          </p>
        </header>

        <section className="max-w-[60ch] space-y-6 font-serif text-[1.25rem] leading-[1.7] text-foreground">
          <h2 className="mt-4 font-sans text-3xl font-bold leading-snug text-foreground">
            Our story and why Maricopa County trusts us
          </h2>
          <p>
            Sun Valley Cleaners started with a simple frustration: too many
            Scottsdale homeowners were stuck choosing between cleaning companies
            that felt like strangers in their house and DIY weekends that never
            seemed to end. We built this company to be the option in between, a
            local team that treats your home like it&apos;s our own and shows up
            with the same crew, the same standards, and the same attention to
            detail every single visit.
          </p>
          <p>
            Every person who cleans your home goes through a background check
            before they ever get a key or a gate code. That&apos;s not a
            formality for us. It&apos;s the baseline. From there, new team
            members spend real time shadowing experienced cleaners and working
            through a room-by-room training program that covers everything from
            how to properly clean grout lines to how to stage a bathroom for an
            Airbnb guest arriving in an hour. We don&apos;t send anyone out on
            their own until they can consistently pass our internal quality
            checks.
          </p>
          <p>
            We&apos;re also careful about what goes into your home. We clean
            with EPA Safer Choice-certified products whenever possible, which
            matters if you have kids, pets, or family members with allergies or
            asthma. The Asthma and Allergy Foundation of America notes that
            certain cleaning chemicals can trigger respiratory symptoms, so we
            choose formulas that cut grease and grime without leaving behind
            harsh fumes or residue. If you have a specific product request or
            sensitivity, tell us ahead of time and we&apos;ll adjust our supply
            kit for your visit.
          </p>
          <p>
            What really sets a local cleaning company apart, though, is knowing
            the area. Scottsdale&apos;s desert dust, hard water spots from our
            mineral-heavy tap water, and the seasonal push of snowbird arrivals
            and Airbnb turnovers all shape how we clean here. That&apos;s
            different from a national franchise running a generic checklist.
            We&apos;ve built our process around what actually works in Maricopa
            County homes.
          </p>
          <p>
            We currently serve homeowners and property managers throughout
            Scottsdale, Phoenix, Tempe, Paradise Valley, Fountain Hills, Cave
            Creek, and Carefree. If you&apos;re not sure whether your
            neighborhood falls inside our coverage area, reach out and
            we&apos;ll let you know before you book.
          </p>
        </section>

        <section className="mt-16 max-w-[60ch] space-y-6 font-serif text-[1.25rem] leading-[1.7] text-foreground">
          <h2 className="font-sans text-3xl font-bold leading-snug text-foreground">
            Our Services
          </h2>
          <p>
            We offer a range of professional cleaning services to meet your
            needs, including{" "}
            <Link
              href="/services/house-cleaning"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              standard cleaning
            </Link>
            ,{" "}
            <Link
              href="/services/deep-cleaning"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              deep cleaning
            </Link>
            ,{" "}
            <Link
              href="/services/move-cleaning"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              move-in/move-out cleaning
            </Link>
            , and{" "}
            <Link
              href="/services/airbnb-cleaning"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Airbnb cleaning
            </Link>
            . View our{" "}
            <Link
              href="/cleaning-checklist"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              cleaning checklist
            </Link>{" "}
            to see exactly what each service includes, or{" "}
            <Link
              href="/contact"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              contact us
            </Link>{" "}
            for a free quote.
          </p>
          <p>
            We proudly serve{" "}
            <Link
              href="/locations/phoenix-az"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Phoenix
            </Link>
            ,{" "}
            <Link
              href="/locations/scottsdale-az"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Scottsdale
            </Link>
            ,{" "}
            <Link
              href="/locations/chandler-az"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Chandler
            </Link>
            ,{" "}
            <Link
              href="/locations/gilbert-az"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Gilbert
            </Link>
            ,{" "}
            <Link
              href="/locations/mesa-az"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Mesa
            </Link>
            ,{" "}
            <Link
              href="/locations/tempe-az"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Tempe
            </Link>
            , and other communities across Maricopa County. Visit our{" "}
            <Link
              href="/locations"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              service areas page
            </Link>{" "}
            to find cleaning near you.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-bold leading-snug text-foreground">
            Frequently Asked Questions
          </h2>
          <FrequentlyAskedQuestions />
          <p className="mt-8 font-serif text-base leading-[1.7] text-muted-foreground">
            If you have any further questions that aren&apos;t addressed in this
            section, please send us an email at{" "}
            <a
              href="mailto:hello@sunvalleycleaners.com"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              hello@sunvalleycleaners.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
