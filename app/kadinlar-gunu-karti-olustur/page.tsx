import type { Metadata } from "next";
import SeoTemplate from "@/components/SeoTemplate";

export const metadata: Metadata = {
  title: "Kadınlar Günü Kartı Oluştur | Online 8 Mart Kartı - KartKutusu",
  description:
    "Kadınlar Günü için fotoğraflı ve müzikli kutlama kartı oluştur. 8 Mart için özel online kart hazırla.",
};

export default function Page() {
  return (
    <SeoTemplate
      emoji="💐"
      title="Kadınlar Günü Kartı Oluştur"
      description="8 Mart Kadınlar Günü için anlamlı, fotoğraflı ve müzikli bir kutlama kartı hazırlayın."
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
