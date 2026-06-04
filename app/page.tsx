"use client";

import { useRef, useState } from "react";
import Confetti from "react-confetti";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const [blown, setBlown] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const [musicType, setMusicType] = useState<"named" | "upload">("named");
  const [selectedSong, setSelectedSong] = useState("/music/senem.mp3");
  const [uploadedSong, setUploadedSong] = useState<string | null>(null);
  const [musicFile, setMusicFile] = useState<File | null>(null);

  const [cardLink, setCardLink] = useState("");
  const [saving, setSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhoto(URL.createObjectURL(file));
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

  async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error("Dosya yüklenemedi");
    }

    return data.url;
  }

  async function saveCard() {
    try {
      setSaving(true);
      setCopied(false);

      let photoUrl = "";
      let musicUrl = "";

      if (photoFile) photoUrl = await uploadFile(photoFile);
      if (musicType === "upload" && musicFile) musicUrl = await uploadFile(musicFile);
      if (musicType === "named") musicUrl = selectedSong;

      const response = await fetch("/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, photoUrl, musicUrl }),
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
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-100 to-purple-200 p-6 overflow-hidden relative">
        <Confetti />

        {musicSource && <audio ref={audioRef} src={musicSource} />}

        <section className="relative z-10 w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-rose-100 p-8 text-center">
          <div className="text-7xl mb-4">🎂</div>

          {photo && (
            <img
              src={photo}
              alt="Yüklenen fotoğraf"
              className="w-52 h-52 object-cover rounded-full border-4 border-white shadow-xl mx-auto mb-6"
            />
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-rose-600">
            İyi Ki Doğdun {name || "Arkadaşım"}! 🎉
          </h1>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-xl mx-auto">
            {message || "Mutlu yıllar!"}
          </p>

          <button
            onClick={() => setBlown(false)}
            className="mt-8 bg-rose-500 text-white px-6 py-3 rounded-2xl shadow font-semibold hover:scale-105 transition"
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

            <label className="block bg-white border border-rose-200 rounded-2xl p-4 cursor-pointer text-gray-900">
              <p className="font-bold text-gray-900 mb-2">📸 Fotoğraf seç</p>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="w-full text-sm text-gray-800"
              />
            </label>

            {photo && (
              <img
                src={photo}
                alt="Ön izleme"
                className="w-28 h-28 object-cover rounded-2xl shadow-md mx-auto"
              />
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