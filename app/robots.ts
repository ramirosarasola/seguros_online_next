import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://segurosonline.com.ar";

  return {
    rules: {
      userAgent: "*",
      allow: ["/*"],
      disallow: ["/contratacion/*", "/_next/", "/static/", "/public/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
