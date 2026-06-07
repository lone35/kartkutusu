import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doğum Günü Mesajları 2026 | En Güzel ve Anlamlı Mesajlar",
  description:
    "Sevdiklerinize gönderebileceğiniz en güzel doğum günü mesajları. Anlamlı, kısa, duygusal ve komik doğum günü sözleri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Doğum Günü Mesajları 2026
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Sevdikleriniz için kullanabileceğiniz en güzel doğum günü mesajlarını
          bu sayfada bulabilirsiniz.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Kısa Doğum Günü Mesajları
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>🎂 İyi ki doğdun, yeni yaşın mutluluk getirsin.</li>
          <li>🎉 Sağlık, başarı ve huzur dolu nice yıllara.</li>
          <li>🎁 Doğum günün kutlu olsun.</li>
          <li>✨ Yeni yaşın tüm güzellikleri beraberinde getirsin.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Duygusal Doğum Günü Mesajları
        </h2>

        <p className="text-gray-700 mb-4">
          Hayatımda olduğun için çok şanslıyım. Yeni yaşında tüm hayallerinin
          gerçekleşmesini diliyorum.
        </p>

        <p className="text-gray-700 mb-4">
          Her zaman yüzünün gülmesi ve mutluluğunun daim olması dileğiyle.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Doğum Günü Kartı Oluştur
          </h2>

          <p className="text-gray-700 mb-6">
            Bu mesajları fotoğraflı ve müzikli bir sürpriz karta dönüştürmek
            ister misin?
          </p>

          <Link
            href="/dogum-gunu-karti-olustur"
            className="inline-block bg-rose-500 text-white px-6 py-3 rounded-xl font-bold"
          >
            🎂 Doğum Günü Kartı Oluştur
          </Link>
        </div>
      </div>
    </main>
  );
}