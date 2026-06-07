import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kadınlar Günü Mesajları | KartKutusu",
  description: "Kadınlar Günü Mesajları için örnek mesajlar ve sözler.",
};

export default function Page() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Kadınlar Günü Mesajları</h1>
      <p>SEO blog sayfası.</p>
      <Link href="/">Kart Oluştur</Link>
    </main>
  );
}
