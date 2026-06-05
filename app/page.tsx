"use client";

import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const CLOUDINARY_CLOUD_NAME = "dy2wfdyzl";
const CLOUDINARY_MUSIC_PRESET = "kartkutusu_music";

const themes = {
  pink: {
    bg: "bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200",
    card: "bg-white border-rose-100",
    title: "text-rose-600",
    button: "bg-rose-500",
    text: "text-gray-800",
    icon: "🎂",
  },
  blue: {
    bg: "bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-200",
    card: "bg-white border-blue-100",
    title: "text-blue-600",
    button: "bg-blue-500",
    text: "text-gray-800",
    icon: "💙",
  },
  gold: {
    bg: "bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200",
    card: "bg-white border-yellow-200",
    title: "text-amber-600",
    button: "bg-amber-500",
    text: "text-gray-800",
    icon: "👑",
  },
  dark: {
    bg: "bg-gradient-to-br from-gray-950 via-purple-950 to-black",
    card: "bg-white/10 border-white/20",
    title: "text-yellow-300",
    button: "bg-yellow-500",
    text: "text-gray-100",
    icon: "🖤",
  },
};

const templates = {
  birthday: {
    label: "Doğum Günü",
    emoji: "🎂",
    title: "İyi Ki Doğdun",
    defaultMessage: "Mutlu yıllar!",
    shareText: "Senin için hazırladığım doğum günü kartı 🎂🎉",
    effects: ["🎉", "🎊", "✨", "🎈"],
    messages: [
      "Yeni yaşın sana sağlık, mutluluk ve başarı getirsin. İyi ki doğdun, iyi ki varsın!",
      "Hayatının her günü bugünkü kadar neşeli, umutlu ve güzel olsun. Nice mutlu yıllara!",
      "Yeni yaşında tüm dileklerinin gerçekleşmesini dilerim. Mutlu yıllar!",
      "Gülümsemen hiç eksilmesin, kalbin hep mutlulukla dolsun. Doğum günün kutlu olsun!",
    ],
  },
  love: {
    label: "Sevgiliye Özel",
    emoji: "❤️",
    title: "Seni Çok Seviyorum",
    defaultMessage: "Kalbim hep seninle...",
    shareText: "Senin için romantik bir sürpriz hazırladım ❤️",
    effects: ["❤️", "💖", "💕", "💘"],
    messages: [
      "Sen hayatımın en güzel tesadüfü, kalbimin en özel yerisin. İyi ki varsın sevgilim.",
      "Her anımda aklımda, her duamda kalbimdesin. Seni çok seviyorum.",
      "Seninle geçen her gün, hayatımın en güzel hediyesi gibi. İyi ki benimlesin.",
      "Kalbimin en güzel cümlesi sensin. Seni bugün de, yarın da, her zaman çok seveceğim.",
    ],
  },
  proposal: {
    label: "Evlilik Teklifi",
    emoji: "💍",
    title: "Benimle Evlenir misin?",
    defaultMessage: "Bir ömür benimle olur musun?",
    shareText: "Senin için çok özel bir sürpriz hazırladım 💍",
    effects: ["💍", "❤️", "✨", "💖"],
    messages: [
      "Hayatımın geri kalanında her sabaha seninle uyanmak istiyorum. Benimle evlenir misin?",
      "Seninle bir ömür aynı yolda yürümek, aynı hayalleri paylaşmak istiyorum. Benimle evlenir misin?",
      "Kalbim seni seçti, hayatım seninle tamamlandı. Bir ömür benimle olur musun?",
      "En güzel hikâyemizin bugün başlamasını istiyorum. Benimle evlenir misin?",
    ],
  },
  baby: {
    label: "Yeni Bebek",
    emoji: "👶",
    title: "Hoş Geldin Minik Mucize",
    defaultMessage: "Ailemize mutluluk getirdin...",
    shareText: "Senin için özel bir yeni bebek kartı hazırladım 👶",
    effects: ["👶", "⭐", "🍼", "🎈"],
    messages: [
      "Hoş geldin minik mucize. Hayatımıza sevgi, neşe ve umut getirdin.",
      "Küçücük ellerinle kocaman mutluluklar getirdin. Hoş geldin güzel bebek.",
      "Ailemize katıldığın ilk günden beri her şey daha güzel. Hoş geldin minik kalp.",
      "Sağlıkla, mutlulukla, sevgiyle büyümen dileğiyle. Hoş geldin minik mucize.",
    ],
  },
  graduation: {
    label: "Mezuniyet",
    emoji: "🎓",
    title: "Başarınla Gurur Duyuyoruz",
    defaultMessage: "Yeni yolun başarılarla dolu olsun.",
    shareText: "Senin için mezuniyet sürprizi hazırladım 🎓",
    effects: ["🎓", "🎉", "⭐", "✨"],
    messages: [
      "Emeklerinin karşılığını aldığın bu özel günde seninle gurur duyuyoruz. Yolun açık olsun!",
      "Başarın daim, yolun aydınlık olsun. Mezuniyetin kutlu olsun!",
      "Bugün bir son değil, yepyeni bir başlangıç. Hayallerinin peşinden cesaretle git.",
      "Azmin, emeğin ve başarın hepimize ilham oldu. Mezuniyetin kutlu olsun!",
    ],
  },
  newyear: {
    label: "Yılbaşı",
    emoji: "🎄",
    title: "Mutlu Yıllar",
    defaultMessage: "Yeni yıl sana sağlık, mutluluk ve huzur getirsin.",
    shareText: "Senin için yılbaşı kartı hazırladım 🎄",
    effects: ["❄️", "🎄", "✨", "☃️"],
    messages: [
      "Yeni yıl sana sağlık, huzur, mutluluk ve bolca güzel anı getirsin. Mutlu yıllar!",
      "Yeni yılda tüm dileklerinin gerçekleşmesini dilerim. Umut dolu bir yıl olsun!",
      "Geçmişin yorgunluğu geride kalsın, yeni yıl kalbine güzellikler getirsin.",
      "Yeni yılın her günü neşe, sevgi ve başarıyla dolu olsun. Mutlu yıllar!",
    ],
  },
  mothersday: {
    label: "Anneler Günü",
    emoji: "👩",
    title: "Anneler Günün Kutlu Olsun",
    defaultMessage: "İyi ki varsın canım annem.",
    shareText: "Senin için Anneler Günü kartı hazırladım 👩",
    effects: ["🌹", "💐", "❤️", "🌸"],
    messages: [
      "İyi ki varsın canım annem. Sevgin, emeğin ve şefkatin için sonsuz teşekkür ederim.",
      "Dünyanın en güzel kalbine sahip annem, Anneler Günün kutlu olsun.",
      "Her zaman yanımda olduğun, beni koşulsuz sevdiğin için teşekkür ederim annem.",
      "Sen benim en güvenli limanım, en güzel şansımsın. Anneler Günün kutlu olsun.",
    ],
  },
  fathersday: {
    label: "Babalar Günü",
    emoji: "👨",
    title: "Babalar Günün Kutlu Olsun",
    defaultMessage: "Her zaman yanımda olduğun için teşekkür ederim.",
    shareText: "Senin için Babalar Günü kartı hazırladım 👨",
    effects: ["⭐", "🏆", "💙", "✨"],
    messages: [
      "Her zaman yanımda olduğun, bana güç verdiğin için teşekkür ederim. Babalar Günün kutlu olsun.",
      "Canım babam, emeğin, sevgin ve desteğin için minnettarım. İyi ki varsın.",
      "Sen benim kahramanım, yol gösterenim ve en büyük destekçimsin. Babalar Günün kutlu olsun.",
      "Hayatımdaki en güçlü omuz, en güvenli liman sensin babam. İyi ki varsın.",
    ],
  },
  womensday: {
    label: "Kadınlar Günü",
    emoji: "💐",
    title: "Kadınlar Günün Kutlu Olsun",
    defaultMessage: "Gücün, emeğin ve güzelliğin kutlu olsun.",
    shareText: "Senin için Kadınlar Günü kartı hazırladım 💐",
    effects: ["💐", "🌸", "🌷", "✨"],
    messages: [
      "Gücün, emeğin, zarafetin ve güzelliğin kutlu olsun. Kadınlar Günün kutlu olsun!",
      "Hayata kattığın sevgi, emek ve umut için teşekkür ederim. Kadınlar Günün kutlu olsun.",
      "Her zaman güçlü, özgür ve mutlu olman dileğiyle. Kadınlar Günün kutlu olsun.",
      "Dünyayı güzelleştiren tüm emeklerin ve sevgin için iyi ki varsın.",
    ],
  },
  teachersday: {
    label: "Öğretmenler Günü",
    emoji: "🎖️",
    title: "Öğretmenler Gününüz Kutlu Olsun",
    defaultMessage: "Emeğiniz ve ışığınız için teşekkür ederiz.",
    shareText: "Senin için Öğretmenler Günü kartı hazırladım 🎖️",
    effects: ["🎖️", "⭐", "📚", "✨"],
    messages: [
      "Bilginiz, emeğiniz ve sabrınız için teşekkür ederiz. Öğretmenler Gününüz kutlu olsun.",
      "Hayatımıza ışık tuttuğunuz, yolumuzu aydınlattığınız için minnettarız.",
      "Bir öğrencinin kalbine dokunmak en büyük emektir. Öğretmenler Gününüz kutlu olsun.",
      "Öğrettikleriniz sadece derslerde değil, hayatımızda da yol gösteriyor. Teşekkür ederiz.",
    ],
  },
};

