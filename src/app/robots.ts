import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/api/auth/"],
    },
    sitemap: `${process.env.NEXT_URL}sitemap.xml`,
  };
}
