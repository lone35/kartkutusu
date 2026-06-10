import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",

    // SEO Sayfaları
    "/dogum-gunu-karti-olustur",
    "/sevgiliye-ozel-kart-olustur",
    "/evlilik-teklifi-karti-olustur",
    "/yeni-bebek-karti-olustur",
    "/mezuniyet-karti-olustur",
    "/yilbasi-karti-olustur",
    "/anneler-gunu-karti-olustur",
    "/babalar-gunu-karti-olustur",
    "/kadinlar-gunu-karti-olustur",
    "/ogretmenler-gunu-karti-olustur",

    // Blog Sayfaları
    "/blog/dogum-gunu-mesajlari",
    "/blog/sevgiliye-romantik-mesajlar",
    "/blog/anneler-gunu-mesajlari",
    "/blog/babalar-gunu-mesajlari",
    "/blog/ogretmenler-gunu-mesajlari",
    "/blog/kadinlar-gunu-mesajlari",
    "/blog/mezuniyet-tebrik-mesajlari",
    "/blog/yeni-bebek-mesajlari",
    "/blog/evlilik-teklifi-sozleri",
    "/blog/yeni-yil-mesajlari",

    // Diğer Sayfalar
    "/urunler",
    "/privacy",
    "/terms",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `https://kartkutusu.com${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority:
      page === ""
        ? 1
        : page.startsWith("/blog")
        ? 0.8
        : page.includes("karti-olustur")
        ? 0.9
        : 0.6,
  }));
}