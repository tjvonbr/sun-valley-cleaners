import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import HeaderNav from "./header-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 w-full px-4 py-8 flex justify-between items-center border-b bg-white">
      <p>Sun Valley Cleaners</p>
      <HeaderNav />
      <Link
        href="/book-appointment"
        className={cn(buttonVariants({ variant: "default" }))}
      >
        Book now!
      </Link>
    </header>
  );
}
