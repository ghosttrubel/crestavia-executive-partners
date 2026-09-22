import type { MetadataRoute } from "next";

const baseUrl = "https://crestaviaexecutivepartners.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/executive-search",
    "/services/board-advisory",
    "/services/leadership-advisory",
    "/services/talent-intelligence",
    "/sectors",
    "/sectors/aerospace-defence",
    "/sectors/industrial-manufacturing",
    "/sectors/technology-digital",
    "/sectors/healthcare-life-sciences",
    "/sectors/financial-services",
    "/sectors/energy-sustainability",
    "/insights",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
  }));
}