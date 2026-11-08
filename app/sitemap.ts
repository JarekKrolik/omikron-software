import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://omikron-software.pl/",
      lastModified: "2026-11-08",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
