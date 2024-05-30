import Link from "next/link";
import LocationsDropdown from "./locations-dropdown";
import ServicesDropdown from "./services-dropdown";

export default function HeaderNav() {
  return (
    <nav className="hidden md:flex items-center space-x-8 text-sm lg:text-lg">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
      <LocationsDropdown />
      <ServicesDropdown />
      <Link href="/contact" className="hover:underline">
        Contact
      </Link>
    </nav>
  );
}
