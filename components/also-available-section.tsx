import Link from "next/link";

interface AlsoAvailableArea {
  name: string;
  href: string;
}

interface AlsoAvailableSectionProps {
  serviceName: string;
  areas: AlsoAvailableArea[];
  relatedServices?: { name: string; href: string }[];
}

export default function AlsoAvailableSection({
  serviceName,
  areas,
  relatedServices,
}: AlsoAvailableSectionProps) {
  return (
    <div className="py-12 px-5 w-full flex flex-col items-center space-y-6 text-center bg-card">
      <h2 className="text-3xl text-foreground font-bold">
        {serviceName} Also Available In
      </h2>
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
      {relatedServices && relatedServices.length > 0 && (
        <div className="mt-4">
          <p className="text-muted-foreground">
            Looking for a different service? Check out our{" "}
            {relatedServices.map((service, index) => (
              <span key={service.href}>
                <Link
                  href={service.href}
                  className="underline text-secondary"
                >
                  {service.name}
                </Link>
                {index < relatedServices.length - 2
                  ? ", "
                  : index === relatedServices.length - 2
                    ? ", or "
                    : ""}
              </span>
            ))}
            .
          </p>
        </div>
      )}
    </div>
  );
}
