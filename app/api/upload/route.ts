import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: "Dosya bulunamadı" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const isAudio = file.type.startsWith("audio/");
    const isImage = file.type.startsWith("image/");

    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: isAudio ? "kartkutusu/music" : "kartkutusu/photos",
            resource_type: isAudio ? "video" : isImage ? "image" : "auto",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url,
    });
  } catch (error) {
    console.error("UPLOAD_ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Yükleme hatası" },
      { status: 500 }
    );
  }
}