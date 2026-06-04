"use client";

import { useRef, useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const [blown, setBlown] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [musicType, setMusicType] = useState<"named" | "upload">("named");
  const [selectedSong, setSelectedSong] = useState("/music/senem.mp3");
  const [uploadedSong, setUploadedSong] = useState<string | null>(null);
  const [cardLink, setCardLink] = useState("");
  const [saving, setSaving] = useState(false);

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

  async function uploadPhotoToCloudinary() {
    if (!photoFile) return "";

    const formData = new FormData();
    formData.append("file", photoFile);

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

  async function saveCard() {
    try {
      setSaving(true);

      const photoUrl = await uploadPhotoToCloudinary();

      const response = await fetch("/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message, photoUrl }),
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

  const musicSource = musicType === "named" ? selectedSong : uploadedSong;

  if (blown) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6 overflow-hidden relative">
        <Confetti />

        {musicSource && <audio ref={audioRef} src={musicSource} />}

        {photo && (
          <img
            src={photo}
            alt="Yüklenen fotoğraf"
            className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-xl mb-6 z-10"
          />
        )}

        <h1 className="text-5xl font-bold mb-4 text-center z-10">
          🎉 İyi Ki Doğdun {name || "Arkadaşım"}!
        </h1>

        <p className="text-xl text-center max-w-xl z-10">
          {message || "Mutlu yıllar!"}
        </p>

        <button
          onClick={() => setBlown(false)}
          className="mt-8 bg-white text-red-500 px-5 py-2 rounded-xl shadow z-10"
        >
          Geri Dön
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
      <div className="text-8xl mb-6">🎂🕯️🕯️🕯️</div>

      <h1 className="text-3xl font-bold mb-6 text-center">
        Mumları Üflemeye Hazır mısın?
      </h1>

      <input
        type="text"
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-3 rounded-lg mb-3 w-full max-w-md"
      />

      <textarea
        placeholder="Mesajını yaz..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-3 rounded-lg mb-3 w-full max-w-md h-32"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoUpload}
        className="mb-4 w-full max-w-md bg-white p-3 rounded-lg"
      />

      {photo && (
        <img
          src={photo}
          alt="Ön izleme"
          className="w-32 h-32 object-cover rounded-xl shadow-md mb-4"
        />
      )}

      <div className="bg-white p-4 rounded-xl shadow w-full max-w-md mb-4">
        <h2 className="font-bold mb-3">Müzik Seçimi</h2>

        <label className="block mb-2">
          <input
            type="radio"
            checked={musicType === "named"}
            onChange={() => setMusicType("named")}
          />{" "}
          İsme özel şarkı seç
        </label>

        {musicType === "named" && (
          <select
            value={selectedSong}
            onChange={(e) => setSelectedSong(e.target.value)}
            className="border p-3 rounded-lg w-full mb-3"
          >
            <option value="/music/senem.mp3">Senem için şarkı</option>
            <option value="/music/ayse.mp3">Ayşe için şarkı</option>
            <option value="/music/zeynep.mp3">Zeynep için şarkı</option>
          </select>
        )}

        <label className="block mb-2">
          <input
            type="radio"
            checked={musicType === "upload"}
            onChange={() => setMusicType("upload")}
          />{" "}
          Kendi şarkını yükle
        </label>

        {musicType === "upload" && (
          <input
            type="file"
            accept="audio/*"
            onChange={handleMusicUpload}
            className="w-full bg-pink-50 p-3 rounded-lg"
          />
        )}
      </div>

      <button
        onClick={startCard}
        className="bg-red-500 text-white px-6 py-3 rounded-xl text-xl mb-3"
      >
        Mumları Üfle
      </button>

      <button
        onClick={saveCard}
        disabled={saving}
        className="bg-purple-600 text-white px-6 py-3 rounded-xl text-xl disabled:opacity-50"
      >
        {saving ? "Kaydediliyor..." : "Kartı Kaydet ve Link Oluştur"}
      </button>

      {cardLink && (
        <div className="mt-4 bg-white p-4 rounded-xl shadow w-full max-w-md text-center">
          <p className="font-bold mb-2">Kart Linkin:</p>
          <a href={cardLink} className="text-blue-600 underline break-all">
            {cardLink}
          </a>
        </div>
      )}
    </main>
  );
}