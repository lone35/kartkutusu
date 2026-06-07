import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Öğretmenler Günü Mesajları | KartKutusu",
  description:
    "Öğretmene gönderilecek anlamlı, kısa ve duygusal Öğretmenler Günü mesajları. Öğretmene özel teşekkür sözleri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Öğretmenler Günü Mesajları
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Öğretmenler, hayatımıza bilgi kadar değer, emek ve ilham da katar. Öğretmenler Günü'nde içten bir teşekkür mesajı, öğretmeniniz için çok anlamlı bir hediye olabilir.
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
            href="/ogretmenler-gunu-karti-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            🎖️ Öğretmenler Günü Kartı Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Öğretmenler Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Öğretmenler Gününüz kutlu olsun.</li>
            <li>Emekleriniz için teşekkür ederiz.</li>
            <li>İyi ki varsınız öğretmenim.</li>
            <li>Bize kattığınız her şey için minnettarız.</li>
            <li>Saygı ve sevgilerimizle.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Duygusal Öğretmenler Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Hayatımıza ışık tuttuğunuz ve yolumuzu aydınlattığınız için teşekkür ederiz.</li>
            <li>Bir öğrencinin kalbine dokunmak en büyük emektir. Öğretmenler Gününüz kutlu olsun.</li>
            <li>Sabrınız, emeğiniz ve sevginiz için minnettarız.</li>
            <li>Öğrettikleriniz sadece derslerde değil, hayatımızda da yol gösteriyor.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Öğretmene Teşekkür Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Bilginiz ve sabrınız için teşekkür ederiz.</li>
            <li>Bize kattığınız değerler için minnettarız.</li>
            <li>Her zaman örnek olduğunuz için teşekkürler öğretmenim.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resmi Öğretmenler Günü Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Değerli öğretmenimizin Öğretmenler Günü'nü en içten dileklerimizle kutlarız.</li>
            <li>Eğitime sunduğunuz katkılar için teşekkür eder, saygılarımızı sunarız.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Öğretmene nasıl teşekkür mesajı yazılır?</h3>
            <p className="text-gray-700">Saygılı, içten ve emek vurgusu yapan mesajlar öğretmenler için çok anlamlıdır.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Öğretmenler Günü kartı hazırlanabilir mi?</h3>
            <p className="text-gray-700">Evet, KartKutusu ile öğretmeninize fotoğraflı ve müzikli özel bir teşekkür kartı oluşturabilirsiniz.</p>
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
