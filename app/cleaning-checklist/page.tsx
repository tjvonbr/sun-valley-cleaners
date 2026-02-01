import { Metadata } from "next";
import CleaningChecklist from "@/components/cleaning-checklist";

export const metadata: Metadata = {
  title: "Cleaning Checklist | Sun Valley Cleaners",
  description:
    "See what's included in our Standard, Deep, and Move In/Out cleaning services. Compare our cleaning packages for every room in your home.",
};

export default function CleaningChecklistPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-primary">
      <div className="px-4 lg:px-16 py-10 lg:py-20 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl text-slate-200 font-black mb-4">
            Cleaning Checklist
          </h1>
          <p className="text-background text-lg max-w-2xl mx-auto">
            See what&apos;s included in each of our cleaning packages. Select a
            room to view the detailed checklist.
          </p>
        </div>

        <CleaningChecklist />

        <div className="mt-12 text-center">
          <p className="text-background mb-4">
            Ready to book your cleaning?
          </p>
          <a
            href="/book-appointment"
            className="inline-block bg-secondary text-white font-bold px-8 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Book a Cleaning
          </a>
        </div>
      </div>
    </div>
  );
}
