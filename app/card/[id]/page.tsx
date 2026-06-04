import { connectDB } from "@/lib/mongodb";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function CardPage({ params }: PageProps) {
  const db = await connectDB();

  const card = await db.collection("cards").findOne({
    cardId: params.id,
  });

  if (!card) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-pink-100 p-6">
        <h1 className="text-3xl font-bold">Kart bulunamadı 😢</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
      <h1 className="text-5xl font-bold mb-4 text-center">
        🎉 İyi Ki Doğdun {card.name || "Arkadaşım"}!
      </h1>

      <p className="text-xl text-center max-w-xl">
        {card.message || "Mutlu yıllar!"}
      </p>
    </main>
  );
}