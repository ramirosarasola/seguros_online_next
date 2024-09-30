import { getAllPosts, getPostDetails } from "@/services";
import { Author, Categories, PostDetail, PostWidget } from "../../components";
import { GoBackButton } from "../../components/go-back-button.componen";
import { PageWrapper } from "@/components/ui/page-wrapper";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostDetails(params.slug);
  return {
    metadataBase: new URL("https://segurosonline.com.ar"),
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    title: `Blog - ${post?.title}`,
    description: post?.excerpt,
    robots: "index, follow",
    author: "Seguros Online",
    publisher: "Seguros Online",
    keywords: "seguros, online, cotizador, cotizacion, seguro, autos, vida",
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      type: "website",
      siteName: "Seguros Online",
      url: `https://segurosonline.com.ar/blog/${params.slug}`,
      images: [
        {
          url: post?.featuredImage?.url,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  try {
    const response = await getAllPosts();

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await response.json();

    if (!Array.isArray(posts)) {
      throw new Error("Invalid posts data");
    }

    if (posts.length === 0) {
      return [];
    }

    return posts.map((post: any) => ({
      slug: post.node.slug,
    }));
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export const revalidate = 60;
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostDetails(params.slug);

  if (!post) {
    return notFound();
  }

  const formatSlug = (slug: string) => {
    // capitalize every word in the slug
    const formattedSlug = slug.replace(/-/g, " ");
    return formattedSlug
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <PageWrapper>
      <section className="mx-auto px-4 md:px-16 mb-8 py-10">
        <div className="w-full flex justify-start items-center gap-4">
          <GoBackButton />
          <h1 className="text-3xl font-semibold my-8">{`${formatSlug(
            params.slug
          )}`}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="col-span-1 md:col-span-8">
            <PostDetail post={post} />
            {/* <Author author={post.author} /> */}
            {/* <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} /> */}
          </div>
          <div className="col-span-1 md:col-span-4">
            <div className="relative md:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map(
                  (category: any) => category.slug
                )}
              />
              <Categories categories={post.categories} />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
