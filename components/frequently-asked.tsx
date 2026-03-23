import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FrequentlyAskedQuestions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What house cleaning service does your company provide?
        </AccordionTrigger>
        <AccordionContent>
          We offer a comprehensive range of cleaning services, including room
          cleaning, kitchen cleaning, and various other specialized cleaning
          solutions tailored to meet your needs.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How do I schedule a cleaning with your company?
        </AccordionTrigger>
        <AccordionContent>
          We want to make booking an appointment as simple as possible for you
          and make the pricing as transparent as possible. You can click{" "}
          <Link href="/book-appointment" className="underline">
            here
          </Link>{" "}
          to head to our page with the appointment booking form, but if prefer
          to book your appointment over the phone, we can do that too! You can
          reach us at (623) 295-0506!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Can I customize the house cleaning service based on my specific
          requirements?
        </AccordionTrigger>
        <AccordionContent>
          Of course! The appointment booking form{" "}
          <Link href="/book-appointment" className="underline">
            here
          </Link>{" "}
          is detailed enough to give you an opportunity to communicate what you
          want cleaned and do not want cleaned. You will notice the cost of your
          cleaning change in real-time as you update your preferences and
          cleaning services. If there is a particular service that is not
          included on the form, or you need even further customization, please
          give us a call and we would be happy to accomodate you!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          What areas do you serve, and do you have specific hours?
        </AccordionTrigger>
        <AccordionContent>
          At the moment, we are happily serving Phoenix, Scottsdale, Paradise
          Valley, Tempe, Mesa, Queen Creek, Chandler, and Gilbert communities!
          If you don&apos;t see your city on this list, give us a call and we
          will work something out. We are always looking to expand our house
          cleaning services!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
