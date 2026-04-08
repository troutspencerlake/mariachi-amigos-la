import { NextResponse } from "next/server";

// ── Contact Form API Route ──────────────────────────────────
//
// This API route handles booking/contact form submissions.
//
// TO ENABLE EMAIL SENDING:
// 1. Install nodemailer: npm install nodemailer @types/nodemailer
// 2. Add to .env.local:
//      SMTP_HOST=smtp.gmail.com
//      SMTP_PORT=587
//      SMTP_USER=your@gmail.com
//      SMTP_PASS=your-app-password
//      CONTACT_EMAIL=mariachiamigosla@gmail.com
// 3. Uncomment and configure the nodemailer section below.
//
// ALTERNATIVE: Use Resend (https://resend.com) — simpler setup:
//   npm install resend
//   Add RESEND_API_KEY to .env.local

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

    // ── Log for development ─────────────────────────────────
    if (process.env.NODE_ENV === "development") {
      console.log("\n📧 New Booking Request:");
      console.log(emailBody);
    }

    // ── NODEMAILER INTEGRATION (uncomment to enable) ────────
    //
    // import nodemailer from "nodemailer";
    //
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT) || 587,
    //   secure: false,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: `"${body.name}" <${process.env.SMTP_USER}>`,
    //   to: process.env.CONTACT_EMAIL,
    //   replyTo: body.email,
    //   subject: `🎺 New Booking Request: ${body.eventType} on ${body.eventDate}`,
    //   text: emailBody,
    // });
    //
    // ── RESEND INTEGRATION (uncomment to enable) ────────────
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "bookings@mariachiamigosla.com",
    //   to: "mariachiamigosla@gmail.com",
    //   reply_to: body.email,
    //   subject: `🎺 New Booking: ${body.eventType} — ${body.eventDate}`,
    //   text: emailBody,
    // });

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
