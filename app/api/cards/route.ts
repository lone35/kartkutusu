import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

function createCardId() {
  return Math.random().toString(36).substring(2, 10);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const db = await connectDB();

    const cardId = createCardId();

    await db.collection("cards").insertOne({
      cardId,
      name: body.name || "",
      message: body.message || "",
      photoUrl: body.photoUrl || "",
      musicUrl: body.musicUrl || "",
      theme: body.theme || "pink",
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      cardId,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Kart kaydedilemedi" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Cards API çalışıyor 🚀",
  });
}