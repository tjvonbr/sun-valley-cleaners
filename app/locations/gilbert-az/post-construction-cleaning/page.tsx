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
  title: "Thorough Post Construction Cleaning in Gilbert, AZ | Sun Valley Cleaners",
  description:
    "Sun Valley Cleaners offers thorough post construction cleaning in Gilbert, AZ to remove dust, debris, and residue from your new space. Call now!",
  alternates: {
    canonical:
      "https://www.sunvalleycleaners.com/locations/gilbert-az/post-construction-cleaning",
  },
};

const faqs = [
  {
    question: "What does thorough post construction cleaning in Gilbert, AZ include?",
    answer:
      "Thorough post construction cleaning in Gilbert, AZ includes complete debris removal, fine dust extraction, surface polishing, window cleaning, and floor treatment. <a href='https://www.sunvalleycleaners.com/' target='_blank' class='underline text-secondary'>Sun Valley Cleaners</a> ensures your newly built or renovated property is spotless and ready for occupancy.",
  },
  {
    question:
      "When is the best time to schedule post construction cleaning in Gilbert, AZ?",
    answer:
      "The ideal time for post construction cleaning in Gilbert, AZ is after all construction and finishing work is complete but before furniture delivery. Sun Valley Cleaners recommends booking right after final walkthroughs for optimal results.",
  },
  {
    question:
      "How long does post construction cleaning in Gilbert, AZ typically take?",
    answer:
      "The timeframe for post construction cleaning in Gilbert, AZ varies based on square footage and debris accumulation. Sun Valley Cleaners generally completes residential cleanups in 4-8 hours, ensuring meticulous attention to every detail.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <div className="px-16 md:px-0 py-10 lg:py-20 w-full flex flex-col lg:flex-row items-center md:max-w-[80rem]">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
            <h1 className="text-4xl lg:text-6xl text-primary font-black">
              Thorough Post Construction Cleaning in Gilbert, AZ
            </h1>
            <p className="text-muted-foreground lg:text-lg">
              <a
                href="https://www.sunvalleycleaners.com/"
                className="underline text-secondary"
                target="_blank"
              >
                Sun Valley Cleaners
              </a>{" "}
              delivers thorough post construction cleaning in Gilbert, AZ that
              transforms dusty construction sites into immaculate living spaces.
              From drywall dust and sawdust to paint splatters and adhesive
              residue, we handle every detail of post-build cleanup with expert
              care and precision.
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
            alt="thorough post construction cleaning in Gilbert, AZ"
          />
        </div>

        {/* Benefits SECTION - Start */}
        <div className="px-16 py-10 lg:py-20 w-full items-center bg-white flex flex-col lg:flex-row justify-center">
          <div className="md:max-w-[80rem] flex flex-col lg:flex-row items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4 ">
              <h2 className="text-3xl lg:text-5xl text-black font-bold">
                Why Choose Sun Valley Cleaners for Post Construction Cleaning in
                Gilbert, AZ?
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                Thorough. Detailed. Move-in Ready.
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Complete Debris and Dust Extraction in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Gilbert,_Arizona"
                      target="_blank"
                      className="underline text-secondary"
                    >
                      Gilbert, AZ
                    </a>:</b> Our thorough post
                    construction cleaning eliminates all
                    construction waste, fine particulates, and leftover
                    materials. We meticulously clean every corner, vent, and crevice for a
                    truly pristine environment.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Careful Surface Treatment:</b> We recognize that new
                    construction finishes need gentle handling. Our Gilbert
                    team applies appropriate cleaning techniques for each surface type
                    to preserve finishes while removing all construction residue.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Builder and Developer Coordination:</b> We collaborate with
                    Gilbert builders and developers to accommodate project schedules.
                    Our dependable timing and efficient service help ensure
                    seamless project handoffs and satisfied homeowners.
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
              alt="post construction cleaning in Gilbert home"
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
                Why Post Construction Cleaning Matters in Gilbert, AZ
              </h2>
              <p className="text-sm lg:text-lg text-slate-400">
                From build site to beautiful home
              </p>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Safeguards Indoor Air Quality:</b> Construction dust harbors harmful particles that
                    remain suspended in the air. Thorough post construction cleaning
                    eliminates these pollutants, ensuring healthy breathing air for
                    new residents and families.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Showcases Quality Workmanship:</b> Construction dust and residue
                    obscure the beauty of new finishes, fixtures, and installations.
                    Professional cleaning unveils the true craftsmanship of
                    construction work and lets new spaces truly shine.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 pt-1">
                    <IconCircleCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-lg text-black font-semibold">
                    <b>Protects Your Investment:</b> Construction debris and
                    dust can damage surfaces and clog HVAC systems if not
                    thoroughly removed. Detailed post construction cleaning
                    safeguards your property value from the very first day.
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
              alt="post construction cleaning in Gilbert AZ"
              className="bg-background"
            />
          </div>
        </div>
        {/* Why SECTION - End */}

        {/* FAQ SECTION - Start */}
        <FaqSection faqs={faqs} city="Gilbert, AZ" />
        {/* FAQ SECTION - End */}

        <AlsoAvailableSection
          serviceName="Post-Construction Cleaning"
          areas={[
            { name: "Phoenix, AZ", href: "/locations/phoenix-az/post-construction-cleaning" },
            { name: "Chandler, AZ", href: "/locations/chandler-az/post-construction-cleaning" },
            { name: "Mesa, AZ", href: "/locations/mesa-az/post-construction-cleaning" },
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
