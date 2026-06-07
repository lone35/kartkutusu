import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yeni Yıl Mesajları | KartKutusu",
  description: "Yeni Yıl Mesajları için örnek mesajlar ve sözler.",
};

export default function Page() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Yeni Yıl Mesajları</h1>
      <p>SEO blog sayfası.</p>
      <Link href="/">Kart Oluştur</Link>
    </main>
  );
}
