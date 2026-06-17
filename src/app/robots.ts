import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/api/auth/"],
    },
    sitemap: "https://whizzlink.vercel.app/sitemap.xml",
  };
}
