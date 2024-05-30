import { navigation } from "@/lib/consts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IconMenu } from "./ui/icons";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconMenu className="size-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/" className="w-full">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about" className="w-full">
              About Us
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact" className="w-full">
              Contact
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Locations</DropdownMenuLabel>
        <DropdownMenuGroup>
          {navigation.locations.map((location, idx) => (
            <DropdownMenuItem key={idx}>
              <Link href={location.href} className="w-full">
                {location.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Services</DropdownMenuLabel>
        <DropdownMenuGroup>
          {navigation.services.map((service, idx) => (
            <DropdownMenuItem key={idx}>
              <Link href={service.href} className="w-full">
                {service.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
