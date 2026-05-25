export const metadata = {
  title: "Terms of Service | Sun Valley Cleaners",
  description:
    "Read the terms of service for Sun Valley Cleaners. Understand the conditions for using our website and booking our cleaning services.",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-primary">
      <div className="w-full max-w-3xl px-8 py-16 flex flex-col space-y-8 text-background">
        <h1 className="text-4xl lg:text-5xl font-black">Terms of Service</h1>
        <p className="text-background/70 text-sm">Effective date: May 25, 2026</p>

        <p>
          By accessing or using the website at{" "}
          <span className="font-medium">sunvalleycleaners.com</span> or booking any of our
          services, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Services</h2>
          <p>
            Sun Valley Cleaners provides residential and commercial cleaning services in the greater
            Phoenix, AZ area. All services are subject to availability and must be scheduled in
            advance. We reserve the right to refuse service at our discretion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Bookings and Cancellations</h2>
          <p>
            Appointments must be cancelled or rescheduled at least 24 hours in advance. Late
            cancellations or no-shows may be subject to a cancellation fee. We reserve the right to
            reschedule appointments due to unforeseen circumstances and will notify you as soon as
            possible if this occurs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Payment</h2>
          <p>
            Payment is due at the time of service unless otherwise agreed upon. We accept major
            credit cards and other payment methods as listed at checkout. All prices are subject to
            change without notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Access to Your Home</h2>
          <p>
            By booking a service, you confirm that you are authorized to grant our team access to
            the property to be cleaned. You are responsible for securing or removing any valuables,
            fragile items, or pets prior to our arrival.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Satisfaction Guarantee</h2>
          <p>
            If you are not satisfied with the quality of your cleaning, please contact us within 24
            hours of your appointment. We will make reasonable efforts to address your concerns,
            including returning to re-clean affected areas at no additional charge.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Limitation of Liability</h2>
          <p>
            Sun Valley Cleaners is not liable for any pre-existing damage, normal wear and tear, or
            damage resulting from items left unsecured. Our liability for any claim arising from a
            service is limited to the cost of that service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Intellectual Property</h2>
          <p>
            All content on this website, including text, images, and logos, is the property of Sun
            Valley Cleaners and may not be reproduced or used without our written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Changes to These Terms</h2>
          <p>
            We may update these Terms of Service at any time. Changes will be posted on this page
            with an updated effective date. Continued use of our website or services after changes
            are posted constitutes your acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:hello@sunvalleycleaners.com" className="underline">
              hello@sunvalleycleaners.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
