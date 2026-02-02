"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo-transparent.png";
import { buttonVariants } from "./ui/button";
import HeaderNav from "./header-nav";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";
import { Phone } from "lucide-react";

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
      <div className="hidden md:flex items-center gap-3">
        <a
          href="tel:623-295-0506"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "gap-2"
          )}
        >
          <Phone className="size-4" />
          623-295-0506
        </a>
        <Link
          href="/book-appointment"
          className={cn(
            buttonVariants({ variant: "default" }),
            pathname === "/book-appointment" ? "invisible" : null,
          )}
        >
          Book now!
        </Link>
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
