import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  location: string;
  musicians?: string;
  duration?: string;
  requests?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // ── Validate required fields ────────────────────────────
    const required = ["name", "email", "phone", "eventDate", "eventType", "location"];
    const missing = required.filter((field) => !body[field as keyof ContactFormData]);

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // ── Basic email validation ──────────────────────────────
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ── Construct the email content ─────────────────────────
    const emailBody = `
NEW BOOKING REQUEST — Mariachi Amigos LA
==========================================

Customer Information:
  Name:    ${body.name}
  Email:   ${body.email}
  Phone:   ${body.phone}

Event Details:
  Date:       ${body.eventDate}
  Type:       ${body.eventType}
  Location:   ${body.location}
  Musicians:  ${body.musicians || "Not specified"}
  Duration:   ${body.duration || "Not specified"}

Special Requests:
${body.requests || "None"}

==========================================
Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}
Reply to: ${body.email}
    `.trim();

    // ── Send email via Resend ───────────────────────────────
    const { error } = await resend.emails.send({
      from: "Mariachi Amigos LA <bookings@mariachiamigosla.com>",
      to: "mariachiamigosla@gmail.com",
      replyTo: body.email,
      subject: `New Booking Request: ${body.eventType} on ${body.eventDate}`,
      text: emailBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please call us directly at (323) 767-6657." },
        { status: 500 }
      );
    }

    // ── Success response ─────────────────────────────────────
    return NextResponse.json(
      {
        success: true,
        message: "Booking request received. We will contact you within 24 hours.",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

// Only allow POST
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
