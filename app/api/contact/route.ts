import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { clinic } from "@/lib/data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: { name?: string; phone?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!name || !phone || !message) {
    return NextResponse.json(
      { error: "Name, phone and message are required." },
      { status: 400 }
    );
  }
  if (name.length > 200 || phone.length > 40 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || clinic.email;
  const from = process.env.SMTP_FROM || user;

  if (!host || !user || !pass) {
    console.error("SMTP env vars missing — set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local");
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"AVK Website" <${from}>`,
      to,
      replyTo: email || undefined,
      subject: `New enquiry from ${name}`,
      text: [
        `Name:    ${name}`,
        `Phone:   ${phone}`,
        `Email:   ${email || "—"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px">
          <h2 style="margin:0 0 16px">New enquiry from AVK website</h2>
          <p style="margin:4px 0"><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p style="margin:4px 0"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p style="margin:4px 0"><strong>Email:</strong> ${escapeHtml(email || "—")}</p>
          <p style="margin:16px 0 4px"><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;margin:0;padding:12px;background:#f6f3ec;border-radius:6px">${escapeHtml(message)}</p>
        </div>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact form send failed", err);
    return NextResponse.json(
      { error: "Could not send right now. Please try WhatsApp or call us instead." },
      { status: 500 }
    );
  }
}
