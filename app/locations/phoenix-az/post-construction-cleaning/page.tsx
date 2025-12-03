import Image from "next/image";
import FaqSection from "@/components/faq-section";
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
  title: "Comprehensive Post Construction Cleaning in Phoenix, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners offers comprehensive post construction cleaning in Phoenix, AZ to remove debris, dust, and residue from your new space. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/phoenix-az/post-construction-cleaning",
  },
};

const faqs = [
  {
    question: "What does comprehensive post construction cleaning in Phoenix, AZ include?",
    answer:
      "Comprehensive post construction cleaning in Phoenix, AZ includes debris removal, fine dust elimination, surface sanitization, window cleaning, and floor finishing. <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> ensures your newly constructed or renovated space is move-in ready.",
  },
  {
    question:
      "When should I schedule post construction cleaning in Phoenix, AZ?",
    answer:
      "Schedule post construction cleaning in Phoenix, AZ after all construction work is complete but before moving in furniture or belongings. Sun Valley Cleaners recommends booking immediately after final inspections for best results.",
  },
  {
    question:
      "How long does post construction cleaning in Phoenix, AZ take?",
    answer:
      "The duration of post construction cleaning in Phoenix, AZ depends on the project size and debris level. Sun Valley Cleaners typically completes residential projects in 4-8 hours, ensuring thorough cleaning without rushing.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Comprehensive Post Construction Cleaning in Phoenix, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              Sun Valley Cleaners provides comprehensive post construction
              cleaning in Phoenix, AZ that transforms construction sites into
              pristine living spaces. From sawdust and drywall dust to adhesive
              residue and debris, we handle every aspect of post-build cleanup
              with professional precision.
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
            alt="comprehensive post construction cleaning in Phoenix, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Post Construction Cleaning in
                Phoenix, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Complete. Professional. Move-in Ready.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Full Debris and Dust Removal:</b> Our comprehensive post
                    construction cleaning in Phoenix, AZ eliminates all
                    construction debris, fine dust particles, and leftover
                    materials. We reach every corner, vent, and surface for a
                    truly clean space.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Surface Protection and Care:</b> We understand new
                    construction materials require careful handling. Our Phoenix
                    team uses appropriate cleaning methods for each surface type
                    to protect finishes while removing construction residue.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Builder and Contractor Partnerships:</b> We work with
                    Phoenix builders and contractors to meet project timelines.
                    Our reliable scheduling and efficient service help ensure
                    smooth project completion and happy homeowners.
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
              alt="post construction cleaning in Phoenix home"
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
                Why Post Construction Cleaning Matters in Phoenix, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                From construction site to dream home
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Protects Indoor Air Quality in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Phoenix,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Phoenix, AZ
                    </a>:</b> Construction dust contains harmful particles that
                    linger in the air. Comprehensive post construction cleaning
                    removes these contaminants, ensuring safe breathing air for
                    new occupants.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Reveals True Craftsmanship:</b> Construction residue
                    hides the beauty of new finishes, fixtures, and surfaces.
                    Professional cleaning reveals the true quality of
                    construction work and lets new spaces shine.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Prevents Long-Term Damage:</b> Construction dust and
                    debris can scratch surfaces and clog HVAC systems if not
                    properly removed. Thorough post construction cleaning
                    protects your investment from day one.
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
              alt="post construction cleaning in Phoenix AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Phoenix, AZ" />
        {/* FAQ SECTION - End */}
      </main>
    </>
  );
}
