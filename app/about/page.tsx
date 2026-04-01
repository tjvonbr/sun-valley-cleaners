import FrequentlyAskedQuestions from "@/components/frequently-asked";
import Image from "next/image";
import Link from "next/link";
import image from "../../public/about_us.svg";

export const metadata = {
  title: "About Sun Valley Cleaners | Professional House Cleaning in Scottsdale, AZ",
  description:
    "Sun Valley Cleaners is Scottsdale's trusted home cleaning company, specializing in residential cleaning and Airbnb turnover services. Reliable, detail-focused, and locally owned.",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-primary">
      <div className="px-16 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
          <h1 className="text-4xl lg:text-6xl text-slate-200 font-black">
            Our Commitment To Our Customers
          </h1>
          <p className="text-background">
            At Sun Valley Cleaners, we are dedicated to delivering a sparkling
            clean home for you. Our mission is to provide best in class service
            at a competitive rate and ensure customer satisfaction every step of
            the way. As your trusted partner in home cleaning, we strive to
            offer exceptional cleaning services that make a noticeable
            difference in your home. We are passionate about maintaining the
            highest standards and creating a pristine living environment for our
            clients. Experience the Sun Valley Cleaners difference today!
          </p>
        </div>
        <Image src={image} height="500" width="500" alt="hello" />
      </div>
      <div className="w-full max-w-4xl px-8 py-12 flex flex-col items-center space-y-6 text-center">
        <h2 className="text-3xl lg:text-5xl text-background font-bold">
          Our Services
        </h2>
        <p className="text-background/80 max-w-2xl">
          We offer a range of professional cleaning services to meet your
          needs, including{" "}
          <Link href="/services/house-cleaning" className="underline text-background">
            standard cleaning
          </Link>
          ,{" "}
          <Link href="/services/deep-cleaning" className="underline text-background">
            deep cleaning
          </Link>
          ,{" "}
          <Link href="/services/move-cleaning" className="underline text-background">
            move-in/move-out cleaning
          </Link>
          , and{" "}
          <Link href="/services/airbnb-cleaning" className="underline text-background">
            Airbnb cleaning
          </Link>
          . View our{" "}
          <Link href="/cleaning-checklist" className="underline text-background">
            cleaning checklist
          </Link>{" "}
          to see exactly what each service includes, or{" "}
          <Link href="/contact" className="underline text-background">
            contact us
          </Link>{" "}
          for a free quote.
        </p>
        <p className="text-background/80 max-w-2xl">
          We proudly serve{" "}
          <Link href="/locations/phoenix-az" className="underline text-background">Phoenix</Link>,{" "}
          <Link href="/locations/scottsdale-az" className="underline text-background">Scottsdale</Link>,{" "}
          <Link href="/locations/chandler-az" className="underline text-background">Chandler</Link>,{" "}
          <Link href="/locations/gilbert-az" className="underline text-background">Gilbert</Link>,{" "}
          <Link href="/locations/mesa-az" className="underline text-background">Mesa</Link>,{" "}
          <Link href="/locations/tempe-az" className="underline text-background">Tempe</Link>,{" "}
          and other communities across Maricopa County. Visit our{" "}
          <Link href="/locations" className="underline text-background">
            service areas page
          </Link>{" "}
          to find cleaning near you.
        </p>
      </div>

      <div className="w-1/2 py-12 flex flex-col items-center space-y-8">
        <h2 className="text-center text-3xl lg:text-5xl text-background font-bold">
          Frequently Asked Questions
        </h2>
        <FrequentlyAskedQuestions />
        <p className="text-center text-background text-sm font-medium">
          If you have any further questions that aren&apos;t addressed in this
          section, please send us an email at{" "}
          <a href="mailto:hello@sunvalleycleaners.com" className="underline">
            hello@sunvalleycleaners.com
          </a>
        </p>
      </div>
    </div>
  );
}
