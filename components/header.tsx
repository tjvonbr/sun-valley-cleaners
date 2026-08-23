"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/consts";
import logo from "../public/logo-transparent.png";
import { buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const services = [
  {
    label: "Standard Cleaning",
    href: "/services/house-cleaning",
    description: "A thorough, consistent clean for every room.",
  },
  {
    label: "Deep Cleaning",
    href: "/services/deep-cleaning",
    description: "Top-to-bottom cleaning for seasonal refreshes.",
  },
  {
    label: "Move-In Cleaning",
    href: "/services/move-in-cleaning",
    description: "A ready-for-day-one clean before you unpack.",
  },
  {
    label: "Move-In / Move-Out",
    href: "/services/move-cleaning",
    description: "A ready-for-the-next-chapter clean for your move.",
  },
  {
    label: "Airbnb Cleaning",
    href: "/services/airbnb-cleaning",
    description: "Fast, reliable turnovers between guests.",
  },
];

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Checklist", href: "/cleaning-checklist" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Sun Valley Cleaners Logo" height={72} width={72} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-foreground data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-2">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block rounded-md p-2 transition-colors hover:bg-accent/10"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {service.label}
                            </span>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto bg-transparent p-0 text-sm font-medium text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-foreground data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent">
                  Locations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] grid-cols-2 gap-1 p-2">
                    {navigation.locations.map((location) => (
                      <li key={location.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={location.href}
                            className="block rounded-md p-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
                          >
                            {location.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:623-295-0506"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            623-295-0506
          </a>
          <Link
            href="/book-appointment"
            className={cn(
              buttonVariants({ variant: "default" }),
              pathname === "/book-appointment" ? "invisible" : null
            )}
          >
            Book now!
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] overflow-y-auto bg-background">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="mt-8 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-lg font-medium text-foreground">Services</span>
                <div className="flex flex-col gap-3 pl-4">
                  {services.map((service) => (
                    <SheetClose asChild key={service.href}>
                      <Link
                        href={service.href}
                        className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        {service.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-lg font-medium text-foreground">Locations</span>
                <div className="grid grid-cols-2 gap-3 pl-4">
                  {navigation.locations.map((location) => (
                    <SheetClose asChild key={location.href}>
                      <Link
                        href={location.href}
                        className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        {location.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <a
                href="tel:623-295-0506"
                className="inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                623-295-0506
              </a>
              <SheetClose asChild>
                <Link href="/book-appointment" className={cn(buttonVariants({ variant: "default" }))}>
                  Book now!
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
