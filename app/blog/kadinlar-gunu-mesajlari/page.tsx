import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kadınlar Günü Mesajları | KartKutusu",
  description:
    "8 Mart Kadınlar Günü için kısa, anlamlı ve duygusal mesajlar. Kadınlar Günü kutlama sözleri ve kart fikirleri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Kadınlar Günü Mesajları
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          8 Mart Kadınlar Günü, hayatımıza değer katan kadınlara sevgi, saygı ve teşekkürümüzü göstermek için özel bir gündür. Anlamlı bir mesaj veya özel bir kart bu günü daha değerli hale getirebilir.
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
            href="/kadinlar-gunu-karti-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            💐 Kadınlar Günü Kartı Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Kadınlar Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Kadınlar Günün kutlu olsun.</li>
            <li>Gücün ve güzelliğin daim olsun.</li>
            <li>İyi ki varsın.</li>
            <li>Her zaman mutlu ve güçlü ol.</li>
            <li>8 Mart Kadınlar Günün kutlu olsun.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Anlamlı Kadınlar Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Hayata kattığın sevgi, emek ve umut için teşekkür ederim.</li>
            <li>Gücün, emeğin ve zarafetin kutlu olsun.</li>
            <li>Dünyayı güzelleştiren tüm kadınların günü kutlu olsun.</li>
            <li>Her zaman özgür, güçlü ve mutlu olman dileğiyle.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Anneye Kadınlar Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Canım annem, Kadınlar Günün kutlu olsun.</li>
            <li>Hayatıma kattığın tüm güzellikler için teşekkür ederim anne.</li>
            <li>Sen benim en güçlü örneğimsin.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sevgiliye Kadınlar Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Hayatımın en güzel kadını, Kadınlar Günün kutlu olsun.</li>
            <li>Gülüşün dünyamı güzelleştiriyor. İyi ki varsın.</li>
            <li>Seninle her gün daha anlamlı.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Kadınlar Günü mesajı kime gönderilir?</h3>
            <p className="text-gray-700">Anneye, sevgiliye, eşe, arkadaşa, öğretmene veya hayatınızdaki değerli kadınlara gönderilebilir.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Kadınlar Günü kartı nasıl hazırlanır?</h3>
            <p className="text-gray-700">KartKutusu ile fotoğraf, mesaj ve müzik ekleyerek özel bir Kadınlar Günü kartı oluşturabilirsiniz.</p>
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
