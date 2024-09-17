import { getAllBrands, getAllCompanies, getAllPosts } from "@/services";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://seguros-online-next.vercel.app";
  const posts = await getAllPosts();

  const brands = await getAllBrands();
  const companies = await getAllCompanies();

  const blogPosts = posts?.map((post: any) => {
    // console.log(`post.node.slug: ${post?.node?.slug}`);
    return {
      url: `${baseUrl}/blog/${post?.node?.slug}`,
      lastModified: new Date(post.node.createdAt),
    };
  });

  const brandsPosts = brands?.map((brand: any) => {
    return {
      url: `${baseUrl}/${brand?.slug}`,
      lastModified: new Date(),
    };
  });

  const companiesPosts = companies?.map((company: any) => {
    return {
      url: `${baseUrl}/aseguradoras/${company?.slug}`,
      lastModified: new Date(),
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
    ...brandsPosts,
    ...companiesPosts,
  ];
}
