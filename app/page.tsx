"use client";

import { useState } from "react";

export default function Home() {
  const [blown, setBlown] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-5">

      {!blown ? (
        <>
          <div className="text-8xl mb-6">
            🎂🕯️🕯️🕯️
          </div>

          <h1 className="text-4xl font-bold mb-6 text-center">
            Mumları Üflemeye Hazır mısın?
          </h1>

          <button
            onClick={() => setBlown(true)}
            className="bg-red-500 text-white px-6 py-3 rounded-xl text-xl"
          >
            Mumları Üfle
          </button>
        </>
      ) : (
        <>
          <div className="text-8xl mb-6">
            🎂
          </div>

          <h1 className="text-5xl font-bold text-center mb-4">
            🎉 İyi Ki Doğdun! 🎉
          </h1>

          <p className="text-xl text-center max-w-lg">
            Hayatın her anı mutlulukla dolsun.
            Sağlık, başarı ve neşe seninle olsun.
          </p>
        </>
      )}
    </main>
  );
}