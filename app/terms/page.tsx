export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6">
      <section className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-xl border border-rose-100 p-6 md:p-10">
        <a href="/" className="text-rose-600 font-bold hover:underline">
          ← Ana sayfaya dön
        </a>

        <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-4">
          Kullanım Şartları
        </h1>

        <p className="text-gray-600 mb-8">Son güncelleme: 8 Haziran 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            KartKutusu'nu kullanarak aşağıdaki kullanım şartlarını kabul etmiş
            sayılırsınız. Lütfen hizmeti kullanmadan önce bu şartları okuyunuz.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Hizmetin Amacı</h2>
          <p>
            KartKutusu, kullanıcıların özel günler için fotoğraflı, müzikli ve
            kişisel mesajlı dijital tebrik ve sürpriz kartları oluşturmasına
            yardımcı olan bir platformdur.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Hizmet Bedeli</h2>
          <p>
            KartKutusu üzerinden oluşturulan dijital sürpriz kart hizmeti kart
            başına tek seferlik 19,90 TL olarak sunulur.
          </p>

          <p>
            Kullanıcılar kartlarını ödeme yapmadan önce ücretsiz olarak
            önizleyebilir. Paylaşılabilir kart bağlantısının aktif edilmesi için
            ödeme alınır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Kullanıcı Sorumluluğu</h2>
          <p>
            Kullanıcılar, yükledikleri fotoğraf, müzik, mesaj ve diğer içeriklerin
            yasalara, telif haklarına ve kişilik haklarına uygun olmasından
            kendileri sorumludur.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Yasaklı Kullanımlar</h2>
          <p>
            Hakaret, tehdit, yasa dışı içerik, izinsiz kişisel veri paylaşımı,
            telif hakkı ihlali veya kötüye kullanım amacı taşıyan içerikler
            oluşturulamaz.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Kart Bağlantıları</h2>
          <p>
            Oluşturulan kart bağlantıları, bağlantıya sahip kişiler tarafından
            görüntülenebilir. Bu nedenle özel veya hassas bilgilerin paylaşımı
            kullanıcının sorumluluğundadır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Dijital Ürün ve İade Politikası
          </h2>

          <p>
            KartKutusu üzerinden oluşturulan dijital sürpriz kartlar kişiye özel
            olarak hazırlanır ve dijital ortamda teslim edilir.
          </p>

          <p>
            Kart oluşturulup paylaşım bağlantısı aktif edildikten sonra hizmet
            teslim edilmiş sayılır.
          </p>

          <p>
            Kişiye özel dijital ürün niteliğinde olduğu için, kart oluşturulduktan
            ve bağlantı aktif edildikten sonra iptal veya iade yapılamaz.
          </p>

          <p>
            Ödeme gerçekleştirilmeden önce kullanıcılar kartlarını ücretsiz olarak
            önizleyebilir.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Hizmet Değişiklikleri</h2>
          <p>
            KartKutusu, hizmetlerinde değişiklik yapma, bazı özellikleri
            güncelleme veya kaldırma hakkını saklı tutar.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">Sorumluluk Reddi</h2>
          <p>
            KartKutusu, hizmetin kesintisiz veya hatasız çalışacağını garanti
            etmez. Kullanıcılar hizmeti kendi sorumluluklarıyla kullanır.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">İletişim</h2>
          <p>
            Kullanım şartlarıyla ilgili sorularınız için iletişim sayfasından
            bize ulaşabilirsiniz.
          </p>
        </div>
      </section>
    </main>
  );
}
