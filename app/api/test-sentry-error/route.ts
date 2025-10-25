import { NextResponse } from "next/server";
import * as Sentry from "@sentry/nextjs";

export async function GET() {
  try {
    // Trigger a test error
    throw new Error("🚀 Production Test: Server Error - Testing Sentry API monitoring on zenithreborn.com");
  } catch (error) {
    // Capture in Sentry
    Sentry.captureException(error);

    // Return success response (the error was captured)
    return NextResponse.json({
      success: true,
      message: "Error captured by Sentry in production"
    });
  }
}
