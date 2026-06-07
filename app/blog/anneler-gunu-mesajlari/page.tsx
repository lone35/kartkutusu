import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anneler Günü Mesajları | KartKutusu",
  description:
    "Anneye gönderilecek en güzel, duygusal ve kısa Anneler Günü mesajları. Anneler Günü için özel kart mesajı örnekleri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Anneler Günü Mesajları
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Anneler Günü, hayatımızdaki en değerli kişiye sevgimizi göstermek için özel bir fırsattır. Birkaç içten cümle bile annenizi mutlu edebilir. Bu sayfada anneler için kısa, duygusal ve anlamlı mesaj örnekleri bulabilirsiniz.
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
            href="/anneler-gunu-karti-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            👩 Anneler Günü Kartı Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Anneler Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Anneler Günün kutlu olsun canım annem.</li>
            <li>İyi ki varsın, iyi ki benim annemsin.</li>
            <li>Seni çok seviyorum annem.</li>
            <li>Dünyanın en güzel annesine sevgilerimle.</li>
            <li>Her şey için teşekkür ederim annem.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Duygusal Anneler Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Sevgin, sabrın ve emeğin için sana minnettarım. Anneler Günün kutlu olsun.</li>
            <li>Sen benim en güvenli limanım, en güzel şansımsın. İyi ki varsın annem.</li>
            <li>Hayatımdaki en büyük iyiliklerden biri senin evladın olmak.</li>
            <li>Kalbinin güzelliği yolumu her zaman aydınlattı. Seni çok seviyorum.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Uzaktaki Anneye Mesajlar</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Mesafeler sevgimi azaltamaz annem. Kalbim hep seninle.</li>
            <li>Yanında olamasam da dualarım ve sevgim hep seninle.</li>
            <li>Seni çok özledim annem, Anneler Günün kutlu olsun.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Anneye Teşekkür Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Bana kattığın her değer için teşekkür ederim.</li>
            <li>Emeklerin, sevgin ve sabrın için sana sonsuz teşekkürler.</li>
            <li>Bugün olduğum kişi olmamda en büyük pay senin annem.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Anneler Günü mesajı nasıl olmalı?</h3>
            <p className="text-gray-700">Samimi, sevgi dolu ve teşekkür içeren mesajlar anneler için en anlamlı mesajlardır.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Anneye özel kart hazırlanabilir mi?</h3>
            <p className="text-gray-700">Evet, KartKutusu ile annenize fotoğraflı ve müzikli özel bir Anneler Günü kartı hazırlayabilirsiniz.</p>
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
