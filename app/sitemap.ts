import { getAllPosts } from "@/services";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://seguros-online-next.vercel.app";
  const response = await getAllPosts();

  const blogPosts = response?.map((post: any) => {
    // console.log(`post.node.slug: ${post?.node?.slug}`);
    return {
      url: `${baseUrl}/blog/${post?.node?.slug}`,
      lastModified: new Date(post.node.createdAt),
    };
  });

  // Agregar /marcas
  // Agregar /aseguradoras

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/hogar`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/bici`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/caucion`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/art`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/comercio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/garantias`,
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
}
