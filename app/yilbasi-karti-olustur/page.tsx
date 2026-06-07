import type { Metadata } from "next";
import SeoTemplate from "@/components/SeoTemplate";

export const metadata: Metadata = {
  title: "Yılbaşı Kartı Oluştur | Online Yeni Yıl Kartı - KartKutusu",
  description:
    "Yılbaşı ve yeni yıl için fotoğraflı, müzikli online kart oluştur. Sevdiklerinize özel yeni yıl sürprizi hazırla.",
};

export default function Page() {
  return (
    <SeoTemplate
      emoji="🎄"
      title="Yılbaşı Kartı Oluştur"
      description="Yeni yıl dileklerinizi fotoğraf, mesaj ve müzikle özel bir dijital yılbaşı kartına dönüştürün."
      steps={[
        "Kart türünü seçin",
        "Fotoğraf ekleyin",
        "Hazır mesaj seçin veya kendi mesajınızı yazın",
        "Müzik seçin veya kendi müziğinizi yükleyin",
        "Kart linkini oluşturup paylaşın",
      ]}
      benefits={[
        "Online ve hızlı kart oluşturma",
        "Fotoğraflı ve müzikli sürpriz kartlar",
        "Mobil uyumlu paylaşım linki",
        "WhatsApp ile kolay paylaşım",
      ]}
    />
  );
}
