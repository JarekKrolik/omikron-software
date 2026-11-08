import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://omikron-software.pl/sitemap.xml",
    host: "https://omikron-software.pl",
  };
}
