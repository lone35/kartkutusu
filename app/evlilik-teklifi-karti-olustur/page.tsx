import type { Metadata } from "next";
import SeoTemplate from "@/components/SeoTemplate";

export const metadata: Metadata = {
  title: "Evlilik Teklifi Kartı Oluştur | Online Romantik Teklif - KartKutusu",
  description:
    "Evlilik teklifi için romantik ve kişiye özel dijital kart oluştur. Fotoğraf, mesaj ve müzikle unutulmaz teklif hazırla.",
};

export default function Page() {
  return (
    <SeoTemplate
      emoji="💍"
      title="Evlilik Teklifi Kartı Oluştur"
      description="Hayatınızın en özel sorusunu fotoğraflı, müzikli ve romantik bir dijital kart ile unutulmaz hale getirin."
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
