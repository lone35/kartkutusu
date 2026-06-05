"use client";

import { useRef, useState } from "react";
import Confetti from "react-confetti";
import { toPng } from "html-to-image";

type CardViewProps = {
  name: string;
  message: string;
  photoUrl: string;
  photoUrls: string[];
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
    text: "text-gray-700",
  },
  blue: {
    bg: "bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200",
    card: "bg-white/85 border-white/70",
    title: "text-blue-600",
    button: "bg-blue-500",
    icon: "💙",
    name: "Mavi Sürpriz",
    text: "text-gray-700",
  },
  gold: {
    bg: "bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200",
    card: "bg-white/90 border-yellow-200",
    title: "text-amber-600",
    button: "bg-amber-500",
    icon: "👑",
    name: "Altın Lüks",
    text: "text-gray-700",
  },
  dark: {
    bg: "bg-gradient-to-br from-gray-950 via-purple-950 to-black",
    card: "bg-white/10 border-white/20",
    title: "text-yellow-300",
    button: "bg-yellow-500 text-black",
    icon: "🖤",
    name: "Siyah Premium",
    text: "text-gray-100",
  },
};

export default function CardView({
  name,
  message,
  photoUrl,
  photoUrls,
  musicUrl,
  theme,
}: CardViewProps) {
  const [started, setStarted] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const selectedTheme = themes[theme as keyof typeof themes] || themes.pink;
  const isDark = theme === "dark";

  const galleryPhotos =
    photoUrls && photoUrls.length > 0
      ? photoUrls
      : photoUrl
      ? [photoUrl]
      : [];

  function startCard() {
    setStarted(true);

    setTimeout(() => {
      audioRef.current?.play().catch(() => {
        console.log("Müzik başlatılamadı.");
      });
    }, 300);
  }

  function nextPhoto() {
    if (galleryPhotos.length <= 1) return;
    setCurrentPhotoIndex((current) => (current + 1) % galleryPhotos.length);
  }

  function previousPhoto() {
    if (galleryPhotos.length <= 1) return;
    setCurrentPhotoIndex((current) =>
      current === 0 ? galleryPhotos.length - 1 : current - 1
    );
  }

  async function downloadPng() {
    if (!cardRef.current) return;

    try {
      setDownloading(true);

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: isDark ? "#111827" : "#ffffff",
      });

      const link = document.createElement("a");
      link.download = `kart-${name || "kutusu"}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("PNG indirme hatası:", error);
      alert("PNG indirilemedi. Farklı bir tarayıcıda tekrar dene kankam.");
    } finally {
      setDownloading(false);
    }
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
            className={`${selectedTheme.button} px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-105 transition`}
          >
            Mumları Üfle 🎂
          </button>
        </section>
      </main>
    );
  }

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center ${selectedTheme.bg} p-6 overflow-hidden relative`}
    >
      <Confetti />

      {musicUrl && (
        <audio ref={audioRef}>
          <source src={musicUrl} />
        </audio>
      )}

      <section
        ref={cardRef}
        className={`relative z-10 w-full max-w-2xl rounded-3xl ${selectedTheme.card} backdrop-blur-xl shadow-2xl border p-8 text-center`}
      >
        <div className="text-7xl mb-4">🎉</div>

        {galleryPhotos.length > 0 && (
          <div className="mb-6">
            <img
              src={galleryPhotos[currentPhotoIndex]}
              alt="Kart fotoğrafı"
              crossOrigin="anonymous"
              className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
            />

            {galleryPhotos.length > 1 && (
              <div className="flex items-center justify-center gap-3 mt-4">
                <button
                  onClick={previousPhoto}
                  className={`${selectedTheme.button} px-4 py-2 rounded-xl font-bold shadow`}
                >
                  ←
                </button>

                <span
                  className={`font-bold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {currentPhotoIndex + 1} / {galleryPhotos.length}
                </span>

                <button
                  onClick={nextPhoto}
                  className={`${selectedTheme.button} px-4 py-2 rounded-xl font-bold shadow`}
                >
                  →
                </button>
              </div>
            )}
          </div>
        )}

        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-4 ${selectedTheme.title}`}
        >
          İyi Ki Doğdun {name || "Arkadaşım"}! 🎉
        </h1>

        <p
          className={`text-lg md:text-xl leading-relaxed max-w-xl mx-auto ${selectedTheme.text}`}
        >
          {message || "Mutlu yıllar!"}
        </p>

        <p
          className={`text-xs mt-6 ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          KartKutusu ile hazırlandı 🎂
        </p>
      </section>

      <button
        onClick={downloadPng}
        disabled={downloading}
        className="relative z-10 mt-5 bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold shadow-lg disabled:opacity-50"
      >
        {downloading ? "Hazırlanıyor..." : "PNG Olarak İndir 📥"}
      </button>
    </main>
  );
}