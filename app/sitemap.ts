import { getAllPosts } from '@/services';

 
export default async function sitemap() {

  const baseUrl = 'https://www.segurosonline.com.ar';
  const response = await getAllPosts();

  const blogPosts = response?.map((post: any) => {
    return {
      url: `${baseUrl}/blog/post/${post?.node?.slug}`,
      lastModified: new Date(),
    }
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...blogPosts
  ]
}