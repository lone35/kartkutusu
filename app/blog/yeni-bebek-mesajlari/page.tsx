import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yeni Bebek Mesajları | KartKutusu",
  description:
    "Yeni doğan bebek için hoş geldin mesajları, tebrik sözleri ve aileye gönderilecek anlamlı yeni bebek mesajları.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Yeni Bebek Mesajları
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Yeni bir bebeğin dünyaya gelişi aile için tarifsiz bir mutluluktur. Bu güzel haberi kutlamak için sıcak ve içten bir mesaj göndermek çok anlamlı olabilir.
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
            href="/yeni-bebek-karti-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            👶 Yeni Bebek Kartı Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Yeni Bebek Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Hoş geldin minik mucize.</li>
            <li>Allah analı babalı büyütsün.</li>
            <li>Sağlıkla büyüsün.</li>
            <li>Ailenize mutluluk getirsin.</li>
            <li>Minik bebeğe güzel bir ömür dilerim.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Duygusal Yeni Bebek Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Küçücük ellerinle kocaman mutluluklar getirdin. Hoş geldin minik kalp.</li>
            <li>Ailenize katıldığın ilk günden beri her şey daha güzel oldu.</li>
            <li>Sağlıkla, mutlulukla ve sevgiyle büyümen dileğiyle.</li>
            <li>Hayatınızın en güzel mucizesi dünyaya geldi.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Anne Babaya Tebrik Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Bu güzel mutluluğunuz daim olsun.</li>
            <li>Yeni anne babaya sağlık, sabır ve mutluluk dilerim.</li>
            <li>Ailenizin yeni üyesi hayırlı olsun.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Yeni Doğan Bebek İçin Dualı Mesajlar</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Allah sağlıklı, huzurlu ve güzel bir ömür nasip etsin.</li>
            <li>Allah analı babalı büyütsün.</li>
            <li>Minik yavrunuz hayırlı ve sağlıklı olsun.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Yeni bebek mesajı nasıl yazılır?</h3>
            <p className="text-gray-700">Sağlık, mutluluk ve iyi dilek içeren samimi mesajlar tercih edilebilir.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Yeni bebek kartı yapılabilir mi?</h3>
            <p className="text-gray-700">Evet, KartKutusu ile fotoğraflı ve müzikli yeni bebek kartı oluşturabilirsiniz.</p>
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
