import type { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import CardView from "./CardView";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const SITE_URL = "https://kartkutusu.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

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

function getCardImage(card: any) {
  const firstPhoto =
    card?.photoUrl ||
    (Array.isArray(card?.photoUrls) && card.photoUrls.length > 0
      ? card.photoUrls[0]
      : "");

  if (!firstPhoto) {
    return OG_IMAGE;
  }

  if (firstPhoto.startsWith("http://") || firstPhoto.startsWith("https://")) {
    return firstPhoto;
  }

  if (firstPhoto.startsWith("/")) {
    return `${SITE_URL}${firstPhoto}`;
  }

  return OG_IMAGE;
}

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

  const title = `${name} için ${templateTitle} | KartKutusu`;
  const description =
    card?.message ||
    "Senin için hazırlanmış fotoğraflı ve müzikli özel bir sürpriz kart var.";

  const imageUrl = getCardImage(card);

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/card/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/card/${id}`,
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
