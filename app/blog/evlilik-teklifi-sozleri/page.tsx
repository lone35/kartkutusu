import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evlilik Teklifi Sözleri | KartKutusu",
  description:
    "Romantik evlilik teklifi sözleri, kısa ve duygusal teklif mesajları. Unutulmaz evlilik teklifi için söz önerileri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Evlilik Teklifi Sözleri
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Evlilik teklifi, hayatın en özel anlarından biridir. Doğru sözler, bu anı daha unutulmaz hale getirir. Romantik, kısa veya duygusal teklif sözleriyle sevdiğiniz kişiye kalbinizi açabilirsiniz.
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
            href="/evlilik-teklifi-karti-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            💍 Evlilik Teklifi Kartı Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Evlilik Teklifi Sözleri</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Benimle bir ömür yürür müsün?</li>
            <li>Hayatımı seninle paylaşmak istiyorum.</li>
            <li>Benimle evlenir misin?</li>
            <li>Kalbim seni seçti.</li>
            <li>Bir ömür benimle olur musun?</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Romantik Evlilik Teklifi Sözleri</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Hayatımın geri kalanında her sabaha seninle uyanmak istiyorum. Benimle evlenir misin?</li>
            <li>Seninle aynı yolda yürümek ve aynı hayalleri paylaşmak istiyorum.</li>
            <li>Kalbim seninle tamamlandı. Bir ömür benimle olur musun?</li>
            <li>En güzel hikâyemizin bugün başlamasını istiyorum.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Duygusal Teklif Sözleri</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Sen hayatıma anlam katan en güzel insansın. Geleceğimi seninle kurmak istiyorum.</li>
            <li>İyi günümde, zor günümde, her anımda yanında olmak istiyorum.</li>
            <li>Bir ömür elini bırakmadan yürümek istiyorum.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Farklı Evlilik Teklifi Fikirleri</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Fotoğraflı ve müzikli dijital kart ile teklif hazırlayabilirsiniz.</li>
            <li>Ortak anılarınızdan oluşan kısa bir mesaj seçebilirsiniz.</li>
            <li>Sürpriz linki özel bir anda paylaşabilirsiniz.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Evlilik teklifi sözü kısa mı olmalı?</h3>
            <p className="text-gray-700">Kısa, net ve içten sözler teklif anında daha etkili olabilir.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Online evlilik teklifi kartı hazırlanır mı?</h3>
            <p className="text-gray-700">Evet, KartKutusu ile fotoğraf, mesaj ve müzik içeren özel teklif kartı oluşturabilirsiniz.</p>
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
