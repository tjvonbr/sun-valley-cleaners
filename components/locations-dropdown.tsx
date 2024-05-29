import { navigation } from "@/lib/consts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IconCaretDown } from "./ui/icons";
import Link from "next/link";

export default function LocationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        Locations <IconCaretDown className="ml-1 size-3 text-black" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navigation.locations.map((location, idx) => (
          <DropdownMenuItem key={idx}>
            <Link href={location.href} className="w-full">
              {location.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
