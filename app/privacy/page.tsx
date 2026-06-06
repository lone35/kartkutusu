export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6">
      <section className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-xl border border-rose-100 p-6 md:p-10">
        <a href="/" className="text-rose-600 font-bold hover:underline">
          ← Ana sayfaya dön
        </a>

        <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-4">
          Gizlilik Politikası
        </h1>

        <p className="text-gray-600 mb-8">Son güncelleme: 6 Haziran 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            KartKutusu, kullanıcıların özel günler için fotoğraflı, mesajlı ve
            müzikli dijital kartlar oluşturmasını sağlayan bir web servisidir.
            Bu gizlilik politikası, KartKutusu üzerinden hangi bilgilerin
            işlendiğini ve bu bilgilerin nasıl kullanıldığını açıklar.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Toplanan Bilgiler</h2>
          <p>
            Kart oluştururken ad, mesaj, fotoğraf ve isteğe bağlı olarak müzik
            dosyası gibi bilgiler girilebilir. Bu bilgiler yalnızca oluşturulan
            kartın çalışması ve paylaşılabilir hale gelmesi için kullanılır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Dosya Yüklemeleri</h2>
          <p>
            Kullanıcı tarafından yüklenen fotoğraf ve müzik dosyaları, kartın
            görüntülenebilmesi için üçüncü taraf dosya depolama servislerinde
            saklanabilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Analitik Veriler</h2>
          <p>
            Site performansını ve ziyaretçi davranışlarını anlamak için Google
            Analytics gibi analiz araçları kullanılabilir. Bu veriler genel
            kullanım istatistiklerini anlamak için kullanılır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Bilgilerin Paylaşımı</h2>
          <p>
            Kullanıcıların kart oluşturmak için girdiği bilgiler üçüncü kişilere
            satılmaz. Ancak kart bağlantısını paylaşan kullanıcı, bağlantıya
            sahip kişilerin kartı görüntüleyebileceğini kabul eder.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Veri Güvenliği</h2>
          <p>
            KartKutusu, kullanıcı verilerinin güvenliği için makul teknik
            önlemler almaya çalışır. Ancak internet üzerinden yapılan hiçbir
            veri aktarımının tamamen risksiz olmadığı unutulmamalıdır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">İletişim</h2>
          <p>
            Gizlilik politikasıyla ilgili sorularınız için iletişim sayfası
            üzerinden bize ulaşabilirsiniz.
          </p>
        </div>
      </section>
    </main>
  );
}
