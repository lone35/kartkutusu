import { connectDB } from "@/lib/mongodb";
import CardView from "./CardView";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

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
    />
  );
}