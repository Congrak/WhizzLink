import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/componets/navbar";
import { TranslateProvider } from "@/provider/translate";
import SessionProvider from "@/provider/session";
import { Footer } from "@/componets/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = process.env.NEXT_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "WhizzLink — Free URL Shortener & QR Code Generator",
    template: "%s | WhizzLink",
  },
  description:
    "WhizzLink is a free, open-source URL shortener and QR code generator. Shorten long links instantly, create QR codes, and manage everything from your personal dashboard.",
  keywords: [
    "URL shortener",
    "link shortener",
    "QR code generator",
    "free URL shortener",
    "short link",
    "QR code",
    "open source URL shortener",
    "link management",
    "custom short links",
    "WhizzLink",
  ],
  authors: [{ name: "Rodrigo Celis", url: "https://github.com/Congrak" }],
  creator: "Rodrigo Celis",
  publisher: "WhizzLink",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "WhizzLink",
    title: "WhizzLink — Free URL Shortener & QR Code Generator",
    description:
      "Shorten long URLs and generate QR codes instantly. Free, fast and open-source.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WhizzLink — Free URL Shortener & QR Code Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhizzLink — Free URL Shortener & QR Code Generator",
    description:
      "Shorten long URLs and generate QR codes instantly. Free, fast and open-source.",
    images: ["/og-image.png"],
    creator: "@congrak",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Rodrigo Celis <https://github.com/Congrak>" />
        <GoogleTagManager gtmId={process.env.NEXT_GOOGLE_TAGS_MANAGER as string} />
        <body className={inter.className}>
          <TranslateProvider>
            <div style={{ maxWidth: "2000px", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
              <Navbar />
              {children}
              <Footer />
            </div>
          </TranslateProvider>
          <GoogleAnalytics gaId={process.env.NEXT_GOOGLE_ANALITYCS as string} />
        </body>
      </html>
    </SessionProvider>
  );
}
