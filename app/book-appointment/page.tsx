import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "#1 House Cleaning Service in Scottsdale, AZ | Sun Valley Cleaners",
  description:
    "Looking for reliable house cleaning in Scottsdale? Sun Valley Cleaners offers professional house cleaning services. Get a free quote today!",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/book-appointment",
  },
};

export default function BookAppointmentPage() {
  return (
    <div className="container min-h-screen w-full flex flex-col items-center">
      <div className="h-[400px] w-full max-w-[600px] flex flex-col md:flex-row justify-center items-center space-y-4 text-center">
        <h1 className="text-4xl text-black font-bold">
          Book a cleaning with us today!
        </h1>
        <p className="text-muted-foreground">
          Book a cleaning by completing the form below to the best of your
          ability! If you&apos;d rather secure a cleaning with a phone call,
          please call (623) 295-0506 and we&apos;ll get you setup!
        </p>
        <p className="text-xs text-muted-foreground">
          If you cannot access the form below for whatever reason, please{" "}
          <Link
            href="https://sunvalleycleaners.bookingkoala.com/booknow"
            className="underline"
          >
            book your appointment on our provider&apos;s website
          </Link>.
        </p>
      </div>
      <iframe
        src="https://sunvalleycleaners.bookingkoala.com/booknow/home_cleaning?embed=true&bar=false&banner=false"
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
