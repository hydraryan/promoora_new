import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { businessName, industry, website, city, objective, problem, selectedPackage, addons, budget, launchDate } = body;

    // Basic validation
    if (!businessName || !industry || !objective || !selectedPackage || !budget || !launchDate) {
      return NextResponse.json({ error: "Required fields are missing." }, { status: 400 });
    }

    const db = await getDb();
    const collection = db.collection("get_started");

    await collection.insertOne({
      businessName,
      industry,
      website: website || null,
      city: city || null,
      objective,
      problem: problem || null,
      selectedPackage,
      addons: addons || [],
      budget,
      launchDate,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, message: "Project brief received!" });
  } catch (error) {
    console.error("Get Started submission error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
