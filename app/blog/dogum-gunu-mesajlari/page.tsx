import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doğum Günü Mesajları 2026 | KartKutusu",
  description:
    "En güzel, kısa, anlamlı, duygusal ve komik doğum günü mesajları. Sevdikleriniz için özel doğum günü sözleri ve kart fikirleri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Doğum Günü Mesajları 2026
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Doğum günü mesajları, sevdiklerimize değer verdiğimizi göstermenin en güzel yollarından biridir. Kimi zaman kısa bir cümle, kimi zaman duygusal bir söz, kimi zaman da fotoğraflı ve müzikli bir kart unutulmaz bir sürprize dönüşebilir.
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
            href="/dogum-gunu-karti-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            🎂 Doğum Günü Kartı Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Doğum Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>İyi ki doğdun, yeni yaşın mutluluk getirsin.</li>
            <li>Sağlık, huzur ve başarı dolu nice yıllara.</li>
            <li>Doğum günün kutlu olsun, iyi ki varsın.</li>
            <li>Yeni yaşında tüm dileklerin gerçekleşsin.</li>
            <li>Gülümsemen hiç eksilmesin, mutlu yıllar.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Duygusal Doğum Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Hayatımda olduğun için çok şanslıyım. Yeni yaşında kalbinin tüm güzelliklerle dolmasını dilerim.</li>
            <li>Her zaman yüzünün gülmesi, kalbinin huzurla dolması dileğiyle. Doğum günün kutlu olsun.</li>
            <li>Senin gibi güzel kalpli birinin hayatımda olması büyük bir hediye. İyi ki doğdun.</li>
            <li>Yeni yaşın sana sağlık, mutluluk ve umut getirsin. İyi ki varsın.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Arkadaşa Doğum Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Canım arkadaşım, iyi ki doğdun. Hayat yolunda hep yanında olacağım.</li>
            <li>Dostluğun benim için çok değerli. Yeni yaşın sana güzellikler getirsin.</li>
            <li>Beraber nice güzel anılar biriktireceğimiz yıllara. Mutlu yıllar!</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Komik Doğum Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Yaş aldıkça güzelleşiyorsun ama mumlar pastaya sığmamaya başladı.</li>
            <li>Yeni yaşın kutlu olsun, yaşını söylemiyoruz çünkü gizlilik önemli.</li>
            <li>Bugün kalori saymak yasak, pasta serbest. Mutlu yıllar!</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Doğum günü mesajı kısa mı olmalı uzun mu?</h3>
            <p className="text-gray-700">Karşı tarafla ilişkinize göre değişir. Yakın biri için duygusal ve uzun mesaj, arkadaş için kısa ve samimi mesaj daha uygun olabilir.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Fotoğraflı doğum günü kartı nasıl hazırlanır?</h3>
            <p className="text-gray-700">KartKutusu'nda kart türünü seçip fotoğraf, mesaj ve müzik ekleyerek online doğum günü kartı hazırlayabilirsiniz.</p>
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
