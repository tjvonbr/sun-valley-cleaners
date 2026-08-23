import { cn } from "@/lib/utils";
import AppointmentLink from "./appointment-link";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  link?: string;
}

export default function ServiceCard({
  title,
  description,
  children,
  className,
  link = "",
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "px-5 py-8 flex flex-col items-center space-y-2 rounded-md text-center bg-background",
        className
      )}
    >
      {children}
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div>
        {link !== "" ? (
          <Link
            href={link}
            className={cn(buttonVariants({ variant: "default" }), className)}
          >
            {link?.includes("cleaning")
              ? "Explore Service"
              : "Explore Service Area"}
          </Link>
        ) : (
          <AppointmentLink className="mt-6" />
        )}
      </div>
    </div>
  );
}
