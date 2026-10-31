import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, website } = body;

    // Honeypot check — bots fill the hidden "website" field
    if (website) {
      // Silently succeed to confuse bots
      return NextResponse.json({ success: true });
    }

    // Basic server-side validation
    if (
      !name ||
      typeof name !== "string" ||
      name.trim().length < 2
    ) {
      return NextResponse.json(
        { success: false, error: "A valid name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 10
    ) {
      return NextResponse.json(
        { success: false, error: "A message of at least 10 characters is required." },
        { status: 400 }
      );
    }

    // TODO: Integrate email provider (e.g. Resend, SendGrid) or save to DB here.

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
