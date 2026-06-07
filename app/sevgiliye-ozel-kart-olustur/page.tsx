import type { Metadata } from "next";
import SeoTemplate from "@/components/SeoTemplate";

export const metadata: Metadata = {
  title: "Sevgiliye Özel Kart Oluştur | Romantik Online Kart - KartKutusu",
  description:
    "Sevgiliye özel fotoğraflı, müzikli ve romantik kart oluştur. Aşk dolu mesajlarla özel sürpriz kart hazırla.",
};

export default function Page() {
  return (
    <SeoTemplate
      emoji="❤️"
      title="Sevgiliye Özel Kart Oluştur"
      description="Sevgilinize özel romantik, fotoğraflı ve müzikli kart hazırlayarak duygularınızı daha etkileyici bir şekilde paylaşabilirsiniz."
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
