import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, businessName, email, phone, businessType, hasWebsite, lookingFor, budget, timeline } = body;

    // Basic validation
    if (!fullName || !businessName || !email || !phone || !businessType || !hasWebsite || !lookingFor || !budget || !timeline) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const db = await getDb();
    const collection = db.collection("book_a_call");

    await collection.insertOne({
      fullName,
      businessName,
      email,
      phone,
      businessType,
      hasWebsite,
      lookingFor,
      budget,
      timeline,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: "Submission received!" });
  } catch (error) {
    console.error("Book a Call submission error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
