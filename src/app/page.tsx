import { Home } from "../componets/home";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "WhizzLink",
  url: "https://whizzlink.vercel.app",
  description:
    "Free URL shortener and QR code generator. Shorten long links instantly and create QR codes with a single click.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Rodrigo Celis",
    url: "https://github.com/Congrak",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Home />
      </main>
    </>
  );
}
