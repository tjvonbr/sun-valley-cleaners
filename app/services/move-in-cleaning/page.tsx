import Image from "next/image";
import locationImg from "/public/vacuum-woman.svg";
import Link from "next/link";
import { Phone } from "lucide-react";
import AppointmentLink from "@/components/appointment-link";
import ServiceAreasSection from "@/components/service-areas-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconCircleCheck } from "@/components/ui/icons";

export const metadata = {
  title: "Move-In Cleaning Service in Scottsdale, AZ | Sun Valley Cleaners",
  description:
    "Professional move-in cleaning in Scottsdale, AZ. Inside cabinets, appliances, baseboards and baths cleaned before day one. Free estimate, no surprises.",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/services/move-in-cleaning",
  },
};

const whatsLeftBehind = [
  "Hair and mineral buildup in shower drains and tub surrounds",
  "Grease film inside kitchen cabinets and baked onto hood filters",
  "Crumbs, spills, and old shelf liner in drawers and pantry shelves",
  "Residue inside the fridge, freezer, oven, and dishwasher gasket",
  "Rings around toilet bases, behind toilets, and in grout lines",
  "Dust caked in vent registers and on ceiling fan blades",
  "Handprints and smudges on switch plates, door frames, and closet doors",
];

const included = [
  {
    room: "Kitchen",
    items: [
      "Inside and outside of every cabinet and drawer",
      "Inside oven, microwave, and refrigerator",
      "Stovetop, hood filter, and backsplash degreased",
      "Sink and fixtures scrubbed and descaled",
    ],
  },
  {
    room: "Bathrooms",
    items: [
      "Inside vanities and drawers",
      "Showers and tubs scrubbed, soap scum and hard water scale removed",
      "Toilets cleaned including the base and behind the bowl",
      "Mirrors, exhaust fans, and grout lines",
    ],
  },
  {
    room: "Bedrooms & Living Areas",
    items: [
      "Inside every closet",
      "Baseboards and window sills wiped down",
      "Light fixtures and ceiling fan blades dusted",
      "Switch plates, door frames, and floors vacuumed and mopped",
    ],
  },
  {
    room: "Whole Home",
    items: [
      "Vent registers wiped free of dust",
      "All interior doors and handles cleaned",
      "Entry and garage door wiped down",
      "Interior windows and tracks available as an add-on",
    ],
  },
];

const faqs = [
  {
    question: "How much does move-in cleaning cost in Scottsdale?",
    answer:
      "Pricing is based on the square footage of the home, plus its condition and number of bathrooms. Most Scottsdale move-in cleans fall within the ranges in the pricing table above. Call (623) 295-0506 or request a free estimate and we'll confirm an exact number before you book.",
  },
  {
    question: "Should I clean before or after the movers arrive?",
    answer:
      "Before. Cabinets, appliance interiors, baseboards, and closet floors are only fully reachable while the home is empty. Once furniture and boxes are in place, a lot of that work either can't be done or has to be worked around, so we schedule move-in cleans between the final walkthrough and your move-in date.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most move-in cleans take 3 to 5 hours depending on the size and condition of the home. Larger homes or homes that need extra attention to hard water buildup or construction residue can run longer — we'll give you a realistic window when you book.",
  },
  {
    question: "Do you clean inside cabinets and appliances?",
    answer:
      "Yes. Interiors of cabinets, drawers, the oven, microwave, refrigerator, and dishwasher gasket are all included in a move-in clean, not offered as an add-on. That's the core difference between this service and a standard cleaning.",
  },
  {
    question: "Can you clean before I have keys?",
    answer:
      "Yes. We regularly coordinate directly with realtors and property managers to access homes through a lockbox, agent key, or gate code, so the home is ready the moment you get your keys. If you're an agent scheduling this on behalf of a client, just let us know the access details when you book.",
  },
];

