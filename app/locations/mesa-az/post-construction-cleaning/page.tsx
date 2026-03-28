import Image from "next/image";
import FaqSection from "@/components/faq-section";
import AlsoAvailableSection from "@/components/also-available-section";
import icon from "/public/hero.svg";
import femaleCleaner from "../../../../public/female-cleaner.svg";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  IconBed,
  IconBox,
  IconBoxOpen,
  IconCircleCheck,
  IconEvent,
  IconOven,
  IconSprayBottle,
} from "@/components/ui/icons";

export const metadata = {
  title: "Professional Post Construction Cleaning in Mesa, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners provides professional post construction cleaning in Mesa, AZ to clear dust, debris, and buildup from your new property. Call today!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/mesa-az/post-construction-cleaning",
  },
};

const faqs = [
  {
    question: "What is included in professional post construction cleaning in Mesa, AZ?",
    answer:
      "Professional post construction cleaning in Mesa, AZ covers debris hauling, dust removal, surface sanitization, window detailing, and floor polishing. Sun Valley Cleaners guarantees your newly constructed or remodeled property is pristine and ready for move-in.",
  },
  {
    question:
      "When should I book post construction cleaning in Mesa, AZ?",
    answer:
      "Schedule post construction cleaning in Mesa, AZ once all construction and finishing touches are complete but before moving in belongings. <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> suggests booking immediately after final inspections for the best outcome.",
  },
  {
    question:
      "How much time does post construction cleaning in Mesa, AZ require?",
    answer:
      "The duration of post construction cleaning in Mesa, AZ depends on property size and the amount of construction residue. Sun Valley Cleaners typically finishes residential projects within 4-8 hours with complete attention to detail.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Professional Post Construction Cleaning in Mesa, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              provides professional post construction cleaning in Mesa, AZ that
              converts messy build sites into spotless, move-in ready spaces.
              From concrete dust and drywall particles to adhesive marks and
              construction scraps, we tackle every aspect of post-build cleanup
              with skilled precision.
            </p>

            <Link
              href="/book-appointment"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Book an appointment today!
            </Link>
          </div>
          <Image
            src={icon}
            height="500"
            width="500"
            alt="professional post construction cleaning in Mesa, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Post Construction Cleaning in
                Mesa, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Professional. Precise. Move-in Ready.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Comprehensive Debris Elimination:</b> Our professional post
                    construction cleaning in Mesa, AZ removes all
                    construction waste, fine dust, and residual
                    materials. We address every surface, vent, and hidden area for a
                    completely clean result.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Expert Surface Care in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Mesa,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Mesa, AZ
                    </a>:</b> We know new
                    construction materials demand specialized handling. Our Mesa
                    crew uses proper cleaning methods for each surface type
                    to protect new finishes while eliminating construction grime.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Contractor and Builder Support:</b> We partner with
                    Mesa contractors and builders to meet tight deadlines.
                    Our consistent scheduling and professional service ensure
                    smooth project completions and delighted property owners.
                  </p>
                </div>
              </div>
              <Link
                href="/book-appointment"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Book an appointment now!
              </Link>
            </div>

            <Image
              src={femaleCleaner}
              height="750"
              width="500"
              alt="post construction cleaning in Mesa home"
              className="bg-background"
            />
          </div>
        </div>
        {/* Benefits SECTION - End */}

        {/* Why SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col-reverse lg:flex-row-reverse items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Post Construction Cleaning Matters in Mesa, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                From construction zone to dream home
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Ensures Healthy Indoor Air:</b> Construction dust contains hazardous particles that
                    linger in enclosed spaces. Professional post construction cleaning
                    removes these contaminants, providing safe air quality for
                    new occupants and their families.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Highlights Quality Finishes:</b> Construction residue
                    masks the beauty of new installations, fixtures, and surfaces.
                    Expert cleaning reveals the true quality of
                    craftsmanship and allows new spaces to truly impress.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Avoids Long-Term Damage:</b> Construction dust and
                    debris can scratch finishes and block HVAC systems if not
                    properly cleared. Professional post construction cleaning
                    protects your investment right from the start.
                  </p>
                </div>
              </div>
              <Link
                href="/book-appointment"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Book an appointment now!
              </Link>
            </div>

            <Image
              src={femaleCleaner}
              height="750"
              width="500"
              alt="post construction cleaning in Mesa AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Mesa, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Post-Construction Cleaning"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/post-construction-cleaning" },
            { name: "Chandler, AZ", href: "/locations/chandler-az/post-construction-cleaning" },
            { name: "Gilbert, AZ", href: "/locations/gilbert-az/post-construction-cleaning" },
          ]}
          relatedServices={[
            { name: "standard cleaning", href: "/services/house-cleaning" },
            { name: "deep cleaning", href: "/services/deep-cleaning" },
            { name: "move-in/move-out cleaning", href: "/services/move-cleaning" },
            { name: "Airbnb cleaning", href: "/services/airbnb-cleaning" },
          ]}
        />
      </main>
    </>
  );
}
