import type { Metadata } from "next";
import SeoTemplate from "@/components/SeoTemplate";

export const metadata: Metadata = {
  title: "Öğretmenler Günü Kartı Oluştur | Online Öğretmene Kart - KartKutusu",
  description:
    "Öğretmenler Günü için fotoğraflı ve müzikli teşekkür kartı oluştur. Öğretmeninize özel online kart hazırlayın.",
};

export default function Page() {
  return (
    <SeoTemplate
      emoji="🎖️"
      title="Öğretmenler Günü Kartı Oluştur"
      description="Öğretmeninize emeği ve ışığı için teşekkür etmek üzere özel bir dijital Öğretmenler Günü kartı hazırlayın."
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