export default function MoveInCleanPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Move-In Cleaning",
    name: "Move-In Cleaning Service",
    url: "https://www.sunvalleycleaners.com/services/move-in-cleaning",
    provider: {
      "@type": "LocalBusiness",
      name: "Sun Valley Cleaners",
      telephone: "+1-623-295-0506",
      url: "https://www.sunvalleycleaners.com",
    },
    areaServed: [
      "Scottsdale, AZ",
      "Phoenix, AZ",
      "Chandler, AZ",
      "Gilbert, AZ",
      "Mesa, AZ",
      "Tempe, AZ",
      "Arcadia, AZ",
      "Paradise Valley, AZ",
      "Queen Creek, AZ",
    ].map((name) => ({ "@type": "City", name })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sunvalleycleaners.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Move-In Cleaning",
        item: "https://www.sunvalleycleaners.com/services/move-in-cleaning",
      },
    ],
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <div className="w-full px-5 mt-16 flex flex-col items-center space-y-4">
        <h1 className="text-4xl text-center text-primary font-black">
          Move-In Cleaning Service in Scottsdale, AZ
        </h1>
        <p className="max-w-[750px] text-center">
          We clean your new Scottsdale home while it&apos;s still empty —
          every cabinet interior, every appliance, every baseboard — so the
          first thing you move in is furniture, not someone else&apos;s mess.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <AppointmentLink />
          <a
            href="tel:623-295-0506"
            className={cn(buttonVariants({ variant: "outline" }), "flex items-center gap-2")}
          >
            <Phone className="size-4" />
            (623) 295-0506
          </a>
        </div>
        <div className="my-8">
          {/* TODO: swap for a real photo of an empty Scottsdale home mid-clean */}
          <Image src={locationImg} height="500" width="500" alt="empty Scottsdale home being cleaned before move-in" />
        </div>
      </div>

      {/* Intent confirmation */}
      <div className="w-full px-5 max-w-3xl text-center py-6">
        <p className="text-lg text-muted-foreground">
          Closing today? Keys in hand and movers booked for the weekend? If
          your new Scottsdale home is sitting empty right now — and not quite
          as clean as it looked during the final walkthrough — you&apos;re in
          the right place. We clean homes in the window between the last
          owner&apos;s move-out and your move-in, while every room is still
          open and every surface is still reachable. No furniture to work
          around, no boxes in the way. Just a clean start before day one.
        </p>
      </div>

      {/* What the last owners left behind */}
      <div className="w-full px-5 py-12 bg-card flex flex-col items-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl text-foreground font-bold text-center mb-2">
            What the Last Owners Left Behind
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            Every home we clean before a move-in has a few things in common,
            no matter how nice it looked on your walkthrough:
          </p>
          <ul className="space-y-3 mb-6">
            {whatsLeftBehind.map((item) => (
              <li key={item} className="flex items-start space-x-2">
                <div className="flex-shrink-0 pt-1">
                  <IconCircleCheck className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-foreground">{item}</p>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-foreground text-center">
            None of it shows up in listing photos, and every item on that
            list is only reachable while the house is empty. Once your
            furniture, rugs, and boxes are in place, most of it never gets
            touched again — by you or anyone else.
          </p>
        </div>
      </div>

      {/* What's included */}
      <div className="w-full px-5 py-12 max-w-4xl">
        <h2 className="text-3xl text-primary font-bold text-center mb-8">
          What&apos;s Included
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {included.map((group) => (
            <div key={group.room}>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {group.room}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 pt-1">
                      <IconCircleCheck className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-8">
          For the full room-by-room breakdown across every service, see our{" "}
          <Link href="/cleaning-checklist" className="underline text-secondary">
            cleaning checklist
          </Link>
          .
        </p>
      </div>

      {/* Pricing */}
      <div className="w-full px-5 py-12 bg-card flex flex-col items-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl text-foreground font-bold text-center mb-6">
            Pricing
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="py-3 text-foreground">Home Size</th>
                  <th className="py-3 text-foreground">Move-In Clean</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3">Under 1,500 sq ft</td>
                  <td className="py-3">$—</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">1,500–2,500 sq ft</td>
                  <td className="py-3">$—</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">2,500–3,500 sq ft</td>
                  <td className="py-3">$—</td>
                </tr>
                <tr>
                  <td className="py-3">3,500+ sq ft</td>
                  <td className="py-3">Custom quote</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            What changes the price: the condition of the home, number of
            bathrooms, and add-ons like interior windows, garage cleaning, or
            a pool bath. Call (623) 295-0506 for an exact quote.
          </p>
        </div>
      </div>

      {/* Move-in vs deep cleaning */}
      <div className="w-full px-5 py-12 max-w-3xl text-center">
        <h2 className="text-3xl text-primary font-bold mb-4">
          Move-In Cleaning vs. Deep Cleaning
        </h2>
        <p className="text-muted-foreground">
          A{" "}
          <Link href="/services/deep-cleaning" className="underline text-secondary">
            deep cleaning
          </Link>{" "}
          works around your belongings while you&apos;re already living in
          the home. A move-in clean happens while the home is empty, which
          means full access to every cabinet, closet, and appliance interior
          — spaces a deep clean can&apos;t always reach with furniture and
          boxes in place. If you&apos;re still deciding which one fits your
          situation, the short version is: empty house, move-in clean;
          lived-in house, deep clean.
        </p>
      </div>

      {/* How it works */}
      <div className="w-full px-5 py-12 bg-card flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl text-foreground font-bold text-center mb-8">
            How It Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                step: "1. Book",
                text: "Schedule before your move date. We work around closing dates and moving trucks, not the other way around.",
              },
              {
                step: "2. We clean the empty home",
                text: "Our team accesses the home directly — no need for you to be there. Lockbox, agent key, or gate code all work.",
              },
              {
                step: "3. 3–5 hours, typically",
                text: "Time depends on square footage and condition. Larger homes or extra buildup can run longer.",
              },
              {
                step: "4. Walkthrough or photos",
                text: "You'll get a walkthrough or photos on completion, so you know the home is ready before you move a single box in.",
              },
            ].map((s) => (
              <div key={s.step}>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {s.step}
                </h3>
                <p className="text-muted-foreground text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scottsdale section */}
      <div className="w-full px-5 py-12 max-w-3xl">
        <h2 className="text-3xl text-primary font-bold text-center mb-6">
          Cleaning a Scottsdale Home Before Move-In
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Hard Water</h3>
            <p className="text-muted-foreground">
              Scottsdale&apos;s mineral-heavy water leaves scale on glass
              shower doors, fixtures, and sink basins that ordinary cleaning
              won&apos;t touch. We use descaling products built for that
              buildup and address it before it&apos;s sitting behind a shower
              curtain for the next few years.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Desert Dust</h3>
            <p className="text-muted-foreground">
              A home that&apos;s sat vacant between owners collects fine
              desert dust in vent registers, window sills, and ceiling fan
              blades. We clear all of it out before you unpack, not after.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              Gated Communities
            </h3>
            <p className="text-muted-foreground">
              We regularly clean homes in DC Ranch, Grayhawk, Silverleaf, and
              Troon, and we handle gate registration and lockbox access
              directly with the HOA or listing agent — nobody needs to meet
              us on-site. If your new home is in a new build in North
              Scottsdale, we also account for post-construction residue like
              drywall dust in the vents and sticker adhesive left on
              fixtures.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="w-full px-5 py-12 bg-card flex flex-col items-center">
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-3xl text-foreground font-bold mb-8">
            What Scottsdale Homeowners Say
          </h2>
          {/*
            TODO: replace with real Google Business Profile reviews from
            completed move-in jobs. Use first name + neighborhood only.
          */}
          <div className="grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 border rounded-md text-left">
                <p className="text-muted-foreground italic text-sm">
                  [Add a real move-in review here — first name and
                  neighborhood, pulled from Google Business Profile]
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full px-5 py-12 max-w-3xl">
        <h2 className="text-3xl text-primary font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-foreground hover:no-underline hover:text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Close */}
      <div className="w-full px-5 py-12 bg-card flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl text-foreground font-bold">
          Ready to Book Your Move-In Clean?
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Backed by our satisfaction guarantee — if something&apos;s not
          right, we&apos;ll come back and make it right.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <AppointmentLink />
          <a
            href="tel:623-295-0506"
            className={cn(buttonVariants({ variant: "outline" }), "flex items-center gap-2")}
          >
            <Phone className="size-4" />
            (623) 295-0506
          </a>
        </div>
        <p className="max-w-2xl text-muted-foreground pt-4">
          Moving out of your current place? See our{" "}
          <Link href="/services/move-cleaning" className="underline text-secondary">
            move-out cleaning
          </Link>
          . Already settled in and want a top-to-bottom refresh? Try our{" "}
          <Link href="/services/deep-cleaning" className="underline text-secondary">
            deep cleaning service
          </Link>
          . See exactly what&apos;s included in our{" "}
          <Link href="/cleaning-checklist" className="underline text-secondary">
            cleaning checklist
          </Link>
          .
        </p>
      </div>

      <ServiceAreasSection
        serviceName="Move-in cleaning"
        areas={[
          { name: "Phoenix", href: "/locations/phoenix-az/move-in-cleaning" },
          { name: "Chandler", href: "/locations/chandler-az/move-in-cleaning" },
          { name: "Gilbert", href: "/locations/gilbert-az/move-in-cleaning" },
          { name: "Mesa", href: "/locations/mesa-az/move-in-cleaning" },
          { name: "Arcadia", href: "/locations/arcadia-az/move-in-move-out-cleaning" },
          { name: "Paradise Valley", href: "/locations/paradise-valley-az/move-in-move-out-cleaning" },
          { name: "Scottsdale", href: "/locations/scottsdale-az" },
          { name: "Tempe", href: "/locations/tempe-az" },
          { name: "Queen Creek", href: "/locations/queen-creek-az" },
        ]}
      />
    </div>
  );
}
