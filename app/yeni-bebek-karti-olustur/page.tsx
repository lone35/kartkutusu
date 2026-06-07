import type { Metadata } from "next";
import SeoTemplate from "@/components/SeoTemplate";

export const metadata: Metadata = {
  title: "Yeni Bebek Kartı Oluştur | Hoş Geldin Bebek Kartı - KartKutusu",
  description:
    "Yeni bebek için fotoğraflı ve müzikli hoş geldin kartı oluştur. Minik mucize için özel dijital kart hazırla.",
};

export default function Page() {
  return (
    <SeoTemplate
      emoji="👶"
      title="Yeni Bebek Kartı Oluştur"
      description="Ailenize katılan minik mucize için fotoğraflı, mesajlı ve müzikli özel bir yeni bebek kartı hazırlayın."
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
