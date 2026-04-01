import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Contact Sun Valley Cleaners | Scottsdale, AZ House Cleaning",
  description:
    "Get in touch with Sun Valley Cleaners for house cleaning in Scottsdale and the greater Phoenix area. Call, email, or send us a message for a free estimate.",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container min-h-screen w-full flex flex-col items-center">
      <div className="h-[400px] w-full max-w-[600px] flex flex-col justify-center items-center space-y-4 text-center">
        <h1 className="text-4xl lg:text-6xl text-primary font-black">
          Contact Us
        </h1>
        <p className="text-muted-foreground">
          There are several ways to get ahold of us. You can call us or email
          using the number and email address listed below. Alternatively, you
          can fill out the form below. Whichever way you choose, we promise to
          get back to you soon!
        </p>
        <p className="text-muted-foreground text-sm">
          Looking for a specific service? Check out our{" "}
          <Link href="/services/house-cleaning" className="underline text-secondary">
            standard cleaning
          </Link>
          ,{" "}
          <Link href="/services/deep-cleaning" className="underline text-secondary">
            deep cleaning
          </Link>
          ,{" "}
          <Link href="/services/move-cleaning" className="underline text-secondary">
            move-in/move-out cleaning
          </Link>
          , and{" "}
          <Link href="/services/airbnb-cleaning" className="underline text-secondary">
            Airbnb cleaning
          </Link>
          {" "}pages, or{" "}
          <Link href="/book-appointment" className="underline text-secondary">
            book an appointment
          </Link>{" "}
          directly.
        </p>
        <div className="flex flex-col items-start text-primary font-semibold">
          <p>
            Email:{" "}
            <a href="mailto:hello@sunvalleycleaners.com" className="underline">
              hello@sunvalleycleaners.com
            </a>
          </p>
          Phone: (623) 295-0506
        </div>
        <p className="text-xs text-muted-foreground">
          If you cannot access the form below for whatever reason, please{" "}
          <Link
            href="https://sunvalleycleaners.bookingkoala.com/contact-us"
            className="underline"
          >
            contact us on our provider&apos;s website
          </Link>.
        </p>
      </div>
      <iframe
        src="https://sunvalleycleaners.bookingkoala.com/contact-us?embed=true"
        style={{ border: "none", height: "1000px" }}
        width="100%"
      ></iframe>
      <Script
        src="https://sunvalleycleaners.bookingkoala.com/resources/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
