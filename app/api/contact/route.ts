import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy initialize Resend client (only when needed, not at build time)
const getResendClient = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(process.env.RESEND_API_KEY);
};

// The request body comes from the visitor, so every field is untrusted
interface ContactRequest {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown; // honeypot: stays empty for people, bots tend to fill it in
}

// Maximum length per field, in characters
const FIELD_RULES = {
  name: { label: "Name", max: 100 },
  email: { label: "Email", max: 254 },
  subject: { label: "Subject", max: 200 },
  message: { label: "Message", max: 5000 },
} as const;

type Field = keyof typeof FIELD_RULES;

// Simple format check: something@domain.tld, without spaces or a second "@"
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Characters that are rare in real addresses but would change a mailto: link
const EMAIL_FORBIDDEN_CHARS = /[<>"(),;:?&#[\]\\]/;

// Escape visitor-supplied text before it is placed in the notification HTML
const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const asText = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body: ContactRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Honeypot filled in: answer as if it worked, but send nothing
    if (body.website !== undefined && body.website !== null && String(body.website).trim() !== "") {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Name and subject are single-line fields: collapse line breaks and tabs
    const fields: Record<Field, string> = {
      name: asText(body.name).replace(/\s+/g, " "),
      email: asText(body.email),
      subject: asText(body.subject).replace(/\s+/g, " "),
      message: asText(body.message),
    };

    // Validate required fields
    if (!fields.name || !fields.email || !fields.subject || !fields.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate maximum lengths
    for (const field of Object.keys(FIELD_RULES) as Field[]) {
      const { label, max } = FIELD_RULES[field];
      if (fields[field].length > max) {
        return NextResponse.json(
          { error: `${label} is too long (max ${max} characters)` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    if (!EMAIL_PATTERN.test(fields.email) || EMAIL_FORBIDDEN_CHARS.test(fields.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Validate minimum message length (prevent spam)
    if (fields.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    // Escaped versions for the HTML body; line breaks in the message become <br>
    const safeName = escapeHtml(fields.name);
    const safeEmail = escapeHtml(fields.email);
    const safeSubject = escapeHtml(fields.subject);
    const safeMessage = escapeHtml(fields.message).replace(/\r\n|\r|\n/g, "<br>");
    const replyHref = escapeHtml(
      `mailto:${fields.email}?subject=${encodeURIComponent(`Re: ${fields.subject}`)}`
    );

    // Send the notification to hello@zenithreborn.com (no e-mail goes to the visitor)
    try {
      const resend = getResendClient();
      const { error: sendError } = await resend.emails.send({
        from: "Zenith Reborn Website <hello@zenithreborn.com>",
        to: "hello@zenithreborn.com",
        replyTo: fields.email,
        subject: `[Contact Form] ${fields.subject}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F3F4F6; color: #1F2937;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background: #FFFFFF; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 40px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom: 24px; border-bottom: 2px solid #FFD700;">
              <h1 style="margin: 0; font-size: 24px; font-weight: bold; color: #1F2937;">
                🔥 New Contact Form Submission
              </h1>
            </td>
          </tr>

          <!-- Sender Info -->
          <tr>
            <td style="padding: 24px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #6B7280; width: 100px;">From:</td>
                  <td style="padding: 8px 0; color: #1F2937;">
                    <strong>${safeName}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #6B7280;">Email:</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${safeEmail}" style="color: #FF6B35; text-decoration: none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #6B7280;">Subject:</td>
                  <td style="padding: 8px 0; color: #1F2937;">
                    ${safeSubject}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 24px 0; border-top: 1px solid #E5E7EB;">
              <h2 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #6B7280; text-transform: uppercase;">
                Message
              </h2>
              <div style="padding: 20px; background-color: #F9FAFB; border-radius: 8px; border-left: 4px solid #FFD700;">
                <p style="margin: 0; line-height: 1.6; color: #1F2937; overflow-wrap: break-word;">${safeMessage}</p>
              </div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 24px 0; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #6B7280;">
                Quick Actions:
              </p>
              <a href="${replyHref}" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #FFD700 0%, #FF6B35 100%); color: #FFFFFF; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; margin-right: 12px;">
                Reply to ${safeName}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top: 24px; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0; font-size: 12px; color: #9CA3AF; line-height: 1.6;">
                This message was sent via the contact form on <a href="https://zenithreborn.com" style="color: #FFD700; text-decoration: none;">zenithreborn.com</a><br>
                Timestamp: ${new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })} (Amsterdam time)
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      });

      // The Resend SDK reports API errors in the result instead of throwing
      if (sendError) {
        throw new Error(`Resend error (${sendError.name}): ${sendError.message}`);
      }
    } catch (emailError) {
      console.error("Failed to send contact form email:", emailError);
      return NextResponse.json(
        {
          error: "Failed to send message. Please try again or email us directly at hello@zenithreborn.com",
        },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