function TemplateEffects({ effects }: { effects: string[] }) {
  const items = Array.from({ length: 34 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {items.map((_, index) => {
        const emoji = effects[index % effects.length];
        const left = (index * 17) % 100;
        const delay = (index % 12) * 0.35;
        const duration = 5 + (index % 6);
        const size = 22 + (index % 5) * 5;

        return (
          <span
            key={index}
            className="absolute select-none animate-fall"
            style={{
              left: `${left}%`,
              top: "-12%",
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              fontSize: `${size}px`,
              opacity: 0.85,
            }}
          >
            {emoji}
          </span>
        );
      })}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20vh) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(125vh) rotate(360deg) scale(1.15);
            opacity: 0;
          }
        }

        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [blown, setBlown] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [photoFiles, setPhotoFiles] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);

  const [musicType, setMusicType] = useState<"named" | "upload">("named");
  const [selectedSong, setSelectedSong] = useState("/music/senem.mp3");
  const [uploadedSong, setUploadedSong] = useState<string | null>(null);
  const [musicFile, setMusicFile] = useState<File | null>(null);

  const [theme, setTheme] = useState<keyof typeof themes>("pink");
  const [template, setTemplate] = useState<keyof typeof templates>("birthday");
  const [cardLink, setCardLink] = useState("");
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const selectedTheme = themes[theme];
  const selectedTemplate = templates[template];

  function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setPhotoFiles(files);
    setPhotoPreviews(files.map((file) => URL.createObjectURL(file)));
    setGalleryIndex(0);
  }

  function handleMusicUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setMusicFile(file);
    setUploadedSong(URL.createObjectURL(file));
  }

  function startCard() {
    setBlown(true);
    setTimeout(() => {
      audioRef.current?.play().catch(() => {
        console.log("Müzik otomatik başlatılamadı.");
      });
    }, 500);
  }

  function nextPhoto() {
    if (photoPreviews.length <= 1) return;
    setGalleryIndex((current) => (current + 1) % photoPreviews.length);
  }

  function previousPhoto() {
    if (photoPreviews.length <= 1) return;
    setGalleryIndex((current) =>
      current === 0 ? photoPreviews.length - 1 : current - 1
    );
  }

  function selectReadyMessage(text: string) {
    setMessage(text);
  }

  async function uploadPhoto(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Fotoğraf yüklenemedi");
    }

    return data.url;
  }

  async function uploadMusicDirectlyToCloudinary(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_MUSIC_PRESET);
    formData.append("folder", "kartkutusu/music");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok || !data.secure_url) {
      console.error("Cloudinary music upload error:", data);
      throw new Error("Müzik yüklenemedi");
    }

    return data.secure_url;
  }

  async function saveCard() {
    try {
      setSaving(true);
      setCopied(false);

      let photoUrls: string[] = [];
      let musicUrl = "";

      if (photoFiles.length > 0) {
        photoUrls = await Promise.all(photoFiles.map((file) => uploadPhoto(file)));
      }

      if (musicType === "upload" && musicFile) {
        musicUrl = await uploadMusicDirectlyToCloudinary(musicFile);
      }

      if (musicType === "named") {
        musicUrl = selectedSong;
      }

      const response = await fetch("/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          message,
          photoUrl: photoUrls[0] || "",
          photoUrls,
          musicUrl,
          theme,
          template,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setCardLink(`${window.location.origin}/card/${data.cardId}`);
      } else {
        alert("Kart kaydedilemedi.");
      }
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu. Terminali kontrol et kankam.");
    } finally {
      setSaving(false);
    }
  }

  async function copyLink() {
    if (!cardLink) return;
    await navigator.clipboard.writeText(cardLink);
    setCopied(true);
  }

  const musicSource = musicType === "named" ? selectedSong : uploadedSong;

  if (blown) {
    return (
      <main
        className={`min-h-screen flex items-center justify-center ${selectedTheme.bg} p-6 overflow-hidden relative`}
      >
        <TemplateEffects effects={selectedTemplate.effects} />
        {musicSource && <audio ref={audioRef} src={musicSource} />}

        <section
          className={`relative z-10 w-full max-w-2xl rounded-3xl ${selectedTheme.card} shadow-2xl border p-8 text-center`}
        >
          <div className="text-7xl mb-4">{selectedTemplate.emoji}</div>

          {photoPreviews.length > 0 && (
            <div className="mb-6">
              <img
                src={photoPreviews[galleryIndex]}
                alt="Yüklenen fotoğraf"
                className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
              />

              {photoPreviews.length > 1 && (
                <div className="flex items-center justify-center gap-3 mt-4">
                  <button
                    onClick={previousPhoto}
                    className={`${selectedTheme.button} text-white px-4 py-2 rounded-xl font-bold`}
                  >
                    ←
                  </button>

                  <span className={`font-bold ${selectedTheme.text}`}>
                    {galleryIndex + 1} / {photoPreviews.length}
                  </span>

                  <button
                    onClick={nextPhoto}
                    className={`${selectedTheme.button} text-white px-4 py-2 rounded-xl font-bold`}
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

          <button
            onClick={() => setBlown(false)}
            className={`mt-8 ${selectedTheme.button} text-white px-6 py-3 rounded-2xl shadow font-semibold hover:scale-105 transition`}
          >
            Geri Dön
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 p-5">
      <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center min-h-screen py-8">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white border border-rose-100 rounded-full px-4 py-2 shadow mb-5">
            <span>🎁</span>
            <span className="text-sm font-semibold text-rose-700">
              Fotoğraflı, müzikli, kişiye özel kart
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-5">
            Sevdiklerine unutulmaz bir{" "}
            <span className="text-rose-600">özel gün sürprizi</span> hazırla.
          </h1>

          <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0">
            Kart türünü seç, fotoğrafını, mesajını ve müziğini ekle.
            KartKutusu senin için özel bir kutlama linki oluştursun.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
            <div className="bg-white rounded-2xl p-4 shadow text-center">
              <div className="text-3xl mb-1">📸</div>
              <p className="text-sm font-semibold text-gray-900">Fotoğraf</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow text-center">
              <div className="text-3xl mb-1">🎵</div>
              <p className="text-sm font-semibold text-gray-900">Müzik</p>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow text-center">
              <div className="text-3xl mb-1">🔗</div>
              <p className="text-sm font-semibold text-gray-900">Link</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-rose-100 p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="text-7xl mb-3">{selectedTemplate.emoji}</div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Kartını Oluştur
            </h2>
            <p className="text-gray-700 mt-1">
              Bilgileri doldur, sürpriz linkini al.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-rose-200 p-4 rounded-2xl text-gray-900">
              <h3 className="font-bold mb-3 text-gray-900">🎁 Kart Türü Seç</h3>

              <div className="grid grid-cols-2 gap-3">
                {Object.entries(templates).map(([value, item]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTemplate(value as keyof typeof templates)}
                    className={`rounded-2xl border p-3 text-sm font-bold transition ${
                      template === value
                        ? "border-rose-600 bg-rose-50 text-rose-700"
                        : "border-rose-200 bg-white text-gray-800"
                    }`}
                  >
                    {item.emoji} {item.label}
                  </button>
                ))}
              </div>
            </div>

            <input
              type="text"
              placeholder="Kimin için? Örn: Senem"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-rose-200 bg-white p-4 rounded-2xl w-full outline-none focus:ring-2 focus:ring-rose-300 text-gray-900 placeholder:text-gray-500"
            />

            <div className="bg-white border border-rose-200 p-4 rounded-2xl text-gray-900">
              <h3 className="font-bold mb-3 text-gray-900">
                📝 Hazır Mesaj Seç
              </h3>

              <div className="grid gap-2">
                {selectedTemplate.messages.map((readyMessage, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => selectReadyMessage(readyMessage)}
                    className={`text-left rounded-2xl border p-3 text-sm leading-relaxed transition ${
                      message === readyMessage
                        ? "border-rose-600 bg-rose-50 text-rose-700"
                        : "border-rose-200 bg-white text-gray-800"
                    }`}
                  >
                    {readyMessage}
                  </button>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Hazır mesaj seçebilir veya aşağıdaki alana kendi mesajını yazabilirsin.
              </p>
            </div>

            <textarea
              placeholder="Mesajını yaz..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-rose-200 bg-white p-4 rounded-2xl w-full h-32 outline-none focus:ring-2 focus:ring-rose-300 text-gray-900 placeholder:text-gray-500"
            />

            <div className="bg-white border border-rose-200 p-4 rounded-2xl text-gray-900">
              <h3 className="font-bold mb-3 text-gray-900">🎨 Tema Seçimi</h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["pink", "🌸 Romantik Pembe"],
                  ["blue", "💙 Mavi Sürpriz"],
                  ["gold", "👑 Altın Lüks"],
                  ["dark", "🖤 Siyah Premium"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTheme(value as keyof typeof themes)}
                    className={`rounded-2xl border p-3 text-sm font-bold transition ${
                      theme === value
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-rose-200 bg-white text-gray-800"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <label className="block bg-white border border-rose-200 rounded-2xl p-4 cursor-pointer text-gray-900">
              <p className="font-bold text-gray-900 mb-2">
                📸 Fotoğrafları seç
              </p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="w-full text-sm text-gray-800"
              />
              <p className="text-xs text-gray-500 mt-2">
                Birden fazla fotoğraf seçebilirsin.
              </p>
            </label>

            {photoPreviews.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {photoPreviews.map((preview, index) => (
                  <img
                    key={preview}
                    src={preview}
                    alt={`Ön izleme ${index + 1}`}
                    className="w-full h-20 object-cover rounded-xl shadow"
                  />
                ))}
              </div>
            )}

            <div className="bg-white border border-rose-200 p-4 rounded-2xl text-gray-900">
              <h3 className="font-bold mb-3 text-gray-900">🎵 Müzik Seçimi</h3>

              <label className="flex items-center gap-2 mb-3 text-gray-900">
                <input
                  type="radio"
                  checked={musicType === "named"}
                  onChange={() => setMusicType("named")}
                />
                <span>İsme özel şarkı seç</span>
              </label>

              {musicType === "named" && (
                <select
                  value={selectedSong}
                  onChange={(e) => setSelectedSong(e.target.value)}
                  className="border border-rose-200 bg-white p-3 rounded-xl w-full mb-3 outline-none text-gray-900"
                >
                  <option value="/music/senem.mp3">Senem için şarkı</option>
                  <option value="/music/ayse.mp3">Ayşe için şarkı</option>
                  <option value="/music/zeynep.mp3">Zeynep için şarkı</option>
                </select>
              )}

              <label className="flex items-center gap-2 mb-3 text-gray-900">
                <input
                  type="radio"
                  checked={musicType === "upload"}
                  onChange={() => setMusicType("upload")}
                />
                <span>Kendi şarkını yükle</span>
              </label>

              {musicType === "upload" && (
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleMusicUpload}
                  className="w-full bg-white border border-rose-200 p-3 rounded-xl text-sm text-gray-800"
                />
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <button
                onClick={startCard}
                className="bg-rose-500 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg hover:scale-[1.02] transition"
              >
                Önizle {selectedTemplate.emoji}
              </button>

              <button
                onClick={saveCard}
                disabled={saving}
                className="bg-purple-600 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg disabled:opacity-50 hover:scale-[1.02] transition"
              >
                {saving ? "Kaydediliyor..." : "Link Oluştur 🔗"}
              </button>
            </div>

            {cardLink && (
              <div className="mt-5 bg-white p-4 rounded-2xl shadow border border-rose-100 text-center">
                <p className="font-bold mb-2 text-gray-900">
                  Kart linkin hazır 🎉
                </p>

                <a
                  href={cardLink}
                  target="_blank"
                  className="text-blue-600 underline break-all text-sm"
                >
                  {cardLink}
                </a>

                <div className="flex flex-col gap-3 mt-4">
                  <button
                    onClick={copyLink}
                    className="bg-gray-900 text-white px-5 py-3 rounded-xl font-bold"
                  >
                    {copied ? "Kopyalandı ✅" : "Linki Kopyala 📋"}
                  </button>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      selectedTemplate.shareText + "\n\n" + cardLink
                    )}`}
                    target="_blank"
                    className="bg-green-500 text-white px-5 py-3 rounded-xl font-bold"
                  >
                    WhatsApp'ta Paylaş 📱
                  </a>
                </div>

                <div className="mt-6 flex justify-center">
                  <div className="bg-white p-3 rounded-xl shadow">
                    <QRCodeSVG value={cardLink} size={180} />
                  </div>
                </div>

                <p className="text-xs text-gray-600 mt-2">
                  QR kodu okutunca kart açılır.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
