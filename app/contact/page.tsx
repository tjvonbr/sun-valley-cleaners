import Link from "next/link";

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
          If you cannot access the form below for whatever reason, please click{" "}
          <Link
            href="https://sunvalleycleaners.bookingkoala.com/contact-us"
            className="underline"
          >
            here
          </Link>{" "}
          to book your appointment on our provider&apos;s website!
        </p>
      </div>
      <iframe
        src="https://sunvalleycleaners.bookingkoala.com/contact-us?embed=true"
        style={{ border: "none", height: "1000px" }}
        width="100%"
        scrolling="no"
      ></iframe>
      <script
        src="https://sunvalleycleaners.bookingkoala.com/resources/embed.js"
        defer
      ></script>
    </div>
  );
}
