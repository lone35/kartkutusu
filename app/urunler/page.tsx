export default function UrunlerPage() {
  const urunler = [
    "Doğum Günü Kartı",
    "Sevgiliye Özel Kart",
    "Evlilik Teklifi Kartı",
    "Yeni Bebek Kartı",
    "Mezuniyet Kartı",
    "Yılbaşı Kartı",
    "Anneler Günü Kartı",
    "Babalar Günü Kartı",
    "Kadınlar Günü Kartı",
    "Öğretmenler Günü Kartı",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-4">
          🎁 Dijital Kart Ürünleri
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Fotoğraf, müzik ve kişisel mesaj ile hazırlanan dijital sürpriz kartlar.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {urunler.map((urun) => (
            <div
              key={urun}
              className="bg-white rounded-3xl p-6 shadow-xl border border-rose-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {urun}
              </h2>

              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✅ Fotoğraf ekleme</li>
                <li>✅ Kişisel mesaj</li>
                <li>✅ Müzik ekleme</li>
                <li>✅ Paylaşılabilir özel link</li>
              </ul>

              <div className="text-center">
                <p className="text-4xl font-extrabold text-rose-600 mb-4">
                  19,90 TL
                </p>

                <a
                  href="/"
                  className="inline-block rounded-2xl bg-rose-600 px-6 py-3 font-bold text-white hover:bg-rose-700"
                >
                  Satın Al
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}