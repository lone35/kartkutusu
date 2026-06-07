import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
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
    "/privacy",
    "/terms",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `https://kartkutusu.com${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1 : page.includes("karti-olustur") ? 0.9 : 0.6,
  }));
}
