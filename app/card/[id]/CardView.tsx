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
  template: string;
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

const templates = {
  birthday: {
    label: "Doğum Günü",
    icon: "🎂",
    opening: "bu doğum günü kartı senin için hazırlandı",
    title: "İyi Ki Doğdun",
    footer: "KartKutusu ile doğum günü sürprizi hazırlandı 🎂",
    button: "Mumları Üfle 🎂",
    defaultMessage: "Mutlu yıllar!",
  },
  love: {
    label: "Sevgiliye Özel",
    icon: "❤️",
    opening: "sana özel romantik bir sürpriz hazırlandı",
    title: "Seni Çok Seviyorum",
    footer: "KartKutusu ile sevgi dolu bir sürpriz hazırlandı ❤️",
    button: "Sürprizi Aç ❤️",
    defaultMessage: "Kalbim hep seninle...",
  },
  proposal: {
    label: "Evlilik Teklifi",
    icon: "💍",
    opening: "sana hayatının en özel sorusu hazırlandı",
    title: "Benimle Evlenir misin?",
    footer: "KartKutusu ile unutulmaz bir teklif hazırlandı 💍",
    button: "Sürprizi Aç 💍",
    defaultMessage: "Bir ömür benimle olur musun?",
  },
  baby: {
    label: "Yeni Bebek",
    icon: "👶",
    opening: "minik mucize için özel bir kart hazırlandı",
    title: "Hoş Geldin Minik Mucize",
    footer: "KartKutusu ile yeni bebek kutlaması hazırlandı 👶",
    button: "Sürprizi Aç 👶",
    defaultMessage: "Ailemize mutluluk getirdin...",
  },
  graduation: {
    label: "Mezuniyet",
    icon: "🎓",
    opening: "başarını kutlamak için özel bir kart hazırlandı",
    title: "Başarınla Gurur Duyuyoruz",
    footer: "KartKutusu ile mezuniyet kutlaması hazırlandı 🎓",
    button: "Sürprizi Aç 🎓",
    defaultMessage: "Yeni yolun başarılarla dolu olsun.",
  },
  newyear: {
    label: "Yılbaşı",
    icon: "🎄",
    opening: "yeni yıl için sana özel bir kart hazırlandı",
    title: "Mutlu Yıllar",
    footer: "KartKutusu ile yılbaşı sürprizi hazırlandı 🎄",
    button: "Sürprizi Aç 🎄",
    defaultMessage: "Yeni yıl sana sağlık, mutluluk ve huzur getirsin.",
  },
  mothersday: {
    label: "Anneler Günü",
    icon: "👩",
    opening: "dünyanın en güzel annesine özel hazırlandı",
    title: "Anneler Günün Kutlu Olsun",
    footer: "KartKutusu ile Anneler Günü kartı hazırlandı 👩",
    button: "Sürprizi Aç 👩",
    defaultMessage: "İyi ki varsın canım annem.",
  },
  fathersday: {
    label: "Babalar Günü",
    icon: "👨",
    opening: "canım babama özel bir sürpriz hazırlandı",
    title: "Babalar Günün Kutlu Olsun",
    footer: "KartKutusu ile Babalar Günü kartı hazırlandı 👨",
    button: "Sürprizi Aç 👨",
    defaultMessage: "Her zaman yanımda olduğun için teşekkür ederim.",
  },
  womensday: {
    label: "Kadınlar Günü",
    icon: "💐",
    opening: "sana özel güzel bir Kadınlar Günü kartı hazırlandı",
    title: "Kadınlar Günün Kutlu Olsun",
    footer: "KartKutusu ile Kadınlar Günü kartı hazırlandı 💐",
    button: "Sürprizi Aç 💐",
    defaultMessage: "Gücün, emeğin ve güzelliğin kutlu olsun.",
  },
  teachersday: {
    label: "Öğretmenler Günü",
    icon: "🎖️",
    opening: "değerli öğretmenimize özel bir kart hazırlandı",
    title: "Öğretmenler Gününüz Kutlu Olsun",
    footer: "KartKutusu ile Öğretmenler Günü kartı hazırlandı 🎖️",
    button: "Sürprizi Aç 🎖️",
    defaultMessage: "Emeğiniz ve ışığınız için teşekkür ederiz.",
  },
};

export default function CardView({
  name,
  message,
  photoUrl,
  photoUrls,
  musicUrl,
  theme,
  template,
}: CardViewProps) {
  const [started, setStarted] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const selectedTheme = themes[theme as keyof typeof themes] || themes.pink;
  const selectedTemplate =
    templates[template as keyof typeof templates] || templates.birthday;

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
          <div className="text-8xl mb-4">{selectedTemplate.icon}</div>

          <p
            className={`font-bold mb-2 ${
              isDark ? "text-yellow-300" : selectedTheme.title
            }`}
          >
            KartKutusu • {selectedTemplate.label}
          </p>

          <h1
            className={`text-4xl font-extrabold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            💌 {name || "Arkadaşım"}, {selectedTemplate.opening}
          </h1>

          <p className={`mb-8 ${isDark ? "text-gray-200" : "text-gray-600"}`}>
            Sürprizi görmek için butona dokun.
          </p>

          <button
            onClick={startCard}
            className={`${selectedTheme.button} px-8 py-4 rounded-2xl text-xl font-bold shadow-lg hover:scale-105 transition`}
          >
            {selectedTemplate.button}
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
        <div className="text-7xl mb-4">{selectedTemplate.icon}</div>

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
          {selectedTemplate.title} {name || "Arkadaşım"}!
        </h1>

        <p
          className={`text-lg md:text-xl leading-relaxed max-w-xl mx-auto ${selectedTheme.text}`}
        >
          {message || selectedTemplate.defaultMessage}
        </p>

        <p
          className={`text-xs mt-6 ${
            isDark ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {selectedTemplate.footer}
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
