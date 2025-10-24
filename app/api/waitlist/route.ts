import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Initialize Supabase client with service role key for server-side operations
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Type definitions
interface WaitlistRequest {
  email: string;
  name?: string;
  platform: "ios" | "android" | "both";
  source?: string;
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: WaitlistRequest = await request.json();

    // Validate required fields
    if (!body.email || !body.platform) {
      return NextResponse.json(
        { error: "Email and platform preference are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Validate platform
    if (!["ios", "android", "both"].includes(body.platform)) {
      return NextResponse.json({ error: "Invalid platform preference" }, { status: 400 });
    }

    // Check for duplicate email
    const { data: existingRecord } = await supabase
      .from("waitlist")
      .select("id, email, created_at")
      .eq("email", body.email.toLowerCase())
      .single();

    if (existingRecord) {
      // Duplicate email - return friendly error
      return NextResponse.json(
        {
          error: "This email is already on the waitlist",
          message:
            "You're already signed up! We'll notify you when SkillQuest launches.",
        },
        { status: 409 }
      );
    }

    // Insert into Supabase waitlist table
    const { data: insertData, error: insertError } = await supabase
      .from("waitlist")
      .insert([
        {
          email: body.email.toLowerCase(),
          name: body.name || null,
          platform_preference: body.platform,
          source: body.source || "website",
          utm_source: body.utm_source || null,
          utm_campaign: body.utm_campaign || null,
          utm_medium: body.utm_medium || null,
          status: "new",
        },
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return NextResponse.json(
        { error: "Failed to save to waitlist. Please try again." },
        { status: 500 }
      );
    }

    // Send confirmation email via Resend
    try {
      await resend.emails.send({
        from: "Zenith Reborn <hello@zenithreborn.com>",
        to: body.email,
        subject: "🎉 You're on the SkillQuest Waitlist!",
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to SkillQuest Waitlist</title>
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
                You're on the List!
              </h1>
            </td>
          </tr>

          <!-- Body Text -->
          <tr>
            <td style="padding-bottom: 32px; font-size: 16px; line-height: 1.6; color: #D1D5DB;">
              <p style="margin: 0 0 16px 0;">Hey${body.name ? ` ${body.name}` : ""}! 👋</p>
              <p style="margin: 0 0 16px 0;">
                Thanks for signing up for the <strong style="color: #FFD700;">SkillQuest</strong> waitlist!
                You'll be among the first to know when we launch.
              </p>
              <p style="margin: 0 0 16px 0;">
                We're building something special to help you master any skill through deliberate practice.
                Get ready to transform your practice routine and rise to excellence.
              </p>
            </td>
          </tr>

          <!-- Platform Preference -->
          ${
            body.platform !== "both"
              ? `
          <tr>
            <td style="padding: 20px; background-color: rgba(255, 215, 0, 0.1); border-radius: 8px; border: 1px solid rgba(255, 215, 0, 0.2); margin-bottom: 24px;">
              <p style="margin: 0; font-size: 14px; color: #9CA3AF;">
                <strong style="color: #FFD700;">Platform Preference:</strong> ${body.platform === "ios" ? "📱 iOS (App Store)" : "🤖 Android (Google Play)"}
              </p>
            </td>
          </tr>
          `
              : ""
          }

          <!-- What's Next -->
          <tr>
            <td style="padding: 24px 0; border-top: 1px solid rgba(255, 215, 0, 0.2);">
              <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: bold; color: #FFD700;">
                What's Next?
              </h2>
              <ul style="margin: 0; padding-left: 20px; color: #D1D5DB; line-height: 1.8;">
                <li>We'll email you when SkillQuest enters beta testing</li>
                <li>Early supporters get exclusive perks 🎁</li>
                <li>You'll have first access to the app</li>
              </ul>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding: 32px 0 24px 0;">
              <a href="https://zenithreborn.com/blog" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #FFD700 0%, #FF6B35 50%, #8B0000 100%); color: #FFFFFF; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">
                Read Our Blog
              </a>
            </td>
          </tr>

          <!-- Social Links -->
          <tr>
            <td align="center" style="padding: 24px 0; border-top: 1px solid rgba(255, 215, 0, 0.2);">
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #9CA3AF;">Follow our journey:</p>
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
                Questions? Reply to this email or contact us at <a href="mailto:hello@zenithreborn.com" style="color: #FFD700; text-decoration: none;">hello@zenithreborn.com</a>
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

      // Email sent successfully
    } catch (emailError) {
      // Log email error but don't fail the request (user is still on waitlist)
      console.error("Failed to send confirmation email:", emailError);
      // Continue - waitlist signup succeeded even if email failed
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Successfully added to waitlist!",
        data: {
          id: insertData.id,
          email: insertData.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
