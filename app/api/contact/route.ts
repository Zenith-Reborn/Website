import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy initialize Resend client (only when needed, not at build time)
const getResendClient = () => {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(process.env.RESEND_API_KEY);
};

// Type definitions
interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Validate message length (prevent spam)
    if (body.message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    if (body.message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long (max 5000 characters)" },
        { status: 400 }
      );
    }

    // Send email to hello@zenithreborn.com
    try {
      const resend = getResendClient();
      await resend.emails.send({
        from: "Zenith Reborn Website <hello@zenithreborn.com>",
        to: "hello@zenithreborn.com",
        replyTo: body.email,
        subject: `[Contact Form] ${body.subject}`,
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
                    <strong>${body.name}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #6B7280;">Email:</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${body.email}" style="color: #FF6B35; text-decoration: none;">
                      ${body.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #6B7280;">Subject:</td>
                  <td style="padding: 8px 0; color: #1F2937;">
                    ${body.subject}
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
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #1F2937;">
${body.message}
                </p>
              </div>
            </td>
          </tr>

          <!-- Quick Actions -->
          <tr>
            <td style="padding: 24px 0; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #6B7280;">
                Quick Actions:
              </p>
              <a href="mailto:${body.email}?subject=Re: ${encodeURIComponent(body.subject)}" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #FFD700 0%, #FF6B35 100%); color: #FFFFFF; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; margin-right: 12px;">
                Reply to ${body.name}
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

      // Contact email sent successfully
    } catch (emailError) {
      console.error("Failed to send contact form email:", emailError);
      return NextResponse.json(
        {
          error: "Failed to send message. Please try again or email us directly at hello@zenithreborn.com",
        },
        { status: 500 }
      );
    }

    // Optional: Send auto-reply to sender
    try {
      const resend = getResendClient();
      await resend.emails.send({
        from: "Zenith Reborn <hello@zenithreborn.com>",
        to: body.email,
        subject: "We received your message!",
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0F0F0F; color: #F5F5F5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%); border-radius: 16px; border: 1px solid rgba(255, 215, 0, 0.2); padding: 40px;">

          <!-- Phoenix Logo/Emoji -->
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <div style="font-size: 64px; line-height: 1;">🔥</div>
            </td>
          </tr>

          <!-- Heading -->
          <tr>
            <td align="center" style="padding-bottom: 24px;">
              <h1 style="margin: 0; font-size: 32px; font-weight: bold; background: linear-gradient(135deg, #FFD700 0%, #FF6B35 50%, #8B0000 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                Message Received!
              </h1>
            </td>
          </tr>

          <!-- Body Text -->
          <tr>
            <td style="padding-bottom: 32px; font-size: 16px; line-height: 1.6; color: #D1D5DB;">
              <p style="margin: 0 0 16px 0;">Hi ${body.name}! 👋</p>
              <p style="margin: 0 0 16px 0;">
                Thanks for reaching out! We've received your message about "<strong style="color: #FFD700;">${body.subject}</strong>" and will get back to you within 24-48 hours.
              </p>
              <p style="margin: 0;">
                In the meantime, feel free to explore our <a href="https://zenithreborn.com/blog" style="color: #FFD700; text-decoration: none;">blog</a> or follow us on social media for updates.
              </p>
            </td>
          </tr>

          <!-- Social Links -->
          <tr>
            <td align="center" style="padding: 24px 0; border-top: 1px solid rgba(255, 215, 0, 0.2);">
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #9CA3AF;">Stay connected:</p>
              <div style="display: inline-block;">
                <a href="https://x.com/Zenith_Reborn" style="display: inline-block; margin: 0 8px; color: #FFD700; text-decoration: none; font-size: 24px;">𝕏</a>
                <a href="https://www.facebook.com/profile.php?id=61582656066564" style="display: inline-block; margin: 0 8px; color: #FFD700; text-decoration: none; font-size: 24px;">f</a>
                <a href="https://www.instagram.com/zenithrebornhq/" style="display: inline-block; margin: 0 8px; color: #FFD700; text-decoration: none; font-size: 24px;">IG</a>
                <a href="https://github.com/Zenith-Reborn" style="display: inline-block; margin: 0 8px; color: #FFD700; text-decoration: none; font-size: 24px;">GH</a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top: 32px; border-top: 1px solid rgba(255, 215, 0, 0.2);">
              <p style="margin: 0; font-size: 12px; color: #6B7280; line-height: 1.6;">
                Zenith Reborn | <a href="https://zenithreborn.com" style="color: #FFD700; text-decoration: none;">zenithreborn.com</a><br>
                <a href="mailto:hello@zenithreborn.com" style="color: #FFD700; text-decoration: none;">hello@zenithreborn.com</a>
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

      // Auto-reply sent successfully
    } catch (autoReplyError) {
      // Log but don't fail - auto-reply is optional
      console.error("Failed to send auto-reply:", autoReplyError);
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
