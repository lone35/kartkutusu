export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6">
      <section className="max-w-3xl mx-auto bg-white/90 rounded-3xl shadow-xl border border-rose-100 p-6 md:p-10 text-center">
        <a href="/" className="text-rose-600 font-bold hover:underline">
          ← Ana sayfaya dön
        </a>

        <div className="text-7xl mt-8 mb-4">🎁</div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          İletişim
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8">
          KartKutusu ile ilgili öneri, destek talebi veya iş birliği için
          aşağıdaki e-posta adresinden bizimle iletişime geçebilirsiniz.
        </p>

        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
          <p className="text-sm font-bold text-gray-500 mb-2">E-posta</p>

          <a
            href="mailto:richierichh035@gmail.com"
            className="text-xl font-extrabold text-rose-600 hover:underline break-all"
          >
            richierichh035@gmail.com
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          En kısa sürede dönüş yapmaya çalışacağız.
        </p>
      </section>
    </main>
  );
}
