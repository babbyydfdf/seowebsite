import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // allow all pages
      },
    ],
    sitemap: "https://www.thillainathan.in/sitemap.xml",
  };
}
