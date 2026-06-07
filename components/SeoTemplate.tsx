import Link from "next/link";

type SeoTemplateProps = {
  emoji: string;
  title: string;
  description: string;
  steps: string[];
  benefits: string[];
  ctaText?: string;
};

export default function SeoTemplate({
  emoji,
  title,
  description,
  steps,
  benefits,
  ctaText = "🎁 Hemen Kart Oluştur",
}: SeoTemplateProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <a href="/" className="inline-flex justify-center mb-6">
            <img src="/logo.svg" alt="KartKutusu" className="h-24 w-auto" />
          </a>

          <div className="text-7xl mb-4">{emoji}</div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            {title}
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/90 rounded-3xl shadow-xl border border-rose-100 p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              Nasıl Oluşturulur?
            </h2>
            <ul className="space-y-3 text-gray-700">
              {steps.map((step) => (
                <li key={step} className="flex gap-2">
                  <span>✅</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/90 rounded-3xl shadow-xl border border-rose-100 p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
              Neden KartKutusu?
            </h2>
            <ul className="space-y-3 text-gray-700">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span>🎁</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white/90 rounded-3xl shadow-xl border border-rose-100 p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            Dakikalar İçinde Kişiye Özel Kart Hazırla
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Fotoğrafını ekle, mesajını yaz, müziğini seç ve sevdiklerinle
            paylaşabileceğin özel kart linkini hemen oluştur.
          </p>
          <Link
            href="/"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition"
          >
            {ctaText}
          </Link>
        </div>
      </section>
    </main>
  );
}
