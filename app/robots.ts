import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.segurosonline.com.ar";

  return {
    rules: {
      userAgent: "*",
      allow: ["/*"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
