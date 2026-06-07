import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doğum Günü Kartı Oluştur | Ücretsiz Online Kart - KartKutusu",
  description:
    "Fotoğraflı ve müzikli doğum günü kartı oluştur. Ücretsiz online doğum günü kartı hazırlayın ve sevdiklerinizle paylaşın.",
  keywords: [
    "doğum günü kartı oluştur",
    "online doğum günü kartı",
    "ücretsiz doğum günü kartı",
    "fotoğraflı doğum günü kartı",
    "kişiye özel doğum günü kartı",
  ],
};

export default function DogumGunuKartiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-4xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-center text-rose-600 mb-6">
          Doğum Günü Kartı Oluştur
        </h1>

        <p className="text-lg text-center text-gray-700 mb-10">
          KartKutusu ile ücretsiz fotoğraflı ve müzikli doğum günü kartı
          hazırlayabilir, sevdiklerinizle saniyeler içinde paylaşabilirsiniz.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Online Doğum Günü Kartı Nasıl Oluşturulur?
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>🎂 Kart şablonunu seçin</li>
            <li>📸 Fotoğraf yükleyin</li>
            <li>🎵 Müzik ekleyin</li>
            <li>💌 Mesajınızı yazın</li>
            <li>🔗 Link oluşturup paylaşın</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Neden KartKutusu?
          </h2>

          <p className="text-gray-700 mb-4">
            KartKutusu sayesinde klasik doğum günü mesajlarının ötesine
            geçebilir, fotoğraf ve müzik ekleyerek unutulmaz sürprizler
            hazırlayabilirsiniz.
          </p>

          <p className="text-gray-700">
            Hazırladığınız kartlar mobil cihazlarda, WhatsApp'ta ve sosyal
            medyada kolayca paylaşılabilir.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl font-bold transition"
          >
            🎁 Hemen Kart Oluştur
          </Link>
        </div>

      </div>
    </main>
  );
}