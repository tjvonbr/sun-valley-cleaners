import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface AppointmentLinkProps {
  className?: string;
}

export default function AppointmentLink({ className }: AppointmentLinkProps) {
  return (
    <Link
      href="/book-appointment"
      className={cn(buttonVariants({ variant: "default" }), className)}
    >
      Book an appointment!
    </Link>
  );
}
