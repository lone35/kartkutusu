import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sevgiliye Romantik Mesajlar 2026 | KartKutusu",
  description:
    "Sevgiliye gönderilecek romantik, kısa, anlamlı ve duygusal aşk mesajları. Sevgilinize özel kart hazırlamak için mesaj örnekleri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Sevgiliye Romantik Mesajlar
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Sevgiliye romantik mesaj yazmak bazen zor olabilir. Duyguları doğru kelimelerle anlatmak, sevdiğiniz kişiye kendini özel hissettirir. Bu sayfada kısa aşk mesajlarından uzun romantik sözlere kadar farklı seçenekler bulabilirsiniz.
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
            href="/sevgiliye-ozel-kart-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            ❤️ Sevgiliye Özel Kart Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Romantik Mesajlar</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Kalbimin en güzel yeri sensin.</li>
            <li>Sen yanımdayken dünya daha güzel.</li>
            <li>İyi ki varsın sevgilim.</li>
            <li>Her gün seni daha çok seviyorum.</li>
            <li>Sen benim en güzel şansımsın.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Duygusal Aşk Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Sen hayatıma girdiğinden beri her şey daha anlamlı. Kalbimin en özel yerinde hep sen varsın.</li>
            <li>Gözlerine baktığımda huzuru, sesini duyduğumda mutluluğu buluyorum.</li>
            <li>Seninle geçen her an, hayatımın en güzel hediyesi gibi.</li>
            <li>Kalbim seni seçti ve ben bu seçimden her gün daha çok mutluyum.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Uzun Romantik Mesajlar</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Bazen bir insanın varlığı bile hayata umut verir. Sen benim için tam olarak böylesin. İyi ki hayatımdasın, iyi ki kalbimdesin.</li>
            <li>Seninle aynı hayali kurmak, aynı yolda yürümek ve aynı gülümsemeyi paylaşmak bana dünyadaki en güzel hisleri yaşatıyor.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sevgiliye Günaydın / İyi Geceler Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Günaydın sevgilim, bugün de aklımda sen varsın.</li>
            <li>İyi geceler kalbimin sahibi, rüyaların en güzeli seninle olsun.</li>
            <li>Yeni gün sana mutluluk getirsin, ben hep yanında olayım.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Sevgiliye romantik mesaj nasıl yazılır?</h3>
            <p className="text-gray-700">Samimi, doğal ve kişisel detay içeren mesajlar daha etkileyicidir. Ortak anılarınızdan bahsetmek mesajı özel kılar.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Sevgiliye özel kart nasıl yapılır?</h3>
            <p className="text-gray-700">KartKutusu ile fotoğraf, romantik mesaj ve müzik ekleyerek sevgiliye özel online kart oluşturabilirsiniz.</p>
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
