import JotformEmbed from "@/components/jotform-embed";

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
      <JotformEmbed />
    </div>
  );
}
