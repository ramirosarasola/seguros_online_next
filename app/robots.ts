import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://segurosonline.com.ar";

  return {
    rules: {
      userAgent: "*",
      allow: ["/*"],
      disallow: ["/contratacion/*"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
