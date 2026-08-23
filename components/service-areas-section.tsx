import Link from "next/link";

interface ServiceArea {
  name: string;
  href: string;
}

interface ServiceAreasSectionProps {
  serviceName: string;
  areas: ServiceArea[];
}

export default function ServiceAreasSection({
  serviceName,
  areas,
}: ServiceAreasSectionProps) {
  return (
    <div className="py-12 px-5 w-full flex flex-col items-center space-y-6 text-center bg-card">
      <h2 className="text-3xl text-foreground font-bold">
        {serviceName} Service Areas
      </h2>
      <p className="max-w-2xl text-muted-foreground">
        Our {serviceName.toLowerCase()} service is available across the Phoenix
        metro area. Select your city to learn more about local availability.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {areas.map((area) => (
          <Link
            key={area.href}
            href={area.href}
            className="underline text-secondary font-semibold"
          >
            {area.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
