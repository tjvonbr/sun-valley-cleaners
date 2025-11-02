import Link from "next/link";
import {
  IconBox,
  IconEvent,
  IconOven,
  IconSprayBottle,
} from "./ui/icons";
import { LocationLinkItem, navigation } from "@/lib/consts";
import FooterSectionHeader from "./footer-section-header";

export default function Footer() {
  return (
    <footer className="w-full px-14 py-14 flex flex-col md:flex-row justify-between items-center md:items-start bg-background text-primary">
      <div>
        <FooterSectionHeader title="Quick Links" />
        <Link
          href="/"
          className="flex items-center hover:underline"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="flex items-center hover:underline"
        >
          Contact Us
        </Link>
        <Link
          href="/book-appointment"
          className="flex items-center hover:underline"
        >
          
          Get a Quote
        </Link>
      </div>
      <div className="flex flex-col items-start">
      <FooterSectionHeader title="Services Provided" />
        <Link
          href="/services/house-cleaning"
          className="flex items-center hover:underline"
        >
          <IconSprayBottle className="mr-2 size-4" />
          House Cleaning
        </Link>
        <Link
          href="/services/deep-cleaning"
          className="flex items-center hover:underline"
        >
          <IconOven className="mr-2 size-4" />
          Deep Cleaning
        </Link>
        <Link
          href="/services/move-cleaning"
          className="flex items-center hover:underline"
        >
          <IconBox className="mr-2 size-4" />
          Move In/Out Cleaning
        </Link>
        <Link
          href="/services/airbnb-cleaning"
          className="flex items-center hover:underline"
        >
          <IconEvent className="mr-2 size-4" />
          Airbnb Cleaning
        </Link>
      </div>
      <div className="flex flex-col items-start">
        <FooterSectionHeader title="Service Areas" />
        {navigation.locations.map((location: LocationLinkItem) => (
          <Link
            href={location.href}
            className="flex items-center hover:underline"
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div>
        <FooterSectionHeader title="Contact Us" />
        <div>
        <p>(623) 295-0506</p>

        </div>
        <a href="mailto:hello@sunvalleycleaners.com" className="underline">
          hello@sunvalleycleaners.com
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d426064.1028127747!2d-112.3192225!3d33.4590543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ebef90fa543f995%3A0xb1810327e8cc3751!2sSun%20Valley%20Cleaners!5e0!3m2!1sen!2sin!4v1752485922160!5m2!1sen!2sin"
          width="400"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </footer>
  );
}
