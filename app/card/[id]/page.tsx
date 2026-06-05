import type { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import CardView from "./CardView";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const templateTitles: Record<string, string> = {
  birthday: "Doğum Günü Kartı",
  love: "Sevgiliye Özel Kart",
  proposal: "Evlilik Teklifi Kartı",
  baby: "Yeni Bebek Kartı",
  graduation: "Mezuniyet Kartı",
  newyear: "Yılbaşı Kartı",
  mothersday: "Anneler Günü Kartı",
  fathersday: "Babalar Günü Kartı",
  womensday: "Kadınlar Günü Kartı",
  teachersday: "Öğretmenler Günü Kartı",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const db = await connectDB();

  const card = await db.collection("cards").findOne({
    cardId: id,
  });

  const name = card?.name || "Senin";
  const template = card?.template || "birthday";
  const templateTitle = templateTitles[template] || "Sürpriz Kart";
  const imageUrl = card?.photoUrl || "/logo.svg";

  const title = `${name} için ${templateTitle} | KartKutusu`;
  const description =
    "Senin için hazırlanmış fotoğraflı ve müzikli özel bir sürpriz kart var.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://kartkutusu.vercel.app/card/${id}`,
      siteName: "KartKutusu",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function CardPage({ params }: PageProps) {
  const { id } = await params;

  const db = await connectDB();

  const card = await db.collection("cards").findOne({
    cardId: id,
  });

  if (!card) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-pink-100 p-6">
        <h1 className="text-3xl font-bold">Kart bulunamadı 😢</h1>
      </main>
    );
  }

  return (
    <CardView
      name={card.name || ""}
      message={card.message || ""}
      photoUrl={card.photoUrl || ""}
      photoUrls={card.photoUrls || []}
      musicUrl={card.musicUrl || ""}
      theme={card.theme || "pink"}
      template={card.template || "birthday"}
    />
  );
}