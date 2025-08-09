import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-transparent.png";
import {
  IconBox,
  IconBoxOpen,
  IconEvent,
  IconOven,
  IconSprayBottle,
} from "./ui/icons";

export default function Footer() {
  return (
    <footer className="w-full px-14 py-14 flex flex-col md:flex-row justify-between items-center bg-background text-primary">
      <Image src={logo} height="250" width="250" alt="hello" />
      <div className="my-8 flex flex-col items-start">
        <p className="font-bold underline">Services Provided</p>
        <Link
          href="/services/standard-cleaning"
          className="flex items-center hover:underline"
        >
          <IconSprayBottle className="mr-2 size-4" />
          Standard Cleaning
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
          Move-In Cleaning
        </Link>
        <Link
          href="/services/move-cleaning"
          className="flex items-center hover:underline"
        >
          <IconBoxOpen className="mr-2 size-4" />
          Move-Out Cleaning
        </Link>
        <Link
          href="/services/move-cleaning"
          className="flex items-center hover:underline"
        >
          <IconEvent className="mr-2 size-4" />
          Event Cleaning
        </Link>
      </div>
      <div className="my-8 flex flex-col items-start">
        <p className="font-bold underline">
          <Link
          href="/locations"
          className="flex items-center hover:underline"
        >
          
          Service Areas
        </Link></p>
        <Link
          href="/locations/phoenix-az"
          className="flex items-center hover:underline"
        >
          
          Phoenix, AZ
        </Link>
        <Link
          href="/locations/chandler-az"
          className="flex items-center hover:underline"
        >
          
          Chandler, AZ
        </Link>
        <Link
          href="/locations/gilbert-az"
          className="flex items-center hover:underline"
        >
          
          Gilbert, AZ
        </Link>
        <Link
          href="/locations/mesa-az"
          className="flex items-center hover:underline"
        >
          
          Mesa, AZ
        </Link>
      </div>
      <div className="my-8 flex flex-row items-center gap-8">
        <div className="my-8 flex flex-col items-center text-center space-y-8">
          <div>
            <p className="font-bold underline">Contact Us</p>
            <p>(623) 295-0506</p>
            <a href="mailto:hello@sunvalleycleaners.com" className="underline">
              hello@sunvalleycleaners.com
            </a>
          </div>

          <div>
            <p className="font-bold underline">Hours of Operation</p>
            <p>Sunday - Saturday 8am - 8pm</p>
          </div>

          {/* <Link
          href="https://www.facebook.com/profile.php?id=61559979211837"
          target="_blank"
          className="rounded-md p-1 hover:bg-primary/90"
        >
          <IconFacebook className="size-5 text-background" />
        </Link>
        <Link href="" className="rounded-md p-1 hover:bg-primary/90">
          <IconInstagram className="size-5 text-background" />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61559979211837"
          target="_blank"
          className="rounded-md p-1 hover:bg-primary/90"
        >
          <IconGoogle className="size-5 text-background" />
        </Link> */}
        </div>
        <div className="my-8 flex ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d426064.1028127747!2d-112.3192225!3d33.4590543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ebef90fa543f995%3A0xb1810327e8cc3751!2sSun%20Valley%20Cleaners!5e0!3m2!1sen!2sin!4v1752485922160!5m2!1sen!2sin"
            width="400"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
