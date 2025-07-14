// components/FaqSection.tsx
"use client";

import Image from "next/image";

export default function FaqSection({
  faqs,
  city,
}: {
  faqs: { question: string; answer: string }[];
  city: string;
}) {
  return (
    <div className="px-8 py-12 w-full bg-white">
      <section id="faq" className="bg-white">
        <div className="max-w-md px-6 mx-auto pb-28 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div className="flex flex-col justify-center text-center">
            <p className="text-lg font-semibold text-custom">FAQss</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-black">
              Frequently Asked Questions
            </h2>
            <p className="pb-10 mx-auto mt-5 text-xl text-gray-900 max-w-prose">
              Answering your questions about house cleaning in {city}.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/20">
              {faqs.map((faq, idx) => (
                <div className="pt-6" key={idx}>
                  <dt>
                    <button
                      type="button"
                      className="flex items-start justify-between w-full text-left text-black"
                      onClick={(e) => {
                        const dd =
                          e.currentTarget.parentElement!.nextElementSibling!;
                        dd.classList.toggle("hidden");
                      }}
                    >
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="flex items-center ml-6 h-7">
                        <Image
                          src="/dropdown-icon.svg"
                          className="w-6"
                          alt="Dropdown Icon."
                          width={24}
                          height={24}
                        />
                      </span>
                    </button>
                  </dt>
                  <dd className="hidden pr-12 mt-2">
                    <p className="text-base leading-7 text-gray-700">
                      {faq.answer}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
