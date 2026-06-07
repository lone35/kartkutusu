import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Babalar Günü Mesajları | KartKutusu",
  description:
    "Babaya gönderilecek kısa, anlamlı ve duygusal Babalar Günü mesajları. Babanıza özel online kart mesajı örnekleri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Babalar Günü Mesajları
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Babalar Günü, babamıza duyduğumuz sevgiyi ve minneti anlatmak için güzel bir gündür. Bazen kısa bir teşekkür, bazen de içten bir mesaj babanız için unutulmaz olabilir.
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
            href="/babalar-gunu-karti-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            👨 Babalar Günü Kartı Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Babalar Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Babalar Günün kutlu olsun canım babam.</li>
            <li>İyi ki varsın babam.</li>
            <li>Her şey için teşekkür ederim.</li>
            <li>Sen benim kahramanımsın.</li>
            <li>Seni çok seviyorum baba.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Duygusal Babalar Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Her zaman yanımda olduğun ve bana güç verdiğin için teşekkür ederim. Babalar Günün kutlu olsun.</li>
            <li>Senin desteğin hayatımda en büyük güçlerden biri oldu. İyi ki varsın babam.</li>
            <li>Bana öğrettiğin her değer için minnettarım.</li>
            <li>Sen benim en güçlü omzum ve en güvenli limanımsın.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Babaya Teşekkür Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Emeklerin ve fedakârlıkların için teşekkür ederim.</li>
            <li>Her zaman yolumu aydınlattığın için teşekkürler baba.</li>
            <li>Bana inandığın ve destek olduğun için minnettarım.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Uzaktaki Babaya Mesajlar</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Yanında olamasam da kalbim seninle baba.</li>
            <li>Mesafeler sevgime engel değil. Babalar Günün kutlu olsun.</li>
            <li>Seni çok özledim canım babam.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Babalar Günü mesajı kısa olabilir mi?</h3>
            <p className="text-gray-700">Evet, kısa ama içten bir mesaj çoğu zaman çok daha etkili olabilir.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Babalar Günü kartı nasıl oluşturulur?</h3>
            <p className="text-gray-700">KartKutusu'nda babalar günü kart türünü seçip fotoğraf, mesaj ve müzik ekleyerek kart oluşturabilirsiniz.</p>
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
