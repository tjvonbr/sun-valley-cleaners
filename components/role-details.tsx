"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const roleOverview = {
  title: "Professional House Cleaner",
  facts: [
    { label: "Location", value: "Scottsdale, AZ" },
    { label: "Compensation", value: "$25 – $30 / hour" },
  ],
  intro:
    "Sun Valley Cleaners is a locally owned cleaning company serving Scottsdale and the greater Phoenix area. We're growing, and we're looking for dependable, detail-focused people to join our team.",
  summary:
    ", you will clean homes and short-term rentals across the Phoenix metro, following our cleaning checklist to leave every space spotless. You'll work on recurring residential clients, deep cleans, move-in/move-out cleans, and Airbnb turnovers.",
  responsibilities: [
    "Clean kitchens, bathrooms, bedrooms, and living areas to our checklist standard",
    "Complete Airbnb turnovers on time between guests",
    "Treat clients' homes and belongings with care and respect",
    "Communicate clearly with the team about schedules and any issues on site",
  ],
  requirements: [
    "Previous cleaning experience preferred, but we'll train the right person",
    "Reliable transportation to homes across the Phoenix area",
    "Strong attention to detail and a strong work ethic",
    "Ability to be on your feet and lift up to 25 lbs",
  ],
};

type Tab = "overview" | "application";
type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-md border border-primary/30 bg-background px-3 py-2 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function RoleDetails() {
  const [tab, setTab] = useState<Tab>("overview");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, role: roleOverview.title }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      id="role-overview"
      className="w-full max-w-5xl scroll-mt-24 px-8 py-12 flex flex-col space-y-6"
    >
      <h2 className="text-3xl lg:text-5xl text-background font-bold">
        {roleOverview.title}
      </h2>
      <div className="rounded-xl bg-background text-primary">
        <div role="tablist" className="flex gap-8 border-b border-primary/20 px-6 md:px-10">
          {(["overview", "application"] as const).map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={cn(
                "-mb-px border-b-2 py-4 text-lg capitalize transition-colors",
                tab === t
                  ? "border-primary font-semibold"
                  : "border-transparent text-primary/70 hover:text-primary"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-[16rem_1fr] md:p-10">
          <dl className="divide-y divide-primary/20">
            {roleOverview.facts.map((fact) => (
              <div key={fact.label} className="py-4 first:pt-0 last:pb-0">
                <dt>{fact.label}</dt>
                <dd className="mt-1 text-sm font-semibold uppercase tracking-widest">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          {tab === "overview" ? (
            <div className="space-y-4">
              <p>
                <strong>WHO WE ARE:</strong> {roleOverview.intro}
              </p>
              <p>
                As a <strong>{roleOverview.title}</strong>
                {roleOverview.summary}
              </p>
              <h3 className="pt-2 text-xl font-bold">What you&apos;ll do</h3>
              <ul className="list-disc space-y-1 pl-5">
                {roleOverview.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="pt-2 text-xl font-bold">What we&apos;re looking for</h3>
              <ul className="list-disc space-y-1 pl-5">
                {roleOverview.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Button type="button" onClick={() => setTab("application")}>
                Apply for this job
              </Button>
            </div>
          ) : status === "success" ? (
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Thanks for applying!</h3>
              <p>
                We received your application and will be in touch soon. Questions?
                Call us at (623) 295-0506.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1">
                  <span>Full name *</span>
                  <input name="name" required maxLength={100} autoComplete="name" className={fieldClass} />
                </label>
                <label className="space-y-1">
                  <span>Phone *</span>
                  <input name="phone" type="tel" required maxLength={30} autoComplete="tel" className={fieldClass} />
                </label>
              </div>
              <label className="block space-y-1">
                <span>Email *</span>
                <input name="email" type="email" required maxLength={200} autoComplete="email" className={fieldClass} />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1">
                  <span>Cleaning experience *</span>
                  <select name="experience" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>Select one</option>
                    <option>None</option>
                    <option>Less than 1 year</option>
                    <option>1–3 years</option>
                    <option>3+ years</option>
                  </select>
                </label>
                <label className="space-y-1">
                  <span>Reliable transportation? *</span>
                  <select name="transportation" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>Select one</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </label>
              </div>
              <label className="block space-y-1">
                <span>Tell us about yourself</span>
                <textarea name="about" rows={5} maxLength={2000} className={fieldClass} />
              </label>
              {/* Honeypot: real users never see or fill this. */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              {status === "error" && (
                <p role="alert" className="text-sm text-destructive">
                  Something went wrong. Please try again, or email
                  hello@sunvalleycleaners.com.
                </p>
              )}
              <Button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting..." : "Submit application"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
