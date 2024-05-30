"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-transparent.png";
import { buttonVariants } from "./ui/button";
import HeaderNav from "./header-nav";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="h-20 w-full px-5 py-16 flex justify-between items-center bg-background">
      <Image
        src={logo}
        alt="Sun Valley Cleaners Logo"
        height="150"
        width="150"
      />
      <HeaderNav />
      <Link
        href="/book-appointment"
        className={cn(
          buttonVariants({ variant: "default" }),
          pathname === "/book-appointment" ? "invisible" : null,
          "hidden md:flex"
        )}
      >
        Book now!
      </Link>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
