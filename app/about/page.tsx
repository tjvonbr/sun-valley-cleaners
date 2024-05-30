import FrequentlyAskedQuestions from "@/components/frequently-asked";
import Image from "next/image";
import image from "../../public/about_us.svg";

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
