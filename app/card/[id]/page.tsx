import { connectDB } from "@/lib/mongodb";

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
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
      {card.photoUrl && (
        <img
          src={card.photoUrl}
          alt="Kart fotoğrafı"
          className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-xl mb-6"
        />
      )}

      <h1 className="text-5xl font-bold mb-4 text-center">
        🎉 İyi Ki Doğdun {card.name || "Arkadaşım"}!
      </h1>

      <p className="text-xl text-center max-w-xl">
        {card.message || "Mutlu yıllar!"}
      </p>
    </main>
  );
}