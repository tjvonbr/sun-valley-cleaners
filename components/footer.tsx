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
      <div className="flex flex-col items-center text-center space-y-8">
        <div>
          <p className="font-bold underline">Contact Us</p>
          <p>(623) 295-0506</p>
          <a href="mailto:hello@sunvalleycleaners.com" className="underline">
            hello@sunvalleycleaners.com
          </a>
        </div>

        <div>
          <p className="font-bold underline">Hours of Operation</p>
          <p>Monday - Friday 8am - 5pm</p>
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
      <Image src={logo} height="250" width="250" alt="hello" />
      <div className="my-8 flex flex-col items-center">
        <p className="font-bold underline">Services Provided</p>
        <Link
          href="/services/standard-cleaning"
          className="flex items-center hover:underline"
        >
          <IconSprayBottle className="mr-2 size-4" />
          Standard Cleaning
        </Link>
        <Link
          href="/services/standard-cleaning"
          className="flex items-center hover:underline"
        >
          <IconOven className="mr-2 size-4" />
          Deep Cleaning
        </Link>
        <Link
          href="/services/deep-cleaning"
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
    </footer>
  );
}
