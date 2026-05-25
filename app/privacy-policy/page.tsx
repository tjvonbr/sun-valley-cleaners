export const metadata = {
  title: "Privacy Policy | Sun Valley Cleaners",
  description:
    "Read the privacy policy for Sun Valley Cleaners. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.sunvalleycleaners.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-primary">
      <div className="w-full max-w-3xl px-8 py-16 flex flex-col space-y-8 text-background">
        <h1 className="text-4xl lg:text-5xl font-black">Privacy Policy</h1>
        <p className="text-background/70 text-sm">Effective date: May 25, 2026</p>

        <p>
          Sun Valley Cleaners (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website{" "}
          <span className="font-medium">sunvalleycleaners.com</span>. This Privacy Policy explains
          how we collect, use, and protect your personal information when you use our site or book
          our services.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-1 text-background/90">
            <li>Name, email address, and phone number when you book an appointment or contact us</li>
            <li>Home address for scheduling cleaning services</li>
            <li>Payment information processed securely through third-party payment providers</li>
            <li>Usage data such as pages visited, browser type, and IP address</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-1 text-background/90">
            <li>Schedule and provide cleaning services</li>
            <li>Communicate with you about appointments and service updates</li>
            <li>Process payments</li>
            <li>Improve our website and services</li>
            <li>Send promotional offers or updates (you may opt out at any time)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your
            information with trusted service providers who assist in operating our business (e.g.,
            payment processors, scheduling tools), subject to confidentiality agreements. We may also
            disclose information if required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Cookies</h2>
          <p>
            Our website may use cookies to improve your browsing experience. You can instruct your
            browser to refuse cookies, though some parts of the site may not function properly as a
            result.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized
            access, disclosure, or loss. However, no method of transmission over the internet is
            100% secure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at
            any time by contacting us. We will respond to your request within a reasonable
            timeframe.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this
            page with an updated effective date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
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
