"use client";

import { useRef, useState } from "react";
import Confetti from "react-confetti";
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
  const [cardLink, setCardLink] = useState("");
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const selectedTheme = themes[theme];

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
        <Confetti />
        {musicSource && <audio ref={audioRef} src={musicSource} />}

        <section
          className={`relative z-10 w-full max-w-2xl rounded-3xl ${selectedTheme.card} shadow-2xl border p-8 text-center`}
        >
          <div className="text-7xl mb-4">{selectedTheme.icon}</div>

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
            İyi Ki Doğdun {name || "Arkadaşım"}! 🎉
          </h1>

          <p
            className={`text-lg md:text-xl leading-relaxed max-w-xl mx-auto ${selectedTheme.text}`}
          >
            {message || "Mutlu yıllar!"}
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
            <span className="text-rose-600">doğum günü sürprizi</span> hazırla.
          </h1>

          <p className="text-lg text-gray-800 mb-8 max-w-xl mx-auto lg:mx-0">
            Fotoğrafını, mesajını ve müziğini ekle. KartKutusu senin için özel
            bir kutlama linki oluştursun.
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
            <div className="text-7xl mb-3">🎂</div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Kartını Oluştur
            </h2>
            <p className="text-gray-700 mt-1">
              Bilgileri doldur, sürpriz linkini al.
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Kimin için? Örn: Senem"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-rose-200 bg-white p-4 rounded-2xl w-full outline-none focus:ring-2 focus:ring-rose-300 text-gray-900 placeholder:text-gray-500"
            />

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
                Önizle 🎂
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
                      "Senin için hazırladığım doğum günü kartı 🎂🎉\n\n" +
                        cardLink
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