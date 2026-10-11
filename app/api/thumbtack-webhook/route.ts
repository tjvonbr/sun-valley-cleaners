import { createHash, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

// Receives Thumbtack `NegotiationCreatedV4` webhooks (new leads). Thumbtack authenticates
// deliveries with HTTP Basic auth using the username/password supplied when the webhook was
// registered for the business. For now the lead is only logged; forwarding it to SnipeyLead
// is the next step (see handleLead).
// Docs: https://developers.thumbtack.com/docs/marketplace/negotiations

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TAG = "[thumbtack-webhook]";

// Subset of the NegotiationCreatedV4 schema. IDs are int64 strings.
// https://developers.thumbtack.com/api-reference#tag/Negotiations/operation/negotiationCreatedV4
interface NegotiationV4 {
  negotiationID: string;
  createdAt: string;
  customer: { customerID: string; firstName: string; lastName: string; phone: string };
  business: { businessID: string; name: string; imageURL: string; phoneNumber?: string; accessCode?: string };
  request: {
    requestID: string;
    customerID: string;
    description: string;
    category: { categoryID: string; name: string };
    location: { city: string; state: string; zipCode: string; address1?: string; address2?: string };
    details: Array<{ question: string; answer: string }>;
    attachments: Array<{ fileName?: string; fileSize?: number; mimeType?: string; url?: string; description?: string }>;
    proposedTimes?: Array<{ start: string; end: string }>;
    booking?: { start: string; duration: number };
    travelPreferences?: Array<"CustomerTravelToProvider" | "ProviderTravelToCustomer" | "Remote">;
  };
  estimate: {
    type?: "Fixed" | "PerUnit" | "OnSite" | "Hourly" | "MoreInfo";
    pricePerUnit?: string;
    unitQuantity?: number;
    unitName?: string;
    total?: string;
  };
  status?: "Open" | "Canceled" | "Picked";
  leadPrice?: string;
  leadPriceBreakdown?: { subtotal: string; salesTax?: string };
  chargeState?: "Created" | "Pending" | "Charged" | "Refunded";
  requestReviewLink?: string;
  refundRequestLink?: string;
}

interface NegotiationCreatedEvent {
  event: { eventType: string; description: string; webhookID: string; triggeredAt: string };
  data: NegotiationV4;
}

function isAuthorized(request: Request): boolean {
  const user = process.env.THUMBTACK_WEBHOOK_USER;
  const password = process.env.THUMBTACK_WEBHOOK_PASSWORD;
  if (!user || !password) return false;

  // Hash both sides so timingSafeEqual gets equal-length buffers.
  const digest = (value: string) => createHash("sha256").update(value).digest();
  const expected = `Basic ${Buffer.from(`${user}:${password}`).toString("base64")}`;
  const received = request.headers.get("authorization") ?? "";
  return timingSafeEqual(digest(received), digest(expected));
}

// Placeholder for the SnipeyLead integration. Throwing makes the route return a 502 so
// Thumbtack retries the delivery.
async function handleLead(negotiation: NegotiationV4): Promise<void> {
  // Summary only: the full payload includes the customer's phone number.
  const { request } = negotiation;
  console.log(
    `${TAG} New lead ${negotiation.negotiationID}: ${request.category.name} in ` +
      `${request.location.city}, ${request.location.state} ${request.location.zipCode}`,
  );
}

export async function POST(request: Request) {
  if (!process.env.THUMBTACK_WEBHOOK_USER || !process.env.THUMBTACK_WEBHOOK_PASSWORD) {
    console.error(`${TAG} THUMBTACK_WEBHOOK_USER / THUMBTACK_WEBHOOK_PASSWORD are not set`);
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }
  if (!isAuthorized(request)) {
    console.warn(`${TAG} Rejected request: bad or missing Authorization header`);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    console.warn(`${TAG} Rejected request: invalid JSON body`);
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { event, data } = (payload ?? {}) as Partial<NegotiationCreatedEvent>;
  if (event?.eventType !== "NegotiationCreatedV4" || !data?.negotiationID || !data.request) {
    // Ack with 200 so Thumbtack doesn't retry event types we don't handle.
    console.log(`${TAG} Ignored event: ${event?.eventType ?? "unknown"}`);
    return NextResponse.json({ ok: true, skipped: `Unsupported event: ${event?.eventType ?? "unknown"}` });
  }

  try {
    await handleLead(data);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(`${TAG} Failed to handle lead ${data.negotiationID}`, error);
    return NextResponse.json({ error: "Could not process lead" }, { status: 502 });
  }
}
