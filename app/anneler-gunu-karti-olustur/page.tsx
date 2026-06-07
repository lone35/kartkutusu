import type { Metadata } from "next";
import SeoTemplate from "@/components/SeoTemplate";

export const metadata: Metadata = {
  title: "Anneler Günü Kartı Oluştur | Online Anneye Özel Kart - KartKutusu",
  description:
    "Anneler Günü için fotoğraflı, müzikli ve duygusal kart oluştur. Annenize özel online kart hazırlayın.",
};

export default function Page() {
  return (
    <SeoTemplate
      emoji="👩"
      title="Anneler Günü Kartı Oluştur"
      description="Annenize sevginizi göstermek için fotoğraflı, mesajlı ve müzikli özel bir Anneler Günü kartı hazırlayın."
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
