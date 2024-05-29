import { navigation } from "@/lib/consts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { IconCaretDown } from "./ui/icons";
import Link from "next/link";

export default function ServicesDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        Services <IconCaretDown className="ml-1 size-3 text-black" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navigation.services.map((service, idx) => (
          <DropdownMenuItem key={idx}>
            <Link href={service.href} className="w-full">
              {service.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
