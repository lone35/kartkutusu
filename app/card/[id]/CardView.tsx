"use client";

import { useRef, useState } from "react";
import Confetti from "react-confetti";

type CardViewProps = {
  name: string;
  message: string;
  photoUrl: string;
  musicUrl: string;
  theme: string;
};

const themes = {
  pink: {
    bg: "bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200",
    card: "bg-white/85 border-white/70",
    title: "text-rose-600",
    button: "bg-rose-500",
    icon: "🎂",
    name: "Romantik Pembe",
  },
  blue: {
    bg: "bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200",
    card: "bg-white/85 border-white/70",
    title: "text-blue-600",
    button: "bg-blue-500",
    icon: "💙",
    name: "Mavi Sürpriz",
  },
  gold: {
    bg: "bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200",
    card: "bg-white/90 border-yellow-200",
    title: "text-amber-600",
    button: "bg-amber-500",
    icon: "👑",
    name: "Altın Lüks",
  },
  dark: {
    bg: "bg-gradient-to-br from-gray-950 via-purple-950 to-black",
    card: "bg-white/10 border-white/20",
    title: "text-yellow-300",
    button: "bg-yellow-500 text-black",
    icon: "🖤",
    name: "Siyah Premium",
  },
};

export default function CardView({
  name,
  message,
  photoUrl,
  musicUrl,
  theme,
}: CardViewProps) {
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const selectedTheme = themes[theme as keyof typeof themes] || themes.pink;
  const isDark = theme === "dark";

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
      <main
        className={`min-h-screen flex items-center justify-center ${selectedTheme.bg} p-6`}
      >
        <section
          className={`w-full max-w-xl ${selectedTheme.card} backdrop-blur-xl rounded-3xl shadow-2xl border p-8 text-center`}
        >
          <div className="text-8xl mb-4">{selectedTheme.icon}</div>

          <p
            className={`font-bold mb-2 ${
              isDark ? "text-yellow-300" : selectedTheme.title
            }`}
          >
            KartKutusu • {selectedTheme.name}
          </p>

          <h1
            className={`text-4xl font-extrabold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            💌 {name || "Arkadaşım"}, bu kart senin için hazırlandı
          </h1>

          <p className={`mb-8 ${isDark ? "text-gray-200" : "text-gray-600"}`}>
            Sürprizi görmek için mumları üfle.
          </p>

          <button
            onClick={startCard}
            className={`${selectedTheme.button} text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-105 transition`}
          >
            Mumları Üfle 🎂
          </button>
        </section>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen flex items-center justify-center ${selectedTheme.bg} p-6 overflow-hidden relative`}
    >
      <Confetti />

      {musicUrl && (
        <audio ref={audioRef}>
          <source src={musicUrl} />
        </audio>
      )}

      <section
        className={`relative z-10 w-full max-w-2xl rounded-3xl ${selectedTheme.card} backdrop-blur-xl shadow-2xl border p-8 text-center`}
      >
        <div className="text-7xl mb-4">🎉</div>

        {photoUrl && (
          <img
            src={photoUrl}
            alt="Kart fotoğrafı"
            className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-xl mx-auto mb-6"
          />
        )}

        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-4 ${selectedTheme.title}`}
        >
          İyi Ki Doğdun {name || "Arkadaşım"}! 🎉
        </h1>

        <p
          className={`text-lg md:text-xl leading-relaxed max-w-xl mx-auto ${
            isDark ? "text-gray-100" : "text-gray-700"
          }`}
        >
          {message || "Mutlu yıllar!"}
        </p>
      </section>
    </main>
  );
}