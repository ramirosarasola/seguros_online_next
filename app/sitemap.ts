import { getAllBrands, getAllCompanies, getAllPosts } from "@/services";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://segurosonline.com.ar";
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
      url: `${baseUrl}/seguros-para-hogar`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/seguros-para-bici`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/seguros-de-caucion`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/seguros-de-art`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/seguros-para-comercio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/garantia-de-alquiler`,
      lastModified: new Date(),
    },
    ...blogPosts,
    ...brandsPosts,
    ...companiesPosts,
  ];
}
