import { getPostsByCategory, getCategories } from "@/services";
import { Spinner } from "@/components/ui/spinner.component";
import { notFound } from "next/navigation";
import { Categories, PostCard } from "../../components";
import { GoBackButton } from "../../components/go-back-button.componen";
import { PageWrapper } from "@/components/ui/page-wrapper";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category: any) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: any) {
  const posts = await getPostsByCategory(params.slug);
  const categories = await getCategories();

  if (!posts || posts.length === 0) {
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
      <section className="px-4 md:px-16 py-10 min-h-[calc(100vh-96px)]">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:col-span-8 col-span-1 grid gap-8">
            <div className="w-full flex justify-start items-center gap-4">
              <GoBackButton />
              <h1 className="text-3xl font-semibold my-8">{`${formatSlug(
                params.slug
              )}`}</h1>
            </div>
            <PostCard post={posts[0]} />

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {posts.map((post: any, index: number) => {
                if (index !== 0) return <PostCard key={index} post={post} />;
              })}
            </div>
          </div>
          <div className="md:col-span-4 col-span-1">
            <div className="md:sticky relative top-8">
              {/* <Suspense fallback={<Spinner />}>
                  <PostWidget />
                </Suspense> */}
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
