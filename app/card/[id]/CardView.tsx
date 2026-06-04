"use client";

import { useRef, useState } from "react";
import Confetti from "react-confetti";

type CardViewProps = {
  name: string;
  message: string;
  photoUrl: string;
  musicUrl: string;
};

export default function CardView({
  name,
  message,
  photoUrl,
  musicUrl,
}: CardViewProps) {
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function startCard() {
    setStarted(true);

    setTimeout(() => {
      audioRef.current?.play().catch(() => {
        console.log("Müzik başlatılamadı.");
      });
    }, 300);
  }

  if (!started) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 p-6">
        <section className="w-full max-w-xl bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/70 p-8 text-center">
          <div className="text-8xl mb-4">🎂</div>

          <p className="text-rose-600 font-bold mb-2">KartKutusu</p>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Bu kart senin için hazırlandı 💖
          </h1>

          <p className="text-gray-600 mb-8">
            Sürprizi görmek için mumları üfle.
          </p>

          <button
            onClick={startCard}
            className="bg-rose-500 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-105 transition"
          >
            Mumları Üfle 🎂
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 p-6 overflow-hidden relative">
      <Confetti />

      {musicUrl && <audio ref={audioRef} src={musicUrl} />}

      <section className="relative z-10 w-full max-w-2xl rounded-3xl bg-white/85 backdrop-blur-xl shadow-2xl border border-white/70 p-8 text-center">
        <div className="text-7xl mb-4">🎉</div>

        {photoUrl && (
          <img
            src={photoUrl}
            alt="Kart fotoğrafı"
            className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-xl mx-auto mb-6"
          />
        )}

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-rose-600">
          İyi Ki Doğdun {name || "Arkadaşım"}!
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto">
          {message || "Mutlu yıllar!"}
        </p>
      </section>
    </main>
  );
}