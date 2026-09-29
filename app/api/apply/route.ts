import { NextResponse } from "next/server";

// Receives job applications from the /careers form and adds them to the Airtable
// applicants table. Expected Airtable fields (all single line text unless noted):
// Name, Email, Phone, Role, Experience, Transportation, About (long text).

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = {
  name: 100,
  email: 200,
  phone: 30,
  role: 100,
  experience: 50,
  transportation: 10,
  about: 2000,
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
  const email = field(body, "email");
  const phone = field(body, "phone");
  if (!name || !phone || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Name, phone, and a valid email are required" }, { status: 400 });
  }

  const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        Name: name,
        Email: email,
        Phone: phone,
        Role: field(body, "role"),
        Experience: field(body, "experience"),
        Transportation: field(body, "transportation"),
        About: field(body, "about"),
      },
    }),
  });
  if (!res.ok) {
    console.error("Airtable applicant create failed:", res.status, await res.text());
    return NextResponse.json({ error: "Could not save application" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
