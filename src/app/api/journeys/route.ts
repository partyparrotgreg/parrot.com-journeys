import { journeys } from "@/app/journeys/_data";
import { NextResponse } from "next/server";

export async function GET() {
  const items = journeys;
  return NextResponse.json(items, { status: 200 });
}
