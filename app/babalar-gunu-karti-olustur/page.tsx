import type { Metadata } from "next";
import SeoTemplate from "@/components/SeoTemplate";

export const metadata: Metadata = {
  title: "Babalar Günü Kartı Oluştur | Online Babaya Özel Kart - KartKutusu",
  description:
    "Babalar Günü için fotoğraflı ve müzikli kart oluştur. Babanıza özel online tebrik kartı hazırlayın.",
};

export default function Page() {
  return (
    <SeoTemplate
      emoji="👨"
      title="Babalar Günü Kartı Oluştur"
      description="Babanıza olan sevginizi fotoğraf, mesaj ve müzikle hazırlanan özel bir dijital kartla gösterin."
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
