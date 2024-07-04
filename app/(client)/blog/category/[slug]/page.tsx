import { getPostsByCategory, getCategories } from "@/services";
import { Spinner } from "@/components/ui/spinner.component";
import { notFound } from "next/navigation";
import { Categories, PostCard } from "../../components";

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

  return (
    <section className="mx-auto px-4 md:px-16 mb-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-8">
          <h1 className="text-3xl font-semibold mb-8">{`Posts in ${params.slug}`}</h1>
          {posts.map((post: any) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="col-span-1 md:col-span-4">
          <div className="relative md:sticky top-8">
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </section>
  );
}
