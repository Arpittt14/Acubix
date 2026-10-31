import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      careerField,
      targetCountry,
      graduationStatus,
      preferredContact,
      consent,
    } = body;

    // Basic server-side validation of required fields
    if (!firstName || typeof firstName !== "string" || firstName.trim().length < 1) {
      return NextResponse.json(
        { success: false, error: "First name is required." },
        { status: 400 }
      );
    }

    if (!lastName || typeof lastName !== "string" || lastName.trim().length < 1) {
      return NextResponse.json(
        { success: false, error: "Last name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!careerField || typeof careerField !== "string" || careerField.trim().length < 1) {
      return NextResponse.json(
        { success: false, error: "Career field is required." },
        { status: 400 }
      );
    }

    if (!targetCountry) {
      return NextResponse.json(
        { success: false, error: "Target country is required." },
        { status: 400 }
      );
    }

    if (!graduationStatus) {
      return NextResponse.json(
        { success: false, error: "Graduation status is required." },
        { status: 400 }
      );
    }

    if (!preferredContact) {
      return NextResponse.json(
        { success: false, error: "Preferred contact method is required." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "You must agree to the terms to submit a consultation request." },
        { status: 400 }
      );
    }

    // TODO: Integrate email provider or save to DB here.
    // NOTE: Booking is NOT confirmed until a confirmation email is sent to the user.

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
