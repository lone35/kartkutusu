import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_ID = "G-G6B0PE07ZC";

export const metadata: Metadata = {
  metadataBase: new URL("https://kartkutusu.com"),

  title: "KartKutusu | Fotoğraflı ve Müzikli Sürpriz Kartlar",

  description:
    "Doğum günü, sevgiliye özel, anneler günü, babalar günü ve özel günler için fotoğraflı, müzikli ve kişiye özel sürpriz kartlar oluştur.",

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    title: "KartKutusu",
    description:
      "Fotoğraflı ve müzikli kişiye özel sürpriz kartlar oluştur.",
    url: "https://kartkutusu.com",
    siteName: "KartKutusu",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KartKutusu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KartKutusu",
    description:
      "Fotoğraflı ve müzikli kişiye özel sürpriz kartlar oluştur.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}