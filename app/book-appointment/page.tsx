import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Book a Cleaning Appointment | Sun Valley Cleaners in Scottsdale, AZ",
  description:
    "Schedule your house cleaning appointment with Sun Valley Cleaners in Scottsdale, AZ. Easy online booking for standard, deep, move-in/out, and Airbnb cleanings.",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/book-appointment",
  },
};

export default function BookAppointmentPage() {
  return (
    <div className="container min-h-screen w-full flex flex-col items-center">
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
