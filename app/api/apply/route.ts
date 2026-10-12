import { NextResponse } from "next/server";
import { escapeSlack, postSlackMessage } from "@/lib/slack";

// Receives job applications from the /careers form and adds them to the Airtable
// applicants table. Expected Airtable fields (all single line text unless noted):
// Name, Email, Phone, Role, Experience, Transportation, About (long text).

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = {
  name: 100,
  role: 100,
  city: 100,
  email: 200,
  phone: 30,
  experience: 50,
  driversLicense: 100,
  transportation: 10,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(body: Record<string, unknown>, key: keyof typeof LIMITS): string {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, LIMITS[key]) : "";
}

export async function POST(request: Request) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_APPLICANTS_TABLE_ID;
  if (!token || !baseId || !tableId) {
    return NextResponse.json({ error: "Applications are not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: pretend success so bots don't retry.
  if (typeof body.website === "string" && body.website !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = field(body, "name");
  const role = field(body, "role");
  const city = field(body, "city");
  const email = field(body, "email");
  const phone = field(body, "phone");
  const experience = field(body, "experience")
  const driversLicense = field(body, "driversLicense")
  const transportation = field(body, "transportation")

  if (!name || !phone || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Name, phone, and a valid email are required" }, { status: 400 });
  }

  const payload = {
    fields: {
      Name: name,
      Role: role,
      City: city,
      Email: email,
      Phone: phone,
      Experience: experience,
      "Driver's License": driversLicense,
      "Reliable Transportation": transportation,
    },
  };
  console.log("Apply form body:", body);
  console.log("Airtable payload:", JSON.stringify(payload, null, 2));

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    console.error("Airtable applicant create failed:", res.status, await res.text());
    return NextResponse.json({ error: "There was an error creating a prospect record" }, { status: 502 });
  }

  // Awaited so the serverless function isn't frozen before Slack is notified.
  await postSlackMessage(
    [
      `:broom: *New applicant: ${escapeSlack(name)}*${role ? ` — ${escapeSlack(role)}` : ""}`,
      `Phone: ${escapeSlack(phone)}`,
      `Email: ${escapeSlack(email)}`,
      `City: ${escapeSlack(city) || "—"}`,
      `Experience: ${escapeSlack(experience) || "—"}`,
      `Driver's license: ${escapeSlack(driversLicense) || "—"}`,
      `Reliable transportation: ${escapeSlack(transportation) || "—"}`,
    ].join("\n"),
  );
  return NextResponse.json({ ok: true });
}
