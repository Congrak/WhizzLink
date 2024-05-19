import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/componets/navbar";
import { TranslateProvider } from "@/provider/translate";
import SessionProvider from "@/provider/session";
import { Footer } from "@/componets/footer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WhizzLink",
  description: "Easy way to short links",
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
            <div style={{ maxWidth: "2000px" }}>
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
