import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    const db = await connectDB();

    return NextResponse.json({
      success: true,
      message: "MongoDB bağlantısı başarılı 🚀",
      database: db.databaseName,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "MongoDB bağlantı hatası",
      },
      { status: 500 }
    );
  }
}