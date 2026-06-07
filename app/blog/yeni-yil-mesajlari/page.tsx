import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yeni Yıl Mesajları | KartKutusu",
  description:
    "Yeni yıl için kısa, anlamlı ve güzel mesajlar. Sevdiklerinize gönderebileceğiniz 2026 yeni yıl kutlama sözleri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Yeni Yıl Mesajları
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Yeni yıl, sevdiklerimize umut, mutluluk ve iyi dilekler göndermek için güzel bir fırsattır. Kısa bir mesaj veya fotoğraflı bir yılbaşı kartı yeni yıl sevincini paylaşmanın en güzel yollarındandır.
        </p>

        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Bu Mesajları Özel Karta Dönüştür
          </h2>
          <p className="text-gray-700 mb-5">
            Beğendiğiniz mesajı fotoğraf ve müzikle daha özel hale getirmek için
            KartKutusu ile kişiye özel online kart oluşturabilirsiniz.
          </p>
          <Link
            href="/yilbasi-karti-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            🎄 Yılbaşı Kartı Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Yeni Yıl Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Mutlu yıllar.</li>
            <li>Yeni yılın kutlu olsun.</li>
            <li>Sağlık ve huzur dolu bir yıl dilerim.</li>
            <li>Yeni yıl sana mutluluk getirsin.</li>
            <li>Umut dolu nice yıllara.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Anlamlı Yeni Yıl Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Yeni yıl sana sağlık, huzur, mutluluk ve güzel anılar getirsin.</li>
            <li>Geçmişin yorgunluğu geride kalsın, yeni yıl kalbine güzellikler getirsin.</li>
            <li>Yeni yılda tüm dileklerinin gerçekleşmesini dilerim.</li>
            <li>Her yeni gün sana umut ve mutluluk getirsin.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aileye Yeni Yıl Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Ailemle birlikte nice güzel yıllara.</li>
            <li>Yeni yıl ailemize sağlık ve huzur getirsin.</li>
            <li>Sevgiyle, mutlulukla dolu bir yıl olsun.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Arkadaşa Yeni Yıl Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Yeni yılda da dostluğumuz hep sürsün.</li>
            <li>Nice güzel anılar biriktireceğimiz yıllara.</li>
            <li>Yeni yıl sana başarı ve mutluluk getirsin dostum.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Yeni yıl mesajı nasıl olmalı?</h3>
            <p className="text-gray-700">Yeni yıl mesajları umut, sağlık, mutluluk ve başarı dilekleri içermelidir.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Yılbaşı kartı online hazırlanır mı?</h3>
            <p className="text-gray-700">Evet, KartKutusu ile fotoğraflı ve müzikli yılbaşı kartı oluşturabilirsiniz.</p>
          </div>

        </section>

        <div className="bg-rose-500 text-white rounded-2xl shadow p-6 text-center">
          <h2 className="text-2xl font-bold mb-3">
            Kişiye Özel Kart Hazırlamak İster misin?
          </h2>
          <p className="mb-5">
            Fotoğrafını ekle, mesajını yaz, müziğini seç ve özel kart linkini hemen paylaş.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-rose-600 px-6 py-3 rounded-xl font-bold"
          >
            🎁 Kart Oluştur
          </Link>
        </div>
      </div>
    </main>
  );
}
