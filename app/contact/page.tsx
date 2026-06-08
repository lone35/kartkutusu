export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6">
      <section className="max-w-3xl mx-auto bg-white/90 rounded-3xl shadow-xl border border-rose-100 p-6 md:p-10">
        <a href="/" className="text-rose-600 font-bold hover:underline">
          ← Ana sayfaya dön
        </a>

        <div className="text-center">
          <div className="text-7xl mt-8 mb-4">🎁</div>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            İletişim
          </h1>

          <p className="text-gray-700 leading-relaxed mb-8">
            KartKutusu ile ilgili destek, öneri, iş birliği veya ödeme süreçleri
            hakkında bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <p className="text-sm font-bold text-gray-500 mb-2">
              Hizmet Adı
            </p>

            <p className="text-xl font-extrabold text-gray-900">
              KartKutusu
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <p className="text-sm font-bold text-gray-500 mb-2">
              Hizmet Türü
            </p>

            <p className="font-bold text-gray-900">
              Fotoğraflı, müzikli ve kişisel mesajlı dijital sürpriz kart
              oluşturma hizmeti
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <p className="text-sm font-bold text-gray-500 mb-2">
              Hizmet Bedeli
            </p>

            <p className="font-extrabold text-rose-600 text-2xl">
              19,90 TL / Kart
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <p className="text-sm font-bold text-gray-500 mb-2">
              Web Sitesi
            </p>

            <p className="font-bold text-gray-900">
              https://kartkutusu.com
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <p className="text-sm font-bold text-gray-500 mb-2">
              E-posta
            </p>

            <a
              href="mailto:richierichh035@gmail.com"
              className="text-xl font-extrabold text-rose-600 hover:underline break-all"
            >
              richierichh035@gmail.com
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-8 text-center">
          Taleplerinize en kısa sürede dönüş yapılacaktır.
        </p>
      </section>
    </main>
  );
}
