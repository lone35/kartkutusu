import type { Metadata } from "next";
import SeoTemplate from "@/components/SeoTemplate";

export const metadata: Metadata = {
  title: "Mezuniyet Kartı Oluştur | Online Tebrik Kartı - KartKutusu",
  description:
    "Mezuniyet için fotoğraflı ve müzikli tebrik kartı oluştur. Başarıyı kutlamak için özel online kart hazırla.",
};

export default function Page() {
  return (
    <SeoTemplate
      emoji="🎓"
      title="Mezuniyet Kartı Oluştur"
      description="Mezuniyet başarısını fotoğraf, mesaj ve müzikle kutlamak için kişiye özel dijital tebrik kartı oluşturun."
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
