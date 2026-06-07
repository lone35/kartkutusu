import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mezuniyet Tebrik Mesajları | KartKutusu",
  description:
    "Mezuniyet için tebrik mesajları, başarı sözleri ve anlamlı kutlama mesajları. Mezunlara özel kart fikirleri.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <a href="/" className="inline-flex mb-8">
          <img src="/logo.svg" alt="KartKutusu" className="h-20 w-auto" />
        </a>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Mezuniyet Tebrik Mesajları
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Mezuniyet, emeklerin karşılığının alındığı özel bir dönüm noktasıdır. Bu başarıyı kutlamak için içten bir tebrik mesajı veya kişiye özel bir kart güzel bir hatıra olabilir.
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
            href="/mezuniyet-karti-olustur"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            🎓 Mezuniyet Kartı Oluştur
          </Link>
        </div>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kısa Mezuniyet Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Mezuniyetin kutlu olsun.</li>
            <li>Yolun açık olsun.</li>
            <li>Başarıların daim olsun.</li>
            <li>Yeni hayatında başarılar dilerim.</li>
            <li>Gurur duyuyoruz.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Duygusal Mezuniyet Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Emeklerinin karşılığını aldığın bu özel günde seninle gurur duyuyoruz.</li>
            <li>Bugün bir son değil, yepyeni bir başlangıç. Hayallerinin peşinden git.</li>
            <li>Azmin ve emeğin hepimize ilham oldu.</li>
            <li>Yeni yolun başarı, umut ve mutlulukla dolu olsun.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Arkadaşa Mezuniyet Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Beraber nice güzel başarıları kutlamak dileğiyle.</li>
            <li>Başardın dostum, seninle gurur duyuyorum.</li>
            <li>Yeni hayatında her şey gönlünce olsun.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aileden Mezuniyet Mesajları</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            <li>Seninle gurur duyuyoruz evladım.</li>
            <li>Başarının devamını dileriz.</li>
            <li>Emeklerin ve azmin bizi çok mutlu etti.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sık Sorulan Sorular
          </h2>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Mezuniyet mesajı nasıl yazılır?</h3>
            <p className="text-gray-700">Başarıyı kutlayan, gelecek için iyi dilekler içeren ve samimi mesajlar tercih edilebilir.</p>
          </div>

          <div className="border-b border-rose-100 pb-4 mb-4">
            <h3 className="font-bold text-gray-900 mb-2">Mezuniyet kartı online hazırlanır mı?</h3>
            <p className="text-gray-700">Evet, KartKutusu ile fotoğraflı ve müzikli mezuniyet kartı oluşturabilirsiniz.</p>
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
