import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://crestaviaexecutivepartners.org/sitemap.xml",
    host: "https://crestaviaexecutivepartners.org",
  };
}