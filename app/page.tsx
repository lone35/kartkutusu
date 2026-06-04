"use client";

import { useState } from "react";

export default function Home() {
  const [blown, setBlown] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const photoUrl = URL.createObjectURL(file);
    setPhoto(photoUrl);
  }

  if (blown) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
        {photo && (
          <img
            src={photo}
            alt="Yüklenen fotoğraf"
            className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-xl mb-6"
          />
        )}

        <h1 className="text-5xl font-bold mb-4 text-center">
          🎉 İyi Ki Doğdun {name || "Arkadaşım"}!
        </h1>

        <p className="text-xl text-center max-w-xl">
          {message || "Mutlu yıllar!"}
        </p>
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

      <button
        onClick={() => setBlown(true)}
        className="bg-red-500 text-white px-6 py-3 rounded-xl text-xl"
      >
        Mumları Üfle
      </button>
    </main>
  );
}